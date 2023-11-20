import React, { useEffect, useState } from 'react'
import { tokens } from "../../theme";
import { useLocation, useParams } from "react-router-dom";
import { useTheme } from "@mui/material";
import axios from 'axios';

import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import GeneralSetup from './GeneralSetup';
import EmcModules from './EmcModules';
import Operation from './Operation';

import Header from '../../components/Header';




import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
// useParams


// Header
// useTheme

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="#">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}



const theme = createTheme();



const ManageTeam = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [useraccount, setUseraccounts] = useState('');

  const { id } = useParams();
  console.log(id);


  //   useEffect(() => {
  //     if (!id) {
  //         return;
  //     }
  //     axios.get('/users/' + id).then(response => {
  //       console.log(response)
  //       setUseraccounts(response)
  //     });
  // }, [id]);


  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
    <Box m="20px">
      <Header title="Manage Account" subtitle="Set Administraive Rights and Priviledges" />

      <ThemeProvider theme={theme}>
        <CssBaseline />

        <Container component="main" maxWidth="lg" sx={{ mb: 4 }}>
          <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
            <Typography component="h1" variant="h4" align="center" sx={{ textTransform: "uppercase" }}>
              <strong> 90002 | Manger</strong>
            </Typography>

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
                    <Tab label="PSMC Modules" value="1" />
                    <Tab label="Operations" value="2" />
                    {/* <Tab label="General Setup" value="1" sx={colors.greenAccent[400]} /> */}
                    {/* <Tab label="Actions" value="3" /> */}
                    {/* <Tab label="Visibility" value="5" /> */}
                    {/* <Tab label="View" value="6" /> */}
                    {/* <Tab label="Fields" value="7" /> */}

                  </TabList>
                </Box>

                <TabPanel value="1">
                  <EmcModules />
                </TabPanel>
                
                <TabPanel value="2">
                  <Operation />
                </TabPanel>

                {/* <TabPanel value="1">
                  <GeneralSetup />
                </TabPanel> */}
                {/* <TabPanel value="3">
                  <Actions />
                </TabPanel> */}
                {/* <TabPanel value="5">
                  <Visibility />
                </TabPanel>
                <TabPanel value="6">
                  <View />
                </TabPanel>
                <TabPanel value="7">
                  <Fields />
                </TabPanel> */}

              </TabContext>
            </Box>

          </Paper>
          <Copyright />
        </Container>
      </ThemeProvider>


    </Box>
  )
}

export default ManageTeam