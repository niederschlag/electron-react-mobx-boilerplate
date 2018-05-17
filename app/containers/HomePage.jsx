import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class HomePage extends Component {
    render() {
        return (
            <div className="">
                <p>This is the home page... <br /><Link to="/todo">Todo</Link></p>
            </div>
        );
    }
}
