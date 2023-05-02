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

  const todo = todoFactory(title, description, date, priority);
  todos.push(todo);
  console.log(todo.title);
  console.log(todos);
};

newTodoForm.addEventListener('submit', addTodo);

export { todoFactory };
