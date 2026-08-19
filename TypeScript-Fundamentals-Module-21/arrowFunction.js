"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const largestAmount = (price1, price2) => {
    if (price1 > price2) {
        return price1;
    }
    return price2;
};
let biggestAmmount = largestAmount(300, 700);
console.log(biggestAmmount);
//# sourceMappingURL=arrowFunction.js.map