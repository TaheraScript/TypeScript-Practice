function information (num1 :number[],num2 : number ,num3 : number) :number[] {
    let total = num2 + num3
    return [total]
}
const result  = information ( [8,9] , 9,6)
console.log(result)


function add(num1 : number ,num2 : number) :[string,number] {
    let total = num2 + num1
    return ['total' ,total]
}
const output  = add( 9,6)
console.log(output)
