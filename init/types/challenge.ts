type BankAccount = {
  balance: number,
  deposit: (value: number) => void 
}

type HolderAccount = {
  name: string,
  bankAccount: BankAccount,
  contacts: string[]
}

let bankAccount: BankAccount = {
  balance: 3456,
  deposit(value: number) {
      this.balance += value
  }
}

let holderAccount: HolderAccount = {
  name: 'Ana Silva',
  bankAccount: bankAccount,
  contacts: ['34567890', '98765432']
}

holderAccount.bankAccount.deposit(3000)
console.log(holderAccount)