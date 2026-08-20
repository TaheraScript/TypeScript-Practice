type UserRole = 'Admin' | 'User' | 'Manager' | 'Developer'

interface User {
    name: string;
    age: number;
    designation: string;
    role :UserRole;
    salary?: number;
}
interface Admin extends User{permissions:string[]}//added permissions property with User to Admin interface
const Mahmood: Admin = {
    name: 'Mahmood',
    age: 30,
    designation: 'Software Engineer',
    role:'Admin',
    salary: 80000,
    permissions:['read','write','execute']
}
interface Manager extends User{teamSize:number}//added teamSize property with User to Manager interface
const Ali: Manager = {
    name: 'Ali',
    age: 25,
    designation: 'Web Developer',
    role:'Manager',
    teamSize:10
}