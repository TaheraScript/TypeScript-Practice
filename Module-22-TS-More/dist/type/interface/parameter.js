"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//way of 1
const newEmployee = (employee) => {
    console.log(employee.age);
    console.log(employee.name);
    console.log(employee.designation);
};
console.log(newEmployee({ name: 'Ahmed',
    age: 28,
    designation: 'UI/UX Designer',
    salary: 60000 }));
//way of 2
const oldEmployee = ({ name, age, designation, salary }) => {
    console.log(name);
    console.log(age);
    console.log(designation);
};
console.log(oldEmployee({ name: 'Ahmed',
    age: 28,
    designation: 'UI/UX Designer',
    salary: 60000 }));
//# sourceMappingURL=parameter.js.map