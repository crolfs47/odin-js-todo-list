import { format } from 'date-fns';
import { todos } from './todo';

const newTodoForm = document.getElementById('new-todo-form');
const todoContainer = document.getElementById('todo-container');

const showTodos = () => {
  todoContainer.innerHTML = '';
  todos.forEach((todo) => {
    const todoItem = document.createElement('div');
    todoItem.classList.add('todo-item');
    todoItem.textContent = `${todo.title} - ${todo.desc} - ${format(new Date(todo.dueDate), 'PP')} - ${todo.priority}`;
    todoContainer.appendChild(todoItem);
  });
};

newTodoForm.addEventListener('submit', showTodos);
