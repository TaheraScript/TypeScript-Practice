"use strict";
/* Problem Statement:
একটি user object বানাও যেখানে name required, কিন্তু email optional।
Input:
{ name: "Amina" }
Output:
Name: Amina, Email: Not provided
 */
Object.defineProperty(exports, "__esModule", { value: true });
const user = {
    name: 'Amina'
};
console.log(`Name: ${user.name}, Email:${user.email ? user.email : 'Not provided'}`);
//# sourceMappingURL=pblm-5.js.map