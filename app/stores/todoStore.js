const todoList = [
    { id: 0, title: 'Do this task', complete: false }
];

function getTodoList() {
    return todoList;
}

function addTodo(item) {
    const todo = {
        id: todoList.length + 1,
        title: item,
        complete: false
    };
    todoList.push(todo);
    return todo;
}

function toggleTodo(index) {
    todoList[index].complete = !todoList[index].complete;
    return todoList[index];
}

function deleteTodo(index) {
    todoList.splice(index, 1);
    return index;
}

module.exports = {
    getTodoList,
    addTodo,
    toggleTodo,
    deleteTodo
};
