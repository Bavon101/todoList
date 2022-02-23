import Tasks from "../src/modules/tasks.js";
import LocalStorageMock from "../__mocks__/localStorage.js";
global.localStorage = new LocalStorageMock();
const tasks = new Tasks();
test("Add tasks changes length", () => {
  tasks.add("desc");
  expect(tasks.tasks.length).toBe(1);
});

test("Remove task reduces length by 1", () => {
  tasks.delete(tasks.tasks[0]["id"]);
  expect(tasks.tasks.length).toBe(0);
});
