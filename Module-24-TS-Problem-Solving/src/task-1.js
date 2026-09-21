"use strict";
/* Create a function named getTicketPrice. The function should receive the customer's age and return the appropriate ticket price.
Function Requirement
Accept the age as a number.
Return the ticket price as a number.
Correctly handle all age ranges.

Function Requirement
Accept the age as a number.
Return the ticket price as a number.
Correctly handle all age ranges.*/
Object.defineProperty(exports, "__esModule", { value: true });
function getTicketPrice(age) {
    if (age < 5) {
        return 0;
    }
    else if (age >= 5 && age <= 12) {
        return 100;
    }
    else if (age >= 13 && age <= 59) {
        return 200;
    }
    return 120;
}
console.log(getTicketPrice(3)); // 0
console.log(getTicketPrice(10)); // 100
console.log(getTicketPrice(25)); // 200
console.log(getTicketPrice(65)); // 120
//# sourceMappingURL=task-1.js.map