import { Component } from "react";
import {
    Avatar, IconButton, Container, Grid, Link, List, ListItem, ListItemText, Stack, Tooltip, Typography, CssBaseline
} from '@mui/material';

import Header from "../header/header";
import Footer from "../footer/footer";
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import { Utils } from "../../utils";
import html2pdf from 'html2pdf.js'

import { TbBrandCpp } from "react-icons/tb";
import { FaPython } from "react-icons/fa";
import { RiReactjsFill } from "react-icons/ri";
import { FaSymfony } from "react-icons/fa";
import { PiFileHtmlBold } from "react-icons/pi";
import { IoLogoJavascript } from "react-icons/io5";
import { SiCsharp } from "react-icons/si";
import { SiRubyonrails } from "react-icons/si";

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

    handleDownloadResume = async () => {  
        let btn = document.getElementById("downloadIcon") 
        let element = document.getElementById("resume")

        const options = {
            filename: 'document.pdf',
            margin: 0,
            image: { type: 'jpeg', quality: 1 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'a3', orientation: 'portrait' },
        };

        btn.style.display = "none" 
        await html2pdf().set(options).from(element).save()
        btn.style.display = "inline-block"  
    }

    render() {
        return <>
            <ThemeProvider theme={this.state.theme}>
                <CssBaseline />
                <div>
                    <Header title="RESUME" setThemeMode={this.setThemeMode} />
                    <Container id="resume" sx={{ mt: "1rem" }}>
                        <Grid container>
                            <Grid item xs={12} md={4} lg={4}>
                                <Stack spacing={2}>
                                    <div>
                                        <Avatar alt="Profile picture" src="./assets/profile.png" sx={{ width: "200px", height: "200px", borderRadius: "5%" }} />
                                        <Typography variant="h6">
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
                                            <GitHubIcon style={{ marginRight: "0.2rem" }} />
                                            <Link href="https://github.com/codeflowerhorn" underline="none" target="_blank" style={{ marginTop: "auto", marginBottom: "auto" }}>
                                                github.com/codeflowerhorn
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
                                                primary={
                                                    <Typography variant="h6">
                                                        Primary Education
                                                    </Typography>
                                                }
                                                secondary="Umapad Elementary School 2002-2008" />
                                            <ListItemText
                                                primary={
                                                    <Typography variant="h6">
                                                        Secondary Education
                                                    </Typography>
                                                }
                                                secondary="Don Gerardo Ll. Ouano MNHS 2008-2012" />
                                            <ListItemText
                                                primary={
                                                    <Typography variant="h6">
                                                        Tertiary
                                                    </Typography>
                                                }
                                                secondary="University of Cebu-Banilad BSCpE 2017-2020 (UG)" />
                                        </List>
                                    </div>

                                    <div>
                                        <Typography noWrap variant="h5" sx={{ fontWeight: "bold" }}>
                                            LANGUAGES
                                        </Typography>
                                        <List>
                                            <ListItemText
                                                primary={
                                                    <Typography variant="h6">
                                                        Bisaya
                                                    </Typography>
                                                }
                                                secondary="Native" />
                                            <ListItemText
                                                primary={
                                                    <Typography variant="h6">
                                                        English
                                                    </Typography>
                                                }
                                                secondary="Intermediate" />
                                            <ListItemText
                                                primary={
                                                    <Typography variant="h6">
                                                        Tagalog
                                                    </Typography>
                                                }
                                                secondary="Intermediate" />
                                        </List>
                                    </div>
                                </Stack>
                            </Grid>
                            <Grid item xs={12} md={8} lg={8}>
                                <Stack spacing={1}>
                                    <div>
                                        <Typography noWrap variant="h5" sx={{ fontWeight: "bold" }}>
                                            CAREER PROFILE
                                            <Tooltip title="Download this resume in pdf">
                                                <IconButton id="downloadIcon" onClick={this.handleDownloadResume}>
                                                    <FileDownloadIcon />
                                                </IconButton>
                                            </Tooltip>
                                        </Typography>
                                        <Typography sx={{ textAlign: "" }}>
                                            I began studying programming in 2018 and have since broadened my expertise to include web development, game development, APIs, and open-source libraries. This journey has significantly enhanced my understanding of object-oriented programming, data structures, and algorithms. I also enjoy creating projects from the ground up. I am continually striving to improve my programming skills and knowledge.
                                        </Typography>
                                    </div>
                                    <div>
                                        <Typography noWrap variant="h5" sx={{ marginTop: "1rem", fontWeight: "bold" }}>
                                            EXPERIENCES
                                        </Typography>
                                        <div style={{ marginTop: "0.5rem" }}>
                                            <div style={{ display: "flex" }}>
                                                <Typography variant="h6">
                                                    Software Engineer -
                                                </Typography>
                                                <small style={{ marginTop: "auto", marginBottom: "auto", marginLeft: "0.5rem" }}>Nov 16, 2020 - Present</small>
                                            </div>
                                            <Typography variant="h6" >
                                                <small>Cebu Skyland Universal Inc.</small>
                                            </Typography>
                                            <Typography sx={{ textAlign: "justify" }}>
                                                As a software engineer, my responsibilities encompass writing, debugging, testing, and maintaining code. Additionally, I assist colleagues by providing guidance and planning their current tasks. I am prepared to take on any assignment given to me. If I encounter something unfamiliar, I proactively research it, including the use of third-party programs or open-source libraries, to integrate them into our existing projects.
                                            </Typography>
                                        </div>
                                    </div>
                                    <div>
                                        <Typography noWrap variant="h5" sx={{ marginTop: "1rem", fontWeight: "bold" }}>
                                            PROJECTS
                                        </Typography>
                                        <Typography sx={{ textAlign: "justify" }}>
                                            I am responsible for developing and maintaining a variety of projects. Additionally, I study and integrate third-party programs and open-source libraries into our existing projects to enhance their functionality and performance.     
                                        </Typography>
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
                                                    primary={<s>AI PROJECTS</s>}
                                                    secondary={<s>Project(s) powered by artificial intelligent e.g object detections, segmentation, tracking, llm & etc</s>} />
                                            </ListItem>
                                            <ListItem sx={{ display: 'list-item', marginLeft: "1rem" }}>
                                                <ListItemText
                                                    primary="WEB APPLICATIONS"
                                                    secondary="Any project(s) that is web related SSR/CSR, small/large application" />
                                            </ListItem>

                                            <ListItem sx={{ display: 'list-item', marginLeft: "1rem" }}>
                                                <ListItemText
                                                    primary="CLOUDSTACK INTEGRATION"
                                                    secondary="An open-source cloud computing" />
                                            </ListItem>
                                        </List>
                                    </div>
                                    <div>
                                        <Typography noWrap variant="h5" sx={{ fontWeight: "bold" }}>
                                            RESPONSIBILITIES
                                        </Typography>
                                        <Typography>
                                            List of responsibilities that I usually do as a software engineer
                                        </Typography>
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
                                        <Typography noWrap variant="h5" sx={{ fontWeight: "bold" }}>
                                            LANGUAGES & FRAMEWORKS
                                        </Typography>
                                        <List dense={true} sx={{ listStyleType: 'disc' }}>
                                            <ListItem sx={{ display: 'list-item', marginLeft: "1rem" }}>
                                                <ListItemText primary={
                                                    <div style={{ display: "flex", alignItems: "center" }}>
                                                        <TbBrandCpp style={{ marginRight: "0.5rem", fontSize: "large" }} />
                                                        C/C++
                                                    </div>
                                                } />
                                            </ListItem>
                                            <ListItem sx={{ display: 'list-item', marginLeft: "1rem" }}>
                                                <ListItemText primary={
                                                    <div style={{ display: "flex", alignItems: "center" }}>
                                                        <FaPython style={{ marginRight: "0.5rem", fontSize: "large" }} />
                                                        PYTHON
                                                    </div>
                                                } />
                                            </ListItem>
                                            <ListItem sx={{ display: 'list-item', marginLeft: "1rem" }}>
                                                <ListItemText primary={
                                                    <div style={{ display: "flex", alignItems: "center" }}>
                                                        <RiReactjsFill style={{ marginRight: "0.5rem", fontSize: "large" }} />
                                                        REACTJS
                                                    </div>
                                                } />
                                            </ListItem>
                                            <ListItem sx={{ display: 'list-item', marginLeft: "1rem" }}>
                                                <ListItemText primary={
                                                    <div style={{ display: "flex", alignItems: "center" }}>
                                                        <FaSymfony style={{ marginRight: "0.5rem", fontSize: "large" }} />
                                                        SYMFONY
                                                    </div>
                                                } />
                                            </ListItem>
                                            <ListItem sx={{ display: 'list-item', marginLeft: "1rem" }}>
                                                <ListItemText primary={
                                                    <div style={{ display: "flex", alignItems: "center" }}>
                                                        <SiRubyonrails style={{ marginRight: "0.5rem", fontSize: "large" }} />
                                                        RUBY ON RAILS
                                                    </div>
                                                } />
                                            </ListItem>
                                            <ListItem sx={{ display: 'list-item', marginLeft: "1rem" }}>
                                                <ListItemText primary={
                                                    <div style={{ display: "flex", alignItems: "center" }}>
                                                        <PiFileHtmlBold style={{ marginRight: "0.5rem", fontSize: "large" }} />
                                                        HTML/CSS
                                                    </div>
                                                } />
                                            </ListItem>
                                            <ListItem sx={{ display: 'list-item', marginLeft: "1rem" }}>
                                                <ListItemText primary={
                                                    <div style={{ display: "flex", alignItems: "center" }}>
                                                        <IoLogoJavascript style={{ marginRight: "0.5rem", fontSize: "large" }} />
                                                        JAVASCRIPT
                                                    </div>
                                                } />
                                            </ListItem>
                                            <ListItem sx={{ display: 'list-item', marginLeft: "1rem" }}>
                                                <ListItemText primary={
                                                    <div style={{ display: "flex", alignItems: "center" }}>
                                                        <SiCsharp style={{ marginRight: "0.5rem", fontSize: "large" }} />
                                                        C# .NET & C# ASP.NET CORE
                                                    </div>
                                                } />
                                            </ListItem>
                                        </List>
                                    </div>
                                </Stack>
                            </Grid>
                        </Grid>
                    </Container>
                    <Footer />
                </div>
            </ThemeProvider >
        </>
    }
}