// This is one of many ways to create objects
// This one is called object literal

// Empty Objects

// var emptyObject = {};

// // Object with properties
// var facebookFriend = {
// 	name 			: "", 
// 	age 			: 0,
// 	vocation		: "",
// 	inRelationship	: true
// };

// facebookFriend.name = "Jonas";
// console.log(facebookFriend.name);  // . notation is called an accessor (gives you access to whatever follows the .)

// facebookFriend.age = 40;
// console.log(facebookFriend.age);
// // Static content is filler stuff, ie) "just turned"
// console.log(facebookFriend.name + " just turned " + facebookFriend.age +"!!");

// if(facebookFriend.inRelationship) {
// 	console.log(facebookFriend.name + " is in a relationship");
// } else {
// 	console.log(facebookFriend.name + " is NOT in a relationship");
// }

// facebookFriend.name = "Kenn";
// console.log(facebookFriend.name);


var books = {
	title: "",
	author: "",
	type : "",
	genre: "",
	publisher: ""
};

books.title = "The Two Towers";
books.author = "J. R. R. Tolkien";
books.type = "hardback";
books.genre = "fantasy";
books.publisher = "Random House";

console.log(books);