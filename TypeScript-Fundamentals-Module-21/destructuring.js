"use strict";
// // normal way 
// let student ={
//     name : 'Kakoli',
//     gender : 'Female',
//     roll : 89
// }
// const name = student.name
// const roll = student.roll
// const gender = student.gender
Object.defineProperty(exports, "__esModule", { value: true });
// // or,
// const {name,roll} = student
// //or, in a shortcut way
// const {name,roll,gender} = {name :"Kakoli" , gender :'Female' , roll : 89}
//in TypeScript
let student = {
    name: 'Kakoli',
    gender: 'Female',
    roll: 89
};
const { name: studentsName, roll: studentsRoll } = student;
// on array destructuring dont need to declare datatype
const name = ['Akhi', 'Pakhi', 'Nodi'];
const [, name2, name3] = name;
//# sourceMappingURL=destructuring.js.map