/* Problem statement: Create a Product interface with title: string, price: number, inStock?: boolean. Create two product objects — one with inStock, one without. Write a function that logs a product's price.
Input: { title: "Laptop", price: 55000 } and { title: "Mouse", price: 500, inStock: true }
Output: 55000 and 500 printed by the function.
 */

interface Product {
    title: string,
     price: number, 
     inStock?: boolean
}
 function priceOfProducts (item1  : Product,item2 : Product ) : void{
    console.log(`${item1.price} and ${item2.price} printed by the function`)
 }
let product1 :  Product ={
    title: "Laptop",
     price: 55000 
}

let product2 : Product = {
     title: "Mouse",
      price: 500, 
      inStock: true
     }
priceOfProducts(product1,product2)

