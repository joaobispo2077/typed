// Aggregation - PRECISA DE UM
export class Product {
  constructor(public _name: string, public price: number) {}

  get name() {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
  }
}

export class ShoppingCart {
  private readonly products: Product[] = [];

  addProduct(...products: Product[]): void {
    products.forEach((product) => this.products.push(product));
  }

  getQuantity(): number {
    return this.products.length;
  }

  getTotal(): number {
    const total = this.products.reduce(
      (total, product) => total + product.price,
      0,
    );

    return total;
  }
}

const product = new Product('Batatinha', 30);
const product2 = new Product('Batatinha Picante', 45);

const shoppingCart = new ShoppingCart();
shoppingCart.addProduct(product);
shoppingCart.addProduct(product2);
shoppingCart.addProduct(product);
console.log(shoppingCart.getQuantity());
console.log(shoppingCart.getTotal());
