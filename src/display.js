import { format } from 'date-fns';
import { todos, deleteTodo } from './todo';
import { projects, setCurrentProject } from './project';

const newTodoForm = document.getElementById('new-todo-form');
const todoContainer = document.getElementById('todo-container');
const newProjectForm = document.getElementById('new-project-form');
const projectList = document.getElementById('project-list');

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

const selectProject = () => {
  const projectLinks = document.querySelectorAll('.project-item');
  projectLinks.forEach((projectLink) => {
    projectLink.addEventListener('click', (e) => {
      const index = e.target.id;
      setCurrentProject(index);
      console.log(index);
    });
  });
};

const showProjects = () => {
  projectList.innerHTML = '';
  for (let i = 0; i < projects.length; i += 1) {
    const projectItem = document.createElement('li');
    projectItem.classList.add('project-item');
    projectItem.setAttribute('id', `${i}`);
    projectItem.textContent = `${projects[i].name}`;

    projectList.appendChild(projectItem);
  }
  selectProject();
};

newTodoForm.addEventListener('submit', showTodos);
newProjectForm.addEventListener('submit', showProjects);

export { showProjects };
