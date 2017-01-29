// objects are never copied, they are however passed around by reference
// for example

var name = person;
name.nickname = 'stupid';
var nick = person.nickname;
	// nick is 'Curly' because x and stooge are reference to the same object

var a = {}, b = {}, c = {};
	// a, b, and c each refer to a different empty object
a = b = c = {};
	// a, b, and c all refer to the same empty object


// If there are several types of objects that need to be created at the same time
// it can be done using the above method