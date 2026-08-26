"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getPlayerStats(player) {
    const playersScore = player.scores;
    const totalScore = playersScore.reduce((total, score) => total + score, 0);
    const averageScore = playersScore.length === 0 ? 0 : totalScore / playersScore.length;
    const rank = averageScore >= 80 ? 'MVP' : 'Rookie';
    return {
        name: player.name,
        average: averageScore,
        rank,
    };
}
const player1 = {
    name: "Nova",
    scores: [90, 85, 95, 80]
};
const player2 = {
    name: "Zex",
    scores: [60, 55, 70, 50]
};
console.log(getPlayerStats(player1));
console.log(getPlayerStats(player2));
//# sourceMappingURL=prc-5.js.map