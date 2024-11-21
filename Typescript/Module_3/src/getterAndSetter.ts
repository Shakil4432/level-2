{
  class BankAccount {
    readonly id: number;
    public name: string;
    protected _balance: number;
    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this._balance = balance;
    }

    // setter

    set deposit(amount: number) {
      this._balance = this._balance + amount;
    }

    // deposit(amount: number) {
    //   return (this._balance = amount + this._balance);
    // }

    // getter

    get balance() {
      return this._balance;
    }
    // getBalance() {
    //   return this._balance;
    // }
  }

  class StudentAccount extends BankAccount {
    test() {
      this._balance;
    }
  }

  const account1 = new BankAccount(34554, "Shakil", 8867655);
  account1.deposit = 5000000; // setter method call
  //   console.log(account1.getBalance());
  console.log(account1.balance);
}
