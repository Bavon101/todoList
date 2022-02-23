import Tasks from '../src/modules/tasks.js';
import LocalStorageMock from '../__mocks__/localStorage.js';
import * as start from '../src/modules/view_controller.js';

global.localStorage = new LocalStorageMock();
document.body.innerHTML = '<div id="to-do-list"></div>';
const tasks = new Tasks();
describe('Add Task', () => {
  test('One task add length should be 1', () => {
    tasks.add('desc');
    expect(tasks.tasks.length).toBe(1);
  });
});

describe('Add Tasks to DOM', () => {
  test('Ones task added list should be having 1 item', () => {
    start.createToDoList(tasks);
    const taskCards = document.getElementById('to-do-list');
    const list = taskCards.childNodes;
    expect(list.length).toBe(1);
  });
});

describe('Remove task from task list', () => {
  test('One task removed length should be 0', () => {
    const { id } = tasks.tasks[0];
    const element = document.getElementById(id);
    element.parentNode.removeChild(element);
    expect(tasks.delete(id)).toBe(id);
  });
});

describe('Check is also  DOM on task delete', () => {
  test('One task removed length should be 0', () => {
    const taskCards = document.getElementById('to-do-list');
    const list = taskCards.childNodes;
    expect(list.length).toBe(0);
  });
});