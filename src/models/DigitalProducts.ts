import Product  from "./Product";

export default class DigitalProduct extends Product {
    fileSize: number;

    constructor(sku: string, name: string, price: number, fileSize: number) {
        super(sku, name, price);
        this.fileSize = fileSize;
    }

    getFileSize(): string {
        return this.fileSize + " MB";
    }

    //digital products dont have tax//
    getPriceWithTax(): number {
        return this.price;
    }

    displayDetails(): string {
    let details = super.displayDetails();
    details = details + ", File Size: " + this.getFileSize();
    return details;
    }
}