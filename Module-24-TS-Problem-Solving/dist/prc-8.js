"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function renderNotification(notification) {
    if (notification.type === 'like') {
        return `${notification.fromUser} liked your post.`;
    }
    else if (notification.type === 'system') {
        if ('actionUrl' in notification) {
            return `System: ${notification.message} (Tap to view)`;
        }
    }
    //can use those 3lines(44-46)  below instead of upper 5lines(38-43) lines
    //  else if(notification.type === 'system' && 'actionUrl' in notification ){
    //     return `System: ${notification.message} (Tap to view)`
    // }
    return `System: ${notification.message}`;
}
console.log(renderNotification({ type: "like", fromUser: "Aisha" }));
console.log(renderNotification({ type: "system", message: "Maintenance complete." }));
console.log(renderNotification({ type: "system", message: "Your subscription is expiring soon.", actionUrl: "/billing" }));
//# sourceMappingURL=prc-8.js.map