"use strict";
/* Problem statement: Declare a variable of type unknown holding a string. Use it to assert it as a string and get its length. Repeat using angle-bracket syntax <string>.
Input: let val: unknown = "Hello TypeScript";
Output: 16 (length), printed twice — once via as string, once via <string>.
 */
Object.defineProperty(exports, "__esModule", { value: true });
let val = "Hello TypeScript";
let newValue = val;
let newValue2 = val; //<string>val is functionally identical to val as string — it's the older syntax for type assertions, inherited from TypeScript's early days.
console.log(newValue.length);
console.log(newValue2.length);
//# sourceMappingURL=pblm-1.js.map