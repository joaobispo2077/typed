"use strict";
let bankAccount = {
    balance: 3456,
    deposit(value) {
        this.balance += value;
    }
};
let holderAccount = {
    name: 'Ana Silva',
    bankAccount: bankAccount,
    contacts: ['34567890', '98765432']
};
holderAccount.bankAccount.deposit(3000);
console.log(holderAccount);
