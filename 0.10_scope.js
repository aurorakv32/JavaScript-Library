// Scopes

var name = "kenn";

function greeting() {
	var name = "ralph";
	random = "bread";
	return "Hello " + name;
}
// if you do not initialize a variable with var inside a function, 
// then you will change the value of the global value
// ie) var name = "kenn";

// function greeting() {
// 	var name = "ralph"; // local variable
//  name = "ralph"; // this changes the global variable to ralph!!
// 	return "Hello " + name;

// you can also start a variable within a function w/o using var
// and you will be creating a global function

console.log(greeting());
console.log(name);
console.log(random);

// Hoisting is the process of lines 10 through 20


