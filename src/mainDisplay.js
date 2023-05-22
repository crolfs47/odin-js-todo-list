import { getCurrentProject, projects } from './project';
import { showTodos } from './todoDisplay';
import Edit from './images/edit.png';
import Delete from './images/delete.png';

const projectEditImage = document.getElementById('project-edit-image');
const projectDeleteImage = document.getElementById('project-delete-image');
const contentProjectTitle = document.getElementById('project-title');
const newTodoButton = document.getElementById('new-todo-button');

const loadProjectTitle = () => {
  if (projects.length > 0) {
    contentProjectTitle.textContent = getCurrentProject().name;
    projectEditImage.src = Edit;
    projectEditImage.width = 15;
    projectDeleteImage.src = Delete;
    projectDeleteImage.width = 15;
  } else {
    contentProjectTitle.textContent = '';
    projectEditImage.src = '';
    projectDeleteImage.src = '';
  }
};

const loadTodoContent = () => {
  if (projects.length > 0) {
    newTodoButton.style.display = 'block';
    showTodos();
  } else {
    newTodoButton.style.display = 'none';
  }
};

const loadPage = () => {
  loadProjectTitle();
  loadTodoContent();
};

export { loadPage };
