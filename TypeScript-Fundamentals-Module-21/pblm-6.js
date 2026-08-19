"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* Problem Statement:
একটি function লেখো যা একটি number নিয়ে check করবে সেটা even কি না।
Input:
isEven(8)
Output:
true
 */
const isEven = (num) => {
    if (num % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
};
console.log(isEven(8));
//# sourceMappingURL=pblm-6.js.map