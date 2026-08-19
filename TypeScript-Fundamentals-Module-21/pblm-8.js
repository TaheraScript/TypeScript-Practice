"use strict";
/* Problem Statement:
দুইটি array merge করো spread operator ব্যবহার করে।
Input:
[1, 2, 3]
[4, 5, 6]
Output:
[1, 2, 3, 4, 5, 6]
 */
Object.defineProperty(exports, "__esModule", { value: true });
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const newArray = [...arr1, ...arr2];
console.log(newArray);
//# sourceMappingURL=pblm-8.js.map