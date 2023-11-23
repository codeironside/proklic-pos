import * as React from 'react';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ConfirmationDialog from './RoleModal';
import RevCenterModal from './RevCenterModal';

import Grid from '@mui/material/Grid';
import { Paper, useTheme } from '@mui/material';
import Button from '@mui/material/Button';
import { tokens } from '../theme';

import PropTypes from 'prop-types';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Dialog from '@mui/material/Dialog';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";




// ------SELECT REVENUE CENTER---------------------------------------------------
const revOptions = [
    'Restuarant',
    'Bar',
    'Cafe',
    'Confectionery',
    'Drinks',
];

function RevCenterModalRaw(props) {
    const { onClose, value: valueProp, openRev, ...other } = props;
    const [value, setValue] = React.useState(valueProp);
    const radioGroupRef = React.useRef(null);

    React.useEffect(() => {
        if (!openRev) {
            setValue(valueProp);
        }
    }, [valueProp, openRev]);

    const handleEntering = () => {
        if (radioGroupRef.current != null) {
            radioGroupRef.current.focus();
        }
    };

    const handleCancel = () => {
        onClose();
    };

    const handleOk = () => {
        onClose(value);
    };

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <Dialog
            sx={{ '& .MuiDialog-paper': { width: '80%', maxHeight: 435 } }}
            maxWidth="xs"
            TransitionProps={{ onEntering: handleEntering }}
            open={openRev}
            {...other}
        >
            <DialogTitle>Select Revenue Center</DialogTitle>
            <DialogContent dividers>
                <RadioGroup
                    ref={radioGroupRef}
                    aria-label="ringtone"
                    name="ringtone"
                    value={value}
                    onChange={handleChange}
                >
                    {revOptions.map((option) => (
                        <FormControlLabel
                            value={option}
                            key={option}
                            control={<Radio />}
                            label={option}
                        />
                    ))}
                </RadioGroup>
            </DialogContent>
            <DialogActions>
                <Button autoFocus onClick={handleCancel}>
                    Cancel
                </Button>
                <Button onClick={handleOk}>Ok</Button>
            </DialogActions>
        </Dialog>
    );
}

RevCenterModalRaw.propTypes = {
    onClose: PropTypes.func.isRequired,
    openRev: PropTypes.bool.isRequired,
    value: PropTypes.string.isRequired,
};

export default function PropertySetupTabWidget() {



    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const handleFormSubmit = () => {

    };

    // SELECT REVENUE CENTER --------------------------------------------------------
    const [openRev, setopenRev] = React.useState(false);
    const [value, setValue] = React.useState('Dione');

    const handleClickListItemRev = () => {
        setopenRev(true);
    };

    const handleCloseRev = (newValue) => {
        setopenRev(false);

        if (newValue) {
            setValue(newValue);
        }
    };

    // -----------------------------------------------------------------------------
    const [touchScreen, settouchScreen] = React.useState('');

    const handleChangetouchScreen = (event) => {
        settouchScreen(event.target.value);
    };



    return (
        <Box>
            <Typography variant="h4" gutterBottom sx={{ mt: 0 }} color={colors.greenAccent[400]}>
                <strong >Operators</strong>
            </Typography>
            <Grid container spacing={2} xs={12} sx={{ mb: 3, }}>
                <Grid item xs={12} md={4}>
                    {/* <ConfirmationDialog /> */}
                    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
                        <List component="div" role="group">

                            <ListItem
                                button
                                divider
                                aria-haspopup="true"
                                aria-controls="ringtone-menu"
                                aria-label="Select Revenue Center"
                                onClick={handleClickListItemRev}
                            >
                                <ListItemText primary="Select Revenue Center" secondary={value} />
                            </ListItem>
                            <RevCenterModalRaw
                                id="ringtone-menu"
                                keepMounted
                                open={openRev}
                                onClose={handleCloseRev}
                                value={value}
                            />
                        </List>


                    </Box>

                </Grid>

                <Grid item xs={12} md={4}>
                    {/* <RevCenterModal /> */}
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-helper-label1">
                            Default TouchScreen
                        </InputLabel>
                        <Select
                            labelId="demo-simple-select-helper-label1"
                            id="demo-simple-select-helper1"
                            value={touchScreen}
                            label="Level"
                            name="level"
                            onChange={handleChangetouchScreen}
                            sx={{ marginRight: "25px" }}

                        >
                            <MenuItem value="" >
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={1}> 1</MenuItem>
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={3}>3</MenuItem>
                            <MenuItem value={4}>4</MenuItem>
                            <MenuItem value={5}>5</MenuItem>
                            <MenuItem value={6}>6</MenuItem>
                            <MenuItem value={7}>7</MenuItem>
                        </Select>
                    </FormControl>

                </Grid>
                <Grid item xs={12} md={4}>
                    {/* <RevCenterModal /> */}
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-helper-label1">
                            Operator Type
                        </InputLabel>
                        <Select
                            labelId="demo-simple-select-helper-label1"
                            id="demo-simple-select-helper1"
                            value={touchScreen}
                            label="Level"
                            name="level"
                            onChange={handleChangetouchScreen}

                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={1}> 1</MenuItem>
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={3}>3</MenuItem>
                            <MenuItem value={4}>4</MenuItem>
                            <MenuItem value={5}>5</MenuItem>
                            <MenuItem value={6}>6</MenuItem>
                            <MenuItem value={7}>7</MenuItem>
                        </Select>
                    </FormControl>

                </Grid>
                <Grid item xs={12} md={4}>
                    {/* <RevCenterModal /> */}
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-helper-label1">
                            Options
                        </InputLabel>
                        <Select
                            labelId="demo-simple-select-helper-label1"
                            id="demo-simple-select-helper1"
                            value={touchScreen}
                            label="Level"
                            name="level"
                            onChange={handleChangetouchScreen}

                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={1}> 1</MenuItem>
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={3}>3</MenuItem>
                            <MenuItem value={4}>4</MenuItem>
                            <MenuItem value={5}>5</MenuItem>
                            <MenuItem value={6}>6</MenuItem>
                            <MenuItem value={7}>7</MenuItem>
                        </Select>
                    </FormControl>

                </Grid>
                <Grid item xs={12} md={4}>
                    {/* <RevCenterModal /> */}
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-helper-label1">
                            Cash Drawer
                        </InputLabel>
                        <Select
                            labelId="demo-simple-select-helper-label1"
                            id="demo-simple-select-helper1"
                            value={touchScreen}
                            label="Level"
                            name="level" md={4}
                            onChange={handleChangetouchScreen}

                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={1}> 1</MenuItem>
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={3}>3</MenuItem>
                            <MenuItem value={4}>4</MenuItem>
                            <MenuItem value={5}>5</MenuItem>
                            <MenuItem value={6}>6</MenuItem>
                            <MenuItem value={7}>7</MenuItem>
                        </Select>
                    </FormControl>

                </Grid>
                <Grid item xs={12} md={4}>
                    {/* <RevCenterModal /> */}
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-helper-label1">
                            Table Count
                        </InputLabel>
                        <Select
                            labelId="demo-simple-select-helper-label1"
                            id="demo-simple-select-helper1"
                            value={touchScreen}
                            label="Level"
                            name="level"
                            onChange={handleChangetouchScreen}

                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={1}> 1</MenuItem>
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={3}>3</MenuItem>
                            <MenuItem value={4}>4</MenuItem>
                            <MenuItem value={5}>5</MenuItem>
                            <MenuItem value={6}>6</MenuItem>
                            <MenuItem value={7}>7</MenuItem>
                        </Select>
                    </FormControl>

                </Grid>

                <Grid item xs={12} md={4}>
                    <Button
                        variant="contained"
                        onClick={handleFormSubmit}
                        sx={{ mt: 3, ml: 1 }}
                    >
                        Add Operator Record
                    </Button>
                </Grid>
            </Grid>
            {/* <RevCenterModal /> */}

            <hr />


            <Box>
                <Grid container >
                    <Typography variant="h6" gutterBottom sx={{ mt: 0 }} color={colors.greenAccent[400]}>
                        <strong >Rev Center id</strong>
                    </Typography>

                    | <Typography variant="h6" gutterBottom sx={{ mt: 0 }} color={colors.greenAccent[400]}>
                        <strong >  Rev Center Name</strong>
                    </Typography> | 
                    
                    <Typography variant="h6" gutterBottom sx={{ mt: 0 }} color={colors.greenAccent[400]}>
                        <strong >  Default TouchScreen</strong>
                    </Typography>  |  
                    
                    <Typography variant="h6" gutterBottom sx={{ mt: 0 }} color={colors.greenAccent[400]}>
                        <strong >   Operator Type</strong>
                    </Typography> |
                    
                    <Typography variant="h6" gutterBottom sx={{ mt: 0 }} color={colors.greenAccent[400]}>
                        <strong >   Options</strong>
                    </Typography>  | 
                    
                    <Typography variant="h6" gutterBottom sx={{ mt: 0 }} color={colors.greenAccent[400]}>
                        <strong >   Cash Drawer</strong>
                    </Typography> |
                    
                    <Typography variant="h6" gutterBottom sx={{ mt: 0 }} color={colors.greenAccent[400]}>
                        <strong >   Table Count</strong>
                    </Typography>  


                </Grid>
                
            </Box>
        </Box>
    );
}
