/* Scenario
A gaming platform, similar to Steam or the PlayStation Store, needs to determine which age-rating category of games a user is allowed to access, based on their age.
Task
Create a function named getAgeRatingAccess. The function should receive the user's age and return the highest age-rating category they can access.

Function Requirement
Accept the age as a number.
Return the access level as a string.
Correctly handle all age ranges.
 */
function getAgeRatingAccess(age: number): string {
    if (age <=7){
        return "E (Everyone)"
    }
    else if (age <=12){
        return  "E10+ (Everyone 10+)"
    }
    else if (age <= 16){
        return "T (Teen)"
    }
    return "M (Mature)"
    
 
}
console.log(getAgeRatingAccess(5))// "E (Everyone)"
console.log(getAgeRatingAccess(10))// "E10+ (Everyone 10+)"
console.log(getAgeRatingAccess(15))// "T (Teen)"
console.log(getAgeRatingAccess(20))// "M (Mature)"