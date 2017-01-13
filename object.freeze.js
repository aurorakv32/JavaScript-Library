// the object.freeze(obj) syntax does what it implies;
// it freezes an object and prevents anything from being
// added to it or removed from it.  
// If an object is frozen, and any run is attempted, an error 
// will be thrown

var obj = {
	num1 : 0,
	str1 : "Hello"
} 

var num = Object.create(obj);
num.num1 = 11;
num.str1 = "Hello";
console.log(num);

Object.freeze(obj);

var num2 = Object.create(obj);
num2.num1 = 12;
num2.str1 = "World";

console.log(num2);

