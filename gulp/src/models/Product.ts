export default interface Product {
  name: string;
  price: number;
  discount: number;
  priceWithDiscount(): number;
}