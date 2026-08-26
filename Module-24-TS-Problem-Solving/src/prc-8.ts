/* Scenario
A social app's notification center receives two kinds of notifications: a like notification (someone liked your post) and a system notification (an announcement from the app). Each needs to be rendered as a different message.
Like Notification
{
    type: "like",
    fromUser: "Aisha"
}
System Notification
{
    type: "system",
    message: "Your subscription is expiring soon.",
    actionUrl: "/billing"
}
The actionUrl field is optional — a system notification may or may not include it.
Task
Create a function named renderNotification. The function should receive either a like notification or a system notification and return the rendered message string.
Rules
A like notification renders as: "<fromUser> liked your post."
A system notification renders as: "System: <message>"
If a system notification has an actionUrl, append " (Tap to view)" to the end of the message.
TypeScript Requirement
Use a discriminated union (based on the type field) so TypeScript can correctly narrow between the two notification shapes.
 */
type LikeNotification = {
     type: "like",
    fromUser: string

}
type SystemNotification ={
    type: "system",
    message: string,
    actionUrl ?: string
}
function renderNotification(notification: LikeNotification | SystemNotification): string {
 if(notification.type === 'like'){
    return `${notification.fromUser} liked your post.`
 }
 else if(notification.type === 'system'){
    if('actionUrl' in notification ){
        return `System: ${notification.message} (Tap to view)`
    }
 }
 //can use those 3lines(44-46)  below instead of upper 5lines(38-43) lines
//  else if(notification.type === 'system' && 'actionUrl' in notification ){
//     return `System: ${notification.message} (Tap to view)`
// }
 return `System: ${notification.message}`
}
console.log(renderNotification({ type: "like", fromUser: "Aisha" }))
console.log(renderNotification({ type: "system", message: "Maintenance complete." }))
console.log(renderNotification({ type: "system", message: "Your subscription is expiring soon.", actionUrl: "/billing" }))