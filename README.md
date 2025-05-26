<img width="952" alt="image" src="https://github.com/user-attachments/assets/194d3db8-c088-4685-a71f-2aaec82a97d8" />

Critical Thinking Answers
1. How does TypeScript enforce type safety in this object-oriented program?
   
From what I learned by doing this project, TypeScript ensures compliance with its rules-- Here's what I noticed:

// When I create a product, TypeScript checks I'm using the right types//
const laptop = new PhysicalProduct("PHY001", "Gaming Laptop", 1299.99, 2.5);
// If I tried: new PhysicalProduct("PHY001", "Gaming Laptop", "not a number", 2.5)
// TypeScript would show a red squiggly line and say "Type 'string' is not assignable to type 'number'"//

// Also in my methods://
getPriceWithTax(): number {  // This ": number" part tells TypeScript what type to expect//
    let tax = this.price * 0.1;
    return total;  // If I forgot to return a number, TypeScript would “yell” at  me with the red squiggly line and offer advice if hover over error//
}

It's like having a rule checker and assistant inspect my code in real time and and not let me progress until the error is fixed and fits Typescript’s code book😊.
It caught mistakes (typos, wrong case, returning a string from a method that should return a number, or if  I put arguments in the wrong order).

2. How did inheritance reduce code duplication for PhysicalProducts and DigitalProducts?

I only had to write the parent prototype-- common values they will all share ----once in the Product class:

// In Product class// - I wrote this ONCE:
- sku, name, price properties
- constructor to set these values  
- displayDetails() method
  
// Without inheritance, I would've had to copy-paste all of this into both---
// PhysicalProduct AND DigitalProduct classes//

So instead of writing the same code multiple times, I just wrote extends Product and got all that functionality for free. 

Then I only had to add the unique additions for physical and digital products respectively:
*PhysicalProduct needed weight in kg
*DigitalProduct needed fileSize in MB

This saved me from copying and pasting many lines of code for each product type. If I need to fix a bug in
displayDetails(), I only need to fix it in one place instead of hunting through multiple files.

3. What are the benefits of using encapsulation and access modifiers (public, private, protected) in this context?

I did not use these much in my code (most everything was public by default), yet I understand why they're useful:

// What I did (everything is public)://

class Product {
    price: number;  // Anyone can do: product.price = -999; //
}

// What I learned I should do://

class Product {
    private price: number;  // Now only the class can change it//
    
    getPrice(): number {
        return this.price;  // Controlled access//
    }
}

Benefits:
*Protection: Can't accidentally set price to negative or break the object
*Cleaner code: Other developers know what they should/shouldn't touch
*Easier changes: If I need to add validation later, I only need to  change the getter/setter
*Less need for debugging ---bugs: Hard to mess up the internal state from outside the  class
It is akin to having a TV remote instead of manually pressing buttons on the TV - you get a clean interface to work with.

4. If you had to add a new type of product (e.g., a SubscriptionProduct), how would polymorphism make this extension straightforward?

I can add a new product type without breaking anything:


//  create a new class://
class SubscriptionProduct extends Product {
    duration: string;  // "monthly" or "yearly"
    
    constructor(sku: string, name: string, price: number, duration: string) {
        super(sku, name, price);
        this.duration = duration;
    }
    
    getPriceWithTax(): number {
        // maybe subscriptions have different tax?//
        return this.price * 1.08;  // 8% tax for subscriptions
    }
    
    displayDetails(): string {
        let details = super.displayDetails();
        return details + ", Duration: " + this.duration;
    }
}

The main.ts doesn't need to change at all. I can just add it to my products array:

const spotify = new SubscriptionProduct("SUB001", "Music Streaming", 9.99, "monthly");
const products = [laptop, headphones, ebook, software, spotify]; 

// My loop still works without any changes://
for (const product of products) {
    console.log(product.displayDetails());  // Automatically uses the right version//
    const finalPrice = calculateTax(product);  // Automatically uses subscription's tax//
}

No need for a bunch of if-statements === "if it's physical do this, if it's digital do that, if it's 
subscription do something else." The subscription knows how to be a Product, so everything just works. 

