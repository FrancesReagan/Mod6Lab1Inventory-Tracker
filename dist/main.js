"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const PhysicalProducts_1 = __importDefault(require("./models/PhysicalProducts"));
const DigitalProducts_1 = __importDefault(require("./models/DigitalProducts"));
const taxCalculator_1 = require("./utils/taxCalculator");
//create some products//
const laptop = new PhysicalProducts_1.default("PHY001", "Gaming Laptop", 1299.99, 2.5);
const headphones = new PhysicalProducts_1.default("PHY002", "Wireless Headphones", 199.99, 0.3);
const ebook = new DigitalProducts_1.default("DIG001", "TypeScript Guide", 28.99, 15);
const software = new DigitalProducts_1.default("DIG002", "Photo Editor Pro", 109.89, 500);
//put in an array//
const products = [laptop, headphones, ebook, software];
console.log("=== Inventory Tracker System ===");
console.log("");
//loop through the products//
for (let i = 0; i < products.length; i++) {
    const product = products[i];
    console.log(product.displayDetails());
    //calculate the price with tax//
    const finalPrice = (0, taxCalculator_1.calculateTax)(product);
    console.log("Final Price: $" + finalPrice.toFixed(2));
    console.log("---");
}
//count products//
let physicalCount = 0;
let digitalCount = 0;
for (const product of products) {
    //instanceof from stackoverflow//
    if (product instanceof PhysicalProducts_1.default) {
        physicalCount = physicalCount + 1;
    }
    else {
        digitalCount = digitalCount + 1;
    }
}
console.log("");
console.log("Physical Products: " + physicalCount);
console.log("Digital Products: " + digitalCount);
