// function getValue (oldValue) {
//    let value = oldValue
    
//     function setValue (newValue){
//         value = newValue
//         return [value , setValue]
//     }
// }
// const [counter,setCounter] =getValue (90)
// console.log(counter)
// console.log(setCounter)

function setUser<info>(userInfo : info) :[info , (userNewInfo : info) => void] {
    let value = userInfo
    function getValue(userNewInfo : info){
        value = userNewInfo
       
    }
     return [value , getValue]
}
setUser<string>('Kakoli')
setUser<number>(90)
setUser<boolean>(true)
setUser<User>({email :'you@gmail.com' ,id: 90})
setUser<User | null> (null)

interface User{
    email : string,
    id : number
}