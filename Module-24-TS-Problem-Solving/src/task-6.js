"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function canEdit(role) {
    if (role === 'admin' || role === 'editor') {
        return true;
    }
    return false;
}
console.log(canEdit("admin"));
console.log(canEdit("editor"));
console.log(canEdit("viewer"));
//# sourceMappingURL=task-6.js.map