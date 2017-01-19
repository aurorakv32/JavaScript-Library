// isNaN(value)

// value is to be tested
// true if the value is not a number, false otherwise

// because both == and === will equate to false, the isNaN is needed
// For example, dividing zero by zero results in a NaN — but dividing other numbers by zero does not.

// isNaN = function(value) {
//     Number.isNaN(Number(value));
// }

// isNaN(NaN);       // true
// isNaN(undefined); // true
// isNaN({});        // true

// isNaN(true);      // false
// isNaN(null);      // false
// isNaN(37);        // false

// // strings
// isNaN("37");      // false: "37" is converted to the number 37 which is not NaN
// isNaN("37.37");   // false: "37.37" is converted to the number 37.37 which is not NaN
// isNaN("123ABC");  // true:  parseInt("123ABC") is 123 but Number("123ABC") is NaN
// isNaN("");        // false: the empty string is converted to 0 which is not NaN
// isNaN(" ");       // false: a string with spaces is converted to 0 which is not NaN

// // dates
// isNaN(new Date());                // false
// isNaN(new Date().toString());     // true

// // This is a false positive and the reason why isNaN is not entirely reliable
// isNaN("blabla")   // true: "blabla" is converted to a number. 
//                   // Parsing this as a number fails and returns NaN

// Examples
// function increment(x) {
//   if (isNaN(x)) x = 0;
//   return x + 1;
// };

// // The same effect with Number.isNaN():
// function increment(x) {
//   if (Number.isNaN(Number(x))) x = 0;
//   return x + 1;
// };

// // In the following cases for the function's argument x,
// // isNaN(x) is always false, although x is indeed not a
// // number, but can be used as such in arithmetical
// // expressions
// increment("");            // 1: "" is converted to 0
// increment(new String());  // 1: String object representing an empty string is converted to 0
// increment([]);            // 1: [] is converted to 0
// increment(new Array());   // 1: Array object representing an empty array is converted to 0
// increment("0");           // 1: "0" is converted to 0
// increment("1");           // 2: "1" is converted to 1
// increment("0.1");         // 1.1: "0.1" is converted to 0.1
// increment("Infinity");    // Infinity: "Infinity" is converted to Infinity
// increment(null);          // 1: null is converted to 0
// increment(false);         // 1: false is converted to 0
// increment(true);          // 2: true is converted to 1
// increment(new Date());    // returns current date/time in milliseconds plus 1

// // In the following cases for the function's argument x,
// // isNaN(x) is always false and x is indeed a number
// increment(-1);            // 0
// increment(-0.1);          // 0.9
// increment(0);             // 1
// increment(1);             // 2
// increment(2);             // 3
// // ... and so on ...
// increment(Infinity);      // Infinity

// // In the following cases for the function's argument x,
// // isNaN(x) is always true and x is really not a number,
// // thus the function replaces it by 0 and returns 1
// increment(String);            // 1
// increment(Array);             // 1
// increment("blabla");          // 1
// increment("-blabla");         // 1
// increment(0/0);               // 1
// increment("0/0");             // 1
// increment(Infinity/Infinity); // 1
// increment(NaN);               // 1
// increment(undefined);         // 1
// increment();                  // 1

// // isNaN(x) is always the same as isNaN(Number(x)),
// // but the presence of x is mandatory here!
// isNaN(x) == isNaN(Number(x)) // true for every value of x, including x == undefined,
//                              // because isNaN(undefined) == true and Number(undefined) returns NaN,
//                              // but ...
// isNaN() == isNaN(Number())   // false, because isNaN() == true and Number() == 0

