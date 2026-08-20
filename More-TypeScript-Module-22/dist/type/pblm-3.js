"use strict";
/* Problem statement: Create a Product interface with title: string, price: number, inStock?: boolean. Create two product objects — one with inStock, one without. Write a function that logs a product's price.
Input: { title: "Laptop", price: 55000 } and { title: "Mouse", price: 500, inStock: true }
Output: 55000 and 500 printed by the function.
 */
Object.defineProperty(exports, "__esModule", { value: true });
function priceOfProducts(item1, item2) {
    console.log(`${item1.price} and ${item2.price} printed by the function`);
}
let product1 = {
    title: "Laptop",
    price: 55000
};
let product2 = {
    title: "Mouse",
    price: 500,
    inStock: true
};
priceOfProducts(product1, product2);
//# sourceMappingURL=pblm-3.js.map