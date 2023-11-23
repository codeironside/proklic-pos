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



    
    

    const [CheckEditingOptions, setCheckEditingOptions] = React.useState({
        // Check Editing Options
        authPerformEditOpen: false,
        authPerformEditClosed: false,
        addTeamMember: false,
        removeTeamMember: false,
        addGuest: false,

        // Guest Check Control Options
        authPerformEditOpen1: false,
        authPerformEditClosed1: false,
        addTeamMember1: false,
        removeTeamMember1: false,
        addGuest1: false,

        // Add, Transfer, Pickup Options
        createNewChecksKey: false,
        authTransferCheckSameRev: false,
        authTransferCheckBtwRev: false,
        authAddingOfCheck: false,
        authAddingOfCheckBtw: false,
        authAdjustCloseReopen: false,
        authReopen: false,
        allowPickUp: false,
        allowUnassignedCheck: false,
        closedCheckBusinessDays: false,
        reOpenClosedCheckBusinessDays: false,
        beginAutoFire: false,
        beginCheckByPromt: false,

      });
    
      const { 
        // Check Editing Options
        authPerformEditOpen, authPerformEditClosed, 
        addTeamMember, removeTeamMember, addGuest, 

        // Guest Check Control Options
        authPerformEditOpen1, authPerformEditClosed1, 
        addTeamMember1, removeTeamMember1, addGuest1,

        // Add, Transfer, Pickup Options
        createNewChecksKey,
        authTransferCheckSameRev,
        authTransferCheckBtwRev,
        authAddingOfCheck,
        authAddingOfCheckBtw,
        authAdjustCloseReopen,
        authReopen,
        allowPickUp,
        allowUnassignedCheck,
        closedCheckBusinessDays,
        reOpenClosedCheckBusinessDays,
        beginAutoFire,
        beginCheckByPromt,

    } = CheckEditingOptions;
    
      const handleChange = (event) => {
        setCheckEditingOptions({ ...CheckEditingOptions, [event.target.name]: event.target.checked });
      };
    
    
    // HANDLE POST REQUEST HERE
    const handleFormSubmit = () => {
        console.log(CheckEditingOptions)
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

                            {/* Check Editing Options --------------------------------- */}
                            <Grid item xs={12} md={12} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox 
                                        color="secondary"
                                        name="authPerformEditOpen" 
                                        checked={authPerformEditOpen}
                                        onChange={handleChange}
                                         />}
                                    label="Authorize Perform Edit of a Guest Check ID In an Open Check"
                                />
                            </Grid>
                            <Grid item xs={12} md={12} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={authPerformEditClosed}
                                        onChange={handleChange}
                                        name="authPerformEditClosed" value="yes" />}
                                    label="Authorize Perform Edit of a Guest Check ID In a Closed Check"
                                />
                            </Grid>
                            <Grid item xs={12} md={12} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={addTeamMember}
                                        onChange={handleChange}
                                        name="addTeamMember" value="yes" />}
                                    label="Authorize/Add Team Member to Check"
                                />
                            </Grid>
                            <Grid item xs={12} md={12} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={removeTeamMember}
                                        onChange={handleChange}
                                        name="removeTeamMember" value="yes" />}
                                    label="Authorize Remove Team Member from Check"
                                />
                            </Grid>
                            <Grid item xs={12} md={12} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={addGuest}
                                        onChange={handleChange}
                                        name="addGuest" value="yes" />}
                                    label="Authorize/Add Guest Information to Check"
                                />
                            </Grid>

                            {/* ------------------------------------ */}
                        </Paper>
                    </Grid>





                    <Typography variant="h4" gutterBottom sx={{ mt: 2 }} color={colors.greenAccent[400]}>
                        <strong>Guest Check Control Options</strong>
                    </Typography>
                    <Grid container>
                        <Paper variant="outlined" sx={{ padding: "10px" }}>

                        {/* // Guest Check Control Options */}
                            <Grid item xs={12} md={12} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={authPerformEditOpen1}
                                        onChange={handleChange}
                                        name="authPerformEditOpen1" value="yes" />}
                                    label="Authorize Perform Edit of a Guest Check ID In an Open Check"
                                />
                            </Grid>
                            <Grid item xs={12} md={12} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={authPerformEditClosed1}
                                        onChange={handleChange}
                                        name="authPerformEditClosed1" value="yes" />}
                                    label="Authorize Perform Edit of a Guest Check ID In a Closed Check"
                                />
                            </Grid>
                            <Grid item xs={12} md={12} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={addTeamMember1}
                                        onChange={handleChange}
                                        name="addTeamMember1" value="yes" />}
                                    label="Authorize/Add Team Member to Check"
                                />
                            </Grid>
                            <Grid item xs={12} md={12} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={removeTeamMember1}
                                        onChange={handleChange}
                                        name="removeTeamMember1" value="yes" />}
                                    label="Authorize Remove Team Member from Check"
                                />
                            </Grid>
                            <Grid item xs={12} md={12} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={addGuest1}
                                        onChange={handleChange}
                                        name="addGuest1" value="yes" />}
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


                        {/* Add, Transfer, Pickup Options */}
                            <Grid item xs={12} md={12} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={createNewChecksKey}
                                        onChange={handleChange}
                                        name="createNewChecksKey" value="yes" />}
                                    label="Create New Checks using [Begin Check] Key"
                                />
                            </Grid>
                            <Grid item xs={12} md={12} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={authTransferCheckSameRev}
                                        onChange={handleChange}
                                        name="authTransferCheckSameRev" value="yes" />}
                                    label="Authorize Transfer of Checks in the Same Revenue Center"
                                />
                            </Grid>
                            <Grid item xs={12} md={12} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={authTransferCheckBtwRev}
                                        onChange={handleChange}
                                        name="authTransferCheckBtwRev" value="yes" />}
                                    label="Authorize Transfer of Checks Between Revenue Centers"
                                />
                            </Grid>
                            <Grid item xs={12} md={12} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={authAddingOfCheck}
                                        onChange={handleChange}
                                        name="authAddingOfCheck" value="yes" />}
                                    label="Authorize Adding of Checks in the Same Revenue Center"
                                />
                            </Grid>
                            <Grid item xs={12} md={12} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={authAddingOfCheckBtw}
                                        onChange={handleChange}
                                        name="authAddingOfCheckBtw" value="yes" />}
                                    label="Authorize Adding of Checks Between Revenue Centers"
                                />
                            </Grid>
                            <Grid item xs={12} md={12} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={authAdjustCloseReopen}
                                        onChange={handleChange}
                                        name="authAdjustCloseReopen" value="yes" />}
                                    label="Authorize/Perform Adjust Closed Check"
                                />
                            </Grid>
                            <Grid item xs={12} md={12} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={authReopen}
                                        onChange={handleChange}
                                        name="authReopen" value="yes" />}
                                    label="Authorize Perform Reopen Closed Check"
                                />
                            </Grid>
                            <Grid item xs={12} md={12} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={allowPickUp}
                                        onChange={handleChange}
                                        name="allowPickUp" value="yes" />}
                                    label="Allow Pickup Of Checks from other Revenue Centers"
                                />
                            </Grid>
                            <Grid item xs={12} md={12} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={allowUnassignedCheck}
                                        onChange={handleChange}
                                        name="allowUnassignedCheck" value="yes" />}
                                    label="Authorize/Perform Creation and Pickup of Unassigned Checks"
                                />
                            </Grid>
                            <Grid item xs={12} md={12} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={closedCheckBusinessDays}
                                        onChange={handleChange}
                                        name="closedCheckBusinessDays" value="yes" />}
                                    label="Auth/Perform Adjust Closed Check from Previous Business Days"
                                />
                            </Grid>
                            <Grid item xs={12} md={12} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={reOpenClosedCheckBusinessDays}
                                        onChange={handleChange}
                                        name="reOpenClosedCheckBusinessDays" value="yes" />}
                                    label="Auth Perform Reopen Closed Check from Previous Business Days"
                                />
                            </Grid>
                            <Grid item xs={12} md={12} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={beginAutoFire}
                                        onChange={handleChange}
                                        name="beginAutoFire" value="yes" />}
                                    label="Begin Autofire Check using [Begin Autofire Check] Key"
                                />
                            </Grid>
                            <Grid item xs={12} md={12} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={beginCheckByPromt}
                                        onChange={handleChange}
                                        name="beginCheckByPromt" value="yes" />}
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