"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function canAccessOfflineMode(tier) {
    if (tier === 'pro' || tier === 'premium') {
        return true;
    }
    return false;
}
console.log(canAccessOfflineMode("free")); //false
console.log(canAccessOfflineMode("pro")); //true
console.log(canAccessOfflineMode("premium")); //true
//# sourceMappingURL=prc-6.js.map