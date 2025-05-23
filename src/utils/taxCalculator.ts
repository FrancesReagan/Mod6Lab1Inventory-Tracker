import { Product } from '../models/Product';

/**
 * Calculate the price including tax for a given product
 * @param product - The product object to calculate tax for
 * @returns The price including tax
 */
export function calculateTax(product: Product): number {
    return product.getPriceWithTax();
}