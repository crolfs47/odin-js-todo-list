const projects = [];
let currentProject = '';
const newProjectForm = document.getElementById('new-project-form');

const projectFactory = (name) => ({
  name,
  todos: [],
});

const addProject = (e) => {
  e.preventDefault();
  const name = document.getElementById('project-name').value;
  const newProject = projectFactory(name);
  projects.push(newProject);
  console.log(currentProject);
};

const setCurrentProject = (index) => {
  currentProject = projects[index];
};

const setDefaultProject = () => {
  const defaultProject = projectFactory('General');
  projects.push(defaultProject);
  setCurrentProject(0);
};

const getCurrentProject = () => currentProject;

newProjectForm.addEventListener('submit', addProject);

export {
  projectFactory, projects, setCurrentProject, getCurrentProject, setDefaultProject,
};
