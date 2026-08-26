/* Scenario
A web application has three types of users: admin, editor, and viewer. Different roles have different permissions. For this problem, only administrators and editors are allowed to edit content.
Task
First create a union type Role, then create a function named canEdit that receives a valid Role and returns whether that role can edit content.
Rules
Role
Can Edit?
admin
true
editor
true
viewer
false

TypeScript Requirement
This should produce a TypeScript error — canEdit("guest") — since the purpose is to make TypeScript restrict the function to known roles.
 */
type Role = 'admin' | 'editor' | 'viewer'
function canEdit(role: Role):boolean {
if (role === 'admin' || role === 'editor'){
    return true
}
return false
 
}
console.log(canEdit("admin"))
console.log(canEdit("editor"))
console.log(canEdit("viewer"))

