"use strict";
/* Problem Statement:
একটি function লেখো যা একটি number নিয়ে check করবে সেটা even কি না।
Input:
isEven(8)
Output:
true
 */
Object.defineProperty(exports, "__esModule", { value: true });
//the shortest way
const isEven = (num) => num % 2 === 0; //Because this condition itself produces true or false, you don't actually need if...else
console.log(isEven(8));
//traditional way
//  const isEven = (num :number):boolean => {
//     if(num % 2 === 0){
//         return true
//     }
//     else {
//         return false
//     }
// }
//     console.log(isEven(8))
//# sourceMappingURL=pblm-6.js.map