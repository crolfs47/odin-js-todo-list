const newProjectForm = document.getElementById('new-project-form');

const projectFactory = (name) => ({
  name,
  todos: [],
});

const addProject = (e) => {
  e.preventDefault();
  const name = document.getElementById('project-name').value;
  const newProject = projectFactory(name);
  console.log(newProject);
};

newProjectForm.addEventListener('submit', addProject);

export { projectFactory };
