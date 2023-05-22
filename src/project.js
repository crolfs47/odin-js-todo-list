const projects = [];
let currentProject = '';
const newProjectForm = document.getElementById('new-project-form');
const editProjectForm = document.getElementById('edit-project-form');
const projectDeleteIcon = document.getElementById('project-delete-image');

const projectFactory = (name) => ({
  name,
  todos: [],
});

const setCurrentProject = (index) => {
  currentProject = projects[index];
};

const setDefaultProject = () => {
  const defaultProject = projectFactory('General');
  projects.push(defaultProject);
  setCurrentProject(0);
};

const getCurrentProject = () => currentProject;

const addProject = (e) => {
  e.preventDefault();
  const name = document.getElementById('project-name').value;
  const newProject = projectFactory(name);
  projects.push(newProject);
  setCurrentProject(projects.length - 1);
};

const deleteProject = () => {
  currentProject = getCurrentProject();
  const index = projects.indexOf(currentProject);
  if (window.confirm('Are you sure you want to delete this project and all its tasks?')) {
    projects.splice(index, 1);
    setCurrentProject(0);
  }
};

const editProject = (e) => {
  e.preventDefault();
  currentProject = getCurrentProject();
  currentProject.name = document.getElementById('edit-project-name').value;
};

newProjectForm.addEventListener('submit', addProject);
editProjectForm.addEventListener('submit', editProject);
projectDeleteIcon.addEventListener('click', deleteProject);

export {
  projectFactory, projects, setCurrentProject, getCurrentProject, setDefaultProject,
};
