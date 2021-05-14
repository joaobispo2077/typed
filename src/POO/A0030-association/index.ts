// A write has a Tool
// Associação - "Tem um".

export abstract class Tool {
  constructor(protected _name: string) {}

  get name(): string {
    return this._name;
  }

  abstract write(): void;
}

export class Pencil extends Tool {
  constructor() {
    super('Caneta');
  }

  write(): void {
    console.log(`Escrevendo com ${this._name}...`);
  }
}

export class Writer {
  constructor(private _name: string, private _tool: Tool | null = null) {}

  get name(): string {
    return this._name;
  }

  set tool(tool: Tool) {
    this._tool = tool;
  }

  write(): void {
    if (this._tool === null) console.log('Não posso escrever sem ferramenta!');
    else this._tool.write();
  }
}

const pencil = new Pencil();
const writer = new Writer('João', pencil);
writer.write();
