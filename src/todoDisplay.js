import { format } from 'date-fns';
import { getCurrentProject } from './project';
import { deleteTodo } from './todo';
import Edit from './images/edit.png';
import Delete from './images/delete.png';

const newTodoButton = document.getElementById('new-todo-button');
const todoFormModal = document.getElementById('todo-form-modal');
const newTodoForm = document.getElementById('new-todo-form');
const newTodoCancel = document.getElementById('new-todo-cancel');
const todoContainer = document.getElementById('todo-container');

const showTodos = () => {
  const project = getCurrentProject();
  todoContainer.innerHTML = '';
  for (let i = 0; i < project.todos.length; i += 1) {
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo-item');
    todoDiv.setAttribute('id', `todo-${i}`);
    todoDiv.textContent = `${project.todos[i].title} - ${project.todos[i].desc} - ${format(new Date(project.todos[i].dueDate), 'PP')} - ${project.todos[i].priority}`;

    const todoBtns = document.createElement('div');
    todoBtns.classList.add('edit-delete-btns');
    todoDiv.appendChild(todoBtns)
    
    const editIcon = document.createElement('img');
    editIcon.src = Edit;
    editIcon.width = 15;
    todoBtns.appendChild(editIcon);
    // editIcon.addEventListener('click', () => editTodo(i));

    const deleteIcon = document.createElement('img');
    deleteIcon.src = Delete;
    deleteIcon.width = 15;
    todoBtns.appendChild(deleteIcon);
    deleteIcon.addEventListener('click', () => deleteTodo(i));

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

export { showTodos };
