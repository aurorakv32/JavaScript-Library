/*
var firstName = "Aurora";
var age = 55;
var message = firstName + ": " + age; // JS reads this as all one big string

console.log(typeof message); //typeof will show you what type is, string, integer, etc
console.log(typeof age);

// quotes?
var greetings = 'Kenn says "How\'s your day?"';  //the \ is the escape operator
console.log(greetings);

// string methods

console.log(greetings.length);
console.log(greetings.toUpperCase());
console.log(greetings.toLowerCase());

console.log(greetings.split(" ")); //split breaks every word wherever there is a space
//you can also split on any character
console.log(greetings.slice(1)); //slices off anything before the number given
*/

//Write a string that has two variables. Output should be something like this: I graduated from TooCoolForSchool High School in 1994.

var highSchool = "North Vermillion";
var gradYear = 1998;
console.log("I graduated from " + highSchool + " in " + gradYear + ".");

console.log("");

//Challenge: Silver
//Create one variable that holds a string that prints out three other variables. The three other 
//variables should be the make, model, and year of your car.
// “I drive a 1968 Chevy Impala.”

var carYear = 2013;
var carMake = "Kia";
var carModel = "Sorento";
var message1 = "I drive a " + carYear + " " + carMake + " " + carModel + ".";

console.log(message1);

console.log("");

//Challenge: Gold
//Create a variable called age. Give the age a value.
//Use a conditional to check the age.
//If the age is 18 or above, console.log('You are an adult');
//If the age is less than 18, console.log('You are a minor');

var age = 20;
if(age > 18 && age < 21) {
	console.log("You are a young one");
} else if(age > 21) {
	console.log("You are an adult");
} else {
	console.log("You are a minor");
}

