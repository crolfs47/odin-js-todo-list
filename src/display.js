import { todos } from './todo';

const newTodoForm = document.getElementById('new-todo-form');
const todoContainer = document.getElementById('todo-container');

const showTodos = () => {
  todoContainer.innerHTML = '';
  todos.forEach((todo) => {
    const todoItem = document.createElement('div');
    todoItem.classList.add('todo-item');
    todoItem.textContent = `${todo.title} - ${todo.desc}`;
    todoContainer.appendChild(todoItem);
  });
};

newTodoForm.addEventListener('submit', showTodos);
