"use strict";
//  Challenge
// Make a Queue Class
// Attributtes queue/items Array
// metodos add, next, show
class Queue {
    constructor(items) {
        this.items = items;
    }
    show() {
        console.log(this.items);
    }
    add(item) {
        this.show();
        this.items.push(item);
        this.show();
    }
    next() {
        this.show();
        if (this.items.length > 0) {
            const item = this.items[0];
            this.items = this.items.slice(1);
            this.show();
            return item;
        }
        else {
            return null;
        }
    }
}
const students = new Queue(['John', 'Vivi']);
students.add('Sofia');
students.next();
const resultsOfProves = new Queue([2, 10, 9.5, 8.7, 6.5]);
resultsOfProves.add(3);
resultsOfProves.next();
const ProductsAndPrice = new Queue([35, 'Pen drive', 400, 'Teclado']);
ProductsAndPrice.add(300);
ProductsAndPrice.add('Mouse');
ProductsAndPrice.next();
ProductsAndPrice.next();
const pokemons = new Queue([{ name: 'Pikachu', type: 'Thunder' }]);
const pokemon = {
    name: 'Charizard',
    type: 'Fire'
};
pokemons.add(pokemon);
pokemons.next();
class QueueNumber extends Queue {
}
const resultsOfProves2 = new QueueNumber([2, 10, 9.5, 8.7, 6.5]);
resultsOfProves2.add(3);
resultsOfProves2.next();
class Mapper {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.items = [];
        this.items.push({ key: this.key, value: this.value });
    }
    alloc(obj) {
        this.items = this.items.reduce((acc, item) => {
            if (item.key === obj.key)
                return acc;
            return acc.concat(item);
        }, [{ key: obj.key, value: obj.value }]);
    }
    get(key) {
        return this.items.find(item => item.key === key);
    }
    show() {
        console.log(this.items);
    }
    clean() {
        this.items = [];
    }
}
const mapper = new Mapper(3, 'Teste');
mapper.alloc({ key: 5, value: 'John' });
mapper.alloc({ key: 6, value: 'Batata' });
mapper.alloc({ key: 9, value: 'Pao' });
mapper.alloc({ key: 5, value: 'Tomate' });
console.log(mapper.get(5));
mapper.show();
mapper.clean();
mapper.show();
//# sourceMappingURL=challenge.js.map