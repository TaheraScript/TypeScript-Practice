/* A tournament platform stores each player's match scores in an array. Organizers want a quick summary with the player's name, average score, and rank tier. A player is ranked MVP if their average score is at least 80, otherwise Rookie.
Player Structure
{
    name: string;
    scores: number[];
}
Task
Create a function named getPlayerStats. The function should receive a player object, calculate the average of all scores, determine the rank, and return a new object containing name, average, and rank.
Edge Case
Think about what your function should do if the scores array is empty.
 */
interface Player {
 name : string,
 scores : number[]
}
function getPlayerStats(player: Player): { name: string; average: number; rank: string } {
    const playersScore :number[] = player.scores
    const totalScore : number = playersScore.reduce((total,score) =>total + score,0)
    const averageScore =playersScore.length === 0? 0 : totalScore / playersScore.length
    const rank = averageScore >= 80? 'MVP' : 'Rookie'
   
    return {
        name : player.name,
        average : averageScore,
        rank,
    }
}
const player1 ={
    name: "Nova",
    scores: [90, 85, 95, 80]
}
const player2 ={
    name: "Zex",
    scores: [60, 55, 70, 50]
}
console.log(getPlayerStats(player1))
console.log(getPlayerStats(player2))
