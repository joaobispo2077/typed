import Product from "./Product";


export default class Book implements Product {
  constructor(
    public name: string,
    public readonly price: number,
    public readonly discount: number    
    ){}

    priceWithDiscount(): number {
      return this.price * (1 - this.discount);
    }
}