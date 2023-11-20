import React from "react";
import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import { Link, useNavigate } from "react-router-dom";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import axios from "axios";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
// useNavigate
// axios

const RoleCreation = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const navigate = useNavigate();

  // const [role, setRole] = React.useState('');

  // const handleChangeSelect = (event) => {
  //   setRole(event.target.value);
  // };

  const phoneRegExp =
    /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

  const checkoutSchema = yup.object().shape({
    id: yup.string().required("required"),
    role: yup.string().required("required"),
    level: yup.string().required("required"),
  });

  const initialValues = {
    id: "",
    role: "",
    level: "",
  };
  const handleFormSubmit = (values) => {
    // e.preventDefault();
    console.log(values);
    // axios.post('/auth/register/', values);
    navigate("/dashboard/team");
  };

  return (
    <Box m="20px">
      <Container component="main" maxWidth="sm" sx={{ mb: 4, mb: 32 }}>
        <Paper
          variant="outlined"
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
        >
          <Header
            title="Create User Roles"
            subtitle="Create a New User Profile"
          />
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
                <Box
                  mb="50px"
                  display="grid"
                  gap="30px"
                  gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                  sx={{
                    " & > div": {
                      gridColumn: isNonMobile ? undefined : "span 4",
                    },
                  }}
                >
                  {/* <FormControl sx={{ gridColumn: "span 4" }}>
        <InputLabel id="demo-simple-select-helper-label">Role</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.role}
          label="Role"
          name="role"
          error={!!touched.role && !!errors.role}
          helperText={touched.role && errors.role}
          // onChange={handleChangeSelect}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem disabled value="superole">Super Role</MenuItem>
          <MenuItem value="general_manager">General Manager</MenuItem>
          <MenuItem value="manager">Manager</MenuItem>
          <MenuItem value="supervisor">Supervisor</MenuItem>
          <MenuItem value="bartender">Bartender</MenuItem>
          <MenuItem value="host">Host</MenuItem>
          <MenuItem value="server">Server</MenuItem>
        </Select>
        <FormHelperText>With label + helper text</FormHelperText>
      </FormControl> */}

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
                    sx={{ gridColumn: "span 4" }}
                  />

                  <TextField
                    size="small"
                    fullWidth
                    variant="filled"
                    type="text"
                    label="Role Name"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.role}
                    name="role"
                    error={!!touched.role && !!errors.role}
                    helperText={touched.role && errors.role}
                    sx={{ gridColumn: "span 4" }}
                  />

                  <FormControl sx={{ gridColumn: "span 4" }}>
                    <InputLabel id="demo-simple-select-helper-label1">
                      Level
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-helper-label1"
                      id="demo-simple-select-helper1"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.level}
                      label="Level"
                      name="level"
                      error={!!touched.level && !!errors.level}
                      helperText={touched.level && errors.level}
                      // onChange={handleChangeSelect}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={1}> 1</MenuItem>
                      <MenuItem value={2}>2</MenuItem>
                      <MenuItem value={3}>3</MenuItem>
                      <MenuItem value={4}>4</MenuItem>
                      <MenuItem value={5}>5</MenuItem>
                      <MenuItem value={6}>6</MenuItem>
                      <MenuItem value={7}>7</MenuItem>
                    </Select>
                  </FormControl>

                  {/* <TextField
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
                sx={{ gridColumn: "span 4" }}
              /> */}
                </Box>
                <Box display="flex" justifyContent="end" mt="20px">
                  <Button type="submit" color="secondary" variant="contained">
                    Create New ROLE
                  </Button>
                  <Link to="/dashboard/team">
                    <Button
                      type="submit"
                      color="secondary"
                      variant="contained"
                      sx={{ marginLeft: "15px" }}
                    >
                      Manage ROLES
                    </Button>
                  </Link>
                </Box>
              </form>
            )}
          </Formik>
        </Paper>
      </Container>
    </Box>
  );
};

export default RoleCreation;
