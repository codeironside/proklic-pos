
import * as React from 'react';

import Box from '@mui/material/Box';


import Grid from '@mui/material/Grid';
import { Paper, useTheme } from '@mui/material';
import Button from '@mui/material/Button';
import { tokens } from '../../../theme';


import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Formik } from "formik";
import Header from '../../../components/Header';
import * as yup from "yup";
import { useState } from 'react';
import MenuItemExpositionCreate from './MenuItemExpositionCreate';
import Typography from '@mui/material/Typography';
import { TextField } from "@mui/material";
// useState

// -----------------------------------------------------------

const groupReportItems = []
for (let i = 1; i < 6; i++) {
    groupReportItems.push({
        id: i,
        name: 'Group Report ' + i,
    })
}


const menuItemsGroup = []
for (let i = 1; i < 6; i++) {
    menuItemsGroup.push({
        id: i,
        name: 'menuItemsGroup ' + i,
    })
}


const menuItemsCategory = []
for (let i = 1; i < 6; i++) {
    menuItemsCategory.push({
        id: i,
        name: 'menuItemsCategory ' + i,
    })
}






export default function MenuItemExpositions() {



    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const [inputCount, setInputCount] = useState('');

    const initialValues = {
        inputCount: "",
        menuItemMasterData: "",
        revenueCnter: "",

    };


    const checkoutSchema = yup.object().shape({
        // inputCount: yup.number().required("required"),
        // menuItemMasterData: yup.string().required("required"),
        // revenueCnter: yup.string().required("required"),
    });



    // CHOOSHING NUMBER OF INPUT FIELD NEEDED HERE --------------------------------------------
    const [page, setPage] = useState(false);
    const [showInputForm, setShowInputForm] = useState(true);

    const handleFieldSizeSubmit = () => {
        setInputCount(inputCount);
        console.log(inputCount)
        setShowInputForm(false)
        setPage(true);
    };



    const datarows = []


    for (let i = 0; i < inputCount; i++) {
        datarows.push({
            id: i,
            menuID: '0000' + i,
            name: '',
            // menuItemCategory: 'menuItemCategory ' + i,
            // menuItemGroup: "menuItemGroup " + i,
            // groupReport: "groupReport " + i,
            setupLocation: "Maitama",
            dataType: "Inherited",
        })
    }


    // -------------------------------------------------------------------------------------------

    const handleFormSubmit = (values) => {
        // Connect to API from here
        console.log(values);
    };






    return (
        <Box m="20px">
            <Header title="Menu Items RVC Distribution" subtitle="Create menu items RVC Distribution" />


            <div >
                {page === false ?
                    <>
                        {showInputForm && <div>
                            <Formik
                                onSubmit={handleFieldSizeSubmit}
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
                                        <div>
                                            <Grid container spacing={2} xs={12} sx={{ mb: 3, }}>

                                                <Grid item xs={12} md={4}>


                                                    <TextField
                                                        size="small"
                                                        fullWidth
                                                        variant="filled"
                                                        type="number"
                                                        label="NO OF INPUT FIELD/INPUT NEEDED "
                                                        onBlur={handleBlur}
                                                        onChange={ev => setInputCount(ev.target.value)}
                                                        value={inputCount}
                                                        name="inputCount"
                                                        // error={!!touched.inputCount && !!errors.inputCount}
                                                        // helperText={touched.inputCount && errors.inputCount}
                                                        sx={{ gridColumn: "span 3", marginBottom: "5px" }}
                                                    />
                                                </Grid>

                                                <Grid item xs={12} md={4}>
                                                    <FormControl fullWidth>
                                                        <InputLabel id="demo-simple-select-helper-label12">
                                                            Menu Items Master Data
                                                        </InputLabel>
                                                        <Select
                                                            labelId="demo-simple-select-helper-label12"
                                                            id="demo-simple-select-helper12"
                                                            onBlur={handleBlur}
                                                            onChange={handleChange}
                                                            value={values.menuItemMasterData}
                                                            label="menuItemMasterData"
                                                            name="menuItemMasterData"
                                                            error={!!touched.menuItemMasterData && !!errors.menuItemMasterData}
                                                            helperText={touched.menuItemMasterData && errors.menuItemMasterData}

                                                        >
                                                            <MenuItem value="">
                                                                <em>None</em>
                                                            </MenuItem>
                                                            <MenuItem value={"Menu Items Master Data 1"}>Menu Items Master Data 1</MenuItem>
                                                            <MenuItem value={"Menu Items Master Data 2"}>Menu Items Master Data 2</MenuItem>
                                                            <MenuItem value={"Menu Items Master Data 3"}>Menu Items Master Data 3</MenuItem>
                                                        </Select>
                                                    </FormControl>


                                                </Grid>

                                                <Grid item xs={12} md={4}>
                                                    <FormControl fullWidth>
                                                        <InputLabel id="demo-simple-select-helper-label12">
                                                            Revenue Center 
                                                        </InputLabel>
                                                        <Select
                                                            labelId="demo-simple-select-helper-label12"
                                                            id="demo-simple-select-helper12"
                                                            onBlur={handleBlur}
                                                            onChange={handleChange}
                                                            value={values.revenueCnter}
                                                            label="revenueCnter"
                                                            name="revenueCnter"
                                                            error={!!touched.revenueCnter && !!errors.revenueCnter}
                                                            helperText={touched.revenueCnter && errors.revenueCnter}

                                                        >
                                                            <MenuItem value="">
                                                                <em>None</em>
                                                            </MenuItem>
                                                            <MenuItem value={"Revenue Center 1"}>Revenue Center 1</MenuItem>
                                                            <MenuItem value={"Revenue Center 2"}>Revenue Center 2</MenuItem>
                                                            <MenuItem value={"Revenue Center 3"}>Revenue Center 3</MenuItem>
                                                        </Select>
                                                    </FormControl>


                                                </Grid>
                                                <Button
                                                    // onClick={handleFieldSizeSubmit}
                                                    variant="contained"
                                                    type='submit'
                                                    sx={{ mt: 1, ml: 1 }}
                                                >
                                                    Import Data
                                                </Button>
                                            </Grid>
                                        </div>
                                    </form>
                                )}
                            </Formik>


                        </div>}
                    </>

                    :
                    <>
                        <div >
                            <MenuItemExpositionCreate data={datarows} />
                        </div>

                    </>}






            </div>


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
                                    // onBlur={handleBlur}
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
                                    label="Name from Menu Item Masters"
                                    // onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.name}
                                    name="name"
                                    // error={!!touched.name && !!errors.name}
                                    // helperText={touched.name && errors.name}
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
                                    label="Exposition S/N"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.exp_id}
                                    name="exp_id"
                                    error={!!touched.exp_id && !!errors.exp_id}
                                    helperText={touched.exp_id && errors.exp_id}
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
                                    label="Short Name"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.shortName}
                                    name="shortName"
                                    error={!!touched.shortName && !!errors.shortName}
                                    helperText={touched.shortName && errors.shortName}
                                    sx={{ gridColumn: "span 1", marginBottom: "5px" }}
                                />

                            </Grid>



                            <Grid item xs={12} md={4}>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-helper-label12">
                                        Menu Items Class
                                    </InputLabel>
                                    <Select
                                        labelId="demo-simple-select-helper-label12"
                                        id="demo-simple-select-helper12"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.menuItemClass}
                                        label="menuItemClass"
                                        name="menuItemClass"
                                        error={!!touched.menuItemClass && !!errors.menuItemClass}
                                        helperText={touched.menuItemClass && errors.menuItemClass}

                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={"Menu Items Class 1"}>Menu Items Class 1</MenuItem>
                                        <MenuItem value={"Menu Items Class 2"}>Menu Items Class 2</MenuItem>
                                        <MenuItem value={"Menu Items Class 3"}>Menu Items Class 3</MenuItem>
                                    </Select>
                                </FormControl>


                            </Grid>


                            <Grid item xs={12} md={4}>
                                <TextField
                                    size="small"
                                    fullWidth
                                    variant="filled"
                                    type="text"
                                    label="Major Menu Level "
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.majorItemLevel}
                                    name="majorItemLevel"
                                    error={!!touched.majorItemLevel && !!errors.majorItemLevel}
                                    helperText={touched.majorItemLevel && errors.majorItemLevel}
                                    sx={{ gridColumn: "span 1", marginBottom: "5px" }}
                                />


                            </Grid>

                            <Grid item xs={12} md={4}>
                                <TextField
                                    size="small"
                                    fullWidth
                                    variant="filled"
                                    type="text"
                                    label="Sub Menu Level"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.subMenuLevel}
                                    name="subMenuLevel"
                                    error={!!touched.subMenuLevel && !!errors.subMenuLevel}
                                    helperText={touched.subMenuLevel && errors.subMenuLevel}
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
                                    label="Menu Lookup"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.menuLookup}
                                    name="menuLookup"
                                    error={!!touched.menuLookup && !!errors.menuLookup}
                                    helperText={touched.menuLookup && errors.menuLookup}
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
                                    // onChange={handleChange}
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
                                    // onChange={handleChange}
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
                                    Save Menu Item RVC Distribution
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