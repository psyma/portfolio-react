import { Component } from "react";
import "./resume.css"

import Header from "../header/header";

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
            <Header title="RESUME" />
            I am resume
        </>
    }
}