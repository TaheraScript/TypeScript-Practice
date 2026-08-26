/* A hospital has two types of patients: general patients and emergency patients. General patients only have basic information. Emergency patients have an additional emergencyLevel.
General Patient
{
    name: "Rahim",
    age: 35,
    type: "general"
}
Emergency Patient
{
    name: "Karim",
    age: 60,
    type: "emergency",
    emergencyLevel: 1
}
Emergency levels are: 1 → Critical, 2 → Serious, 3 → Moderate.
Task
Create a function named getPatientStatus. The function should receive either a general patient or an emergency patient and return an appropriate status message.

TypeScript Requirement
Use TypeScript's type system to represent the fact that emergencyLevel exists for emergency patients but not necessarily for general patients.
 */
type GeneralPatient ={
    name: string,
     age: number,
      type: "general"
}
type EmergencyPatient={
    name: string,
     age: number,
      type: "emergency",
      emergencyLevel:1|2|3
}
function getPatientStatus(patient: GeneralPatient | EmergencyPatient): string {
if(patient.type === 'general'){
    return  "General patient"
}
 if(patient.emergencyLevel === 1){
    return "Critical emergency"
}   
else if(patient.emergencyLevel === 2){
    return "Serious emergency"
}

    return "Moderate emergency"

}
console.log(getPatientStatus({ name: "Rahim", age: 35, type: "general" }))// "General patient"
console.log(getPatientStatus({ name: "Karim", age: 60, type: "emergency", emergencyLevel: 1 }))// "Critical emergency"
console.log(getPatientStatus({ name: "Hasan", age: 45, type: "emergency", emergencyLevel: 3 }))// "Moderate emergency"
