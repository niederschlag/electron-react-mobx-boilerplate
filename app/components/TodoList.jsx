import React from 'react';
import { inject, observer } from 'mobx-react';

@inject('todo')
@observer
class TodoList extends React.Component {
    render() {
        const { list, toggleTodo, todoText, addTodo } = this.props.todo;
        return (
            <div>
                {list.map((item, index) => (
                    <p key={item.id} onClick={() => toggleTodo(index)}>
                        {`${item.title} ${item.complete ? '√' : '×'}`}
                    </p>
                ))}
                <p className="add-todo">
                    <input type="text" value={todoText} onChange={(e) => { this.props.todo.todoText = e.target.value; }} onKeyDown={(e) => { if (e.key === 'Enter') addTodo(); }} />
                    <button onClick={addTodo}>add</button>
                </p>
            </div>
        );
    }
}

export default TodoList;
