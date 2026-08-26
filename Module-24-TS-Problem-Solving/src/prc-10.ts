/* Scenario
A micromobility rental app offers three vehicle types: scooter, e-bike, and moped. The rental fee depends on the vehicle type and how many minutes it was rented for.
Vehicle
Unlock Fee
Cost per Minute
scooter
10
2
ebike
15
3
moped
25
5

The final fee is calculated using: Final Fee = Unlock Fee + (Minutes × Cost per Minute)
Task
Create a function named calculateRentalFee. The function should receive a vehicle type and the rental duration in minutes, and return the calculated fee.
TypeScript Requirement
Create a union type so that only "scooter" | "ebike" | "moped" are accepted. This should be rejected by TypeScript: calculateRentalFee("bike", 20).
Additional Challenge
Consider what should happen when minutes is 0. Your function should still return a valid number based on your chosen interpretation of the pricing rules.
 */
type VehicleType = "scooter" | "ebike" | "moped";
 
function calculateRentalFee(vehicle: VehicleType, minutes: number): number {
if( vehicle === 'scooter'){
    return 10 + (minutes * 2)
}
if( vehicle === 'ebike'){
    return 15 + (minutes * 3)
}
    return 25 + (minutes * 5)
}
console.log(calculateRentalFee("scooter", 20))// 50    (10 + 20 x 2)
console.log(calculateRentalFee("ebike", 20))// 75    (15 + 20 x 3)
console.log(calculateRentalFee("moped", 20))// 125   (25 + 20 x 5)
console.log(calculateRentalFee("ebike", 0))
