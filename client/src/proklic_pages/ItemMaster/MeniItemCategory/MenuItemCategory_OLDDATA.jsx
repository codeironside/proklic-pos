
import * as React from 'react';
import Box from '@mui/material/Box';


import Grid from '@mui/material/Grid';
import { Paper, useTheme } from '@mui/material';
import Button from '@mui/material/Button';
import { tokens } from '../../../theme';

import { TextField } from "@mui/material";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Header from '../../../components/Header';
import { Formik } from "formik";
import * as yup from "yup";





export default function MenuItemCategory() {



    const theme = useTheme();
    const colors = tokens(theme.palette.mode);



    const checkoutSchema = yup.object().shape({
        id: yup.string().required("required"),
        name: yup.string().required("required"),
        setupLocation: yup.string().required("required"),
        dataType: yup.string().required("required"),
        groupReport: yup.string().required("required"),
    });

    const initialValues = {
        id: "",
        name: "",
        setupLocation: "",
        dataType: "",
        groupReport: "",
    };

    const handleFormSubmit = (values) => {
        // Connect to API from here
        console.log(values);
      };






    return (
        <Box m="20px">
            <Header title="Menu Item Category" subtitle="Menu Item Category" />

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
                        <Grid container spacing={2} xs={12} sx={{ mb: 3, }}>
                            <Grid item xs={12} md={4}>
                                {/*  */}
                                <TextField
                                    size="small"
                                    fullWidth
                                    variant="filled"
                                    type="text"
                                    label="ID"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.id}
                                    name="id"
                                    error={!!touched.id && !!errors.id}
                                    helperText={touched.id && errors.id}
                                    sx={{ gridColumn: "span 1", marginBottom: "5px" }}
                                />

                            </Grid>

                            <Grid item xs={12} md={4}>
                                {/*  */}
                                <TextField
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
                                    sx={{ gridColumn: "span 1", marginBottom: "5px" }}
                                />

                            </Grid>
                            <Grid item xs={12} md={4}>
                                {/*  */}
                                <TextField
                                    size="small"
                                    fullWidth
                                    variant="filled"
                                    type="text"
                                    label="Setup Location"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.setupLocation}
                                    name="setupLocation"
                                    error={!!touched.setupLocation && !!errors.setupLocation}
                                    helperText={touched.setupLocation && errors.setupLocation}
                                    sx={{ gridColumn: "span 1", marginBottom: "5px" }}
                                />


                            </Grid>
                            <Grid item xs={12} md={4}>
                            <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-helper-label1">
                                        Data Type
                                    </InputLabel>
                                    <Select
                                        labelId="demo-simple-select-helper-label1"
                                        id="demo-simple-select-helper1"
                                        // value={touch4TableCount}
                                        // label="Level"
                                        // name="level"
                                        // onChange={handleChangeTableCount}
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.dataType}
                                        label="dataType"
                                        name="dataType"
                                        error={!!touched.dataType && !!errors.dataType}
                                        helperText={touched.dataType && errors.dataType}

                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={1}>inherited</MenuItem>
                                        <MenuItem value={2}>config</MenuItem>
                                    </Select>
                                </FormControl>


                            </Grid>
                            <Grid item xs={12} md={4}>
                                {/*  */}

                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-helper-label1">
                                    Group Report
                                    </InputLabel>
                                    <Select
                                        labelId="demo-simple-select-helper-label2"
                                        id="demo-simple-select-helper2"
                                        // value={touch4GroupReort}
                                        // label="Level"
                                        // name="level"
                                        // onChange={handleChange4GroupReort}
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.groupReport}
                                        label="groupReport"
                                        name="groupReport"
                                        error={!!touched.groupReport && !!errors.groupReport}
                                        helperText={touched.groupReport && errors.groupReport}

                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={1}> 1</MenuItem>
                                        <MenuItem value={2}>2</MenuItem>
                                        <MenuItem value={3}>3</MenuItem>
                                        <MenuItem value={4}>4</MenuItem>
                                        <MenuItem value={5}>5</MenuItem>
                                        <MenuItem value={6}>6</MenuItem>
                                        <MenuItem value={7}>7</MenuItem>
                                    </Select>
                                </FormControl>



                            </Grid>
                            <Grid item xs={12} md={4}>
                                {/* <RevCenterModal /> */}
                                

                            </Grid>

                            <Grid item xs={12} md={4}>
                                <Button
                                    variant="contained"
                                    type="submit" 
                                    sx={{ mt: 3, ml: 1 }}
                                >
                                    Save Menu Item Category
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                )}
            </Formik>








        </Box>
    );
}
