import { Component } from "react"; 

import Header from "../header/header";
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
                <Header title="PORTFOLIO" setThemeMode={this.setThemeMode}/>
                    I am portfolio
            </ThemeProvider> 
        </>
    }
}