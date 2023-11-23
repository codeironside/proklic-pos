import React from 'react'
import { tokens } from "../../../theme";
import { useLocation, useParams } from "react-router-dom";
import { Box, useTheme } from "@mui/material";

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { mockDataEMC } from '../../../data/mockData';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';

import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';


import Header from '../../../components/Header';
import { useEffect, useState } from "react";
import axios from 'axios';
import ItemMasters from '../../../proklic_pages/PSMCmodules/ItemMasters';
import PropertySetup from '../../../proklic_pages/PSMCmodules/PropertySetup';
import SalesProperties from '../../../proklic_pages/PSMCmodules/SalesProperties';
import Hardware from '../../../proklic_pages/PSMCmodules/Hardware';
import GeneralInformation from '../../../proklic_pages/PSMCmodules/GeneralInformation';
import RevCenter from '../../../proklic_pages/PSMCmodules/RevCenter';
import EmployeeSetup from '../../../proklic_pages/PSMCmodules/EmployeeSetup';
import Reporting from '../../../proklic_pages/PSMCmodules/Reporting';
// useParams


// Header
// useTheme

const EmcModules = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  // const { id } = useParams();
  // console.log(id);

  const location = useLocation();
  const { from } = location.state;
  console.log(from);

  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };





  const handleFormSubmit = () => {

  };



  return (
    <>
      <Header title="PSMC Modules" subtitle="Grant this user access to:" />
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
              <Tab label="Property Setup" value="1" />
              <Tab label="Item Masters" value="2" />
              <Tab label="Sales Properties" value="3" />
              <Tab label="Hardware" value="4" />
              <Tab label="General Information" value="5" />
              <Tab label="Rev Center" value="6" />
              <Tab label="Employee Setup" value="7" />
              <Tab label="Reporting" value="8" />

            </TabList>
          </Box>
          <TabPanel value="1">
            <PropertySetup />
          </TabPanel>
          <TabPanel value="2">
            <ItemMasters />
          </TabPanel>
          <TabPanel value="3">
            <SalesProperties />
          </TabPanel>
          <TabPanel value="4">
            <Hardware />
          </TabPanel>
          <TabPanel value="5">
            <GeneralInformation />
          </TabPanel>
          <TabPanel value="6">
           <RevCenter />
          </TabPanel>
          <TabPanel value="7">
            <EmployeeSetup />
          </TabPanel>
          <TabPanel value="8">
            <Reporting />
          </TabPanel>

        </TabContext>
      </Box>
    </>
  )
}

export default EmcModules