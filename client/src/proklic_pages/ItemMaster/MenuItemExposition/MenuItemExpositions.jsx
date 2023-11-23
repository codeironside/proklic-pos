
import * as React from 'react';

import Box from '@mui/material/Box';


import Grid from '@mui/material/Grid';
import { Paper, useTheme } from '@mui/material';
import Button from '@mui/material/Button';
import { tokens } from '../../../theme';


import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Formik } from "formik";
import Header from '../../../components/Header';
import * as yup from "yup";
import { useState } from 'react';
import MenuItemExpositionCreate from './MenuItemExpositionCreate';
import Typography from '@mui/material/Typography';
import { TextField } from "@mui/material";
import LoupeIcon from '@mui/icons-material/Loupe';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ExpositionData from './ExpositionData';
import ExpositionModal from './ExpositionModal';
import { Link } from 'react-router-dom';


import AddIcon from '@mui/icons-material/Add';
import PersonIcon from '@mui/icons-material/Person';
import Avatar from '@mui/material/Avatar';
import { blue } from '@mui/material/colors';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import PropTypes from 'prop-types';



import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
// import TextField from '@mui/material/TextField';
import Slide from '@mui/material/Slide';


import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Autocomplete } from '@mui/material';


// MODAL OR DIALOG - SETUP -----------------------------------------------------
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const revCenter = [
    { title: 'Kilimanjaro', year: 1994 },
    { title: 'Chicken Republic', year: 1972 },
    { title: 'Easy Bite', year: 1974 },
];





export default function MenuItemExpositions() {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);


    // -------------//-------------------//-------------------//-----------------
    const [selectedValue, setSelectedValue] = useState('');

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
        console.log(event.target.value)
    };

    // -----------------------------------------------------------
    const [open, setOpen] = React.useState(false);

    function handleClickOpen() {
        setOpen(true);
    }

    function handleClose() {
        setOpen(false);
    }

    const [selectedValueToModal, setSelectedValueToModal] = useState('');

    const handleChangeToModal = (event) => {
        setSelectedValueToModal(event.target.value);
        console.log(event.target.value)
    };

    const [selectedValueFromModal, setSelectedValueFromModal] = useState('');

    const handleChangeFromModal = (event) => {
        setSelectedValueFromModal(event.target.value);
        console.log(event.target.value)
    };

    const [state, setState] = React.useState({
        checkedB: true,
    });

    const handleChangeCheck = (name) => (event) => {
        setState({ ...state, [name]: event.target.checked });
    };


    return (
        <Box m="20px">


            <Box display="flex" justifyContent="space-between" p={2}>
                <Header title="Menu Items RVC Distribution" subtitle="Create menu items RVC Distribution" />

                <Box>

                    <Button
                        onClick={handleClickOpen}
                        sx={{
                            backgroundColor: colors.primary[900],
                            color: colors.grey[100],
                            fontSize: "14px",
                            fontWeight: "bold",
                            padding: "10px 20px",
                        }}
                    >
                        <LoupeIcon sx={{ mr: "10px" }} />
                        Import Data
                    </Button>
                </Box>
            </Box>

            <div >
                <div>
                    <Grid container spacing={2} xs={12} sx={{ mb: 3, }}>

                        <Grid item xs={12} md={4}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-helper-label12">
                                    Revenue Center
                                </InputLabel>
                                <Select
                                    labelId="demo-simple-select-helper-label12"
                                    id="demo-simple-select-helper12"
                                    onChange={(e) => handleChange(e)}
                                    value={selectedValue}
                                    label="revenueCnter"
                                    name="revenueCnter"

                                >
                                    <MenuItem value="none">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem selected value={"Revenue Center 1"}>Revenue Center 1</MenuItem>
                                    <MenuItem value={"Revenue Center 2"}>Revenue Center 2</MenuItem>
                                    <MenuItem value={"Revenue Center 3"}>Revenue Center 3</MenuItem>
                                </Select>
                            </FormControl>


                        </Grid>


                    </Grid>
                    <Box m="20px">
                        {selectedValue == "none" ? "No data" : ""}
                        {selectedValue == "Revenue Center 1" ? <ExpositionData /> : ""}
                        {selectedValue == "Revenue Center 2" ? "Table for Revenue Center 2" : ""}
                        {selectedValue == "Revenue Center 3" ? "Table for Revenue Center 3" : ""}
                    </Box>

                    <Dialog open={open} onClose={handleClose}
                        keepMounted
                        TransitionComponent={Transition}
                        maxWidth={120}
                        aria-labelledby="form-dialog-title">
                        <DialogTitle id="form-dialog-title"><strong>Import Master Menu Item Data</strong></DialogTitle>
                        <DialogContent>
                            <DialogContentText sx={{ marginBottom: "20px" }}>
                                Pls select all that is applicable for you.
                            </DialogContentText>

                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-helper-label12">
                                    From
                                </InputLabel>
                                <Select
                                    labelId="demo-simple-select-helper-label12"
                                    id="demo-simple-select-helper12"
                                    onChange={(e) => handleChangeFromModal(e)}
                                    value={selectedValueFromModal}
                                    label="from"
                                    name="from"
                                    sx={{ gridColumn: "span 1", marginBottom: "15px" }}

                                >
                                    <MenuItem value="none">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={1}>1</MenuItem>
                                    <MenuItem value={2}> 2</MenuItem>
                                    <MenuItem value={3}> 3</MenuItem>
                                    <MenuItem value={4}> 4</MenuItem>
                                    <MenuItem value={5}> 5</MenuItem>
                                    <MenuItem value={6}> 6</MenuItem>
                                    <MenuItem value={7}> 7</MenuItem>
                                </Select>
                            </FormControl>

                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-helper-label12">
                                    To
                                </InputLabel>
                                <Select
                                    labelId="demo-simple-select-helper-label12"
                                    id="demo-simple-select-helper12"
                                    onChange={(e) => handleChangeToModal(e)}
                                    value={selectedValueToModal}
                                    label="to"
                                    name="to"

                                >
                                    <MenuItem value="none">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={1}>1</MenuItem>
                                    <MenuItem value={2}> 2</MenuItem>
                                    <MenuItem value={3}> 3</MenuItem>
                                    <MenuItem value={4}> 4</MenuItem>
                                    <MenuItem value={5}> 5</MenuItem>
                                    <MenuItem value={6}> 6</MenuItem>
                                    <MenuItem value={7}> 7</MenuItem>
                                </Select>
                            </FormControl>


                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={state.checkedB}
                                        onChange={handleChangeCheck('checkedB')}
                                        value="checkedB"
                                        color="primary"
                                    />
                                }
                                label="Save menu item template"
                                sx={{ marginBottom: "10px" }}
                            />

                            <Autocomplete
                                multiple
                                id="tags-standard"
                                options={revCenter}
                                getOptionLabel={(option) => option.title}
                                defaultValue={[revCenter[1]]}
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        variant="standard"
                                        label="Select Applicable Revenue Center"
                                        placeholder="Select..."
                                        fullWidth
                                    />
                                )}
                            />

         
                        </DialogContent>
                        <DialogActions>
                            <Button variant="outlined" color="secondary" onClick={handleClose}>
                                Cancel
                            </Button>
                            <Button variant="outlined" onClick={handleClose} color="primary">
                                IMPORT RVC DATA
                            </Button>
                        </DialogActions>
                    </Dialog>


                </div>
            </div>

        </Box>
    );
}



// export default 