import React, { Fragment, useEffect, useState } from 'react'
import { Box, Typography, useTheme } from '@mui/material'
import Header from '../../../components/Header'
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../../theme";
import { mockDataTeam } from "../../../data/mockData";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import { Link } from 'react-router-dom';


import MaterialTable from "material-table";

// import { Box, useTheme } from "@mui/material";
// import { tokens } from "../../theme";

import { forwardRef } from 'react';

import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn'
import axios from "axios";
let hasRefreshed = false;
const datarows = []
 const url = "http://localhost:3126/role/getallroles";
 axios
    .get(url, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        // Add any other headers as needed
      },
    })
    .then((response) => {
      console.log("Response:", response.data);
  
      const responseData = response.data.data; // Extracting the 'data' key
  
      if (Array.isArray(responseData)) {
        const transformedData = responseData.map((item) => {
          return {
            id: item.id,
            role: item.role_name, // Using 'role_name' instead of 'role'
            level: item.level, // Adding 'level' property
          };
        });
  
        console.log("Transformed Data:", transformedData);
  
        datarows.push(...transformedData); // Push individual objects, not an array
  
        console.log("datarows:", datarows);
      //         // Check if the page has already been refreshed
      // if (!hasRefreshed) {
      //   hasRefreshed = true; // Set the flag to true
      //   window.location.reload();
      // }
      } else {
        console.log("Roles data not found in the response.");
      }
    })
    .catch((error) => {
      console.log("error")
      console.error("Error:", error.message);
      // Handle errors here
    });

// datarows.push(
//   {
//     id: 1,
//     role: "Super Role",
//   },
//   {
//     id: 2,
//     role: "General Manager",
//   },
//   {
//     id: 3,
//     role: "Manager",
//   },
//   {
//     id: 4,
//     role: "Supervisor",
//   },
//   {
//     id: 5,
//     role: "Bartender",
//   },
//   {
//     id: 6,
//     role: "Server",
//   },
//   {
//     id: 7,
//     role: "Host",
//   },
// )


const TeamIndex = () => {

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);


  const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
  };

  const [data, setData] = useState(datarows);

  const tableColumns = [
    { title: "ID", field: "id", validate: rowData => rowData.id === '' ? 'id cannot be empty' : '', },
    { title: "Role", field: "role", validate: rowData => rowData.role_name === '' ? 'role cannot be empty' : '', },
    { title: "Acess Level", field: "id", validate: rowData => rowData.level === '' ? 'Acess Level cannot be empty' : '', },
    {
      title: "Setup User Role", field: "userrole", editable: 'never', render: rowData =>
      <Link 
      to={'/dashboard/manage-user'}
      state={{from: rowData.id, roletype: rowData.role}}
      >
        <Box
          width="80%"
          m="0 auto"
          p="5px"
          display="flex"
          justifyContent="center"
          backgroundColor={colors.primary[400]}
          borderRadius="4px"
        >
            <Typography color={colors.grey[100]} sx={{}}>
              Assign Priviledges
            </Typography>
        </Box>
          </Link>
    },


  ];

  const [selectedRow, setSelectedRow] = useState(null);


  return (

    <Fragment>
      <Box m="20px">
      <Header title="Manage User Roles" subtitle="Delegate user roles & privileges." />
        <MaterialTable
          icons={tableIcons}
          columns={tableColumns}
          data={data}
          title=" "
          editable={{
            onRowAdd: (newData) =>
              new Promise((resolve, reject) => {
                setTimeout(() => {
                  setData([...data, newData]);

                  resolve();
                }, 1000);
              }),
            onRowUpdate: (newData, oldData) =>
              new Promise((resolve, reject) => {
                setTimeout(() => {
                  console.log("old data: ", oldData);
                  const dataUpdate = [...data];
                  const index = oldData.tableData.id;
                  dataUpdate[index] = newData;
                  setData([...dataUpdate]);

                  resolve();
                }, 1000);
              }),
            onRowDelete: (oldData) =>
              new Promise((resolve, reject) => {
                setTimeout(() => {
                  const dataDelete = [...data];
                  const index = oldData.tableData.id;
                  dataDelete.splice(index, 1);
                  setData([...dataDelete]);

                  resolve();
                }, 1000);
              })
          }}
          onRowClick={((evt, selectedRow) => setSelectedRow(selectedRow.tableData.id))}
          options={{
            pageSize: 8,
            exportButton: true,
            // filtering: true,
            sorting: true,
            search: true, actionsColumnIndex: -1,
            rowStyle: rowData => ({
              backgroundColor: (selectedRow === rowData.tableData.id) ? "#86DAC5" : "transparent ",
              background: (selectedRow === rowData.tableData.id) ? "#86DAC5" : "transparent ", //
            }),
            headerStyle: {
              backgroundColor: '#2e7c67',
              color: '#FFF'
            }
          }}
        />
      </Box>
    </Fragment>

  )
}

export default TeamIndex