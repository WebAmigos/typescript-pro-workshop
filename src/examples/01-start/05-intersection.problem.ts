/**
 * Stwórz dwa interfejsy: Name (z właściwością name: string)
 * i Age (z właściwością age: number). Następnie utwórz typ
 * Person jako przecięcie tych dwóch interfejsów.
 * Na koniec napisz funkcję introducePerson, która przyjmuje
 * obiekt typu Person i zwraca string z przedstawieniem osoby.
 */

// Zdefiniuj interfejsy Name i Age
interface Name {}
interface Age {}

// Utwórz typ Person
// type Person

// Zaimplementuj funkcję introducePerson
function introducePerson(person: Person): string {
  // Implementacja
}

const john: Person = { name: 'John', age: 30 };

it('Should return full string', () => {
  expect(introducePerson(john)).toEqual("My name is John and I'm 30 years old");
});
