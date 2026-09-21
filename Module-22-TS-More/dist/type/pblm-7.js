"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function findById(users, id) {
    return users.find(user => user.id === id);
}
const users = [
    { id: 1, name: "A" },
    { id: 2, name: "B" }
];
const result1 = findById(users, 2);
console.log(result1);
//violates the constraint : this arrays object dont have id
// const invalidUsers = [{name :'C'}]
// const result2 = findById(invalidUsers,1)
// console.log(result2)
//Error: findById function requires a parameter is T[],constrained to HasId and  a id of number type.but in this objects required in type 'HasId'.
//# sourceMappingURL=pblm-7.js.map