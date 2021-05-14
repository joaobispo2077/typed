export abstract class Persona {
  protected abstract emoji: string;
  constructor(
    protected name: string,
    protected damage: number,
    protected life: number,
  ) {}

  attack(persona: Persona): void {
    console.log(`${this.name} is attacking...`);
    this.catchphrase();
    persona.looseLife(this.damage);
  }

  looseLife(damage: number): void {
    if (damage > 0) this.life -= damage;
    console.log(`- ${this.emoji} - ${this.name} is loosing life ${this.life}`);
  }

  abstract catchphrase(): void;
}

export class Warrior extends Persona {
  protected emoji = '\u{1F9DD}';
  catchphrase(): void {
    console.log(`\n- ${this.emoji}  - Pelas asas sagradas eu te elimino!!!\n`);
  }
}
export class Skeleton extends Persona {
  protected emoji = '\u{1F9DF}';
  catchphrase(): void {
    console.log(`\n- ${this.emoji}  - Cri cri cri!!!\n`);
  }
}

const warrior = new Warrior('Diana', 100, 1000);
const skeleton = new Skeleton('Caveira', 75, 1115);

warrior.attack(skeleton);
warrior.attack(skeleton);
warrior.attack(skeleton);
skeleton.attack(warrior);
warrior.attack(skeleton);

/*
 - Classe abstrata não pode ser instanciada.

 - Ela cria um tipo e pode ser estendida e utilizada
  e todos seus métodos e atributos serão passados para as
  subclasses.

  - Se ela tiver método ou atributo abstrato, todas suas
  subclasses vão ter que fazer implementações disso.

*/
