import React, { useState } from 'react'
import { Box } from '@mui/material'
import Grid from '@mui/material/Grid';
import { Paper, useTheme } from '@mui/material';
import Typography from '@mui/material/Typography';
import { tokens } from '../../theme';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import { TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Link, useNavigate } from "react-router-dom";
import ConfirmationDialog from "../../components/RoleModal";



const EmployeeCreation = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const isNonMobile = useMediaQuery("(min-width:600px)");
  const navigate = useNavigate();

  const [CheckEditingOptions, setCheckEditingOptions] = React.useState({
    isDeleted: false,
    posLogging: false,
    psmcLogging: false,
  });

  const { isDeleted, posLogging, psmcLogging } = CheckEditingOptions;

  const handleChangeCheckBox = (event) => {
    setCheckEditingOptions({
      ...CheckEditingOptions,
      [event.target.name]: event.target.checked,
    });
  };

  const phoneRegExp =
    /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

  const checkoutSchema = yup.object().shape({
    id: yup.string().required("required"),
    firstName: yup.string().required("required"),
    lastName: yup.string().required("required"),
    checkName: yup.string().required("required"),
    email: yup.string().email("invalid email").required("required"),

    payroll_id: yup.string().required("required"),
    alternate_id: yup.string().required("required"),
    level: yup.string().required("required"),
    group: yup.string().required("required"),

    userName: yup.string().required("required"),
    password: yup.string().min(6, "Password must be 6 character length"),
  });

  const initialValues = {
    firstName: "",
    lastName: "",
    userName: "",
    checkName: "",
    level: "",
    id: "",
    alternate_id: "",
    payroll_id: "",
    password: "",
    email: "",
    group: "",
  };

  // ALL THE BUTTONS HANDLERS

  const handleFormSubmit = (values) => {
    console.log( CheckEditingOptions, modalValue);
    // Optional headers, if needed
    const combinedObject = { ...values, ...CheckEditingOptions }
    const headers = {
      "Content-Type": "application/x-www-form-urlencoded", // Example header
      // Add any other headers as needed
    };
    const url = "http://localhost:3126/employee/register";
    const urlEncode = (values) => {
        return Object.keys(values)
          .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(values[key]))
          .join('&');
      };
    // const [CheckEditingOptions, setCheckEditingOptions] = React.useState({
    //     isDeleted: false,
    //     posLogging: false,
    //     psmcLogging: false,

    // });

    const {
        isDeleted, posLogging,
        psmcLogging,

    } = CheckEditingOptions;

    const handleChangeCheckBox = (event) => {
        setCheckEditingOptions({ ...CheckEditingOptions, [event.target.name]: event.target.checked });
    };

    // Making the POST request using fetch()
    fetch(url, {
      method: "POST",
      headers: headers,
      body:  urlEncode(combinedObject),
     
    })
      .then((response) => {
        // Check if the response is successful
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json(); // Parse response data as JSON
      })
      .then((responseData) => {
        console.log("Response:", responseData);
        // Handle the response data here
      })
      .catch((error) => {
        console.error("Error:", error);
        // Handle errors here
      });
  };

  const handleAddRoleClick = () => {
    console.log("handleAddRole Click");
  };
  const handleDeleteRoleClick = () => {
    console.log("handleDeleteRole Click");
  };
  const handleViewRoleConfigClick = () => {
    console.log("handleViewRoleConfig Click");
  };

  // MODAL FOR SELECT USER ROLE HANDLER
  const [modalValue, setModalValue] = useState();

  return (
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
          <Grid container spacing={2}>
            <Grid item container direction="column" xs={12} sm={6}>
              <Typography
                variant="h4"
                gutterBottom
                sx={{ mt: 2 }}
                color={colors.greenAccent[400]}
              >
                <strong>Employee Record</strong>
              </Typography>
              <Grid container>
                <Paper variant="outlined" sx={{ padding: "10px" }}>
                  <Grid container spacing={2}>
                    {/* <Grid item xs={12} md={6}>

                                    </Grid> */}
                                        <Grid item xs={12} md={6}>

                                            <TextField
                                                size="small"
                                                fullWidth
                                                variant="filled"
                                                type="text"
                                                label="Employee ID"
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                value={values.id}
                                                name="id"
                                                error={!!touched.id && !!errors.id}
                                                helperText={touched.id && errors.id}
                                                sx={{ gridColumn: "span 1", marginBottom: "5px" }}
                                            />
                                        </Grid>
                                        <Grid item xs={12} md={6}>

                                            <TextField
                                                size="small"
                                                fullWidth
                                                variant="filled"
                                                type="text"
                                                label="First Name"
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                value={values.firstName}
                                                name="firstName"
                                                error={!!touched.firstName && !!errors.firstName}
                                                helperText={touched.firstName && errors.firstName}
                                                sx={{ gridColumn: "span 1", marginBottom: "5px" }}
                                            />
                                        </Grid>

                    <Grid item xs={12} md={6}>
                      <TextField
                        size="small"
                        fullWidth
                        variant="filled"
                        type="text"
                        label="Last Name"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.lastName}
                        name="lastName"
                        error={!!touched.lastName && !!errors.lastName}
                        helperText={touched.lastName && errors.lastName}
                        sx={{ gridColumn: "span 1", marginBottom: "5px" }}
                      />
                    </Grid>

                    <Grid item xs={12} md={6}>
                      <TextField
                        size="small"
                        fullWidth
                        variant="filled"
                        type="text"
                        label="Check Name"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.checkName}
                        name="checkName"
                        error={!!touched.checkName && !!errors.checkName}
                        helperText={touched.checkName && errors.checkName}
                        sx={{ gridColumn: "span 2", marginBottom: "5px" }}
                      />
                    </Grid>

                    <Grid item xs={12} md={6}>
                      <TextField
                        size="small"
                        fullWidth
                        variant="filled"
                        type="text"
                        label="Email"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.email}
                        name="email"
                        error={!!touched.email && !!errors.email}
                        helperText={touched.email && errors.email}
                        sx={{ gridColumn: "span 1", marginBottom: "5px" }}
                      />
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
              <Typography
                variant="h4"
                gutterBottom
                sx={{ mt: 2 }}
                color={colors.greenAccent[400]}
              >
                <strong>Roles</strong>
              </Typography>
              <Grid container>
                <Paper variant="outlined" sx={{ padding: "10px" }}>
                  <Grid container spacing={2}>
                    <Button
                      variant="contained"
                      onClick={handleAddRoleClick}
                      sx={{ mt: 3, ml: 1 }}
                    >
                      Add Role
                    </Button>
                    <Button
                      variant="contained"
                      onClick={handleDeleteRoleClick}
                      sx={{ mt: 3, ml: 1 }}
                    >
                      Delete Role
                    </Button>
                    <Link to="/dashboard/team">
                      <Button
                        variant="contained"
                        onClick={handleViewRoleConfigClick}
                        sx={{ mt: 3, ml: 1 }}
                      >
                        View role configuration
                      </Button>
                    </Link>
                  </Grid>
                  <ConfirmationDialog setModalValue={setModalValue} />
                </Paper>
              </Grid>
            </Grid>

            <Grid item container direction="column" xs={12} sm={6}>
              <Typography
                variant="h4"
                gutterBottom
                sx={{ mt: 1 }}
                color={colors.greenAccent[400]}
              >
                <strong>General Settings</strong>
              </Typography>
              <Grid container>
                <Paper variant="outlined" sx={{ padding: "10px" }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                      <TextField
                        size="small"
                        fullWidth
                        variant="filled"
                        type="text"
                        label="ID"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.id}
                        name="id"
                        error={!!touched.id && !!errors.id}
                        helperText={touched.id && errors.id}
                        sx={{ gridColumn: "span 1", marginBottom: "5px" }}
                      />
                    </Grid>

                    <Grid item xs={12} md={6}>
                      <TextField
                        size="small"
                        fullWidth
                        variant="filled"
                        type="text"
                        label="Payroll ID"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.payroll_id}
                        name="payroll_id"
                        error={!!touched.payroll_id && !!errors.payroll_id}
                        helperText={touched.payroll_id && errors.payroll_id}
                        sx={{ gridColumn: "span 2", marginBottom: "5px" }}
                      />
                    </Grid>

                    <Grid item xs={12} md={6}>
                      <TextField
                        size="small"
                        fullWidth
                        variant="filled"
                        type="text"
                        label="Alternate ID"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.alternate_id}
                        name="alternate_id"
                        error={!!touched.alternate_id && !!errors.alternate_id}
                        helperText={touched.alternate_id && errors.alternate_id}
                        sx={{ gridColumn: "span 1", marginBottom: "5px" }}
                      />
                    </Grid>

                    <Grid item xs={12} md={6}>
                      <TextField
                        size="small"
                        fullWidth
                        variant="filled"
                        type="text"
                        label="Level"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.level}
                        name="level"
                        error={!!touched.level && !!errors.level}
                        helperText={touched.level && errors.level}
                        sx={{ gridColumn: "span 2", marginBottom: "5px" }}
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <TextField
                        size="small"
                        fullWidth
                        variant="filled"
                        type="text"
                        label="Group"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.group}
                        name="group"
                        error={!!touched.group && !!errors.group}
                        helperText={touched.group && errors.group}
                        sx={{ gridColumn: "span 2", marginBottom: "5px" }}
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <TextField
                        size="small"
                        fullWidth
                        variant="filled"
                        type="text"
                        label="Alternate ID"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.alternate_id}
                        name="alternate_id"
                        error={!!touched.alternate_id && !!errors.alternate_id}
                        helperText={touched.alternate_id && errors.alternate_id}
                        sx={{ gridColumn: "span 1", marginBottom: "5px" }}
                      />
                    </Grid>
                  </Grid>
                  <FormControlLabel
                    control={
                      <Checkbox
                        color="secondary"
                        checked={isDeleted}
                        onChange={handleChangeCheckBox}
                        name="isDeleted"
                        value="yes"
                      />
                    }
                    label="is Deleted"
                  />
                </Paper>
              </Grid>

              <Typography
                variant="h4"
                gutterBottom
                sx={{ mt: 2 }}
                color={colors.greenAccent[400]}
              >
                <strong>PSMC Login Settings</strong>
              </Typography>
              <Grid container>
                <Paper variant="outlined" sx={{ padding: "10px" }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                      <TextField
                        size="small"
                        fullWidth
                        variant="filled"
                        type="text"
                        label="User Name"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.userName}
                        name="userName"
                        error={!!touched.userName && !!errors.userName}
                        helperText={touched.userName && errors.userName}
                        sx={{ gridColumn: "span 2", marginBottom: "5px" }}
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <TextField
                        size="small"
                        fullWidth
                        variant="filled"
                        type="password"
                        label="Password"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.password}
                        name="password"
                        error={!!touched.password && !!errors.password}
                        helperText={touched.password && errors.password}
                        sx={{ gridColumn: "span 2", marginBottom: "5px" }}
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <TextField
                        size="small"
                        fullWidth
                        variant="filled"
                        type="text"
                        label="ID"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.id}
                        name="id"
                        error={!!touched.id && !!errors.id}
                        helperText={touched.id && errors.id}
                        sx={{ gridColumn: "span 1", marginBottom: "5px" }}
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <TextField
                        size="small"
                        fullWidth
                        variant="filled"
                        type="text"
                        label="Alternate ID"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.alternate_id}
                        name="alternate_id"
                        error={!!touched.alternate_id && !!errors.alternate_id}
                        helperText={touched.alternate_id && errors.alternate_id}
                        sx={{ gridColumn: "span 1", marginBottom: "5px" }}
                      />
                    </Grid>
                  </Grid>

                  <FormControlLabel
                    control={
                      <Checkbox
                        color="secondary"
                        checked={posLogging}
                        onChange={handleChangeCheckBox}
                        name="posLogging"
                        value="yes"
                      />
                    }
                    label="User can acess POS"
                  />

                  <FormControlLabel
                    control={
                      <Checkbox
                        color="secondary"
                        checked={psmcLogging}
                        onChange={handleChangeCheckBox}
                        name="psmcLogging"
                        value="yes"
                      />
                    }
                    label="User can acess PSMC"
                  />
                </Paper>
              </Grid>
            </Grid>
          </Grid>
          <Button variant="contained" type={`submit`} sx={{ mt: 3, ml: 1 }}>
            Save Changes
          </Button>
        </form>
      )}
    </Formik>
  );
};

export default EmployeeCreation;
