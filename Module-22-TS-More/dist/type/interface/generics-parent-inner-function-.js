"use strict";
// function getValue (oldValue) {
//    let value = oldValue
Object.defineProperty(exports, "__esModule", { value: true });
//     function setValue (newValue){
//         value = newValue
//         return [value , setValue]
//     }
// }
// const [counter,setCounter] =getValue (90)
// console.log(counter)
// console.log(setCounter)
function setUser(userInfo) {
    let value = userInfo;
    function getValue(userNewInfo) {
        value = userNewInfo;
    }
    return [value, getValue];
}
setUser('Kakoli');
setUser(90);
setUser(true);
setUser({ email: 'you@gmail.com', id: 90 });
setUser(null);
//# sourceMappingURL=generics-parent-inner-function-.js.map