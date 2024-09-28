/**
 * Napisz generyczną funkcję firstElement, która
 * przyjmuje tablicę dowolnego typu i zwraca pierwszy
 * element tej tablicy (lub undefined, jeśli tablica jest pusta).
 */

// Zaimplementuj funkcję firstElement
const firstElement = <T>(arg: T[]) => {};

it('should return first element', () => {
  expect(firstElement([1, 2, 3])).toStrictEqual(1);
  expect(firstElement(['a', 'b', 'c'])).toStrictEqual('a');
  expect(firstElement([])).toStrictEqual(undefined);
});
