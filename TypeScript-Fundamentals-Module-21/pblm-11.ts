/* Problem Statement:
একটি unknown type variable declare করো এবং পরে type check করে string হলে print করো।
Input:
"Hello"
Output:
Hello
 */
let word: unknown= "Hello"
if(typeof word === 'string'){
console.log(word)
}