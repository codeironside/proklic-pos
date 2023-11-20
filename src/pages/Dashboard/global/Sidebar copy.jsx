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


  const id4rmPath = useraccount?.data?.permissions[0];
  console.log(id4rmPath);
  const { data, loading, error } = useFetch(`/permissions/get_permission/${id4rmPath}`);
  console.log(data);



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

      <ProSidebar collapsed={isCollapsed} >
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
                  width="100px"
                  height="100px"
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
                  {useraccount.data?.userName}
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[500]} sx={{ textTransform: "uppercase" }}>
                  Level: <span sx={{ fontWeight: "bolder" }}>{useraccount.data?.level}</span>
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


            {(data?.go2Dashboard_Index) ?
              <Menu iconShape="square">
                <SubMenu
                  title="Property Setup"
                  active={selected === "Property Setup"}
                  icon={<MapsHomeWorkRoundedIcon />}
                  style={{ color: colors.grey[100] }}>
                  <MenuItem

                    active={selected === "Event Defination"}
                    onClick={() => setSelected(`Event Defination`)}
                    style={{
                      color: colors.grey[100],
                    }}>Event Defination
                    <Link to="/dashboard/event_def" />
                  </MenuItem>
                  <MenuItem
                    active={selected === "Event Area"}
                    onClick={() => setSelected(`Event Area`)}
                    style={{
                      color: colors.grey[100],
                    }}>Event Area
                    <Link to="/dashboard/event_area" />
                  </MenuItem>
                  <MenuItem
                    active={selected === "Task Scheduler"}
                    onClick={() => setSelected(`Task Scheduler`)}
                    style={{
                      color: colors.grey[100]
                    }}>Task Scheduler
                    <Link to="/dashboard/tasks" />
                  </MenuItem>


                </SubMenu>
              </Menu> : null}


            {(data?.go2Event_area) ?
              <Menu iconShape="square">
                <SubMenu
                  title="Item Masters"
                  active={selected === "Item Masters"}
                  icon={<AccountTreeRoundedIcon />}
                  style={{ color: colors.grey[100] }}>
                  <MenuItem
                    active={selected === "Menu Item Master"}
                    onClick={() => setSelected(`Menu Item Master`)}
                    style={{
                      color: colors.grey[100],
                    }}>Menu Item Master
                  </MenuItem>
                  <MenuItem
                    active={selected === "Menu Item Groups"}
                    onClick={() => setSelected(`Menu Item Groups`)}
                    style={{
                      color: colors.grey[100],
                    }}>Menu Item Groups
                  </MenuItem>
                  <MenuItem
                    active={selected === "Menu Item Categories"}
                    onClick={() => setSelected(`Menu Item Categories`)}
                    style={{
                      color: colors.grey[100]
                    }}>Menu Item Categories
                  </MenuItem>
                  <MenuItem
                    active={selected === "Menu Item Classes"}
                    onClick={() => setSelected(`Menu Item Classes`)}
                    style={{
                      color: colors.grey[100]
                    }}>Menu Item Classes
                  </MenuItem>
                  <MenuItem
                    active={selected === "Condiments"}
                    onClick={() => setSelected(`Condiments`)}
                    style={{
                      color: colors.grey[100]
                    }}>Condiments
                  </MenuItem>
                  <MenuItem
                    active={selected === "Item Barcodes"}
                    onClick={() => setSelected(`Item Barcodes`)}
                    style={{
                      color: colors.grey[100]
                    }}>Item Barcodes
                  </MenuItem>



                </SubMenu>
              </Menu> : null}


            {(data?.go2Event_def) ?
              <Menu iconShape="square">
                <SubMenu
                  title="Sales Properties"
                  active={selected === "Sales Properties"}
                  icon={<ReceiptRoundedIcon />}
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
                    active={selected === "Discount"}
                    onClick={() => setSelected(`Discount`)}
                    style={{
                      color: colors.grey[100]
                    }}>Discount
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

            {(data?.go2Invoices) ?
              <Item
                title="Invoices"
                to="/dashboard/invoices"
                icon={<ReceiptOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              /> : null}

            {(data?.go2Contact) ?
              <Item
                title="Customer & Sales Record"
                to="/dashboard/contacts"
                icon={<ContactsOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              /> : null}




            {/* END OF MENUS */}
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
              User Roles Setup
            </Typography>
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            ></Typography>



            {(data?.go2Form) ?
              <Item
                title="Create new user"
                to="/dashboard/form"
                icon={<PersonOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              /> : null}


            {(data?.go2Team) ?
              <Item
                title="Manage Team"
                to="/dashboard/team"
                icon={<ManageAccountsRoundedIcon />}
                selected={selected}
                setSelected={setSelected}
              /> : null}




            {/* <Item
              title="Property Setup"
              to=""
              icon={<ContactsOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Item Masters"
              to=""
              icon={<ReceiptOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Sales Properties"
              to=""
              icon={<ReceiptOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            /> */}

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >

            </Typography>

            {(data?.go2Calendar) ?
              <Item
                title="Calendar"
                to="/dashboard/calendar"
                icon={<CalendarTodayOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
                data={{ data }}
              /> : null}

            {(data?.Faq) ?
              <Item
                title="FAQ Page"
                to="/dashboard/faq"
                icon={<HelpOutlineOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
                data={{ data }}
              /> : null
            }



            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Charts
            </Typography>

            {(data?.go2Bar) ?
              <Item
                title="Bar Chart"
                to="/dashboard/bar"
                icon={<BarChartOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              /> : null}

            {(data?.go2Pie) ?
              <Item
                title="Pie Chart"
                to="/dashboard/pie"
                icon={<PieChartOutlineOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              /> : null}

            {(data?.go2Line) ?
              <Item
                title="Line Chart"
                to="/dashboard/line"
                icon={<TimelineOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              /> : null}

            {(data?.go2Geography) ?
              <Item
                title="Geography Chart"
                to="/dashboard/geography"
                icon={<MapOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              /> : null}

          </Box>
        </Menu>
      </ProSidebar>

    </Box>
  )
}

export default SidebarSection

{/* <Menu iconShape="square">
<SubMenu title="Components" icon={<PeopleOutlinedIcon />}>
  <MenuItem>Component 1</MenuItem>
  <MenuItem>Component 1</MenuItem>
  <MenuItem>Component 1</MenuItem>
  <SubMenu title="Sub Component 1" icon={<PeopleOutlinedIcon />}>
    test
  </SubMenu>
</SubMenu>
</Menu> */}