import { BankAccount } from './examples/06-decorators/solutions/01-bank-account.solution';

describe('Bank account functionality', () => {
  it('should deposit amount', () => {
    const account = new BankAccount();
    account.deposit(100);

    expect(account.getBalance()).toBe(100);
  });

  it('should withdraw money', () => {
    const account = new BankAccount();
    account.deposit(100);
    account.withdraw(60);

    expect(account.getBalance()).toEqual(40);
  });

  it('should throw error', () => {
    const account = new BankAccount();
    account.deposit(100);

    expect(() => account.withdraw(120)).toThrowError(/Not enough money!/i);
  });
});
