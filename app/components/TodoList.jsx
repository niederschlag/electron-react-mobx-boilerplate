import React from 'react';
import { inject, observer } from 'mobx-react';
import { default as styled, keyframes } from 'styled-components';

const ListStyle = styled.p`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
    margin: 0.25em 0;
    user-select: none;
`;

const Input = styled.input`
    background: white;
    color: palevioletred;
    
    font-size: 1em;
    margin: 0.25em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
`;

const Button = styled.button`
    background: palevioletred;
    color: white;
    
    font-size: 1em;
    margin: 0.25em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
`;

@inject('todo')
@observer
export default class TodoList extends React.Component {
    render() {
        const { list, toggleTodo, todoText, addTodo, deleteTodo } = this.props.todo;
        return (
            <div>
                {list.map((item, index) => (
                    <ListStyle key={item.id} onClick={() => toggleTodo(index)} onContextMenu={() => deleteTodo(index)} >
                        {`${item.title} ${item.complete ? '✅' : '❌'}`}
                    </ListStyle>
                ))}
                <p className="add-todo">
                    <Input type="text" value={todoText} onChange={(e) => { this.props.todo.todoText = e.target.value; }} onKeyDown={(e) => { if (e.key === 'Enter') addTodo(); }} />
                    <Button onClick={addTodo}>add</Button>
                </p>
            </div>
        );
    }
}
