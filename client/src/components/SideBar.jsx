import React, { useState, useContext } from 'react';
import {
    Button,
    TextField,
    Grid,
    Typography,
    Container,
    Paper,
    Box,
} from '@mui/material';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Assignment, Phone, PhoneDisabled } from '@mui/icons-material';

import { SocketContext } from '../SocketContext';

const Sidebar = ({ children }) => {
    const { me, callAccepted, name, setName, callEnded, leaveCall, callUser } = useContext(SocketContext);
    const [idToCall, setIdToCall] = useState('');

    return (
        <Container
            sx={{
                width: '600px',
                margin: '35px auto',
                padding: 0,
                '@media (max-width:600px)': {
                    width: '80%',
                },
            }}
        >
            <Paper
                elevation={10}
                sx={{
                    padding: '10px 20px',
                    border: '2px solid black',
                }}
            >
                <Box
                    component="form"
                    noValidate
                    autoComplete="off"
                    sx={{ display: 'flex', flexDirection: 'column' }}
                >
                    <Grid
                        container
                        sx={{
                            width: '100%',
                            '@media (max-width:600px)': {
                                flexDirection: 'column',
                            },
                        }}
                    >
                        <Grid size={{ xs: '12', md: '6' }} sx={{ padding: 2 }}>
                            <Typography gutterBottom variant="h6">
                                Account Info
                            </Typography>
                            <TextField
                                label="Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                fullWidth
                            />
                            <CopyToClipboard text={me}>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    fullWidth
                                    startIcon={<Assignment fontSize="large" />}
                                    sx={{ marginTop: 2 }}
                                >
                                    Copy Your ID
                                </Button>
                            </CopyToClipboard>
                        </Grid>

                        <Grid size={{ xs: '12', md: '6' }} sx={{ padding: 2 }}>
                            <Typography gutterBottom variant="h6">
                                Make a call
                            </Typography>
                            <TextField
                                label="ID to call"
                                value={idToCall}
                                onChange={(e) => setIdToCall(e.target.value)}
                                fullWidth
                            />
                            {callAccepted && !callEnded ? (
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    fullWidth
                                    startIcon={<PhoneDisabled fontSize="large" />}
                                    onClick={leaveCall}
                                    sx={{ marginTop: 2 }}
                                >
                                    Hang Up
                                </Button>
                            ) : (
                                <Button
                                    variant="contained"
                                    color="primary"
                                    fullWidth
                                    startIcon={<Phone fontSize="large" />}
                                    onClick={() => callUser(idToCall)}
                                    sx={{ marginTop: 2 }}
                                >
                                    Call
                                </Button>
                            )}
                        </Grid>
                    </Grid>
                </Box>
                {children}
            </Paper>
        </Container>
    );
};

export default Sidebar;
