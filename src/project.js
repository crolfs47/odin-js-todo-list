const projects = [];
const newProjectForm = document.getElementById('new-project-form');

const projectFactory = (name) => ({
  name,
  todos: [],
});

const defaultProject = projectFactory('General');
projects.push(defaultProject);
let currentProject = projects[0];

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

const getCurrentProject = () => currentProject;

newProjectForm.addEventListener('submit', addProject);

export { projectFactory, projects, setCurrentProject, getCurrentProject };
