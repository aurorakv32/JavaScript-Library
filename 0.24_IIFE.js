// Immediately Invoked Functional Expression - IIFE


// create a greeting function and take a name parameter
// and it should print Hello + name

// This is called a functional expression
var greeting = function(name) {
	console.log("Hello " + name);
};

//(); if you place () directly after the function, JS knows to immediately run the function
// To have the function place a name in, just place your parameter inside the ("Aurora")


// greeting("Aurora");


(function( value ){
	console.log(value)
})(21)

var myIIFE = (function() {
	var privateVar = "secrets";

	return {
		reveal: function() {
			console.log( privateVar );
		}
	}
})();
console.log(myIIFE.privateVar); // this will return undefined
myIIFE.reveal(); // will return "secrets"


