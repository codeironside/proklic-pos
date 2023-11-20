import React, { useState } from 'react'
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Paper, useTheme } from '@mui/material';
import { tokens } from '../../theme';
import Button from '@mui/material/Button';
// tokens

const Transactions = () => {
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
                        <strong >Other Employee Checks Options</strong>
                    </Typography>
                    <Grid container>
                        <Paper variant="outlined" sx={{ padding: "10px" }}>

                            <Grid item xs={12} md={12} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={go2Calendar}
                                        onChange={handleCb_go2Calendar}
                                        name="go2Calendar" value="yes" />}
                                    label="Post Menu Items to Checks Belonging to Another Operator"
                                />
                            </Grid>
                            <Grid item xs={12} md={12} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={go2Calendar}
                                        onChange={handleCb_go2Calendar}
                                        name="go2Calendar" value="yes" />}
                                    label="Post Discounts to Checks Belonging to Another Operator"
                                />
                            </Grid>
                            <Grid item xs={12} md={12} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={go2Calendar}
                                        onChange={handleCb_go2Calendar}
                                        name="go2Calendar" value="yes" />}
                                    label="Post Service Charges to Checks Belonging to Another Operator"
                                />
                            </Grid>
                            <Grid item xs={12} md={12} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={go2Calendar}
                                        onChange={handleCb_go2Calendar}
                                        name="go2Calendar" value="yes" />}
                                    label="Post Payments to Checks Belonging to Another Operator
                                    "
                                />
                            </Grid>


                        </Paper>
                    </Grid>
                    <Typography variant="h4" gutterBottom sx={{ mt: 2 }} color={colors.greenAccent[400]}>
                        <strong>Service Charge and Discount Options</strong>
                    </Typography>
                    <Grid container>
                        <Paper variant="outlined" sx={{ padding: "10px" }}>

                            <Grid item xs={12} md={12} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={go2Calendar}
                                        onChange={handleCb_go2Calendar}
                                        name="go2Calendar" value="yes" />}
                                    label="Authorize/Perform Automatic Service Charge Exemptions"
                                />
                            </Grid>
                            <Grid item xs={12} md={12} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={go2Calendar}
                                        onChange={handleCb_go2Calendar}
                                        name="go2Calendar" value="yes" />}
                                    label="Authorize Perform Posting of Discounts in Priv Group 1"
                                />
                            </Grid>
                            <Grid item xs={12} md={12} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={go2Calendar}
                                        onChange={handleCb_go2Calendar}
                                        name="go2Calendar" value="yes" />}
                                    label="Authorize Perform Posting of Discounts in Priv Group 2"
                                />
                            </Grid>
                            <Grid item xs={12} md={12} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={go2Calendar}
                                        onChange={handleCb_go2Calendar}
                                        name="go2Calendar" value="yes" />}
                                    label="Authorize Perform Posting of Discounts in Priv Group 3"
                                />
                            </Grid>
                            <Grid item xs={12} md={12} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={go2Calendar}
                                        onChange={handleCb_go2Calendar}
                                        name="go2Calendar" value="yes" />}
                                    label="Authorize Perform Posting of Service Charges in Priv Group 1"
                                />
                            </Grid>
                            <Grid item xs={12} md={12} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={go2Calendar}
                                        onChange={handleCb_go2Calendar}
                                        name="go2Calendar" value="yes" />}
                                    label="Authorize Perform Posting of Service Charges in Priv Group 2"
                                />
                            </Grid>
                            <Grid item xs={12} md={12} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={go2Calendar}
                                        onChange={handleCb_go2Calendar}
                                        name="go2Calendar" value="yes" />}
                                    label="Authorize Perform Posting of Service Charges in Priv Group 3 "
                                />
                            </Grid>
                            <Grid item xs={12} md={12} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={go2Calendar}
                                        onChange={handleCb_go2Calendar}
                                        name="go2Calendar" value="yes" />}
                                    label={`Authorize Perform "Accept Coupon" Stored Value Function`}
                                />
                            </Grid>

                        </Paper>
                    </Grid>
                </Grid>
                <Grid item container direction="column" xs={12} sm={6}>
                    <Typography variant="h4" gutterBottom sx={{ mt: 2 }} color={colors.greenAccent[400]}>
                        <strong>Tender Media Options</strong>
                    </Typography>
                    <Grid container>
                        <Paper variant="outlined" sx={{ padding: "10px" }}>

                            <Grid item xs={12} md={12} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={go2Calendar}
                                        onChange={handleCb_go2Calendar}
                                        name="go2Calendar" value="yes" />}
                                    label="Authorize Over HALO Amounts on [Tender/Media] Keys"
                                />
                            </Grid>
                            <Grid item xs={12} md={12} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={go2Calendar}
                                        onChange={handleCb_go2Calendar}
                                        name="go2Calendar" value="yes" />}
                                    label="Authorize Perform Posting of Payments"
                                />
                            </Grid>
                            <Grid item xs={12} md={12} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={go2Calendar}
                                        onChange={handleCb_go2Calendar}
                                        name="go2Calendar" value="yes" />}
                                    label="Authorize Perform Closing of Checks with a Zero Balance "
                                />
                            </Grid>
                            <Grid item xs={12} md={12} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={go2Calendar}
                                        onChange={handleCb_go2Calendar}
                                        name="go2Calendar" value="yes" />}
                                    label="Authorize Perform Closing of Checks with a Negative Balance "
                                />
                            </Grid>
                            <Grid item xs={12} md={12} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={go2Calendar}
                                        onChange={handleCb_go2Calendar}
                                        name="go2Calendar" value="yes" />}
                                    label="AAuthorize/Perform Posting of Tender/Media in Priv Group 1"
                                />
                            </Grid>
                            <Grid item xs={12} md={12} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={go2Calendar}
                                        onChange={handleCb_go2Calendar}
                                        name="go2Calendar" value="yes" />}
                                    label="Authorize Perform Posting of Tender/Media in Priv Group 2"
                                />
                            </Grid>
                            <Grid item xs={12} md={12} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={go2Calendar}
                                        onChange={handleCb_go2Calendar}
                                        name="go2Calendar" value="yes" />}
                                    label="Authorize/Perform Posting of Tender/Media in Priv Group 3"
                                />
                            </Grid>
                            <Grid item xs={12} md={12} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={go2Calendar}
                                        onChange={handleCb_go2Calendar}
                                        name="go2Calendar" value="yes" />}
                                    label="Authorize Perform Open Check Block Settlement"
                                />
                            </Grid>
                            <Grid item xs={12} md={12} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={go2Calendar}
                                        onChange={handleCb_go2Calendar}
                                        name="go2Calendar" value="yes" />}
                                    label="Authorize Perform Voiding of Tender w/ Signature"
                                />
                            </Grid>
                            <Grid item xs={12} md={12} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={go2Calendar}
                                        onChange={handleCb_go2Calendar}
                                        name="go2Calendar" value="yes" />}
                                    label="Allow Tender of Party Checks"
                                />
                            </Grid>


                        </Paper>
                    </Grid>


                    <Typography variant="h4" gutterBottom sx={{ mt: 2 }} color={colors.greenAccent[400]}>
                        <strong>Transaction Control Options</strong>
                    </Typography>
                    <Grid container>
                        <Paper variant="outlined" sx={{ padding: "10px" }}>

                            <Grid item xs={12} md={12} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={go2Calendar}
                                        onChange={handleCb_go2Calendar}
                                        name="go2Calendar" value="yes" />}
                                    label="Authorize Use the [Item Weight] Key"
                                />
                            </Grid>
                            <Grid item xs={12} md={12} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={go2Calendar}
                                        onChange={handleCb_go2Calendar}
                                        name="go2Calendar" value="yes" />}
                                    label="Authorize Use the [Order Type] Keys"
                                />
                            </Grid>
                            <Grid item xs={12} md={12} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={go2Calendar}
                                        onChange={handleCb_go2Calendar}
                                        name="go2Calendar" value="yes" />}
                                    label="Authorize Perform Tax Exemptions Using [Exempt Tax] Keys "
                                />
                            </Grid>
                            <Grid item xs={12} md={12} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={go2Calendar}
                                        onChange={handleCb_go2Calendar}
                                        name="go2Calendar" value="yes" />}
                                    label="Authorize Perform Change of Transaction Main Level"
                                />
                            </Grid>
                            <Grid item xs={12} md={12} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={go2Calendar}
                                        onChange={handleCb_go2Calendar}
                                        name="go2Calendar" value="yes" />}
                                    label="Authorize Perform Change of Transaction Sub Level"
                                />
                            </Grid>
                            <Grid item xs={12} md={12} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={go2Calendar}
                                        onChange={handleCb_go2Calendar}
                                        name="go2Calendar" value="yes" />}
                                    label="Authorize Cause a Transaction to have a Negative Balance"
                                />
                            </Grid>
                            <Grid item xs={12} md={12} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={go2Calendar}
                                        onChange={handleCb_go2Calendar}
                                        name="go2Calendar" value="yes" />}
                                    label="Authorize Perform Change Number of Guests"
                                />
                            </Grid>
                            <Grid item xs={12} md={12} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={go2Calendar}
                                        onChange={handleCb_go2Calendar}
                                        name="go2Calendar" value="yes" />}
                                    label="Authorize Use the [Transaction Cancel] Key"
                                />
                            </Grid>
                            <Grid item xs={12} md={12} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={go2Calendar}
                                        onChange={handleCb_go2Calendar}
                                        name="go2Calendar" value="yes" />}
                                    label="Authorize Use the [Menu Item Price Override] Key"
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

export default Transactions