/**
 * Stwórz funkcję calculator, która przyjmuje dwa parametry typu
 * number i operator jako string ('+', '-', '*', '/').
 * Funkcja powinna zwracać wynik operacji. Użyj union type dla operatora.
 *
 */

type Operator = '+' | '-';

// Uzupełnij funkcję:
function calculator(a: number, b: number, operator: Operator /* uzupełnij typ */): number {
  // Implementacja
}

let sth: undefined;

it('Should calculate two numbers together', () => {
  expect(calculator(5, 3, '+')).toEqual(8);
  expect(calculator(10, 4, '-')).toEqual(6);
  expect(calculator(10, 2, '/')).toEqual(5);
  expect(calculator(2, 5, '*')).toEqual(10);
});
