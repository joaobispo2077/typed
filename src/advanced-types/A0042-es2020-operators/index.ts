/*
  Encadeamento opcional ->
  - Checa se um atributo existe e só executa um método
  ou acessa um atributo interno se Existir esse atributo.

  Operador de coalescência nula ->
  - Checa se o valor no lado esquerdo do operador é um "não valor" (null, undefined).
*/

type Archive = {
  title: string;
  text: string;
  date?: Date;
};

const archive: Archive = {
  title: 'Teste',
  text: 'a text...',
  // date: new Date(),
};

console.log(archive.date?.toDateString() ?? 'Testing');
console.log(undefined ?? 'sem valor');
console.log(null ?? 'sem valor');
console.log(false ?? 'com valor');
console.log('' ?? 'com valor');
console.log(0 ?? 'com valor');
