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


const TeamIndex = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const columns = [
        { field: "id", 
        headerName: "ID" ,
        
      },
        
        {
          field: "role",
          headerName: "Role",
          // flex: 1,
          cellClassName: "name-column--cell",
          renderCell: ({ row: { role } }) => {
            return (
              <Box
                width="180%"
                mr="20px"
                // p="5px"
                // display="flex"
                // justifyContent="left"
     
              >
                {/* {id === 90000 && <AdminPanelSettingsOutlinedIcon />}
                {id === "manager" && <SecurityOutlinedIcon />}
                {id === "user" && <LockOpenOutlinedIcon />} */}
                <Typography color={colors.grey[100]} sx={{  }}>
                  {role}
                </Typography>
              </Box>
            );
          },
        },


        // {
        //   field: "level",
        //   headerName: "Level",
        //   // type: "number",
        //   headerAlign: "left",
        //   align: "left",
        // },



        {
          field: "level",
          headerName: "Access Level",
          // flex: 1,
          renderCell: ({ row: { id } }) => {
            return (
              <Box
                width="80%"
                m="0 auto"
                p="5px"
                display="flex"
                justifyContent="center"
                backgroundColor={
                  id === 90000
                    ? colors.greenAccent[600]
                    : id === 90000
                    ? colors.greenAccent[700]
                    : colors.greenAccent[700]
                }
                borderRadius="4px"
              >
                {/* {id === 90000 && <AdminPanelSettingsOutlinedIcon />}
                {id === "manager" && <SecurityOutlinedIcon />}
                {id === "user" && <LockOpenOutlinedIcon />} */}
                <Typography color={colors.grey[100]} sx={{  }}>
                  {id}
                </Typography>
              </Box>
            );
          },
        },
        {
          field: "_id",
          headerName: "Setup Role",
          // flex: 1,
          renderCell: ({ row: { _id } }) => {
            return (
              
              <Box
                width="80%"
                m="0 auto"
                p="5px"
                display="flex"
                justifyContent="center"
                backgroundColor={colors.greenAccent[700]}
                borderRadius="4px"
              >
              <Link to={'/dashboard/manage-user'}>
              {/* <Link to={'/dashboard/manage-user/' + _id}> */}
  
                <Typography color={colors.grey[100]} sx={{  }}>
                  Manage
                </Typography>
              </Link>
              </Box>
            );
          },

        },
        {
          field: "edit",
          headerName: "Edit Role",
          // flex: 1,
          renderCell: ({id}) => {
            return (
              <Box
                width="80%"
                m="0 auto"
                p="5px"
                display="flex"
                justifyContent="center"
                backgroundColor={colors.blueAccent[600]}
                borderRadius="4px"
              >

                <Typography color={colors.grey[900]} sx={{  }}>
                  Edit Role
                </Typography>
              </Box>
            );
          },
        },
      ];

    // const [tableData, setTableData] = useState([]);
    // useEffect(() => {
    //   fetch("/users/")
    //     .then((data) => data.json())
    //     .then((data) => setTableData(data))
    // }, [])
    //  console.log(tableData)


    return (
        <Box m="20px" >
          {/* <Typography variant='h5'>
            DashboardIndex
          </Typography> */}
    
          <Header title="Manage User Roles" subtitle="Delegate user roles & privileges." />

          <Box 
          
          m="40px 0 0 0" 
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
            rows={mockDataTeam} 
            // columns={columns} 

            // rows={tableData}
            columns={columns}
            pageSize={12}
            components={{Toolbar: GridToolbar}}

            />
          </Box>
    
    
        </Box>
      )
}

export default TeamIndex