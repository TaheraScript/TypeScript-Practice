/* A school stores the marks of each student in an array. Teachers want a quick summary containing the student's name, average mark, and whether the student passed or failed. A student is considered passed if their average mark is at least 40.
Student Structure
{
    name: string;
    marks: number[];
}
Task
Create a function named getStudentResult. The function should receive a student object, calculate the average of all marks, determine whether the student passed, and return a new object containing name, average, and result.
Edge Case
Think about what your function should do if the marks array is empty.
 */
 type Student ={
    name: string;
    marks: number[];
 }
 type Result ={
    name : string,
    average : number ,
     result : string
 }
 
function getStudentResult(student: Student):Result  {
    
 const arrayOfMarks: number[] = student.marks
 if(arrayOfMarks.length === 0){
     return {
        name : student.name,
        average : 0,
        result : 'Failed'
    }
 }
    const averageMark : number= arrayOfMarks.reduce((total,mark)=> total + mark ,0) / arrayOfMarks.length
   let finalResult: string = averageMark >= 40 ? 'Passed' :  'Failed'
   
    return {
        name : student.name,
        average : averageMark,
        result : finalResult
    }
}
console.log(getStudentResult({
    name: "Rafi",
    marks: [80, 75, 90, 85]
})
)// Expected output:
// { name: "Rafi", average: 82.5, result: "Passed" }
 
// another example:
console.log(getStudentResult({
    name: "Nabil",
    marks: [30, 35, 40, 25]
})
)// Expected output:
// { name: "Nabil", average: 32.5, result: "Failed" }

