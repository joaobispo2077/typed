import $ from 'jquery';


import Book from "./models/Book";

const book = new Book('Sapiens', 50, 0.10);
console.log(book.priceWithDiscount());

$('body').append(`<h1>Nome: ${book.name}</h1>`);
$('body').append(`<h2>Preço: ${book.priceWithDiscount()}</h2>`);