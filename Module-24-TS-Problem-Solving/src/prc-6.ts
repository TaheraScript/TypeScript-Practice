/* Scenario
A music streaming app has three subscription tiers: free, pro, and premium. Only pro and premium subscribers are allowed to download songs for offline listening.
Task
First create a union type Tier, then create a function named canAccessOfflineMode that receives a valid Tier and returns whether that tier can use offline mode.
TypeScript Requirement
This should produce a TypeScript error — canAccessOfflineMode("student") — since the purpose is to make TypeScript restrict the function to known tiers.
 */
type Tier = "free" | "pro" | "premium";
 
function canAccessOfflineMode(tier: Tier): boolean {
if( tier === 'pro' || tier === 'premium' ){
    return true
}
return false
}
console.log(canAccessOfflineMode("free"))//false
console.log(canAccessOfflineMode("pro"))//true
console.log(canAccessOfflineMode("premium"))//true