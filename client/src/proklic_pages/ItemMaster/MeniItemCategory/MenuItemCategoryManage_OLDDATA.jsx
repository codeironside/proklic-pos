import React, { useEffect, useState } from 'react'
import { Box, Typography, useTheme } from '@mui/material'
import Header from '../../../components/Header'
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../../theme";
import { mockDataTeam } from "../../../data/mockData";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import { Link } from 'react-router-dom';

const datarows = []
for (let i = 0; i < 10; i++) {
    datarows.push({
        id: i,
        // roleID: '0000' + i,
        name: 'Coke ' + i,
        menuItemCategory: 'menuItemCategory ' + i,
        menuItemGroup: "menuItemGroup " + i,
        groupReport: "groupReport " + i,
        setupLocation: "Maitama",
        dataType: "Inherited",
    })
}


const MenuItemCategoryManage = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    {
      field: "id",
      headerName: "ID",

    },

    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
      renderCell: ({ row: { name } }) => {
        return (
          <Box
            width="100%"
            mr="20px"
          >

            <Typography color={colors.grey[100]} sx={{}}>
              {name}
            </Typography>
          </Box>
        );
      },
    },


  
    {
      field: "groupReport",
      headerName: "Group Report",
      flex: 1,
      renderCell: ({ row: { groupReport } }) => {
        return (
          <Box
            width="150%"
            m="0 auto"
            p="5px"
            display="flex"
            // justifyContent="center"
            borderRadius="4px"
          >
            <Typography color={colors.grey[100]} sx={{}}>
              {groupReport}
            </Typography>
          </Box>
        );
      },
    },
    {
      field: "setupLocation",
      headerName: "Setup Location",
      flex: 1,
      renderCell: ({ row: { setupLocation } }) => {
        return (
          <Box
            width="150%"
            m="0 auto"
            p="5px"
            display="flex"
            // justifyContent="center"
            borderRadius="4px"
          >
            <Typography color={colors.grey[100]} sx={{}}>
              {setupLocation}
            </Typography>
          </Box>
        );
      },
    },
    {
      field: "dataType",
      headerName: "Data Type",
      flex: 1,
      renderCell: ({ row: { dataType } }) => {
        return (
          <Box
            width="150%"
            m="0 auto"
            p="5px"
            display="flex"
            // justifyContent="center"
            borderRadius="4px"
          >
            <Typography color={colors.grey[100]} sx={{}}>
              {dataType}
            </Typography>
          </Box>
        );
      },
    },
    {
      field: "_id",
      headerName: "Manage Data",
      // flex: 1,
      renderCell: ({ row: { _id } }) => {
        return (

          <Box
            width="120%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            backgroundColor={colors.greenAccent[700]}
            borderRadius="4px"
          >
            {/* <Link to={'/dashboard/manage-user'}>

              <Typography color={colors.grey[100]} sx={{}}>
                Manage
              </Typography>
            </Link> */}
            Manage Data
          </Box>
        );
      },

    },
    

  ];



  return (
    <Box m="0px" >



      <Box

        m="0px 0 0 0"
        height="75vh"
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
        }}
      >
        <DataGrid
          checkboxSelection
          rows={datarows}
          columns={columns}
          pageSize={12}
          components={{ Toolbar: GridToolbar }}

        />
      </Box>


    </Box>
  )
}

export default MenuItemCategoryManage