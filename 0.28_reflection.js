// refelction is a way to pull data out of an object for inspection
// this will be helpful with you have several different objects
// the typeof operator will help with this

typeof flight.number // returns a number
typeof flight.status // returns a string
typeof flight.arrival // returns an object
typeof flight.manifest // returns undefined

// you must be careful because any property on the prototype chain can produce a value
typeof flight.toString // returns a function

// .hasOwnProperty() method returns true if the object has the property
// the property is passed as a parameter of the method
// the hasOwnProperty() method does not look at the prototype chain

