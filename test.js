//fortune teller exercise
var numKids = 5;
var partnerName = "Joshua";
var location = "Indiana";
var occupation = "coder";

var sentence = ("You will be a " + occupation + " in " + location + " and married to " + partnerName + " with " + numKids + " kids.");

console.log(sentence);

//fortune teller function exercise
function tellFortune(numKids, partnerName, location, occupation){
	console.log("You will be a " + occupation + " in " + location + " and married to " + partnerName + " with " + numKids + " kids.");
}
tellFortune(3, "Sally", "london", "nurse");
tellFortune(1, "Bob", "china", "yoga instructor");
tellFortune(2, "Jack", "Home", "cat");

//age calculator exercise
var birthYear = 1980;
var futureYear = 2020;
var age = (futureYear - birthYear) - 1;
var age1 = futureYear - birthYear;

console.log('I will either be ' + age + ' or ' + age1 + ' in ' + futureYear);

//puppy age calculator exercise
function calculateDogAge(pupAge) {
	var dogYears = pupAge * 7;
	console.log("Your doggie is " + dogYears + " years old in dog years!");
}

calculateDogAge(3);
calculateDogAge(5);
calculateDogAge(10);

//lifetime supply calculator exercise
var age = 37;
var maxAge = 90;
var perDiem = 2;

var snacks = (maxAge - age) * (perDiem * 365);

console.log("You will need " + snacks + " snacks to last you until the ripe old age of " + maxAge);

//lifetime supply function exercise
function calculateSupply(age, perDiem) {
	var maxAge = 100;
	var needed = (maxAge - age) * (perDiem * 365);
	console.log("You will need " + needed + " to last you until age " + maxAge);
}

calculateSupply(50, 2);
calculateSupply(30, 3);
calculateSupply(43, 2.5);

//geometrizer exercise
var radius = 3;
var circum = Math.PI * (2 * radius);
var area = Math.PI * (radius * radius);

console.log(circum, area);

//geometrizer function exercise
function calcCircum(radius) {
	var circum = Math.PI * (2 * radius);
	console.log(circum);
}

function calcArea(radius) {
	var area = Math.PI * (radius * radius);
	console.log(area);
}

calcCircum(3);
calcArea(3);

calcCircum(5);
calcArea(5);

calcCircum(10);
calcArea(10);


//temp converter exercise
var celsius = 20;
var convert = celsius * 1.8 + 32;
console.log(convert);

var fahrenheit = 68;
var convert1 = (fahrenheit - 32) / 1.8;
console.log(convert1);


//temp converter function
function celsiusToFahrenheit(celsius) {
	var conversion = celsius * 1.8 + 32;
	console.log(conversion);
}

function fahrenheitToCelsius(fahrenheit) {
	var convert2 = (fahrenheit - 32) / 1.8;
	console.log(convert2);
}

celsiusToFahrenheit(25);
fahrenheitToCelsius(25);

celsiusToFahrenheit(100);
fahrenheitToCelsius(100);

celsiusToFahrenheit(0);
fahrenheitToCelsius(0);