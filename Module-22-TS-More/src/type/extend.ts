type User = {
    name: string;
    age: number;
    designation: string;
    salary?: number;
}
type Admin = User & {permissions:string[]}//added permissions property with User to Admin type
const Mahmood: Admin = {
    name: 'Mahmood',
    age: 30,
    designation: 'Software Engineer',
    salary: 80000,
    permissions:['read','write','execute']
}
type Manager = User & {teamSize:number}//added teamSize property with User to Manager type
const Ali: Manager = {
    name: 'Ali',
    age: 25,
    designation: 'Web Developer',
    teamSize:10
}