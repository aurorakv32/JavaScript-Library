// Method invocation pattern
// when a function is stored as a property of an object it's a method
// when invoked, this is bound to the object

var myObject = {
	value: 0,
	increment: function(inc){
		this.value += typeof inc === 'number' ? inc : 1;
	}
};

myObject.increment();
document.writeln(myObject.value);

myObject.increment(2);
document.writeln(myObject.value);


// Function Invocation
// when invoked with this pattern it is bound to the global object
//THIS IS A MISTAKE IN THE DESIGN OF THE LANGUAGE
// you cannot use this as an inner function however there is a workaround

var sum = add(3, 4);

myObject.double = function() {
	var that = this;  //Workaround

	var helper = function() {
		that.value = add(that.value, that.value);
	};

	helper();  //invoke helper as a functions
};

//invoke double as a method

myObject.double();
document.writeln(myObject.getValue());


//Constructor Invocation Pattern
// JS is a prototypal inheritance language; most languages are classical 
// Create a constructor function called Quo
//it makes an o