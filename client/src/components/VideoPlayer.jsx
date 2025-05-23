import React, { useContext } from 'react';
import { Grid, Typography, Paper, Box } from '@mui/material';

import { SocketContext } from '../SocketContext';

const VideoPlayer = () => {
    const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext);

    return (
        <Grid
            container
            justifyContent="center"
            sx={{
                '@media (max-width:600px)': {
                    flexDirection: 'column',
                },
            }}
        >
            {stream && (
                <Paper
                    elevation={3}
                    sx={{
                        padding: '10px',
                        border: '2px solid black',
                        margin: '10px',
                    }}
                >
                    <Grid size={{ xs: '12', md: '6' }}>
                        <Typography variant="h5" gutterBottom>
                            {name || 'Name'}
                        </Typography>
                        <Box
                            component="video"
                            playsInline
                            ref={myVideo}
                            autoPlay
                            sx={{
                                width: '550px',
                                '@media (max-width:600px)': {
                                    width: '300px',
                                },
                            }}
                        />
                    </Grid>
                </Paper>
            )}
            {callAccepted && !callEnded && (
                <Paper
                    elevation={3}
                    sx={{
                        padding: '10px',
                        border: '2px solid black',
                        margin: '10px',
                    }}
                >
                    <Grid size={{ xs: '12', md: '6' }}>
                        <Typography variant="h5" gutterBottom>
                            {call.name || 'Name'}
                        </Typography>
                        <Box
                            component="video"
                            playsInline
                            ref={userVideo}
                            autoPlay
                            sx={{
                                width: '550px',
                                '@media (max-width:600px)': {
                                    width: '300px',
                                },
                            }}
                        />
                    </Grid>
                </Paper>
            )}
        </Grid>
    );
};

export default VideoPlayer;
