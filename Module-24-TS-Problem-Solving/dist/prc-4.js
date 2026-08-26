"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function calculateTotalListeningTime(tracks) {
    let totalMinuteListened = tracks.reduce((total, track) => total + track.minutes, 0);
    return totalMinuteListened;
}
const tracks = [
    { title: "Blinding Lights", minutes: 3 },
    { title: "Levitating", minutes: 4 },
    { title: "Peaches", minutes: 3 }
];
const tracks2 = [
    { title: "Flowers", minutes: 3 },
    { title: "Anti-Hero", minutes: 4 }
];
console.log(calculateTotalListeningTime(tracks)); //10
console.log(calculateTotalListeningTime(tracks2)); //7
//# sourceMappingURL=prc-4.js.map