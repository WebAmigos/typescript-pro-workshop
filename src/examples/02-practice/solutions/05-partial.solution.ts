// stwórz typ, który oznaczy wszystkie właściwości internejsu User jako opcjonalne

import { type Equal, type Expect } from '../../../helpers/type-utils';

interface User {
  id: number;
  name: string;
  email: string;
}

type PartialUser = Partial<User>; // ⬅️ Twój kod

// it('Should create optional properties', () => {
//   const partialUser: PartialUser = { name: 'Bob' };

//   expectTypeOf(partialUser).toEqualTypeOf<{ sth: string }>();

//   type Test = {
//     object: {
//       string: string;
//       object: {
//         object: {
//           number: number;
//         };
//       };
//     };
//   };

//   type TestNotEqual = {
//     object: {
//       number: number; // registers the number as an error since it should be a string, which is expected
//       object: {
//         object: {
//           number: number;
//         };
//       };
//     };
//   };

//   expectTypeOf<Test>().toEqualTypeOf<TestNotEqual>();

//   // expectTypeOf(partialUser).toMatchTypeOf<{ sth: string }>();
//   // type tests = [Expect<Equal<typeof partialUser, { id?: number; cebula?: string; email?: string }>>];
// });

test('type', () => {
  expectTypeOf(1).toEqualTypeOf({ a: 2 });
  // expect(1).toBe(2); // not executed
});
