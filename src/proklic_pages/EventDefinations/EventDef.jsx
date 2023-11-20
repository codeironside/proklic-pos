import React from 'react'
import { Box, Typography, useTheme } from '@mui/material'
import Header from '../../components/Header'
import { tokens } from "../../theme";

const EventDef = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);


    return (
        <Box m="20px" >
   
          <Header title="Event Definations" subtitle="Create and define your events" />


    
    
        </Box>
      )
}

export default EventDef