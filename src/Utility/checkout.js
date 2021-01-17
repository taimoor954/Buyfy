export const orderTotalCalculation = (cart) => {
var total = 0
for(var item of cart)
{
    var {cost, quantity} = item
    total += cost * quantity 
}
return total
}