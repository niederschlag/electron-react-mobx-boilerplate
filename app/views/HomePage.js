import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HomePage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="">
                This is the home page...
                <br />
                <Link to="/todo">Todo</Link>
            </div>
        );
    }
}

export default HomePage;
