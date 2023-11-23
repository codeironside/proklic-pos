import React from 'react'
import { tokens } from "../../theme";
import { useLocation, useParams } from "react-router-dom";
import { Box, useTheme } from "@mui/material";

import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';

import Header from '../../components/Header';
import { useEffect, useState } from "react";
import axios from 'axios';

// useParams
// Header
// useTheme

const products = [
  {
    name: 'Firstname',
    desc: 'Badiru',
    price: '',
  },
  {
    name: 'Lastname',
    desc: 'Doe',
    price: '',
  },
  {
    name: 'Username',
    desc: 'Badirudoe101',
    price: '',
  },
  {
    name: 'Level',
    desc: 'Superole',
    price: '',
  },
  { name: 'ID', desc: '90000', price: '' },
];

const addresses = ['1 MUI Drive', 'Reactville', 'Anytown', '99999', 'USA'];
const payments = [
  { name: 'Sales Properties', detail: 'true' },
  { name: 'Invoices', detail: 'false' },
  { name: 'Property Setup Menu', detail: 'true' },
  { name: 'Item Masters', detail: 'true' },
];



const Operation = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [useraccount, setUseraccounts] = useState('');

  const { id } = useParams();
  console.log(id);


  useEffect(() => {
    if (!id) {
      return;
    }
    axios.get('/users/' + id).then(response => {
      console.log(response)
      setUseraccounts(response)
    });
  }, [id]);
  console.log(useraccount)


  return (
    <Box m="20px">
      <Header title="User Review" subtitle="Review your settings." />


      <Typography variant="h6" gutterBottom>
        User Overview
      </Typography>
      <List disablePadding>

        <ListItem  sx={{ py: 1, px: 0 }}>
          <ListItemText primary={"Firstname"} secondary={useraccount.data?.firstName} />
        </ListItem>

        <ListItem  sx={{ py: 1, px: 0 }}>
          <ListItemText primary={"Lastname"} secondary={useraccount.data?.lastName} />
        </ListItem>

        <ListItem  sx={{ py: 1, px: 0 }}>
          <ListItemText primary={"Username"} secondary={useraccount.data?.userName} />
        </ListItem>

        <ListItem  sx={{ py: 1, px: 0 }}>
          <ListItemText primary={"Level"} secondary={useraccount.data?.level} />
        </ListItem>

        <ListItem  sx={{ py: 1, px: 0 }}>
          <ListItemText primary={"Branch"} secondary={"Restuarant 1"} />
        </ListItem>

        <ListItem  sx={{ py: 1, px: 0 }}>
          <ListItemText primary={"ID"} secondary={useraccount.data?.id} />
        </ListItem>


        {/* {products.map((product) => (
          <ListItem key={product.name} sx={{ py: 1, px: 0 }}>
            <ListItemText primary={product.name} secondary={product.desc} />
            <Typography variant="body2">{product.price}</Typography>
          </ListItem>
        ))} */}

        {/* <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            $34.06
          </Typography>
        </ListItem> */}

      </List>
      <Grid container spacing={2}>
        {/* <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Shipping
          </Typography>
          <Typography gutterBottom>John Smith</Typography>
          <Typography gutterBottom>{addresses.join(', ')}</Typography>
        </Grid> */}
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h4" gutterBottom sx={{ mt: 2 }}>
            <strong>Priviledges Summary</strong>
          </Typography>
          <Grid container>
            {payments.map((payment) => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h4" gutterBottom sx={{ mt: 2 }}>
            <strong>Others</strong>
          </Typography>
          <Grid container>
            {payments.map((payment) => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid>

    </Box>
  )
}

export default Operation