/* Problem statement: Create a generic interface Container<T> with item: T. Create one Container<number> and one Container<string>.
Input: { item: 100 }, { item: "Books" }
Output: Container<number> = { item: 100 }, Container<string> = { item: "Books" }
 */

interface Container<T> {
    item: T
}
const container1 :Container<number> ={
    item: 100
}
const container2 :Container<string> ={
    item: "Books"
}
console.log(`Container<number> = { item: ${container1.item} }, Container<string> = { item: "${container2.item}" }`)