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
import { condimentGpData, states } from '../../../data/makeData';
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


const CondimentGroups = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const [tableData, setTableData] = useState(() => condimentGpData);
    const [validationErrors, setValidationErrors] = useState({});
    const [progress, setProgress] = useState(0);
    const [btnColor, setBtnColor] = useState(null);
    const [textColor, setTextColor] = useState(null);

    const [open, setOpen] = React.useState(false);
    // const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    const handleOpen = () => {
        setOpen(true)
        // setOpen(false)
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


    const checkoutSchema = yup.object().shape({
        id: yup.string().required("required"),
        name: yup.string().required("required"),
        // setup: yup.string().required("required"),
        // datatype: yup.string().required("required"),
    });

    const initialValues = {
        id: "",
        name: "",
        // These data are pre-configured
        setup: "Wuse 2",
        datatype: "Boolean",
    };



    const handleFormSubmit = (values) => {
        // Connect to API from here
        const combinedObject = { ...values }
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
            <Header title="Condiment Groups" subtitle="Create Condiment Groups" />

            <Box my="20px" >
               {/* MODAL HERE */}
            <Modal
                keepMounted
                open={open}
                onClose={handleClose}
                aria-labelledby="keep-mounted-modal-title"
                aria-describedby="keep-mounted-modal-description"
            >
                <Box sx={style}>
                    <Typography id="keep-mounted-modal-title" variant="h3" component="h2" sx={{ mb: 4 }}>
                        <strong> Create Condiment Group </strong>
                    </Typography>
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
                                        <Grid item xs={12} md={12}>

                                            <TextField

                                                size="small"
                                                fullWidth
                                                variant="filled"
                                                type="text"
                                                label="S/N  "
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                value={values.id}
                                                name="id"
                                                error={!!touched.id && !!errors.id}
                                                helperText={touched.id && errors.id}
                                                sx={{ gridColumn: "span 1", marginBottom: "2px" }}
                                            />

                                        </Grid>

                                        <Grid item xs={12} md={12}>

                                            <TextField
                                                // disabled
                                                size="small"
                                                fullWidth
                                                variant="filled"
                                                type="text"
                                                label="Name"
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                value={values.name}
                                                name="name"
                                                error={!!touched.name && !!errors.name}
                                                helperText={touched.name && errors.name}
                                                sx={{ gridColumn: "span 1", marginBottom: "2px" }}
                                            />

                                        </Grid>



                                        {/* <Grid item xs={12} md={12}>

                                            <TextField
                                            disabled
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

                                        </Grid> */}



                                        {/* <Grid item xs={12} md={12}>

                                            <TextField
                                            disabled
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

                                        </Grid> */}


                                       
                                            <div style={{
                                                display: 'flex',
                                                gap: '0.5rem',
                                                marginTop: '1rem',
                                                marginLeft: '1.5rem'
                                            }}>
                                                <Button
                                                    variant="contained"
                                                    type="submit"
                                                    size="small"
                                                    color="secondary"
                                                    sx={{ mx: "auto", width: 150}}
                                                >
                                                    Save Condiment Group
                                                </Button>

                                                <Button
                                                onClick={handleClose}
                                                    variant="contained"
                                                    size="small"
                                                    color="error"
                                                    sx={{ mx: "auto"}}
                                                >
                                                    Dismiss
                                                </Button>
                                            </div>

                                        
                                    </Grid>
                                </form>
                            )}
                        </Formik>
                    </Paper>
                </Box>
            </Modal>

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
                                color="secondary"
                                onClick={handleOpen}
                                variant="contained"
                            >
                                Create Condiment Group
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
            </Box>


           


        </Box>
    )
}

export default CondimentGroups