console.log('Hello Typescript');

interface Person {
  firstName: string;
  lastName: string;
}

const greeter = (person: Person) => {
  return `Hello, ${person.firstName} ${person.lastName}`;
};

const user = { firstName: 'Jan', lastName: 'Kowalski' };

if (typeof document !== 'undefined') {
  document.body.textContent = greeter(user);
}
