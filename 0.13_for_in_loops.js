// for in loops are a shortcut way to do a for loop
// for(var lcv in "variable") is the same as 
// for(var i = 0; i < variable(etc); i++)


// var footballTeam = "Packers";
// for (i = 0; i < footballTeam.length; i++)
// for (var letter in footballTeam) { // letter is now the lcv
// 	console.log(footballTeam[letter]);
// }

// create a for in loop that prints each letter of your fav show

// var show = "Once Upon A Time";
// for (var i in show) {
// 	console.log(show[i]);
// }

// create a for in loop for your favorite food
// then can you count each vowel that occurs in that food?
// 1. we need a for in loop
// 2. use a conditional to check in te letter at an index is a vowel
// 3. ? == "a" || "e" || "i" || "o" || "u"
// 4. vowelCount = 0

// TODO - play around with this to fix the logic of the conditional
var food = "abcdefghijklmnopqrstuvwxyz";
var vowelCount = 0;

for (var i in food) {
	if (food[i].toLowerCase() === "a" || food[i].toLowerCase() === "e" || food[i].toLowerCase() === "i" || food[i].toLowerCase() === "o" || food[i].toLowerCase() === "u") {
		vowelCount++;
	}  
}
console.log("There are " + vowelCount + " vowels in " + food);

