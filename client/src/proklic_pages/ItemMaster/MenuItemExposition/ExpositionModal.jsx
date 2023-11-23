import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
// import TextField from '@mui/material/TextField';
import Slide from '@mui/material/Slide';
import React, { useState } from 'react';


import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Autocomplete, Chip, TextField } from '@mui/material';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const revCenter = [
    { title: 'Kilimanjaro', year: 1994 },
    { title: 'Chicken Republic', year: 1972 },
    { title: 'Easy Bite', year: 1974 },
  ];

export default function FormDialog() {
    const [open, setOpen] = React.useState(false);

    function handleClickOpen() {
        setOpen(true);
    }

    function handleClose() {
        setOpen(false);
    }


    const [selectedValue, setSelectedValue] = useState('');

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
        console.log(event.target.value)
    };

    const [state, setState] = React.useState({
        checkedB: true,
    });

    const handleChangeCheck = (name) => (event) => {
        setState({ ...state, [name]: event.target.checked });
    };

    return (
        <Box>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                Open form dialog
            </Button>

            <Dialog open={open} onClose={handleClose}
                keepMounted
                TransitionComponent={Transition}
                maxWidth={120}
                aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Import Master Menu Item Data</DialogTitle>
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
                            onChange={(e) => handleChange(e)}
                            value={selectedValue}
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
                            onChange={(e) => handleChange(e)}
                            value={selectedValue}
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

                    {/* <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="From"
                        type="number"
                        fullWidth
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="To"
                        type="number"
                        fullWidth
                    /> */}
                </DialogContent>
                <DialogActions>
                    <Button variant="outlined" color="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="outlined" onClick={handleClose} color="primary">
                        IMPORT DATA
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
}


