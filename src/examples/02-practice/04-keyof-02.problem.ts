// zaimplementuj funkcję, która przyjmuje obiekt i zwraca tablicę z jego kluczami

// nie przejmuj się na razie słowem extends :)
function getObjectKeys<T extends object>(obj: T): Array<keyof T> {
  // Implementacja
}

it('Should return proper keys', () => {
  const testObj1 = { a: 1, b: 'two', c: true };
  const testObj2 = { x: 'x', y: 'y' };

  expect(getObjectKeys(testObj1)).toStrictEqual(['a', 'b', 'c']);
  expect(getObjectKeys(testObj2)).toStrictEqual(['x', 'y']);
});
