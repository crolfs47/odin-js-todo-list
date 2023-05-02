export const todos = [];
const newTodoForm = document.getElementById('new-todo-form');

export const todoFactory = (title, desc, dueDate, priority) => ({
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
  console.log(newTodo.title);
  // console.log(todos);
};

newTodoForm.addEventListener('submit', addTodo);

// export { todoFactory };
