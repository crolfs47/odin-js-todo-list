import { format } from 'date-fns';
import { todos, deleteTodo } from './todo';
import { projects, setCurrentProject, getCurrentProject } from './project';

const contentTitle = document.getElementById('content-title');
const newTodoForm = document.getElementById('new-todo-form');
const todoContainer = document.getElementById('todo-container');
const newProjectForm = document.getElementById('new-project-form');
const projectList = document.getElementById('project-list');

const showTodos = () => {
  const project = getCurrentProject();
  todoContainer.innerHTML = '';
  for (let i = 0; i < project.todos.length; i += 1) {
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo-item');
    todoDiv.setAttribute('id', `todo-${i}`);
    todoDiv.textContent = `${project.todos[i].title} - ${project.todos[i].desc} - ${format(new Date(project.todos[i].dueDate), 'PP')} - ${project.todos[i].priority}`;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    todoDiv.appendChild(deleteButton);
    deleteButton.addEventListener('click', () => deleteTodo(i));

    todoContainer.appendChild(todoDiv);
  }
};

const loadPage = () => {
  contentTitle.textContent = getCurrentProject().name;
  showTodos();
};

const clearActiveClass = () => {
  document.querySelectorAll('.project-item').forEach((projectItem) => {
    projectItem.classList.remove('active');
  });
};

const assignActiveClass = () => {
  document.querySelectorAll('.project-item').forEach((projectItem) => {
    if (projects[projectItem.id] === getCurrentProject()) {
      projectItem.classList.add('active');
    }
  });
};

const selectProject = () => {
  const projectItems = document.querySelectorAll('.project-item');
  projectItems.forEach((projectItem) => {
    projectItem.addEventListener('click', (e) => {
      clearActiveClass();
      const index = e.target.id;
      setCurrentProject(index);
      assignActiveClass();
      loadPage(getCurrentProject());
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
  setCurrentProject(projects.length - 1);
  assignActiveClass();
  loadPage(getCurrentProject());
  selectProject();
};

newTodoForm.addEventListener('submit', showTodos);
newProjectForm.addEventListener('submit', showProjects);

export { showProjects, loadPage };
