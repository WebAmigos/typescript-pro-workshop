// stwórz typ, który oznaczy wszystkie właściwości internejsu User jako opcjonalne

import { type Equal, type Expect } from '../../helpers/type-utils';

interface User {
  id: number;
  name: string;
  email: string;
}

type PartialUser = ; // ⬅️ Twój kod

it('Should create optional properties', () => {
  const partialUser: PartialUser = { name: 'Bob' };

  type tests = [Expect<Equal<typeof partialUser, { id?: number; name?: string; email?: string }>>];
});
