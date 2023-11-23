import React, { useCallback, useMemo, useState, useEffect } from 'react';
import { Typography, useTheme } from '@mui/material'

import Grid from '@mui/material/Grid';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Paper from '@mui/material/Paper';
import { Formik } from "formik";
import * as yup from "yup";

import Header from '../../../components/Header'
import { tokens } from "../../../theme";
import { screenLinkData, states } from '../../../data/makeData';
import { Delete } from '@mui/icons-material';
import FormControl from '@mui/material/FormControl';
import toast, { Toaster } from 'react-hot-toast';



import { MaterialReactTable } from 'material-react-table';
import { darken } from '@mui/material';
import {
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    IconButton,
    MenuItem,
    Stack,
    TextField,
    Tooltip,
} from '@mui/material';


const MenuItemScreenLink = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const [tableData, setTableData] = useState(() => screenLinkData);
    const [validationErrors, setValidationErrors] = useState({});
    const [progress, setProgress] = useState(0);


    const [createModalOpen, setCreateModalOpen] = useState(false);
    const handleCreateNewRow = (values) => {
        tableData.push(values);
        setTableData([...tableData]);
    };

//   console.log("colorPicker", color);

        //simulate random progress for demo purposes
        useEffect(() => {
            const interval = setInterval(() => {
                setProgress((oldProgress) => {
                    const newProgress = Math.random() * 30;
                    return Math.min(oldProgress + newProgress, 100);
                });
            }, 1000);
            return () => clearInterval(interval);
        }, []);





    // PRICE SET TABLE FORMATTING
    const getCommonEditTextFieldProps = useCallback(
        (cell) => {
            return {
                error: !!validationErrors[cell.id],
                helperText: validationErrors[cell.id],
                onBlur: (event) => {
                    const isValid =
                        cell.column.id === 'email'
                            ? validateEmail(event.target.value)
                            : cell.column.id === 'age'
                                ? validateAge(+event.target.value)
                                : validateRequired(event.target.value);
                    if (!isValid) {
                        //set validation error for cell if invalid
                        setValidationErrors({
                            ...validationErrors,
                            [cell.id]: `${cell.column.columnDef.header} is required`,
                        });
                    } else {
                        //remove validation error for cell if valid
                        delete validationErrors[cell.id];
                        setValidationErrors({
                            ...validationErrors,
                        });
                    }
                },
            };
        },
        [validationErrors],
    );


    const columns = useMemo(
        () => [
            {
                accessorKey: 'id',
                header: 'ID',
                enableColumnOrdering: false,
                enableEditing: false, //disable editing on this column
                enableSorting: false,
                size: 80,
            },
            {
                accessorKey: 'name',
                header: 'Screen Link Name',
                size: 80,
                enableEditing: false, //disable editing on this column
                enableSorting: false,
                // muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
                //     ...getCommonEditTextFieldProps(cell),
                // }),
            },
   
            {
                accessorKey: 'btnColor',
                header: 'Button Color',
                size: 80,
                muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
                    ...getCommonEditTextFieldProps(cell),
                }),
            },
            {
                accessorKey: 'textColor',
                header: 'Text Color',
                size: 50,
                muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
                    ...getCommonEditTextFieldProps(cell),
                }),
            },

            {
                accessorKey: 'setup',
                header: 'Setup Location',
                size: 80,
                muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
                    ...getCommonEditTextFieldProps(cell),
                }),
            },
            {
                accessorKey: 'datatype',
                header: 'Data Type',
                size: 80,
                muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
                    ...getCommonEditTextFieldProps(cell),
                }),
            },

        ],
        [getCommonEditTextFieldProps],
    );

    const handleSaveRow = async ({ exitEditingMode, row, values }) => {
        //if using flat data and simple accessorKeys/ids, you can just do a simple assignment here.
        tableData[row.index] = values;
        //send/receive api updates here
        setTableData([...tableData]);
        exitEditingMode(); //required to exit editing mode
    };

    const handleDeleteRow = useCallback(
        (row) => {
            //send api delete request here, then refetch or update local table data for re-render
            tableData.splice(row.index, 1);
            setTableData([...tableData]);
            
        },
        [tableData],
    );


    // TABLE INPUT ERROR VALIDATION 
    const validateRequired = (value) => !!value.length;
    const validateEmail = (email) =>
        !!email.length &&
        email
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            );
    const validateAge = (age) => age >= 18 && age <= 50;


    return (
        <Box m="20px" >
            <Header title="MenuItem Screen Link" subtitle="Create MenuItem Screen Link" />

            <Box my="20px" >

                {/* PRICE SET TABLE */}
                <MaterialReactTable
                    state={{ isLoading: true, showSkeletons: true, showProgressBars: true }}
                    data={tableData ?? []}
                    enableDensityToggle={false}
                    columns={columns}
                    editingMode="row"
                    enableEditing
                    onEditingRowSave={handleSaveRow}
                    initialState={{ 
                        density: 'compact',
                        pagination: {
                            pageSize: 10,
                            pageIndex: 0
                          }
                    }}
                    muiTablePaperProps={{
                        elevation: 0,
                        sx: {
                            borderRadius: '0',
                            border: '1px dashed #FCFCFC',
                        },
                    }}
                    muiTableBodyProps={{
                        sx: (theme) => ({
                            '& tr:nth-of-type(odd)': {
                                backgroundColor: darken(theme.palette.background.default, 0.1),
                            },
                        }),
                    }}
                    muiLinearProgressProps={({ isTopToolbar }) => ({
                        color: 'secondary',
                        variant: 'determinate', //if you want to show exact progress value
                        value: progress, //value between 0 and 100
                        sx: {
                            display: isTopToolbar ? 'block' : 'none', //hide bottom progress bar
                        },
                    })}
                    renderTopToolbarCustomActions={() => (
                        <div style={{
                            display: 'flex',
                            gap: '0.5rem'
                        }}>


                            <Button
                                color="secondary"
                                onClick={() => setCreateModalOpen(true)}
                                variant="contained">
                                New menuitem screen link
                            </Button>
                            <Button
                                color="success"
                                onClick={() => setProgress(0)}
                                variant="contained">
                                Refresh Table
                            </Button>
                        </div>
                    )}
                    // renderRowActions={({ row, table }) => (
                    //     <Box sx={{ display: 'flex', gap: '1rem' }}>
                    //         <Tooltip arrow placement="right" title="Delete">
                    //             <IconButton color="error" onClick={() => handleDeleteRow(row)}>
                    //                 <Delete />
                    //             </IconButton>
                    //         </Tooltip>
                    //     </Box>
                    // )}

                />
                <CreateNewAccountModal
                    columns={columns}
                    open={createModalOpen}
                    onClose={() => setCreateModalOpen(false)}
                    onSubmit={handleCreateNewRow}
                />
            </Box>


        </Box>
    )
}

//Example of creating a mui dialog modal for creating new rows
export const CreateNewAccountModal = ({ open, columns, onClose, onSubmit }) => {
    const cancelChange = () => toast('Cancelled')

    const [values, setValues] = useState(() =>
        columns.reduce((acc, column) => {
            acc[column.accessorKey ?? ''] = '';
            return acc;
        }, {}),
    );

    const [btnCl, setBtnCl] = useState("#ffffff");
    const [textCl, setTextCl] = useState("#000000");

    const handleSubmit = () => {
        const acceptChange = () => toast.success('Successful!')
        //put your validation logic here
        const setup = "Wuse 2";
        const datatype = "Default";
        const btnColor = btnCl;
        const textColor = textCl;
        const combineValues = { ...values, setup, datatype, btnColor, textColor }
        console.log(combineValues)
        onSubmit(combineValues);
        onClose();
        acceptChange();
    };

    return (
        <Dialog open={open}>
            <DialogTitle textAlign="center">Create new MenuItem Screen Link</DialogTitle>
            <DialogContent>
                <form onSubmit={(e) => e.preventDefault()}>
                    <Stack
                        sx={{
                            width: '100%',
                            minWidth: { xs: '300px', sm: '360px', md: '400px' },
                            gap: '1.5rem',
                        }}
                    >
                        {columns.slice(0, 4).map((column, index) => {
                            if (index === 2) {
                                return (
                                    <Grid item xs={6} md={6}>
                                        <FormControl sx={{ minWidth: 400 }} size="medium">
                                        <label htmlFor="btnColor">Button Color {" "}</label>
                                            <input id='btnColor' type="color" value={btnCl} onChange={e => setBtnCl(e.target.value)} />
                                        </FormControl>
                                    </Grid>
                                )
                            }
                            else if (index === 3){
                                return (
                                    <Grid item xs={6} md={6}>
                                        <FormControl sx={{ minWidth: 400 }} size="medium">
                                        <label htmlFor="">Text Color {" "}</label>
                                            <input id='textColor' type="color" value={textCl} onChange={e => setTextCl(e.target.value)} />
                                        </FormControl>
                                    </Grid>
                                )
                            }
                            else {
                                return (
                                    <TextField
                                        key={column.accessorKey}
                                        label={column.header}
                                        name={column.accessorKey}
                                        onChange={(e) =>
                                            setValues({ ...values, [e.target.name]: e.target.value })
                                        }
                                    />
                                );
                              }
                        })}
                    </Stack>
                </form>
            </DialogContent>
            <DialogActions sx={{ p: '1.25rem' }}>
                <Button onClick={event => {cancelChange(); onClose()}}>Cancel
                </Button>
                <Button color="secondary" onClick={handleSubmit} variant="contained">
                    Create 
                    <Toaster />
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default MenuItemScreenLink