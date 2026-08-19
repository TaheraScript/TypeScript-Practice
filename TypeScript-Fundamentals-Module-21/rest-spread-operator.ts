//rest,spread operator in array
const numb1 :number[] =[89,78,56,90]
const num2 : number[]=[23,45,34]

const newNumber : number[] =[...numb1,...num2]
console.log(newNumber)

//rest opertor in object

const student:{name : string, roll : number ,class : string}= {
    name : 'Sufia',
    roll : 90,
    class : 'nine'
}

const {name,...studentsInfo} = student
console.log(name)
console.log(studentsInfo)