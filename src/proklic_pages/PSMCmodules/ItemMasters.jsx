import React from 'react'
import { tokens } from "../../theme";
import { useLocation, useParams } from "react-router-dom";
import { Box, useTheme } from "@mui/material";

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { mockDataEMC } from '../../data/mockData';
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

const ItemMasters = () => {
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

    // {
    //   field: "add_override",
    //   headerName: "Add Override",
    //   // flex: 1,
    //   cellClassName: "name-column--cell",
    //   renderCell: ({ row: { add_override } }) => {
    //     return (
    //       <FormControlLabel
    //           control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
    //         />
    //     );
    //   },
    // },

    // {
    //   field: "allow_duplicate",
    //   headerName: "Allow duplicate",
    //   // flex: 1,
    //   cellClassName: "name-column--cell",
    // },


    // {
    //   field: "level",
    //   headerName: "Level",
    //   // type: "number",
    //   headerAlign: "left",
    //   align: "left",
    // },



    // {
    //   field: "edit",
    //   headerName: "Edit",
    //   // flex: 1,
    //   renderCell: ({ row: { id } }) => {
    //     return (
    //       <Box
    //         width="80%"
    //         m="0 auto"
    //         p="5px"
    //         display="flex"
    //         justifyContent="center"
    //         backgroundColor={
    //           id === 90000
    //             ? colors.greenAccent[600]
    //             : id === 90000
    //             ? colors.greenAccent[700]
    //             : colors.greenAccent[700]
    //         }
    //         borderRadius="4px"
    //       >

    //         <Typography color={colors.grey[100]} sx={{  }}>
    //           {id}
    //         </Typography>
    //       </Box>
    //     );
    //   },
    // },


  ];



  const handleFormSubmit = () => {

  };



  return (
    <>
      <Box
        m="0 0 0 0"
        height="100vh"
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

        {/* <Typography variant="h6" gutterBottom sx={{ mb: 4 }}>
        Control
      </Typography> */}
        {/* <Typography variant="h6" gutterBottom sx={{ mb: 4 }}>
        <strong>Grant this user access to:</strong>
      </Typography> */}

        <DataGrid
          // checkboxSelection
          rows={mockDataEMC}
          // columns={columns} 

          // rows={tableData}
          columns={columns}
          pageSize={12}
          components={{ Toolbar: GridToolbar }}

        />

        {/* <Container component="main" maxWidth="lg" sx={{ mb: 4, mb: 32 }}>
          <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
            
         

          </Paper>

        </Container> */}






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

export default ItemMasters