import { Component } from "react";
import {
    Avatar, IconButton, Grid, Link, List, ListItem, ListItemText, Paper, Stack, Tooltip, Typography
} from '@mui/material';

import Header from "../header/header";
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import "./resume.css"
import { Utils } from "../../utils";

export default class Resume extends Component {
    constructor(props) {
        super(props)

        this.state = {
            theme: createTheme({
                palette: {
                    mode: Utils.themeMode,
                },
            })
        }

        document.title = "Resume"
        document.getElementById("icon").href = "./assets/R.svg"
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
                    <Header title="RESUME" setThemeMode={this.setThemeMode} />
                    <Grid container spacing={0}>
                        <Grid item xs={12} md={4} lg={3} sx={{ marginBottom: "0", marginTop: "0", }} >
                            <Paper
                                sx={{
                                    p: 2,
                                    display: 'flex',
                                    height: "100%",
                                    flexDirection: 'column',
                                    borderRadius: "0%",
                                    alignSelf: "center"
                                }}>
                                <Stack spacing={2}>
                                    <div>
                                        <Avatar alt="Profile picture" src="./assets/profile.png" sx={{ width: 200, height: 200, borderRadius: "5%" }} />
                                        <Typography noWrap variant="h6">
                                            Rickben Anthony Gimeda
                                        </Typography>
                                    </div>

                                    <div >
                                        <div style={{ display: "flex" }}>
                                            <EmailIcon style={{ marginRight: "0.2rem" }} />
                                            <Link href="mailto: rickbengimeda@gmail.com" underline="none" target="_blank" style={{ marginTop: "auto", marginBottom: "auto" }}>
                                                rickbengimeda@gmail.com
                                            </Link>
                                        </div>
                                        <div style={{ display: "flex" }}>
                                            <LinkedInIcon style={{ marginRight: "0.2rem" }} />
                                            <Link href="https://www.linkedin.com/in/rickben-anthony-gimeda-b5973875/" underline="none" target="_blank" style={{ marginTop: "auto", marginBottom: "auto" }}>
                                                linkedin.com/in/rickben
                                            </Link>
                                        </div>
                                        <div style={{ display: "flex" }}>
                                            <GitHubIcon style={{ marginRight: "0.2rem" }} />
                                            <Link href="https://github.com/psyma" underline="none" target="_blank" style={{ marginTop: "auto", marginBottom: "auto" }}>
                                                github.com/psyma
                                            </Link>
                                        </div>
                                        <div style={{ display: "flex" }}>
                                            <FacebookOutlinedIcon style={{ marginRight: "0.2rem" }} />
                                            <Link href="https://www.facebook.com/jpakingpotomen/" underline="none" target="_blank" style={{ marginTop: "auto", marginBottom: "auto" }}>
                                                facebook.com/rickben
                                            </Link>
                                        </div>
                                    </div>

                                    <div>
                                        <Typography noWrap variant="h6" sx={{ fontWeight: "bold" }}>
                                            EDUCATION
                                        </Typography>
                                        <List>
                                            <ListItemText
                                                primary="Primary Education"
                                                secondary="Umapad Elementary School 2002-2008" />
                                            <ListItemText
                                                primary="Secondary Education"
                                                secondary="Don Gerardo Ll. Ouano MNHS 2008-2012" />
                                            <ListItemText
                                                primary="Tertiary"
                                                secondary="University of Cebu-Banilad BSCpE 2017-2020 (UG)" />
                                        </List>
                                    </div>

                                    <div>
                                        <Typography noWrap variant="h5" sx={{ fontWeight: "bold" }}>
                                            LANGUAGES
                                        </Typography>
                                        <List>
                                            <ListItemText
                                                primary="Bisaya"
                                                secondary="Native" />
                                            <ListItemText
                                                primary="English"
                                                secondary="Intermediate" />
                                            <ListItemText
                                                primary="Tagalog"
                                                secondary="Intermediate" />
                                        </List>
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
                                    <div>
                                        <Typography noWrap variant="h5" sx={{ marginTop: "1rem", fontWeight: "bold" }}>
                                            CAREER PROFILE
                                            <Tooltip title="Download this resume in pdf">
                                                <IconButton>
                                                    <FileDownloadIcon />
                                                </IconButton>
                                            </Tooltip>
                                        </Typography>
                                        <p>
                                            I started studying programming in 2018 and have since expanded my knowledge to include Web, games, APIs, and open-source libraries. enhancing my knowledge of object-oriented programming, data structures, and algorithms. I also like making things from the ground up. I'm making an effort to enhance my programming knowledge.
                                        </p>
                                    </div>
                                    <div>
                                        <Typography noWrap variant="h5" sx={{ marginTop: "1rem", fontWeight: "bold" }}>
                                            EXPERIENCES
                                        </Typography>
                                        <div style={{ display: "flex" }}>
                                            <Typography variant="h6">
                                                Software Engineer - <small>Nov 16, 2020 - Present</small>
                                            </Typography>
                                        </div>
                                        <Typography variant="h6" sx={{ fontSize: "1rem", }}>
                                            Cebu Skyland Universal Inc.
                                        </Typography>
                                        <p>
                                            As a software engineer, my duties include writing, debugging, testing, and maintaining the code. I also assist others, like writing and planning what to do with their current task. I'm ready to taking on any kind of assignment that is assigned to me; if I don't know how to accomplish anything, I'll just have to research it. Like using third-party programs or an open-source libraries to use it on our existing/current projects.
                                        </p>
                                    </div>
                                    <div>
                                        <Typography noWrap variant="h5" sx={{ marginTop: "1rem", fontWeight: "bold" }}>
                                            PROJECTS
                                        </Typography>
                                        <p>
                                            List of projects that I'm responsible for developing and maintaining. and also third-party programs and open-source libraries where we study and integrate it with our current existing/projects.
                                        </p>
                                        <List dense={true} sx={{ listStyleType: 'disc' }}>
                                            <ListItem sx={{ display: 'list-item', marginLeft: "1rem" }}>
                                                <ListItemText
                                                    primary="API"
                                                    secondary="An api for web application" />
                                            </ListItem>
                                            <ListItem sx={{ display: 'list-item', marginLeft: "1rem" }}>
                                                <ListItemText
                                                    primary="GIS"
                                                    secondary="A project(s) that needs to be integrated with geographic information systems" />
                                            </ListItem>
                                            <ListItem sx={{ display: 'list-item', marginLeft: "1rem" }}>
                                                <ListItemText
                                                    primary="AI PROJECTS"
                                                    secondary="Project(s) powered by artificial intelligent e.g object detections, segmentation, tracking & etc" />
                                            </ListItem>
                                            <ListItem sx={{ display: 'list-item', marginLeft: "1rem" }}>
                                                <ListItemText
                                                    primary="CHAT SYSTEM"
                                                    secondary="A simple chat system with map integration that needed for other project" />
                                            </ListItem>
                                            <ListItem sx={{ display: 'list-item', marginLeft: "1rem" }}>
                                                <ListItemText
                                                    primary="IMAGE CROPPER"
                                                    secondary="Cropped a portion of an image that has text then process it using optical character recognition (OCR)" />
                                            </ListItem>

                                            <ListItem sx={{ display: 'list-item', marginLeft: "1rem" }}>
                                                <ListItemText
                                                    primary="CLOUDSTACK INTEGRATION"
                                                    secondary="An open-source cloud computing" />
                                            </ListItem>
                                        </List>
                                    </div>
                                    <div>
                                        <Typography noWrap variant="h5" sx={{ marginTop: "1rem", fontWeight: "bold" }}>
                                            RESPONSIBILITIES
                                        </Typography>
                                        <p>
                                            List of responsibilities that I usually do as a software engineer                            </p>
                                        <List dense={true} sx={{ listStyleType: 'disc' }}>
                                            <ListItem sx={{ display: 'list-item', marginLeft: "1rem" }}>
                                                <ListItemText
                                                    primary="PLANNING" />
                                            </ListItem>
                                            <ListItem sx={{ display: 'list-item', marginLeft: "1rem" }}>
                                                <ListItemText
                                                    primary="RESEARCH" />
                                            </ListItem>
                                            <ListItem sx={{ display: 'list-item', marginLeft: "1rem" }}>
                                                <ListItemText
                                                    primary="WRITING CODE" />
                                            </ListItem>
                                            <ListItem sx={{ display: 'list-item', marginLeft: "1rem" }}>
                                                <ListItemText
                                                    primary="TESTING & DEBUGGING" />
                                            </ListItem>
                                            <ListItem sx={{ display: 'list-item', marginLeft: "1rem" }}>
                                                <ListItemText
                                                    primary="FIXING VULNERABILITIES" />
                                            </ListItem>
                                        </List>
                                    </div>
                                    <div>
                                        <Typography noWrap variant="h5" sx={{ marginTop: "1rem", fontWeight: "bold" }}>
                                            LANGUAGES & FRAMEWORKS
                                        </Typography>
                                        <List dense={true} sx={{ listStyleType: 'disc' }}>
                                            <ListItem sx={{ display: 'list-item', marginLeft: "1rem" }}>
                                                <ListItemText primary="C/C++" />
                                            </ListItem>
                                            <ListItem sx={{ display: 'list-item', marginLeft: "1rem" }}>
                                                <ListItemText primary="REACT" />
                                            </ListItem>
                                            <ListItem sx={{ display: 'list-item', marginLeft: "1rem" }}>
                                                <ListItemText primary="PYTHON" />
                                            </ListItem>
                                            <ListItem sx={{ display: 'list-item', marginLeft: "1rem" }}>
                                                <ListItemText primary="HTML/CSS" />
                                            </ListItem>
                                            <ListItem sx={{ display: 'list-item', marginLeft: "1rem" }}>
                                                <ListItemText primary="JAVASCRIPT" />
                                            </ListItem>
                                            <ListItem sx={{ display: 'list-item', marginLeft: "1rem" }}>
                                                <ListItemText primary="C# .NET & C# ASP.NET CORE" />
                                            </ListItem>
                                        </List>
                                    </div>
                                </Stack>
                            </Paper>
                        </Grid>
                    </Grid>
                </div>
            </ThemeProvider >
        </>
    }
}