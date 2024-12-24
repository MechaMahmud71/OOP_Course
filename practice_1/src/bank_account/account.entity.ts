export class BankAccount{
  constructor(
    private name: string,
    private number: string,
    private balance: number,
  ) { 
    if (this.number.length === 0 || this.number==="") {
      throw new Error("Account number can not be empty");
    }
    if (this.balance < 0) {
      throw new Error("Balance can not be negative");
    }

    if (this.name.length === 0|| this.name==="") {
      throw new Error("Account Name can not be empty")
    }

    this.name = name;
    this.balance = balance;
    this.number = number;
  }

  public deposit(amount: number) {
    this.checkAmountIsValid(amount);
    this.balance = this.balance + amount;
    console.log("The Deposit amount is " + amount);
    console.log("Your Current Balance is " + this.balance);
  }

  public withdraw(amount:number) {
    this.checkAmountIsValid(amount);
    this.balance = this.balance - amount;
    console.log("The Withdraw amount is " + amount);
    console.log("Your Current Balance is " + this.balance);
  }

  public transfer(bankAccount: BankAccount, amount: number) {
    this.checkAmountIsValid(amount);
    this.withdraw(amount);
    bankAccount.deposit(amount);
    console.log("You have transferred " + amount + " to " + bankAccount.number + " account.");
    console.log("Your Current Balance is " + this.balance);
    console.log(bankAccount.name + "'s balance is " + bankAccount.balance);
  }

  private checkAmountIsValid(amount:number) {
    if (amount < 0 || amount === 0) {
      throw new Error("Deposit Amount can not negative or Zero")
    }
  }


}