// Stwórz funkcję, która przyjmuje argument oraz zwraca tekst opisujący
// typ argumentu za pomocą operatora typeof.

function getTypeDescription(arg: any): string {
  // Implementacja
}

it('Should return proper value based on type', () => {
  expect(getTypeDescription(42)).toBe('number');
  expect(getTypeDescription('Hello')).toBe('string');
  expect(getTypeDescription(true)).toBe('boolean');
  expect(getTypeDescription({})).toBe('object');
  expect(getTypeDescription([])).toBe('object');
  expect(getTypeDescription(null)).toBe('object');
  expect(getTypeDescription(undefined)).toBe('undefined');
});
