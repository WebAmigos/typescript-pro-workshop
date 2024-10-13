// stwórz funkcję,która przyjmuje jako argument obiekt oraz jego klucz
// a następnie zwraca wartość przypisaną do tego klucza

// nie przejmuj się na razie zapisem funkcji generucznej :)
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  // implementacja
}

it('Should return proper value based on object key', () => {
  const person = { name: 'Alice', age: 30, city: 'New York' };

  expect(getProperty(person, 'name')).toBe('Alice');
  expect(getProperty(person, 'age')).toBe(30);
  expect(getProperty(person, 'city')).toBe('New York');
  // @ts-expect-error
  expect(getProperty(person, 'gender')).toBe(undefined);
});
