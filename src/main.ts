import { PhysicalProduct } from "./models/PhysicalProduct";
import { DigitalProduct } from ".models/DigitalProduct";
import { calculateTax } from './utils/taxCalculator';

//create some products//
const laptop = new PhysicalProduct("PHY001", "Gaming Laptop", 1299.99, 2.5);
const headphones = new PhysicalProduct("PHY002", "Wireless Headphones", 199.99, 0.3);

const ebook = new DigitalProduct("DIG001", "TypeScript Guide", 28.99, 15);
const software = new DigitalProduct("DIG002", "Photo Editor Pro", 109.89, 500);

//put in an array//
const products = [laptop, headphones, ebook, software];

console.log("=== Inventory Tracker System ===");
console.log("");

//loop through the products//
for (let i = 0; i < products.length; i++) {
  const product = products[i];  
  console.log(product.displayDetails());

  
}