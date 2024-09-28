import './index.css';
import typescriptLogo from './typescript.svg';
import viteLogo from '/vite.svg';
// import { setupCounter } from './counter';
import { Example } from './examples/06-decorators/01-example-decorator';
import {
  BankAccount,
  log,
} from './examples/06-decorators/solutions/01-bank-account.solution';
import $ from 'jquery'; // :trollface

// $.ajax({
//   method: ''
// })

// const example = new Example();
// example.someMethod(5); // Loguje: Wywołanie metody: someMethod z argumentami: 5

const account = new BankAccount();
account.deposit(500);
account.withdraw(500);
console.log('Balance: ', account.getBalance());

// class JuniorBankAccount extends BankAccount {
//   constructor() {
//     super();
//     console.log('Console log from JuniorBankAccount');
//   }

//   // @log
//   // withdraw(amount: number) {
//   //   if (amount <= this.balance) {
//   //     this.balance -= amount;
//   //     return;
//   //   }

//   //   throw new Error('Not enough money!');
//   // }
// }
// const jba = new JuniorBankAccount();
// jba.deposit(200);
// jba.withdraw(100);
// console.log('Balance: ', jba.getBalance());

// document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
//   <div>
//     <h1 class="text-3xl font-bold underline">
//       Hello world!
//     </h1>
//     <a href="https://vitejs.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://www.typescriptlang.org/" target="_blank">
//       <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
//     </a>
//     <h1>Vite + TypeScript</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite and TypeScript logos to learn more
//     </p>
//   </div>
// `;

// setupCounter(document.querySelector<HTMLButtonElement>('#counter')!);
