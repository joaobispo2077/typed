// Utillizar any apenas em último caso
function showMessage(message: any) {
  return message;
}

console.log(showMessage([1, 2, 3]));
console.log(showMessage({ name: 'John', age: 21 }));
console.log(showMessage(3));
console.log(showMessage('Hello'));
