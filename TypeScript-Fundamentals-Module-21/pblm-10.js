"use strict";
/* Problem Statement:
একটি variable undefined হলে default value print করো।
Input:
username = undefined
Output:
Guest
 */
Object.defineProperty(exports, "__esModule", { value: true });
//nullish coalescing operator (??).
const username = undefined;
console.log(username ?? 'Guest'); //If username is null or undefined, use "Guest"; otherwise, use the value of username.
//ternary operator
// const username : undefined | string = undefined 
// console.log(typeof username === 'string'? username : 'Guest')
//# sourceMappingURL=pblm-10.js.map