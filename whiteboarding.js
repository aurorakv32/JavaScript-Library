//WEEK 3

//Challenge #1
var name1 = "Aurora";
var name2 = "Wilson";

function greeting(name1, name2) {
   console.log("Hello " + name1 + " " + name2);
}

greeting(name1, name2);


//Challenge #2
function addNum(num1, num2) {
	console.log(num1 * num2);
}

addNum(2, 4);


//Challenge #3
var user = {
	username: '',
	pw: '',
	isLoggedIn: true
}

user.username = "Aurora";
user.pw = "test";
user.isLoggedIn = false;

function isLoggedIn() {
	if(isLoggedIn === true) {
		console.log(user.username + " is logged in");
	} else {
		console.log(user.username + " is not logged in");
	}
}

isLoggedIn(user.username);


//Challenge #4
for(var i = 0; i < 21; i+= 2) {
	console.log(i);
}


//WEEK 6
//Challenge #1
function doMath(op, num1, num2) {
	if(op === 'add') {
		return (num1 + num2);
	} else if( op === 'subtract') {
		return (num1 - num2);
	} else if (op === 'multiply') {
		return (num1 * num2);
	} else if (op === 'divide') {
		return (num1 / num2);
	} else if (op === 'remainder') {
		return (num1 % num2);
	} else {
		return "Operation not available";
	}
}

console.log(doMath("reinder", 7, 3));

function doMath(op, num1, num2) {
	switch(op) {
		case "add":
			return num1 + num2;
			break;
		case 'subtract':
			return num1 - num2;
			break;
		case 'multiply':
			return num1 * num2;
		 	break;
		 case 'divide':
		 	return num1 / num2;
		 	break;
		 case 'remainder':
		 	return num1 % num2;
		 	break;
		 default: 
		 	result = 'Operator not known';
	}
}

console.log(doMath('remnder', 11, 4));


// //Challenge #2
// <ul>
// 	<li ng-repeat="item in items | orderBy: order">
// 		qty: {{item.qty}} - 
// 		{{item.name}} -
// 		priority: {{item.priority}}
// 		<button id="remove" ng-click="removeItem(item)"><b>X</b></button>
// 	</li>
// </ul>

// //Challenge #3
// function isRightTriangle(side, base, hypotenuse){
// 	if(side * side + base * base === hypotenuse * hypotenuse) {
// 		console.log("true");
// 	} else {
// 		console.log('false');
// 	}
// }

// isRightTriangle(5,6,7);

// // Challenge #4
// See diagram on WB Challenge Sheet

var user = {
	username: '',
	pw: '',
	isLoggedIn: true
}

user.username = 'me';
user.pw = 'test';
user.isLoggedIn = false;

function isLoggedIn() {
	if(isLoggedIn === true) {
		console.log(user.username + " is logged in")
	} else {
		console.log(user.username + " is not logged in");

	}
}

isLoggedIn(user.username);