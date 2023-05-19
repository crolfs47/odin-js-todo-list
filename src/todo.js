import { getCurrentProject } from './project';

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

  const currentProject = getCurrentProject();
  currentProject.todos.push(newTodo);
};

const deleteTodo = (i) => {
  const currentProject = getCurrentProject();
  currentProject.todos.splice(i, 1);
  const todoDiv = document.getElementById(`todo-${i}`);
  todoDiv.remove();
};

newTodoForm.addEventListener('submit', addTodo);

export { todoFactory, deleteTodo, todos };
