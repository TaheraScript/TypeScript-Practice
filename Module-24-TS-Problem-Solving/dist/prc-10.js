"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function calculateRentalFee(vehicle, minutes) {
    if (vehicle === 'scooter') {
        return 10 + (minutes * 2);
    }
    if (vehicle === 'ebike') {
        return 15 + (minutes * 3);
    }
    return 25 + (minutes * 5);
}
console.log(calculateRentalFee("scooter", 20)); // 50    (10 + 20 x 2)
console.log(calculateRentalFee("ebike", 20)); // 75    (15 + 20 x 3)
console.log(calculateRentalFee("moped", 20)); // 125   (25 + 20 x 5)
console.log(calculateRentalFee("ebike", 0));
//# sourceMappingURL=prc-10.js.map