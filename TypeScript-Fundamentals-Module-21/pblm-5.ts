/* Problem Statement:
একটি user object বানাও যেখানে name required, কিন্তু email optional।
Input:
{ name: "Amina" }
Output:
Name: Amina, Email: Not provided
 */

const user :{name : string ,email?: string} ={
    name : 'Amina'

}
console.log(`Name: ${user.name}, Email: ${user.email? user.email :'Not provided'}`)