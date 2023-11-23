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
import { barcodeData, states } from '../../../data/makeData';
import { Delete } from '@mui/icons-material';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';


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


const Barcode = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [tableData, setTableData] = useState(() => barcodeData);
  const [validationErrors, setValidationErrors] = useState({});
  const [progress, setProgress] = useState(0);


  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((oldProgress) => {
        const newProgress = Math.random() * 30;
        return Math.min(oldProgress + newProgress, 100);
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);



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
        size: 40,
      },
      {
        accessorKey: 'menuitemSN',
        header: 'Menu Item S/N',
        size: 40,
        enableEditing: false, //disable editing on this column
        enableSorting: false,

      },
      {
        accessorKey: 'menuItemList',
        header: 'Menu Items List',
        size: 120,
        enableEditing: false, //disable editing on this column
        enableSorting: false,
      },
      {
        accessorKey: 'barcodeValue',
        header: 'Barcode Value',
        size: 80,
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
      },
      {
        accessorKey: 'setup',
        header: 'Setup Location',
        size: 80,
        enableEditing: false, //disable editing on this column
        enableSorting: false,
      },
      {
        accessorKey: 'datatype',
        header: 'Data Type',
        size: 80,
        enableEditing: false, //disable editing on this column
        enableSorting: false,
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


  // SELECT DROPDOWN FOR BARCODE
  const [selectedValue, setSelectedValue] = useState('');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
    console.log(event.target.value)
  };



  return (
    <Box m="20px" >
      <Header title="Barcode" subtitle="Create Barcode" />

      <Grid container spacing={2} xs={12} sx={{ mb: 3, }}>
        <Grid item xs={12} md={4}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-helper-label12">
              Select Barcode Group
            </InputLabel>
            <Select
              labelId="demo-simple-select-helper-label12"
              id="demo-simple-select-helper12"
              onChange={(e) => handleChange(e)}
              value={selectedValue}
              label="barcode"
              name="barcode">
              <MenuItem value="none">
                <em>None</em>
              </MenuItem>
              <MenuItem selected value={"Barcode 1"}>Barcode Group 1</MenuItem>
              <MenuItem value={"Barcode 2"}>Barcode Group 2</MenuItem>
              <MenuItem value={"Barcode 3"}>Barcode Group 3</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>

      {selectedValue == "none" ? "No data" : ""}
      {selectedValue == "Barcode 1"
        ? <>
          <Box my="20px" >
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
                    color="success"
                    onClick={() => setProgress(0)}
                    variant="contained">
                    Refresh Table
                  </Button>
                </div>
              )}
            />
          </Box>
        </> : ""}
      {selectedValue == "Barcode 2" ? "Table for Barcode 2" : ""}
      {selectedValue == "Barcode 3" ? "Table for Barcode 3" : ""}




    </Box>
  )
}

export default Barcode