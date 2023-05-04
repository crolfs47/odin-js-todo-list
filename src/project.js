const projects = [];
const newProjectForm = document.getElementById('new-project-form');

const projectFactory = (name) => ({
  name,
  todos: [],
});

const defaultProject = projectFactory('General');
projects.push(defaultProject);

const addProject = (e) => {
  e.preventDefault();
  const name = document.getElementById('project-name').value;
  const newProject = projectFactory(name);
  projects.push(newProject);
  // console.log(newProject);
  console.log(projects);
};

newProjectForm.addEventListener('submit', addProject);

export { projectFactory, projects };
