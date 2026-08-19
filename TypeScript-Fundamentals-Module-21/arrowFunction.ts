const largestAmount =(price1 : number, price2 : number) :number => {
    if(price1 > price2){
        return price1
    }
    return price2
}
let biggestAmmount = largestAmount(300,700)
console.log(biggestAmmount)