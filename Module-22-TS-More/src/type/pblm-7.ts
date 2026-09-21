/* Problem statement: Create HasId interface (id: number). Write findById<T extends HasId> that searches an array for a matching id. Write a call that violates the constraint and comment on the error.
Input: [{ id: 1, name: "A" }, { id: 2, name: "B" }], search id: 2
Output: { id: 2, name: "B" }; commented line shows constraint-violation error (e.g. passing an object without id).
 */
interface HasId{
    id: number
}
interface T extends HasId{
    name : string
}
function findById<T extends HasId> (users :T[],id: number) : T | undefined {
    return users.find(user => user.id === id)
}
const users=[
    { id: 1, name: "A" },
    { id: 2, name: "B" }
]

const result1 = findById (users ,2)
console.log(result1)
//violates the constraint : this arrays object dont have id
// const invalidUsers = [{name :'C'}]
// const result2 = findById(invalidUsers,1)
// console.log(result2)
//Error: findById function requires a parameter is T[],constrained to HasId and  a id of number type.but in this objects required in type 'HasId'.