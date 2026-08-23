/* First define an appropriate TypeScript type or interface for the user. Then create a function named formatUserProfile. The function should receive a user object and return a formatted sentence.
Requirements
Accept a properly typed user object.
Return a string.
Use the values from the object rather than hard-coding the result.
 */
interface User {
    name: string,
    age: number,
    city: string
}

function formatUserProfile(user: User): string {
    const {name,age,city} = user
    return `${name} is ${age} years old and lives in ${city}.`
}
let user1 = {
    name: "Fahim",
    age: 22,
    city: "Dhaka"
}
let user2 = {
    name: "John",
    age: 30,
    city: "New York"
}
let user3 = {
    name: "Alice",
    age: 25,
    city: "Los Angeles"
}
console.log(formatUserProfile(user1))
console.log(formatUserProfile(user2))
console.log(formatUserProfile(user3))