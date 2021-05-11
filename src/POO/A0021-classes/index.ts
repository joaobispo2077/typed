export class Company {
  public readonly name: string; // public is not necessary
  private readonly employees: Employee[] = [];
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
}

export class Employee {
  constructor(
    public readonly firstname: string,
    public readonly lastname: string,
  ) {}
}

const company = new Company('Batinhas boas', '11.111.111/0001-11');
const employee1 = new Employee('Joao', 'Eu');
const employee2 = new Employee('Joao', 'Batatinha');
company.addEmployee(employee1);
company.addEmployee(employee2);
company.showEmployees();

// console.log(company);
