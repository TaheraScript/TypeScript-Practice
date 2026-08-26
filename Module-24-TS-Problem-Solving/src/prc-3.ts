/* Scenario
An esports tournament platform stores basic information about each registered player. The platform needs a function that turns that structured data into a readable profile card summary. A player contains username, level, and region.
Task
First define an appropriate TypeScript type or interface for the player. Then create a function named formatPlayerCard that receives a player object and returns a formatted sentence.
Requirements
Accept a properly typed player object.
Return a string.
Use the values from the object rather than hard-coding the result.
 */
interface Player {
    username: string,
    level: number,
    region: string
}
function formatPlayerCard(player: Player): string {
    const{username,level,region} = player
    return `${username} is a Level ${level} player from ${region}.`
   
}
let player1 ={
    username: "ShadowByte",
    level: 42,
    region: "Asia"
}

console.log(formatPlayerCard(player1))// "ShadowByte is a Level 42 player from Asia."
