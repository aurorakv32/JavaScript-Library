// there is a built-in number object in JS
// .MAX_VALUE, .MIN_VALUE, .POSTIVE_INFINITY, NEGATIVE_INFINITY, NaN

var biggestNum = Number.MAX_VALUE;
var smallestNum = Number.MIN_VALUE;
var infiniteNum = Number.POSTIVE_INFINITY;
var negInfiniteNum = Number.NEGATIVE_INFINITY;
var notANum = Number.NaN;

// .MAX_VALUE is the largest representable number
// .MIN_VALUE is the smallest representable number
// .NaN is not a number
// .NEGATIVE_INFINITY is a special negative infinite value, returned on overflow
// .POSITIVE_INFINITY is a special positive infinite value, returned on overflow
// .EPSILON is the difference between one and the smallest value greater than one
	// that can be represented as a number
// .MIN_SAFE_INTEGER is the minimum safest integer in JS
// .MAX_SAFE_INTEGER is the maximum safest integer in JS

// There are also several different Methods of number
	//parseFloat()
	//parseInt()
	//isFinite()
	//isInteger()
	//isNaN()
	//isSafeInteger()

//Number.prototype
	//toExponential() returns a string representing the num in exponential notation
	//toFixed() returns a string representing the number in fixed-point notation
	//toPrecision() returns a string representing the number to a specified precision
		// in fixed-point notation