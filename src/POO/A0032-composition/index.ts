// Composition - Não existe sem
class Engine {
  powerOn(): void {
    console.log('Motor ligando...');
  }

  accelerate(): void {
    console.log('Motor acelerando...');
    console.log('vruuuum!');
  }

  powerOff(): void {
    console.log('Motor desligando...');
  }
}

class Car {
  constructor(private readonly engine: Engine) {}

  powerOn(): void {
    this.engine.powerOn();
  }

  accelerate(): void {
    this.engine.accelerate();
  }

  powerOff(): void {
    this.engine.powerOff();
  }
}

const engine = new Engine();
const car = new Car(engine);
car.powerOn();
car.accelerate();
car.powerOff();
