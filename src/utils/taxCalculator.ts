import  Product  from '../models/Product';

//calculate tax for products//

export function calculateTax(product: Product): number {
    //call the method//
    return product.getPriceWithTax();
}