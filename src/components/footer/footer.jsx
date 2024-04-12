import React, { Component } from "react";

import CopyrightIcon from '@mui/icons-material/Copyright';

export default class Footer extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    componentDidMount() { }

    render() {
        return <>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <CopyrightIcon />
                <p style={{ marginTop: "auto", marginBottom: "auto" }}>
                    {new Date().getFullYear()} Rickben Gimeda. All Rights Reserved.
                </p>
            </div>
        </>
    }
}