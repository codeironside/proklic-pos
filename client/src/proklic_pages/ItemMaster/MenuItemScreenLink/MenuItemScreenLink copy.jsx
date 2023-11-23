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
    const [btnColor, setBtnColor] = useState(null);
    const [textColor, setTextColor] = useState(null);

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


    const checkoutSchema = yup.object().shape({
        id: yup.string().required("required"),
        name: yup.string().required("required"),
        setup: yup.string().required("required"),
        datatype: yup.string().required("required"),
    });

    const initialValues = {
        id: "",
        name: "",
        setup: "",
        datatype: "",
    };



    const handleFormSubmit = (values) => {
        // Connect to API from here
        const combinedObject = { ...values, btnColor, textColor }
        console.log(combinedObject);
    };


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
                <React.Fragment>
                    <Paper variant="outlined" sx={{ p: { xs: 2, md: 3 } }}>
                        <Formik
                            onSubmit={handleFormSubmit}
                            initialValues={initialValues}
                            validationSchema={checkoutSchema}
                        >
                            {({
                                values,
                                errors,
                                touched,
                                handleBlur,
                                handleChange,
                                handleSubmit,
                            }) => (
                                <form onSubmit={handleSubmit}>
                                    <Grid container spacing={3} >
                                        <Grid item xs={3} md={3}>

                                            <TextField

                                                size="small"
                                                fullWidth
                                                variant="filled"
                                                type="text"
                                                label="ID  "
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                value={values.id}
                                                name="id"
                                                error={!!touched.id && !!errors.id}
                                                helperText={touched.id && errors.id}
                                                sx={{ gridColumn: "span 1", marginBottom: "2px" }}
                                            />

                                        </Grid>

                                        <Grid item xs={3} md={3}>

                                            <TextField
                                                // disabled
                                                size="small"
                                                fullWidth
                                                variant="filled"
                                                type="text"
                                                label="Screen Link Name"
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                value={values.name}
                                                name="name"
                                                error={!!touched.name && !!errors.name}
                                                helperText={touched.name && errors.name}
                                                sx={{ gridColumn: "span 1", marginBottom: "2px" }}
                                            />

                                        </Grid>



                                        <Grid item xs={3} md={3}>

                                            <TextField
                                                size="small"
                                                fullWidth
                                                variant="filled"
                                                type="text"
                                                label="Setup Location"
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                value={values.setup}
                                                name="setup"
                                                error={!!touched.setup && !!errors.setup}
                                                helperText={touched.setup && errors.setup}
                                                sx={{ gridColumn: "span 1", marginBottom: "2px" }}
                                            />

                                        </Grid>



                                        <Grid item xs={3} md={3}>

                                            <TextField
                                                size="small"
                                                fullWidth
                                                variant="filled"
                                                type="text"
                                                label="Data Type"
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                value={values.datatype}
                                                name="datatype"
                                                error={!!touched.datatype && !!errors.datatype}
                                                helperText={touched.datatype && errors.datatype}
                                                sx={{ gridColumn: "span 1", marginBottom: "2px" }}
                                            />

                                        </Grid>

                                        <Grid item xs={6} md={3}>
                                            <label htmlFor="btnColor">Button Color {" "}</label>
                                            <input id='btnColor' type="color" value={btnColor} onChange={e => setBtnColor(e.target.value)} />
                                        </Grid>
                                        <Grid item xs={6} md={3}>
                                            <label htmlFor="">Text Color {" "}</label>
                                            <input id='textColor' type="color" value={textColor} onChange={e => setTextColor(e.target.value)} />
                                        </Grid>
                                    

                                        <Grid item xs={12} md={12}>
                                            <Button
                                                variant="contained"
                                                type="submit"
                                                size="large"
                                                color="secondary"
                                                sx={{ mx: "auto", width: 200 }}
                                            >
                                                Save Screen Link
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </form>
                            )}
                        </Formik>
                    </Paper>
                </React.Fragment>

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
                            pageSize: 5,
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
            </Box>


        </Box>
    )
}

export default MenuItemScreenLink