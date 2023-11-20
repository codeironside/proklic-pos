import React from 'react'
import { tokens } from "../../theme";
import { useLocation, useParams } from "react-router-dom";
import { Box, useTheme } from "@mui/material";

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { mockDataEMPSet } from '../../data/mockData';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';


import Header from '../../components/Header';
import { useEffect, useState } from "react";
import axios from 'axios';
// useParams


// Header
// useTheme

const EmployeeSetup = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const { id } = useParams();
  console.log(id);

  const columns = [
    {
      field: "id",
      headerName: "ID",

    },
    {
      field: "file",
      headerName: "File",
      flex: 1,

    },

    {
      field: "view",
      headerName: "View",
      // flex: 1,
      cellClassName: "name-column--cell",
      renderCell: ({ row: { view } }) => {
        return (
          <FormControlLabel
              control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            />
        );
      },
    },

    {
      field: "edit",
      headerName: "Edit",
      // flex: 1,
      cellClassName: "name-column--cell",
      renderCell: ({ row: { view } }) => {
        return (
          <FormControlLabel
              control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            />
        );
      },
    },

    {
      field: "add",
      headerName: "Add",
      // flex: 1,
      cellClassName: "name-column--cell",
      renderCell: ({ row: { add } }) => {
        return (
          <FormControlLabel
              control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            />
        );
      },
    },

    {
      field: "delete",
      headerName: "Delete",
      // flex: 1,
      cellClassName: "name-column--cell",
      renderCell: ({ row: { id } }) => {
        return (
          <FormControlLabel
              control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            />
        );
      },
    },



  ];



  const handleFormSubmit = () => {

  };



  return (
    <>
      <Box
        m="0 0 0 0"
        height="50vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.primary[900],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.primary[900],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}>


        <DataGrid
          // checkboxSelection
          rows={mockDataEMPSet}
          // columns={columns} 

          // rows={tableData}
          columns={columns}
          pageSize={12}
          components={{ Toolbar: GridToolbar }}

        />








        <Button
          variant="contained"
          onClick={handleFormSubmit}
          sx={{ mt: 3, ml: 1 }}
        >
          Save Changes
        </Button>
      </Box>
    </>
  )
}

export default EmployeeSetup