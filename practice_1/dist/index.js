"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const account_entity_1 = require("./bank_account/account.entity");
const farukAccount = new account_entity_1.BankAccount("Faruk", "faruk123", 1000);
const mahmudAccount = new account_entity_1.BankAccount("Mahmud", "mahmud123", 2000);
// Faruk Account
farukAccount.deposit(100); //1100
farukAccount.withdraw(200); //900
//Mahmud Account
mahmudAccount.deposit(100); //2100
mahmudAccount.withdraw(200); //1900
farukAccount.transfer(mahmudAccount, 300);
