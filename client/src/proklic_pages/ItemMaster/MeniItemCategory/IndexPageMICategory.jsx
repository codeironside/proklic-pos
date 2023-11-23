
import * as React from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import { Paper, useTheme } from '@mui/material';
import { tokens } from '../../../theme';
import Button from '@mui/material/Button';
import Header from '../../../components/Header';
import LoupeIcon from '@mui/icons-material/Loupe';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { useState } from 'react';
import MenuItemCategoryManage from './MenuItemCategoryManage';
import MenuItemCategoryCreate from './MenuItemCategoryCreate';
import MenuItemTestFile from './MenuItemTestFile'
import { Link } from 'react-router-dom';
import PrintRowCategory from './PrintRowCategory';


function Copyright() {
    return (
      <Typography variant="body2" color="text.secondary" align="center " sx={{ mt: "30px" }}>
        {'Copyright © '}
        <Link color="inherit" href="#">
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }


export default function IndexPageMICategory() {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const [page, setPage] = useState(false);
    const [showback, setShowback] = useState(false);
    const [showAddNew, setshowAddNew] = useState(true);




    async function addMenuItem(ev) {
        ev.preventDefault();
        setPage(true);
        setShowback(true);
        setshowAddNew(false)
    }
    async function viewMenuItem(ev) {
        ev.preventDefault();
        setPage(false)
        setShowback(false);
        setshowAddNew(true)
    }


    return (
        <Box m="20px">
            <Box display="flex" justifyContent="space-between" p={2}>
            <Header title="Menu Item Category" subtitle="Menu Item Category" />

                <Box>
                    
                    
                   
                    {showAddNew && <Button
                        onClick={addMenuItem}
                        sx={{
                            backgroundColor: colors.primary[900],
                            color: colors.grey[100],
                            fontSize: "14px",
                            fontWeight: "bold",
                            padding: "10px 20px",
                        }}
                    >
                        <LoupeIcon sx={{ mr: "10px" }} />
                        Add in Multiples
                    </Button>}

                    {showback && <Button
                    onClick={viewMenuItem}
                        variant="contained"
                        type="submit"
                        sx={{
                            backgroundColor: colors.primary[900],
                            color: colors.grey[100],
                            fontSize: "14px",
                            fontWeight: "bold",
                            padding: "10px 20px",
                            marginLeft: "10px",
                            mr: "15px"
                        }}
                        
                        >
                        <ArrowBackIosNewIcon sx={{ mr: "10px" }} />
                        Back 
                    </Button>}
                </Box>
            </Box>
            {page === false ?
                <>
                    {/* Show Data */}
                    {/* <MenuItemCategoryManage /> */}
                    <MenuItemTestFile />
                </>

                :
                <>
                    <div >

                        <PrintRowCategory  />
                    </div>

                </>}




                <Copyright />
        </Box>
    );
}

