// Exercício 1 - Classe

class Motocycle {
  constructor(public name: string, public speed: number = 0) {}

  honk(): void {
    console.log('Toooooooooot!');
  }

  accelerate(delta: number): void {
    this.speed = this.speed + delta;
  }
}

var motinha = new Motocycle('Ducati')
motinha.honk();
console.log(motinha.speed);
motinha.accelerate(30);
console.log(motinha.speed);

// Exercício 2 - Herança

abstract class Object2D {
  constructor(public height: number, public weight: number){}

  abstract getArea(): number
}


class Rectangle extends Object2D {
  constructor(public height: number, public weight: number){
    super(height, weight);
  }

  getArea(): number {
    return this.height * this.weight;
  }
}

const retangulo = new Rectangle(5, 7);


console.log(retangulo.getArea());

// Exercício 3 - Getters & Setters

class Trainner {
  private _firstName: string = '';
  constructor(){}

  get firstName(){
    return this._firstName;
  }

  set firstName(name: string) {
    if (name.length >= 3) this._firstName = name;
  }
}

const trainner = new Trainner();
console.log(trainner.firstName);
trainner.firstName = 'Jo';
console.log(trainner.firstName);
trainner.firstName = 'João'
console.log(trainner.firstName);