import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import { Provider } from 'mobx-react';

import TodoState from './states/Todo';

import HomePage from './containers/HomePage';
import TodoPage from './containers/TodoPage';


const stores = {
    todo: new TodoState()
};


export default class App extends Component {
    render() {
        return (
            <Provider {...stores}>
                <HashRouter>
                    <div>
                        <Route exact path="/" component={HomePage} />
                        <Route exact path="/todo" component={TodoPage} />
                    </div>
                </HashRouter>
            </Provider>
        );
    }
}
