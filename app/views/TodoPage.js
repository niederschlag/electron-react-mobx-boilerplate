import React from 'react';
import { Link } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

@inject('todo') @observer
class TodoPage extends React.Component {
    render() {
        const { list, toggleTodo, todoText, addTodo } = this.props.todo;
        return (
            <div className="home-page">
                {list.map((item, index) => (
                    <p key={item.id} onClick={() => toggleTodo(index)}>
                        {`${item.title} ${item.complete ? '√' : '×'}`}
                    </p>
                ))}
                <p className="add-todo">
                    <input type="text" value={todoText} onChange={(e) => { this.props.todo.todoText = e.target.value; }} onKeyDown={(e) => { if (e.key === 'Enter') addTodo(); }} />
                    <button onClick={addTodo}>add</button>
                </p>
                <Link to="/">Back to main page....</Link>
            </div>
        );
    }
}

export default TodoPage;
