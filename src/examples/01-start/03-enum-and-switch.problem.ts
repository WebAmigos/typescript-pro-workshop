/**
 * Stwórz enum DayOfWeek z dniami tygodnia.
 * Następnie napisz funkcję getWorkingHours, która
 * przyjmuje dzień tygodnia i zwraca liczbę godzin pracy
 * (np. 8 dla dni roboczych, 0 dla weekendu).
 */

// Zdefiniuj enum DayOfWeek

// Zaimplementuj funkcję getWorkingHours
function getWorkingHours(day: DayOfWeek): number {}

// Przykładowe użycie:
it('Should return valid values for days of week', () => {
  expect(getWorkingHours(DayOfWeek.Monday)).toEqual(8);
  expect(getWorkingHours(DayOfWeek.Saturday)).toEqual(0);
});
