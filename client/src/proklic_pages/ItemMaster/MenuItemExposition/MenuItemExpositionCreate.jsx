
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

import Typography from '@mui/material/Typography';
import { TextField } from "@mui/material";







const menuItemClass = []
for (let i = 1; i < 6; i++) {
    menuItemClass.push({
        id: i,
        name: 'Menu Item Class ' + i,
    })
}


const shortName = []
for (let i = 1; i < 6; i++) {
    shortName.push({
        id: i,
        name: 'Short Name ' + i,
    })
}


const RVCDistribution = []
for (let i = 1; i < 6; i++) {
    RVCDistribution.push({
        id: i,
        name: 'RVC Distribution ' + i,
    })
}

const menuItemLevel = []
for (let i = 1; i < 6; i++) {
    menuItemLevel.push({
        id: i,
        name: 'Menu Item Level ' + i,
    })
}

const subMenuLevel = []
for (let i = 1; i < 6; i++) {
    subMenuLevel.push({
        id: i,
        name: 'Sub Menu Level' + i,
    })
}

const menuLookup = []
for (let i = 1; i < 6; i++) {
    menuLookup.push({
        id: i,
        name: 'Menu Lookup ' + i,
    })
}





export default function MenuItemExpositionCreate(props) {
    console.log(props.data)

    const [rows, setRows] = useState(props.data);

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);



    // DATA HANDLER SECTION ---------------------------------------------------
    const checkoutSchema = yup.object().shape({
        inputCount: yup.number().required("required"),
    });

    const initialValues = {
        inputCount: "",
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
                width: 3,
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
                width: 6,
            },
            {
                title: 'Name from MenuItem Master',
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
                title: 'RVC S/N',
                value: (row, { focus }) => {
                    return (
                        <Input
                            value={row.rvcDistribution}
                            focus={focus}
                            onChange={onFieldChange(row.id, 'rvcDistribution')}
                            placeholder="none"
                        />
                        
                    );
                },
                id: 'rvcDistribution',
                width: 8,
            },
            {
                title: 'Short Name',
                value: (row, { focus }) => {
                    return (
                        <Input
                            value={row.shortName}
                            focus={focus}
                            onChange={onFieldChange(row.id, 'shortName')}
                            placeholder="none"
                        />
                       
                    );
                },
                id: 'shName',
                width: 14,
            },
            {
                title: 'Menu Item Class',
                value: (row, { focus }) => {
                    return (
                        <Select
                            items={menuItemClass}
                            selectedId={row.menuItClass}
                            isOpen={focus}
                            onChange={onFieldChange(row.id, 'menuItClass')}
                            placeholder="none"
                        />
                    );
                },
                id: 'menuItClass',
                width: 12,
            },
            {
                title: 'Major Menu Level',
                value: (row, { focus }) => {
                    return (
                        <Select
                            items={menuItemLevel}
                            selectedId={row.menuItLevel}
                            isOpen={focus}
                            onChange={onFieldChange(row.id, 'menuItLevel')}
                            placeholder="none"
                        />
                    );
                },
                id: 'menuItLevel',
                width: 10,
            },
            {
                title: 'Sub Menu Level',
                value: (row, { focus }) => {
                    return (
                        <Select
                            items={subMenuLevel}
                            selectedId={row.subMnLevel}
                            isOpen={focus}
                            onChange={onFieldChange(row.id, 'subMnLevel')}
                            placeholder="none"
                        />
                    );
                },
                id: 'subMnLevel',
                width: 10,
            },
            {
                title: 'Menu Lookup',
                value: (row, { focus }) => {
                    return (
                        <Select
                            items={menuLookup}
                            selectedId={row.menulkup}
                            isOpen={focus}
                            onChange={onFieldChange(row.id, 'menulkup')}
                            placeholder="none"
                        />
                    );
                },
                id: 'menulkup',
                width: 10,
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
                            columnId === 'menuID' ||
                            columnId === 'name' ||
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

