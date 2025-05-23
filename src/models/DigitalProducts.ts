import { Product } from "./Product";

export default class DigitalProduct extends Product {
    downloadUrl: string;
    fileSize: number;

    constructor(sku: string, name: string, price: number, downloadUrl: string, fileSize: number) {
        super(sku, name, price);
        this.downloadUrl = downloadUrl;
        this.fileSize = fileSize;
    }

    // Getter for formatted download URL
    get formattedDownloadUrl(): string {
        return `Download: ${this.downloadUrl}`;
    }

    // Getter for formatted file size
    get formattedFileSize(): string {
        return `${this.fileSize} MB`;
    }

    getPriceWithTax(): number {
        Product.taxRate = 0.10; // Set 10% tax rate
        return this.price * (Product.taxRate + 1);
    }

    displayDetails(): string {
        return super.displayDetails() + ` The download URL is ${this.downloadUrl}. The file size is ${this.fileSize} MB.`;
    }
}