import React from 'react'
import { Box, IconButton } from '@mui/material';

import { Paper, useTheme } from '@mui/material';
import Button from '@mui/material/Button';
import { tokens } from '../../../theme';

import Header from '../../../components/Header';
import { Formik } from "formik";
import * as yup from "yup";
import LoupeIcon from '@mui/icons-material/Loupe';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { Grid, Input, Select } from 'react-spreadsheet-grid'
import set from 'lodash.set';
import MenuItemMasterManage from './MenuItemGroupManage';
import Typography from '@mui/material/Typography';
import { TextField } from "@mui/material";

import MenuItemCategoryCreate from './MenuItemGroupCreate'


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

const PrintRowCategory = () => {

    const [inputCount, setInputCount] = useState('');

    const checkoutSchema = yup.object().shape({
        // inputCount: yup.number().required("required"),
    });

    const initialValues = {
        inputCount: "",
    };

    // const datarows = []
    // const myno = 5;



    // for (let i = 0; i < myno; i++) {
    //     datarows.push({
    //         id: i,
    //         name: 'Coke ' + i,
    //         menuItemCategory: 'menuItemCategory ' + i,
    //         menuItemGroup: "menuItemGroup " + i,
    //         groupReport: "groupReport " + i,
    //         setupLocation: "Maitama",
    //         dataType: "Inherited",
    //     })
    // }



    const theme = useTheme();
    const colors = tokens(theme.palette.mode);



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
            roleID: '0000' + i,
            name: '',
            // parentCategory: 'parentCategory ' + i,
            // menuItemGroup: "menuItemGroup " + i,
            // groupReport: "groupReport " + i,
            setupLocation: "",
            // dataType: "Inherited",
        })
    }


    // -------------------------------------------------------------------------------------------





    return (
        <Box m="20px">
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

                                            <Typography variant="h4" gutterBottom sx={{ mt: 0 }} color={colors.greenAccent[400]}>
                                                <strong >NO OF INPUT FIELD/INPUT NEEDED</strong>
                                            </Typography>
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
                                            <Button
                                                // onClick={handleFieldSizeSubmit}
                                                variant="contained"
                                                type='submit'
                                                sx={{ mt: 1, ml: 1 }}
                                            >
                                                Create Input
                                            </Button>
                                        </div>
                                    </form>
                                )}
                            </Formik>


                        </div>}
                    </>

                    :
                    <>
                        <div >
                            <MenuItemCategoryCreate data={datarows} />
                        </div>

                    </>}






            </div>

        </Box>
        // <div>
        //     <MenuItemCategoryCreate data={datarows} />
        // </div>
    )
}

export default PrintRowCategory