import React, { Fragment, useState } from "react";
import MaterialTable from "material-table";
import Button from '@mui/material/Button';

import { Box, useTheme } from "@mui/material";
import { tokens } from "../../../theme";
import { darken } from '@mui/material';
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Grid from '@mui/material/Grid';

import Header from "../../../components/Header";

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
    listMenuDef: "Rice",
    view: false,
    availableCount: 45,
    add: false,

  },
  {
    id: 2,
    listMenuDef: "Beans paddy",
    view: false,
    availableCount: 55,
    add: false,

  },
  {
    id: 3,
    listMenuDef: "Chicken wings",
    view: false,
    availableCount: 40,
    add: false,

  },
  {
    id: 4,
    listMenuDef: "Tomatoes Sauce",
    view: false,
    availableCount: 12,
    add: false,

  },
  {
    id: 5,
    listMenuDef: "Vegetable Soup",
    view: false,
    availableCount: 23,
    add: false,

  },

];







export default function MenuItemAvailability() {
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


  const [checkedAdd, setCheckedAdd] = React.useState({});
  const handleChangeAdd = (event) => {
    setCheckedAdd({ ...checkedAdd, [event.target.name]: event.target.checked });
  };

  const [availableCount, setAvailableCount] = React.useState({});
  const handleAvailableCount = (event) => {
    setAvailableCount({ ...availableCount, [event.target.name]: event.target.value });
  };


  const tableColumns = [
    { title: "ID", field: "id" },
    { title: "List of Menuitem from Definition", field: "listMenuDef" },
    {
      title: "Enable Available", field: "view", render: (rowdata) => (
        <input type="checkbox" name={rowdata.id} checked={checkedView[rowdata.id]} onChange={handleChangeView} />
      )
    },
    { title: "Available Count", field: "availableCount", render: (rowdata) => (
      <input type="number" name={rowdata.id} checked={availableCount[rowdata.id]} onChange={handleAvailableCount} />
    )
  },
    {
      title: "Out of Items", field: "add", render: (rowdata) => (
        <input type="checkbox" name={rowdata.id} checked={checkedAdd[rowdata.id]} onChange={handleChangeAdd} />
      )
    },

  ];

  const [selectedRow, setSelectedRow] = useState(null);

  const handleFormSubmit = () => {
    // console.log(checkedView)
    console.log(originalData)
  };



  // SELECT DROPDOWN FOR MENUITEM AVAILABILITY
  const [selectedValue, setSelectedValue] = useState('');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
    console.log(event.target.value)
  };


  return (

    <Fragment>
      <Box m="20px">
        <Header title="Menu Item Availability" subtitle="Create menu availability" />

        <Grid container spacing={2} xs={12} sx={{ mb: 3, }}>
          <Grid item xs={12} md={4}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-helper-label12">
                Select Menuitem Availability
              </InputLabel>
              <Select
                labelId="demo-simple-select-helper-label12"
                id="demo-simple-select-helper12"
                onChange={(e) => handleChange(e)}
                value={selectedValue}
                label="menuItemAvail"
                name="menuItemAvail">
                <MenuItem value="none">
                  <em>None</em>
                </MenuItem>
                <MenuItem selected value={"Menuitem Availability 1"}>Menuitem Availability 1</MenuItem>
                <MenuItem value={"Menuitem Availability 2"}>Menuitem Availability 2</MenuItem>
                <MenuItem value={"Menuitem Availability 3"}>Menuitem Availability 3</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>


        {selectedValue == "none" ? "No data" : ""}
        {selectedValue == "Menuitem Availability 1"
          ? <>
            <Box>
              <MaterialTable
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
                icons={tableIcons}
                columns={tableColumns}
                data={data}
                title="Menu Item Availability"

                onRowClick={((evt, selectedRow) => setSelectedRow(selectedRow.tableData.id))}
                options={{
                  padding: "dense",
                  exportButton: true,
                  // filtering: true,
                  sorting: true,
                  search: true, actionsColumnIndex: -1,
                  rowStyle: rowData => ({
                    backgroundColor: (selectedRow === rowData.tableData.id) ? "#86DAC5" : "transparent ",
                    background: (selectedRow === rowData.tableData.id) ? "#86DAC5" : "transparent ", //
                  }),
                  headerStyle: {
                    backgroundColor: '#222222',
                    color: '#FFF'
                  }
                }}
              />

              <Button
                variant="contained"
                onClick={handleFormSubmit}
                size="small"
                color="secondary"
                sx={{ mt: 3, ml: 1, mx: "auto", width: 200 }}
              >
                Save Changes
              </Button>
            </Box>
          </> : ""}
        {selectedValue == "Menuitem Availability 2" ? "Table for Menuitem Availability 2" : ""}
        {selectedValue == "Menuitem Availability 3" ? "Table for Menuitem Availability 3" : ""}




      </Box>
    </Fragment>

  )
}





