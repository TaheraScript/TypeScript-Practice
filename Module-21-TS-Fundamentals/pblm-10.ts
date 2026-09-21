/* Problem Statement:
একটি variable undefined হলে default value print করো।
Input:
username = undefined
Output:
Guest
 */

//nullish coalescing operator (??).
const username :string|undefined = undefined 
console.log(username??'Guest')//If username is null or undefined, use "Guest"; otherwise, use the value of username.


//ternary operator
// const username : undefined | string = undefined 
// console.log(typeof username === 'string'? username : 'Guest')