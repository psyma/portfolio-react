import React, { Component } from "react";

import CopyrightIcon from '@mui/icons-material/Copyright';
import { Container, Typography } from "@mui/material";

export default class Footer extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    componentDidMount() { }

    render() {
        return <>
            <Container sx={{ display: "flex", justifyContent: "center", flexDirection: { xs: "column", md: "row" }, alignItems: "center" }}  >
                <Typography sx={{ display: "flex", mr: 1 }}>
                    <CopyrightIcon style={{ fontSize: "smaller", marginTop: "auto", marginBottom: "auto" }} />
                    <small> {new Date().getFullYear()} Portfolio-React. All rights reserved.</small>
                </Typography>
            </Container>
        </>
    }
}