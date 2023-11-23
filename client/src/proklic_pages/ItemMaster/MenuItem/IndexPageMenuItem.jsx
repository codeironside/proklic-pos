
import * as React from 'react';
import { Box, IconButton } from '@mui/material';
import { Paper, useTheme } from '@mui/material';
import Button from '@mui/material/Button';
import { tokens } from '../../../theme';
import Header from '../../../components/Header';
import LoupeIcon from '@mui/icons-material/Loupe';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { useState } from 'react';
import MenuItemMasterManage from './MenuItemMasterManage';
import MenuItemMastersCreate from './MenuItemMastersCreate';
import MenuItemMasterTest from './MenuItemMasterTest'
import PrintRowComponent from './PrintRowComponent';







export default function IndexPageMenuItem() {

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
                <Header title="Menu Items Master" subtitle="Create menu items" />

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
                        Add in multiple
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
                    {/* <MenuItemMasterManage /> */}

                    <MenuItemMasterTest />
                </>

                :
                <>
                    <div >

                        <PrintRowComponent  />
                    </div>

                </>}





        </Box>
    );
}

