import { Component } from "react";
import "./tutorial.css"

import Header from "../header/header";

export default class Tutorial extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }

        document.title = "Tutorial"
        document.getElementById("icon").href = "/src/assets/T.svg"
    }

    componentDidMount() {
        console.log("Tutorial is mounted!")
    }

    render() {
        return <>
            <Header title="TUTORIAL" />
            I am tutorial
        </>
    }
}