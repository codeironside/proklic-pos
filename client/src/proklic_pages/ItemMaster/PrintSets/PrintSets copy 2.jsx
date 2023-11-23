import React, { useState } from 'react'
import { Box, Typography, useTheme } from '@mui/material'

import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Paper from '@mui/material/Paper';
import { Formik } from "formik";
import * as yup from "yup";

import Header from '../../../components/Header'
import { tokens } from "../../../theme";


const PrintSets = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

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

    const [CheckEditingOptions, setCheckEditingOptions] = React.useState({
        printOnGuestBill: false,
        printOnGuestRp: false,
        printOnRed: false,
        configDevices: false,
      });
    
      const { printOnGuestBill, printOnGuestRp, printOnRed, configDevices } = CheckEditingOptions;
    
      const handleChangeCheckBox = (event) => {
        setCheckEditingOptions({
          ...CheckEditingOptions,
          [event.target.name]: event.target.checked,
        });
      };

    const handleFormSubmit = (values) => {
        // Connect to API from here
        const combinedObject = { ...values, ...CheckEditingOptions }
        console.log(combinedObject);

    };


    return (
        <Box m="20px" >
            <Header title="Print Sets" subtitle="Create Print sets" />

            <Box my="20px" >
                <React.Fragment>
                    <Paper variant="outlined" sx={{  p: { xs: 2, md: 3 } }}>
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
                                        <Grid item xs={12} md={3}>

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

                                        <Grid item xs={12} md={3}>

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



                                        <Grid item xs={12} md={3}>

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



                                        <Grid item xs={12} md={3}>

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

                                        <Grid item xs={12} md={3}>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        color="secondary"
                                                        checked={printOnGuestBill}
                                                        onChange={handleChangeCheckBox}
                                                        name="printOnGuestBill"
                                                        value="yes"
                                                    />
                                                }
                                                label="Print on guest bill"
                                            />
                                        </Grid>
                                        <Grid item xs={12} md={3}>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        color="secondary"
                                                        checked={printOnGuestRp}
                                                        onChange={handleChangeCheckBox}
                                                        name="printOnGuestRp"
                                                        value="yes"
                                                    />
                                                }
                                                label="Print on guest receipt"
                                            />
                                        </Grid>
                                        <Grid item xs={12} md={3}>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        color="secondary"
                                                        checked={printOnRed}
                                                        onChange={handleChangeCheckBox}
                                                        name="printOnRed"
                                                        value="yes"
                                                    />
                                                }
                                                label="Print in red"
                                            />
                                        </Grid>
                                        <Grid item xs={12} md={3}>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        color="secondary"
                                                        checked={configDevices}
                                                        onChange={handleChangeCheckBox}
                                                        name="configDevices"
                                                        value="yes"
                                                    />
                                                }
                                                label="List of all configured order devices"
                                            />
                                        </Grid>















                                        <Grid item xs={12} md={12}>
                                            <Button
                                                variant="contained"
                                                type="submit"
                                                size="large"
                                                color="secondary"
                                                sx={{ mx: "auto", width: 200 }}
                                            >
                                                Save Print Sets
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </form>
                            )}
                        </Formik>
                    </Paper>
                </React.Fragment>
            </Box>


        </Box>
    )
}

export default PrintSets