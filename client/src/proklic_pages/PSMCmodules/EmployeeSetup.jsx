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


import { Fragment } from "react";
import MaterialTable from "material-table";
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
import ViewColumn from '@material-ui/icons/ViewColumn';


const originalData = [
  {
    id: 1,
    file: "Employees",
    view: false,
    edit: false,
    add: false,
    delete: false
  },
  {
    id: 2,
    file: "Employee Roles",
    view: false,
    edit: false,
    add: false,
    delete: false
  },
  {
    id: 3,
    file: "Employee Set",
    view: false,
    edit: false,
    add: false,
    delete: false
  },
  {
    id: 4,
    file: "Shift",
    view: false,
    edit: false,
    add: false,
    delete: false
  }

];


const EmployeeSetup = () => {
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

  const [data, setData] = useState(originalData);

  
  const [checkedView, setCheckedView] = React.useState({});
  const handleChangeView = (event) => {
    setCheckedView({ ...checkedView, [event.target.name]: event.target.checked });
  };

  const [checkedEdit, setCheckedEdit] = React.useState({});
  const handleChangeEdit = (event) => {
    setCheckedEdit({ ...checkedEdit, [event.target.name]: event.target.checked });
  };
  const [checkedAdd, setCheckedAdd] = React.useState({});
  const handleChangeAdd = (event) => {
    setCheckedAdd({ ...checkedAdd, [event.target.name]: event.target.checked });
  };
  const [checkedDelete, setCheckedDelete] = React.useState({});
  const handleChangeDelete = (event) => {
    setCheckedDelete({ ...checkedDelete, [event.target.name]: event.target.checked });
  };

  const tableColumns = [
    { title: "ID", field: "id" },
    { title: "File", field: "file" },
    {
      title: "View", field: "view", render: (rowdata) => (
        <input type="checkbox" name={rowdata.file} checked={checkedView[rowdata.file]} onChange={handleChangeView} />
      )
    },
    {
      title: "Edit", field: "edit", render: (rowdata) => (
        <input type="checkbox" name={rowdata.file} checked={checkedEdit[rowdata.file]} onChange={handleChangeEdit} />
      )
    },
    {
      title: "Add", field: "add", render: (rowdata) => (
        <input type="checkbox" name={rowdata.file} checked={checkedAdd[rowdata.file]} onChange={handleChangeAdd} />
      )
    },
    {
      title: "Delete", field: "delete", render: (rowdata) => (
        <input type="checkbox" name={rowdata.file} checked={checkedDelete[rowdata.file]} onChange={handleChangeDelete} />
      )
    },

    // {
    //     title: "booleanValue",
    //     field: "booleanValue",

    //     render: (rowdata) => (
    //         <input type="checkbox" checked={checkedView} onChange={handleChangeView} />
    //     )
    // }
  ];

  const [selectedRow, setSelectedRow] = useState(null);

  const handleFormSubmit = () => {
    console.log(checkedView, checkedAdd, checkedDelete, checkedEdit)
  };



  return (

    <Fragment>
      <Box m="0px">
        <MaterialTable
          icons={tableIcons}
          columns={tableColumns}
          data={data}
          title="  "

          onRowClick={((evt, selectedRow) => setSelectedRow(selectedRow.tableData.id))}
          options={{
            pageSize: 4,
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

        <Button
          variant="contained"
          onClick={handleFormSubmit}
          sx={{ mt: 3, ml: 1 }}
        >
          Save Changes
        </Button>
      </Box>
    </Fragment>

  )
}

export default EmployeeSetup