import { getCurrentProject } from './project';
import { showTodos } from './todoDisplay';

const contentTitle = document.getElementById('content-title');

const loadPage = () => {
  contentTitle.textContent = getCurrentProject().name;
  showTodos();
};

export { loadPage };
