"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* Problem statement: Create a string enum OrderStatus: Placed, Shipped, Delivered, Cancelled. Write a function that prints a readable message for a given status.
Input: OrderStatus.Shipped
Output: "Current status: SHIPPED" (or equivalent readable message)
 */
var OrderStatus;
(function (OrderStatus) {
    OrderStatus["Placed"] = "PLACED";
    OrderStatus["Shipped"] = "SHIPPED";
    OrderStatus["Delivered"] = "DELIVERED";
    OrderStatus["Cancelled"] = "CANCELLED";
})(OrderStatus || (OrderStatus = {}));
function orderShipped(products) {
    console.log(`"Current status: ${products}"`);
}
orderShipped(OrderStatus.Shipped);
//# sourceMappingURL=pblm-8.js.map