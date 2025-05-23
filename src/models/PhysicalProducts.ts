import  Product  from "./Product";

export default class PhysicalProduct extends Product {
  weight: number;

  constructor(sku: string, name: string, price: number, weight: number) {
    super(sku, name, price);
    this.weight = weight;
  }

  displayDetails(): string {
    return super.displayDetails() + ` It weighs ${this.weight} kg.`;
  }


 getPriceWithTax(): number {
    Product.taxRate = 0.10; // Set 10% tax rate
    return this.price * (Product.taxRate + 1);
}

 get formattedWeight(): string {
        return `${this.weight} kg`;
    }

  }