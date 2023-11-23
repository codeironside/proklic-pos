import React from "react";
import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
// useNavigate
// axios

const FormsIndex = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const navigate = useNavigate();





  const phoneRegExp =
    /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

  const checkoutSchema = yup.object().shape({
    firstName: yup.string().required("required"),
    lastName: yup.string().required("required"),
    userName: yup.string().required("required"),
    property_id: yup.string().required("required"),
    role: yup.string().required("required"),
    level: yup.string().required("required"),
    email: yup.string().email("invalid email").required("required"),
    password: yup
      .string()
      .min(6, "Password must be 6 character length")
      .required("Password is required!"),
    phoneNumber: yup
      .string()
      .matches(phoneRegExp, "Phone number is not valid")
      .required("required"),
    alternate_id: yup.string().required("required"),
    id: yup.string().required("required"),
    payroll_id: yup.string().required("required"),
  });

  const initialValues = {
    firstName: "",
    lastName: "",
    userName: "",
    property_id: "",
    role: "",
    level: "",
    id: "",
    alternate_id: "",
    payroll_id: "",
    password: "",
    phoneNumber: "",
    email: "",
  };
  const handleFormSubmit = (values) => {
    // e.preventDefault();
    console.log(values);
    axios.post('/auth/register/', values);
    navigate("/dashboard/team")
  };


  return (
    <Box m="20px">
      <Header title="Create User" subtitle="Create a New User Profile" />
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
                " & > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
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
                sx={{ gridColumn: "span 1" }}
              />
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
                sx={{ gridColumn: "span 1" }}
              />
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
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                size="small"
                fullWidth
                variant="filled"
                type="text"
                label="Property ID"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.property_id}
                name="property_id"
                error={!!touched.property_id && !!errors.property_id}
                helperText={touched.property_id && errors.property_id}
                sx={{ gridColumn: "span 1" }}
              />
              <TextField
                size="small"
                fullWidth
                variant="filled"
                type="text"
                label="Role"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.role}
                name="role"
                error={!!touched.role && !!errors.role}
                helperText={touched.role && errors.role}
                sx={{ gridColumn: "span 1" }}
              />
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
                sx={{ gridColumn: "span 2" }}
              />
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
                sx={{ gridColumn: "span 1" }}
              />
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
                sx={{ gridColumn: "span 1" }}
              />
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
                sx={{ gridColumn: "span 2" }}
              />

              <TextField
                size="small"
                fullWidth
                variant="filled"
                type="text"
                label="Phone Number"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.phoneNumber}
                name="phoneNumber"
                error={!!touched.phoneNumber && !!errors.phoneNumber}
                helperText={touched.phoneNumber && errors.phoneNumber}
                sx={{ gridColumn: "span 1" }}
              />

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
                sx={{ gridColumn: "span 1" }}
              />

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
                sx={{ gridColumn: "span 2" }}
              />
              {/* <TextField
                size="small"
                fullWidth
                variant="filled"
                type="text"
                label="Contact Number"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.contact}
                name="contact"
                error={!!touched.contact && !!errors.contact}
                helperText={touched.contact && errors.contact}
                sx={{ gridColumn: "span 1" }}
              /> */}
            </Box>
            <Box display="flex" justifyContent="end" mt="20px" >
              <Button type="submit" color="secondary" variant="contained">
                Create New User
              </Button>
              <Link to="/dashboard/team" >
                <Button type="submit" color="secondary" variant="contained" sx={{marginLeft:"15px"}}>
                  Manage Users
                </Button>
              </Link>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default FormsIndex;
