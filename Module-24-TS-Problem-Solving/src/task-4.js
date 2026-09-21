"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function calculateCartTotal(products) {
    const totalPrice = products.reduce((total, item) => total + item.price, 0);
    return totalPrice;
}
const products = [
    { name: "Keyboard", price: 1500 },
    { name: "Mouse", price: 800 },
    { name: "USB Cable", price: 300 }
];
const products2 = [
    { name: "Book", price: 500 },
    { name: "Pen", price: 50 },
    { name: "Bag", price: 1200 }
];
console.log(calculateCartTotal(products)); //1600
console.log(calculateCartTotal(products2)); //1750
//# sourceMappingURL=task-4.js.map