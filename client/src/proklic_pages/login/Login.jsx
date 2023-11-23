import React, { useContext } from 'react'
import { NavLink, Navigate, Outlet, useLocation, useNavigate } from 'react-router-dom';

import { LoadingButton } from '@mui/lab';
import { Card, Checkbox, Grid, TextField } from '@mui/material';
import { Box, styled, useTheme } from '@mui/system';
import { Button, IconButton, Typography } from "@mui/material";

// import { Typography } from 'app/components/Typography';
// import useAuth from 'app/hooks/useAuth';

import axios from "axios"
import { Formik } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';
import { tokens } from "../../theme"








const FlexBox = styled(Box)(() => ({ display: 'flex', alignItems: 'center' }));

const JustifyBox = styled(FlexBox)(() => ({ justifyContent: 'center' }));

const ContentBox = styled(Box)(() => ({
  height: '100%',
  padding: '32px',
  position: 'relative',
  background: 'rgba(0, 0, 0, 0.01)',
}));

const JWTRoot = styled(JustifyBox)(() => ({
  background: '#1A2038',
  minHeight: '100% !important',
  '& .card': {
    maxWidth: 800,
    minHeight: 400,
    margin: '1rem',
    display: 'flex',
    borderRadius: 12,
    alignItems: 'center',
  },
}));

// inital login credentials
const initialValues = {
  userName: '',
  password: '',
  remember: true,
};

// form field validation schema
const validationSchema = Yup.object().shape({
  password: Yup.string()
    .min(6, 'Password must be 6 character length')
    .required('Password is required!'),
  userName: Yup.string()
    .required('Username is required!'),
});

const Login = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate ();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(" ");

  // const navigate = useNavigate();
  // const location = useLocation();
  // const from = location.state?.from?.pathname || "/";

  console.log(error)





  const handleFormSubmit = async (values) => {
    navigate("/dashboard/DashboardIndex",  { state: values } );
    // e.preventDefault();
    // setLoading(true)


    // try {
    //   const res = await axios.post("/auth/login",
    //   values,
    //     {
    //       headers: { 'Content-Type': 'application/json' },
    //       withCredentials: true
    //     }
    //   );
    //   const myData = res.data.details;
    //   console.log(res.data.details)
    //   localStorage.setItem("prolick_user", JSON.stringify(res.data.details));
    //   navigate("/dashboard/DashboardIndex",  { state: res.data.details } );

    //   setLoading(false);
    // } catch (err) {
    //   if (!err?.response) {
    //     setError('No Server Response');
    //     console.log(!err?.response)
    //     setLoading(false);
    //   } else if (err.response?.status === 400) {
    //     setError('Username or Password is wrong!');
    //     setLoading(false);
    //   } else if (err.response?.status === 401) {
    //     setError('You are not Unauthorized!');
    //     setLoading(false);
    //   } else {
    //     setError('User not found!');
    //     setLoading(false);
    //   }
      
    // }
  }




  return (
    <JWTRoot>
      <Card className="card" style={{ backgroundColor: colors.primary[400] }}>
        <Grid container>
          <Grid item sm={6} xs={12} >
            <JustifyBox p={0} height="100%" sx={{ minWidth: 320 }}>
              <Box mb="25px">
                <Box display="flex" justifyContent="center" alignItems="center" sx={{ marginBottom: "15px" }} >
                  <img
                    alt="profile-user"
                    width="100px"
                    height="100px"
                    src={`../../assets/posting_photo.svg`}
                    style={{ cursor: "pointer", borderRadius: "50%" }}
                  />
                </Box>
                <Box textAlign="center" >

                  <Typography variant="h5" color={colors.greenAccent[500]}  >
                    <Typography variant='5'  >PROKLICK RESTAURANT MANAGEMENT SYSTEM</Typography>
                  </Typography>
                </Box>
              </Box>

              {/* <img src="/assets/restuarant.jpg" width="100%" alt="" /> */}
            </JustifyBox>
          </Grid>

          <Grid item sm={6} xs={12}>
            <ContentBox>
              <Typography
                variant="h2"
                color={colors.grey[100]}
                fontWeight="bold"
                sx={{ m: "10px 0 20px 0" }}
              >
                LOGIN
              </Typography>
              <Formik
                onSubmit={handleFormSubmit}
                initialValues={initialValues}
                validationSchema={validationSchema}
              >
                {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
                  <form onSubmit={handleSubmit}>
                    <TextField
                      fullWidth
                      size="small"
                      type="text"
                      name="userName"
                      label="Username"
                      variant="outlined"
                      onBlur={handleBlur}
                      value={values.userName}
                      onChange={handleChange}
                      helperText={touched.userName && errors.userName}
                      error={Boolean(errors.userName && touched.userName)}
                      sx={{ mb: 3 }}
                    />

                    <TextField
                      fullWidth
                      size="small"
                      name="password"
                      type="password"
                      label="Password"
                      variant="outlined"
                      onBlur={handleBlur}
                      value={values.password}
                      onChange={handleChange}
                      helperText={touched.password && errors.password}
                      error={Boolean(errors.password && touched.password)}
                      sx={{ mb: 1.5 }}
                    />

                    <Typography color="#BE161D" sx={{ marginBottom: 3 }}>{error && <span>{error}</span>}</Typography >

                    <FlexBox justifyContent="space-between">
                      {/* <FlexBox gap={1}>
                        <Checkbox
                          size="small"
                          name="remember"
                          onChange={handleChange}
                          checked={values.remember}
                          sx={{ padding: 0 }}
                        />

                        <Typography>Remember Me</Typography>
                      </FlexBox> */}

                      <NavLink
                        to="/forgot-password"
                        style={{ color: theme.palette.primary.main }}
                      >
                        Forgot password?
                      </NavLink>
                    </FlexBox>

                    <LoadingButton

                      type="submit"
                      color="primary"
                      loading={loading}
                      variant="contained"
                      sx={{ my: 2 }}
                    >
                      Login
                    </LoadingButton>

                    {/* <Typography>
                      Don't have an account?
                      <NavLink
                        to="/session/signup"
                        style={{ color: theme.palette.primary.main, marginLeft: 5 }}
                      >
                        Register
                      </NavLink>
                    </Typography> */}
                  </form>
                )}
              </Formik>
            </ContentBox>
          </Grid>
        </Grid>
        {/* <Outlet /> */}
      </Card>
    </JWTRoot>
  );
}

export default Login