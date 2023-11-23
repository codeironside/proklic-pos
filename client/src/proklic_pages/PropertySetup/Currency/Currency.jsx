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
import { currencyData, states } from '../../../data/makeData';
import { Delete } from '@mui/icons-material';


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
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #252525',
    boxShadow: 24,
    p: 4,
};


const Currency = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const [tableData, setTableData] = useState(() => currencyData);
    const [validationErrors, setValidationErrors] = useState({});
    const [progress, setProgress] = useState(0);

    const [createModalOpen, setCreateModalOpen] = useState(false);
    const handleCreateNewRow = (values) => {
        tableData.push(values);
        setTableData([...tableData]);
    };



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
                header: 'Name',
                size: 80,
                muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
                    ...getCommonEditTextFieldProps(cell),
                }),
            },
            {
                accessorKey: 'symbol',
                header: 'Symbol',
                size: 80,
                muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
                    ...getCommonEditTextFieldProps(cell),
                }),
            },
            {
                accessorKey: 'exchangeRate',
                header: 'Exchange Rate',
                size: 80,
                muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
                    ...getCommonEditTextFieldProps(cell),
                }),
            },
            {
                accessorKey: 'decimal',
                header: 'Decimal',
                size: 80,
                muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
                    ...getCommonEditTextFieldProps(cell),
                }),
            },
            {
                accessorKey: 'tolerance',
                header: 'Tolerance',
                size: 80,
                muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
                    ...getCommonEditTextFieldProps(cell),
                }),
            },
            {
                accessorKey: 'main',
                header: 'Main',
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
            <Header title="Currency" subtitle="Create currency" />

            <Box my="20px" >
              

                {/* CURRENCY TABLE */}
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
                                variant="contained"
                            >
                                Create New Currency
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
    const [values, setValues] = useState(() =>
        columns.reduce((acc, column) => {
            acc[column.accessorKey ?? ''] = '';
            return acc;
        }, {}),
    );

    const [CheckEditingOptions, setCheckEditingOptions] = React.useState({
        main1: false,
    });

    const { main1 } = CheckEditingOptions;

    const handleChangeCheckBox = (event) => {
        setCheckEditingOptions({
            ...CheckEditingOptions,
            [event.target.name]: event.target.checked,
        });
    };

    const handleSubmit = () => {
        //put your validation logic here
        const location = "Wuse 2";
        const datatype = "Default";

        
        const main = main1.toString();
        const combineValues = { ...values, main, location, datatype }
        console.log(combineValues)
        onSubmit(combineValues);
        onClose();
    };

    return (
        <Dialog open={open}>
            <DialogTitle textAlign="center">CREATE NEW CURRENCY</DialogTitle>
            <DialogContent>
                <form onSubmit={(e) => e.preventDefault()}>
                    <Stack
                        sx={{
                            width: '100%',
                            minWidth: { xs: '300px', sm: '360px', md: '400px' },
                            gap: '1.5rem',
                        }}
                    >
                        {columns.map((column, index) => {
                            if (index === 3) {
                                return (
                                    <TextField
                                        key={column.accessorKey}
                                        label={column.header}
                                        name={column.accessorKey}
                                        type='number'
                                        onChange={(e) =>
                                            setValues({ ...values, [e.target.name]: e.target.value })
                                        }
                                    />
                                )
                            }
                            else if (index === 4){
                                return (
                                    <TextField
                                        key={column.accessorKey}
                                        label={column.header}
                                        name={column.accessorKey}
                                        type='number'
                                        onChange={(e) =>
                                            setValues({ ...values, [e.target.name]: e.target.value })
                                        }
                                    />
                                )
                            }
                            else if (index === 5){
                                return (
                                    <TextField
                                        key={column.accessorKey}
                                        label={column.header}
                                        name={column.accessorKey}
                                        type='number'
                                        onChange={(e) =>
                                            setValues({ ...values, [e.target.name]: e.target.value })
                                        }
                                    />
                                )
                            }
                            else if(index === 6){
                                return (
                                    <Grid item xs={6} md={3}>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        color="secondary"
                                                        checked={main1}
                                                        onChange={handleChangeCheckBox}
                                                        name="main1"
                                                        value="yes"
                                                    />
                                                }
                                                label="Main"
                                            />
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
                <Button onClick={onClose}>Cancel</Button>
                <Button color="secondary" onClick={handleSubmit} variant="contained">
                    Create
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default Currency