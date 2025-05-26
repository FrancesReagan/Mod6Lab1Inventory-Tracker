"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//base class for products//
class Product {
    constructor(sku, name, price) {
        this.sku = sku;
        this.name = name;
        this.price = price;
    }
    displayDetails() {
        return `SKU: ${this.sku}, Name: ${this.name}, Price: $${this.price}`;
    }
}
Product.taxRate = 0.05;
exports.default = Product;
