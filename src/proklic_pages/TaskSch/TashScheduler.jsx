import React from 'react'
import { Box, Typography, useTheme } from '@mui/material'
import Header from '../../components/Header'
import { tokens } from "../../theme";

const TaskScheduler = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);


    return (
        <Box m="20px" >
   
          <Header title="Task Scheduler" subtitle="Schedule  your tasks" />


    
    
        </Box>
      )
}

export default TaskScheduler