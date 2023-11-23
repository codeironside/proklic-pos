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

import { data, states } from '../../../data/makeData';
import { MaterialReactTable } from 'material-react-table';
import { darken } from '@mui/material';
import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Stack,
} from '@mui/material';

const EditMenuItemSets = (props) => {

    const navigate = useNavigate();
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    // Access the properties of myObject
    const location = useLocation();
    const myData = location.state.key1;
    const idData = location.state.key2;
    console.log(myData);
    console.log(idData);


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
    const [tableData, setTableData] = useState(data);

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


    // SAVE ALL CHANGES
    const saveMenuItemSetEdit = () => {
        // Connect to API from here
        // const combinedObject = { ...optionState, ...state, ...from, ...generalState }
        // console.log(combinedObject);
        // navigate("/dashboard/menu_items_sets")
    };

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
                    <Header title="Edit Menu Items Sets" subtitle="General Record" />



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
                            <FormLabel component="legend"><strong>MenuItem Set Name:</strong> {myData?.lastName}</FormLabel>
                            <FormHelperText><strong>ID Number:</strong> #{myData?.id}</FormHelperText>

                            <FormControl fullWidth sx={{ mt:1}}>
                                    {/* <InputLabel id="demo-simple-select-helper-label12">
                                        Select Menuitem Set
                                    </InputLabel> */}
                                    <Select
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
                                    </Select>
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
                        <Tab>General</Tab>
                        <Tab >Options</Tab>
                        <Tab>Condiments Group</Tab>
                        <Tab>Forced Condiments</Tab>
                        <Tab>Fixed Price Meals</Tab>
                        <Tab>References</Tab>
                    </TabList>

                    <TabPanel>
                        <Box sx={{ display: 'flex' }}>
                            <FormGroup>


                                <FormControl sx={{ m: 1, minWidth: 200 }} size="small">
                                    <InputLabel id="taxClass-label">Tax Class</InputLabel>
                                    <Select
                                        labelId="taxClass-label"
                                        name="taxClass"
                                        value={taxClass}
                                        label="Tax Class"
                                        onChange={handleChangeGeneralState}
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </FormControl>


                                <FormControl sx={{ m: 1, minWidth: 200 }} size="small">
                                    <InputLabel id="sales-label">Sales Analyzer </InputLabel>
                                    <Select
                                        labelId="sales-label"
                                        name="sales"
                                        value={sales}
                                        label="Sales Analyzer"
                                        onChange={handleChangeGeneralState}
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </FormControl>


                                <FormControl sx={{ m: 1, minnameth: 200 }} size="small">
                                    <InputLabel id="discount-label">Discount Analyzer </InputLabel>
                                    <Select
                                        labelId="discount-label"
                                        name="discount"
                                        value={discount}
                                        label="Discount Analyzer"
                                        onChange={handleChangeGeneralState}
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </FormControl>


                                <FormControl sx={{ m: 1, minWidth: 200 }} size="small">
                                    <InputLabel id="discountChg-label">Service charge Analyzer </InputLabel>
                                    <Select
                                        labelId="discountChg-label"
                                        name="discountChg"
                                        value={discountChg}
                                        label="Service charge Analyzer"
                                        onChange={handleChangeGeneralState}
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </FormControl>

                                <FormControl sx={{ m: 1, minWidth: 200 }} size="small">
                                    <InputLabel id="condimentPop-label">Condiment Popup </InputLabel>
                                    <Select
                                        labelId="condimentPop-label"
                                        name="condimentPop"
                                        value={condimentPop}
                                        label="Condiment Popup"
                                        onChange={handleChangeGeneralState}
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </FormControl>

                                <FormControl sx={{ m: 1, minWidth: 200 }} size="small">
                                    <InputLabel id="priceCal-label">Price Calculation </InputLabel>
                                    <Select
                                        labelId="priceCal-label"
                                        name="priceCal"
                                        value={priceCal}
                                        label="Price Calculation"
                                        onChange={handleChangeGeneralState}
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </FormControl>

                                <FormControl sx={{ m: 1, minWidth: 200 }} size="small">
                                    <InputLabel id="countView-label">Count View</InputLabel>
                                    <Select
                                        labelId="countView-label"
                                        name="countView"
                                        value={countView}
                                        label="Count View"
                                        onChange={handleChangeGeneralState}
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </FormControl>
                            </FormGroup>

                            {/* FORM GROUP 2 */}
                            <FormGroup>


                                <FormControl sx={{ m: 1, minWidth: 200 }} size="small">
                                    <InputLabel id="countInput-label">Count Input </InputLabel>
                                    <Select
                                        labelId="countInput-label"
                                        name="countInput"
                                        value={countInput}
                                        label="Count Input"
                                        onChange={handleChangeGeneralState}
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </FormControl>


                                <FormControl sx={{ m: 1, minWidth: 200 }} size="small">
                                    <InputLabel id="printSet-label">Print Set </InputLabel>
                                    <Select
                                        labelId="printSet-label"
                                        name="printSet"
                                        value={printSet}
                                        label="Print Set"
                                        onChange={handleChangeGeneralState}
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </FormControl>


                                <FormControl sx={{ m: 1, minWidth: 200 }} size="small">
                                    <InputLabel id="printGroup-label">Print Group </InputLabel>
                                    <Select
                                        labelId="printGroup-label"
                                        name="printGroup"
                                        value={printGroup}
                                        label="Print Group"
                                        onChange={handleChangeGeneralState}
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </FormControl>


                                <FormControl sx={{ m: 1, minWidth: 200 }} size="small">
                                    <InputLabel id="serviceCgh-label">Service Charge Group </InputLabel>
                                    <Select
                                        labelId="serviceCgh-label"
                                        name="serviceCgh"
                                        value={serviceCgh}
                                        label="Service Charge Group"
                                        onChange={handleChangeGeneralState}
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </FormControl>

                                <FormControl sx={{ m: 1, minWidth: 200 }} size="small">
                                    <InputLabel id="priviledgeGroup-label">Privilege Group</InputLabel>
                                    <Select
                                        labelId="priviledgeGroup-label"
                                        name="priviledgeGroup"
                                        value={priviledgeGroup}
                                        label="Privilege Group"
                                        onChange={handleChangeGeneralState}
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </FormControl>

                                <FormControl sx={{ m: 1, minWidth: 200 }} size="small">
                                    <InputLabel id="mainLevel-label">Main Level Popup </InputLabel>
                                    <Select
                                        labelId="mainLevel-label"
                                        name="mainLevel"
                                        value={mainLevel}
                                        label="Main Level Popup"
                                        onChange={handleChangeGeneralState}
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </FormControl>

                                <FormControl sx={{ m: 1, minWidth: 200 }} size="small">
                                    <InputLabel id="subLevelChg-label">Sub level Popup </InputLabel>
                                    <Select
                                        labelId="subLevelChg-label"
                                        name="subLevelChg"
                                        value={subLevelChg}
                                        label="Sub level Popup"
                                        onChange={handleChangeGeneralState}
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
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
                                                <Checkbox checked={tick4Con} onChange={handleChangeOptionState} name="tick4Con" />
                                            }
                                            label="Tick for Condiment Menu Item/Untick for Regular Menu Item
                                                "
                                        />
                                        <FormControlLabel
                                            control={
                                                <Checkbox checked={tick4Open} onChange={handleChangeOptionState} name="tick4Open" />
                                            }
                                            label="Tick for Open Priced Menu Item/ Unctick for Preset Menu Item
                                                "
                                        />
                                        <FormControlLabel
                                            control={
                                                <Checkbox checked={refRq} onChange={handleChangeOptionState} name="refRq" />
                                            }
                                            label="Reference Required
                                                "
                                        />
                                        <FormControlLabel
                                            control={
                                                <Checkbox checked={applyItem} onChange={handleChangeOptionState} name="applyItem" />
                                            }
                                            label="Apply Item discount to this Menu Item
                                                "
                                        />
                                        <FormControlLabel
                                            control={
                                                <Checkbox checked={allowMenu} onChange={handleChangeOptionState} name="allowMenu" />
                                            }
                                            label="Allow Menu Item to be none priced
                                                "
                                        />
                                        <FormControlLabel
                                            control={
                                                <Checkbox checked={tickSub} onChange={handleChangeOptionState} name="tickSub" />
                                            }
                                            label="Tick to use Sub level pricing/ Untick to use Main Level pricing
                                                "
                                        />
                                        <FormControlLabel
                                            control={
                                                <Checkbox checked={conMenu} onChange={handleChangeOptionState} name="conMenu" />
                                            }
                                            label="Consolidate Menu Item with condiment on KOT

                                                "
                                        />
                                        <FormControlLabel
                                            control={
                                                <Checkbox checked={retItem} onChange={handleChangeOptionState} name="retItem" />
                                            }
                                            label="Retail Item 
                                                "
                                        />
                                        <FormControlLabel
                                            control={
                                                <Checkbox checked={itemSh} onChange={handleChangeOptionState} name="itemSh" />
                                            }
                                            label="Item is sharable "
                                        />
                                    </FormGroup>

                                </FormControl>
                            </FormGroup>

                            {/* FORM GROUP 2 */}
                            <FormGroup>
                                <FormHelperText><strong>{"... "}</strong></FormHelperText>


                                <FormControl sx={{ m: 1 }} component="fieldset" variant="standard">
                                    {/* <FormLabel component="legend">Assign responsibility</FormLabel> */}
                                    <FormGroup>
                                        <FormControlLabel
                                            control={
                                                <Checkbox checked={addGustCount} onChange={handleChangeOptionState} name="addGustCount" />
                                            }
                                            label="Add to Guest count.
                                                "
                                        />
                                        <FormControlLabel
                                            control={
                                                <Checkbox checked={printPrice} onChange={handleChangeOptionState} name="printPrice" />
                                            }
                                            label="Print price on order chit
                                                "
                                        />
                                        <FormControlLabel
                                            control={
                                                <Checkbox checked={printName1} onChange={handleChangeOptionState} name="printName1" />
                                            }
                                            label="Print Name 1 and name 2 on Checks
                                                "
                                        />
                                        <FormControlLabel
                                            control={
                                                <Checkbox checked={printName2} onChange={handleChangeOptionState} name="printName2" />
                                            }
                                            label="Print Name 2 on KOT
                                                "
                                        />
                                        <FormControlLabel
                                            control={
                                                <Checkbox checked={displayName2} onChange={handleChangeOptionState} name="displayName2" />
                                            }
                                            label="Display Name 2 on POS instead of Name 1.
                                                "
                                        />
                                        <FormControlLabel
                                            control={
                                                <Checkbox checked={itemBev} onChange={handleChangeOptionState} name="itemBev" />
                                            }
                                            label="Item is beverage "
                                        />
                                        <FormControlLabel
                                            control={
                                                <Checkbox checked={addConPrice} onChange={handleChangeOptionState} name="addConPrice" />
                                            }
                                            label="Add condiment price to the parent Menu Item price on check."
                                        />
                                        <FormControlLabel
                                            control={
                                                <Checkbox checked={forceNum} onChange={handleChangeOptionState} name="forceNum" />
                                            }
                                            label="Force number of condiment to match number of parent items
                                                "
                                        />
                                        <FormControlLabel
                                            control={
                                                <Checkbox checked={validationReq} onChange={handleChangeOptionState} name="validationReq" />
                                            }
                                            label="Validation Required"
                                        />
                                    </FormGroup>

                                </FormControl>
                            </FormGroup>

                        </Box>

                    </TabPanel>

                    <TabPanel>
                        <Tabs forceRenderTabPanel>
                            <TabList>
                                <Tab>Required Condiments Group</Tab>
                                <Tab>Allowed Condiments Group</Tab>
                                <Tab>Member Condiment Group</Tab>

                            </TabList>
                            <TabPanel>
                                <Box sx={{ display: 'flex' }}>
                                    <FormControl sx={{ m: 1 }} component="fieldset" variant="standard">
                                        {/* <FormLabel component="legend">Assign responsibility</FormLabel> */}
                                        <FormGroup>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox checked={gilad} onChange={handleChange} name="gilad" />
                                                }
                                                label="Meat Temp"
                                            />
                                            <FormControlLabel
                                                control={
                                                    <Checkbox checked={jason} onChange={handleChange} name="jason" />
                                                }
                                                label="Omelet Toppings"
                                            />
                                            <FormControlLabel
                                                control={
                                                    <Checkbox checked={antoine} onChange={handleChange} name="antoine" />
                                                }
                                                label="Egg Cooking Style"
                                            />
                                            <FormControlLabel
                                                control={
                                                    <Checkbox checked={antoine} onChange={handleChange} name="antoine" />
                                                }
                                                label="Bread Choice"
                                            />
                                            <FormControlLabel
                                                control={
                                                    <Checkbox checked={antoine} onChange={handleChange} name="antoine" />
                                                }
                                                label="Wing Sauce"
                                            />
                                        </FormGroup>

                                    </FormControl>

                                </Box>
                            </TabPanel>
                            <TabPanel>
                                <Box sx={{ display: 'flex' }}>
                                    <FormControl sx={{ m: 1 }} component="fieldset" variant="standard">
                                        {/* <FormLabel component="legend">Assign responsibility</FormLabel> */}
                                        <FormGroup>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox checked={gilad} onChange={handleChange} name="gilad" />
                                                }
                                                label="Salad Protein"
                                            />
                                            <FormControlLabel
                                                control={
                                                    <Checkbox checked={jason} onChange={handleChange} name="jason" />
                                                }
                                                label="Pasta"
                                            />
                                            <FormControlLabel
                                                control={
                                                    <Checkbox checked={antoine} onChange={handleChange} name="antoine" />
                                                }
                                                label="Eggs"
                                            />
                                            <FormControlLabel
                                                control={
                                                    <Checkbox checked={antoine} onChange={handleChange} name="antoine" />
                                                }
                                                label="Swallow"
                                            />
                                            <FormControlLabel
                                                control={
                                                    <Checkbox checked={antoine} onChange={handleChange} name="antoine" />
                                                }
                                                label="Chicken Wing Sauce"
                                            />
                                        </FormGroup>

                                    </FormControl>

                                </Box>
                            </TabPanel>
                            <TabPanel>
                                <Box sx={{ display: 'flex' }}>
                                    <FormControl sx={{ m: 1 }} component="fieldset" variant="standard">
                                        {/* <FormLabel component="legend">Assign responsibility</FormLabel> */}
                                        <FormGroup>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox checked={gilad} onChange={handleChange} name="gilad" />
                                                }
                                                label="Corn Beef"
                                            />
                                            <FormControlLabel
                                                control={
                                                    <Checkbox checked={jason} onChange={handleChange} name="jason" />
                                                }
                                                label="Hot tea"
                                            />
                                            <FormControlLabel
                                                control={
                                                    <Checkbox checked={antoine} onChange={handleChange} name="antoine" />
                                                }
                                                label="Coffee"
                                            />
                                            <FormControlLabel
                                                control={
                                                    <Checkbox checked={antoine} onChange={handleChange} name="antoine" />
                                                }
                                                label="Bread Choice"
                                            />
                                            <FormControlLabel
                                                control={
                                                    <Checkbox checked={antoine} onChange={handleChange} name="antoine" />
                                                }
                                                label="Egg Sauce"
                                            />
                                        </FormGroup>

                                    </FormControl>

                                </Box>
                            </TabPanel>

                        </Tabs>
                    </TabPanel>

                    <TabPanel>
                        <Box m="5px">
                            <MaterialReactTable
                                // enableRowActions
                                displayColumnDefOptions={{
                                    'mrt-row-actions': {
                                        muiTableHeadCellProps: {
                                            align: 'center',
                                        },
                                        size: 60,
                                    },
                                }}
                                muiTablePaperProps={{
                                    elevation: 0,
                                    sx: {
                                        borderRadius: '0',
                                        border: '1px dashed #FCFCFC',
                                    },
                                }}
                                muiTableBodyProps={{
                                    sx: (theme) => ({
                                        '& tr:nth-of-type(odd)': {
                                            backgroundColor: darken(theme.palette.background.default, 0.1),
                                        },
                                    }),
                                }}

                                data={tableData ?? []}
                                state={{ isLoading: true, showSkeletons: true, showProgressBars: true }}
                                enableDensityToggle={false}
                                initialState={{ density: 'compact' }}
                                columns={columns}
                                editingMode="cell" //default
                                enableEditing
                                muiLinearProgressProps={({ isTopToolbar }) => ({
                                    color: 'secondary',
                                    variant: 'determinate', //if you want to show exact progress value
                                    value: progress, //value between 0 and 100
                                    sx: {
                                        display: isTopToolbar ? 'block' : 'none', //hide bottom progress bar
                                    },
                                })}

                                muiTableBodyCellEditTextFieldProps={({ cell }) => ({
                                    //onBlur is more efficient, but could use onChange instead
                                    onBlur: (event) => {
                                        handleSaveCell(cell, event.target.value);
                                    },
                                })}
                                renderBottomToolbarCustomActions={() => (
                                    <Typography sx={{ fontStyle: 'italic', p: '0 1rem' }} variant="body2">
                                        Double-Click a Cell to Edit
                                    </Typography>
                                )}

                            />
                        </Box>

                    </TabPanel>
                    <TabPanel>
                        <p>
                            Fixed Price Meals
                        </p>

                    </TabPanel>
                    <TabPanel>
                        <p>
                            References
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

export default EditMenuItemSets


