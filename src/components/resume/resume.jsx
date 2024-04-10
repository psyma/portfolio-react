import { Component } from "react";
import {
    Box, Button, Paper, Container, Grid, Avatar, Typography, Link, Stack, List, ListItem, ListItemText
} from '@mui/material';

import Header from "../header/header";
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';

import "./resume.css"

export default class Resume extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }

        document.title = "Resume"
    }

    componentDidMount() {
        console.log("Resume is mounted!")
    }

    render() { 
        return <>  
            <div>
                <Header title="RESUME"/> 
                <Grid container spacing={3}>
                    <Grid item xs={12} md={4} lg={3}  sx={{   marginBottom: "0", marginTop: "0" }}>
                        <Paper
                        sx={{
                            p: 2, 
                            display: 'flex', 
                            flexDirection: 'column', 
                            height: "100%"
                        }}
                        >
                        <Stack spacing={2}> 
                            <div>
                                <Avatar alt="Profile picture" src="./assets/profile.png" sx={{ width: 180, height: 180 }}/> 
                                <Typography noWrap variant="h6" sx={{ color: "black" }}>
                                    Rickben Anthony Gimeda
                                </Typography> 
                            </div> 
    
                            <div style={{ marginTop: "1rem"}}>
                                <div style={{ margin: 2, display: "flex"  }}> 
                                    <EmailIcon style={{ marginRight: "0.2rem"}}/> 
                                    <Link href="mailto: rickbengimeda@gmail.com" underline="none" target="_blank" style={{ marginTop: "auto", marginBottom: "auto"}}>
                                        rickbengimeda@gmail.com
                                    </Link>
                                </div>
                                <div style={{ margin: 2,display: "flex" }}> 
                                    <LinkedInIcon style={{ marginRight: "0.2rem"}}/> 
                                    <Link href="https://www.linkedin.com/in/rickben-anthony-gimeda-b5973875/" underline="none" target="_blank" style={{ marginTop: "auto", marginBottom: "auto" }}>
                                        linkedin.com/in/rickben
                                    </Link>
                                </div> 
                                <div style={{ margin: 2,display: "flex" }}> 
                                    <GitHubIcon style={{ marginRight: "0.2rem"}}/> 
                                    <Link href="https://github.com/psyma" underline="none" target="_blank" style={{ marginTop: "auto", marginBottom: "auto" }}>
                                        github.com/psyma
                                    </Link>
                                </div> 
                                <div style={{ margin: 2,display: "flex" }}> 
                                    <FacebookOutlinedIcon style={{ marginRight: "0.2rem"}}/> 
                                    <Link href="https://www.facebook.com/jpakingpotomen/" underline="none" target="_blank" style={{ marginTop: "auto", marginBottom: "auto" }}>
                                        facebook.com/rickben
                                    </Link>
                                </div>
                            </div>
    
                            <Typography noWrap variant="h5" sx={{ marginTop: "1rem", color: "black", fontWeight: "bold" }}>
                                EDUCATION
                            </Typography> 
    
                            <div>  
                                <Typography noWrap variant="h6" sx={{ marginTop: "1rem", color: "black" }}>
                                    Primary Education
                                </Typography>
                                
                                <div>
                                    <Typography variant="h6" sx={{ color: "gray", fontSize: "1rem", }}>
                                        Umapad Elementary School  
                                    </Typography>
                                    <Typography variant="h6" style={{ lineHeight: "1rem"}} sx={{ color: "gray", fontSize: "1rem", }}> 
                                        2002 - 2008
                                    </Typography>
                                </div> 
                            </div>
    
                            <div>  
                                <Typography noWrap variant="h6" sx={{ marginTop: "1rem", color: "black" }}>
                                    Secondary Education
                                </Typography>
                                
                                <div>
                                    <Typography variant="h6" sx={{ color: "gray", fontSize: "1rem", }}>
                                        Don Gerardo Ll. Ouano MNHS
                                    </Typography>
                                    <Typography variant="h6" style={{ lineHeight: "1rem"}} sx={{ color: "gray", fontSize: "1rem", }}> 
                                        2008 - 2012
                                    </Typography>
                                </div> 
                            </div>
    
                            <div>  
                                <Typography noWrap variant="h6" sx={{ marginTop: "1rem", color: "black" }}>
                                    Tertiary
                                </Typography>
                                
                                <div>
                                    <Typography variant="h6" sx={{ color: "gray", fontSize: "1rem", }}>
                                        University of Cebu-Banilad (BSCpE)
                                    </Typography>
                                    <Typography variant="h6" style={{ lineHeight: "1rem"}} sx={{ color: "gray", fontSize: "1rem", }}> 
                                        2017 - 2020 (Undergraduate)
                                    </Typography>
                                </div> 
                            </div>
    
                            <Typography noWrap variant="h5" sx={{ marginTop: "1rem", color: "black", fontWeight: "bold" }}>
                                LANGUAGES
                            </Typography> 
    
                            <div>
                                <div style={{ display: "flex", alignItems: "center"}}>
                                    <Typography variant="h6" style={{ marginBottom: "auto", marginTop: "auto"}}  sx={{ marginTop: "1rem", color: "black" }}>
                                        Bisaya 
                                    </Typography>
                                    <Typography variant="h6" style={{ marginBottom: "auto", marginTop: "auto", marginLeft: "0.5rem"}} sx={{ color: "gray", fontSize: "1rem", }}>
                                        (Native)
                                    </Typography>
                                </div>
                                <div style={{ display: "flex", alignItems: "center"}}>
                                    <Typography variant="h6" style={{ marginBottom: "auto", marginTop: "auto"}}  sx={{ marginTop: "1rem", color: "black" }}>
                                        English 
                                    </Typography>
                                    <Typography variant="h6" style={{ marginBottom: "auto", marginTop: "auto", marginLeft: "0.5rem"}} sx={{ color: "gray", fontSize: "1rem", }}>
                                        (Intermediate)
                                    </Typography>
                                </div>
                                <div style={{ display: "flex", alignItems: "center"}}>
                                    <Typography variant="h6" style={{ marginBottom: "auto", marginTop: "auto"}}  sx={{ marginTop: "1rem", color: "black" }}>
                                        Tagalog 
                                    </Typography>
                                    <Typography variant="h6" style={{ marginBottom: "auto", marginTop: "auto", marginLeft: "0.5rem"}} sx={{ color: "gray", fontSize: "1rem", }}>
                                        (Intermediate)
                                    </Typography>
                                </div>
                            </div>
                        </Stack> 
    
                            
                        </Paper>
                    </Grid>  
                    <Grid item xs={12} md={8} lg={9}  sx={{   marginBottom: "0", marginTop: "0" }}>
                        <Paper
                        sx={{
                            p: 2,
                            display: 'flex', 
                            flexDirection: 'column', 
                            height: "100%"
                        }}
                        >
                        <Stack spacing={2}>
                            <div>
                                <Typography noWrap variant="h5" sx={{ marginTop: "1rem", color: "black", fontWeight: "bold" }}>
                                    CAREER PROFILE
                                </Typography> 
                                <p>
                                    I started studying programming in 2018 and have since expanded my knowledge to include Web, games, APIs, and open-source libraries. enhancing my knowledge of object-oriented programming, data structures, and algorithms. I also like making things from the ground up. I'm making an effort to enhance my programming knowledge.
                                </p>
                            </div>
                            <div>
                                <Typography noWrap variant="h5" sx={{ marginTop: "1rem", color: "black", fontWeight: "bold" }}>
                                    EXPERIENCES
                                </Typography> 
                                <div style={{ display: "flex", alignItems: "center"}}> 
                                    <Typography variant="h6" sx={{  color: "black" }}>
                                        Software Engineer
                                    </Typography>
                                    <Typography variant="h6" style={{ marginBottom: "auto", marginTop: "auto", marginRight: "1rem", right: 0, position: "absolute"}} sx={{ color: "gray", fontSize: "1rem", }}>
                                        Nov 16, 2020 - Present
                                    </Typography>
                                </div>
                                <Typography variant="h6"  sx={{ color: "gray", fontSize: "1rem", }}>
                                    Cebu Skyland Universal Inc.
                                </Typography>
                                <p>
                                As a software engineer, my duties include writing, debugging, testing, and maintaining the code. I also assist others, like writing and planning what to do with their current task. I'm ready to taking on any kind of assignment that is assigned to me; if I don't know how to accomplish anything, I'll just have to research it. Like using third-party programs or an open-source libraries to use it on our existing/current projects.
                                </p>
                            </div> 
                            <div>
                                <Typography noWrap variant="h5" sx={{ marginTop: "1rem", color: "black", fontWeight: "bold" }}>
                                    PROJECTS
                                </Typography> 
                                <p>
                                    List of projects that I'm responsible for developing and maintaining. and also third-party programs and open-source libraries where we study and integrate it with our current existing/projects.
                                </p>
                                <List dense={true} sx={{ listStyleType: 'disc' }}>
                                    <ListItem sx={{ display: 'list-item', marginLeft: "1rem" }}>
                                        <ListItemText
                                        primary="API"
                                        secondary="An api for web application"/>
                                    </ListItem>
                                    <ListItem sx={{ display: 'list-item', marginLeft: "1rem" }}>
                                        <ListItemText 
                                            primary="GIS"
                                            secondary="A project(s) that needs to be integrated with geographic information systems"/>
                                    </ListItem>
                                    <ListItem sx={{ display: 'list-item', marginLeft: "1rem" }}>
                                        <ListItemText 
                                            primary="AI PROJECTS"
                                            secondary="Project(s) powered by Artificial Intelligent e.g Object Detections, Segmentation, Trracking & etc"/>
                                    </ListItem>
                                    <ListItem sx={{ display: 'list-item', marginLeft: "1rem" }}>
                                        <ListItemText 
                                            primary="CHAT SYSTEM"
                                            secondary="A simple chat system with map integration that needed for other project"/>
                                    </ListItem> 
                                    <ListItem sx={{ display: 'list-item', marginLeft: "1rem" }}>
                                        <ListItemText 
                                            primary="IMAGE CROPPER"
                                            secondary="Cropped a portion of an image that has text then process it using OCR"/>
                                    </ListItem> 
                                    
                                    <ListItem sx={{ display: 'list-item', marginLeft: "1rem" }}>
                                        <ListItemText 
                                            primary="CLOUDSTACK INTEGRATION"
                                            secondary="An open-source cloud computing"/>
                                    </ListItem>
                                </List>
                            </div>
                            <div>
                                <Typography noWrap variant="h5" sx={{ marginTop: "1rem", color: "black", fontWeight: "bold" }}>
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
                                <Typography noWrap variant="h5" sx={{ marginTop: "1rem", color: "black", fontWeight: "bold" }}>
                                    SKILLS, LANGUAGES & FRAMEWORK
                                </Typography>  
                                <List dense={true} sx={{ listStyleType: 'disc' }}>
                                    <ListItem sx={{ display: 'list-item', marginLeft: "1rem" }}>
                                        <ListItemText primary="C/C++"/>
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
        </>
    }
}