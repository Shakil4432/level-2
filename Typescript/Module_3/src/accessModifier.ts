class BankAccount {
  readonly id: number;
  public name: string;
  protected _balance: number;
  constructor(id: number, name: string, balance: number) {
    this.id = id;
    this.name = name;
    this._balance = balance;
  }

  deposit(amount: number) {
    return (this._balance = amount + this._balance);
  }

  getBalance() {
    return this._balance;
  }
}

class StudentAcccount extends BankAccount {
  test() {
    this._balance;
  }
}

const account1 = new BankAccount(34554, "Shakil", 8867655);
console.log(account1.deposit(57788544));
console.log(account1.getBalance());
