/* Problem statement: Create Employee interface (name, id, salary, department). Write updateEmployee using Partial<Employee>. Build two new types with Pick<Employee, "name" | "id"> and Omit<Employee, "salary">.
Input: updateEmployee({ name: "Rafi" })
Output: logs { name: "Rafi" }; Pick type = { name, id }; Omit type = { name, id, department }
 */

interface Employee {
    name : string,
     id : number,
      salary : number,
       department : string
}
function updateEmployee(employeeInfo : Partial<Employee>): void{
    console.log(`logs`, employeeInfo)
}
updateEmployee({ name: "Rafi" })
type NewEmployee1 = Pick<Employee, "name" | "id">
type NewEmployee2 = Omit<Employee, "salary">
