/* Problem statement: Declare a variable of type unknown holding a string. Use it to assert it as a string and get its length. Repeat using angle-bracket syntax <string>.
Input: let val: unknown = "Hello TypeScript";
Output: 16 (length), printed twice — once via as string, once via <string>.
 */

let val: unknown = "Hello TypeScript";
let newValue = val as string 
let newValue2 = <string>val //<string>val is functionally identical to val as string — it's the older syntax for type assertions, inherited from TypeScript's early days.
console.log(newValue.length)
console.log(newValue2.length)