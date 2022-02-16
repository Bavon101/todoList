import Tasks from './tasks.js';

const task = new Tasks();
const form = document.getElementById('form');
const toDoList = document.getElementById('to-do-list');
const createDefault = () => {
  toDoList.innerHTML = 'There are no task available';
};

const updateEdit = (t = {}, refresh = false) => {
  task.edit(t.index, t.completed, t.description);
  if (refresh) {
    // eslint-disable-next-line no-use-before-define
    createToDoList();
  }
};

const removeTask = (id) => {
  task.delete(id);
  // eslint-disable-next-line no-use-before-define
  createToDoList();
};

const getEditField = (id) => {
  const t = task.tasks.filter((t) => t.id === id)[0];
  const container = document.getElementById(id);
  container.style.backgroundColor = 'rgb(252, 252, 243)';
  const checkContainer = document.createElement('div');
  checkContainer.classList.add('check-container');
  const checkBox = document.createElement('input');
  checkBox.classList.add('check-box');
  checkBox.setAttribute('type', 'checkbox');
  if (t.completed) {
    checkBox.setAttribute('checked', 'checked');
  }
  checkBox.addEventListener('change', (e) => {
    t.completed = e.currentTarget.checked;
    updateEdit(t, true);
  });
  checkContainer.appendChild(checkBox);
  const editForm = document.createElement('form');
  const editInput = document.createElement('input');
  editInput.classList.add('edit-input');
  editInput.style.backgroundColor = 'rgb(252, 252, 243)';
  editInput.value = t.description;
  editForm.appendChild(editInput);
  editInput.focus();
  editForm.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      if (editInput.value.length > 0) {
        t.description = editInput.value;
        updateEdit(t, true);
      } else {
        // eslint-disable-next-line no-alert
        alert('You cannot save an empty task.');
      }
    }
  });
  const enterIcon = document.createElement('span');
  enterIcon.classList.add('material-icons', 'enter-key-icon');
  enterIcon.innerHTML = 'keyboard_return';
  editForm.appendChild(enterIcon);
  checkContainer.appendChild(editForm);
  const deleteBtn = document.createElement('button');
  deleteBtn.classList.add('delete-btn');
  const deleteIcon = document.createElement('i');
  deleteIcon.classList.add('material-icons', 'more-icon');
  deleteIcon.innerHTML = 'delete';
  deleteBtn.appendChild(deleteIcon);
  deleteBtn.onclick = () => { removeTask(id); };
  container.replaceChildren();
  container.appendChild(checkContainer);
  container.appendChild(deleteBtn);
};
const createToDoList = () => {
  toDoList.replaceChildren();
  if (task.tasks.length === 0) {
    createDefault();
    return;
  }
  task.tasks.sort((a, b) => a.index - b.index);
  task.tasks.map((t) => {
    const taskContainer = document.createElement('div');
    taskContainer.classList.add('task-container', 'padding-l-r');
    taskContainer.setAttribute('id', t.id);
    const checkContainer = document.createElement('div');
    checkContainer.classList.add('check-container');
    const checkBox = document.createElement('input');
    checkBox.classList.add('check-box');
    checkBox.setAttribute('type', 'checkbox');
    if (t.completed) {
      checkBox.setAttribute('checked', 'checked');
    }
    checkBox.addEventListener('change', (e) => {
      t.completed = e.currentTarget.checked;
      updateEdit(t, true);
    });
    checkContainer.appendChild(checkBox);
    const taskName = document.createElement('h5');
    taskName.innerHTML = t.description;
    checkContainer.appendChild(taskName);
    taskContainer.appendChild(checkContainer);
    const moreBtn = document.createElement('button');
    moreBtn.classList.add('task-btn');
    const moreIcon = document.createElement('i');
    moreIcon.classList.add('material-icons', 'more-icon');
    moreIcon.innerHTML = 'more_vert';
    moreBtn.onclick = () => { getEditField(t.id); };
    moreBtn.appendChild(moreIcon);
    taskContainer.appendChild(moreBtn);
    toDoList.appendChild(taskContainer);
    const divider = document.createElement('hr');
    if ((t.index - 1) === (task.tasks.length - 1)) {
      divider.classList.add('hr-ignore-btm');
    }
    toDoList.appendChild(divider);
    return toDoList;
  });
};
const addNew = () => {
  const description = document.getElementById('task-input').value;
  task.add(description);
  form.reset();
  createToDoList();
};
const getTasks = () => {
  if (localStorage.getItem('tasks')) {
    task.get();
    createToDoList();
  } else {
    createDefault();
  }
};

const init = () => {
  getTasks();
  document.getElementById('clear-btn').onclick = () => { task.clearCompleted(); createToDoList(); };
  document.getElementById('refresh-btn').onclick = () => { getTasks(); };
  form.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      addNew();
    }
  });
};

export default init;