export default class Product {
  public static taxRate = 0.05;
 
  sku: string;
  name: string;
  price: number;
 
  constructor(sku: string, name: string, price: number) {
    this.sku = sku;
    this.name = name;
    this.price = price;
  }
 
  getPriceWithTax(): number {
    return this.price * (Product.taxRate + 1);
  }

  protected displayDetails(): string {
    return `${this.name} (SKU: ${this.sku}) costs $${this.price}.`;
  }
}
