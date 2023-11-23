import React, { useState, useContext, useEffect } from 'react'
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from '../../../context/AuthContext';
import axios from 'axios';

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


  useEffect(() => {

    axios.get('/users/' + holdUserid?._id).then(response => {
      console.log(response)
      setUseraccounts(response)
    });
  }, []);



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

            {/* <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Data
            </Typography> */}

            {/* MENUS */}

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Control
            </Typography>
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >

            </Typography>


            {(permissionToView) ?
              <Menu iconShape="square">
                <SubMenu
                  title="Property Setup"
                  active={selected === "Property Setup"}
                  icon={<MapsHomeWorkRoundedIcon />}
                  style={{ color: colors.grey[100] }}>
                  <MenuItem

                    active={selected === "Tax Rate"}
                    onClick={() => setSelected(`Tax Rate`)}
                    style={{
                      color: colors.grey[100],
                    }}>Tax Rate
                    <Link to="/dashboard/event_def" />
                  </MenuItem>
                  <MenuItem
                    active={selected === "Tax Sets"}
                    onClick={() => setSelected(`Tax Sets`)}
                    style={{
                      color: colors.grey[100],
                    }}>Tax Sets
                    <Link to="/dashboard/event_area" />
                  </MenuItem>
                  <MenuItem
                    active={selected === "Currency"}
                    onClick={() => setSelected(`Currency`)}
                    style={{
                      color: colors.grey[100]
                    }}>Currency
                    <Link to="/dashboard/tasks" />
                  </MenuItem>
                  <MenuItem
                    active={selected === "Event Definition"}
                    onClick={() => setSelected(`Event Definition`)}
                    style={{
                      color: colors.grey[100]
                    }}>Event Definition
                    <Link to="/dashboard/event_def" />
                  </MenuItem>
                  <MenuItem
                    active={selected === "Event Area"}
                    onClick={() => setSelected(`Event Area`)}
                    style={{
                      color: colors.grey[100]
                    }}>Event Area
                    <Link to="/dashboard/event_area" />
                  </MenuItem>


                </SubMenu>
              </Menu> : null}


            {(permissionToView) ?
              <Menu iconShape="square">
                <SubMenu
                  title="Menu Items "
                  active={selected === "Item Masters"}
                  icon={<AccountTreeRoundedIcon />}
                  style={{ color: colors.grey[100] }}>
                                    <MenuItem
                    active={selected === "Menu Item Categories"}
                    onClick={() => setSelected(`Menu Item Categories`)}
                    style={{
                      color: colors.grey[100],
                    }}>Menu Item Categories 
                    <Link to="/dashboard/menu_category" />
                  </MenuItem>
                  <MenuItem
                    active={selected === "Menu Item Groups"}
                    onClick={() => setSelected(`Menu Item Groups`)}
                    style={{
                      color: colors.grey[100],
                    }}>Menu Item Groups
                    <Link to="/dashboard/menu_item_group" />
                  </MenuItem>
                  <MenuItem
                    active={selected === "Menu Item "}
                    onClick={() => setSelected(`Menu Item `)}
                    style={{
                      color: colors.grey[100],
                    }}>Menu Item Masters
                    <Link to="/dashboard/menu_items" />
                  </MenuItem>
                  {/* <MenuItem
                    active={selected === "Menu Item Expositions "}
                    onClick={() => setSelected(`Menu Item Expostions `)}
                    style={{
                      color: colors.grey[100],
                    }}>Menu Item Expositions
                    <Link to="/dashboard/menu_items_expo" />
                  </MenuItem> */}
                  <MenuItem
                    active={selected === "Menu Item RVC Distribution"}
                    onClick={() => setSelected(`Menu Item RVC Distribution`)}
                    style={{
                      color: colors.grey[100],
                    }}>Menu Item RVC Distribution
                    <Link to="/dashboard/menu_items_expo" />
                  </MenuItem>
                  <MenuItem
                    active={selected === "Menu Item Prices"}
                    onClick={() => setSelected(`Menu Item Prices`)}
                    style={{
                      color: colors.grey[100],
                    }}>Menu Item Prices
                    <Link to="/dashboard/menu_items_price" />
                  </MenuItem>                  
                  
                  <MenuItem
                    active={selected === "Menu Item Set"}
                    onClick={() => setSelected(`Menu Item Set`)}
                    style={{
                      color: colors.grey[100],
                    }}>Menu Item Sets
                    <Link to="/dashboard/menu_items_sets" />
                  </MenuItem>

                  <MenuItem
                    active={selected === "Print sets"}
                    onClick={() => setSelected(`Print sets`)}
                    style={{
                      color: colors.grey[100]
                    }}>Print sets
                    <Link to="/dashboard/print_sets" />
                  </MenuItem>

                  <MenuItem
                    active={selected === "Menu Item Screen Link"}
                    onClick={() => setSelected(`Menu Item Screen Link`)}
                    style={{
                      color: colors.grey[100]
                    }}>Menu Item Screen Link
                    <Link to="/dashboard/menu_item_screenlink" />
                  </MenuItem>
                  <MenuItem
                    active={selected === "Menu Item Availability"}
                    onClick={() => setSelected(`Menu Item Availability`)}
                    style={{
                      color: colors.grey[100]
                    }}>Menu Item Availability
                  <Link to="/dashboard/menu_item_avail" />
                  </MenuItem>
                 
                  <MenuItem
                    active={selected === "Condiment Sets"}
                    onClick={() => setSelected(`Condiment Sets`)}
                    style={{
                      color: colors.grey[100]
                    }}>Condiment Sets
                    <Link to="/dashboard/condiment_set" />
                  </MenuItem>
                  <MenuItem
                    active={selected === "Condiment Group"}
                    onClick={() => setSelected(`Condiment Group`)}
                    style={{
                      color: colors.grey[100]
                    }}>Condiment Group
                    <Link to="/dashboard/condiment_gp" />
                  </MenuItem>
                  <MenuItem
                    active={selected === "Barcodes"}
                    onClick={() => setSelected(`Barcodes`)}
                    style={{
                      color: colors.grey[100]
                    }}>Barcodes
                    <Link to="/dashboard/barcode" />
                  </MenuItem>
                  <MenuItem
                    active={selected === "Combo Meal Group"}
                    onClick={() => setSelected(`Combo Meal Group`)}
                    style={{
                      color: colors.grey[100]
                    }}>Combo Meal Group
                    <Link to="/dashboard/combo_gp" />
                  </MenuItem>
                  <MenuItem
                    active={selected === "Combo Meals"}
                    onClick={() => setSelected(`Combo Meals`)}
                    style={{
                      color: colors.grey[100]
                    }}>Combo Meals
                    <Link to="/dashboard/combo_ml" />
                  </MenuItem>



                </SubMenu>
              </Menu> : null}


            {(permissionToView) ?
              <Menu iconShape="square">
                <SubMenu
                  title="Sales Properties"
                  active={selected === "Sales Properties"}
                  icon={<AttachMoneyIcon />}
                  style={{ color: colors.grey[100] }}>
                  <MenuItem
                    active={selected === "Payment Mode"}
                    onClick={() => setSelected(`Payment Mode`)}
                    style={{
                      color: colors.grey[100],
                    }}>Payment Mode
                  </MenuItem>
                  <MenuItem
                    active={selected === "Tax"}
                    onClick={() => setSelected(`Tax`)}
                    style={{
                      color: colors.grey[100],
                    }}>Tax
                  </MenuItem>
                  <MenuItem
                    active={selected === "Tax Group"}
                    onClick={() => setSelected(`Tax Group`)}
                    style={{
                      color: colors.grey[100]
                    }}>Tax Group
                  </MenuItem>
                  <MenuItem
                    active={selected === "Service Charge"}
                    onClick={() => setSelected(`Service Charge`)}
                    style={{
                      color: colors.grey[100]
                    }}>Service Charge
                  </MenuItem>
                  <MenuItem
                    active={selected === "Service Charge Group"}
                    onClick={() => setSelected(`Service Charge Group`)}
                    style={{
                      color: colors.grey[100]
                    }}>Service Charge Group
                  </MenuItem>
                  <MenuItem
                    active={selected === "Discount"}
                    onClick={() => setSelected(`Discount`)}
                    style={{
                      color: colors.grey[100]
                    }}>Discount
                  </MenuItem>
                  <MenuItem
                    active={selected === "Discount Group"}
                    onClick={() => setSelected(`Discount Group`)}
                    style={{
                      color: colors.grey[100]
                    }}>Discount Group
                  </MenuItem>
                  <MenuItem
                    active={selected === "Combo Meal"}
                    onClick={() => setSelected(`Combo Meal`)}
                    style={{
                      color: colors.grey[100]
                    }}>Combo Meal
                  </MenuItem>
                  <MenuItem
                    active={selected === "Combo Meals Group"}
                    onClick={() => setSelected(`Combo Meals Group`)}
                    style={{
                      color: colors.grey[100]
                    }}>Combo Meals Group
                  </MenuItem>
                  <MenuItem
                    active={selected === "Loyalty"}
                    onClick={() => setSelected(`Loyalty`)}
                    style={{
                      color: colors.grey[100]
                    }}>Loyalty
                  </MenuItem>
                  <MenuItem
                    active={selected === "Stored Value"}
                    onClick={() => setSelected(`Stored Value`)}
                    style={{
                      color: colors.grey[100]
                    }}>Stored Value
                  </MenuItem>


                </SubMenu>
              </Menu> : null}

              {(permissionToView) ?
              <Menu iconShape="square">
                <SubMenu
                  title="General Information"
                  active={selected === "General Information"}
                  icon={<HelpCenterIcon />}
                  style={{ color: colors.grey[100] }}>
                  <MenuItem
                    active={selected === "Void/Return Reasons"}
                    onClick={() => setSelected(`Void/Return Reasons`)}
                    style={{
                      color: colors.grey[100],
                    }}>Void/Return Reasons
                  </MenuItem>
                  <MenuItem
                    active={selected === "Payment Reasons"}
                    onClick={() => setSelected(`Payment Reasons`)}
                    style={{
                      color: colors.grey[100],
                    }}>Payment Reasons
                  </MenuItem>
                  <MenuItem
                    active={selected === "Prep Instructions"}
                    onClick={() => setSelected(`Prep Instructions`)}
                    style={{
                      color: colors.grey[100]
                    }}>Prep Instructions
                  </MenuItem>
                  <MenuItem
                    active={selected === "Sales Analyzer"}
                    onClick={() => setSelected(`Sales Analyzer`)}
                    style={{
                      color: colors.grey[100]
                    }}>Sales Analyzer
                  </MenuItem>
                  <MenuItem
                    active={selected === "Discount Analyzer"}
                    onClick={() => setSelected(`Discount Analyzer`)}
                    style={{
                      color: colors.grey[100]
                    }}>Discount Analyzer
                  </MenuItem>
                  <MenuItem
                    active={selected === "Service Charge Analyzer"}
                    onClick={() => setSelected(`Service Charge Analyzer`)}
                    style={{
                      color: colors.grey[100]
                    }}>Service Charge Analyzer
                  </MenuItem>
                  <MenuItem
                    active={selected === "Guest Bill Summary Info"}
                    onClick={() => setSelected(`Guest Bill Summary Info`)}
                    style={{
                      color: colors.grey[100]
                    }}>Guest Bill Summary Info
                  </MenuItem>
                  <MenuItem
                    active={selected === "Guest Bill Header"}
                    onClick={() => setSelected(`Guest Bill Header`)}
                    style={{
                      color: colors.grey[100]
                    }}>Guest Bill Header
                  </MenuItem>
                  <MenuItem
                    active={selected === "Guest Bill Footer"}
                    onClick={() => setSelected(`Guest Bill Footer`)}
                    style={{
                      color: colors.grey[100]
                    }}>Guest Bill Footer
                  </MenuItem>
                  <MenuItem
                    active={selected === "Guest Receipt Header"}
                    onClick={() => setSelected(`Guest Receipt Header`)}
                    style={{
                      color: colors.grey[100]
                    }}>Guest Receipt Header
                  </MenuItem>

                </SubMenu>
              </Menu> : null}

              
              {(permissionToView) ?
              <Menu iconShape="square">
                <SubMenu
                  title="Rev Center"
                  active={selected === "Rev Center"}
                  icon={<AccountBalanceWalletIcon />}
                  style={{ color: colors.grey[100] }}>
                  <MenuItem
                    active={selected === "Rev Center Config"}
                    onClick={() => setSelected(`Rev Center Config`)}
                    style={{
                      color: colors.grey[100],
                    }}>Rev Center Config
                  </MenuItem>
                  <MenuItem
                    active={selected === "Rev Center Specifications"}
                    onClick={() => setSelected(`Rev Center Specifications`)}
                    style={{
                      color: colors.grey[100],
                    }}>Rev Center Specifications
                  </MenuItem>
                  <MenuItem
                    active={selected === "Payment Specifications"}
                    onClick={() => setSelected(`Payment Specifications`)}
                    style={{
                      color: colors.grey[100]
                    }}>Payment Specifications
                  </MenuItem>
                  <MenuItem
                    active={selected === "Control Specifications"}
                    onClick={() => setSelected(`Control Specifications`)}
                    style={{
                      color: colors.grey[100]
                    }}>Control Specifications
                  </MenuItem>
                  <MenuItem
                    active={selected === "Serving Period"}
                    onClick={() => setSelected(`Serving Period`)}
                    style={{
                      color: colors.grey[100]
                    }}>Serving Period
                  </MenuItem>
                  <MenuItem
                    active={selected === "Order Type"}
                    onClick={() => setSelected(`Order Type`)}
                    style={{
                      color: colors.grey[100]
                    }}>Order Type
                  </MenuItem>
                  <MenuItem
                    active={selected === "Function Screen"}
                    onClick={() => setSelected(`Function Screen`)}
                    style={{
                      color: colors.grey[100]
                    }}>Function Screen
                  </MenuItem>
                  <MenuItem
                    active={selected === "Tables"}
                    onClick={() => setSelected(`Tables`)}
                    style={{
                      color: colors.grey[100]
                    }}>Tables
                  </MenuItem>
                  <MenuItem
                    active={selected === "Section"}
                    onClick={() => setSelected(`Section`)}
                    style={{
                      color: colors.grey[100]
                    }}>Section
                  </MenuItem>

                </SubMenu>
              </Menu> : null}

              
            {(permissionToView) ?
              <Menu iconShape="square">
                <SubMenu
                  title="Hardware"
                  active={selected === "Hardware"}
                  icon={<DevicesOtherIcon />}
                  style={{ color: colors.grey[100] }}>
                  <MenuItem

                    active={selected === "Workstation Devices"}
                    onClick={() => setSelected(`Workstation Devices`)}
                    style={{
                      color: colors.grey[100],
                    }}>Workstation Devices
                    <Link to="/dashboard/event_def" />
                  </MenuItem>
                  <MenuItem
                    active={selected === "Printers"}
                    onClick={() => setSelected(`Printers`)}
                    style={{
                      color: colors.grey[100],
                    }}>Printers
                    <Link to="/dashboard/event_area" />
                  </MenuItem>
                  <MenuItem
                    active={selected === "Order Devices"}
                    onClick={() => setSelected(`Order Devices`)}
                    style={{
                      color: colors.grey[100]
                    }}>Order Devices
                    <Link to="/dashboard/tasks" />
                  </MenuItem>

                </SubMenu>
              </Menu> : null}

              
            {(permissionToView) ?
              <Menu iconShape="square">
                <SubMenu
                  title="Employee Setup"
                  active={selected === "Employee Setup"}
                  icon={<ManageAccountsRoundedIcon />}
                  style={{ color: colors.grey[100] }}>
                  <MenuItem

                    active={selected === "Employees"}
                    onClick={() => setSelected(`Employees`)}
                    style={{
                      color: colors.grey[100],
                    }}>Employees
                    <Link to="/dashboard/create-role" />
                  </MenuItem>
                  <MenuItem
                    active={selected === "Employee Roles"}
                    onClick={() => setSelected(`Employee Roles`)}
                    style={{
                      color: colors.grey[100],
                    }}>Employee Roles
                    <Link to="/dashboard/team" />
                  </MenuItem>
                  <MenuItem
                    active={selected === "Employee Set"}
                    onClick={() => setSelected(`Employee Set`)}
                    style={{
                      color: colors.grey[100]
                    }}>Employee Set
                    <Link to="/dashboard/create-employee" />
                  </MenuItem>
                  <MenuItem
                    active={selected === "Shift"}
                    onClick={() => setSelected(`Shift`)}
                    style={{
                      color: colors.grey[100]
                    }}>Shift
                    <Link to="/dashboard/shift" />
                  </MenuItem>

                </SubMenu>
              </Menu> : null}


              {(permissionToView) ?
              <Menu iconShape="square">
                <SubMenu
                  title="Reporting"
                  active={selected === "Reporting"}
                  icon={<AssessmentIcon />}
                  style={{ color: colors.grey[100] }}>
                  <MenuItem

                    active={selected === "Reporting 1"}
                    onClick={() => setSelected(`Reporting 1`)}
                    style={{
                      color: colors.grey[100],
                    }}>Reporting 1
                    <Link to="/dashboard/event_def" />
                  </MenuItem>
                  <MenuItem
                    active={selected === "Reporting 2"}
                    onClick={() => setSelected(`Reporting 2`)}
                    style={{
                      color: colors.grey[100],
                    }}>Reporting 2
                    <Link to="/dashboard/event_area" />
                  </MenuItem>
                  <MenuItem
                    active={selected === "Reporting 3"}
                    onClick={() => setSelected(`Reporting 3`)}
                    style={{
                      color: colors.grey[100]
                    }}>Reporting 3
                    <Link to="/dashboard/tasks" />
                  </MenuItem>
                </SubMenu>
              </Menu> : null}

              <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            ></Typography>

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              {" "}
            </Typography>
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            ></Typography>






          </Box>
        </Menu>
      </ProSidebar>

    </Box>
  )
}

export default SidebarSection

