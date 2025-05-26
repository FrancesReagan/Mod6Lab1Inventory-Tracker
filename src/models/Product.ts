//base class for products//
export default abstract class Product {
  public static taxRate = 0.05;
  sku: string;
  name: string;
  price: number;
 
  constructor(sku: string, name: string, price: number) {
    this.sku = sku;
    this.name = name;
    this.price = price;
  }
 

  public displayDetails(): string {
    return `SKU: ${this.sku}, Name: ${this.name}, Price: $${this.price}`;
  }


   abstract getPriceWithTax(): number;
}
