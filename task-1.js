// first task 
var myTotalAmount = 1000;
var applePrice = 350;
var orangePrice = 350;
var myTotalCost = applePrice + orangePrice;
// console.log(myTotalCost);
var merchantBack = myTotalAmount - myTotalCost;
console.log(merchantBack);


// second task
var math = 75.25;
var bio = 65;
var chemestry = 80;
var physics = 35.45;
var bangla = 99.50;

var totalMarks = math + bio + chemestry + physics + bangla;
var averageMarks = totalMarks / 5;
console.log(averageMarks.toFixed(3));

// third task
var Dividend = 119;
var Divisor = 5;
var Remainder = Dividend % Divisor;
console.log(Remainder);




// fourth task
const a  = isNaN('11');
const b = isNaN(2-10);
console.log(a);
console.log(b);