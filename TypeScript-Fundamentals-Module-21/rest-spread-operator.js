"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//rest,spread operator in array
const numb1 = [89, 78, 56, 90];
const num2 = [23, 45, 34];
const newNumber = [...numb1, ...num2];
console.log(newNumber);
//rest opertor in object
const student = {
    name: 'Sufia',
    roll: 90,
    class: 'nine'
};
const { name, ...studentsInfo } = student;
console.log(name);
console.log(studentsInfo);
//# sourceMappingURL=rest-spread-operator.js.map