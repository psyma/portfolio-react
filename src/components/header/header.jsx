import "./header.css"

import React, { Component } from "react";
import {
    AppBar, Box, Button, Toolbar, IconButton, Typography, Menu, MenuItem
} from '@mui/material';

import { Link } from "react-router-dom";

export default class Header extends Component {
    constructor(props) {
        super(props)

        this.state = {
            anchorEl: null,
            mobileMoreAnchorEl: null,
            isMenuOpen: false,
            isMobileMenuOpen: false
        }

        this.menuId = 'primary-search-account-menu';
        this.mobileMenuId = 'primary-search-account-menu-mobile';
    }

    componentDidMount() {
        console.log("Header is mounted!")
    }


    renderMenu = () => {
        return <Menu
            anchorEl={this.state.anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={this.menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={this.state.isMenuOpen}
            onClose={this.handleMenuClose}
        >
            <MenuItem onClick={this.handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={this.handleMenuClose}>My account</MenuItem>
        </Menu>
    }

    renderMobileMenu = () => {
        return <Menu
            anchorEl={this.state.mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={this.mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={this.state.isMobileMenuOpen}
            onClose={this.handleMobileMenuClose}
        >
            <MenuItem>
                <Button variant="contained" color="success">
                    RESUME
                </Button>
            </MenuItem>
            <MenuItem>
                <Button variant="contained" color="success">
                    TUTORIAL
                </Button>
            </MenuItem>
            <MenuItem onClick={this.handleProfileMenuOpen}>
                <Button variant="contained" color="success">
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

    render() {
        return <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" sx={{ backgroundColor: "#627254" }}>
                    <Toolbar>
                        <Typography variant="h5" noWrap component="div" sx={{ color: "white" }}>
                            {this.props.title}
                        </Typography>
                        <Box sx={{ flexGrow: 1 }} />
                        <Box sx={{ display: { xs: 'none', md: 'flex' }, "& > *:not(:last-child)": { marginRight: '1rem' } }}>
                            <Button component={Link} to={'/resume'} variant="contained" color="success">
                                RESUME
                            </Button>
                            <Button component={Link} to={'/tutorial'} variant="contained" color="success"  >
                                TUTORIAL
                            </Button>
                            <Button component={Link} to={'/portfolio'} variant="contained" color="success" >
                                PORTFOLIO
                            </Button>
                        </Box>
                        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="show more"
                                aria-controls={this.mobileMenuId}
                                aria-haspopup="true"
                                onClick={this.handleMobileMenuOpen}
                                color="inherit"
                            >
                            </IconButton>
                        </Box>
                    </Toolbar>
                </AppBar>
                <this.renderMobileMenu />
                <this.renderMenu />
            </Box>
        </>
    }
}