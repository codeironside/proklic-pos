import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ConfirmationDialog from './RoleModal';
import RevCenterModal from './RevCenterModal';

import Grid from '@mui/material/Grid';
import { Paper, useTheme } from '@mui/material';
import Button from '@mui/material/Button';
import { tokens } from '../theme';
import PropertySetupTabWidget from './PropertySetupTabWidget';
// tokens
// import Typography from '@mui/material/Typography';


function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

export default function VerticalTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const handleFormSubmit = () => {

    };



    return (
        <Box
            sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 500 }}
        >
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                sx={{ borderRight: 1, borderColor: 'divider' }}
            >
                <Tab label="KFC" {...a11yProps(0)} />
                <Tab label="Kilimanjaro" {...a11yProps(1)} />
                <Tab label="Mr Biggs" {...a11yProps(2)} />
                {/* <Tab label="Item Four" {...a11yProps(3)} />
        <Tab label="Item Five" {...a11yProps(4)} />
        <Tab label="Item Six" {...a11yProps(5)} />
        <Tab label="Item Seven" {...a11yProps(6)} /> */}
            </Tabs>
            <TabPanel value={value} index={0}>
                <PropertySetupTabWidget />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <PropertySetupTabWidget />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <PropertySetupTabWidget />
            </TabPanel>
            {/* <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Six
      </TabPanel>
      <TabPanel value={value} index={6}>
        Item Seven
      </TabPanel> */}
        </Box>
    );
}
