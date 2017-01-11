/*// this variable is a string type
var firstName = "Aurora";
var lastName = "Wilson";
var fullName = firstName + " " + lastName;

// concatenation (this is how you build or combine strings together)
console.log(firstName + lastName);
console.log(firstName + " " + lastName);

// building an algorithm to hold long strings
console.log(fullName);

//empty variables
var num 
console.log(num) //comes up undefined since num has no value

var num = 2;
console.log(num); //now that num has a value, it will return that value

// empty strings (Initialize var)
var petsName = "";

// adding in a variable name to run in console
petsName = "Gus";

// running code to show that variables can be filled at a later date
console.log(petsName);

// let is a new way of naming variables (?)
let 

if (true) {
	let petsName = ""
}
*/
// short hand operators
//var age = 55;

// 1 + 1 = 2 // is the same as writing
// 1 += 1
// console.log(1 += 1) will read as 1 = 1 + 1 (this is wrong)
 //console.log(age += 1); // this will read as age = age + 1

// console.log(age /= 2);  // /= means divided by
//console.log(age *= 2);

// var 2nite = "Wednesday Night" // this is not a proper naming convention; variable names cannot start with an integer

/*

CHALLENGE: Bronze
Come up with five different variables. Think of 
real world uses for integers and create variables based on 
those things. A few examples might include: 
*/

var userName = "aurorakv32";
var carMake = "Sorento";
var zipCode = 47933;
var state = "Indiana";
var numKids = 5;

console.log(userName + " " + carMake + " " + zipCode + " "  + state + " " + numKids)

//CHALLENGE: Silver
 //Make a var called myNumber
//Set it to 0.
//Use shorthand to add 10 to it.
//Then use shorthand to subtract 1.
//Use shorthand to multiply by 9.
//Use shorthand to divide by 7.
//Just for practice, print myNumber to the console between each operation.
/*************************************************************
	 Operator ***** Example ***** Equivalent *****
    	+=		|    a += b   |    a = a + b   | 
    	-=		|    a -= b   |    a = a - b   | 
    	*=		|    a *= b   |    a = a * b   | 
    	/=		|    a /= b   |    a = a / b   | 
    	%=		|    a %= b   |    a = a % b   |   
              *****         *****            *****
*************************************************************/

/*-----------------------------------------------------------*/

var myNumber = 0;
console.log(myNumber += 10);
var myNumber = myNumber -= 1;
console.log(myNumber);
var myNumber = myNumber *= 9;
console.log(myNumber);
var myNumber = myNumber /= 7;
console.log(myNumber);

/*-----------------------------------------------------------*/
//CHALLENGE: Gold
//Challenge #3 - Lifetime Supply
// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!
// Store your current age into a variable.
// Store a maximum age into a variable.
// Store an estimated amount of glasses of water per day (as a number).
// Calculate how many glasses of water you would need for the rest of your life.
// Output the result to the screen like so: "You will need 5 million glasses to last you until the ripe old age of X".

var age = 36;
var maxAge = 100;
var waterPerDay = 8;
var waterForLife = ((maxAge - age) * waterPerDay * 365);
// alternate way (best practice) to do this
var message = "You will need " + waterForLife + " million glasses to last you until the ripe old age of " + maxAge;
console.log(message);

