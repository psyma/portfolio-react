import { Component } from "react";
import {
    Avatar, Box, Card, CardMedia, CardContent, Container, Grid, Link, Stack, Typography, Tab,
    CssBaseline
} from "@mui/material";

import { TabList, TabPanel, TabContext } from "@mui/lab";

import Header from "../header/header";
import Footer from "../footer/footer";
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import { ThemeProvider, createTheme } from '@mui/material/styles';

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
                <CssBaseline />
                <div>
                    <Header title="PORTFOLIO" setThemeMode={this.setThemeMode} />
                    <Container sx={{ mt: "1rem" }}>
                        <Grid container>
                            <Grid item xs={12} md={4} lg={4} >
                                <Stack spacing={2}>
                                    <Avatar alt="Profile picture" src="./assets/profile.png" sx={{ width: 200, height: 200, alignSelf: "center", borderRadius: "5%" }} />
                                    <Typography style={{ textIndent: "10%", textAlign: "justify" }}>
                                        My name is Rickben Anthony Q. Gimeda, and I began my programming career during my second year of the Bachelor of Science in Computer Engineering program in 2018. Initially, I encountered significant challenges in my programming classes. However, over time, I developed a deep appreciation for the field and its potential. This newfound passion ultimately led me to pursue a career as a programmer.
                                    </Typography>
                                    <Typography style={{ textAlign: "justify" }}>
                                        As part of my practice, I have developed several projects in C++ and C#, primarily as part of my academic coursework. Through these projects, I have gained valuable experience in data structures, algorithms, and object-oriented programming. I am currently working towards my goal of becoming a skilled developer, with the aspiration of securing my ideal position as a software engineer in the near future.
                                    </Typography>
                                    <Container style={{ display: "flex", justifyContent: "center" }}>
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
                                    </Container>
                                </Stack>
                            </Grid>
                            <Grid item xs={12} md={8} lg={8}>
                                <Stack>
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
                                                        <Typography variant="body2" sx={{ textAlign: "justify" }}>
                                                            The Puzzle Game is the most recent project I developed using C#. I created this game in March 2020 during the early stages of the lockdown as a way to stay productive. The game follows the traditional puzzle format, requiring players to arrange pieces correctly to achieve victory.
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
                                                        <Typography variant="body2" sx={{ textAlign: "justify" }}>
                                                            This Tic Tac Toe Game was my preliminary project for my C# programming course in college. Unlike traditional Tic Tac Toe, this version includes additional features and enhanced graphics. However, the fundamental rules of the game remain the same.
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
                                                        <Typography variant="body2" sx={{ textAlign: "justify" }}>
                                                            This Matching Game was my midterm project for my C# programming course in college. The game involves pairing cells with their corresponding matches. Mistakes result in a reduction of HP, and if your HP reaches zero, you lose the game.
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
                                                        <Typography variant="body2" sx={{ textAlign: "justify" }}>
                                                            The Hidden Battle Game was my final project for my C# programming course in college. This is the most challenging project I have created in C# to date, requiring significant time and effort to complete. The game is based on a traditional board game.
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
                                                        title="GUI Library system" />
                                                    <CardContent>
                                                        <Typography gutterBottom variant="h5" component="div">
                                                            LIBRARY SYSTEM GUI
                                                        </Typography>
                                                        <Typography variant="body2" sx={{ textAlign: "justify" }}>
                                                            This Library System is an enhanced version of my Simple Library System developed in C++. It is integrated with SQLite, offers several features, and is both graphical and user-friendly. I created this project to gain experience with database integration.
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
                                                        <Typography variant="body2" sx={{ textAlign: "justify" }}>
                                                            This is one of my earliest projects from my initial days of programming in C. The game is quite simple: you control a paddle to catch a ball. If you fail to catch the ball, you lose. Clear all the stars, and you win.
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
                                                        <Typography variant="body2" sx={{ textAlign: "justify" }}>
                                                            This Simple Library System was my final project for my C language course. As a beginner at the time, I faced many challenges during its development. The system is straightforward, allowing students to borrow and return books.
                                                            <Link href="https://github.com/PSYMA/Library-System-simple-C-Cpp-Console" underline="none" target="_blank" sx={{ marginLeft: "0.2rem" }}>source code</Link>
                                                        </Typography>
                                                    </CardContent>
                                                </Card>
                                            </Stack>
                                        </TabPanel>
                                        <TabPanel value="2">
                                            <Stack spacing={5}>
                                                <Card>
                                                    <CardMedia
                                                        sx={{ objectFit: "fill", aspectRatio: "2.5" }}
                                                        component="img"
                                                        image="./assets/thumbnails/codeflowerhorn.png"
                                                        title="CodeFlowerHorn" />
                                                    <CardContent>
                                                        <Typography gutterBottom variant="h5" component="div">
                                                            WEBSITE BLOG
                                                        </Typography>
                                                        <Typography variant="body2" sx={{ textAlign: "justify" }}>
                                                            I created a website blog to share my knowledge about programming in various selected languages. This platform serves as a resource for fellow programmers, providing tutorials, insights, and best practices across different programming languages. Through this blog, I aim to contribute to the programming community by offering valuable information and fostering learning and growth.
                                                            <Link href="https://codeflowerhorn.com" underline="none" target="_blank" sx={{ marginLeft: "0.2rem" }}>link</Link>
                                                        </Typography>
                                                    </CardContent>
                                                </Card>
                                            </Stack>
                                        </TabPanel>
                                    </TabContext>
                                </Stack>
                            </Grid>
                        </Grid>
                    </Container>
                    <Footer />
                </div>
            </ThemeProvider>
        </>
    }
}