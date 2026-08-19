/* Problem Statement:
একটি function বানাও যা যেকোনো সংখ্যক number নিয়ে তাদের sum করবে।
Input:
sumAll(1, 2, 3, 4)
Output:
10
 */

//for of loop
// let sumAll = (...numbers :number[]) => {
//     let total =0;
//     for (let num   of numbers){
//         total += num
//     }
//     return total
// }
// console.log(sumAll(1, 2, 3, 4))

//reduce method
let sumAll = (...numbers : number[]) => numbers.reduce((sum,num)=> sum + num ,0)

console.log(sumAll(1, 2, 3, 4))


