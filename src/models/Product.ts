//base class for products//
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
 

  protected displayDetails(): string {
    //forgot to use template literals at first//
    //return "SKU: " + this.sku + ", Name: " + this.name + ", Price: $" + this.price.//
    return `SKU: ${this.sku}, Name: ${this.name}, Price: $${this.price}`;
  }

  //needed to look up how to make abstract methods, so using regular method//
  getPriceWithTax(): number {
    return this.price; //will overide in subclasses//
    // return this.price * (Product.taxRate + 1);
  }
}
