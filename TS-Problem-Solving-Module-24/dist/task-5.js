"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getStudentResult(student) {
    const arrayOfMarks = student.marks;
    if (arrayOfMarks.length === 0) {
        return {
            name: student.name,
            average: 0,
            result: 'Failed'
        };
    }
    const averageMark = arrayOfMarks.reduce((total, mark) => total + mark, 0) / arrayOfMarks.length;
    let finalResult = averageMark >= 40 ? 'Passed' : 'Failed';
    return {
        name: student.name,
        average: averageMark,
        result: finalResult
    };
}
console.log(getStudentResult({
    name: "Rafi",
    marks: [80, 75, 90, 85]
})); // Expected output:
// { name: "Rafi", average: 82.5, result: "Passed" }
// another example:
console.log(getStudentResult({
    name: "Nabil",
    marks: [30, 35, 40, 25]
})); // Expected output:
// { name: "Nabil", average: 32.5, result: "Failed" }
//# sourceMappingURL=task-5.js.map