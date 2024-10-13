// Skorzystaj z operatora typeof do stworzenia typu bazującego na stałej
// następnie stwórz funkcję, która akceptuje tylko ten konkretny typ jako argument

const colorConfig = {
  red: "#FF0000",
  green: "#00FF00",
  blue: "#0000FF",
};

// zdefiniuj typ ColorConfig
type ColorConfig = // ⬅️ Twój kod

function getColorHex(color: ColorConfig): string {
  // Implementacja
}

it('Should return proper value based on type', () => {
  expect(getColorHex("red")).toBe('#FF0000');
  expect(getColorHex("green")).toBe('#00FF00');
  // @ts-expect-error
  expect(getColorHex("yellow")).toBe(undefined);
});
