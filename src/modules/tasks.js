export default class Tasks {
  tasks = [];

  add = (description) => {
    if (this.taskExists(description)) {
      return;
    }
    const task = {
      id: Date.now(),
      description,
      index: this.tasks.length + 1,
      completed: false,
    };
    this.tasks.push(task);
    this.saveTasks();
  };

  saveTasks = () => {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  };

  delete = (id) => {
    this.tasks = this.tasks.filter((t) => t.id !== id);
    this.reIndex();
    this.saveTasks();
  };

  edit = (index, completed = false, description) => {
    this.tasks[index - 1].description = description;
    this.tasks[index - 1].index = index;
    this.tasks[index - 1].completed = completed;
    this.saveTasks();
  };

  get = () => {
    this.tasks = JSON.parse(localStorage.getItem('tasks'));
  };

  reIndex = (sort = true) => {
    if (sort) {
      this.tasks.sort((a, b) => a.index - b.index);
    }
    for (let i = 0; i < this.tasks.length; i += 1) {
      this.tasks[i].index = i + 1;
    }
  }

  clearCompleted = () => {
    this.tasks = this.tasks.filter((t) => !t.completed);
    this.reIndex();
    this.saveTasks();
  }

  taskExists = (d) => {
    d = d.toLowerCase().trim();
    const e = this.tasks.filter((t) => t.description.toLowerCase().trim() === d);
    return e.length > 0;
  }

  reOrder = (icoming, outgoing) => {
    const dragged = this.tasks.filter((t) => t.id === icoming)[0];
    const beingReplaced = this.tasks.filter((t) => t.id === outgoing)[0];
    this.tasks.splice(dragged.index - 1, 1);
    this.tasks.splice(beingReplaced.index - 1, 0, dragged);
    this.reIndex(false);
    this.saveTasks();
  }
}