import React, { useCallback, useMemo, useState, useEffect } from 'react';
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
import { Delete, Edit, GifBoxSharp, Save } from '@mui/icons-material';
import { data, states } from '../../../data/makeData';

// import { Box, IconButton } from '@mui/material';

import { Paper, useTheme } from '@mui/material';
// import Button from '@mui/material/Button';
import { tokens } from '../../../theme';

import Header from '../../../components/Header';
import { Formik } from "formik";
import * as yup from "yup";
import LoupeIcon from '@mui/icons-material/Loupe';
import { Link, useLocation } from 'react-router-dom';
import { Grid, Input, Select } from 'react-spreadsheet-grid'
import set from 'lodash.set';

import Typography from '@mui/material/Typography';
import toast, { Toaster } from 'react-hot-toast';



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

const datarows = []


for (let i = 0; i < 10; i++) {
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


const validateRequired = (value) => !!value.length;
const validateEmail = (email) =>
    !!email.length &&
    email
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        );
const validateAge = (age) => age >= 18 && age <= 50;




export default function ExpositionData() {

    const [createModalOpen, setCreateModalOpen] = useState(false);
    const [tableData, setTableData] = useState(() => data);
    const [validationErrors, setValidationErrors] = useState({});
    const [progress, setProgress] = useState(0);

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
                accessorKey: 'firstName',
                header: 'Menu ID',
                size: 80,
                enableEditing: false, //disable editing on this column
                enableSorting: false,
                // muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
                //     ...getCommonEditTextFieldProps(cell),
                // }),
            },
            {
                accessorKey: 'lastName',
                header: 'MenuItem Name',
                size: 80,
                enableEditing: false, //disable editing on this column
                enableSorting: false,
                // muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
                //     ...getCommonEditTextFieldProps(cell),
                // }),
            },
            {
                accessorKey: 'email',
                header: 'RVC S/N',
                muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
                    ...getCommonEditTextFieldProps(cell),
                    type: 'email',
                }),
            },

            // {
            //     accessorKey: 'age',
            //     header: 'Menu Item Group',
            //     size: 80,
            //     muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
            //         ...getCommonEditTextFieldProps(cell),
            //     }),
            // },
            // {
            //     accessorKey: 'age',
            //     header: 'Group Report',
            //     size: 80,
            //     muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
            //         ...getCommonEditTextFieldProps(cell),
            //         type: 'number',
            //     }),
            // },
            {
                accessorKey: 'lastName',
                header: 'Short Name',
                size: 80,
                muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
                    ...getCommonEditTextFieldProps(cell),
                }),
            },
              {
                accessorKey: 'state',
                header: 'MenuItem Class',
                size: 50,
                muiTableBodyCellEditTextFieldProps: {
                  select: true, //change to select for a dropdown
                  children: states.map((state) => (
                    <MenuItem key={state} value={state}>
                      {state}
                    </MenuItem>
                  )),
                },
              },
              {
                accessorKey: 'state',
                header: 'Major Menu Level',
                size: 50,
                muiTableBodyCellEditTextFieldProps: {
                  select: true, //change to select for a dropdown
                  children: states.map((state) => (
                    <MenuItem key={state} value={state}>
                      {state}
                    </MenuItem>
                  )),
                },
              },
              {
                accessorKey: 'state',
                header: 'Sub Menu Level',
                size: 50,
                muiTableBodyCellEditTextFieldProps: {
                  select: true, //change to select for a dropdown
                  children: states.map((state) => (
                    <MenuItem key={state} value={state}>
                      {state}
                    </MenuItem>
                  )),
                },
              },
              {
                accessorKey: 'state',
                header: 'Menu Lookup Level',
                size: 50,
                muiTableBodyCellEditTextFieldProps: {
                  select: true, //change to select for a dropdown
                  children: states.map((state) => (
                    <MenuItem key={state} value={state}>
                      {state}
                    </MenuItem>
                  )),
                },
              },
              {
                accessorKey: 'lastName',
                header: 'Setup Location',
                size: 80,
                muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
                    ...getCommonEditTextFieldProps(cell),
                }),
            },
            {
                accessorKey: 'lastName',
                header: 'Data Type',
                size: 80,
                muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
                    ...getCommonEditTextFieldProps(cell),
                }),
            },
        ],
        [getCommonEditTextFieldProps],
    );


    const acceptChange = () => toast.success('Successful!')
    const handleSaveRow = async ({ exitEditingMode, row, values }) => {
        //if using flat data and simple accessorKeys/ids, you can just do a simple assignment here.
        tableData[row.index] = values;
        //send/receive api updates here
        setTableData([...tableData]);
        exitEditingMode(); //required to exit editing mode
        acceptChange();
    };

    return (
        <MaterialReactTable
            state={{ isLoading: true, showSkeletons: true, showProgressBars: true }}
            data={tableData ?? []}
            enableDensityToggle={false}
            initialState={{ density: 'compact' }}
            columns={columns}
            editingMode="row"
            enableEditing
            onEditingRowSave={handleSaveRow}
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
                            Refresh Table <Toaster/>
                          </Button>
                        </div>
            )
        }
        
        />
    );

}



