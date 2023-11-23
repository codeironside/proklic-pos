import React, { useCallback, useMemo, useState, useEffect } from 'react';
import { MaterialReactTable } from 'material-react-table';
import { darken } from '@mui/material';
import {
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    IconButton,
    MenuItem,
    Stack,
    TextField,
    Tooltip,
} from '@mui/material';
import { Delete, Edit, GifBoxSharp } from '@mui/icons-material';
import { discount, states } from '../../../data/makeData';
import Header from '../../../components/Header';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Discount = () => {
    const [createModalOpen, setCreateModalOpen] = useState(false);
    const [tableData, setTableData] = useState(() => discount);
    const [validationErrors, setValidationErrors] = useState({});
    const [progress, setProgress] = useState(0);

    //simulate random progress for demo purposes
    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((oldProgress) => {
                const newProgress = Math.random() * 30;
                return Math.min(oldProgress + newProgress, 100);
            });
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const handleCreateNewRow = (values) => {
        tableData.push(values);
        setTableData([...tableData]);
    };

    const handleSaveRowEdits = async ({ exitEditingMode, row, values }) => {
        if (!Object.keys(validationErrors).length) {
            tableData[row.index] = values;
            //send/receive api updates here, then refetch or update local table data for re-render
            setTableData([...tableData]);
            exitEditingMode(); //required to exit editing mode and close modal
        }
    };

    const handleCancelRowEdits = () => {
        setValidationErrors({});
    };

    const handleDeleteRow = useCallback(
        (row) => {
            //send api delete request here, then refetch or update local table data for re-render
            tableData.splice(row.index, 1);
            setTableData([...tableData]);
            
        },
        [tableData],
    );


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
                header: 'S/N',
                enableColumnOrdering: false,
                enableEditing: false, //disable editing on this column
                enableSorting: false,
                size: 80,
            },
            {
                accessorKey: 'discountName',
                header: 'Discount Name',
                size: 80,
                emuiTableBodyCellEditTextFieldProps: ({ cell }) => ({
                    ...getCommonEditTextFieldProps(cell),
                }),
            },
            {
                accessorKey: 'type',
                header: 'Type',
                size: 80,
                muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
                    ...getCommonEditTextFieldProps(cell),
                }),
            },
            {
                accessorKey: 'maxAmt',
                header: 'Maximum Amount',
                muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
                    ...getCommonEditTextFieldProps(cell),
                    // type: 'email',
                }),
            },

            {
                accessorKey: 'taxSet',
                header: 'Tax Set',
                size: 80,
                muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
                    ...getCommonEditTextFieldProps(cell),
                }),
            },
            {
                accessorKey: 'conDiscount',
                header: 'Condiment Discount',
                size: 80,
                muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
                    ...getCommonEditTextFieldProps(cell),
                    type: 'number',
                }),
            },
            {
                accessorKey: 'reportGroup',
                header: 'Report Group',
                size: 80,
                muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
                    ...getCommonEditTextFieldProps(cell),
                }),
            },
            {
                accessorKey: 'privilGroup',
                header: 'Privilege Group',
                size: 80,
                muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
                    ...getCommonEditTextFieldProps(cell),
                }),
            },

        ],
        [getCommonEditTextFieldProps],
    );

    const navigate = useNavigate();
    function handleClick(idProps, origProps, myDataProps) {
        console.info(`here are the values`, idProps, origProps, myDataProps)
      navigate(`/dashboard/${myDataProps._id}/edit-discount/${idProps}`, { state: {
        key1: origProps,
        key2: myDataProps
      } });
    }

    const location = useLocation();
    const myData = location.state;
    console.log(myData);
    
    return (
        <>

            <Box m="20px">
                <Header title="Discount" subtitle="Create discount" />
                <MaterialReactTable
                    enableRowActions
                    renderRowActions={({
                        row
                    }) => <div style={{
                        display: 'flex',
                        flexWrap: 'nowrap',
                        gap: '0.5rem'
                    }}>
                            <Tooltip arrow placement="left" title="Edit">
                                <div 
                                // to={`/dashboard/${myData?._id}/edit-menuitem-sets/${row.id}`}
                                // state={{from: row.original, dataID:myData}}
                                // to={{
                                //     pathname: `/dashboard/edit-menuitem-sets/${row.id}`,
                                //     search: "?sort=edit",
                                //     state: `${row.original}`
                                //     }}
                                    >
                                <Button variant="contained" color="primary" onClick={() => handleClick(`${row.id}`, row.original, myData)}>
                                    EDIT
                                </Button>
                                {/* <Button variant="contained" color="primary" onClick={() => {
                                    console.info('View Profile', row.original);
                                }}>
                                    EDIT
                                </Button> */}
                                </div>
                            </Tooltip>

                            <Tooltip arrow placement="right" title="Delete">
                                <Button variant="contained" color="error" onClick={() => handleDeleteRow(row)}>
                                    Delete
                                </Button>
                            </Tooltip>
                        </div>}
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
                    editingMode="modal" //default
                    // enableColumnOrdering
                    enableEditing
                    onEditingRowSave={handleSaveRowEdits}
                    onEditingRowCancel={handleCancelRowEdits}
                    muiLinearProgressProps={({ isTopToolbar }) => ({
                        color: 'secondary',
                        variant: 'determinate', //if you want to show exact progress value
                        value: progress, //value between 0 and 100
                        sx: {
                            display: isTopToolbar ? 'block' : 'none', //hide bottom progress bar
                        },
                    })}
                    // renderRowActions={({ row, table }) => (
                    //     <Box sx={{ display: 'flex', gap: '1rem' }}>
                    //         <Tooltip arrow placement="left" title="Edit">
                    //             <IconButton onClick={() => table.setEditingRow(row)}>
                    //                 <Edit />
                    //             </IconButton>
                    //         </Tooltip>
                    // <Tooltip arrow placement="right" title="Delete">
                    //     <IconButton color="error" onClick={() => handleDeleteRow(row)}>
                    //         <Delete />
                    //     </IconButton>
                    // </Tooltip>
                    //     </Box>
                    // )}
                    renderTopToolbarCustomActions={() => (
                        <div style={{
                            display: 'flex',
                            gap: '0.5rem'
                        }}>
                            <Button
                                color="secondary"
                                onClick={() => setCreateModalOpen(true)}
                                variant="contained"
                            >
                                Create new Discount
                            </Button>

                            <Button
                                color="success"
                                onClick={() => setProgress(0)}
                                variant="contained">
                                Refresh Table
                            </Button>
                        </div>
                    )


                    }

                />
                <CreateNewAccountModal
                    columns={columns}
                    open={createModalOpen}
                    onClose={() => setCreateModalOpen(false)}
                    onSubmit={handleCreateNewRow}
                />
            </Box>
        </>
    );
};






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
            <DialogTitle textAlign="center">Create new Discount</DialogTitle>
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

export default Discount;
