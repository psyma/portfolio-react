import { Component } from "react";
import {
    Avatar, Grid, Link, List, ListItem, ListItemText, Paper, Stack, Typography, Tabs, Tab, Box
} from '@mui/material';

import Header from "../header/header";
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import "./portfolio.css"
import { Utils } from "../../utils";

export default class Portfolio extends Component {
    constructor(props) {
        super(props)

        this.state = {
            theme: createTheme({
                palette: {
                    mode: Utils.themeMode,
                },
            })
        }

        document.title = "Portfolio"
        document.getElementById("icon").href = "./assets/P.svg"
    }

    componentDidMount() { }

    setThemeMode = async (themeMode) => {
        await this.setState({
            theme: createTheme({
                palette: {
                    mode: themeMode,
                },
            })
        })
    }

    render() {
        return <>
            <ThemeProvider theme={this.state.theme}>
                <div>
                    <Header title="PORTFOLIO" setThemeMode={this.setThemeMode} />
                    <Grid container spacing={0}>
                        <Grid item xs={12} md={4} lg={3} sx={{ marginBottom: "0", marginTop: "0" }}>
                            <Paper
                                sx={{
                                    p: 2,
                                    display: 'flex',
                                    height: "100%",
                                    flexDirection: 'column',
                                    borderRadius: "0%"
                                }}>
                                <Stack spacing={2}>
                                    <Avatar alt="Profile picture" src="./assets/profile.png" sx={{ width: 180, height: 180, alignSelf: "center" }} />
                                    <p style={{ textIndent: "10%" }}>
                                        During my second year of the Bachelor of Science in Computer Engineering program in 2018, I began my programming career. My name is Rickben Anthony Q. Gimeda. I have a lot of difficulty in my programming classes, but eventually I grew to enjoy it because of how much I can accomplish in the area. Then, not too long after, I chose to become a programmer.
                                    </p>
                                    <p style={{ textIndent: "10%" }}>
                                        As part of my practice, I have created a few projects in C++ and C#; the most of these are school projects, and I have learned more about data structures, algorithms, and object-oriented programming. I'm now working toward my aim of becoming a skilled developer with the hopes of soon landing my ideal position as a software engineer.
                                    </p>

                                    <div style={{ display: "flex", justifyContent: "center" }}>
                                        <Link href="mailto: rickbengimeda@gmail.com" underline="none" target="_blank" style={{ marginTop: "auto", marginBottom: "auto" }}>
                                            <EmailIcon style={{ marginRight: "0.5rem" }} />
                                        </Link>
                                        <Link href="https://www.linkedin.com/in/rickben-anthony-gimeda-b5973875/" underline="none" target="_blank" style={{ marginTop: "auto", marginBottom: "auto" }}>
                                            <LinkedInIcon style={{ marginRight: "0.5rem" }} />
                                        </Link>
                                        <Link href="https://github.com/psyma" underline="none" target="_blank" style={{ marginTop: "auto", marginBottom: "auto" }}>
                                            <GitHubIcon style={{ marginRight: "0.5rem" }} />
                                        </Link>
                                        <Link href="https://www.facebook.com/jpakingpotomen/" underline="none" target="_blank" style={{ marginTop: "auto", marginBottom: "auto" }}>
                                            <FacebookOutlinedIcon style={{ marginRight: "0.5rem" }} />
                                        </Link>
                                    </div>
                                </Stack>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} md={8} lg={9} sx={{ marginBottom: "0", marginTop: "0" }}>
                            <Paper
                                sx={{
                                    p: 2,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    height: "100%",
                                    borderRadius: "0%"
                                }}>
                                <Stack spacing={2}>

                                </Stack>
                            </Paper>
                        </Grid>
                    </Grid>
                </div>
            </ThemeProvider>
        </>
    }
}