import React, { Component } from 'react';

import "./App.css"
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import Portfolio from './components/portfolio/portfolio';

export default class App extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    componentDidMount() { }

    render() {
        return <>
            <Portfolio />
        </>
    }
}