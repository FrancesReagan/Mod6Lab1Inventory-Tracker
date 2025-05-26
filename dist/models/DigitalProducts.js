"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Product_1 = __importDefault(require("./Product"));
class DigitalProduct extends Product_1.default {
    constructor(sku, name, price, fileSize) {
        super(sku, name, price);
        this.fileSize = fileSize;
    }
    getFileSize() {
        return this.fileSize + " MB";
    }
    //digital products dont have tax//
    getPriceWithTax() {
        return this.price;
    }
    displayDetails() {
        let details = super.displayDetails();
        details = details + ", File Size: " + this.getFileSize();
        return details;
    }
}
exports.default = DigitalProduct;
