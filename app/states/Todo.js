import { observable, action, computed } from 'mobx';
import { remote } from 'electron';

const { todo } = remote.require('./app/stores');

class Todo {
    @observable items = [];
    @observable todoText = '';

    @computed get list() {
        this.items = todo.getTodoList();
        return this.items;
    }

    @action.bound addTodo() {
        this.items.push(todo.addTodo(this.todoText));
        this.todoText = '';
    }

    @action.bound toggleTodo(index) {
        this.items[index] = todo.toggleTodo(index);
    }
}
export default Todo;
