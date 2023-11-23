import React, {Fragment, useEffect, useState } from 'react'
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
import ViewColumn from '@material-ui/icons/ViewColumn';

const datarows = []
for (let i = 0; i < 15; i++) {
    datarows.push({
        id: i,
        name: 'Coke ' + i,
        menuID: '0000' + i,
        menuItemCategory: 'menuItemCategory' + i,
        menuItemGroup: "menuItemGroup" + i,
        groupReport: "groupReport" + i,
        setupLocation: "Maitama",
        dataType: "Inherited",
    })
}


const MenuItemMasterManage = () => {
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
    { title: "Name", field: "name" , validate: rowData => rowData.name === '' ? 'Name cannot be empty' : '', },
    { title: "Menu ID", field: "menuID", validate: rowData => rowData.menuID === '' ? 'Menu ID cannot be empty' : '',  },
    { title: "Menu Item Category", field: "menuItemCategory", validate: rowData => rowData.menuItemCategory === '' ? 'Menu Item Category cannot be empty' : '',  },
    { title: "Menu Item Group", field: "menuItemGroup", validate: rowData => rowData.menuItemGroup === '' ? 'Menu Item Group cannot be empty' : '',  },
    { title: "Group Report", field: "groupReport", validate: rowData => rowData.groupReport === '' ? 'Group Report cannot be empty' : '',  },
    { title: "Setup Location", field: "setupLocation", validate: rowData => rowData.setupLocation === '' ? 'Setup Location cannot be empty' : '',  },
    { title: "Data Type", field: "dataType", validate: rowData => rowData.dataType === '' ? 'Data Type cannot be empty' : '',  },

];

const [selectedRow, setSelectedRow] = useState(null);



return (

    <Fragment>
        <Box m="20px">
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
                    exportButton: true,
                    filtering: true,
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

export default MenuItemMasterManage