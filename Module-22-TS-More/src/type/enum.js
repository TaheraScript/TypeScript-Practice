"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Day;
(function (Day) {
    Day[Day["Saturday"] = 0] = "Saturday";
    Day[Day["Sunday"] = 1] = "Sunday";
    Day[Day["Monday"] = 2] = "Monday";
    Day[Day["Tuesday"] = 3] = "Tuesday";
    Day[Day["Wednesday"] = 4] = "Wednesday";
    Day[Day["thursday"] = 5] = "thursday";
    Day[Day["Friday"] = 6] = "Friday";
})(Day || (Day = {}));
let offDay = Day.Friday;
console.log(Day.Monday);
console.log(offDay);
// if (offDay === Day.Sunday || offDay === Day.Friday){
//     console.log(offDay)
// }
// set as a type
var Role;
(function (Role) {
    Role["Admin"] = "Admin";
    Role["Moderator"] = "Moderator";
    Role["User"] = "User";
})(Role || (Role = {}));
console.log(Role.Admin);
const robin = {
    name: 'Robin',
    role: Role.Admin
};
const bobin = {
    name: 'Bobin',
    role: Role.User
};
console.log(bobin);
console.log(robin);
var Priority;
(function (Priority) {
    Priority[Priority["low"] = 0] = "low";
    Priority[Priority["moderate"] = 1] = "moderate";
    Priority[Priority["medium"] = 2] = "medium";
    Priority[Priority["high"] = 3] = "high";
    Priority[Priority["urgent"] = 4] = "urgent";
})(Priority || (Priority = {}));
//# sourceMappingURL=enum.js.map