import React, { useState, useEffect } from 'react'
import { tokens } from "../../theme";
import { useLocation, useParams } from "react-router-dom";
import { Box, useTheme } from "@mui/material";

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import axios from 'axios'


import Header from '../../components/Header';
// useParams


// Header
// useTheme

const GeneralSetup = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const { id } = useParams();
    console.log(id);


    const [role, setRole] = useState('');
    const [level, setLevel] = useState('');
    const [iD, setID] = useState('');


    const values = {
       
        role, level, iD
    }
    // console.log(values)


    // useEffect(() => {
    //     if (!id) {
    //         return;
    //     }
    //     axios.get('/users/' + id).then(response => {

    //           console.log(response)

    //         const { data } = response;
    //         setFirstName(data.firstName);
    //         setLastName(data.lastName);
    //         setUserName(data.userName)
    //         setRole(data.role);
    //         setLevel(data.level);
    //         setID(data.id);
    //         setPropertyID(data.property_id);
    //         setAlternateID(data.alternate_id);
    //         setPayrollID(data.payroll_id);
    //         setEmail(data.email);
    //         setPhoneNumber(data.phoneNumber);
    //         setPassword(data.password);
    //     });
    // }, [id]);


    const handleFormSubmit = () => {

        const values = {
            
            role, level, iD
        }
        console.log(values)


        // axios.put('/users/' + id, values );
           alert("Successful")
    };


    return (
        <>
            <Box m="20px">
            <Header title="General Setup" subtitle="General Setup" />

            {/* <Typography variant="h6" gutterBottom>
                Shipping address
            </Typography> */}
            <Grid container spacing={3}>
                

                <Grid item xs={12} sm={4}>
                    <TextField
                        id="role"

                        value={role}
                        label="Role"
                        fullWidth
                        autoComplete="role"
                        variant="standard"
                        onChange={ev => setRole(ev.target.value)}
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        required
                        id="level"

                        value={level}
                        label="Level"
                        fullWidth
                        autoComplete="level"
                        variant="standard"
                        onChange={ev => setLevel(ev.target.value)}
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        id="id"

                        value={iD}
                        label="ID"
                        fullWidth
                        variant="standard"
                        onChange={ev => setID(ev.target.value)}
                    />
                </Grid>

               
                {/* <Grid item xs={12}>
                    <FormControlLabel
                        control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
                        label="Use this address for payment details"
                    />
                </Grid> */}

                <Button
                    variant="contained"
                    onClick={handleFormSubmit}
                    sx={{ mt: 3, ml: 1 }}
                >
                    Save Changes
                </Button>
            </Grid>


        </Box>
        </>
    )
}

export default GeneralSetup