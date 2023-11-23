import React from 'react'
import { Typography, Box, useTheme } from '@mui/material'
import { tokens } from '../theme';

const Header = ({ title, subtitle }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box mb="30px">
            {/* <Typography variant='p'
            color={colors.grey[400]}
            >Property Name:</Typography> */}

            <Typography variant='h2' 
            color={colors.grey[100]} 
            fontWeight="bold"
            sx={{mb:"5px", textTransform: 'capitalize'}}
            >{title}</Typography>

            <Typography variant='h5'
            color={colors.greenAccent[400]}
            >{subtitle}</Typography>
        </Box>
    )
}

export default Header;