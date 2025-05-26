import  Product from './Product'; //not sure why the curly braces that should go around Product get an error//

export default class PhysicalProduct extends Product {
  weight: number;

  constructor(sku: string, name: string, price: number, weight: number) {
    super(sku, name, price);
    this.weight = weight;
  }

  //forgot to add kg//
  getWeight(): string {
    return this.weight + "kg";
  }

  //  get formattedWeight(): string {
//         return `${this.weight} kg`;
//     }

  getPriceWithTax(): number {  
    //googled how to calculate tax//
    let tax = this.price * 0.1;
    let total = this.price + tax;
    return total;
  }


  displayDetails(): string {
    //tried different ways to combine strings//
    let details = super.displayDetails();
    details = details + "", Weight: " + this.getWeight();
    return details;
  }
}