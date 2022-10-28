import React, { useState } from "react";
import { AppBar, Box, Toolbar, IconButton, Typography, Menu, Container, Button, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";


export default function Navbar({ setLoggedIn }) {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [active, setActive] = useState("All")

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };


    const handleCloseNavMenu = (value) => {
        setAnchorElNav(null);
        if (value === 'Logout') {
            setLoggedIn(false)
            localStorage.removeItem("isLoggedIn")
        }
    };

    return (
        <>
            <AppBar position="static" style={{ backgroundColor: "#ffffff" }} elevation={0}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Typography variant="h6" noWrap component="a"
                            href="/"
                            sx={{ mr: 2, display: { xs: "none", md: "flex" }, flexGrow: 1, color: "#202920", textDecoration: "none", fontSie: "15px", fontWeight: "bold" }}>
                            Countries
                        </Typography>

                        <Typography variant="h5" noWrap component="a"
                            href=""
                            sx={{ mr: 2, display: { xs: "flex", md: "none" }, flexGrow: 1, color: "#202920", textDecoration: "none", fontSie: "15px", fontWeight: "bold" }} >
                            Countries
                        </Typography>

                        <Box sx={{ display: { xs: "none", md: "flex" } }}>

                            <div onClick={() => setActive("All")}>

                                {active === "All" ? (
                                    <Button onClick={handleCloseNavMenu} sx={{ my: 2, color: '#202920', display: 'block' }} style={{ borderBottom: "2px solid #202920" }}>
                                        All
                                    </Button>
                                ) : (<Button onClick={handleCloseNavMenu} sx={{ my: 2, color: '#202920', display: 'block' }} >
                                    All
                                </Button>)}
                            </div>

                            <div onClick={() => setActive("Asia")}>

                                {active === "Asia" ? (
                                    <Button onClick={handleCloseNavMenu} sx={{ my: 2, color: '#202920', display: 'block' }} style={{ borderBottom: "2px solid #202920" }}>
                                        Asia
                                    </Button>
                                ) : (<Button onClick={handleCloseNavMenu} sx={{ my: 2, color: '#202920', display: 'block' }} >
                                    Asia
                                </Button>)}
                            </div>


                            <div onClick={() => setActive("Europe")}>

                                {active === "Europe" ? (
                                    <Button onClick={handleCloseNavMenu} sx={{ my: 2, color: '#202920', display: 'block' }} style={{ borderBottom: "2px solid #202920" }}>
                                        Europe
                                    </Button>
                                ) : (<Button onClick={handleCloseNavMenu} sx={{ my: 2, color: '#202920', display: 'block' }} >
                                    Europe
                                </Button>)}
                            </div>

                        </Box>



                        <Box sx={{ flexGrow: 0, display: { xs: "flex", md: "none" } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                style={{ color: "#202920" }}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: "bottom",
                                    horizontal: "left"
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: "top",
                                    horizontal: "left"
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{ display: { xs: "block", md: "none" } }} >

                                <MenuItem onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center"> All </Typography>
                                </MenuItem>
                                <MenuItem onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center"> Asia </Typography>
                                </MenuItem>
                                <MenuItem onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center"> Europe </Typography>
                                </MenuItem>
                                <MenuItem onClick={() => handleCloseNavMenu('Logout')} >
                                    <Typography textAlign="center"> Logout </Typography>
                                </MenuItem>

                            </Menu>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>


        </>
    );
}
