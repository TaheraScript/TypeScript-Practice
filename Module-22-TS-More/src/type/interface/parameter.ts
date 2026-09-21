interface Employee {
    name: string;
    age: number;
    designation: string;
    salary?: number;
}
//way of 1
const newEmployee =(employee:Employee):void=>{
    console.log(employee.age)
    console.log(employee.name)
    console.log(employee.designation)
}
console.log(newEmployee({ name: 'Ahmed',
    age: 28,
    designation: 'UI/UX Designer',
    salary: 60000}))
    
//way of 2
    const oldEmployee =({name,age,designation,salary}:Employee):void=>{
        console.log(name)
        console.log(age)
        console.log(designation)
    }
    console.log(oldEmployee({ name: 'Ahmed',
    age: 28,
    designation: 'UI/UX Designer',
    salary: 60000}))
