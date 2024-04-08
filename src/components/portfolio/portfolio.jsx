import { Component } from "react";
import "./portfolio.css"

import Header from "../header/header";

export default class Portfolio extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }

        document.title = "Portfolio"
        document.getElementById("icon").href = "/src/assets/P.svg"
    }

    componentDidMount() {
        console.log("Portfolio is mounted!")
    }

    render() {
        return <>
            <Header title="PORTFOLIO" />
            I am portfolio
        </>
    }
}