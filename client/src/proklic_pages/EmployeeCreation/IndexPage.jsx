import React, { useState } from 'react'
import Header from '../../components/Header'
import { tokens } from "../../theme";
import { useLocation, useParams } from "react-router-dom";
import { useTheme } from "@mui/material";


import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import { Box } from '@mui/material'
import EmployeeCreation from './EmployeeCreation';
import EmpPropertySetup from './EmpPropertySetup';

const IndexPage = () => {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box m="20px">
            <Header title="Setup Employee" subtitle="Create employee and assign roles" />
            <Box sx={{ width: '100%', typography: 'body1' }}>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList
                            onChange={handleChange}
                            aria-label="proklic-pos example"
                            variant="scrollable"
                            scrollButtons="auto"
                        // aria-label="scrollable auto tabs example"
                        >
                            <Tab label="Setup Employee" value="1" />
                            <Tab label="Property Summary" value="2" />

                        </TabList>
                    </Box>
                    <TabPanel value="1">
                        <EmployeeCreation />
                    </TabPanel>
                    <TabPanel value="2">
                        <EmpPropertySetup />
                    </TabPanel>


                </TabContext>
            </Box>
        </Box>
    )
}

export default IndexPage