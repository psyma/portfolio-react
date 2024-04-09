import React, { Component } from "react";

export default class Footer extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    componentDidMount() {
        console.log("Footer is mounted!")
    }

    render() {
        return <>
            I am Footer
        </>
    }
}