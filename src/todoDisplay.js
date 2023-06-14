import { format } from 'date-fns';
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
    todoContainer.appendChild(todoDiv);
    todoDiv.classList.add('todo-item');
    todoDiv.setAttribute('id', `todo-${i}`);

    const todoCompleteDiv = document.createElement('div');
    todoCompleteDiv.classList.add('complete-checkbox');
    todoCompleteDiv.setAttribute('data-index', i);
    todoDiv.appendChild(todoCompleteDiv);
    todoCompleteDiv.innerHTML = `
      <input type="checkbox" name="complete" ${project.todos[i].completed ? 'checked' : ''}>`;

    const todoTextDiv = document.createElement('div');
    todoTextDiv.classList.add('todo-text');
    todoTextDiv.innerHTML = `
      <span class="todo-date">${format(new Date(formatDate(project.todos[i].dueDate)), 'PP')}</span>
      <span class="todo-title">${project.todos[i].priority}</span>
      <span class="todo-title">${project.todos[i].title}</span>
      <span class="todo-desc">${project.todos[i].desc}</span>`;
    todoDiv.appendChild(todoTextDiv);

    const todoBtns = document.createElement('div');
    todoBtns.classList.add('edit-delete-btns');
    todoDiv.appendChild(todoBtns);

    const todoEditIcon = document.createElement('img');
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
    todoDeleteIcon.classList.add('image-link');
    todoDeleteIcon.src = Delete;
    todoDeleteIcon.width = 15;
    todoBtns.appendChild(todoDeleteIcon);
    todoDeleteIcon.addEventListener('click', () => deleteTodo(i));
  }
};

const markComplete = () => {
  document.querySelectorAll('complete-checkbox').forEach((checkbox) => {
    checkbox.onclick = () => {
      console.log(checkbox.id);
    };
  });
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
