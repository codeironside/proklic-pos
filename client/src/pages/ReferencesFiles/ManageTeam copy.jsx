import React, {useEffect,useState} from 'react'
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
import { Actions } from './Actions';
import Visibility from './Visibility';
import View from './View';
import Fields from './Fields';
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

const steps = ['General Setup', 'PSMC Modules', 'Actions', 'Operations', 'Visibiity', 'View', 'Fields'];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <GeneralSetup />;
    case 1:
      return <EmcModules />;
    case 2:
      return <Actions />;
      case 3:
      return <Operation />;
    case 4:
      return <Visibility />;
    case 5:
      return <View />;
    case 6:
      return <Fields />;

    default:
      throw new Error('Unknown step');
  }
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


  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
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
            <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h2" gutterBottom>
                  Successful.
                </Typography>
                <Typography variant="subtitle1">
                  Your changes has been saved!
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                      Back
                    </Button>
                  )}

                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 3, ml: 1 }}
                  >
                    {activeStep === steps.length - 1 ? 'Save Changes' : 'Next'}
                  </Button>
                </Box>
              </React.Fragment>
            )}
          </Paper>
          <Copyright />
        </Container>
      </ThemeProvider>


    </Box>
  )
}

export default ManageTeam