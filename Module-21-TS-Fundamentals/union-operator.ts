//parseFloat()
// function calculateTax (amount : number | string , taxRate : number) :number {

//     if (typeof amount === 'string' ){
//        amount = parseFloat(amount)
//     }
//  return amount * taxRate
// }

//null

function calculateTax (amount : number | null , taxRate : number) :number {

    if ( amount === null ){
       amount = 0
    }
 return amount * taxRate
}
console.log(calculateTax(null,90))