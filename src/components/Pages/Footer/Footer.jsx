import * as React from 'react';
import { Box, Grid, Avatar, Typography, Container, Stack, CssBaseline } from '@mui/material';
import Link from '@mui/material/Link';
import { SlSocialGoogle, SlSocialFacebook, SlSocialLinkedin, SlSocialTwitter } from 'react-icons/sl';

function Copyright() {
    return (

        <Typography variant="body2" style={{ fontSize: "15px", fontWeight: "bold", color:"#202920" }}>
            {'Copyright © '}
            <Link to="/" style={{color:"#202920", textDecoration:"none"}}>
                2020 Name. All rights reserved.
            </Link>{' '}
        </Typography>
    );
}

export default function StickyFooter() {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column',
        //  bottom: 0, left: 0, right: 0, position: "fixed" 
         }}>
            <CssBaseline />
            <Box component="footer" sx={{ py: 3, px: 2, mt: 'auto', }}>
                <Container maxWidth="sm">

                    <Grid container>
                        <Grid item xs={12} md={12} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <Stack direction="row" spacing={2}>
                                <Avatar alt="Google Logo" style={{ backgroundColor: "#ffffff", border: "1px solid #202920" }} >
                                    <SlSocialGoogle style={{ color: "#202920" }} />
                                </Avatar>

                                <Avatar alt="FaceBook Logo" style={{ backgroundColor: "#ffffff", border: "1px solid #202920" }} >
                                    <SlSocialFacebook style={{ color: "#202920" }} />
                                </Avatar>

                                <Avatar alt="LinkedIn Logo" style={{ backgroundColor: "#ffffff", border: "1px solid #202920" }} >
                                    <SlSocialLinkedin style={{ color: "#202920" }} />
                                </Avatar>

                                <Avatar alt="Twitter Logo" style={{ backgroundColor: "#ffffff", border: "1px solid #202920" }} >
                                    <SlSocialTwitter style={{ color: "#202920" }} />
                                </Avatar>
                            </Stack>
                        </Grid>

                        <Grid item xs={12} md={12} style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: 10 }}>
                            <Typography gutterBottom style={{ fontSize: "18px", fontWeight: "bold" }} >
                                Example@email.com
                            </Typography>
                        </Grid>

                        <Grid item xs={12} md={12} style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: 10 }}>
                            <Copyright />
                        </Grid>

                    </Grid>
                </Container>
            </Box>
        </Box>
    );
}