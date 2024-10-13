// Skorzystaj z operatora typeof do stworzenia typu bazującego na stałej
// następnie stwórz funkcję, która akceptuje tylko ten konkretny typ jako argument

const colorConfig = {
  red: '#FF0000',
  green: '#00FF00',
  blue: '#0000FF',
};

// zdefiniuj typ ColorConfig
type ColorConfig = keyof typeof colorConfig; // 💡 nowe słowo kluczowe keyof

function getColorHex(color: ColorConfig): string {
  return colorConfig[color];
}

it('Should return proper value based on type', () => {
  expect(getColorHex('red')).toBe('#FF0000');
  expect(getColorHex('green')).toBe('#00FF00');
  // @ts-expect-error
  expect(getColorHex('yellow')).toBe(undefined);
});
