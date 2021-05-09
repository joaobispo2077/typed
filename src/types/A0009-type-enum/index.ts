enum Colors {
  red = 10, // 0
  green, // 1
  blue, // 2
}
enum Colors {
  purple = 'purple',
  yellow = 15,
  orange,
}

console.log(Colors);

function getColor(color: Colors): void {
  console.log(Colors[color]);
}

getColor(Colors.blue);
