/* Problem statement: Create a type alias PaymentMethod = "cash" | "card" | "mobile". Comment why interface can't express this. Create an Order interface using PaymentMethod.
Input: let method: PaymentMethod = "card";
Output: Order object like { id: 1, method: "card" }, type-checked successfully.
 */
type PaymentMethod = "cash" | "card" | "mobile"
let method: PaymentMethod = "card";

//interface can't express this because interface handles variable name and value as a pair,so in interface we can't declare union type
interface Order {
    id: number,
     method: PaymentMethod 
}
const customerMethod : Order ={
    id : 1,
    method : "card"
}
console.log(`Order object like { id: ${customerMethod.id}, method: "${customerMethod.method}" }, type-checked successfully.`)