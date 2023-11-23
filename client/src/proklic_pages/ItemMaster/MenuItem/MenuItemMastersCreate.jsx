
import * as React from 'react';

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
import MenuItemMasterManage from './MenuItemMasterManage';
import Typography from '@mui/material/Typography';
import { TextField } from "@mui/material";






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





export default function MenuItemMastersCreate(props) {
    console.log(props.data)

    const [rows, setRows] = useState(props.data);

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);



    // DATA HANDLER SECTION ---------------------------------------------------
    const checkoutSchema = yup.object().shape({
        inputCount: yup.number().required("required"),
        // id: yup.string().required("required"),
        // name: yup.string().required("required"),
        // groupReport: yup.string().required("required"),
        // menuItemCategory: yup.string().required("required"),
        // menuItemGroup: yup.string().required("required"),
    });

    const initialValues = {
        inputCount: "",
        // name: "",
        // setupLocation: "",
        // dataType: "",
        // groupReport: "",
        // menuItemCategory: "",
        // menuItemGroup: "",
    };


    const handleFormSubmit = () => {
        // Connect to API from here
        setRows(rows);
        console.log(rows)

    };



    // ROWS CONTENTS INSERTED HERE
    const initColumns = () => {
        return [

            {
                title: 'ID',
                value: (row, { focus }) => {
                    return (
                        <Input
                            value={row.id}
                            focus={focus}
                            onChange={onFieldChange(row.id, 'id')}
                        />
                    );
                },
                id: 'ID',
                width: 6,
                getCellClassName: () => "Grid__photoCell"
            },
            {
                title: 'Menu ID',
                value: (row, { focus }) => {
                    return (
                        <Input
                            value={row.menuID}
                            focus={focus}
                            onChange={onFieldChange(row.id, 'menuID')}
                            placeholder="none"
                        />
                    );
                },
                id: 'menuID',
                width: 10,
            },
            {
                title: 'Name',
                value: (row, { focus }) => {
                    return (
                        <Input
                            value={row.name}
                            focus={focus}
                            onChange={onFieldChange(row.id, 'name')}
                            placeholder="none"
                        />
                    );
                },
                id: 'name',
                width: 14,
            },
            {
                title: 'Menu Items Category',
                value: (row, { focus }) => {
                    return (
                        <Select
                            items={menuItemsCategory}
                            selectedId={row.menuItemCategory}
                            isOpen={focus}
                            onChange={onFieldChange(row.id, 'menuItemCategory')}
                            placeholder="none"
                        />
                    );
                },
                id: 'menuItemCategory',
                width: 18,
            },
            {
                title: 'Menu Items Group',
                value: (row, { focus }) => {
                    return (
                        <Select
                            items={menuItemsGroup}
                            selectedId={row.menuItemGroup}
                            isOpen={focus}
                            onChange={onFieldChange(row.id, 'menuItemGroup')}
                            placeholder="none"
                        />
                    );
                },
                id: 'menuItemGroup',
                width: 18,
            },
            {
                title: 'Group Report',
                value: (row, { focus }) => {
                    return (
                        <Select
                            items={groupReportItems}
                            selectedId={row.groupReport}
                            isOpen={focus}
                            onChange={onFieldChange(row.id, 'groupReport')}
                            placeholder="none"
                        />
                    );
                },
                id: 'groupReport',
                width: 18,
            },
            {
                title: 'Setup Location',
                value: (row, { focus }) => {
                    return (
                        <Input
                            value={row.setupLocation}
                            focus={focus}
                            onChange={onFieldChange(row.id, 'setupLocation')}

                        />
                    );
                },
                id: 'setupLocation',
                // width: 14,
            },
            {
                title: 'Data Type',
                value: (row, { focus }) => {
                    return (
                        <Input
                            value={row.dataType}
                            focus={focus}
                            onChange={onFieldChange(row.id, 'dataType')}
                        />
                    );
                },
                id: 'dataType',
                // width: 14,
            },

        ];
    }


    // COLUMMS HERE
    const [columns, setColumns] = useState(initColumns())
    const onColumnResize = (widthValues) => {
        const newColumns = [].concat(columns)
        Object.keys(widthValues).forEach((columnId) => {
            const column = columns.find(({ id }) => id === columnId);
            column.width = widthValues[columnId]
        })
        setColumns(newColumns)
    }


    // ONCHANGE METHOD
    const onFieldChange = (rowId, field) => (value) => {
        const modifiedRows = [].concat(rows);
        const row = modifiedRows.find((row) => {
            return row.id === rowId;
        });

        set(row, field, value);
        setRows(modifiedRows);
    }




    // END OF DATA HANDLER ----------------------------------------------------------










    return (
        <Box m="20px">
            <div >
                <Grid
                    columns={columns}
                    rows={rows}
                    getRowKey={row => row.id}
                    rowHeight={33}
                    disabledCellChecker={(row, columnId) => {
                        return columnId === 'ID' ||
                            columnId === 'setupLocation' ||
                            columnId === 'dataType';
                    }}
                    isColumnsResizable
                    onColumnResize={onColumnResize}
                />

                <Box>


                    <Button
                        variant="contained"
                        // type="submit"
                        sx={{ mt: 3, ml: 1 }}
                        onClick={handleFormSubmit}
                    >
                        Save Menu Item Masters
                    </Button>


                </Box>
            </div>


        </Box>
    );
}

