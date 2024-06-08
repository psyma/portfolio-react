import React, { Component } from "react";
import {
    AppBar, Box, Button, Toolbar, IconButton, Typography, Tooltip, Menu, MenuItem
} from '@mui/material';

import { Link } from "react-router-dom";
import MoreIcon from '@mui/icons-material/MoreVert';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

import { Utils } from "../../utils";

export default class Header extends Component {
    constructor(props) {
        super(props)

        this.state = {
            anchorEl: null,
            isDark: false,
            themeMode: Utils.themeMode,
            mobileMoreAnchorEl: null,
            isMenuOpen: false,
            isMobileMenuOpen: false
        }

        this.menuId = 'primary-search-account-menu';
        this.mobileMenuId = 'primary-search-account-menu-mobile';
    }

    componentDidMount() { }


    renderMenu = () => {
        return <Menu
            anchorEl={this.state.anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right', }}
            id={this.menuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right', }}
            open={this.state.isMenuOpen}
            onClose={this.handleMenuClose}>
            <MenuItem onClick={this.handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={this.handleMenuClose}>My account</MenuItem>
        </Menu>
    }

    renderMobileMenu = () => {
        return <Menu
            anchorEl={this.state.mobileMoreAnchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right', }}
            id={this.mobileMenuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right', }}
            open={this.state.isMobileMenuOpen}
            onClose={this.handleMobileMenuClose}>
            <MenuItem>
                <Button component={Link} to={'/resume'} variant="contained" color="primary">
                    RESUME
                </Button>
            </MenuItem>
            <MenuItem>
                <Button component={Link} to={'/portfolio'} variant="contained" color="primary" >
                    PORTFOLIO
                </Button>
            </MenuItem>
        </Menu>
    }

    handleProfileMenuOpen = async (event) => {
        await this.setState({
            anchorEl: event.currentTarget
        })
    };

    handleMobileMenuClose = async () => {
        await this.setState({
            mobileMoreAnchorEl: null,
            isMobileMenuOpen: false
        })
    };

    handleMenuClose = async () => {
        await this.setState({
            anchorEl: null
        })
        await this.handleMobileMenuClose();
    };

    handleMobileMenuOpen = async (event) => {
        await this.setState({
            mobileMoreAnchorEl: event.currentTarget,
            isMobileMenuOpen: true
        })
    };

    handleThemeMode = async (event) => {
        if (this.state.themeMode == "light") {
            await this.setState({
                isDark: true,
                themeMode: "dark"
            })
            localStorage.theme = "dark"
        }
        else {
            await this.setState({
                isDark: false,
                themeMode: "light"
            })
            localStorage.theme = "light"
        }
        this.props.setThemeMode(this.state.themeMode)
        Utils.themeMode = this.state.themeMode
    }

    render() {
        return <>
            <AppBar position="relative" id="header">
                <Toolbar>
                    <Typography variant="h5" noWrap component="div" sx={{}}>
                        {this.props.title}
                    </Typography>
                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: { xs: 'none', md: 'flex' }, "& > *:not(:last-child)": { marginRight: '1rem' } }}>
                        <Button component={Link} to={'/resume'} variant="contained">
                            RESUME
                        </Button>
                        <Button component={Link} to={'/portfolio'} variant="contained">
                            PORTFOLIO
                        </Button>
                        <Tooltip title={this.state.isDark ? "Light mode" : "Dark mode"}>
                            <IconButton color="inherit" onClick={this.handleThemeMode}>
                                {this.state.themeMode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
                            </IconButton>
                        </Tooltip>
                    </Box>
                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <IconButton size="large" aria-label="show more" aria-controls={this.mobileMenuId} aria-haspopup="true" onClick={this.handleMobileMenuOpen}>
                            <MoreIcon />
                        </IconButton>
                        <Tooltip title={this.state.isDark ? "Light mode" : "Dark mode"}>
                            <IconButton color="inherit" onClick={this.handleThemeMode}>
                                {this.state.themeMode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
                            </IconButton>
                        </Tooltip>
                    </Box>
                </Toolbar>
            </AppBar>
            <this.renderMobileMenu />
            <this.renderMenu />
        </>
    }
}