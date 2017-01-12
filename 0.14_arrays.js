// arrays are a data collection
// arrays are indexed starting at 0
// this is how to create a JS array
// var names = ["paul", "gavin", "vern", "lisa", "kenn"];
// var nums = [1, 2, 3, 4, 5, 6, 4501];
// var mixed = ["dog", false, 6, "squirrel", 2]

// console.log(names[2]);
// console.log(nums[6]);
// console.log(mixed[3]);

// // can we use a for in loop to interate and console log each name in names

// for(var i in names) {
// 	console.log(names[i]);
// }

// console.log(names); // will print the whole array

// create an array of your fav candy bars
var candyBars = ["Twix", "Snickers", "Twizzlers", "M&M's"];
console.log(candyBars);
console.log(candyBars[3]);
candyBars.push("Peanut Butter Cups")  // .push() is a pre-built function that adds an entry to the end of an array; this is permanent
console.log(candyBars);
candyBars.pop();    // .pop() is a pre-built function that deletes the last entry on an array, this is permanent
console.log(candyBars);

// .slice() can slice out one chunk of data at the end of an array
// for example
console.log(candyBars.slice(0,2)); // this doesn't change the array, only returns the desired information
 

// .indexOf will return the index of where a value is in an array
// .splice will allow us to remove the item from the array permanently
console.log(candyBars.indexOf("M&M's")); 
candyBars.splice(0,1);
console.log(candyBars);



// CHALLENGE: BRONZE

// Create an array called numbers(see below) and console.log the sum of indices 0, 2, 4,6 

// var numbers = [8,6,7,5,3,0,9]
// 	Add numbers in the 0, 2, 4, 6 index.
// 	Should print: 27


// CHALLENGE: SILVER

// Compose an array of classmate names for the people on your row. 
// Iterate over the names, then give a personalize message to each of them. 



// CHALLENGE: GOLD

// A
// Write a function that accepts a parameter and then adds all the numbers together from the num array below.  (HINT! You will need to use a sum variable to keep track of your total.  You will need a loop and also the correct notation to access each index (think bronze challenge)

// var num = [8,6,7,5,3,0,9];

// If you finish the first one, 

// Using only for loops create a tree that looks like this:

// 0 : 2 : 4
// 0 : 2 : 5
// 0 : 3 : 4
// 0 : 3 : 5
// 1 : 2 : 4
// 1 : 2 : 5
// 1 : 3 : 4
// 1 : 3 : 5


