import React from 'react'
import { tokens } from "../../../theme";
import { useLocation, useParams } from "react-router-dom";
import { Box, useTheme } from "@mui/material";

import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';



import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import Header from '../../../components/Header';
import { useEffect, useState } from "react";
import axios from 'axios';
import GuestChecks from '../../../proklic_pages/Operations/GuestChecks';
import VoidAndReturns from '../../../proklic_pages/Operations/VoidAndReturns';
import AdhocReport from '../../../proklic_pages/Operations/AdhocReport';
import Transactions from '../../../proklic_pages/Operations/Transactions';




const Operation = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [useraccount, setUseraccounts] = useState('');

  const { id } = useParams();
  console.log(id);

  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };



  return (
    <>
      <Header title="Operations" subtitle="operations" />
      <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList
              onChange={handleChange}
              aria-label="proklic-pos example"
              variant="scrollable"
              scrollButtons="auto"
            // aria-label="scrollable auto tabs example"
            >
              <Tab label="Guest Checks" value="1" />
              <Tab label="Printing" value="2" />
              <Tab label="Voids & Returns" value="3" />
              <Tab label="PMC General & Report" value="4" />
              <Tab label="Ad Hoc Reports" value="5" />
              <Tab label="Transactions" value="6" />
              <Tab label="Miscellaneous" value="7" />
              {/* <Tab label="Search" value="1" /> */}
              {/* <Tab label="TimeKeeping" value="2" /> */}
              {/* <Tab label="PMC Procedures" value="8" /> */}
              {/* <Tab label="Store Value Cards" value="11" /> */}
              {/* <Tab label="Guest Management" value="12" /> */}
            </TabList>
          </Box>
          <TabPanel value="1">
          <GuestChecks />
          </TabPanel>
          <TabPanel value="2">
            {/* Guest Checks */}
           Printing
          </TabPanel>
          {/* <TabPanel value="3">
            <VoidAndReturns />
          </TabPanel> */}
          <TabPanel value="4">PMC General & Report</TabPanel>
          <TabPanel value="5">
            <AdhocReport />
          </TabPanel>
          <TabPanel value="6">
            <Transactions />
          </TabPanel>
          <TabPanel value="7">Miscellaneous</TabPanel>
          {/* <TabPanel value="4">Printing</TabPanel> */}
          {/* <TabPanel value="8">PMC Procedures</TabPanel> */}
          {/* <TabPanel value="11">Store Value Cards</TabPanel> */}
          {/* <TabPanel value="1">Search</TabPanel> */}
          {/* <TabPanel value="12">Guest Management</TabPanel> */}
        </TabContext>
      </Box>
    </>
  )
}

export default Operation