// using the get syntax binds an object property to a function that will be called with that property is looked up

// {get prop() {...}}
// {get [expression](){...}}

// prop is the name of the property to bind the given function

// expression is used to bind a computed property to a given function

var obj = {
  log: ['test'],
  get latest() {
    if (this.log.length == 0) return undefined;
    return this.log[this.log.length - 1];
  }
}
console.log(obj.latest); // Will return "test".

// you can delete a get by using
delete obj.latest;

// you can append a getter to an existing object using Object.defineProperty()

var o = {a: 0};

Object.defineProperty(o, 'b', { get: function() { return this.a + 1; } });

console.log(o.b) // Runs the getter, which yields a + 1 (which is 1)

// to use a computed property

var expr = 'foo';

var obj = {
  get [expr]() { return 'bar'; }
};

console.log(obj.foo); // "bar"

