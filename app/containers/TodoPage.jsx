import React from 'react';
import { Link } from 'react-router-dom';
import TodoList from '../components/TodoList';

export default class TodoPage extends React.Component {
    render() {
        return (
            <div className="home-page">
                <TodoList />
                <Link to="/">Back to main page....</Link>
            </div>
        );
    }
}
