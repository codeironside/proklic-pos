import React, { useState } from 'react'
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Paper, useTheme } from '@mui/material';
import { tokens } from '../../theme';
import Button from '@mui/material/Button';
// Import Axios


const VoidAndReturns = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const [go2Calendar, setGo2Calendar] = useState(false);

    const handleCb_go2Calendar = (event) => {
        setGo2Calendar(event.target.checked);
    };


    //  const handleFormSubmit = () => {


    //     authPerformVoidofServiceChargePreRounds: false
    // };
 


    return (
        <div>
            <Grid container spacing={1}>
                <Grid item container direction="column" xs={12}   sm={12}>
                    <Typography variant="h4" gutterBottom sx={{ mt: 2 }} color={colors.greenAccent[400]}>
                        <strong >Return Options</strong>
                    </Typography>
                    <Grid container>
                        {/* <Paper variant="outlined" sx={{ padding: "10px" }}> */}

                            <Grid item xs={6} md={12} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={go2Calendar}
                                        onChange={handleCb_go2Calendar}
                                        name="go2Calendar" value="yes" />}
                                    label="Authorize Perform Return of Menu Items Entered on Current"
                                />
                            </Grid>
                            <Grid item xs={6} md={12} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={go2Calendar}
                                        onChange={handleCb_go2Calendar}
                                        name="go2Calendar" value="yes" />}
                                    label="Authorize Use the [Transaction Return] Key"
                                />
                            </Grid>



                    
                            {/* <Button
                                variant="contained"
                                onClick={handleFormSubmit}
                                sx={{ mt: 3, ml: 1 }}
                            >
                                Save Changes
                            </Button> */}
                    </Grid>
                    {/* <Typography variant="h4" gutterBottom sx={{ mt: 2 }} color={colors.greenAccent[400]}>
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
                    </Grid> */}
                </Grid>
                <Grid item container direction="column" xs={12} sm={12}>
                    <Typography variant="h4" gutterBottom sx={{ mt: 2 }} color={colors.greenAccent[400]}>
                        <strong>Void Options</strong>
                    </Typography>
                    <Grid container>
                       

                            <Grid item xs={6} md={6} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={go2Calendar}
                                        onChange={handleCb_go2Calendar}
                                        name="go2Calendar" value="yes" />}
                                    label="Authorize Perform Void of Menu Items from a Previous Round"
                                />
                            </Grid>
                            <Grid item xs={6} md={6} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={go2Calendar}
                                        onChange={handleCb_go2Calendar}
                                        name="go2Calendar" value="yes" />}
                                    label="Authorize/Perform Void and Return of Menu Items Not on Check"
                                />
                            </Grid>
                            <Grid item xs={6} md={6} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={go2Calendar}
                                        onChange={handleCb_go2Calendar}
                                        name="go2Calendar" value="yes" />}
                                    label="Authorize Perform Void of Discounts from a Previous Round"
                                />
                            </Grid>
                            <Grid item xs={6} md={6} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={go2Calendar}
                                        onChange={handleCb_go2Calendar}
                                        name="go2Calendar" value="yes" />}
                                    label="Authorize Perform Void of Service Charges from a Previous Round"
                                />
                            </Grid>
                            <Grid item xs={6} md={6} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={go2Calendar}
                                        onChange={handleCb_go2Calendar}
                                        name="go2Calendar" value="yes" />}
                                    label="Authorize Perform Void of Tender/Media from a Previous Round"
                                />
                            </Grid>
                            <Grid item xs={6} md={6} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={go2Calendar}
                                        onChange={handleCb_go2Calendar}
                                        name="go2Calendar" value="yes" />}
                                    label="Authorize Use the [Void Check] Key"
                                />
                            </Grid>
                            <Grid item xs={6} md={6} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={go2Calendar}
                                        onChange={handleCb_go2Calendar}
                                        name="go2Calendar" value="yes" />}
                                    label="Authorize/Perform Error Corrects"
                                />
                            </Grid>
                            <Grid item xs={6} md={6} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={go2Calendar}
                                        onChange={handleCb_go2Calendar}
                                        name="go2Calendar" value="yes" />}
                                    label="Authorize/Use the [Transaction Void] Key"
                                />
                            </Grid>
                            <Grid item xs={6} md={6} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={go2Calendar}
                                        onChange={handleCb_go2Calendar}
                                        name="go2Calendar" value="yes" />}
                                    label="Authorize/Perform Void of Menu Items on Closed Checks"
                                />
                            </Grid>
                            <Grid item xs={6} md={6} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={go2Calendar}
                                        onChange={handleCb_go2Calendar}
                                        name="go2Calendar" value="yes" />}
                                    label="Authorize/Perform Void of Discounts on Closed Checks"
                                />
                            </Grid>
                            <Grid item xs={6} md={6} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={go2Calendar}
                                        onChange={handleCb_go2Calendar}
                                        name="go2Calendar" value="yes" />}
                                    label="Authorize/Perform Void of Service Charges on Closed Checks"
                                />
                            </Grid>
                            <Grid item xs={6} md={6} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={go2Calendar}
                                        onChange={handleCb_go2Calendar}
                                        name="go2Calendar" value="yes" />}
                                    label="Authorize Perform Direct Voids"
                                />
                            </Grid>
                            <Grid item xs={6} md={6} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={go2Calendar}
                                        onChange={handleCb_go2Calendar}
                                        name="go2Calendar" value="yes" />}
                                    label="Authorize/Perform Voids, Cancels, and Device Test of NALDS Items"
                                />
                            </Grid>
                            <Grid item xs={6} md={6} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={go2Calendar}
                                        onChange={handleCb_go2Calendar}
                                        name="go2Calendar" value="yes" />}
                                    label="Authorize/Allow Voiding of Shared Check Items"
                                />
                            </Grid>
                            <Grid item xs={6} md={6} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={go2Calendar}
                                        onChange={handleCb_go2Calendar}
                                        name="go2Calendar" value="yes" />}
                                    label="Perform Error Corrects"
                                />
                            </Grid>
                            <Grid item xs={6} md={6} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={go2Calendar}
                                        onChange={handleCb_go2Calendar}
                                        name="go2Calendar" value="yes" />}
                                    label="Authorize/Perform Void of Fees"
                                />
                            </Grid>

                      
                    </Grid>
                </Grid>


            </Grid>
        </div>
    )
}

export default VoidAndReturns