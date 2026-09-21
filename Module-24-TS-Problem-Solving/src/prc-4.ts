/* Scenario
A music streaming app wants to show users their yearly "Wrapped" summary — the total number of minutes they've listened to, based on an array of tracks they've played.
Track Structure
{
    title: string;
    minutes: number;
}
Task
Create a function named calculateTotalListeningTime. The function should receive an array of tracks and return the total minutes listened.
Requirements
Properly type the track object.
Properly type the array of tracks.
Return the total as a number.
An empty array should return 0.
 */
interface Track {
    title : string,
    minutes : number
}
function calculateTotalListeningTime(tracks: Track[]): number {
    let totalMinuteListened = tracks.reduce((total,track) => total + track.minutes,0)
    return totalMinuteListened
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
console.log(calculateTotalListeningTime(tracks))//10
console.log(calculateTotalListeningTime(tracks2))//7
