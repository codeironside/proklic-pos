import React, { useContext, useState } from 'react';

import { Box, Button, IconButton, useTheme } from '@mui/material';
import { ColorModeContext, tokens } from '../../../theme';
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
// import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
// import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import LogoutTwoToneIcon from '@mui/icons-material/LogoutTwoTone';
import axios from 'axios';

import { AuthContext } from '../../../context/AuthContext';
import { Navigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';


const TopBar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode)
  const colorMode = useContext(ColorModeContext);
  const [redirect, setRedirect] = useState(null)

  const { dispatch } = useContext(AuthContext);

  // LOGOUT
  async function Logout(ev) {
    ev.preventDefault();
    setRedirect("/")
    // dispatch({ type: "LOGOUT_START" });


    // axios.post("/auth/logout").then((res) => {
    //   console.log(res.status)
    //   if (res.status === 200) {
    //     console.log("done!")
    //     dispatch({ type: "LOGOUT" });
    //     setRedirect("/")
    //     // user == " "
    //   } else {
    //     dispatch({ type: "LOGOUT_FAILURE" });
    //   }
    // });
  }

  if (redirect) {
    return <Navigate to={redirect} />
  }


     // saveSettings(settings), onClick={colorMode.toggleColorMode}
  // const notify = () => toast.promise(
  //   colorMode.toggleColorMode,
  //    {
  //      loading: 'Saving...',
  //      success: <b>Settings saved!</b>,
  //      error: <b>Could not save.</b>,
  //    }
  //  );

  const notify = () => toast.success('Successfully toasted!')





    

  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      {/* SEARCH BAR */}
      <Box display="flex" backgroundColor={colors.primary[400]} borderRadius="3px">
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
        <IconButton type='button' sx={{ p: 1 }}>
          <SearchIcon></SearchIcon>
        </IconButton>
      </Box>

      {/* ICONS */}
      <Box display="flex" >


        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? <DarkModeOutlinedIcon /> : <LightModeOutlinedIcon />}
        </IconButton>

        <IconButton onClick={notify}>
          <NotificationsOutlinedIcon />
          <Toaster 
          toastOptions={{
            success: {
              iconTheme: {
                secondary: 'black',
              },
              // style: {
              //   backgroundColor: "#A0C835"
              // },
            },
            className: '',
            style: {
              // border: '1px solid #000',
              padding: '16px',
              fontSize: "15px",
              color: '#000',
              boxShadow: 'none !important'
            },
          }}
          />
        </IconButton>

        <IconButton>
          <SettingsOutlinedIcon />
        </IconButton>

        {/* <IconButton onClick={Logout}>
          <PersonOutlinedIcon /> <small className='mr-2'>Logout</small> 
        </IconButton> */}

        <Box>
          <Button
          onClick={Logout}
            sx={{
              backgroundColor: colors.primary[900],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <LogoutTwoToneIcon sx={{ mr: "10px" }} />
            Logout
          </Button>
        </Box>

      </Box>
    </Box>
  )
}

export default TopBar