import './style.css';

const toDoList = document.getElementById('to-do-list');
const tasks = [
  {
	description: 'wash the dishes',
	completed: true,
	index: 0,
  },
  {
	description: 'complete To Do List project',
	completed: false,
	index: 1,
  } 
];

const createToDoList = () => {
  tasks.sort((a, b) => a.index - b.index);
  tasks.map((t) => {
	const taskContainer = document.createElement('div');
	taskContainer.classList.add('task-container','padding-l-r');
	const checkContainer = document.createElement('div');
	checkContainer.classList.add('check-container');
	const checkBox = document.createElement('input');
	checkBox.classList.add('check-box');
	checkBox.setAttribute('type','checkbox');
	if(t.completed){
      checkBox.setAttribute('checked', 'checked');
    }
	checkContainer.appendChild(checkBox);
    const taskName = document.createElement('h5');
	taskName.innerHTML = t.description;
	checkContainer.appendChild(taskName);
	taskContainer.appendChild(checkContainer);
	const moreBtn = document.createElement('button');
	moreBtn.classList.add('task-btn');
	const moreIcon = document.createElement('i');
	moreIcon.classList.add('material-icons','more-icon');
	moreIcon.innerHTML = 'more_vert';
	moreBtn.appendChild(moreIcon);
	taskContainer.appendChild(moreBtn);
	toDoList.appendChild(taskContainer);
	const divider = document.createElement('hr');
	if(t.index === (tasks.length - 1)){
      divider.classList.add('hr-ignore-btm');
	  }
	  toDoList.appendChild(divider);
  });
};

createToDoList();