enum Day {
    Saturday,
    Sunday,
    Monday,
    Tuesday,
    Wednesday,
    thursday,
    Friday
}
let offDay :Day = Day.Friday
console.log(Day.Monday)
console.log(offDay)

// if (offDay === Day.Sunday || offDay === Day.Friday){
//     console.log(offDay)
// }

// set as a type
enum Role {
    Admin = 'Admin',
    Moderator = 'Moderator',
    User = 'User'
}

console.log(Role.Admin)
const robin = {
    name : 'Robin',
    role : Role.Admin
}
const bobin ={
    name : 'Bobin',
    role : Role.User
}
console.log(bobin)
console.log(robin)

enum Priority {
    low,
    moderate,
    medium,
    high,
    urgent
}