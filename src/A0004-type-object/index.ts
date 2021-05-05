// Record<string, unknown> same effect that any
const animal: {
  name: string;
  readonly type: string;
  color: string;
  [key: string]: unknown;
} = {
  name: 'doguinho',
  type: 'cachorro',
  color: 'black',
};

// animal.type = 'passaro';
animal.color = 'white';
animal.speed = 10;

console.log(animal);
