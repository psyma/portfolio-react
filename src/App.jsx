import React, { Component } from 'react';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    componentDidMount() {
        console.log("Ok!")
    }

    render() {
        return <>
            Hello World!
        </>
    }
}