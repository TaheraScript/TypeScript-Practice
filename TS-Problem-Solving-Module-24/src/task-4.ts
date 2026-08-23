/* Product Structure
{
    name: string;
    price: number;
}
Task
Create a function named calculateCartTotal. The function should receive an array of products and return the total price.
Requirements
Properly type the product object.
Properly type the array of products.
Return the total as a number.
An empty cart should return 0.
 */
type Product = {
     name: string;
    price: number;
}
function calculateCartTotal(products: Product[]):number{
    
       const totalPrice : number = products.reduce((total,item)=> total + item.price  ,0)
       return totalPrice
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

console.log(calculateCartTotal(products)) //1600
console.log(calculateCartTotal(products2)) //1750
