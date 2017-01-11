// Figure out if the user can vote, drink, rent a car or none

var age = 18;

if (age >= 25) {
	console.log("You can rent a car, drink, and vote");
} else if(age >= 21) {
	console.log("You can drink and vote");
} else if(age >= 18) {
	console.log("You can vote")
} else {
	console.log("You can not drink, or vote, or rent a car.  Bummer!");
}

//expand upon our a simple login.
// create 2 variables 1 for your users username, 2 for the boolean condition then another to check if the user is an admin
// If login is true then print "You're Logged In!"
// If login is true and the user is a admin, print "This is the dashboard for your employee records you have master control"
// If Login is true and the user is a manager, print "This is the dashboard for your employee records, you can only read but not create users"
// If login is true and the user is a employee, print "clock in and clockout please" 
//Else if login is false then print "Please Sign In"

var userName = "Aurora";
var isLoggedIn = true;
var isAdmin = false;
var isManager = true;
var isEmployee = false;


if(isLoggedIn) {
	console.log("Welcome " + userName);
} else if(isAdmin) {
	console.log("This is the dashboard for your employee records, you can only read but not create users")
} else if(isManager) {
	console.log("This is the dashboard for your employee records you have master control");
} else if(isEmployee) {
	console.log("");
} else {
	console.log("Sorry try again");
}

/*
Create an if statement that has several conditions.
 Pretend that we will play four total games next year against the patriots.
 Deal with the Patriots record versus our record In other words, if our record was better, 
 talk some smack. If not, you should still talk some smack, but in 
 a different way. If the records were the same, talk some smack. 
 
 */

var coltsWins = 4;


if (coltsWins == 4) {
	console.log("Go Colts!(Not really)");
} else if(coltsWins > 2){
	console.log("Barely winning!");
} else if(coltsWins > 1) {
	console.log("Can they do it?");
} else {
	console.log("Beat by the Patriots again!");
}


 /*1. Write a program that prompts your users in the browser to enter a
number from 1 to 5 about how optimistic they are about the Colts next year.
2. Have a different response for each number.

*HINT*
1. you have to build this in relp.it 
2. Research prompt
*/

var num = prompt("How optimistic are you about the Colts winning next year?", "Pick a number from 1 to 5 or any number really...");

if(num == 5) {
  console.log("You're a true Colts fan!");
} else if (num == 4) {
  console.log("That's pretty optimistic");
} else if (num == 3) {
  console.log("Don't you believe in your team?!");
} else if (num == 2) {
  console.log("You call yourself a fan?");
} else if (num ==1) {
  console.log("It's ok, I understand");
} else {
  console.log("Go STEELERS!!!!!");
};