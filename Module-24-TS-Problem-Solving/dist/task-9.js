"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function processTransaction(balance, transaction) {
    if (transaction.type === "deposit") {
        return balance + transaction.amount;
    }
    else if (transaction.amount > balance) {
        return balance;
    }
    return balance - transaction.amount;
}
console.log(processTransaction(5000, { type: "deposit", amount: 2000 })); // 7000
console.log(processTransaction(5000, { type: "withdraw", amount: 2000 })); // 3000
console.log(processTransaction(5000, { type: "withdraw", amount: 7000 })); // 5000
//# sourceMappingURL=task-9.js.map