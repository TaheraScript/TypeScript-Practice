"use strict";
/* Problem statement: Create Employee interface (name, id, salary, department). Write updateEmployee using Partial<Employee>. Build two new types with Pick<Employee, "name" | "id"> and Omit<Employee, "salary">.
Input: updateEmployee({ name: "Rafi" })
Output: logs { name: "Rafi" }; Pick type = { name, id }; Omit type = { name, id, department }
 */
Object.defineProperty(exports, "__esModule", { value: true });
function updateEmployee(employeeInfo) {
    console.log(`logs`, employeeInfo);
}
updateEmployee({ name: "Rafi" });
//# sourceMappingURL=pblm-10.js.map