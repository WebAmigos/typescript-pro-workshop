/**
 * Stwórz interfejs Task z właściwościami:
 * id (number), title (string), completed (boolean).
 * Następnie utwórz tablicę zadań i funkcję do dodawania
 * nowych zadań.
 */

// Zdefiniuj interfejs Task
interface Task {
  id: number;
  title: string;
  complete: boolean;
}

// Utwórz kolekcję tasks
// const tasks: Task[] = [];
// const tasks = new Set();

// Zaimplementuj funkcję addTask
function addTask(title: string): void {}

it('Should have proper values', () => {
  addTask('Learn TypeScript');
  expect(tasks.size).toEqual(1);
});
