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
import { data, states } from '../../../data/makeData';

import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css'; 
import toast, { Toaster } from 'react-hot-toast';

const MenuItemMasterTest = () => {
    const [createModalOpen, setCreateModalOpen] = useState(false);
    const [tableData, setTableData] = useState(() => data);
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

    const cancelChange = () => toast('Cancelled')
    const acceptChange = () => toast.success('Deleted Successfully!')

    const handleDeleteRow = useCallback(
        (row) => {
            //send api delete request here, then refetch or update local table data for re-render
            tableData.splice(row.index, 1);
            setTableData([...tableData]);
            acceptChange();
            
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
                header: 'ID',
                enableColumnOrdering: false,
                enableEditing: false, //disable editing on this column
                enableSorting: false,
                size: 80,
            },
            {
                accessorKey: 'firstName',
                header: 'Name',
                size: 80,
                muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
                    ...getCommonEditTextFieldProps(cell),
                }),
            },
            {
                accessorKey: 'lastName',
                header: 'Menu ID',
                size: 80,
                muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
                    ...getCommonEditTextFieldProps(cell),
                }),
            },
            {
                accessorKey: 'email',
                header: 'Menu Item Category',
                muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
                    ...getCommonEditTextFieldProps(cell),
                    type: 'email',
                }),
            },

            // {
            //     accessorKey: 'age',
            //     header: 'Menu Item Group',
            //     size: 80,
            //     muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
            //         ...getCommonEditTextFieldProps(cell),
            //     }),
            // },
            // {
            //     accessorKey: 'age',
            //     header: 'Group Report',
            //     size: 80,
            //     muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
            //         ...getCommonEditTextFieldProps(cell),
            //         type: 'number',
            //     }),
            // },
              {
                accessorKey: 'state',
                header: 'Menu Item Group',
                size: 50,
                muiTableBodyCellEditTextFieldProps: {
                  select: true, //change to select for a dropdown
                  children: states.map((state) => (
                    <MenuItem key={state} value={state}>
                      {state}
                    </MenuItem>
                  )),
                },
              },
              {
                accessorKey: 'state',
                header: 'Group Report',
                size: 50,
                muiTableBodyCellEditTextFieldProps: {
                  select: true, //change to select for a dropdown
                  children: states.map((state) => (
                    <MenuItem key={state} value={state}>
                      {state}
                    </MenuItem>
                  )),
                },
              },
              {
                accessorKey: 'state',
                header: 'Setup Location',
                size: 50,
                muiTableBodyCellEditTextFieldProps: {
                  select: true, //change to select for a dropdown
                  children: states.map((state) => (
                    <MenuItem key={state} value={state}>
                      {state}
                    </MenuItem>
                  )),
                },
              },
              {
                accessorKey: 'state',
                header: 'Data Type',
                size: 50,
                muiTableBodyCellEditTextFieldProps: {
                  select: true, //change to select for a dropdown
                  children: states.map((state) => (
                    <MenuItem key={state} value={state}>
                      {state}
                    </MenuItem>
                  )),
                },
              },
        ],
        [getCommonEditTextFieldProps],
    );

    return (
        <>
       
            <MaterialReactTable
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
                renderRowActions={({ row, table }) => (
                    <Box sx={{ display: 'flex', gap: '1rem' }}>
                        <Tooltip arrow placement="left" title="Edit">
                            <IconButton onClick={() => table.setEditingRow(row)}>
                                <Edit />
                            </IconButton>
                        </Tooltip>
                        <Tooltip arrow placement="right" title="Delete">
                            <IconButton color="error" onClick={() => {
                                confirmAlert({
                                    title: 'Confirm to submit',
                                    message: 'Are you sure to do this.',
                                    buttons: [
                                      {
                                        label: 'Yes',
                                        onClick: () => handleDeleteRow(row)
                                      },
                                      {
                                        label: 'No',
                                        onClick: () => cancelChange()
                                      }
                                    ],
                                    closeOnEscape: false,
                                    closeOnClickOutside: false,
                                  });
                            }}>
                                <Delete />
                            </IconButton>
                        </Tooltip>
                    </Box>
                )}
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
                              Create new menu item Master
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
        </>
    );
};






//Example of creating a mui dialog modal for creating new rows
export const CreateNewAccountModal = ({ open, columns, onClose, onSubmit }) => {
    const cancelChange = () => toast('Cancelled')

    const [values, setValues] = useState(() =>
        columns.reduce((acc, column) => {
            acc[column.accessorKey ?? ''] = '';
            return acc;
        }, {}),
    );

    const handleSubmit = () => {
        const acceptChange = () => toast.success('Successful!')
        //put your validation logic here
        onSubmit(values);
        onClose();
        acceptChange();
    };

    return (
        <Dialog open={open}>
            <DialogTitle textAlign="center">Create new menu item Master</DialogTitle>
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
                <Button onClick={event => {cancelChange(); onClose()}}>Cancel
                </Button>
                <Button color="secondary" onClick={handleSubmit} variant="contained">
                    Create 
                    <Toaster />
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

export default MenuItemMasterTest;
