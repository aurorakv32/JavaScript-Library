// JSON is an acronym for Java Script Object Notation
// Nested Arrays
//var name = [["James", "Paul", "Cameron", "Chris"], ["Morgan", "Julie", "Abbey", "Brie"]];
// console.log(name[0][2]);

var items = [
	{
		"id": 1,
		"name": "Green Door",
		"price": 12.50,
		"tags": ["home", "green", "vinyl"]
	},

	{
		"id": 1,
		"name": "Red Door",
		"price": 12.50,
		"tags": ["home", "red", "cheap wood"]
	}, 

	{
		"id": 3,
		"name": "Blue Door",
		"price": 125.00,
		"tags": ["garage", "blue", "vinyl"]
	}, 

	{
		"id": 4,
		"name": "Yellow Door",
		"price": 1000.00,
		"tags": ["home", "garage", "yellow", "gold"]
	}
];

/*console.log(items); // this will return every object within the array of items
console.log(items[0]); // this will return the first object within the array
console.log(items[0].id);  // this will return only the id of the first object within an array
console.log(items[0].tags[2]); // this will return the 2nd spot in the array of the object in the "0" spot of the array

console.log(items[3].tags[3]);
*/
for(i = 0; i < items.length; i++) {
	console.log(items[i].name);
};