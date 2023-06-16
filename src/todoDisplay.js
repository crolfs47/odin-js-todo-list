import { format } from 'date-fns';
import { getCurrentProject } from './project';
import { deleteTodo, getTodoIndex, markComplete } from './todo';
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

const addCompleteListener = () => {
  document.querySelectorAll("input[type='checkbox']").forEach((checkbox) => {
    checkbox.addEventListener('change', () => {
      markComplete(checkbox.dataset.index);
      const todoTextDiv = document.getElementById(`todo-text-${checkbox.dataset.index}`);
      todoTextDiv.classList.toggle('completed');
    });
  });
};

const showPriority = (priority) => {
  let priorityHTML = '';
  if (priority === 'high') {
    priorityHTML = `<span class="icon has-text-danger">
                          <i class="fas fa-exclamation-triangle"></i>
                        </span>`;
  } else if (priority === 'medium') {
    priorityHTML = `<span class="icon has-text-warning">
                          <i class="fas fa-exclamation-triangle"></i>
                        </span>`;
  } else if (priority === 'low') {
    priorityHTML = `<span class="icon has-text-success">
                          <i class="fas fa-exclamation-triangle"></i>
                        </span>`;
  }
  return priorityHTML;
};

const showTodos = () => {
  const project = getCurrentProject();
  todoContainer.innerHTML = '';
  for (let i = 0; i < project.todos.length; i += 1) {
    const todoDiv = document.createElement('div');
    todoContainer.appendChild(todoDiv);
    todoDiv.classList.add('todo-item', 'box');

    todoDiv.setAttribute('id', `todo-${i}`);

    const todoCompleteDiv = document.createElement('div');
    todoCompleteDiv.classList.add('complete-checkbox');
    todoDiv.appendChild(todoCompleteDiv);
    todoCompleteDiv.innerHTML = `
      <input type="checkbox" name="complete" data-index="${i}" ${project.todos[i].completed ? 'checked' : ''}>`;

    const todoTextDiv = document.createElement('div');
    todoTextDiv.classList.add('todo-text');
    if (project.todos[i].completed) {
      todoTextDiv.classList.add('completed');
    }
    todoTextDiv.setAttribute('id', `todo-text-${i}`);
    todoTextDiv.innerHTML = `
        <div class="todo-title-desc">
          <span class="todo-title has-text-weight-semibold">${project.todos[i].title}</span>
          <span class="todo-desc is-size-7">${project.todos[i].desc}</span>
        </div>
        <div class="todo-date-priority">  
          <span class="todo-date">${format(new Date(formatDate(project.todos[i].dueDate)), 'P')}</span>
          <span class="todo-priority">${showPriority(project.todos[i].priority)}</span>
        </div>`;
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
  addCompleteListener();
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
