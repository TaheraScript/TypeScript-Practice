function information (num1 :number[],num2 : number ,num3 : number) :{total : number} {
    let total = num2 + num3
    return {total}
}
const result  = information ( [8,9] , 9,6)
console.log(result)
