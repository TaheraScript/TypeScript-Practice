"use strict";
//parseFloat()
// function calculateTax (amount : number | string , taxRate : number) :number {
Object.defineProperty(exports, "__esModule", { value: true });
//     if (typeof amount === 'string' ){
//        amount = parseFloat(amount)
//     }
//  return amount * taxRate
// }
//null
function calculateTax(amount, taxRate) {
    if (amount === null) {
        amount = 0;
    }
    return amount * taxRate;
}
console.log(calculateTax(null, 90));
//# sourceMappingURL=union-operator.js.map