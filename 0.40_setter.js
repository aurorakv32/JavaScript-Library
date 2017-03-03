// setters bind an object property to a function to be called when there is an attempt
//to se that property.

// {set prop(val){...}}
// {set [expression](val){...}}

// It is important to remember the following when working with setters
//  -it can have an identifier as a number or a string
//  -it can only have 0 or 1 parameter, exactly
//  -it cannot appear in an object literal with another set or with data 
//  	entry for the same property.
//  	( { set x(v) { }, set x(v) { } } and { x: ..., set x(v) { } } are forbidden)

var language = {
  set current(name) {
    this.log.push(name);
  },
  log: []
}

language.current = 'EN';
console.log(language.log); // ['EN']

language.current = 'FA';
console.log(language.log); // ['EN', 'FA']

// You can also delete setters with the delete operator
 delete o.current;

// setters can be used on existing objects using defineProperty
var o = {a: 0};

Object.defineProperty(o, 'b', { set: function(x) { this.a = x / 2; } });

o.b = 10; // Runs the setter, which assigns 10 / 2 (5) to the 'a' property
console.log(o.a) // 5


//using a computed name
var expr = 'foo';

var obj = {
  baz: 'bar',
  set [expr](v) { this.baz = v; }
};

console.log(obj.baz); // "bar"
obj.foo = 'baz';      // run the setter
console.log(obj.baz); // "baz"