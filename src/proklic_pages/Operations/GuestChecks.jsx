import React, { useState } from 'react'
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Paper, useTheme } from '@mui/material';
import { tokens } from '../../theme';
import Button from '@mui/material/Button';
// tokens

const GuestChecks = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const [go2Calendar, setGo2Calendar] = useState(false);

    const handleCb_go2Calendar = (event) => {
        setGo2Calendar(event.target.checked);
    };

    const handleFormSubmit = () => {

    };

    return (
        <div>

            <Grid container spacing={2}>
                <Grid item container direction="column" xs={12} sm={6}>
                    <Typography variant="h4" gutterBottom sx={{ mt: 2 }} color={colors.greenAccent[400]}>
                        <strong >Check Editing Options</strong>
                    </Typography>
                    <Grid container>
                        <Paper variant="outlined" sx={{ padding: "10px" }}>

                            <Grid item xs={12} md={12} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={go2Calendar}
                                        onChange={handleCb_go2Calendar}
                                        name="go2Calendar" value="yes" />}
                                    label="Authorize Perform Edit of a Guest Check ID In an Open Check"
                                />
                            </Grid>
                            <Grid item xs={12} md={12} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={go2Calendar}
                                        onChange={handleCb_go2Calendar}
                                        name="go2Calendar" value="yes" />}
                                    label="Authorize Perform Edit of a Guest Check ID In a Closed Check"
                                />
                            </Grid>
                            <Grid item xs={12} md={12} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={go2Calendar}
                                        onChange={handleCb_go2Calendar}
                                        name="go2Calendar" value="yes" />}
                                    label="Authorize/Add Team Member to Check"
                                />
                            </Grid>
                            <Grid item xs={12} md={12} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={go2Calendar}
                                        onChange={handleCb_go2Calendar}
                                        name="go2Calendar" value="yes" />}
                                    label="Authorize Remove Team Member from Check"
                                />
                            </Grid>
                            <Grid item xs={12} md={12} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={go2Calendar}
                                        onChange={handleCb_go2Calendar}
                                        name="go2Calendar" value="yes" />}
                                    label="Authorize/Add Guest Information to Check"
                                />
                            </Grid>

                        </Paper>
                    </Grid>
                    <Typography variant="h4" gutterBottom sx={{ mt: 2 }} color={colors.greenAccent[400]}>
                        <strong>Guest Check Control Options</strong>
                    </Typography>
                    <Grid container>
                        <Paper variant="outlined" sx={{ padding: "10px" }}>

                            <Grid item xs={12} md={12} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={go2Calendar}
                                        onChange={handleCb_go2Calendar}
                                        name="go2Calendar" value="yes" />}
                                    label="Authorize Perform Edit of a Guest Check ID In an Open Check"
                                />
                            </Grid>
                            <Grid item xs={12} md={12} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={go2Calendar}
                                        onChange={handleCb_go2Calendar}
                                        name="go2Calendar" value="yes" />}
                                    label="Authorize Perform Edit of a Guest Check ID In a Closed Check"
                                />
                            </Grid>
                            <Grid item xs={12} md={12} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={go2Calendar}
                                        onChange={handleCb_go2Calendar}
                                        name="go2Calendar" value="yes" />}
                                    label="Authorize/Add Team Member to Check"
                                />
                            </Grid>
                            <Grid item xs={12} md={12} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={go2Calendar}
                                        onChange={handleCb_go2Calendar}
                                        name="go2Calendar" value="yes" />}
                                    label="Authorize Remove Team Member from Check"
                                />
                            </Grid>
                            <Grid item xs={12} md={12} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={go2Calendar}
                                        onChange={handleCb_go2Calendar}
                                        name="go2Calendar" value="yes" />}
                                    label="Authorize/Add Guest Information to Check"
                                />
                            </Grid>

                        </Paper>
                    </Grid>
                </Grid>
                <Grid item container direction="column" xs={12} sm={6}>
                    <Typography variant="h4" gutterBottom sx={{ mt: 2 }} color={colors.greenAccent[400]}>
                        <strong>Add, Transfer, Pickup Options</strong>
                    </Typography>
                    <Grid container>
                        <Paper variant="outlined" sx={{ padding: "10px" }}>

                            <Grid item xs={12} md={12} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={go2Calendar}
                                        onChange={handleCb_go2Calendar}
                                        name="go2Calendar" value="yes" />}
                                    label="Create New Checks using [Begin Check] Key"
                                />
                            </Grid>
                            <Grid item xs={12} md={12} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={go2Calendar}
                                        onChange={handleCb_go2Calendar}
                                        name="go2Calendar" value="yes" />}
                                    label="Authorize Transfer of Checks in the Same Revenue Center"
                                />
                            </Grid>
                            <Grid item xs={12} md={12} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={go2Calendar}
                                        onChange={handleCb_go2Calendar}
                                        name="go2Calendar" value="yes" />}
                                    label="Authorize Transfer of Checks Between Revenue Centers"
                                />
                            </Grid>
                            <Grid item xs={12} md={12} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={go2Calendar}
                                        onChange={handleCb_go2Calendar}
                                        name="go2Calendar" value="yes" />}
                                    label="Authorize Adding of Checks in the Same Revenue Center"
                                />
                            </Grid>
                            <Grid item xs={12} md={12} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={go2Calendar}
                                        onChange={handleCb_go2Calendar}
                                        name="go2Calendar" value="yes" />}
                                    label="Authorize Adding of Checks Between Revenue Centers"
                                />
                            </Grid>
                            <Grid item xs={12} md={12} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={go2Calendar}
                                        onChange={handleCb_go2Calendar}
                                        name="go2Calendar" value="yes" />}
                                    label="Authorize/Perform Adjust Closed Check"
                                />
                            </Grid>
                            <Grid item xs={12} md={12} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={go2Calendar}
                                        onChange={handleCb_go2Calendar}
                                        name="go2Calendar" value="yes" />}
                                    label="Authorize Perform Reopen Closed Check"
                                />
                            </Grid>
                            <Grid item xs={12} md={12} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={go2Calendar}
                                        onChange={handleCb_go2Calendar}
                                        name="go2Calendar" value="yes" />}
                                    label="Allow Pickup Of Checks from other Revenue Centers"
                                />
                            </Grid>
                            <Grid item xs={12} md={12} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={go2Calendar}
                                        onChange={handleCb_go2Calendar}
                                        name="go2Calendar" value="yes" />}
                                    label="Authorize/Perform Creation and Pickup of Unassigned Checks"
                                />
                            </Grid>
                            <Grid item xs={12} md={12} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={go2Calendar}
                                        onChange={handleCb_go2Calendar}
                                        name="go2Calendar" value="yes" />}
                                    label="Auth/Perform Adjust Closed Check from Previous Business Days"
                                />
                            </Grid>
                            <Grid item xs={12} md={12} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={go2Calendar}
                                        onChange={handleCb_go2Calendar}
                                        name="go2Calendar" value="yes" />}
                                    label="Auth Perform Reopen Closed Check from Previous Business Days"
                                />
                            </Grid>
                            <Grid item xs={12} md={12} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={go2Calendar}
                                        onChange={handleCb_go2Calendar}
                                        name="go2Calendar" value="yes" />}
                                    label="Begin Autofire Check using [Begin Autofire Check] Key"
                                />
                            </Grid>
                            <Grid item xs={12} md={12} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={go2Calendar}
                                        onChange={handleCb_go2Calendar}
                                        name="go2Calendar" value="yes" />}
                                    label="Begin Check by Prompt"
                                />
                            </Grid>

                        </Paper>
                    </Grid>
                </Grid>

                <Button
                    variant="contained"
                    onClick={handleFormSubmit}
                    sx={{ mt: 3, ml: 1 }}
                    >
                    Save Changes
                    </Button>
            </Grid>




            {/* <Typography variant="h6" gutterBottom sx={{ mb: 1, mt: 4 }}>
                <strong>Check Editing Options</strong>
            </Typography> */}







            {/* <Typography variant="h6" gutterBottom sx={{ mb: 1, mt: 4 }}>
                <strong>Guest Check Control Options</strong>
            </Typography> */}



        </div>
    )
}

export default GuestChecks