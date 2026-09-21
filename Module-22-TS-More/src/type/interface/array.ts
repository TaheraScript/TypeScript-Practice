interface Employee {
    name: string;
    age: number;
    designation: string;
    salary?: number;
}
const Mahmood: Employee = {
    name: 'Mahmood',
    age: 30,
    designation: 'Software Engineer',
    salary: 80000
}
const Ali: Employee = {
    name: 'Ali',
    age: 25,
    designation: 'Web Developer'
}

const bill : Employee[] =[Mahmood,Ali,{ name: 'Ahmed',
    age: 28,
    designation: 'UI/UX Designer',
    salary: 60000}] 
