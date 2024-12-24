import { BankAccount } from "./bank_account/account.entity";

const farukAccount = new BankAccount("Faruk", "faruk123", 1000);
const mahmudAccount = new BankAccount("Mahmud", "mahmud123", 2000);

// Faruk Account
farukAccount.deposit(100); //1100
farukAccount.withdraw(200) //900
farukAccount.deposit(-100)

//Mahmud Account
mahmudAccount.deposit(100); //2100
mahmudAccount.withdraw(200) //1900

farukAccount.transfer(mahmudAccount, 300);


