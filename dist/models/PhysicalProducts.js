"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Product_1 = __importDefault(require("./Product")); //not sure why the curly braces that should go around Product get an error//
class PhysicalProduct extends Product_1.default {
    constructor(sku, name, price, weight) {
        super(sku, name, price);
        this.weight = weight;
    }
    //forgot to add kg//
    getWeight() {
        return this.weight + " kg"; // This gives "2.5 kg"//
    }
    getPriceWithTax() {
        // how to calculate tax//
        let tax = this.price * 0.1;
        let total = this.price + tax;
        return total;
    }
    displayDetails() {
        //tried different ways to combine strings//
        let details = super.displayDetails();
        details = details + ", Weight: " + this.getWeight();
        return details;
    }
}
exports.default = PhysicalProduct;
