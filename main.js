/*
    Exercise 26 
*/
var productList = [{
        product: 'Shirt',
        price: 10.00,
        color: 'Blue'
    },
    {
        product: 'Pants',
        price: 15.00,
        color: 'Brown'
    },
    {
        product: 'Shoes',
        price: 5.00,
        color: 'Blue'
    }
];
//////////////////////////////////////////Part 1
function productPriceTotal (object){
	var tempTotal=0;
	//console.log(tempTotal);
	
	
	/*for(i=0;i<object.length,i++)
	{
		tempTotal += object[i].price;
		console.log(tempTotal);
		
	}

	return tempTotal;
}*/

for (var item in object) {
 tempTotal += object[item].price;
 //console.log(tempTotal);
}
return tempTotal;
}
//debugger;
console.log(productPriceTotal(productList));

/*
    This function should get the total price of the items in your cart.

var productList = [
    {product: 'Shirt', price: 10.00, color:'Blue'},
    {product: 'Pants', price: 10.00, color:'Brown'},
    {product: 'Shoes', price: 15.00, color: 'Blue'}
];

    The total is 35.
*/


var productList2 = [
    {product: 'Shirt', price: 10.00, color:'Blue'},
    {product: 'Pants', price: 10.00, color:'Brown'},
    {product: 'Shoes', price: 15.00, color: 'Blue'}
];


console.log(productPriceTotal(productList2));





function getTotalCost(cart) {
    var totalCost = 0;

    /*Calculate the total cost of the cart.*/
    /* Your Code Here */
	for (var item in cart) {
 totalCost += cart[item].price;
 
}

    return totalCost;
}

var totalCost = getTotalCost(productList);
console.log(totalCost);



//////////////////////////////////////////Part 2
/*
    This function should get the total price of the items in your cart AND add tax to it.
var productList = [
    {product: 'Shirt', price: 10.00, color:'Blue'},
    {product: 'Pants', price: 10.00, color:'Brown'},
    {product: 'Shoes', price: 15.00, color: 'Blue'}
];
    The total is 35.
    Total plus tax is 36.75
*/

var TAX = 0.05;
function getTotalCostPlusTax(cart) {
    var costPlusTax = 0;

    var totalCart = getTotalCost(cart);

    //Your Code Here

    costPlusTax=totalCart*TAX+totalCart;
	
    return costPlusTax;
}

var totalCostPlusTax = getTotalCostPlusTax(productList);
console.log(totalCostPlusTax);

var totalCostPlusTax2 = getTotalCostPlusTax(productList2);
console.log(totalCostPlusTax2);

//////////////////////////////////////////Part 3
/*
   Use jQuery to perform the following tasks 
*/


//3.1 -  Select the element with the id 'title' and add the class 'color' to it.

$("#title").addClass("color");

//3.2 - Select the odd articles  inside the '.container' element.  Add the class 'odd' to them.
$("article:odd").addClass("odd");


//3.3 - Select and remove the class 'active' from the Home nav link. Add active to the 'About' link.
$(".home").removeClass("active")
$(".about").addClass("active");

