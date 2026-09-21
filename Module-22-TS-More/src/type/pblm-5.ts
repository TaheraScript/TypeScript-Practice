/* Problem statement: Write a generic function getLastElement<T> that returns the last element of an array. Test with number[] and string[].
Input: [10, 20, 30] and ["a", "b", "c"]
Output: 30 and "c"
 */
interface getOutput<T> {
    input : T[]
} 
function getLastElement<T>(elements :getOutput<T>):T | undefined {
    return elements.input[elements.input.length -1]
   
}
const output1 : getOutput<number> ={
    input : [10, 20, 30]
}
const output2 : getOutput<string> ={
    input : ["a", "b", "c"]
}
console.log(getLastElement(output1))
console.log(getLastElement(output2))