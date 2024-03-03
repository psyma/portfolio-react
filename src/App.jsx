import React, { Component } from 'react';
import { Button } from '@mui/material';  
import FlipCameraAndroidIcon from '@mui/icons-material/FlipCameraAndroid';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

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
        
            <Button variant="contained" color="success">
                <FlipCameraAndroidIcon/> Hello World!
            </Button>
        </>
    }
}