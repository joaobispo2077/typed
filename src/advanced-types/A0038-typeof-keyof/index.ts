export type ColorsObj = typeof colors; // captura o tipo de um objeto
export type ColorsKeys = keyof ColorsObj; // captura as chaves de um tipo e faz merge delas em um union types

const colors = {
  vermelho: 'red',
  verde: 'green',
  azul: 'blue',
  roxo: 'purple',
};

function translateColor(color: ColorsKeys, colors: ColorsObj): string {
  return colors[color];
}

console.log(translateColor('vermelho', colors));
