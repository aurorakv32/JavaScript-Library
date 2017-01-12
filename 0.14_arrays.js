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



