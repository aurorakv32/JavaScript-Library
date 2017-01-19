// // Number.isNaN(value)

// There are times when an expression needs to be check to see if it is or is not a number.
// One can use this formula to ensure a number is or is NOT returned.
// When used, this formula returns a boolean value of true or false

// Examples
// Number.isNaN(NaN);        // true
// Number.isNaN(Number.NaN); // true
// Number.isNaN(0 / 0)       // true

// // e.g. these would have been true with global isNaN()
// Number.isNaN("NaN");      // false
// Number.isNaN(undefined);  // false
// Number.isNaN({});         // false
// Number.isNaN("blabla");   // false

// // These all return false
// Number.isNaN(true);
// Number.isNaN(null);
// Number.isNaN(37);
// Number.isNaN("37");
// Number.isNaN("37.37");
// Number.isNaN("");
// Number.isNaN(" ");

// Number.isNaN = Number.isNaN || function(value) {
//     return typeof value === "number" && isNaN(value);
// }

// // Or
// Number.isNaN = Number.isNaN || function(value) {     
//     return value !== value;
// }