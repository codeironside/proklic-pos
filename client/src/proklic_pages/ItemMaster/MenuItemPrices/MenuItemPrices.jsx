
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
import { Formik } from "formik";
import * as yup from "yup";
import Header from '../../../components/Header';





export default function MenuItemPrices() {



    const theme = useTheme();
    const colors = tokens(theme.palette.mode);



    const checkoutSchema = yup.object().shape({
        id: yup.string().required("required"),
        exp_id: yup.string().required("required"),
        name: yup.string().required("required"),
        price_sn: yup.string().required("required"),
        price: yup.string().required("required"),
        happy_hour_price: yup.string().required("required"),
        prep_cost: yup.string().required("required"),
    });

    const initialValues = {
        id: "",
        exp_id: "",
        name: "",
        price_sn: "",
        price: "",
        setupLocation: "",
        dataType: "",
        happy_hour_price: "",
        prep_cost: "",

    };

    const handleFormSubmit = (values) => {
        // Connect to API from here
        console.log(values);
      };






    return (
        <Box m="20px">
<Header title="Menu Items Prices" subtitle="Create menu items prices" />
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
                                disabled
                                    size="small"
                                    fullWidth
                                    variant="filled"
                                    type="text"
                                    label="ID from Menu Item Masters "
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.id}
                                    name="id"
                                    // error={!!touched.id && !!errors.id}
                                    // helperText={touched.id && errors.id}
                                    sx={{ gridColumn: "span 1", marginBottom: "5px" }}
                                />

                            </Grid>

                            <Grid item xs={12} md={4}>
                                {/*  */}
                                <TextField
                                disabled
                                    size="small"
                                    fullWidth
                                    variant="filled"
                                    type="text"
                                    label="Exposition S/N from Menu Item Explosion"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.exp_id}
                                    name="exp_id"
                                    // error={!!touched.exp_id && !!errors.exp_id}
                                    // helperText={touched.exp_id && errors.exp_id}
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
                                    label="Price S/N"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.price_sn}
                                    name="price_sn"
                                    error={!!touched.price_sn && !!errors.price_sn}
                                    helperText={touched.price_sn && errors.price_sn}
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
                                    label="Name from Menu Item Masters"
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
                                    label="Price "
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.price}
                                    name="price"
                                    error={!!touched.price && !!errors.price}
                                    helperText={touched.price && errors.price}
                                    sx={{ gridColumn: "span 1", marginBottom: "5px" }}
                                />

                            </Grid>



                            <Grid item xs={12} md={4}>
                            <TextField
                                    size="small"
                                    fullWidth
                                    variant="filled"
                                    type="text"
                                    label="Happy Hour Cost"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.happy_hour_price}
                                    name="happy_hour_price"
                                    error={!!touched.happy_hour_price && !!errors.happy_hour_price}
                                    helperText={touched.happy_hour_price && errors.happy_hour_price}
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
                                    label="Prep Cost"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.prep_cost}
                                    name="prep_cost"
                                    error={!!touched.prep_cost && !!errors.prep_cost}
                                    helperText={touched.prep_cost && errors.prep_cost}
                                    sx={{ gridColumn: "span 1", marginBottom: "5px" }}
                                />



                            </Grid>

                            
                            <Grid item xs={12} md={4}>
                                {/*  */}
                                <TextField
                                disabled={true}
                                    size="small"
                                    fullWidth
                                    variant="filled"
                                    type="text"
                                    label="Setup Location"
                                    // onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.setupLocation}
                                    name="setupLocation"
                                    // error={!!touched.setupLocation && !!errors.setupLocation}
                                    // helperText={touched.setupLocation && errors.setupLocation}
                                    sx={{ gridColumn: "span 1", marginBottom: "5px" }}
                                />


                            </Grid>

                            <Grid item xs={12} md={4}>
                                {/*  */}
                                <TextField
                                disabled={true}
                                    size="small"
                                    fullWidth
                                    variant="filled"
                                    type="text"
                                    label="Data Type"
                                    // onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.dataType}
                                    name="dataType"
                                    // error={!!touched.dataType && !!errors.dataType}
                                    // helperText={touched.dataType && errors.dataType}
                                    sx={{ gridColumn: "span 1", marginBottom: "5px" }}
                                />


                            </Grid>
                           

                            <Grid item xs={12} md={4}>
                                <Button
                                    variant="contained"
                                    type="submit" 
                                    sx={{ mt: 3, ml: 1 }}
                                >
                                    Save Menu Item Masters
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                )}
            </Formik>








        </Box>
    );
}



// export default 