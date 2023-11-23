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




    const [transactions, setTransactions] = React.useState({
        // Other Employee Checks Options
        postMenuItems : false,
        postDiscount: false,
        postServiceCharges: false,
        postPayments: false,


        // Service Charge and Discount Options
        authServiceChargeExemption: false,
        authDiscountInPrivGroup1: false,
        authDiscountInPrivGroup2: false,
        authDiscountInPrivGroup3: false,
        authServiceChargeInPrivGroup1: false,
        authServiceChargeInPrivGroup2: false,
        authServiceChargeInPrivGroup3: false,
        acceptCoupon: false,
        
        // Tender Media Options
        authOverHALO: false,
        authPostingOfPayments: false,
        authPostOfChecksZeroBal: false,
        authPostOfChecksNegeBal: false,
        authPostingTenderMediaInPrivGroup1: false,
        authPostingTenderMediaInPrivGroup2: false,
        authPostingTenderMediaInPrivGroup3: false,
        authCheckBlockSettlement: false,
        authVoidOfTenderSignature: false,
        allowTenderPartyChecks: false,
        
        
        // Transaction Control Options
        authUseItemWeightKey: false,
        authUseOrderTypeKey: false,
        authTaxExemption: false,
        authChangeOfTranMainLevel: false,
        authChangeOfTranSubLevel: false,
        authNegativeBalance: false,
        authChangeNoOfGuest: false,
        authTransactionalCancel: false,
        authMenuItemPriceOverride: false,
      });
    
      const { 
         // Other Employee Checks Options
         postMenuItems,
         postDiscount,
         postServiceCharges,
         postPayments,
 
 
         // Service Charge and Discount Options
         authServiceChargeExemption,
         authDiscountInPrivGroup1,
         authDiscountInPrivGroup2,
         authDiscountInPrivGroup3,
         authServiceChargeInPrivGroup1,
         authServiceChargeInPrivGroup2,
         authServiceChargeInPrivGroup3,
         acceptCoupon,

         
         
         // Tender Media Options
         authOverHALO,
         authPostingOfPayments,
         authPostOfChecksZeroBal,
         authPostOfChecksNegeBal,
         authPostingTenderMediaInPrivGroup1,
        authPostingTenderMediaInPrivGroup2,
        authPostingTenderMediaInPrivGroup3,
        authCheckBlockSettlement,
        authVoidOfTenderSignature,
        allowTenderPartyChecks,
        
        
        // Transaction Control Options
        authUseItemWeightKey,
        authUseOrderTypeKey,
        authTaxExemption,
        authChangeOfTranMainLevel,
        authChangeOfTranSubLevel,
        authNegativeBalance,
        authChangeNoOfGuest,
        authTransactionalCancel,
        authMenuItemPriceOverride,

    } = transactions;
    
      const handleChange = (event) => {
        setTransactions({ ...transactions, [event.target.name]: event.target.checked });
      };
    
    
    // HANDLE POST REQUEST HERE
    const handleFormSubmit = () => {
        console.log(transactions)
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
                                        checked={postMenuItems}
                                        onChange={handleChange}
                                        name="postMenuItems" value="yes" />}
                                    label="Post Menu Items to Checks Belonging to Another Operator"
                                />
                            </Grid>
                            <Grid item xs={12} md={12} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={postDiscount}
                                        onChange={handleChange}
                                        name="postDiscount" value="yes" />}
                                    label="Post Discounts to Checks Belonging to Another Operator"
                                />
                            </Grid>
                            <Grid item xs={12} md={12} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={postServiceCharges}
                                        onChange={handleChange}
                                        name="postServiceCharges" value="yes" />}
                                    label="Post Service Charges to Checks Belonging to Another Operator"
                                />
                            </Grid>
                            <Grid item xs={12} md={12} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={postPayments}
                                        onChange={handleChange}
                                        name="postPayments" value="yes" />}
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
                                        checked={authServiceChargeExemption}
                                        onChange={handleChange}
                                        name="authServiceChargeExemption" value="yes" />}
                                    label="Authorize/Perform Automatic Service Charge Exemptions"
                                />
                            </Grid>
                            <Grid item xs={12} md={12} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={authDiscountInPrivGroup1}
                                        onChange={handleChange}
                                        name="authDiscountInPrivGroup1" value="yes" />}
                                    label="Authorize Perform Posting of Discounts in Priv Group 1"
                                />
                            </Grid>
                            <Grid item xs={12} md={12} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={authDiscountInPrivGroup2}
                                        onChange={handleChange}
                                        name="authDiscountInPrivGroup2" value="yes" />}
                                    label="Authorize Perform Posting of Discounts in Priv Group 2"
                                />
                            </Grid>
                            <Grid item xs={12} md={12} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={authDiscountInPrivGroup3}
                                        onChange={handleChange}
                                        name="authDiscountInPrivGroup3" value="yes" />}
                                    label="Authorize Perform Posting of Discounts in Priv Group 3"
                                />
                            </Grid>
                            <Grid item xs={12} md={12} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={authServiceChargeInPrivGroup1}
                                        onChange={handleChange}
                                        name="authServiceChargeInPrivGroup1" value="yes" />}
                                    label="Authorize Perform Posting of Service Charges in Priv Group 1"
                                />
                            </Grid>
                            <Grid item xs={12} md={12} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={authServiceChargeInPrivGroup2}
                                        onChange={handleChange}
                                        name="authServiceChargeInPrivGroup2" value="yes" />}
                                    label="Authorize Perform Posting of Service Charges in Priv Group 2"
                                />
                            </Grid>
                            <Grid item xs={12} md={12} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={authServiceChargeInPrivGroup3}
                                        onChange={handleChange}
                                        name="authServiceChargeInPrivGroup3" value="yes" />}
                                    label="Authorize Perform Posting of Service Charges in Priv Group 3 "
                                />
                            </Grid>
                            <Grid item xs={12} md={12} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={acceptCoupon}
                                        onChange={handleChange}
                                        name="acceptCoupon" value="yes" />}
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
                                        checked={authOverHALO}
                                        onChange={handleChange}
                                        name="authOverHALO" value="yes" />}
                                    label="Authorize Over HALO Amounts on [Tender/Media] Keys"
                                />
                            </Grid>
                            <Grid item xs={12} md={12} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={authPostingOfPayments}
                                        onChange={handleChange}
                                        name="authPostingOfPayments" value="yes" />}
                                    label="Authorize Perform Posting of Payments"
                                />
                            </Grid>
                            <Grid item xs={12} md={12} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={authPostOfChecksZeroBal}
                                        onChange={handleChange}
                                        name="authPostOfChecksZeroBal" value="yes" />}
                                    label="Authorize Perform Closing of Checks with a Zero Balance "
                                />
                            </Grid>
                            <Grid item xs={12} md={12} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={authPostOfChecksNegeBal}
                                        onChange={handleChange}
                                        name="authPostOfChecksNegeBal" value="yes" />}
                                    label="Authorize Perform Closing of Checks with a Negative Balance "
                                />
                            </Grid>
                            <Grid item xs={12} md={12} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={authPostingTenderMediaInPrivGroup1}
                                        onChange={handleChange}
                                        name="authPostingTenderMediaInPrivGroup1" value="yes" />}
                                    label="Authorize/Perform Posting of Tender/Media in Priv Group 1"
                                />
                            </Grid>
                            <Grid item xs={12} md={12} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={authPostingTenderMediaInPrivGroup2}
                                        onChange={handleChange}
                                        name="authPostingTenderMediaInPrivGroup2" value="yes" />}
                                    label="Authorize Perform Posting of Tender/Media in Priv Group 2"
                                />
                            </Grid>
                            <Grid item xs={12} md={12} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={authPostingTenderMediaInPrivGroup3}
                                        onChange={handleChange}
                                        name="authPostingTenderMediaInPrivGroup3" value="yes" />}
                                    label="Authorize/Perform Posting of Tender/Media in Priv Group 3"
                                />
                            </Grid>
                            <Grid item xs={12} md={12} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={authCheckBlockSettlement}
                                        onChange={handleChange}
                                        name="authCheckBlockSettlement" value="yes" />}
                                    label="Authorize Perform Open Check Block Settlement"
                                />
                            </Grid>
                            <Grid item xs={12} md={12} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={authVoidOfTenderSignature}
                                        onChange={handleChange}
                                        name="authVoidOfTenderSignature" value="yes" />}
                                    label="Authorize Perform Voiding of Tender w/ Signature"
                                />
                            </Grid>
                            <Grid item xs={12} md={12} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={allowTenderPartyChecks}
                                        onChange={handleChange}
                                        name="allowTenderPartyChecks" value="yes" />}
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
                                        checked={authUseItemWeightKey}
                                        onChange={handleChange}
                                        name="authUseItemWeightKey" value="yes" />}
                                    label="Authorize Use the [Item Weight] Key"
                                />
                            </Grid>
                            <Grid item xs={12} md={12} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={authUseOrderTypeKey}
                                        onChange={handleChange}
                                        name="authUseOrderTypeKey" value="yes" />}
                                    label="Authorize Use the [Order Type] Keys"
                                />
                            </Grid>
                            <Grid item xs={12} md={12} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={authTaxExemption}
                                        onChange={handleChange}
                                        name="authTaxExemption" value="yes" />}
                                    label="Authorize Perform Tax Exemptions Using [Exempt Tax] Keys "
                                />
                            </Grid>
                            <Grid item xs={12} md={12} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={authChangeOfTranMainLevel}
                                        onChange={handleChange}
                                        name="authChangeOfTranMainLevel" value="yes" />}
                                    label="Authorize Perform Change of Transaction Main Level"
                                />
                            </Grid>
                            <Grid item xs={12} md={12} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={authChangeOfTranSubLevel}
                                        onChange={handleChange}
                                        name="authChangeOfTranSubLevel" value="yes" />}
                                    label="Authorize Perform Change of Transaction Sub Level"
                                />
                            </Grid>
                            <Grid item xs={12} md={12} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={authNegativeBalance}
                                        onChange={handleChange}
                                        name="authNegativeBalance" value="yes" />}
                                    label="Authorize Cause a Transaction to have a Negative Balance"
                                />
                            </Grid>
                            <Grid item xs={12} md={12} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={authChangeNoOfGuest}
                                        onChange={handleChange}
                                        name="authChangeNoOfGuest" value="yes" />}
                                    label="Authorize Perform Change Number of Guests"
                                />
                            </Grid>
                            <Grid item xs={12} md={12} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={authTransactionalCancel}
                                        onChange={handleChange}
                                        name="authTransactionalCancel" value="yes" />}
                                    label="Authorize Use the [Transaction Cancel] Key"
                                />
                            </Grid>
                            <Grid item xs={12} md={12} sx={{ mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary"
                                        checked={authMenuItemPriceOverride}
                                        onChange={handleChange}
                                        name="authMenuItemPriceOverride" value="yes" />}
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