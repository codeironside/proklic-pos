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

    const [adhocReports, setadhocReports] = React.useState({
        // Return Options
        allowSelectionOfAllBusinessDate: false,
        allowViewofAllRevCenters: false,
        allowViewofAllEmployees: false,
        allowViewofAllCashiers: false,
        allowViewofAllFamilyGroup: false,


        // Report Options
        runPropertyFinReport: false,
        runRevCenterFinReport: false,
        runEmployeeFinReport: false,
        runOpenCheckReport: false,
        runClosedCheckReport: false,
        runEmployeeTipReport: false,
        runEmpLaborDetailReport: false,
        runEmpLaborSummaryReport: false,
        runCashierFinReport: false,
        runMajorGroupSalesReport: false,
        runFamilyGroupSalesReport: false,
        runMenuItemSummaryReport: false,
        runMenuItemSalesReport: false,
        runTimeDetailReport: false,
        runTimeDetailSummaryReport: false,
        runServingPeriodFinReport: false,
        runTableSalesReport: false,
        runClockInStatusReport: false,
        runLaborAvailReport: false,
        runJobCodeReport: false,
        runAutoFireReport: false,
        runOfflineRevCenterFinReport: false,
        runOfflineEmployeeFinReport: false,
      });
    
      const { 
         // Return Options
         allowSelectionOfAllBusinessDate,
         allowViewofAllRevCenters,
         allowViewofAllEmployees,
         allowViewofAllCashiers,
         allowViewofAllFamilyGroup,
 
 
         // Report Options
         runPropertyFinReport,
         runRevCenterFinReport,
         runEmployeeFinReport,
         runOpenCheckReport,
         runClosedCheckReport,
         runEmployeeTipReport,
         runEmpLaborDetailReport,
         runEmpLaborSummaryReport,
         runCashierFinReport,
         runMajorGroupSalesReport,
         runFamilyGroupSalesReport,
         runMenuItemSummaryReport,
         runMenuItemSalesReport,
         runTimeDetailReport,
         runTimeDetailSummaryReport,
         runServingPeriodFinReport,
         runTableSalesReport,
         runClockInStatusReport,
         runLaborAvailReport,
         runJobCodeReport,
         runAutoFireReport,
         runOfflineRevCenterFinReport,
         runOfflineEmployeeFinReport,

    } = adhocReports;
    
      const handleChange = (event) => {
        setadhocReports({ ...adhocReports, [event.target.name]: event.target.checked });
      };
    
    
    // HANDLE POST REQUEST HERE
    const handleFormSubmit = () => {
        console.log(adhocReports)
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
                                        checked={allowSelectionOfAllBusinessDate}
                                        onChange={handleChange}
                                        name="allowSelectionOfAllBusinessDate" value="yes" />}
                                    label="Allow Selection of All Business Dates"
                                />
                            </Grid>
                            <Grid item xs={4} md={4} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={allowViewofAllRevCenters}
                                        onChange={handleChange}
                                        name="allowViewofAllRevCenters" value="yes" />}
                                    label="Allow View of All Revenue Centers"
                                />
                            </Grid>
                            <Grid item xs={4} md={4} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={allowViewofAllEmployees}
                                        onChange={handleChange}
                                        name="allowViewofAllEmployees" value="yes" />}
                                    label="Allow View of All Employees"
                                />
                            </Grid>
                            <Grid item xs={4} md={4} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={allowViewofAllCashiers}
                                        onChange={handleChange}
                                        name="allowViewofAllCashiers" value="yes" />}
                                    label="Allow View of All Cashiers"
                                />
                            </Grid>
                            <Grid item xs={4} md={4} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={allowViewofAllFamilyGroup}
                                        onChange={handleChange}
                                        name="allowViewofAllFamilyGroup" value="yes" />}
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
                                        checked={runPropertyFinReport}
                                        onChange={handleChange}
                                        name="runPropertyFinReport" value="yes" />}
                                    label="Run Property Financial Report"
                                />
                            </Grid>
                            <Grid item xs={4} md={4} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={runRevCenterFinReport}
                                        onChange={handleChange}
                                        name="runRevCenterFinReport" value="yes" />}
                                    label="Run Revenue Center Financial Report"
                                />
                            </Grid>
                            <Grid item xs={4} md={4} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={runEmployeeFinReport}
                                        onChange={handleChange}
                                        name="runEmployeeFinReport" value="yes" />}
                                    label="Run Employee Financial Report"
                                />
                            </Grid>
                            <Grid item xs={4} md={4} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={runOpenCheckReport}
                                        onChange={handleChange}
                                        name="runOpenCheckReport" value="yes" />}
                                    label="Run Open Check Report"
                                />
                            </Grid>
                            <Grid item xs={4} md={4} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={runClosedCheckReport}
                                        onChange={handleChange}
                                        name="runClosedCheckReport" value="yes" />}
                                    label="Run Closed Check Report"
                                />
                            </Grid>
                            <Grid item xs={4} md={4} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={runEmployeeTipReport}
                                        onChange={handleChange}
                                        name="runEmployeeTipReport" value="yes" />}
                                    label="Run Employee Tip Report"
                                />
                            </Grid>
                            <Grid item xs={4} md={4} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={runEmpLaborDetailReport}
                                        onChange={handleChange}
                                        name="runEmpLaborDetailReport" value="yes" />}
                                    label="Run Employee Labor Detail Report"
                                />
                            </Grid>
                            <Grid item xs={4} md={4} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={runEmpLaborSummaryReport}
                                        onChange={handleChange}
                                        name="runEmpLaborSummaryReport" value="yes" />}
                                    label="Run Employee Labor Summary Report"
                                />
                            </Grid>
                            <Grid item xs={4} md={4} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={runCashierFinReport}
                                        onChange={handleChange}
                                        name="runCashierFinReport" value="yes" />}
                                    label="Run Casher Financial Report"
                                />
                            </Grid>
                            <Grid item xs={4} md={4} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={runMajorGroupSalesReport}
                                        onChange={handleChange}
                                        name="runMajorGroupSalesReport" value="yes" />}
                                    label="Run Major Group Sales Report "
                                />
                            </Grid>
                            <Grid item xs={4} md={4} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={runFamilyGroupSalesReport}
                                        onChange={handleChange}
                                        name="runFamilyGroupSalesReport" value="yes" />}
                                    label="Run Family Group Sales Report"
                                />
                            </Grid>
                            <Grid item xs={4} md={4} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={runMenuItemSummaryReport}
                                        onChange={handleChange}
                                        name="runMenuItemSummaryReport" value="yes" />}
                                    label="Run Menu Item Summary Report"
                                />
                            </Grid>
                            <Grid item xs={4} md={4} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={runMenuItemSalesReport}
                                        onChange={handleChange}
                                        name="runMenuItemSalesReport" value="yes" />}
                                    label="Run Menu Item Sales Report"
                                />
                            </Grid>
                            <Grid item xs={4} md={4} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={runTimeDetailReport}
                                        onChange={handleChange}
                                        name="runTimeDetailReport" value="yes" />}
                                    label="Run Time Period Detail Report"
                                />
                            </Grid>
                            <Grid item xs={4} md={4} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={runTimeDetailSummaryReport}
                                        onChange={handleChange}
                                        name="runTimeDetailSummaryReport" value="yes" />}
                                    label="Run Time Period Summary Report "
                                />
                            </Grid>
                            <Grid item xs={4} md={4} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={runServingPeriodFinReport}
                                        onChange={handleChange}
                                        name="runServingPeriodFinReport" value="yes" />}
                                    label="Run Serving Period Financial Report"
                                />
                            </Grid>
                            <Grid item xs={4} md={4} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={runTableSalesReport}
                                        onChange={handleChange}
                                        name="runTableSalesReport" value="yes" />}
                                    label="Run Table Sales Report"
                                />
                            </Grid>
                            <Grid item xs={4} md={4} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={runClockInStatusReport}
                                        onChange={handleChange}
                                        name="runClockInStatusReport" value="yes" />}
                                    label="Run Clock In Status Report"
                                />
                            </Grid>
                            <Grid item xs={4} md={4} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={runLaborAvailReport}
                                        onChange={handleChange}
                                        name="runLaborAvailReport" value="yes" />}
                                    label="Run Labor Availability Report"
                                />
                            </Grid>
                            <Grid item xs={4} md={4} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={runJobCodeReport}
                                        onChange={handleChange}
                                        name="runJobCodeReport" value="yes" />}
                                    label="Run Job Code Report"
                                />
                            </Grid>
                            <Grid item xs={4} md={4} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={runAutoFireReport}
                                        onChange={handleChange}
                                        name="runAutoFireReport" value="yes" />}
                                    label="Run Autofire Open Check Report"
                                />
                            </Grid>
                            <Grid item xs={4} md={4} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={runOfflineRevCenterFinReport}
                                        onChange={handleChange}
                                        name="runOfflineRevCenterFinReport" value="yes" />}
                                    label="Run Offline Revenue Center Financial Report"
                                />
                            </Grid>
                            <Grid item xs={4} md={4} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={runOfflineEmployeeFinReport}
                                        onChange={handleChange}
                                        name="runOfflineEmployeeFinReport" value="yes" />}
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
                                        checked={runJobCodeReport}
                                        onChange={handleChange}
                                        name="go2Calendar" value="yes" />}
                                    label="Run Property Financial Report"
                                />
                            </Grid>
                            <Grid item xs={12} md={12} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={go2Calendar}
                                        onChange={handleChange}
                                        name="go2Calendar" value="yes" />}
                                    label="Run Revenue Center Financial Report 31007-Run Employee Financial Report"
                                />
                            </Grid>
                            <Grid item xs={12} md={12} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={go2Calendar}
                                        onChange={handleChange}
                                        name="go2Calendar" value="yes" />}
                                    label="Run Open Check Report"
                                />
                            </Grid>
                            <Grid item xs={12} md={12} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={go2Calendar}
                                        onChange={handleChange}
                                        name="go2Calendar" value="yes" />}
                                    label="Run Closed Check Report"
                                />
                            </Grid>
                            <Grid item xs={12} md={12} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={go2Calendar}
                                        onChange={handleChange}
                                        name="go2Calendar" value="yes" />}
                                    label="Run Employee Tip Report"
                                />
                            </Grid>
                            <Grid item xs={12} md={12} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={go2Calendar}
                                        onChange={handleChange}
                                        name="go2Calendar" value="yes" />}
                                    label="Run Employee Labor Detail Report"
                                />
                            </Grid>
                            <Grid item xs={12} md={12} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={go2Calendar}
                                        onChange={handleChange}
                                        name="go2Calendar" value="yes" />}
                                    label="Run Employee Labor Summary Report"
                                />
                            </Grid>
                            <Grid item xs={12} md={12} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={go2Calendar}
                                        onChange={handleChange}
                                        name="go2Calendar" value="yes" />}
                                    label="Run Casher Financial Report"
                                />
                            </Grid>
                            <Grid item xs={12} md={12} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={go2Calendar}
                                        onChange={handleChange}
                                        name="go2Calendar" value="yes" />}
                                    label="Run Major Group Sales Report 31016-Run Family Group Sales Report"
                                />
                            </Grid>
                            <Grid item xs={12} md={12} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={go2Calendar}
                                        onChange={handleChange}
                                        name="go2Calendar" value="yes" />}
                                    label="Run Menu Item Summary Report 31018-Run Menu Item Sales Report"
                                />
                            </Grid>
                            <Grid item xs={12} md={12} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={go2Calendar}
                                        onChange={handleChange}
                                        name="go2Calendar" value="yes" />}
                                    label="Run Time Period Detail Report"
                                />
                            </Grid>
                            <Grid item xs={12} md={12} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={go2Calendar}
                                        onChange={handleChange}
                                        name="go2Calendar" value="yes" />}
                                    label="Run Time Period Summary Report 31025-Run Serving Period Financial Report"
                                />
                            </Grid>
                            <Grid item xs={12} md={12} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={go2Calendar}
                                        onChange={handleChange}
                                        name="go2Calendar" value="yes" />}
                                    label="Run Table Sales Report"
                                />
                            </Grid>
                            <Grid item xs={12} md={12} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={go2Calendar}
                                        onChange={handleChange}
                                        name="go2Calendar" value="yes" />}
                                    label="Run Clock In Status Report"
                                />
                            </Grid>
                            <Grid item xs={12} md={12} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={go2Calendar}
                                        onChange={handleChange}
                                        name="go2Calendar" value="yes" />}
                                    label="Run Labor Availability Report"
                                />
                            </Grid>
                            <Grid item xs={12} md={12} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={go2Calendar}
                                        onChange={handleChange}
                                        name="go2Calendar" value="yes" />}
                                    label="Run Job Code Report"
                                />
                            </Grid>
                            <Grid item xs={12} md={12} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={go2Calendar}
                                        onChange={handleChange}
                                        name="go2Calendar" value="yes" />}
                                    label="Run Autofire Open Check Report"
                                />
                            </Grid>
                            <Grid item xs={12} md={12} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={go2Calendar}
                                        onChange={handleChange}
                                        name="go2Calendar" value="yes" />}
                                    label="Run Offline Revenue Center Financial Report"
                                />
                            </Grid>
                            <Grid item xs={12} md={12} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={go2Calendar}
                                        onChange={handleChange}
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