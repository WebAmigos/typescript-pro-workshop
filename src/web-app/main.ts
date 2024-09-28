import { v4 } from 'uuid';

document.querySelector<HTMLParagraphElement>('#para')!.innerText = `Hello world:  ${v4()}`;
