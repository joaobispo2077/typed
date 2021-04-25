  //  Challenge
  // Make a Queue Class
  // Attributtes queue/items Array
  // metodos add, next, show

  class Queue<T> {
    constructor(private items: T[]){}
  
    show(): void{
      console.log(this.items);
    }
  
    add(item: T): void {
      this.show();
      this.items.push(item);
      this.show();
    }
  
    next(): T  | null {
      this.show();
      if(this.items.length > 0) {
        const item = this.items[0];
        this.items = this.items.slice(1);
        this.show();
        return item;
      } else {
        return null;
      }
    }
  }
  
  const students = new Queue(['John', 'Vivi']);
  students.add('Sofia');
  students.next();
  
  const resultsOfProves = new Queue<number>([2, 10,9.5,8.7,6.5]);
  resultsOfProves.add(3);
  resultsOfProves.next();
  
  const ProductsAndPrice = new Queue<number | string>([35, 'Pen drive', 400,'Teclado']);
  ProductsAndPrice.add(300);
  ProductsAndPrice.add('Mouse');
  ProductsAndPrice.next();
  ProductsAndPrice.next();
  
  interface IPokemon {
    name: string;
    type: string;
  }
  
  
  const pokemons = new Queue<IPokemon>([{ name: 'Pikachu',  type: 'Thunder'}]);
  
  const pokemon: IPokemon = {
    name: 'Charizard',
    type: 'Fire'
  }
  
  pokemons.add(pokemon);
  pokemons.next();
  
  class QueueNumber<T extends number> extends Queue<T>{}
  
  const resultsOfProves2 = new QueueNumber<number>([2, 10,9.5,8.7,6.5]);
  resultsOfProves2.add(3);
  resultsOfProves2.next();
  
  // Map Challenge
  // Object Array (Key, value) > items
  // methods: get(key), alloc({key, value});
  // clean(), show()

  interface IPair<T, R>{
    key: T;
    value: R;
  }

class Mapper<T,R>{
    private items: IPair<T, R>[] = [];

    constructor(private key: T, private value: R){
      
      this.items.push({key: this.key, value: this.value});
    }

    alloc(obj: IPair<T, R>){
       this.items = this.items.reduce((acc, item) => {
        if(item.key === obj.key) return acc;

        return acc.concat(item);
       }, [{key: obj.key, value: obj.value}]);

    }

    get(key: T): IPair<T, R> | undefined {
      return this.items.find(item => item.key === key);
    }

    show(): void{
      console.log( this.items);
    }

    clean(): void {
      this.items = [];
    }

    
}

  const mapper = new Mapper<number, string>(3, 'Teste');
  mapper.alloc({key: 5, value: 'John'});
  mapper.alloc({key: 6, value: 'Batata'});
  mapper.alloc({key: 9, value: 'Pao'});
  mapper.alloc({key: 5, value: 'Tomate'});
  
  console.log(mapper.get(5));
  mapper.show();
  mapper.clean();
  mapper.show();