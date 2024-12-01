const todoInput = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

addBtn.addEventListener('click', () => {
  const todoText = todoInput.value.trim();
  if (todoText !== '') {
    const li = document.createElement('li');
    li.textContent = todoText;
    const deleteBtn = document.createElement('span');
    deleteBtn.textContent = '×';
    deleteBtn.classList.add('delete-btn');
    li.appendChild(deleteBtn);
    todoList.appendChild(li);
    todoInput.value = '';

    li.addEventListener('click', () => {
      li.classList.toggle('completed');
    });

    deleteBtn.addEventListener('click', () => {
      todoList.removeChild(li);
    });
  }
});