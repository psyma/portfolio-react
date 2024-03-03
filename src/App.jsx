import React, { Component } from 'react';
import { Button } from '@mui/material';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    componentDidMount() {
        console.log("App is mounted!")
    }

    render() {
        return <>
            <Button variant="contained" color="success">Hello World!</Button>
        </>
    }
}