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
const tasks = new Set<Task>();

// Zaimplementuj funkcję addTask
function addTask(title: string): void {
  // tasks.push({
  //   id: 1,
  //   title,
  //   complete: false
  // });
  tasks.add({
    id: 1,
    title,
    complete: false,
  });
}

// Przykładowe użycie:
it('Should have proper values', () => {
  addTask('Learn TypeScript');
  expect(tasks.size).toEqual(1);
});

// {
//   key: string | Task;
// }

type CacheEntry = Record<string, Task>;

const cache: CacheEntry = {
  one: {
    id: 123,
    title: 'Kupić mleko',
    complete: false,
  },
};

const newTasks = new Map<string, Task>();
// newTasks.
newTasks.set('two', {
  id: 2,
  title: 'Kupić mleko',
  complete: false,
});

class MyCache {
  // constructor(private cache: CacheEntry) {}
  constructor(private cache: Map<string, Task>) {}

  add(key: string, value: Task) {
    this.cache.set(key, value);
  }
}
