/* Scenario
A smart home app shows the WiFi signal strength of each connected device as a percentage. Rather than showing a raw number, the app wants to display a friendly status label.
Task
Create a function named getSignalStatus. The function receives the signal strength (0–100) and returns a status string.
 */
function getSignalStatus(strength: number): string {
    if (strength <= 20){
        return "Weak"
    }
    else if (strength <= 50){
        return "Fair"
    }
    else if (strength <= 80){
        return "Good"
    }
    return "Excellent"
  
 
}
console.log(getSignalStatus(10))// "Weak"
console.log(getSignalStatus(35))// "Fair"
console.log(getSignalStatus(65))// "Good"
console.log(getSignalStatus(95))// "Excellent"
console.log(getSignalStatus(20))// "Weak"
console.log(getSignalStatus(21))// "Fair"
console.log(getSignalStatus(80))// "Good"
console.log(getSignalStatus(81))// "Excellent"
