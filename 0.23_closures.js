// A closure gives you access to the variables set in a function
// after the function has completed and returned.

// Helps keep variables from getting pushed into global scope
// Degree of protection.  Variables can't be overwritten

//Mutable means that things can be changed

var friend = {}; // Empty object

var setAge = function(myAge) {

	var birthday = "4/12/1980";
	return {
		getAge : function() {
			return myAge;
		},
		getBirthday : function() {
			return birthday;
		}
	}
}

friend.age = setAge(36);
console.log(friend.age);
console.log(friend.age.getAge());
console.log(friend.age.birthday);
console.log(friend.age.getBirthday());

// this ensures that the variable of birthday is exposed only when we want it to be
// console.log(friend.age.getBirthday());
// var james = {};
// james.age = setAge(36);
// james.age.setBirthday("7/13/1980");
// console.log(james.age.getBirthday());