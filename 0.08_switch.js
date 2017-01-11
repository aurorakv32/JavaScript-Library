/*
switch caseSwitch(expression) {
	case n:
		code block
		break'
	case m:
		code block
		break;
	default:
		default code block
}
*/

var marginOfColtSuperBowlWins = 10;
var result

switch (marginOfColtSuperBowlWins) {
	case 3: 
		result = "Cool, that will be a good game";
		break;
	case 7: 
		result = "I like it.  Close enough";
		break;
	case 10: 
		result = "That's what I'm talking about";
		break;
	case 17: 
		result = "Sweet, we're awesome";
		break;
	default:
		result = "mmmhm getting there";
}

console.log("Switch Result: " + result);


