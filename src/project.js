const projects = [];
let currentProject = '';
const newProjectForm = document.getElementById('new-project-form');
const projectDeleteImage = document.getElementById('project-delete-image');

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
  projects.splice(index, 1);
  console.log(projects);
};

newProjectForm.addEventListener('submit', addProject);
projectDeleteImage.addEventListener('click', deleteProject);

export {
  projectFactory, projects, setCurrentProject, getCurrentProject, setDefaultProject,
};
