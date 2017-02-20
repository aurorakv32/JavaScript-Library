// JS allows us to handle exceptions, which are unusual, but not unexpected
// you should always code to handle these exceptions
// for example
var add = function (a, b) {
	if (typeof a !== 'number' || typeof b !== 'number'){
		throw {
			name: 'TypeError',
			message: 'add needs numbers'
		};
	}
	return a + b;
}

// the throw statement interrupts the execution of a function and should be given
// an exception object containing a name property and a descriptive message property


