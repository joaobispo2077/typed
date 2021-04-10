"use strict";
var bankAccount = {
    balance: 3456,
    deposit: function (value) {
        this.balance += value;
    }
};
var holderAccount = {
    name: 'Ana Silva',
    bankAccount: bankAccount,
    contacts: ['34567890', '98765432']
};
holderAccount.bankAccount.deposit(3000);
console.log(holderAccount);
//# sourceMappingURL=challenge.js.map