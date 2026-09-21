"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* Problem Statement:
একটি TypeScript program বানাও যেখানে একজন user-এর নাম, বয়স, email, skills, আর active status থাকবে। এরপর সব তথ্য print করবে।
Input:
{
  name: "Amina",
  age: 22,
  email: "amina@email.com",
  skills: ["HTML", "CSS", "TypeScript"],
  active: true
}
Output:
Name: Amina
Age: 22
Email: amina@email.com
Skills: HTML, CSS, TypeScript
Active: true
 */
let programmer = {
    name: "Amina",
    age: 22,
    email: "amina@email.com",
    skills: ["HTML", "CSS", "TypeScript"],
    active: true,
};
const { name, age, email, skills, active } = programmer;
console.log(`Name: ${name}
Age: ${age}
Email: ${email}
Skills: ${skills.join(', ')}
Active: ${active}
`);
//# sourceMappingURL=pblm-12.js.map