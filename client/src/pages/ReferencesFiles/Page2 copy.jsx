import React from 'react'
import { tokens } from "../../theme";
import { useLocation, useParams } from "react-router-dom";
import { Box, useTheme } from "@mui/material";

import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';


import Header from '../../components/Header';
import { useEffect, useState } from "react";
import axios from 'axios';
// useParams


// Header
// useTheme

const Page2 = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const { id } = useParams();
  console.log(id);

  const [go2Dashboard_Index, setGo2Dashboard_Index] = useState(false);
  const [go2Event_def, setGo2Event_def] = useState(false);
  const [go2Event_area, setGo2Event_area] = useState(false);
  const [go2Tasks, setGo2Tasks] = useState(false);
  const [go2Calendar, setGo2Calendar] = useState(false);
  const [go2Team, setGo2Team] = useState(false);
  const [go2Form, setGo2Form] = useState(false);
  const [go2Invoices, setGo2Invoices] = useState(false);
  const [go2Contact, setGo2Contact] = useState(false);
  const [go2Bar, setGo2Bar] = useState(false);
  const [go2Pie, setGo2Pie] = useState(false);
  const [go2Line, setGo2Line] = useState(false);
  const [go2Geography, setGo2Geography] = useState(false);
  const [go2Faq, setGo2Faq] = useState(false);

  const [permit_id, setPermitID] = useState('');
  const [myid, setMyid] = useState('');
  const [level, setLevel] = useState('');


  useEffect(() => {
    if (!id) {
      return;
    }
    axios.get('/users/' + id).then(response => {

      const user = response
      const permit = user.data?.permissions[0];
      setMyid(user.data?.id);
      setLevel(user.data?.level);
      console.log(permit)
      if (user.data?._id === id) {
        axios.get('/permissions/get_permission/' + permit).then(response => {
          console.log(response)
          const { data } = response;
          setGo2Dashboard_Index(data.go2Dashboard_Index);
          setGo2Event_def(data.go2Event_def);
          setGo2Event_area(data.go2Event_area)
          setGo2Tasks(data.go2Tasks);
          setGo2Calendar(data.go2Calendar);
          setGo2Team(data.go2Team);
          setGo2Form(data.go2Form);
          setGo2Invoices(data.go2Invoices);
          setGo2Contact(data.go2Contact);
          setGo2Bar(data.go2Bar);
          setGo2Pie(data.go2Pie);
          setGo2Line(data.go2Line);
          setGo2Geography(data.go2Geography);
          setGo2Faq(data.go2Faq);
          setPermitID(permit)
        })
      }
    });
  }, [id]);


  // const permit1 = user.data?.permissions[0]; 

  console.log(permit_id)

  // handle methods

  const handleCb_go2Dashboard_Index = (event) => {
    setGo2Dashboard_Index(event.target.checked);
  };

  const handleCb_go2Event_def = (event) => {
    setGo2Event_def(event.target.checked);
  };

  const handleCb_go2Event_area = (event) => {
    setGo2Event_area(event.target.checked);
  };

  const handleCb_go2Tasks = (event) => {
    setGo2Tasks(event.target.checked);
  };

  const handleCb_go2Calendar = (event) => {
    setGo2Calendar(event.target.checked);
  };

  const handleCb_go2Team = (event) => {
    setGo2Team(event.target.checked);
  };

  const handleCb_go2Form = (event) => {
    setGo2Form(event.target.checked);
  };

  const handleCb_go2Invoices = (event) => {
    setGo2Invoices(event.target.checked);
  };

  const handleCb_go2Contact = (event) => {
    setGo2Contact(event.target.checked);
  };

  const handleCb_go2Bar = (event) => {
    setGo2Bar(event.target.checked);
  };

  const handleCb_go2Pie = (event) => {
    setGo2Pie(event.target.checked);
  };

  const handleCb_go2Line = (event) => {
    setGo2Line(event.target.checked);
  };

  const handleCb_go2Geography = (event) => {
    setGo2Geography(event.target.checked);
  };

  const handleCb_go2Faq = (event) => {
    setGo2Faq(event.target.checked);
  };

  console.log(go2Dashboard_Index, go2Event_def,
    go2Event_area, go2Tasks, go2Calendar, go2Team, go2Form, go2Invoices,
    go2Contact, go2Bar, go2Pie, go2Line, go2Geography, go2Faq)



  const handleFormSubmit = () => {

    const values = {
      go2Dashboard_Index, go2Event_def, go2Event_area,
      go2Tasks, go2Calendar, go2Team, go2Form,
      go2Invoices, go2Contact, go2Bar, go2Pie,
      go2Line, go2Geography, go2Faq
    }
    const values_setup = {
      myid, level, go2Dashboard_Index, go2Event_def, go2Event_area,
      go2Tasks, go2Calendar, go2Team, go2Form,
      go2Invoices, go2Contact, go2Bar, go2Pie,
      go2Line, go2Geography, go2Faq
    }
    console.log(id)
    console.log(myid)
    console.log(level)

    if (permit_id === "") {
      // new place
      axios.post('/permissions/setup_permission/' + id, values_setup)
      alert("Data will nowbe saved")
    } else {
      // update
      axios.put('/permissions/update_permission/' + permit_id, values );
      alert("Successful")

    }



  };



  return (
    <Box m="20px">
      <Header title="Permission & Priviledges" subtitle="Grant this user access to:" />

      {/* <Typography variant="h6" gutterBottom sx={{ mb: 4 }}>
        Control
      </Typography> */}
      {/* <Typography variant="h6" gutterBottom sx={{ mb: 4 }}>
        <strong>Grant this user access to:</strong>
      </Typography> */}


      <Typography variant="h6" gutterBottom sx={{ mb: 1 }}>
        <strong> Acess Control Priviledges</strong>
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={3}>
          <FormControlLabel
            control={<Checkbox color="secondary"
              checked={go2Dashboard_Index}
              onChange={handleCb_go2Dashboard_Index}
              name="go2Dashboard_Index" />}
            label="Property Setup Menu"
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <FormControlLabel
            control={<Checkbox color="secondary"
              checked={go2Event_def}
              onChange={handleCb_go2Event_def}
              name="go2Event_def" value="yes" />}
            label="Item Masters"
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <FormControlLabel
            control={<Checkbox color="secondary"
              checked={go2Event_area}
              onChange={handleCb_go2Event_area}
              name="go2Event_area" value="yes" />}
            label="Sales Properties"
          />
        </Grid>
      </Grid>


      {/* Finanaces */}
      <Typography variant="h6" gutterBottom sx={{ mb: 1, mt: 4 }}>
        <strong>Sales & Reciepts Priviledges</strong>
      </Typography>
      <Grid container spacing={3}>

        <Grid item xs={12} md={3}>
          <FormControlLabel
            control={<Checkbox color="secondary"
              checked={go2Invoices}
              onChange={handleCb_go2Invoices}
              name="go2Invoices" value="yes" />}
            label="Invoices"
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <FormControlLabel
            control={<Checkbox color="secondary"
              checked={go2Tasks}
              onChange={handleCb_go2Tasks}
              name="go2Tasks" value="yes" />}
            label="Tasks"
          />
        </Grid>

      </Grid>


      {/* Manage Team */}
      <Typography variant="h6" gutterBottom sx={{ mb: 1, mt: 4 }}>
        <strong>Manage Accounts Priviledges</strong>
      </Typography>
      <Grid container spacing={3}>

        <Grid item xs={12} md={3}>
          <FormControlLabel
            control={<Checkbox color="secondary"
              checked={go2Team}
              onChange={handleCb_go2Team}
              name="go2Team" value="yes" />}
            label="Manage Users"
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <FormControlLabel
            control={<Checkbox color="secondary"
              checked={go2Form}
              onChange={handleCb_go2Form}
              name="go2Form" value="yes" />}
            label="Create User Account"
          />
        </Grid>

      </Grid>


      {/* Statistics */}
      <Typography variant="h6" gutterBottom sx={{ mb: 1, mt: 4 }}>
        <strong>Statistics Priviledges</strong>
      </Typography>
      <Grid container spacing={3}>

        <Grid item xs={12} md={3}>
          <FormControlLabel
            control={<Checkbox color="secondary"
              checked={go2Bar}
              onChange={handleCb_go2Bar}
              name="go2Bar" value="yes" />}
            label="Bar Data"
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <FormControlLabel
            control={<Checkbox color="secondary"
              checked={go2Pie}
              onChange={handleCb_go2Pie}
              name="go2Pie" value="yes" />}
            label="Pie Data"
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <FormControlLabel
            control={<Checkbox color="secondary"
              checked={go2Line}
              onChange={handleCb_go2Line}
              name="go2Line" value="yes" />}
            label="Line Data"
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <FormControlLabel
            control={<Checkbox color="secondary"
              checked={go2Geography}
              onChange={handleCb_go2Geography}
              name="go2Geography" value="yes" />}
            label="Geography Data"
          />
        </Grid>

      </Grid>



      {/* Other Pages */}
      <Typography variant="h6" gutterBottom sx={{ mb: 1, mt: 4 }}>
        <strong>Other Priviledges</strong>
      </Typography>
      <Grid container spacing={3}>

        <Grid item xs={12} md={3} sx={{ mb: 4 }}>
          <FormControlLabel
            control={<Checkbox color="secondary"
              checked={go2Calendar}
              onChange={handleCb_go2Calendar}
              name="go2Calendar" value="yes" />}
            label="Calendar"
          />
        </Grid>

        <Grid item xs={12} md={3}>
          <FormControlLabel
            control={<Checkbox color="secondary"
              checked={go2Contact}
              onChange={handleCb_go2Contact}
              name="go2Contact" value="yes" />}
            label="Contact"
          />
        </Grid>

        <Grid item xs={12} md={3}>
          <FormControlLabel
            control={<Checkbox color="secondary"
              checked={go2Faq}
              onChange={handleCb_go2Faq}
              name="go2Faq" value="yes" />}
            label="FAQ page"
          />
        </Grid>
      </Grid>

      <Grid container spacing={3}>





        {/* <Grid item xs={12} md={6}>
  <TextField
    required
    id="cardName"
    label="Name on card"
    fullWidth
    autoComplete="cc-name"
    variant="standard"
  />
</Grid>
<Grid item xs={12} md={6}>
  <TextField
    required
    id="cardNumber"
    label="Card number"
    fullWidth
    autoComplete="cc-number"
    variant="standard"
  />
</Grid>
<Grid item xs={12} md={6}>
  <TextField
    required
    id="expDate"
    label="Expiry date"
    fullWidth
    autoComplete="cc-exp"
    variant="standard"
  />
</Grid>
<Grid item xs={12} md={6}>
  <TextField
    required
    id="cvv"
    label="CVV"
    helperText="Last three digits on signature strip"
    fullWidth
    autoComplete="cc-csc"
    variant="standard"
  />
</Grid> */}
        {/* <Grid item xs={12}>
  <FormControlLabel
    control={<Checkbox color="secondary" name="saveCard" value="yes" />}
    label="Remember credit card details for next time"
  />
</Grid> */}

      </Grid>

      <Button
        variant="contained"
        onClick={handleFormSubmit}
        sx={{ mt: 3, ml: 1 }}
      >
        Save Changes
      </Button>
    </Box>
  )
}

export default Page2