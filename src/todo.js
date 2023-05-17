import { projects } from './project';

const todos = [];
const newTodoForm = document.getElementById('new-todo-form');

const todoFactory = (title, desc, dueDate, priority) => ({
  title,
  desc,
  dueDate,
  priority,
  completed: false,
});

const addTodo = (e) => {
  e.preventDefault();
  const title = document.getElementById('title').value;
  const description = document.getElementById('description').value;
  const date = document.getElementById('date').value;
  const priority = document.getElementById('priority').value;

  const newTodo = todoFactory(title, description, date, priority);
  todos.push(newTodo);

  // get current project
  // push todo to current project - project.todos.push(todo)
  const projectIndex = 0;
  projects[projectIndex].todos.push(newTodo);
  console.log(projects[0].todos);
};

const deleteTodo = (i) => {
  todos.splice(i, 1);
  const todoDiv = document.getElementById(`todo-${i}`);
  todoDiv.remove();
};

newTodoForm.addEventListener('submit', addTodo);

export { todoFactory, deleteTodo, todos };
