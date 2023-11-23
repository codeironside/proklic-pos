import * as React from 'react';
import { useState, useEffect } from 'react';
import {
  Box,
  Button,
  MenuItem,
  TextField,
  Tooltip,
} from '@mui/material';
import Drawer from '@mui/material/Drawer';

import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { Formik } from "formik";
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Typography, useTheme } from '@mui/material'
import * as yup from "yup";



import Divider from '@mui/material/Divider';


export default function Shift() {


  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };



  const [type_of_branch, setTypeOfBranch] = React.useState('');

  const handleChangePropertyType = (event) => {
    setTypeOfBranch(event.target.value);
  };




  const checkoutSchema = yup.object().shape({
    branch_id: yup.string().required("required"),
    branch_name: yup.string().required("required"),
    address: yup.string().required("required"),
    description: yup.string().required("required"),
  });

  const initialValues = {
    branch_id: "",
    branch_name: "",
    address: "",
    description: "",
  };



  const handleFormSubmit = (values) =>  {
    // const anchor = "right"
    // Connect to API from here
    // setOpen(false)
    const combinedObject = { ...values, type_of_branch }
    // console.log(combinedObject);
    // setTypeOfBranch("")

  
      const formBody = new URLSearchParams(combinedObject).toString();
      fetch('https://proklic-pos-production.up.railway.app/branch/register', {
        mode: 'no-cors',
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        },
        body: formBody
      })
        .then(response => {
          // Handle response
          response.json()
          console.log(response.json())
          setTypeOfBranch("")
          setOpen(false)
        })
        .catch(error => {
          // Handle error
          console.error('There was an error!', error);
        });
    



  };




  const list = () => (
    <Box
      sx={{ width: 350, justifyItems: 'center', alignItems: 'center' }}
      role="presentation"
    // onClick={toggleDrawer(anchor, false)}
    // onKeyDown={toggleDrawer(anchor, false)}
    >

      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        ml="15px" sx={{ mt: 4 }}>

        <Paper variant="outlined" sx={{ p: { xs: 2, md: 3 } }}>
          <Typography id="keep-mounted-modal-title" variant="h3" component="h2" sx={{ mb: 2 }}>
            <strong> Create New Chain </strong>
          </Typography>
          <Formik
            onSubmit={handleFormSubmit}
            initialValues={initialValues}
            validationSchema={checkoutSchema}
          >
            {({
              values,
              errors,
              touched,
              handleBlur,
              handleChange,
              handleSubmit,
            }) => (
              <form onSubmit={handleSubmit}>
                <Grid container spacing={3}  >

                  <Grid item xs={12} md={12}>

                    <TextField

                      size="small"
                      fullWidth
                      variant="filled"
                      type="number"
                      label="Branch ID "
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.branch_id}
                      name="branch_id"
                      error={!!touched.branch_id && !!errors.branch_id}
                      helperText={touched.branch_id && errors.branch_id}
                      sx={{ gridColumn: "span 1", marginBottom: "2px" }}
                    />

                  </Grid>

                  <Grid item xs={12} md={12}>

                    <TextField
                      // disabled
                      size="small"
                      fullWidth
                      variant="filled"
                      type="text"
                      label="Branch Name"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.branch_name}
                      name="branch_name"
                      error={!!touched.branch_name && !!errors.branch_name}
                      helperText={touched.branch_name && errors.branch_name}
                      sx={{ gridColumn: "span 1", marginBottom: "2px" }}
                    />

                  </Grid>

                  <Grid item xs={12} md={12}>
                    <FormControl sx={{ minWidth: 280 }} size="small">
                      <InputLabel id="propertyType-label">Property Type</InputLabel>
                      <Select
                        labelId="propertyType-label"
                        id="propertyType"
                        value={type_of_branch}
                        label="Property Type"
                        onChange={handleChangePropertyType}
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value="property">Chain</MenuItem>
                        <MenuItem value="property">Property</MenuItem>
                        <MenuItem value="rvc">Revenue</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>

                  <Grid item xs={12} md={12}>

                    <TextField
                      // disabled
                      size="small"
                      fullWidth
                      variant="filled"
                      type="address"
                      label="Address"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.address}
                      name="address"
                      error={!!touched.address && !!errors.address}
                      helperText={touched.address && errors.address}
                      sx={{ gridColumn: "span 1", marginBottom: "2px" }}
                    />

                  </Grid>

                  <Grid item xs={12} md={12}>

                    <TextField
                      // disabled
                      size="small"
                      fullWidth
                      variant="filled"
                      type="text"
                      label="Description"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.description}
                      name="description"
                      error={!!touched.description && !!errors.description}
                      helperText={touched.description && errors.description}
                      sx={{ gridColumn: "span 1", marginBottom: "2px" }}
                      multiline
                      rows={8}
                    />

                  </Grid>








                  <div style={{
                    display: 'flex',
                    gap: '0.5rem',
                    marginTop: '1rem',
                    marginLeft: '1.5rem'
                  }}>
                    <Button
                      variant="contained"
                      size="medium"
                      color="error"
                      sx={{ mx: "auto", width: 150 }}
                    onClick={toggleDrawer(false)}
                    >
                      Back
                    </Button>
                    <Button
                      variant="contained"
                      type="submit"
                      size="medium"
                      color="secondary"
                      sx={{ mx: "auto", width: 150 }}
                    // onClick={toggleDrawer(anchor, false)}
                    >
                      Create New Chain
                    </Button>
                    


                  </div>


                </Grid>
              </form>
            )}
          </Formik>
        </Paper>
      </Box>
      {/* <Divider /> */}
      {/* <Button color="secondary" variant="contained" onClick={toggleDrawer(false)}>Create Property</Button> */}

    </Box>
  );












  return (
    <div>
      <React.Fragment >
        <Button onClick={toggleDrawer(true)}>Create NEW cHAIN</Button>
        <Drawer
          anchor={"right"}
          open={open}
        // onClose={toggleDrawer(anchor, false)}
        >
          {list()}
        </Drawer>
      </React.Fragment>
    </div>
  );
}