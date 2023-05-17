import { format } from 'date-fns';
import { todos, deleteTodo } from './todo';
import { projects } from './project';

const newTodoForm = document.getElementById('new-todo-form');
const todoContainer = document.getElementById('todo-container');
const newProjectForm = document.getElementById('new-project-form');
const projectContainer = document.getElementById('project-container');

const showTodos = () => {
  todoContainer.innerHTML = '';
  for (let i = 0; i < todos.length; i += 1) {
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo-item');
    todoDiv.setAttribute('id', `todo-${i}`);
    todoDiv.textContent = `${todos[i].title} - ${todos[i].desc} - ${format(new Date(todos[i].dueDate), 'PP')} - ${todos[i].priority}`;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    todoDiv.appendChild(deleteButton);
    deleteButton.addEventListener('click', () => deleteTodo(i));

    todoContainer.appendChild(todoDiv);
  }
};

const showProjects = () => {
  projectContainer.innerHTML = '';
  for (let i = 0; i < projects.length; i += 1) {
    const projectDiv = document.createElement('div');
    projectDiv.classList.add('project-item');
    projectDiv.setAttribute('id', `project-${i}`);
    projectDiv.textContent = `${projects[i].name}`;

    projectContainer.appendChild(projectDiv);
  }
};

newTodoForm.addEventListener('submit', showTodos);
newProjectForm.addEventListener('submit', showProjects);

export { showProjects };
