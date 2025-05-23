import { calculateTax } from './utils/taxCalculator';
import { PhysicalProduct } from "./models/PhysicalProduct";
import { DigitalProduct } from ".models/DigitalProduct";

const laptop = new PhysicalProduct("P001", "Laptop", 999.99, 2.5);
const priceWithTax = calculateTax(laptop);
console.log(priceWithTax);

const Music-and-Audio = new DigitalProduct("DM02", "Music for Sleeping", 14.99,"MusicAudiomusic.app");
const priceWithTax = calculateTax(laptop);
console.log(priceWithTax);