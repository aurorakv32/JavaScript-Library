function setLine() {
	console.log("----------------------------------")
}

/*function hello() {
	console.log("Hello World");
}

hello();

// create a function called greeting (and pass argument)
function greeting(name) {
	 return "Hello "+ name;
}

// You can't console.log a console.log!!!!!

// variables can hold functions
var addGreeting = greeting("Paul") + ", how are you doing today?";
console.log(addGreeting);

greeting("Sally");

// adding numbers to functions
function printNumber() {
	console.log(1)
}

printNumber();

// equations inside of functions
function sumNum(num1, num2) {
	return num1 + num2;
}

sumNum(11, 50);

// practice writing functions using math
function subNum(num1, num2) {
	return num2 - num1;
}

subNum(10, 4);

function mulNum(num1, num2) {
	return num2 * num1;
}

mulNum(7, 2);

function divNum(num1, num2) {
	return num1 / num2;
}

divNum(100, 5);

function calculatePriceIndiana(quantity, price) {
	var tax = 0.07;
	var totalTax = quantity * price * tax;
	var totalPrice = totalTax + quantity * price;

	return totalPrice;
}

console.log(calculatePriceIndiana(17, 5));

// built in Objects example
var today = new Date(); // new creates a new object
console.log(today.toDateString());

// if using the date, you can specify a date by passing arguments
// into the var line Date(here)

function checkOdd(num) {
	if(num % 2 ===0) { 
		return num + " is even";
	} else {
		return num + " is odd";
	}
}
console.log(checkOdd(15));



function divByThree(num) {
	if(num % 3 === 0) {
		return num + " is div by 3";
	} else {
		return num + " is not div by 3";
	}
}

console.log(divByThree(10));


// refactoring the greeting function using 2 names with 
// an if statement

function greeting(name) {
	if(name == "Josh") {
	 return "Hello "+ name;
	} else if(name == "Bob") {
		return "Howdy " + name;
	} else {
		return "What's your name?";
	}
}

console.log(greeting("Josh"));

*/

setLine();

// Write a function with two strings as parameters.
// 		The function should concatenate the string.

function codeTastic(str1, str2) {
	return str1 + str2;
}

console.log(codeTastic("I love ", " to code!"));


// Write a function that will help me easily calculate monthly bills.

function monthlyBills(bill1, bill2) {
	return bill1 + bill2;
}

console.log(monthlyBills(400, 200));


// Write a function that takes quantity, price, tax and an item
// The function should take the quantity, price, tax and the item name and return
// a response similar to this.
// --150 hotdogs will cost you $145 (your math may not be perfect and may
//  potentially return 145.457.  If that is the case, don’t sweat it.

function hotDog(quantity, price) {
	var tax = 0.07;
	var totalTax = quantity * price * tax;
	var totalPrice = totalTax + quantity * price;
	
	return quantity + " hot dogs will cost you $" + totalPrice;
	
}

console.log(hotDog(150, 3));
