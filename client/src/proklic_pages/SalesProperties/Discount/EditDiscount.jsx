import React, { useCallback, useMemo, useState } from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import Header from '../../../components/Header'
import Grid from '@mui/material/Grid';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useLocation } from 'react-router-dom'
import { TextField, Button, Tooltip } from '@mui/material';
import { Typography } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import BeenhereIcon from '@mui/icons-material/Beenhere';
import { useTheme } from '@mui/material';
import { tokens } from '../../../theme';
import Paper from '@mui/material/Paper';

import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Checkbox from '@mui/material/Checkbox';
import FormLabel from '@mui/material/FormLabel';
import DateRangeIcon from '@mui/icons-material/DateRange';

import { discount, states } from '../../../data/makeData';
import { MaterialReactTable } from 'material-react-table';
import { darken } from '@mui/material';
import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Stack,
} from '@mui/material';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';


import dayjs from 'dayjs';
import { DateRangePicker } from "mui-daterange-picker";

const EditDiscount = (props) => {

    const navigate = useNavigate();
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    // Access the properties of myObject
    const location = useLocation();
    const myData = location.state.key1;
    const idData = location.state.key2;
    // console.log(myData);
    // console.log(idData);

    // General Options
    const [generalOption, setGeneralOption] = React.useState({
        openDiscount: false,
        amtDiscount: false,
        itemDiscount: false,
        empMeal: false,
        refRequired: false,
        activeMaxAmt: false,
        validReq: false,
    });

    const handleChangeGeneralOption = (event) => {
        setGeneralOption({
            ...generalOption,
            [event.target.name]: event.target.checked,
        });
    };

    const {
        openDiscount,
        amtDiscount,
        itemDiscount,
        empMeal,
        refRequired,
        activeMaxAmt,
        validReq,

    } = generalOption;


    // Activation Period
    const [open, setOpen] = React.useState(true);
    const [dateRange, setDateRange] = React.useState({});

    const toggle = () => setOpen(!open);



    // SAVE ALL CHANGES
    const saveMenuItemSetEdit = () => {
        // Connect to API from here
        const combinedObject = { dateRange, generalOption }
      // const formBody = JSON.stringify(combinedObject);
      console.log(combinedObject)

    };



















    // GENERA TAB
    const [generalState, setGeneralState] = React.useState({
        taxClass: "",
        sales: "",
        discount: "",
        discountChg: "",
        condimentPop: "",
        priceCal: "",
        countView: "",
        countInput: "",
        printSet: "",
        printGroup: "",
        serviceCgh: "",
        priviledgeGroup: "",
        mainLevel: "",
        subLevelChg: "",
    });

    const handleChangeGeneralState = (event) => {
        setGeneralState({
            ...generalState,
            [event.target.name]: event.target.value,
        });
    };

    const {
        taxClass,
        sales,
        discount,
        discountChg,
        condimentPop,
        priceCal,
        countView,
        countInput,
        printSet,
        printGroup,
        serviceCgh,
        priviledgeGroup,
        mainLevel,
        subLevelChg,
    } = generalState;



    // CONDIMENT GROUP TABS 
    const [state, setState] = React.useState({
        gilad: false,
        jason: false,
        antoine: false,
    });

    const handleChange = (event) => {
        setState({
            ...state,
            [event.target.name]: event.target.checked,
        });
    };

    const { gilad, jason, antoine } = state;


    // FORCE CONDIMENT VARIABLE TAB
    const [tableData, setTableData] = useState(discount);

    const handleSaveCell = (cell, value) => {
        //if using flat data and simple accessorKeys/ids, you can just do a simple assignment here
        tableData[cell.row.index][cell.column.id] = value;
        //send/receive api updates here
        setTableData([...tableData]); //re-render with new data
    };




    const [validationErrors, setValidationErrors] = useState({});
    const [progress, setProgress] = useState(0);

    const getCommonEditTextFieldProps = useCallback(
        (cell) => {
            return {
                error: !!validationErrors[cell.id],
                helperText: validationErrors[cell.id],
                onBlur: (event) => {
                    const isValid =
                        cell.column.id === 'email'
                            ? validateEmail(event.target.value)
                            : cell.column.id === 'age'
                                ? validateAge(+event.target.value)
                                : validateRequired(event.target.value);
                    if (!isValid) {
                        //set validation error for cell if invalid
                        setValidationErrors({
                            ...validationErrors,
                            [cell.id]: `${cell.column.columnDef.header} is required`,
                        });
                    } else {
                        //remove validation error for cell if valid
                        delete validationErrors[cell.id];
                        setValidationErrors({
                            ...validationErrors,
                        });
                    }
                },
            };
        },
        [validationErrors],
    );

    const columns = useMemo(
        () => [
            {
                accessorKey: 'id',
                header: 'ID',
                enableColumnOrdering: false,
                enableEditing: false, //disable editing on this column
                enableSorting: false,
                size: 80,
            },
            {
                accessorKey: 'firstName',
                header: 'Group',
                size: 80,

            },
            {
                accessorKey: 'lastName',
                header: 'Minimum',
                size: 80,

            },
            {
                accessorKey: 'email',
                header: 'Maximum',

            },

            // {
            //     accessorKey: 'age',
            //     header: 'Threshold 1',
            //     size: 80,

            // },
            // {
            //     accessorKey: 'age',
            //     header: 'Threshold Level',
            //     size: 80,

            // },
        ],
        [getCommonEditTextFieldProps],
    );


    // OPTIONS TAB
    const [optionState, setOptionState] = React.useState({
        tick4Con: false,
        tick4Open: false,
        refRq: false,
        applyItem: false,
        allowMenu: false,
        tickSub: false,
        conMenu: false,
        retItem: false,
        itemSh: false,
        addGustCount: false,
        printPrice: false,
        printName1: false,
        printName2: false,
        displayName2: false,
        itemBev: false,
        addConPrice: false,
        forceNum: false,
        validationReq: false,
    });

    const handleChangeOptionState = (event) => {
        setOptionState({
            ...optionState,
            [event.target.name]: event.target.checked,
        });
    };

    const {
        tick4Con,
        tick4Open,
        refRq,
        applyItem,
        allowMenu,
        tickSub,
        conMenu,
        retItem,
        itemSh,

        addGustCount,
        printPrice,
        printName1,
        printName2,
        displayName2,
        itemBev,
        addConPrice,
        forceNum,
        validationReq,
    } = optionState;




    // SELECT DROPDOWN FOR Routing
    const [selectedValue, setSelectedValue] = useState('');

    const handleChangeRouting = (event) => {
        setSelectedValue(event.target.value);
        console.log(event.target.value)
    };



    return (

        <div>
            <Box m="20px">
                <Box display="flex" justifyContent="space-between" p={2}>
                    <Header title="Edit Discount" subtitle="You are editing this record." />



                    <Box>
                        {/* <Link to={`/dashboard/${dataID?._id}/menu_items_sets`}>
                            <Button
                                variant="contained"
                                color="secondary"
                                sx={{
                                    fontSize: "14px",
                                    fontWeight: "bold",
                                    padding: "10px 20px",
                                }}
                            >
                                <ArrowBackIosNewIcon sx={{ mr: "10px" }} />
                                Back to  Items Sets menu
                            </Button>
                        </Link> */}


                    </Box>
                </Box>

                <Paper variant="outlined" >
                    <Box display="flex" justifyContent="space-between" p={2}>
                        <Box py={1}>
                            <FormLabel component="legend"><strong>Name:</strong> {myData?.discountName}</FormLabel>
                            <FormHelperText><strong>ID Number:</strong> #{myData?.id}</FormHelperText>

                            <FormControl fullWidth sx={{ mt: 1 }}>
                                {/* <InputLabel id="demo-simple-select-helper-label12">
                                        Select Menuitem Set
                                    </InputLabel> */}
                                {/* <Select
                                    labelId="demo-simple-select-helper-label12"
                                    id="demo-simple-select-helper12"
                                    onChange={(e) => handleChangeRouting(e)}
                                    value={selectedValue}
                                    label="menuItemAvail"
                                    name="menuItemAvail">
                                    <MenuItem value="none">
                                        <em>None</em>
                                    </MenuItem>
                                    {data.map((state) => (
                                            <MenuItem key={state} value={state}>
                                                <Link
                                                to={`/dashboard/${idData?._id}/edit-menuitem-sets/${state.id}`}
                                                state={{from: state}}
                                                >
                                                
                                                    {state.lastName}
                                                </Link>
                                            </MenuItem>
                                        ))}
                                </Select> */}
                            </FormControl>
                        </Box>

                        <Box>

                            <Tooltip arrow placement="right" title="Click to save all changes">
                                <Button
                                    color="success"
                                    onClick={() => saveMenuItemSetEdit()}
                                    variant="contained">
                                    <BeenhereIcon sx={{ mr: "10px" }} />
                                    Save Changes
                                </Button>
                            </Tooltip>
                        </Box>
                    </Box>
                </Paper>

                <Tabs>
                    <TabList>
                        <Tab>General Options</Tab>
                        <Tab>Print Options</Tab>
                        <Tab>Sales Analyzer Options </Tab>
                        <Tab>RVC Options </Tab>
                        <Tab>Activation Period </Tab>
                        <Tab>Days of Occurrence </Tab>
                        <Tab>Time of day Occurrence </Tab>
                    </TabList>

                    <TabPanel>
                        <Box sx={{ display: 'flex' }}>
                            <FormGroup>
                                <FormLabel component="legend"><i>Select applicable options</i></FormLabel>

                                <FormControl sx={{ m: 1 }} component="fieldset" variant="standard">
                                    {/* <FormLabel component="legend">Assign responsibility</FormLabel> */}
                                    <FormGroup>
                                        <FormControlLabel
                                            control={
                                                <Checkbox checked={openDiscount} onChange={handleChangeGeneralOption} name="openDiscount" />
                                            }
                                            label="Open Discount?
                "
                                        />
                                        <FormControlLabel
                                            control={
                                                <Checkbox checked={amtDiscount} onChange={handleChangeGeneralOption} name="amtDiscount" />
                                            }
                                            label="Amount Discount?
                "
                                        />
                                        <FormControlLabel
                                            control={
                                                <Checkbox checked={itemDiscount} onChange={handleChangeGeneralOption} name="itemDiscount" />
                                            }
                                            label="Item Discount?
                "
                                        />
                                        <FormControlLabel
                                            control={
                                                <Checkbox checked={empMeal} onChange={handleChangeGeneralOption} name="empMeal" />
                                            }
                                            label="Employee Meal?
                "
                                        />
                                        <FormControlLabel
                                            control={
                                                <Checkbox checked={refRequired} onChange={handleChangeGeneralOption} name="refRequired" />
                                            }
                                            label="Reference Required?
                "
                                        />
                                        <FormControlLabel
                                            control={
                                                <Checkbox checked={activeMaxAmt} onChange={handleChangeGeneralOption} name="activeMaxAmt" />
                                            }
                                            label="Activate Max Amount?
                "
                                        />
                                        <FormControlLabel
                                            control={
                                                <Checkbox checked={validReq} onChange={handleChangeGeneralOption} name="validReq" />
                                            }
                                            label="Validation Required?

                "
                                        />

                                    </FormGroup>

                                </FormControl>

                            </FormGroup>


                        </Box>
                    </TabPanel>

                    <TabPanel>
                        <Box sx={{ display: 'flex' }}>
                            {/* FORM GROUP 1 */}
                            <FormGroup>

                                <FormLabel component="legend"><i>Select applicable options</i></FormLabel>

                                <FormControl sx={{ m: 1 }} component="fieldset" variant="standard">
                                    {/* <FormLabel component="legend">Assign responsibility</FormLabel> */}
                                    <FormGroup>



                                        <FormControlLabel
                                            control={
                                                <Checkbox checked={retItem} onChange={handleChangeOptionState} name="retItem" />
                                            }
                                            label="Print on Guest Check
                                                "
                                        />
                                        <FormControlLabel
                                            control={
                                                <Checkbox checked={itemSh} onChange={handleChangeOptionState} name="itemSh" />
                                            }
                                            label="Print on Guest Receipt                                            "
                                        />
                                    </FormGroup>

                                </FormControl>
                            </FormGroup>

                            {/* FORM GROUP 2 */}
                            <FormGroup sx={{ marginLeft: "30px" }}>
                                {/* <FormHelperText><strong>{"... "}</strong></FormHelperText> */}


                                <FormLabel component="legend">Print on KOT (List all the KOTs configured) applicable</FormLabel>
                                <FormControl sx={{ m: 1 }} component="fieldset" variant="standard">
                                    <FormGroup>
                                        <List
                                            sx={{
                                                width: '120%',
                                                maxWidth: 400,
                                                bgcolor: 'background.paper',
                                                position: 'relative',
                                                overflow: 'auto',
                                                maxHeight: 300,
                                                '& ul': { padding: 0 },
                                            }}
                                            subheader={<li />}
                                        >

                                            {
                                                [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((kot, index) => (
                                                    <ListItem key={index}>
                                                        <FormControlLabel
                                                            control={
                                                                <Checkbox checked={addGustCount} onChange={handleChangeOptionState} name="addGustCount" />
                                                            }
                                                            label={`KOT configured ${kot}`}
                                                        />
                                                    </ListItem>

                                                ))
                                            }
                                        </List>




                                    </FormGroup>

                                </FormControl>
                            </FormGroup>

                        </Box>

                    </TabPanel>

                    <TabPanel>
                        <Box sx={{ display: 'flex' }}>
                            {/* FORM GROUP 1 */}
                            <FormGroup sx={{ marginLeft: "30px" }}>
                                {/* <FormHelperText><strong>{"... "}</strong></FormHelperText> */}


                                <FormLabel component="legend">A list of all the Configured Sales Analyzers - Select all applicable </FormLabel>
                                <FormControl sx={{ m: 1 }} component="fieldset" variant="standard">
                                    <FormGroup>
                                        <List
                                            sx={{
                                                width: '110%',
                                                maxWidth: 400,
                                                bgcolor: 'background.paper',
                                                position: 'relative',
                                                overflow: 'auto',
                                                maxHeight: 300,
                                                '& ul': { padding: 0 },
                                            }}
                                            subheader={<li />}
                                        >

                                            {
                                                [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((kot, index) => (
                                                    <ListItem key={index}>
                                                        <FormControlLabel
                                                            control={
                                                                <Checkbox checked={addGustCount} onChange={handleChangeOptionState} name="addGustCount" />
                                                            }
                                                            label={`Configured Sales Analyzer ${kot}`}
                                                        />
                                                    </ListItem>

                                                ))
                                            }
                                        </List>
                                    </FormGroup>

                                </FormControl>
                            </FormGroup>

                        </Box>

                    </TabPanel>

                    <TabPanel>
                        <Box sx={{ display: 'flex' }}>
                            {/* FORM GROUP 1 */}
                            <FormGroup sx={{ marginLeft: "30px" }}>
                                {/* <FormHelperText><strong>{"... "}</strong></FormHelperText> */}
                                <FormLabel component="legend"> List of all the RVCs in this property</FormLabel>
                                <FormControl sx={{ m: 1 }} component="fieldset" variant="standard">
                                    <FormGroup>
                                        <List
                                            sx={{
                                                width: '120%',
                                                maxWidth: 700,
                                                bgcolor: 'background.paper',
                                                position: 'relative',
                                                overflow: 'auto',
                                                maxHeight: 300,
                                                '& ul': { padding: 0 },
                                            }}
                                            subheader={<li />}
                                        >

                                            {
                                                [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((kot, index) => (
                                                    <ListItem key={index}>
                                                        <FormControlLabel
                                                            key={index}
                                                            control={
                                                                <Checkbox checked={addGustCount} onChange={handleChangeOptionState} name="addGustCount" />
                                                            }
                                                            label={`Chicken Republic Revenue Center  ${kot}`}
                                                        />
                                                    </ListItem>

                                                ))
                                            }
                                        </List>



                                    </FormGroup>
                                </FormControl>
                            </FormGroup>
                        </Box>
                    </TabPanel>

                    <TabPanel>
                        <>
                            <Tooltip arrow placement="right" title="Click to select start and end dates">
                                <Button
                                    color="success"
                                    onClick={toggle}
                                    variant="contained">
                                    <DateRangeIcon sx={{ mr: "10px" }} />
                                    Select Dates
                                </Button>
                            </Tooltip>
                            {/* <button onClick={toggle}>X</button> */}
                            <DateRangePicker
                                open={open}
                                toggle={toggle}
                                onChange={(range) => setDateRange(range)}
                            />
                        </>
                    </TabPanel>

                    <TabPanel>
                        <Box sx={{ display: 'flex' }}>
                            {/* FORM GROUP 1 */}
                            <FormGroup sx={{ marginLeft: "30px" }}>
                                {/* <FormHelperText><strong>{"... "}</strong></FormHelperText> */}
                                <FormLabel component="legend"> Days of Occurrence </FormLabel>
                                <FormControl sx={{ m: 1 }} component="fieldset" variant="standard">
                                    <FormGroup>
                                        <List
                                            sx={{
                                                width: '120%',
                                                maxWidth: 700,
                                                bgcolor: 'background.paper',
                                                position: 'relative',
                                                overflow: 'auto',
                                                maxHeight: 300,
                                                '& ul': { padding: 0 },
                                            }}
                                            subheader={<li />}
                                        >
                                            <ListItem >
                                                <FormControlLabel
                                                    control={
                                                        <Checkbox checked={addGustCount} onChange={handleChangeOptionState} name="addGustCount" />
                                                    }
                                                    label={`Monday`}
                                                />
                                            </ListItem>

                                            <ListItem >
                                                <FormControlLabel
                                                    control={
                                                        <Checkbox checked={addGustCount} onChange={handleChangeOptionState} name="addGustCount" />
                                                    }
                                                    label={`Tuesday`}
                                                />
                                            </ListItem>
                                            <ListItem >
                                                <FormControlLabel
                                                    control={
                                                        <Checkbox checked={addGustCount} onChange={handleChangeOptionState} name="addGustCount" />
                                                    }
                                                    label={`Wednesday`}
                                                />
                                            </ListItem>
                                            <ListItem >
                                                <FormControlLabel
                                                    control={
                                                        <Checkbox checked={addGustCount} onChange={handleChangeOptionState} name="addGustCount" />
                                                    }
                                                    label={`Thursday`}
                                                />
                                            </ListItem>
                                            <ListItem >
                                                <FormControlLabel
                                                    control={
                                                        <Checkbox checked={addGustCount} onChange={handleChangeOptionState} name="addGustCount" />
                                                    }
                                                    label={`Friday`}
                                                />
                                            </ListItem>
                                            <ListItem >
                                                <FormControlLabel
                                                    control={
                                                        <Checkbox checked={addGustCount} onChange={handleChangeOptionState} name="addGustCount" />
                                                    }
                                                    label={`Saturday`}
                                                />
                                            </ListItem>
                                            <ListItem >
                                                <FormControlLabel
                                                    control={
                                                        <Checkbox checked={addGustCount} onChange={handleChangeOptionState} name="addGustCount" />
                                                    }
                                                    label={`Sunday`}
                                                />
                                            </ListItem>
                                        </List>

                                    </FormGroup>
                                </FormControl>
                            </FormGroup>
                        </Box>
                    </TabPanel>

                    <TabPanel>
                        <p>
                            Fixed Price Meals
                        </p>

                    </TabPanel>
                </Tabs>

            </Box>
        </div>
    )
}

//Example of creating a mui dialog modal for creating new rows
export const CreateNewAccountModal = ({ open, columns, onClose, onSubmit }) => {
    const [values, setValues] = useState(() =>
        columns.reduce((acc, column) => {
            acc[column.accessorKey ?? ''] = '';
            return acc;
        }, {}),
    );

    const handleSubmit = () => {
        //put your validation logic here
        onSubmit(values);
        onClose();
    };

    return (
        <Dialog open={open}>
            <DialogTitle textAlign="center">Create new Menu Items Prices</DialogTitle>
            <DialogContent>
                <form onSubmit={(e) => e.preventDefault()}>
                    <Stack
                        sx={{
                            width: '100%',
                            minWidth: { xs: '300px', sm: '360px', md: '400px' },
                            gap: '1.1rem',
                        }}
                    >
                        {columns.map((column) => (
                            <TextField
                                key={column.accessorKey}
                                label={column.header}
                                name={column.accessorKey}
                                onChange={(e) =>
                                    setValues({ ...values, [e.target.name]: e.target.value })
                                }
                            />
                        ))}
                    </Stack>
                </form>
            </DialogContent>
            <DialogActions sx={{ p: '1.25rem' }}>
                <Button onClick={onClose}>Cancel</Button>
                <Button color="secondary" onClick={handleSubmit} variant="contained">
                    Create
                </Button>
            </DialogActions>
        </Dialog>
    );
};

const validateRequired = (value) => !!value.length;
const validateEmail = (email) =>
    !!email.length &&
    email
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        );
const validateAge = (age) => age >= 18 && age <= 50;

export default EditDiscount


