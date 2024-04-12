import { Component } from "react";
import {
    Avatar, Box, Card, CardMedia, CardContent, Container, Grid, Link, List, ListItem, ListItemText, Paper, Stack, Typography, Tabs, Tab
} from "@mui/material";

import { TabList, TabPanel, TabContext } from "@mui/lab";

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
            tabValue: '1',
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

    handleTabContextChange = async (event, value) => {
        await this.setState({
            tabValue: value
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
                                    <Avatar alt="Profile picture" src="./assets/profile.png" sx={{ width: 200, height: 200, alignSelf: "center", borderRadius: "5%" }} />
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
                                    <Typography variant="h4" sx={{ alignSelf: "center" }}>
                                        PROJECTS
                                    </Typography>
                                    <TabContext value={this.state.tabValue}>
                                        <Box sx={{ borderBottom: 1, borderColor: 'divider', alignSelf: "center" }}>
                                            <TabList onChange={this.handleTabContextChange} aria-label="lab API tabs example">
                                                <Tab label="OLD" value="1" />
                                                <Tab label="NEW" value="2" />
                                            </TabList>
                                        </Box>
                                        <TabPanel value="1">
                                            <Stack spacing={5}>
                                                <Card>
                                                    <CardMedia
                                                        sx={{ objectFit: "fill", aspectRatio: "2.5" }}
                                                        component="img"
                                                        image="./assets/thumbnails/puzzle.png"
                                                        title="puzzle game" />
                                                    <CardContent>
                                                        <Typography gutterBottom variant="h5" component="div">
                                                            PUZZLE GAME
                                                        </Typography>
                                                        <Typography variant="body2">
                                                            The Puzzle Game is the last C# project I created.
                                                            It was during the early lockdown of March 2020,
                                                            due to boredom I decided to create this.
                                                            The game is the same as a typical puzzle game.
                                                            You will just need to put everything in order for you to win.
                                                            <Link href="https://github.com/PSYMA/Puzzle-Game-CSharp-WPF" underline="none" target="_blank" sx={{ marginLeft: "0.2rem" }}>source code</Link>
                                                        </Typography>
                                                    </CardContent>
                                                </Card>
                                                <Card>
                                                    <CardMedia
                                                        sx={{ objectFit: "fill", aspectRatio: "2.5" }}
                                                        component="img"
                                                        image="./assets/thumbnails/tictactoe.png"
                                                        title="tic tac toe" />
                                                    <CardContent>
                                                        <Typography gutterBottom variant="h5" component="div">
                                                            TIC TAC TOE
                                                        </Typography>
                                                        <Typography variant="body2">
                                                            This Tic Tac Toe Game is my prelim project during my C# language course in college,
                                                            this is not your traditional tic tac toe game,
                                                            the game itself has more features and is way more graphical,
                                                            The rules are the same.
                                                            <Link href="https://github.com/PSYMA/TIC-TAC-TOE-CSharp-WPF" underline="none" target="_blank" sx={{ marginLeft: "0.2rem" }}>source code</Link>
                                                        </Typography>
                                                    </CardContent>
                                                </Card>
                                                <Card>
                                                    <CardMedia
                                                        sx={{ objectFit: "fill", aspectRatio: "2.5" }}
                                                        component="img"
                                                        image="./assets/thumbnails/match.png"
                                                        title="The matching Game" />
                                                    <CardContent>
                                                        <Typography gutterBottom variant="h5" component="div">
                                                            THE MATCHING GAME
                                                        </Typography>
                                                        <Typography variant="body2">
                                                            This Matching Game is my midterm project during my C# language course in college,
                                                            the game works by pairing its cell to the other cell,
                                                            make mistakes and it will reduce your HP when HP goes to zero you lose
                                                            <Link href="https://github.com/PSYMA/The-Matching-Game-CSharp-WPF-" underline="none" target="_blank" sx={{ marginLeft: "0.2rem" }}>source code</Link>
                                                        </Typography>
                                                    </CardContent>
                                                </Card>
                                                <Card>
                                                    <CardMedia
                                                        sx={{ objectFit: "fill", aspectRatio: "2.5" }}
                                                        component="img"
                                                        image="./assets/thumbnails/battle.png"
                                                        title="The hidden battle game" />
                                                    <CardContent>
                                                        <Typography gutterBottom variant="h5" component="div">
                                                            THE HIDDEN BATTLE GAME
                                                        </Typography>
                                                        <Typography variant="body2">
                                                            This Hidden Battle Game is my final project during my C# language course in college,
                                                            this is the most challenging project I created in C# so far took me a lot of time to finished.
                                                            The game is derived from this board game
                                                            <Link href="https://www.youtube.com/watch?v=4gHJlYLomrs%20target=" underline="none" target="_blank" sx={{ marginLeft: "0.2rem" }}>link</Link>.
                                                            <Link href="https://github.com/PSYMA/The-Hidden-Game-Battle-CSharp-WPF-" underline="none" target="_blank" sx={{ marginLeft: "0.2rem" }}>source code</Link>
                                                        </Typography>
                                                    </CardContent>
                                                </Card>
                                                <Card>
                                                    <CardMedia
                                                        sx={{ objectFit: "fill", aspectRatio: "2.5" }}
                                                        component="img"
                                                        image="./assets/thumbnails/csLibrary.png"
                                                        title="The pong game" />
                                                    <CardContent>
                                                        <Typography gutterBottom variant="h5" component="div">
                                                            LIBRARY SYSTEM GUI
                                                        </Typography>
                                                        <Typography variant="body2">
                                                            This Library System is the upgraded version of my Simple Library System in C++,
                                                            it's integrated with SQLite and offers a couple of features and it's graphical and user friendly.
                                                            I decided to create this project to expose myself to a database project.
                                                            <Link href="https://github.com/PSYMA/Library-System-CSharp-WPF" underline="none" target="_blank" sx={{ marginLeft: "0.2rem" }}>source code</Link>
                                                        </Typography>
                                                    </CardContent>
                                                </Card>
                                                <Card>
                                                    <CardMedia
                                                        sx={{ objectFit: "fill", aspectRatio: "2.5" }}
                                                        component="img"
                                                        image="./assets/thumbnails/pong.png"
                                                        title="The pong game" />
                                                    <CardContent>
                                                        <Typography gutterBottom variant="h5" component="div">
                                                            THE PONG GAME
                                                        </Typography>
                                                        <Typography variant="body2">
                                                            This is one of my very first projects back in my early days in programming C language,
                                                            in particular, The is game quite simple all you need to do is to control the paddle and catch the ball,
                                                            make sure to catch the ball otherwise you will lose. clear all-stars and you win.
                                                            <Link href="https://github.com/psyma/Ping-pong-Game-simple-Cpp-Console" underline="none" target="_blank" sx={{ marginLeft: "0.2rem" }}>source code</Link>
                                                        </Typography>
                                                    </CardContent>
                                                </Card>
                                                <Card>
                                                    <CardMedia
                                                        sx={{ objectFit: "fill", aspectRatio: "2.5" }}
                                                        component="img"
                                                        image="./assets/thumbnails/cppLibrary.png"
                                                        title="Library system" />
                                                    <CardContent>
                                                        <Typography gutterBottom variant="h5" component="div">
                                                            SIMPLE LIBRARY SYSTEM
                                                        </Typography>
                                                        <Typography variant="body2">
                                                            This Simple Library System is my final project during my C language course.
                                                            I struggle a lot during my creation of this project,
                                                            I am still a newbie at that time.
                                                            The project is quite easy: student borrow books as well return it.
                                                            <Link href="https://github.com/PSYMA/Library-System-simple-C-Cpp-Console" underline="none" target="_blank" sx={{ marginLeft: "0.2rem" }}>source code</Link>
                                                        </Typography>
                                                    </CardContent>
                                                </Card>
                                            </Stack>
                                        </TabPanel>
                                        <TabPanel value="2">TODO</TabPanel>
                                    </TabContext>
                                </Stack>
                            </Paper>
                        </Grid>
                    </Grid>
                </div>
            </ThemeProvider>
        </>
    }
}