import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Dialog from '@mui/material/Dialog';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
// tokens

import Grid from '@mui/material/Grid';
import { Paper, useTheme } from '@mui/material';
import Typography from '@mui/material/Typography';
import { tokens } from '../theme';

const revOptions = [
    'Restuarant',
    'Bar',
    'Cafe',
    'Confectionery',
    'Drinks',
];

function RevCenterModalRaw(props) {
    const { onClose, value: valueProp, openRev, ...other } = props;
    const [value, setValue] = React.useState(valueProp);
    const radioGroupRef = React.useRef(null);

    React.useEffect(() => {
        if (!openRev) {
            setValue(valueProp);
        }
    }, [valueProp, openRev]);

    const handleEntering = () => {
        if (radioGroupRef.current != null) {
            radioGroupRef.current.focus();
        }
    };

    const handleCancel = () => {
        onClose();
    };

    const handleOk = () => {
        onClose(value);
    };

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <Dialog
            sx={{ '& .MuiDialog-paper': { width: '80%', maxHeight: 435 } }}
            maxWidth="xs"
            TransitionProps={{ onEntering: handleEntering }}
            open={openRev}
            {...other}
        >
            <DialogTitle>Select Revenue Center</DialogTitle>
            <DialogContent dividers>
                <RadioGroup
                    ref={radioGroupRef}
                    aria-label="ringtone"
                    name="ringtone"
                    value={value}
                    onChange={handleChange}
                >
                    {revOptions.map((option) => (
                        <FormControlLabel
                            value={option}
                            key={option}
                            control={<Radio />}
                            label={option}
                        />
                    ))}
                </RadioGroup>
            </DialogContent>
            <DialogActions>
                <Button autoFocus onClick={handleCancel}>
                    Cancel
                </Button>
                <Button onClick={handleOk}>Ok</Button>
            </DialogActions>
        </Dialog>
    );
}

RevCenterModalRaw.propTypes = {
    onClose: PropTypes.func.isRequired,
    openRev: PropTypes.bool.isRequired,
    value: PropTypes.string.isRequired,
};

export default function RevCenterModal() {
    const [openRev, setopenRev] = React.useState(false);
    const [value, setValue] = React.useState('Dione');

    const handleClickListItemRev = () => {
        setopenRev(true);
    };

    const handleCloseRev = (newValue) => {
        setopenRev(false);

        if (newValue) {
            setValue(newValue);
        }
    };

    const handleFormSubmit = () => {

    };

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
            <List component="div" role="group">

                <ListItem
                    button
                    divider
                    aria-haspopup="true"
                    aria-controls="ringtone-menu"
                    aria-label="Select Revenue Center"
                    onClick={handleClickListItemRev}
                >
                    <ListItemText primary="Select Revenue Center" secondary={value} />
                </ListItem>
                <RevCenterModalRaw
                    id="ringtone-menu"
                    keepMounted
                    open={openRev}
                    onClose={handleCloseRev}
                    value={value}
                />
            </List>

     
        </Box>
    );
}


