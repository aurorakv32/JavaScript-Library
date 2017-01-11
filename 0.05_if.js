// using "is" in front of boolean values is common
// example isOn, isTrue, isLoggedIn, etc

var isOn = true;
var isHot = true;

//1
if(isOn === true) {
	console.log("The light is on.  It's too bright, dude!")
} 

// This is proper way to write the boolean code
if(isOn) {
	console.log("Dude, turn that music off");
}

// You can use just an if statement (without an else)
if(isOn && isHot) {
	console.log("Dude, that music is on and it is so hot!");
}

if(isOn || isHot) {
	console.log("Dude, that music is on, it's loud, and it's NOT hot!!");
}

if(!isHot) {
	console.log("It is not hot!");
}

