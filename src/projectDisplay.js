import { projects, setCurrentProject, getCurrentProject } from './project';
import { loadPage } from './mainDisplay';

const newProjectButton = document.getElementById('new-project-button');
const projectFormModal = document.getElementById('project-form-modal');
const newProjectForm = document.getElementById('new-project-form');
const newProjectCancel = document.getElementById('new-project-cancel');
const projectList = document.getElementById('project-list');

const projectEditIcon = document.getElementById('project-edit-image');
const editProjectFormModal = document.getElementById('edit-project-form-modal');
const editProjectForm = document.getElementById('edit-project-form');
const editProjectCancel = document.getElementById('edit-project-cancel')
const projectDeleteIcon = document.getElementById('project-delete-image');

const clearActiveClass = () => {
  document.querySelectorAll('.project-item').forEach((projectItem) => {
    projectItem.classList.remove('active');
  });
};

const assignActiveClass = () => {
  document.querySelectorAll('.project-item').forEach((projectItem) => {
    if (projects[projectItem.dataset.index] === getCurrentProject()) {
      projectItem.classList.add('active');
    }
  });
};

const selectProject = () => {
  const projectItems = document.querySelectorAll('.project-item');
  projectItems.forEach((projectItem) => {
    projectItem.addEventListener('click', (e) => {
      clearActiveClass();
      const index = e.target.dataset.index;
      setCurrentProject(index);
      assignActiveClass();
      loadPage();
    });
  });
};

const showProjects = () => {
  projectList.innerHTML = '';
  for (let i = 0; i < projects.length; i += 1) {
    const projectItem = document.createElement('li');
    projectItem.classList.add('project-item');
    projectItem.setAttribute('data-index', i);
    projectItem.textContent = `${projects[i].name}`;

    projectList.appendChild(projectItem);
  }
  assignActiveClass();
  loadPage();
  selectProject();
};

newProjectButton.onclick = () => {
  projectFormModal.style.display = 'block';
};

newProjectForm.addEventListener('submit', () => {
  projectFormModal.style.display = 'none';
  showProjects();
});

newProjectCancel.onclick = () => {
  projectFormModal.style.display = 'none';
};

projectEditIcon.onclick = () => {
  editProjectFormModal.style.display = 'block';
  const currentProject = getCurrentProject();
  document.getElementById('edit-project-name').value = currentProject.name;
};

editProjectForm.addEventListener('submit', () => {
  editProjectFormModal.style.display = 'none';
  showProjects();
});

editProjectCancel.onclick = () => {
  editProjectFormModal.style.display = 'none';
};

projectDeleteIcon.onclick = () => {
  showProjects();
};

export { showProjects };
