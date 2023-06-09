import { getCurrentProject, projects } from './project';

let todoIndex = '';
const newTodoForm = document.getElementById('new-todo-form');
const editTodoForm = document.getElementById('edit-todo-form');

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

  const currentProject = getCurrentProject();
  currentProject.todos.push(newTodo);
  localStorage.setItem('projects', JSON.stringify(projects));
  newTodoForm.reset();
};

const getTodoIndex = (i) => {
  todoIndex = i;
};

const deleteTodo = (i) => {
  const currentProject = getCurrentProject();
  if (window.confirm('Are you sure you want to delete this task?')) {
    currentProject.todos.splice(i, 1);
    localStorage.setItem('projects', JSON.stringify(projects));
    const todoDiv = document.getElementById(`todo-${i}`);
    todoDiv.remove();
  }
};

const editTodo = (e) => {
  e.preventDefault();
  const currentProject = getCurrentProject();
  const todo = currentProject.todos[todoIndex];
  todo.title = document.getElementById('edit-title').value;
  todo.desc = document.getElementById('edit-description').value;
  todo.dueDate = document.getElementById('edit-date').value;
  todo.priority = document.getElementById('edit-priority').value;
  localStorage.setItem('projects', JSON.stringify(projects));
};

const markComplete = (i) => {
  const currentProject = getCurrentProject();
  currentProject.todos[i].completed = !currentProject.todos[i].completed;
  localStorage.setItem('projects', JSON.stringify(projects));
};

newTodoForm.addEventListener('submit', addTodo);
editTodoForm.addEventListener('submit', editTodo);

export {
  todoFactory, deleteTodo, getTodoIndex, markComplete,
};
