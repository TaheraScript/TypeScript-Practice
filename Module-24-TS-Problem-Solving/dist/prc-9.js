"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function updateStorageUsage(currentUsageMB, action) {
    const { type, sizeMB } = action;
    if (action.type === 'upload') {
        return currentUsageMB + sizeMB;
    }
    const result = action.type === 'delete' && currentUsageMB < sizeMB ? 0 : currentUsageMB - sizeMB;
    return result;
}
console.log(updateStorageUsage(2000, { type: "upload", sizeMB: 500 }));
console.log(updateStorageUsage(2000, { type: "delete", sizeMB: 800 }));
console.log(updateStorageUsage(300, { type: "delete", sizeMB: 1000 }));
//# sourceMappingURL=prc-9.js.map