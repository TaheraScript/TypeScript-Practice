"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function information(num1, num2, num3) {
    let total = num2 + num3;
    return [total];
}
const result = information([8, 9], 9, 6);
console.log(result);
function add(num1, num2) {
    let total = num2 + num1;
    return ['total', total];
}
const output = add(9, 6);
console.log(output);
//# sourceMappingURL=return-array.js.map