// parseInt() is a function inside JS that allows us to take inputs and change integer input
// from a string into an integer.  This is like the Gold Badge Assesment we did that took
// an integer input, change it from a string to an integer and then add those integers together.

// parseInt() is good enough to know the difference between a string integer and a string of characters
// If the first character is not a number, then parseInt() will return NaN.

// parseInt() also works with radix, the base in mathematical numeral systems.  However, in order to use, it must be specified.  

// These are with strings and radix
// These will always return 15
parseInt(' 0xF', 16);
parseInt(' F', 16);
parseInt('17', 8);
parseInt(021, 8);
parseInt('015', 10);   // parseInt(015, 10); will return 13
parseInt(15.99, 10);
parseInt('15,123', 10);
parseInt('FXX123', 16);
parseInt('1111', 2);
parseInt('15 * 3', 10);
parseInt('15e2', 10);
parseInt('15px', 10);
parseInt('12', 13);

