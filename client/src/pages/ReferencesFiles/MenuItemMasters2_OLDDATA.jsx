
import * as React from 'react';

import { Box, IconButton } from '@mui/material';


import Grid from '@mui/material/Grid';
import { Paper, useTheme } from '@mui/material';
import Button from '@mui/material/Button';
import { tokens } from '../../theme';

import { TextField } from "@mui/material";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Header from '../../components/Header';
import { Formik } from "formik";
import * as yup from "yup";
import LoupeIcon from '@mui/icons-material/Loupe';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
// useState
// useLocation





export default function MenuItemMasters() {



    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const [page, setPage] = useState(false)



    const checkoutSchema = yup.object().shape({
        id: yup.string().required("required"),
        name: yup.string().required("required"),
        groupReport: yup.string().required("required"),
        menuItemCategory: yup.string().required("required"),
        menuItemGroup: yup.string().required("required"),
    });

    const initialValues = {
        id: "",
        name: "",
        setupLocation: "",
        dataType: "",
        groupReport: "",
        menuItemCategory: "",
        menuItemGroup: "",
    };

    const handleFormSubmit = (values) => {
        // Connect to API from here
        console.log(values);
        setPage(false)
    };

    async function addMenuItem(ev) {
        ev.preventDefault();
        setPage(true)
    }








    return (
        <Box m="20px">
            <Box display="flex" justifyContent="space-between" p={2}>
                <Header title="Menu Items Master" subtitle="Create menu items" />

                <Box>
                    <Button
                        onClick={addMenuItem}
                        sx={{
                            backgroundColor: colors.primary[900],
                            color: colors.grey[100],
                            fontSize: "14px",
                            fontWeight: "bold",
                            padding: "10px 20px",
                        }}
                    >
                        <LoupeIcon sx={{ mr: "10px" }} />
                        Add NEW
                    </Button>
                </Box>
            </Box>
            {page === false ?
                <>
                    Show Data
                </>

                :
                <>
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


                                {/* FORM 0 */}
                                <Grid container spacing={1} xs={12} sx={{ mb: 3, }}>

                                    <Grid item xs={12} md={2}>
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

                                    <Grid item xs={12} md={2}>
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




                                    <Grid item xs={12} md={2}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-helper-label2">
                                                Menu Items Category
                                            </InputLabel>
                                            <Select
                                                labelId="demo-simple-select-helper-label2"
                                                id="demo-simple-select-helper2"
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                value={values.menuItemCategory}
                                                label="menuItemCategory"
                                                name="menuItemCategory"
                                                error={!!touched.menuItemCategory && !!errors.menuItemCategory}
                                                helperText={touched.menuItemCategory && errors.menuItemCategory}

                                            >
                                                <MenuItem value="">
                                                    <em>None</em>
                                                </MenuItem>
                                                <MenuItem value={"Menu Items Category 1"}>Menu Items Category 1</MenuItem>
                                                <MenuItem value={"Menu Items Category 2"}>Menu Items Category 2</MenuItem>
                                                <MenuItem value={"Menu Items Category 3"}>Menu Items Category 3</MenuItem>
                                            </Select>
                                        </FormControl>


                                    </Grid>


                                    <Grid item xs={12} md={2}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-helper-label2">
                                                Menu Items Group
                                            </InputLabel>
                                            <Select
                                                labelId="demo-simple-select-helper-label2"
                                                id="demo-simple-select-helper2"

                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                value={values.menuItemGroup}
                                                label="menuItemGroup"
                                                name="menuItemGroup"
                                                error={!!touched.menuItemGroup && !!errors.menuItemGroup}
                                                helperText={touched.menuItemGroup && errors.menuItemGroup}

                                            >
                                                <MenuItem value="">
                                                    <em>None</em>
                                                </MenuItem>
                                                <MenuItem value={`Menu Items Group 1`}>Menu Items Group 1</MenuItem>
                                                <MenuItem value={`Menu Items Group 2`}>Menu Items Group 2</MenuItem>
                                                <MenuItem value={`Menu Items Group 3`}>Menu Items Group 3</MenuItem>
                                            </Select>
                                        </FormControl>


                                    </Grid>


                                    <Grid item xs={12} md={2}>
                                        {/*  */}

                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-helper-label3">
                                                Group Report
                                            </InputLabel>
                                            <Select
                                                labelId="demo-simple-select-helper-label3"
                                                id="demo-simple-select-helper3"

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

                                    {/* <Grid item xs={12} md={4}>
       
        <TextField
            disabled={true}
            size="small"
            fullWidth
            variant="filled"
            type="text"
            label="Setup Location"
            onChange={handleChange}
            value={values.setupLocation}
            name="setupLocation"

            sx={{ gridColumn: "span 1", marginBottom: "5px" }}
        />


    </Grid>

    <Grid item xs={12} md={4}>
       
        <TextField
            disabled={true}
            size="small"
            fullWidth
            variant="filled"
            type="text"
            label="Data Type"
         
            onChange={handleChange}
            value={values.dataType}
            name="dataType"
            
            sx={{ gridColumn: "span 1", marginBottom: "5px" }}
        />


    </Grid> */}




                                </Grid>

                                {/* FORM 1 */}
                                <Grid container spacing={1} xs={12} sx={{ mb: 3, }}>

                                    <Grid item xs={12} md={2}>
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

                                    <Grid item xs={12} md={2}>
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




                                    <Grid item xs={12} md={2}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-helper-label2">
                                                Menu Items Category
                                            </InputLabel>
                                            <Select
                                                labelId="demo-simple-select-helper-label2"
                                                id="demo-simple-select-helper2"
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                value={values.menuItemCategory}
                                                label="menuItemCategory"
                                                name="menuItemCategory"
                                                error={!!touched.menuItemCategory && !!errors.menuItemCategory}
                                                helperText={touched.menuItemCategory && errors.menuItemCategory}

                                            >
                                                <MenuItem value="">
                                                    <em>None</em>
                                                </MenuItem>
                                                <MenuItem value={"Menu Items Category 1"}>Menu Items Category 1</MenuItem>
                                                <MenuItem value={"Menu Items Category 2"}>Menu Items Category 2</MenuItem>
                                                <MenuItem value={"Menu Items Category 3"}>Menu Items Category 3</MenuItem>
                                            </Select>
                                        </FormControl>


                                    </Grid>


                                    <Grid item xs={12} md={2}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-helper-label2">
                                                Menu Items Group
                                            </InputLabel>
                                            <Select
                                                labelId="demo-simple-select-helper-label2"
                                                id="demo-simple-select-helper2"

                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                value={values.menuItemGroup}
                                                label="menuItemGroup"
                                                name="menuItemGroup"
                                                error={!!touched.menuItemGroup && !!errors.menuItemGroup}
                                                helperText={touched.menuItemGroup && errors.menuItemGroup}

                                            >
                                                <MenuItem value="">
                                                    <em>None</em>
                                                </MenuItem>
                                                <MenuItem value={`Menu Items Group 1`}>Menu Items Group 1</MenuItem>
                                                <MenuItem value={`Menu Items Group 2`}>Menu Items Group 2</MenuItem>
                                                <MenuItem value={`Menu Items Group 3`}>Menu Items Group 3</MenuItem>
                                            </Select>
                                        </FormControl>


                                    </Grid>


                                    <Grid item xs={12} md={2}>
                                        {/*  */}

                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-helper-label3">
                                                Group Report
                                            </InputLabel>
                                            <Select
                                                labelId="demo-simple-select-helper-label3"
                                                id="demo-simple-select-helper3"

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

                                    {/* <Grid item xs={12} md={4}>
       
        <TextField
            disabled={true}
            size="small"
            fullWidth
            variant="filled"
            type="text"
            label="Setup Location"
            onChange={handleChange}
            value={values.setupLocation}
            name="setupLocation"

            sx={{ gridColumn: "span 1", marginBottom: "5px" }}
        />


    </Grid>

    <Grid item xs={12} md={4}>
       
        <TextField
            disabled={true}
            size="small"
            fullWidth
            variant="filled"
            type="text"
            label="Data Type"
         
            onChange={handleChange}
            value={values.dataType}
            name="dataType"
            
            sx={{ gridColumn: "span 1", marginBottom: "5px" }}
        />


    </Grid> */}




                                </Grid>

                                {/* FORM 2 */}
                                <Grid container spacing={1} xs={12} sx={{ mb: 3, }}>

                                    <Grid item xs={12} md={2}>
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

                                    <Grid item xs={12} md={2}>
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




                                    <Grid item xs={12} md={2}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-helper-label2">
                                                Menu Items Category
                                            </InputLabel>
                                            <Select
                                                labelId="demo-simple-select-helper-label2"
                                                id="demo-simple-select-helper2"
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                value={values.menuItemCategory}
                                                label="menuItemCategory"
                                                name="menuItemCategory"
                                                error={!!touched.menuItemCategory && !!errors.menuItemCategory}
                                                helperText={touched.menuItemCategory && errors.menuItemCategory}

                                            >
                                                <MenuItem value="">
                                                    <em>None</em>
                                                </MenuItem>
                                                <MenuItem value={"Menu Items Category 1"}>Menu Items Category 1</MenuItem>
                                                <MenuItem value={"Menu Items Category 2"}>Menu Items Category 2</MenuItem>
                                                <MenuItem value={"Menu Items Category 3"}>Menu Items Category 3</MenuItem>
                                            </Select>
                                        </FormControl>


                                    </Grid>


                                    <Grid item xs={12} md={2}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-helper-label2">
                                                Menu Items Group
                                            </InputLabel>
                                            <Select
                                                labelId="demo-simple-select-helper-label2"
                                                id="demo-simple-select-helper2"

                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                value={values.menuItemGroup}
                                                label="menuItemGroup"
                                                name="menuItemGroup"
                                                error={!!touched.menuItemGroup && !!errors.menuItemGroup}
                                                helperText={touched.menuItemGroup && errors.menuItemGroup}

                                            >
                                                <MenuItem value="">
                                                    <em>None</em>
                                                </MenuItem>
                                                <MenuItem value={`Menu Items Group 1`}>Menu Items Group 1</MenuItem>
                                                <MenuItem value={`Menu Items Group 2`}>Menu Items Group 2</MenuItem>
                                                <MenuItem value={`Menu Items Group 3`}>Menu Items Group 3</MenuItem>
                                            </Select>
                                        </FormControl>


                                    </Grid>


                                    <Grid item xs={12} md={2}>
                                        {/*  */}

                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-helper-label3">
                                                Group Report
                                            </InputLabel>
                                            <Select
                                                labelId="demo-simple-select-helper-label3"
                                                id="demo-simple-select-helper3"

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

                                    {/* <Grid item xs={12} md={4}>
       
        <TextField
            disabled={true}
            size="small"
            fullWidth
            variant="filled"
            type="text"
            label="Setup Location"
            onChange={handleChange}
            value={values.setupLocation}
            name="setupLocation"

            sx={{ gridColumn: "span 1", marginBottom: "5px" }}
        />


    </Grid>

    <Grid item xs={12} md={4}>
       
        <TextField
            disabled={true}
            size="small"
            fullWidth
            variant="filled"
            type="text"
            label="Data Type"
         
            onChange={handleChange}
            value={values.dataType}
            name="dataType"
            
            sx={{ gridColumn: "span 1", marginBottom: "5px" }}
        />


    </Grid> */}




                                </Grid>

                                {/* FORM 3 */}
                                <Grid container spacing={1} xs={12} sx={{ mb: 3, }}>

                                    <Grid item xs={12} md={2}>
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

                                    <Grid item xs={12} md={2}>
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




                                    <Grid item xs={12} md={2}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-helper-label2">
                                                Menu Items Category
                                            </InputLabel>
                                            <Select
                                                labelId="demo-simple-select-helper-label2"
                                                id="demo-simple-select-helper2"
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                value={values.menuItemCategory}
                                                label="menuItemCategory"
                                                name="menuItemCategory"
                                                error={!!touched.menuItemCategory && !!errors.menuItemCategory}
                                                helperText={touched.menuItemCategory && errors.menuItemCategory}

                                            >
                                                <MenuItem value="">
                                                    <em>None</em>
                                                </MenuItem>
                                                <MenuItem value={"Menu Items Category 1"}>Menu Items Category 1</MenuItem>
                                                <MenuItem value={"Menu Items Category 2"}>Menu Items Category 2</MenuItem>
                                                <MenuItem value={"Menu Items Category 3"}>Menu Items Category 3</MenuItem>
                                            </Select>
                                        </FormControl>


                                    </Grid>


                                    <Grid item xs={12} md={2}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-helper-label2">
                                                Menu Items Group
                                            </InputLabel>
                                            <Select
                                                labelId="demo-simple-select-helper-label2"
                                                id="demo-simple-select-helper2"

                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                value={values.menuItemGroup}
                                                label="menuItemGroup"
                                                name="menuItemGroup"
                                                error={!!touched.menuItemGroup && !!errors.menuItemGroup}
                                                helperText={touched.menuItemGroup && errors.menuItemGroup}

                                            >
                                                <MenuItem value="">
                                                    <em>None</em>
                                                </MenuItem>
                                                <MenuItem value={`Menu Items Group 1`}>Menu Items Group 1</MenuItem>
                                                <MenuItem value={`Menu Items Group 2`}>Menu Items Group 2</MenuItem>
                                                <MenuItem value={`Menu Items Group 3`}>Menu Items Group 3</MenuItem>
                                            </Select>
                                        </FormControl>


                                    </Grid>


                                    <Grid item xs={12} md={2}>
                                        {/*  */}

                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-helper-label3">
                                                Group Report
                                            </InputLabel>
                                            <Select
                                                labelId="demo-simple-select-helper-label3"
                                                id="demo-simple-select-helper3"

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

                                    {/* <Grid item xs={12} md={4}>
       
        <TextField
            disabled={true}
            size="small"
            fullWidth
            variant="filled"
            type="text"
            label="Setup Location"
            onChange={handleChange}
            value={values.setupLocation}
            name="setupLocation"

            sx={{ gridColumn: "span 1", marginBottom: "5px" }}
        />


    </Grid>

    <Grid item xs={12} md={4}>
       
        <TextField
            disabled={true}
            size="small"
            fullWidth
            variant="filled"
            type="text"
            label="Data Type"
         
            onChange={handleChange}
            value={values.dataType}
            name="dataType"
            
            sx={{ gridColumn: "span 1", marginBottom: "5px" }}
        />


    </Grid> */}




                                </Grid>


                                {/* FORM 4 */}
                                <Grid container spacing={1} xs={12} sx={{ mb: 3, }}>

                                    <Grid item xs={12} md={2}>
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

                                    <Grid item xs={12} md={2}>
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




                                    <Grid item xs={12} md={2}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-helper-label2">
                                                Menu Items Category
                                            </InputLabel>
                                            <Select
                                                labelId="demo-simple-select-helper-label2"
                                                id="demo-simple-select-helper2"
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                value={values.menuItemCategory}
                                                label="menuItemCategory"
                                                name="menuItemCategory"
                                                error={!!touched.menuItemCategory && !!errors.menuItemCategory}
                                                helperText={touched.menuItemCategory && errors.menuItemCategory}

                                            >
                                                <MenuItem value="">
                                                    <em>None</em>
                                                </MenuItem>
                                                <MenuItem value={"Menu Items Category 1"}>Menu Items Category 1</MenuItem>
                                                <MenuItem value={"Menu Items Category 2"}>Menu Items Category 2</MenuItem>
                                                <MenuItem value={"Menu Items Category 3"}>Menu Items Category 3</MenuItem>
                                            </Select>
                                        </FormControl>


                                    </Grid>


                                    <Grid item xs={12} md={2}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-helper-label2">
                                                Menu Items Group
                                            </InputLabel>
                                            <Select
                                                labelId="demo-simple-select-helper-label2"
                                                id="demo-simple-select-helper2"

                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                value={values.menuItemGroup}
                                                label="menuItemGroup"
                                                name="menuItemGroup"
                                                error={!!touched.menuItemGroup && !!errors.menuItemGroup}
                                                helperText={touched.menuItemGroup && errors.menuItemGroup}

                                            >
                                                <MenuItem value="">
                                                    <em>None</em>
                                                </MenuItem>
                                                <MenuItem value={`Menu Items Group 1`}>Menu Items Group 1</MenuItem>
                                                <MenuItem value={`Menu Items Group 2`}>Menu Items Group 2</MenuItem>
                                                <MenuItem value={`Menu Items Group 3`}>Menu Items Group 3</MenuItem>
                                            </Select>
                                        </FormControl>


                                    </Grid>


                                    <Grid item xs={12} md={2}>
                                        {/*  */}

                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-helper-label3">
                                                Group Report
                                            </InputLabel>
                                            <Select
                                                labelId="demo-simple-select-helper-label3"
                                                id="demo-simple-select-helper3"

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

                                    {/* <Grid item xs={12} md={4}>
       
        <TextField
            disabled={true}
            size="small"
            fullWidth
            variant="filled"
            type="text"
            label="Setup Location"
            onChange={handleChange}
            value={values.setupLocation}
            name="setupLocation"

            sx={{ gridColumn: "span 1", marginBottom: "5px" }}
        />


    </Grid>

    <Grid item xs={12} md={4}>
       
        <TextField
            disabled={true}
            size="small"
            fullWidth
            variant="filled"
            type="text"
            label="Data Type"
         
            onChange={handleChange}
            value={values.dataType}
            name="dataType"
            
            sx={{ gridColumn: "span 1", marginBottom: "5px" }}
        />


    </Grid> */}




                                </Grid>


                                {/* FORM 5 */}
                                <Grid container spacing={1} xs={12} sx={{ mb: 3, }}>

                                    <Grid item xs={12} md={2}>
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

                                    <Grid item xs={12} md={2}>
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




                                    <Grid item xs={12} md={2}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-helper-label2">
                                                Menu Items Category
                                            </InputLabel>
                                            <Select
                                                labelId="demo-simple-select-helper-label2"
                                                id="demo-simple-select-helper2"
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                value={values.menuItemCategory}
                                                label="menuItemCategory"
                                                name="menuItemCategory"
                                                error={!!touched.menuItemCategory && !!errors.menuItemCategory}
                                                helperText={touched.menuItemCategory && errors.menuItemCategory}

                                            >
                                                <MenuItem value="">
                                                    <em>None</em>
                                                </MenuItem>
                                                <MenuItem value={"Menu Items Category 1"}>Menu Items Category 1</MenuItem>
                                                <MenuItem value={"Menu Items Category 2"}>Menu Items Category 2</MenuItem>
                                                <MenuItem value={"Menu Items Category 3"}>Menu Items Category 3</MenuItem>
                                            </Select>
                                        </FormControl>


                                    </Grid>


                                    <Grid item xs={12} md={2}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-helper-label2">
                                                Menu Items Group
                                            </InputLabel>
                                            <Select
                                                labelId="demo-simple-select-helper-label2"
                                                id="demo-simple-select-helper2"

                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                value={values.menuItemGroup}
                                                label="menuItemGroup"
                                                name="menuItemGroup"
                                                error={!!touched.menuItemGroup && !!errors.menuItemGroup}
                                                helperText={touched.menuItemGroup && errors.menuItemGroup}

                                            >
                                                <MenuItem value="">
                                                    <em>None</em>
                                                </MenuItem>
                                                <MenuItem value={`Menu Items Group 1`}>Menu Items Group 1</MenuItem>
                                                <MenuItem value={`Menu Items Group 2`}>Menu Items Group 2</MenuItem>
                                                <MenuItem value={`Menu Items Group 3`}>Menu Items Group 3</MenuItem>
                                            </Select>
                                        </FormControl>


                                    </Grid>


                                    <Grid item xs={12} md={2}>
                                        {/*  */}

                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-helper-label3">
                                                Group Report
                                            </InputLabel>
                                            <Select
                                                labelId="demo-simple-select-helper-label3"
                                                id="demo-simple-select-helper3"

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

                                    {/* <Grid item xs={12} md={4}>
       
        <TextField
            disabled={true}
            size="small"
            fullWidth
            variant="filled"
            type="text"
            label="Setup Location"
            onChange={handleChange}
            value={values.setupLocation}
            name="setupLocation"

            sx={{ gridColumn: "span 1", marginBottom: "5px" }}
        />


    </Grid>

    <Grid item xs={12} md={4}>
       
        <TextField
            disabled={true}
            size="small"
            fullWidth
            variant="filled"
            type="text"
            label="Data Type"
         
            onChange={handleChange}
            value={values.dataType}
            name="dataType"
            
            sx={{ gridColumn: "span 1", marginBottom: "5px" }}
        />


    </Grid> */}




                                </Grid>


                                <Box>
                                    <Grid item xs={12} md={4}>
                                        <Button
                                            variant="contained"
                                            type="submit"
                                            sx={{ mt: 3, ml: 1 }}
                                        >
                                            Save Menu Item Masters
                                        </Button>
                                    </Grid>
                                </Box>
                            </form>


                        )}
                    </Formik>

                </>}









        </Box>
    );
}

