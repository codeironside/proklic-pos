import React, { Suspense, useState, useContext, useEffect } from 'react'
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from '../../../context/AuthContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

// import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";

import AccountTreeRoundedIcon from '@mui/icons-material/AccountTreeRounded';
import MapsHomeWorkRoundedIcon from '@mui/icons-material/MapsHomeWorkRounded';
import ReceiptRoundedIcon from '@mui/icons-material/ReceiptRounded';
import ManageAccountsRoundedIcon from '@mui/icons-material/ManageAccountsRounded';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import DevicesOtherIcon from '@mui/icons-material/DevicesOther';
import AssessmentIcon from '@mui/icons-material/Assessment';
import useFetch from '../../../hooks/useFetch';





const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);



  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />

    </MenuItem>
  );
};

const ROLES = {
  SuperRole: 90000,
  General_Manager: 90001,
  Manager: 90002,
  Supervisor: 90003,
  Bartender: 90004,
  Server: 90005,
  Host: 90006,
};


const SidebarSection = (props) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);



  const [useraccount, setUseraccounts] = useState('');
  const token = localStorage.getItem('prolick_user');
  const holdUserid = JSON.parse(token)

  const [property, setProperty] = useState("")
  // console.log(property.getall)

  const navigate = useNavigate();
  function handleClick(allProps) {
    navigate(`/dashboard/${allProps._id}`, { state: allProps });
  }


  // useEffect(() => {

  //   axios.get('/users/' + holdUserid?._id).then(response => {
  //     console.log(response)
  //     setUseraccounts(response)
  //   });
  // }, []);

  // useEffect(() => {
  //   async function fetchData() {
  //     const response = await axios.get('/api/data');
  //     setData(response.data);
  //   }

  //   fetchData();
  // }, []);

  useEffect(() => {

    async function fetchAllProperty() {
      await fetch('https://proklic-pos-production.up.railway.app/branch/getall')
        .then(response => response.json())
        .then(data => {
          // console.log(data);
          setProperty(data)
        })
        .catch(error => {
          console.error(error);
        });
    }

    fetchAllProperty();

  }, [property.getall])




  const permissionToView = true;


  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard")

  return (
    <Box sx={{
      "& .pro-sidebar-inner": {
        background: `${colors.primary[400]} !important`,
      },
      "& .pro-icon-wrapper": {
        backgroundColor: "transparent !important",
      },
      "& .pro-inner-item": {
        padding: "5px 35px 5px 20px !important",
      },
      "& .pro-inner-item:hover": {
        color: "#86DAC5 !important",
      },
      "& .pro-menu-item.active": {
        color: "#4AC8A8 !important",
      },
      "& div.react-slidedown.pro-inner-list-item": {
        background: `${colors.primary[400]} !important`,
      },
      "& .pro-sidebar .pro-menu ": {
        paddingTop: "0px",
        paddingBottom: "0px",
      },
      "& div.pro-inner-item.active ": {
        color: "#4AC8A8 !important",
      },
      "& .pro-sidebar .pro-menu > ul > .pro-sub-menu > .pro-inner-list-item > div > ul": {
        paddingTop: "0px",
      },

    }}>

      <ProSidebar collapsed={isCollapsed} className='main' >
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.grey[100]}>
                  PROKLICK RMS
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="profile-user"
                  width="60px"
                  height="60px"
                  src={`../../assets/asomba_emmanuel.jpg`}
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h3"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0", textTransform: "capitalize" }}
                >
                  {`John Doe`}
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[500]} sx={{ textTransform: "uppercase" }}>
                  Level: <span sx={{ fontWeight: "bolder" }}>{`SUPER ROLE`}</span>
                </Typography>
              </Box>
            </Box>
          )}

          <Box paddingLeft={isCollapsed ? undefined : "10%"}>


            <Item
              title="Dashboard"
              to="/dashboard/DashboardIndex"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px", textTransform: 'capitalize', }}                  >
              Your properties
            </Typography>


            
              {
                // property.getall?.slice(0, 2).map((allProps, index) => (
                property.getall?.map((allProps, index) => (



                  <div key={index}>
                    {/* <Link to={`/dashboard/DashboardIndex/${allProps._id}`}> */}
                    {/* <Typography
                    variant="h6"
                    color={colors.grey[300]}
                    sx={{ m: "15px 0 5px 20px", textTransform: 'capitalize', cursor:"pointer" }}
                    onClick={() => handleClick(allProps)}
                  >
                    {allProps.branch_name}
                  </Typography> */}
                    {/* </Link> */}
                    <Suspense fallback={<div>Loading...</div>}>
                    <Menu iconShape="square">

                      <SubMenu
                        title={`${allProps.branch_name}`}
                        active={selected === "RVC Setup"}
                        icon={<MapsHomeWorkRoundedIcon />}
                        style={{ color: colors.grey[100], textTransform: 'capitalize', }}>
                        <Typography
                          variant="h6"
                          color={colors.grey[300]}
                          sx={{ m: "15px 0 5px 20px", textTransform: 'capitalize', cursor: "pointer", fontSize: "16.5px", backgroundColor: "#b0b0b0", paddingX: "5px" }}
                          onClick={() => handleClick(allProps)}
                        >
                          <strong>Setup {allProps.branch_name}</strong>
                        </Typography>
                        <MenuItem
                          sx={{ textTransform: 'capitalize', }}
                          active={selected === "Tax Rate"}
                          onClick={() => setSelected(`Tax Rate`)}
                          style={{
                            fontWeight: 'normal',
                            marginLeft: "20px",
                            color: colors.grey[100],
                          }}>Revenue Center 1
                        </MenuItem>



                      </SubMenu>
                    </Menu>
                    </Suspense>
                  </div>
                ))
              }





          </Box>
        </Menu>
      </ProSidebar>

    </Box>
  )
}

export default SidebarSection

