// if/else

var elevatorUp = true;
var elevatorDown = true;
var elevatorOpen = true;
var elevatorBroken = true;
var elevatorStuckAndWeAreOnIt = true;
var elevatorNumber = 13;

if (elevatorUp === true) {
	console.log("Going up");
} else {
	console.log("Going Down");
}

if(elevatorBroken) {
	console.log("The elevator is broken.  Please take the stairs.");
} else {
	console.log("Welcome to the elevator!");
}

if (elevatorStuckAndWeAreOnIt) {
	console.log("HHHEEEEEEEEELP!!!!!!");
} else {
	console.log("Did you hear all that screaming?");
}

if(elevatorBroken && elevatorStuckAndWeAreOnIt) {
	console.log("We are never getting out of here!  We're gonna diiiiiiiiieeee!!!")
} else {
	console.log("Enter Elevator speech here:")
}

//CHALLENGE: Bronze

//WRITE YOUR OWN CONDITIONAL USING BOOLEANS AND lOGICAL OPERATORS.
//Come up with a simple example

var timer = true;

if(timer) {
	console.log("Gotta beat the clock");
} else {
	console.log("Tick Tock");
}

//Challenge: Silver
//Create a simple login console message.
// create 2 variables 1 for your users firstName, 2 for the boolean condition
// If login is true then print "You're Logged In!"
//Else if login is false then print "Please Sign In"

var userName = "Aurora";
var isLoggedIn = true;

if(userName = login) {
	console.log("You're Logged In!");
} else {
	console.log("Please sign in");
}

//CHALLEGE: Gold
//Set up a var with bankAccount and a var with debt.
//Also set up a difference var.
//Do some logic to show whether or not you will pay off your debt or prints out a message if you have extra money.

var bankAccount = 100;
var debt = 1000;
var difference = bankAccount - debt;



if (difference > debt) {
	console.log("You're balance is $" + difference + " got bank!")
} else {
	console.log("You're balance is $" + difference + "! " + "You should stay home and eat some Ramen noodles.");
}