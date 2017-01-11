// Boolean equates to true or false

var tired = false;
var hungry = true;

//Comparison operators in JavaScript
//= asigns information into a variable
// == evaluates values (returns true or false)
// === compares data type and content (evaluates values and type of variable)
var isTrue = 1 == 1; 
console.log(isTrue);

var numTwo = 1 === "1";
console.log(numTwo);

//   Operator 		Meaning
//   	==			Equality
//		===			Strict Equality
//		!=			Inequality
//		!==			Strict Inequality
//		>			Greater Than
//		>=			Greater Than or equal
//		<			Less Than
//		<=			Less Than or equal

/*
CHALLENGE: Bronze
Come up with five different variables. Think of 
real world uses for integers and create variables based on 
those things. A few examples might include: 
*/

var phoneNumber = 10;
var numStudents = 26;
var zipCode = 5;
var tiresOnACar = 4;
var BitsInAByte = 8;

console.log("");

/*CHALLENGE: Silver
Write your own conditional that deals with Boolean Operators and Boolean Logic. Get as complicated as you want, 
just make sure it runs. Sign up for an account on Repl.io. Add the code there and send it to James, Paul, and Kenn. 
You can do that on Slack by using the @ symbol for all of us.
*/

var phoneNumber = prompt("Please enter your phone number:", "555-555-5555");

if(phoneNumber !== 10) {
	console.log("Please make sure you entered 10 digits");
} else {
	console.log("I just called to say....");
}

/*CHALLENGE: Gold 
I want to order some Colts gear online(Jona, go ahead with the Bengals(boo)), and I'm not sure 
which courier service to use yet. I want to know which one to use
for Next Day Air, 2 day air, 3 day ground, and whenever. Can you write
an if/else statement that helps me pick the best one? It's just your opinion here.
*/

var shipPrice = prompt("How much do you want to spend on shipping?", "in dollars");

if(shipPrice < 3) {
	console.log("3 Day ground");
} else if(shipPrice > 3 &&  shipPrice < 5) {
	console.log("2 Day Air");
} else {
	console.log("Next Day air is your only choice")
}

