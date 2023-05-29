import { format, parseISO } from 'date-fns';
import { getCurrentProject } from './project';
import { deleteTodo, getTodoIndex } from './todo';
import Edit from './images/edit.png';
import Delete from './images/delete.png';

const newTodoButton = document.getElementById('new-todo-button');
const todoFormModal = document.getElementById('todo-form-modal');
const newTodoForm = document.getElementById('new-todo-form');
const newTodoCancel = document.getElementById('new-todo-cancel');
const todoContainer = document.getElementById('todo-container');

const editTodoFormModal = document.getElementById('edit-todo-form-modal');
const editTodoForm = document.getElementById('edit-todo-form');
const editTodoCancel = document.getElementById('edit-todo-cancel');

const formatDate = (date) => `${date}T00:00:00`;

const showTodos = () => {
  const project = getCurrentProject();
  todoContainer.innerHTML = '';
  for (let i = 0; i < project.todos.length; i += 1) {
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo-item');
    todoDiv.setAttribute('id', `todo-${i}`);
    todoDiv.textContent = `${project.todos[i].title} - ${project.todos[i].desc} - ${format(new Date(formatDate(project.todos[i].dueDate)), 'PP')} - ${project.todos[i].priority}`;

    const todoBtns = document.createElement('div');
    todoBtns.classList.add('edit-delete-btns');
    todoDiv.appendChild(todoBtns);

    const todoEditIcon = document.createElement('img');
    todoEditIcon.setAttribute('id', 'todo-edit-image');
    todoEditIcon.classList.add('image-link');
    todoEditIcon.src = Edit;
    todoEditIcon.width = 15;
    todoBtns.appendChild(todoEditIcon);
    todoEditIcon.addEventListener('click', () => {
      editTodoFormModal.style.display = 'block';
      document.getElementById('edit-title').value = project.todos[i].title;
      document.getElementById('edit-description').value = project.todos[i].desc;
      document.getElementById('edit-date').value = project.todos[i].dueDate;
      document.getElementById('edit-priority').value = project.todos[i].priority;
      getTodoIndex(i);
    });

    const todoDeleteIcon = document.createElement('img');
    todoDeleteIcon.setAttribute('id', 'todo-delete-image');
    todoDeleteIcon.classList.add('image-link');
    todoDeleteIcon.src = Delete;
    todoDeleteIcon.width = 15;
    todoBtns.appendChild(todoDeleteIcon);
    todoDeleteIcon.addEventListener('click', () => deleteTodo(i));

    todoContainer.appendChild(todoDiv);
  }
};

newTodoButton.onclick = () => {
  todoFormModal.style.display = 'block';
};

newTodoForm.addEventListener('submit', () => {
  todoFormModal.style.display = 'none';
  showTodos();
});

newTodoCancel.onclick = () => {
  todoFormModal.style.display = 'none';
};

editTodoForm.addEventListener('submit', () => {
  editTodoFormModal.style.display = 'none';
  showTodos();
});

editTodoCancel.onclick = () => {
  editTodoFormModal.style.display = 'none';
};

export { showTodos };
