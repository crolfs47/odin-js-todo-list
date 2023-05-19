import { getCurrentProject } from './project';
import { showTodos } from './todoDisplay';
import Edit from './images/edit.png';
import Delete from './images/delete.png';

const projectEditImage = document.getElementById('project-edit-image');
const projectDeleteImage = document.getElementById('project-delete-image');
const contentProjectTitle = document.getElementById('project-title');

const loadProjectTitle = () => {
  contentProjectTitle.textContent = getCurrentProject().name;
  projectEditImage.src = Edit;
  projectEditImage.width = 15;
  projectDeleteImage.src = Delete;
  projectDeleteImage.width = 15;
};

const loadPage = () => {
  loadProjectTitle();
  showTodos();
};

export { loadPage };
