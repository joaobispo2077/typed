export class Company {
  public readonly name: string; // public is not necessary
  protected readonly employees: Employee[] = [];
  protected readonly cnpj: string;

  constructor(name: string, cnpj: string) {
    this.name = name;
    this.cnpj = cnpj;
  }

  addEmployee(employee: Employee): void {
    this.employees.push(employee);
  }

  showEmployees(): void {
    for (const employee of this.employees) {
      console.log(employee);
    }
  }

  public getName(): string {
    return this.name;
  }
}

export class Employee {
  constructor(
    public readonly firstname: string,
    public readonly lastname: string,
  ) {}
}

export class Batatinhas extends Company {
  constructor(name: string, cnpj: string) {
    super(name, cnpj);
  }
  removeEmployee(): Employee | null {
    const employee = this.employees.pop() || null;
    return employee;
  }
}

const company = new Batatinhas('Batinhas boas', '11.111.111/0001-11');
const employee1 = new Employee('Joao', 'Eu');
const employee2 = new Employee('Joao', 'Batatinha');
company.addEmployee(employee1);
company.addEmployee(employee2);
company.showEmployees();
console.log(company.getName());

// console.log(company);
