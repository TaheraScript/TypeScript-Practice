"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function formatUserProfile(user) {
    const { name, age, city } = user;
    return `${name} is ${age} years old and lives in ${city}.`;
}
let user1 = {
    name: "Fahim",
    age: 22,
    city: "Dhaka"
};
let user2 = {
    name: "John",
    age: 30,
    city: "New York"
};
let user3 = {
    name: "Alice",
    age: 25,
    city: "Los Angeles"
};
console.log(formatUserProfile(user1));
console.log(formatUserProfile(user2));
console.log(formatUserProfile(user3));
//# sourceMappingURL=task-3.js.map