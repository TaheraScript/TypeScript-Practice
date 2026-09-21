"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function formatPlayerCard(player) {
    const { username, level, region } = player;
    return `${username} is a Level ${level} player from ${region}.`;
}
let player1 = {
    username: "ShadowByte",
    level: 42,
    region: "Asia"
};
console.log(formatPlayerCard(player1)); // "ShadowByte is a Level 42 player from Asia."
//# sourceMappingURL=prc-3.js.map