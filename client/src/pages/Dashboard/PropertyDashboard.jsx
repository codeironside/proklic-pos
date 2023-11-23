import React, {Suspense} from 'react'
import { IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { mockTransactions } from "../../data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import DashboardHeader from "../../components/DashboardHeader";

import { Link, useLocation, useNavigate } from 'react-router-dom';
import FormGroup from '@mui/material/FormGroup';
import StatBox from "../../components/StatBox";

import AccountTreeRoundedIcon from '@mui/icons-material/AccountTreeRounded';
import MapsHomeWorkRoundedIcon from '@mui/icons-material/MapsHomeWorkRounded';
import ReceiptRoundedIcon from '@mui/icons-material/ReceiptRounded';
import ManageAccountsRoundedIcon from '@mui/icons-material/ManageAccountsRounded';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import DevicesOtherIcon from '@mui/icons-material/DevicesOther';
import AssessmentIcon from '@mui/icons-material/Assessment';
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import LoupeIcon from '@mui/icons-material/Loupe';

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
import * as yup from "yup";




const PropertyDashboard = () => {

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);




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



 
  const  handleFormSubmit = async (values) =>  {
    let properties = [
      { branch_id: 1, branch_name: "Spar", type_of_branch: "Property", address: "Lekki", description: "rvc 1"  },
      { branch_id: 2, branch_name: "Chicken", type_of_branch: "Property", address: "Lekki", description: "rvc 1"  },
      { branch_id: 3, branch_name: "Groceries", type_of_branch: "Property", address: "Lekki", description: "rvc 1"  },
    ];
  

    // Connect to API from here
      const combinedObject = { ...values, type_of_branch }
      // const formBody = JSON.stringify(combinedObject);
      console.log(combinedObject)
      
        const newProperty = { 
          branch_id: properties.length + 1, 
          branch_name: combinedObject.branch_name,
          type_of_branch: combinedObject.type_of_branch,
          address: combinedObject.address,
          description: combinedObject.description,
        }
        properties.push(newProperty);

        console.log(properties)
  };



//   fetch('https://proklic-pos-production.up.railway.app/branch/getall')
//   .then(response => response.json())
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {
//     console.error(error);
//   });




  const list = () => (
    <Box
      sx={{ width: 400, justifyItems: 'center', alignItems: 'center' }}
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
            <strong> Create New Revenue Center </strong>
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
                    <FormControl sx={{ minWidth: 330 }} size="small">
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
                    marginLeft: '1.5rem',
                    // width: "80%"
                  }}>
                    <Button
                      variant="contained"
                      size="medium"
                      color="error"
                      sx={{ mx: "auto", width: 100 }}
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
                     Create New RVC
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


















  const location = useLocation();
  const myData = location.state;
  console.log(myData);


  const navigate = useNavigate();
  function handleClick(allProps) {
    navigate(`/dashboard/${myData._id}/menu_items_sets`, { state: allProps });
  }
  function handleDiscount(allProps) {
    navigate(`/dashboard/${myData._id}/discount`, { state: allProps });
  }
  // to={``}

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        {/* <Typography variant='h5'>
        DashboardIndex
      </Typography> */}

        <DashboardHeader title={` ${myData.branch_name}`} subtitle={`Property ID: ${myData._id}`} />
        <Box>
          <Button
          onClick={toggleDrawer(true)}
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <LoupeIcon sx={{ mr: "10px" }} />
            Create New Revenue Center
          </Button>
        </Box>
      </Box>

      {/* GRID 1 */}
        {/* <Paper > */}
      <Box sx={{ display: 'flex', marginBottom: '35px' }} alignItems="top" justifyContent="left">
        <FormGroup>

          <StatBox icon={<MapsHomeWorkRoundedIcon />} title="Property Setup" />
          <FormControl sx={{ minWidth: 200 }} style={{ paddingBottom:" 5px" }} size="small">
            <Link className=' hoverkeys' to={`/dashboard/${myData._id}/tax_rate`} style={{ textDecoration: 'none' }}>
              <Typography variant='p' sx={{ color: colors.grey[400] }} >Tax Rate</Typography>
            </Link>
          </FormControl>


          <FormControl sx={{ minWidth: 200 }} style={{ paddingBottom:" 5px" }} size="small">
            <Link className=' hoverkeys' to={`/dashboard/${myData._id}/tax_sets`} style={{ textDecoration: 'none' }}>
              <Typography variant='p' sx={{ color: colors.grey[400] }} >Tax Sets</Typography>
            </Link>
          </FormControl>

          <FormControl sx={{ minWidth: 200 }} style={{ paddingBottom:" 5px" }} size="small">
            <Link className=' hoverkeys' to={`/dashboard/${myData._id}/currency`} style={{ textDecoration: 'none' }}>
              <Typography variant='p' sx={{ color: colors.grey[400] }} >Currency</Typography>
            </Link>
          </FormControl>

          <FormControl sx={{ minWidth: 200 }} style={{ paddingBottom:" 5px" }} size="small">
            <Link className=' hoverkeys' to={`/dashboard/${myData._id}/event_def`} style={{ textDecoration: 'none' }}>
              <Typography variant='p' sx={{ color: colors.grey[400] }} >Event Definition</Typography>
            </Link>
          </FormControl>

          <FormControl sx={{ minWidth: 200 }} style={{ paddingBottom:" 5px" }} size="small">
            <Link className=' hoverkeys' to={`/dashboard/${myData._id}/event_area`} style={{ textDecoration: 'none' }}>
              <Typography variant='p' sx={{ color: colors.grey[400] }} >Event Area</Typography>
            </Link>
          </FormControl>

        </FormGroup>

        {/* FORM GROUP 2 */}
        <FormGroup>

          <StatBox icon={<AccountTreeRoundedIcon />} title="Menu Items" />
          <FormControl sx={{ minWidth: 200 }} style={{ paddingBottom:" 5px" }} size="small">
            <Link className=' hoverkeys' to={`/dashboard/${myData._id}/menu_category`} style={{ textDecoration: 'none' }}>
              <Typography variant='p' sx={{ color: colors.grey[400] }} >MenuItem Categories</Typography>
            </Link>
          </FormControl>


          <FormControl sx={{ minWidth: 200 }} style={{ paddingBottom:" 5px" }} size="small">
            <Link className=' hoverkeys' to={`/dashboard/${myData._id}/menu_item_group`} style={{ textDecoration: 'none' }}>
              <Typography variant='p' sx={{ color: colors.grey[400] }}>MenuItems Group</Typography>
            </Link>
          </FormControl>


          <FormControl sx={{ minWidth: 200 }} style={{ paddingBottom:" 5px" }} size="small">
            <Link className=' hoverkeys' to={`/dashboard/${myData._id}/menu_items`} style={{ textDecoration: 'none' }}>
              <Typography variant='p' sx={{ color: colors.grey[400] }} >MenuItem Master</Typography>
            </Link>
          </FormControl>


          <FormControl sx={{ minWidth: 200 }} style={{ paddingBottom:" 5px" }} size="small">
            <Link className=' hoverkeys' to={`/dashboard/${myData._id}/menu_items_expo`} style={{ textDecoration: 'none' }}>
              <Typography variant='p' sx={{ color: colors.grey[400] }}  >MenuItem RVC Distribution</Typography>
            </Link>
          </FormControl>

          <FormControl sx={{ minWidth: 200 }} style={{ paddingBottom:" 5px" }} size="small">
            <Link className=' hoverkeys' to={`/dashboard/${myData._id}/menu_items_price`} style={{ textDecoration: 'none' }}>
              <Typography variant='p' sx={{ color: colors.grey[400] }} >MenuItem Prices</Typography>
            </Link>
          </FormControl>

          <FormControl sx={{ minWidth: 200 }} style={{ paddingBottom:" 5px" }} size="small">
            <div className=' hoverkeys' onClick={() => handleClick(myData)}  style={{ textDecoration: 'none', cursor: "pointer" }}>
              <Typography variant='p' sx={{ color: colors.grey[400] }} >MenuItem Sets</Typography>
            </div>
          </FormControl>

          <FormControl sx={{ minWidth: 200 }} style={{ paddingBottom:" 5px" }} size="small">
            <Link className=' hoverkeys' to={`/dashboard/${myData._id}/print_sets`} style={{ textDecoration: 'none' }}>
              <Typography variant='p' sx={{ color: colors.grey[400] }} >Print Sets</Typography>
            </Link>
          </FormControl>

          <FormControl sx={{ minWidth: 200 }} style={{ paddingBottom:" 5px" }} size="small">
            <Link className=' hoverkeys' to={`/dashboard/${myData._id}/menu_item_screenlink`} style={{ textDecoration: 'none' }}>
              <Typography variant='p' sx={{ color: colors.grey[400] }} >MenuItem Screen Link</Typography>
            </Link>
          </FormControl>

          <FormControl sx={{ minWidth: 200 }} style={{ paddingBottom:" 5px" }} size="small">
            <Link className=' hoverkeys' to={`/dashboard/${myData._id}/menu_item_avail`} style={{ textDecoration: 'none' }}>
              <Typography variant='p' sx={{ color: colors.grey[400] }} >MenuItem Availability</Typography>
            </Link>
          </FormControl>

          <FormControl sx={{ minWidth: 200 }} style={{ paddingBottom:" 5px" }} size="small">
            <Link className=' hoverkeys' to={`/dashboard/${myData._id}/condiment_set`} style={{ textDecoration: 'none' }}>
              <Typography variant='p' sx={{ color: colors.grey[400] }} >Condiment Sets</Typography>
            </Link>
          </FormControl>

          <FormControl sx={{ minWidth: 200 }} style={{ paddingBottom:" 5px" }} size="small">
            <Link className=' hoverkeys' to="/dashboard/${myData._id}/condiment_gp" style={{ textDecoration: 'none' }}>
              <Typography variant='p' sx={{ color: colors.grey[400] }} >Condiment Group</Typography>
            </Link>
          </FormControl>

          <FormControl sx={{ minWidth: 200 }} style={{ paddingBottom:" 5px" }} size="small">
            <Link className=' hoverkeys' to={`/dashboard/${myData._id}/barcode`} style={{ textDecoration: 'none' }}>
              <Typography variant='p' sx={{ color: colors.grey[400] }} >Barcodes</Typography>
            </Link>
          </FormControl>
          
          <FormControl sx={{ minWidth: 200 }} style={{ paddingBottom:" 5px" }} size="small">
            <Link className=' hoverkeys' to={`/dashboard/${myData._id}/combo_gp`} style={{ textDecoration: 'none' }}>
              <Typography variant='p' sx={{ color: colors.grey[400] }} >Combo Meal Group</Typography>
            </Link>
          </FormControl>

          <FormControl sx={{ minWidth: 200 }} style={{ paddingBottom:" 5px" }} size="small">
            <Link className=' hoverkeys' to={`/dashboard/${myData._id}/combo_ml`} style={{ textDecoration: 'none' }}>
              <Typography variant='p' sx={{ color: colors.grey[400] }} >Combo Meals</Typography>
            </Link>
          </FormControl>

        </FormGroup>



        {/* FORM GROUP 3 */}
        <FormGroup>

          <StatBox icon={<AttachMoneyIcon />} title="Sales Properties" />
          <FormControl sx={{ minWidth: 200 }} style={{ paddingBottom:" 5px" }} size="small">
            <Link className=' hoverkeys' to="" style={{ textDecoration: 'none' }}>
              <Typography variant='p' sx={{ color: colors.grey[400] }} >Payment Mode</Typography>
            </Link>
          </FormControl>


          <FormControl sx={{ minWidth: 200 }} style={{ paddingBottom:" 5px" }} size="small">
            <Link className=' hoverkeys' to="" style={{ textDecoration: 'none' }}>
              <Typography variant='p' sx={{ color: colors.grey[400] }} >Tax </Typography>
            </Link>
          </FormControl>

          <FormControl sx={{ minWidth: 200 }} style={{ paddingBottom:" 5px" }} size="small">
            <Link className=' hoverkeys' to="" style={{ textDecoration: 'none' }}>
              <Typography variant='p' sx={{ color: colors.grey[400] }} >Tax Group</Typography>
            </Link>
          </FormControl>

          <FormControl sx={{ minWidth: 200 }} style={{ paddingBottom:" 5px" }} size="small">
            <Link className=' hoverkeys' to="" style={{ textDecoration: 'none' }}>
              <Typography variant='p' sx={{ color: colors.grey[400] }} >Service Charge</Typography>
            </Link>
          </FormControl>

          <FormControl sx={{ minWidth: 200 }} style={{ paddingBottom:" 5px" }} size="small">
            <Link className=' hoverkeys' to="" style={{ textDecoration: 'none' }}>
              <Typography variant='p' sx={{ color: colors.grey[400] }} >Service Charge Group</Typography>
            </Link>
          </FormControl>

          <FormControl sx={{ minWidth: 200 }} style={{ paddingBottom:" 5px" }} size="small">
            <div className=' hoverkeys'  onClick={() => handleDiscount(myData)}  style={{ textDecoration: 'none', cursor: "pointer" }}>
              <Typography variant='p' sx={{ color: colors.grey[400] }} >Discount </Typography>
            </div>
          </FormControl>

          <FormControl sx={{ minWidth: 200 }} style={{ paddingBottom:" 5px" }} size="small">
            <Link className=' hoverkeys' to="" style={{ textDecoration: 'none' }}>
              <Typography variant='p' sx={{ color: colors.grey[400] }} >Discount Group</Typography>
            </Link>
          </FormControl>

          
          <FormControl sx={{ minWidth: 200 }} style={{ paddingBottom:" 5px" }} size="small">
            <Link className=' hoverkeys' to="" style={{ textDecoration: 'none' }}>
              <Typography variant='p' sx={{ color: colors.grey[400] }} >Combo Meals</Typography>
            </Link>
          </FormControl>

          <FormControl sx={{ minWidth: 200 }} style={{ paddingBottom:" 5px" }} size="small">
            <Link className=' hoverkeys' to="" style={{ textDecoration: 'none' }}>
              <Typography variant='p' sx={{ color: colors.grey[400] }} >Combo Meal Group</Typography>
            </Link>
          </FormControl>

          <FormControl sx={{ minWidth: 200 }} style={{ paddingBottom:" 5px" }} size="small">
            <Link className=' hoverkeys' to="" style={{ textDecoration: 'none' }}>
              <Typography variant='p' sx={{ color: colors.grey[400] }} >Loyalty</Typography>
            </Link>
          </FormControl>

          <FormControl sx={{ minWidth: 200 }} style={{ paddingBottom:" 5px" }} size="small">
            <Link className=' hoverkeys' to="" style={{ textDecoration: 'none' }}>
              <Typography variant='p' sx={{ color: colors.grey[400] }} >Store Value</Typography>
            </Link>
          </FormControl>


        </FormGroup>


        {/* FORM GROUP 4 */}
        <FormGroup>

          <StatBox icon={<HelpCenterIcon />} title="General Information" />
          <FormControl sx={{ minWidth: 200 }} style={{ paddingBottom:" 5px" }} size="small">
            <Link className=' hoverkeys' to="" style={{ textDecoration: 'none' }}>
              <Typography variant='p' sx={{ color: colors.grey[400] }} >Void/Return Reasons</Typography>
            </Link>
          </FormControl>


          <FormControl sx={{ minWidth: 200 }} style={{ paddingBottom:" 5px" }} size="small">
            <Link className=' hoverkeys' to="" style={{ textDecoration: 'none' }}>
              <Typography variant='p' sx={{ color: colors.grey[400] }} >Payment Reasons </Typography>
            </Link>
          </FormControl>

          <FormControl sx={{ minWidth: 200 }} style={{ paddingBottom:" 5px" }} size="small">
            <Link className=' hoverkeys' to="" style={{ textDecoration: 'none' }}>
              <Typography variant='p' sx={{ color: colors.grey[400] }} >Prep Instructions</Typography>
            </Link>
          </FormControl>

          <FormControl sx={{ minWidth: 200 }} style={{ paddingBottom:" 5px" }} size="small">
            <Link className=' hoverkeys' to="" style={{ textDecoration: 'none' }}>
              <Typography variant='p' sx={{ color: colors.grey[400] }} >Sales Analyzer</Typography>
            </Link>
          </FormControl>

          <FormControl sx={{ minWidth: 200 }} style={{ paddingBottom:" 5px" }} size="small">
            <Link className=' hoverkeys' to="" style={{ textDecoration: 'none' }}>
              <Typography variant='p' sx={{ color: colors.grey[400] }} >Service Charge Analyzer</Typography>
            </Link>
          </FormControl>

          <FormControl sx={{ minWidth: 200 }} style={{ paddingBottom:" 5px" }} size="small">
            <Link className=' hoverkeys' to="" style={{ textDecoration: 'none' }}>
              <Typography variant='p' sx={{ color: colors.grey[400] }} >Guest Bill Summary Info </Typography>
            </Link>
          </FormControl>

          <FormControl sx={{ minWidth: 200 }} style={{ paddingBottom:" 5px" }} size="small">
            <Link className=' hoverkeys' to="" style={{ textDecoration: 'none' }}>
              <Typography variant='p' sx={{ color: colors.grey[400] }} >Guest Bill Header</Typography>
            </Link>
          </FormControl>

          
          <FormControl sx={{ minWidth: 200 }} style={{ paddingBottom:" 5px" }} size="small">
            <Link className=' hoverkeys' to="" style={{ textDecoration: 'none' }}>
              <Typography variant='p' sx={{ color: colors.grey[400] }} >Guest Bill Footer</Typography>
            </Link>
          </FormControl>

          <FormControl sx={{ minWidth: 200 }} style={{ paddingBottom:" 5px" }} size="small">
            <Link className=' hoverkeys' to="" style={{ textDecoration: 'none' }}>
              <Typography variant='p' sx={{ color: colors.grey[400] }} >Guest Receipt Header</Typography>
            </Link>
          </FormControl>

        </FormGroup>

        {/* FORM GROUP 5 */}
        <FormGroup>

          <StatBox icon={<AccountBalanceWalletIcon />} title="Revenue Center" />
          <FormControl sx={{ minWidth: 200 }} style={{ paddingBottom:" 5px" }} size="small">
            <Link className=' hoverkeys' to="" style={{ textDecoration: 'none' }}>
              <Typography variant='p' sx={{ color: colors.grey[400] }} >Revenue Center Configuration</Typography>
            </Link>
          </FormControl>


          <FormControl sx={{ minWidth: 200 }} style={{ paddingBottom:" 5px" }} size="small">
            <Link className=' hoverkeys' to="" style={{ textDecoration: 'none' }}>
              <Typography variant='p' sx={{ color: colors.grey[400] }} >Revenue Center Specifications </Typography>
            </Link>
          </FormControl>

          <FormControl sx={{ minWidth: 200 }} style={{ paddingBottom:" 5px" }} size="small">
            <Link className=' hoverkeys' to="" style={{ textDecoration: 'none' }}>
              <Typography variant='p' sx={{ color: colors.grey[400] }} >Payment Specifications</Typography>
            </Link>
          </FormControl>

          <FormControl sx={{ minWidth: 200 }} style={{ paddingBottom:" 5px" }} size="small">
            <Link className=' hoverkeys' to="" style={{ textDecoration: 'none' }}>
              <Typography variant='p' sx={{ color: colors.grey[400] }} >Control Specifications</Typography>
            </Link>
          </FormControl>

          <FormControl sx={{ minWidth: 200 }} style={{ paddingBottom:" 5px" }} size="small">
            <Link className=' hoverkeys' to="" style={{ textDecoration: 'none' }}>
              <Typography variant='p' sx={{ color: colors.grey[400] }} >Serving Period</Typography>
            </Link>
          </FormControl>

          <FormControl sx={{ minWidth: 200 }} style={{ paddingBottom:" 5px" }} size="small">
            <Link className=' hoverkeys' to="" style={{ textDecoration: 'none' }}>
              <Typography variant='p' sx={{ color: colors.grey[400] }} >Order Type </Typography>
            </Link>
          </FormControl>

          <FormControl sx={{ minWidth: 200 }} style={{ paddingBottom:" 5px" }} size="small">
            <Link className=' hoverkeys' to="" style={{ textDecoration: 'none' }}>
              <Typography variant='p' sx={{ color: colors.grey[400] }} >Function Screen</Typography>
            </Link>
          </FormControl>

          
          <FormControl sx={{ minWidth: 200 }} style={{ paddingBottom:" 5px" }} size="small">
            <Link className=' hoverkeys' to="" style={{ textDecoration: 'none' }}>
              <Typography variant='p' sx={{ color: colors.grey[400] }} >Tables</Typography>
            </Link>
          </FormControl>

          <FormControl sx={{ minWidth: 200 }} style={{ paddingBottom:" 5px" }} size="small">
            <Link className=' hoverkeys' to="" style={{ textDecoration: 'none' }}>
              <Typography variant='p' sx={{ color: colors.grey[400] }} >Section</Typography>
            </Link>
          </FormControl>

        </FormGroup>

      </Box>
{/* </Paper> */}

      {/* GRID 2 */}
      <Box sx={{ display: 'flex', marginBottom: '60px' }} alignItems="top" justifyContent="left">
        <FormGroup>

          <StatBox icon={<DevicesOtherIcon />} title="Hardware" />
          <FormControl sx={{ minWidth: 200 }} style={{ paddingBottom:" 5px" }} size="small">
            <Link className=' hoverkeys' to="/dashboard/${myData.branch_id}/event_def" style={{ textDecoration: 'none' }}>
              <Typography variant='p' sx={{ color: colors.grey[400] }} >Workstation Devices</Typography>
            </Link>
          </FormControl>


          <FormControl sx={{ minWidth: 200 }} style={{ paddingBottom:" 5px" }} size="small">
            <Link className=' hoverkeys' to="/dashboard/${myData.branch_id}/event_area" style={{ textDecoration: 'none' }}>
              <Typography variant='p' sx={{ color: colors.grey[400] }} >Printers</Typography>
            </Link>
          </FormControl>

          <FormControl sx={{ minWidth: 200 }} style={{ paddingBottom:" 5px" }} size="small">
            <Link className=' hoverkeys' to="/dashboard/${myData.branch_id}/tasks" style={{ textDecoration: 'none' }}>
              <Typography variant='p' sx={{ color: colors.grey[400] }} >Order Devices</Typography>
            </Link>
          </FormControl>

        </FormGroup>

        {/* FORM GROUP 2 */}
        <FormGroup>

          <StatBox icon={<ManageAccountsRoundedIcon />} title="Employees Setup" />

          <FormControl sx={{ minWidth: 200 }} style={{ paddingBottom:" 5px" }} size="small">
            <Link className=' hoverkeys' to={`/dashboard/${myData._id}/create-role`} style={{ textDecoration: 'none' }}>
              <Typography variant='p' sx={{ color: colors.grey[400] }} >Employees</Typography>
            </Link>
          </FormControl>


          <FormControl sx={{ minWidth: 200 }} style={{ paddingBottom:" 5px" }} size="small">
            <Link className=' hoverkeys' to={`/dashboard/${myData._id}/team`} style={{ textDecoration: 'none' }}>
              <Typography variant='p' sx={{ color: colors.grey[400] }} >Employees Role</Typography>
            </Link>
          </FormControl>

          <FormControl sx={{ minWidth: 200 }} style={{ paddingBottom:" 5px" }} size="small">
            <Link className=' hoverkeys' to={`/dashboard/${myData._id}/create-employee`} style={{ textDecoration: 'none' }}>
              <Typography variant='p' sx={{ color: colors.grey[400] }} >Employees Setup</Typography>
            </Link>
          </FormControl>

          <FormControl sx={{ minWidth: 200 }} style={{ paddingBottom:" 5px" }} size="small">
            <Link className=' hoverkeys' to={`/dashboard/${myData._id}/shift`} style={{ textDecoration: 'none' }}>
              <Typography variant='p' sx={{ color: colors.grey[400] }} >Shift</Typography>
            </Link>
          </FormControl>

        </FormGroup>



        {/* FORM GROUP 3 */}
        <FormGroup>

          <StatBox icon={<AssessmentIcon />} title="Reporting" />
          <FormControl sx={{ minWidth: 200 }} style={{ paddingBottom:" 5px" }} size="small">
            <Link className=' hoverkeys' to="" style={{ textDecoration: 'none' }}>
              <Typography variant='p' sx={{ color: colors.grey[400] }} >Reporting 1</Typography>
            </Link>
          </FormControl>


          <FormControl sx={{ minWidth: 200 }} style={{ paddingBottom:" 5px" }} size="small">
            <Link className=' hoverkeys' to="" style={{ textDecoration: 'none' }}>
              <Typography variant='p' sx={{ color: colors.grey[400] }} >Reporting 2 </Typography>
            </Link>
          </FormControl>

          <FormControl sx={{ minWidth: 200 }} style={{ paddingBottom:" 5px" }} size="small">
            <Link className=' hoverkeys' to={`/dashboard/${myData._id}/tasks`} style={{ textDecoration: 'none' }}>
              <Typography variant='p' sx={{ color: colors.grey[400] }} >Reporting 3</Typography>
            </Link>
          </FormControl>
        </FormGroup>


  
      </Box>


      {/* CREATE CHAIN DRAWER */}
      <React.Fragment >
        {/* <Button onClick={toggleDrawer(true)}>Create NEW cHAIN</Button> */}
        <Drawer
          anchor={"right"}
          open={open}
        // onClose={toggleDrawer(anchor, false)}
        >
          {list()}
        </Drawer>
      </React.Fragment>
    </Box>
  );
}

export default PropertyDashboard