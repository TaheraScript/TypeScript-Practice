/* Create a function named getStockStatus. The function receives the current stock quantity and returns a status string.
Additional Requirement
The function should return a string.*/
function getStockStatus(stock:number): string{
 if(stock === 0){
    return "Out of Stock"
 }
 else if (stock >=1 && stock <=5 ){    
    return "Almost Sold Out"
 }
 else if (stock >=6 && stock <= 20){    
    return "Available"
 }
 return "In Stock"
 
}
console.log(getStockStatus(0))// "Out of Stock"
console.log(getStockStatus(3))// "Almost Sold Out"
console.log(getStockStatus(12))// "Available"
console.log(getStockStatus(50))// "In Stock"
console.log(getStockStatus(5))//'Almost Sold Out'
console.log(getStockStatus(6))//'Available'
console.log(getStockStatus(20))//'Available'
console.log(getStockStatus(21))//'In Stock'
