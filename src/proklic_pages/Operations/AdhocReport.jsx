import React, { useState } from 'react'
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Paper, useTheme } from '@mui/material';
import { tokens } from '../../theme';
import Button from '@mui/material/Button';
// tokens

const AdhocReport = () => {
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
            <Grid container spacing={1}>
                <Grid item container direction="column" xs={12}   sm={12}>
                    <Typography variant="h4" gutterBottom sx={{ mt: 2 }} color={colors.greenAccent[400]}>
                        <strong >Return Options</strong>
                    </Typography>
                    <Grid container>
                
                    <Grid item xs={4} md={4} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={go2Calendar}
                                        onChange={handleCb_go2Calendar}
                                        name="go2Calendar" value="yes" />}
                                    label="Allow Selection of All Business Dates"
                                />
                            </Grid>
                            <Grid item xs={4} md={4} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={go2Calendar}
                                        onChange={handleCb_go2Calendar}
                                        name="go2Calendar" value="yes" />}
                                    label="Allow View of All Revenue Centers"
                                />
                            </Grid>
                            <Grid item xs={4} md={4} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={go2Calendar}
                                        onChange={handleCb_go2Calendar}
                                        name="go2Calendar" value="yes" />}
                                    label="Allow View of All Employees"
                                />
                            </Grid>
                            <Grid item xs={4} md={4} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={go2Calendar}
                                        onChange={handleCb_go2Calendar}
                                        name="go2Calendar" value="yes" />}
                                    label="Allow View of All Cashiers"
                                />
                            </Grid>
                            <Grid item xs={4} md={4} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={go2Calendar}
                                        onChange={handleCb_go2Calendar}
                                        name="go2Calendar" value="yes" />}
                                    label="Allow View of All Family Groups"
                                />
                            </Grid>

                            
                            



                    </Grid>
                    <Typography variant="h4" gutterBottom sx={{ mt: 2 }} color={colors.greenAccent[400]}>
                        <strong>Report Options</strong>
                    </Typography>
                    <Grid container>
                        

                            <Grid item xs={4} md={4} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={go2Calendar}
                                        onChange={handleCb_go2Calendar}
                                        name="go2Calendar" value="yes" />}
                                    label="Run Property Financial Report"
                                />
                            </Grid>
                            <Grid item xs={4} md={4} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={go2Calendar}
                                        onChange={handleCb_go2Calendar}
                                        name="go2Calendar" value="yes" />}
                                    label="Run Revenue Center Financial Report"
                                />
                            </Grid>
                            <Grid item xs={4} md={4} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={go2Calendar}
                                        onChange={handleCb_go2Calendar}
                                        name="go2Calendar" value="yes" />}
                                    label="Run Employee Financial Report"
                                />
                            </Grid>
                            <Grid item xs={4} md={4} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={go2Calendar}
                                        onChange={handleCb_go2Calendar}
                                        name="go2Calendar" value="yes" />}
                                    label="Run Open Check Report"
                                />
                            </Grid>
                            <Grid item xs={4} md={4} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={go2Calendar}
                                        onChange={handleCb_go2Calendar}
                                        name="go2Calendar" value="yes" />}
                                    label="Run Closed Check Report"
                                />
                            </Grid>
                            <Grid item xs={4} md={4} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={go2Calendar}
                                        onChange={handleCb_go2Calendar}
                                        name="go2Calendar" value="yes" />}
                                    label="Run Employee Tip Report"
                                />
                            </Grid>
                            <Grid item xs={4} md={4} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={go2Calendar}
                                        onChange={handleCb_go2Calendar}
                                        name="go2Calendar" value="yes" />}
                                    label="Run Employee Labor Detail Report"
                                />
                            </Grid>
                            <Grid item xs={4} md={4} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={go2Calendar}
                                        onChange={handleCb_go2Calendar}
                                        name="go2Calendar" value="yes" />}
                                    label="Run Employee Labor Summary Report"
                                />
                            </Grid>
                            <Grid item xs={4} md={4} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={go2Calendar}
                                        onChange={handleCb_go2Calendar}
                                        name="go2Calendar" value="yes" />}
                                    label="Run Casher Financial Report"
                                />
                            </Grid>
                            <Grid item xs={4} md={4} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={go2Calendar}
                                        onChange={handleCb_go2Calendar}
                                        name="go2Calendar" value="yes" />}
                                    label="Run Major Group Sales Report "
                                />
                            </Grid>
                            <Grid item xs={4} md={4} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={go2Calendar}
                                        onChange={handleCb_go2Calendar}
                                        name="go2Calendar" value="yes" />}
                                    label="Run Family Group Sales Report"
                                />
                            </Grid>
                            <Grid item xs={4} md={4} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={go2Calendar}
                                        onChange={handleCb_go2Calendar}
                                        name="go2Calendar" value="yes" />}
                                    label="Run Menu Item Summary Report"
                                />
                            </Grid>
                            <Grid item xs={4} md={4} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={go2Calendar}
                                        onChange={handleCb_go2Calendar}
                                        name="go2Calendar" value="yes" />}
                                    label="Run Menu Item Sales Report"
                                />
                            </Grid>
                            <Grid item xs={4} md={4} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={go2Calendar}
                                        onChange={handleCb_go2Calendar}
                                        name="go2Calendar" value="yes" />}
                                    label="Run Time Period Detail Report"
                                />
                            </Grid>
                            <Grid item xs={4} md={4} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={go2Calendar}
                                        onChange={handleCb_go2Calendar}
                                        name="go2Calendar" value="yes" />}
                                    label="Run Time Period Summary Report "
                                />
                            </Grid>
                            <Grid item xs={4} md={4} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={go2Calendar}
                                        onChange={handleCb_go2Calendar}
                                        name="go2Calendar" value="yes" />}
                                    label="Run Serving Period Financial Report"
                                />
                            </Grid>
                            <Grid item xs={4} md={4} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={go2Calendar}
                                        onChange={handleCb_go2Calendar}
                                        name="go2Calendar" value="yes" />}
                                    label="Run Table Sales Report"
                                />
                            </Grid>
                            <Grid item xs={4} md={4} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={go2Calendar}
                                        onChange={handleCb_go2Calendar}
                                        name="go2Calendar" value="yes" />}
                                    label="Run Clock In Status Report"
                                />
                            </Grid>
                            <Grid item xs={4} md={4} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={go2Calendar}
                                        onChange={handleCb_go2Calendar}
                                        name="go2Calendar" value="yes" />}
                                    label="Run Labor Availability Report"
                                />
                            </Grid>
                            <Grid item xs={4} md={4} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={go2Calendar}
                                        onChange={handleCb_go2Calendar}
                                        name="go2Calendar" value="yes" />}
                                    label="Run Job Code Report"
                                />
                            </Grid>
                            <Grid item xs={4} md={4} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={go2Calendar}
                                        onChange={handleCb_go2Calendar}
                                        name="go2Calendar" value="yes" />}
                                    label="Run Autofire Open Check Report"
                                />
                            </Grid>
                            <Grid item xs={4} md={4} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={go2Calendar}
                                        onChange={handleCb_go2Calendar}
                                        name="go2Calendar" value="yes" />}
                                    label="Run Offline Revenue Center Financial Report"
                                />
                            </Grid>
                            <Grid item xs={4} md={4} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={go2Calendar}
                                        onChange={handleCb_go2Calendar}
                                        name="go2Calendar" value="yes" />}
                                    label="Run Offline Employee Financial Report"
                                />
                            </Grid>
                      
                        
                    </Grid>

                </Grid>
                    <Button
                                variant="contained"
                                onClick={handleFormSubmit}
                                sx={{ mt: 3, ml: 1 }}
                            >
                                Save Changes
                            </Button>
                {/* <Grid item container direction="column" xs={12} sm={6}>
                    <Typography variant="h4" gutterBottom sx={{ mt: 2 }} color={colors.greenAccent[400]}>
                        <strong>Report Options</strong>
                    </Typography>
                    <Grid container>
                        
                    <Paper variant="outlined" sx={{ padding: "10px" }}>
                            <Grid item xs={12} md={12} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={go2Calendar}
                                        onChange={handleCb_go2Calendar}
                                        name="go2Calendar" value="yes" />}
                                    label="Run Property Financial Report"
                                />
                            </Grid>
                            <Grid item xs={12} md={12} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={go2Calendar}
                                        onChange={handleCb_go2Calendar}
                                        name="go2Calendar" value="yes" />}
                                    label="Run Revenue Center Financial Report 31007-Run Employee Financial Report"
                                />
                            </Grid>
                            <Grid item xs={12} md={12} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={go2Calendar}
                                        onChange={handleCb_go2Calendar}
                                        name="go2Calendar" value="yes" />}
                                    label="Run Open Check Report"
                                />
                            </Grid>
                            <Grid item xs={12} md={12} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={go2Calendar}
                                        onChange={handleCb_go2Calendar}
                                        name="go2Calendar" value="yes" />}
                                    label="Run Closed Check Report"
                                />
                            </Grid>
                            <Grid item xs={12} md={12} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={go2Calendar}
                                        onChange={handleCb_go2Calendar}
                                        name="go2Calendar" value="yes" />}
                                    label="Run Employee Tip Report"
                                />
                            </Grid>
                            <Grid item xs={12} md={12} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={go2Calendar}
                                        onChange={handleCb_go2Calendar}
                                        name="go2Calendar" value="yes" />}
                                    label="Run Employee Labor Detail Report"
                                />
                            </Grid>
                            <Grid item xs={12} md={12} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={go2Calendar}
                                        onChange={handleCb_go2Calendar}
                                        name="go2Calendar" value="yes" />}
                                    label="Run Employee Labor Summary Report"
                                />
                            </Grid>
                            <Grid item xs={12} md={12} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={go2Calendar}
                                        onChange={handleCb_go2Calendar}
                                        name="go2Calendar" value="yes" />}
                                    label="Run Casher Financial Report"
                                />
                            </Grid>
                            <Grid item xs={12} md={12} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={go2Calendar}
                                        onChange={handleCb_go2Calendar}
                                        name="go2Calendar" value="yes" />}
                                    label="Run Major Group Sales Report 31016-Run Family Group Sales Report"
                                />
                            </Grid>
                            <Grid item xs={12} md={12} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={go2Calendar}
                                        onChange={handleCb_go2Calendar}
                                        name="go2Calendar" value="yes" />}
                                    label="Run Menu Item Summary Report 31018-Run Menu Item Sales Report"
                                />
                            </Grid>
                            <Grid item xs={12} md={12} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={go2Calendar}
                                        onChange={handleCb_go2Calendar}
                                        name="go2Calendar" value="yes" />}
                                    label="Run Time Period Detail Report"
                                />
                            </Grid>
                            <Grid item xs={12} md={12} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={go2Calendar}
                                        onChange={handleCb_go2Calendar}
                                        name="go2Calendar" value="yes" />}
                                    label="Run Time Period Summary Report 31025-Run Serving Period Financial Report"
                                />
                            </Grid>
                            <Grid item xs={12} md={12} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={go2Calendar}
                                        onChange={handleCb_go2Calendar}
                                        name="go2Calendar" value="yes" />}
                                    label="Run Table Sales Report"
                                />
                            </Grid>
                            <Grid item xs={12} md={12} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={go2Calendar}
                                        onChange={handleCb_go2Calendar}
                                        name="go2Calendar" value="yes" />}
                                    label="Run Clock In Status Report"
                                />
                            </Grid>
                            <Grid item xs={12} md={12} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={go2Calendar}
                                        onChange={handleCb_go2Calendar}
                                        name="go2Calendar" value="yes" />}
                                    label="Run Labor Availability Report"
                                />
                            </Grid>
                            <Grid item xs={12} md={12} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={go2Calendar}
                                        onChange={handleCb_go2Calendar}
                                        name="go2Calendar" value="yes" />}
                                    label="Run Job Code Report"
                                />
                            </Grid>
                            <Grid item xs={12} md={12} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={go2Calendar}
                                        onChange={handleCb_go2Calendar}
                                        name="go2Calendar" value="yes" />}
                                    label="Run Autofire Open Check Report"
                                />
                            </Grid>
                            <Grid item xs={12} md={12} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={go2Calendar}
                                        onChange={handleCb_go2Calendar}
                                        name="go2Calendar" value="yes" />}
                                    label="Run Offline Revenue Center Financial Report"
                                />
                            </Grid>
                            <Grid item xs={12} md={12} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={go2Calendar}
                                        onChange={handleCb_go2Calendar}
                                        name="go2Calendar" value="yes" />}
                                    label="Run Offline Employee Financial Report"
                                />
                            </Grid>
                        </Paper>
                        
                    </Grid>
                </Grid> */}


            </Grid>
        </div>
    )
}

export default AdhocReport