// Singleton - GoF | Factory Method
export class Database {
  private static database: Database;

  private constructor(
    private host: string,
    private user: string,
    private password: string,
  ) {}

  static getDatabase(host: string, user: string, password: string): Database {
    if (Database.database) return Database.database;
    else return (Database.database = new Database(host, user, password));
  }

  connect(): void {
    console.log(`Connecting: ${this.host} - ${this.user}`);
  }
}

const database = Database.getDatabase('localhost', 'root', '123');
database.connect();

const database2 = Database.getDatabase('localhost', 'root', '123');
database2.connect();

console.log(database === database2);
