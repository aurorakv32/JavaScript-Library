// after you write the function, you want to be able to use it
// To do this, you must "call" the function.  
// When calling the function, you must pass parameters into it
// This can be done into an anonymous function or into a function 
// that has pre-defined parameters.


// This function has predefined parameters.
function square(n) {
	console.log(n * n);
};

// Call the function like this, 5 is any number that represents "n"
// square is the function name, 5 is the parameter
square(5);

// A function can call itself
function factorial(n){
  if ((n === 0) || (n === 1)) {
    return 1;
 } else {
    return (n * factorial(n - 1));
 }
};

console.log(factorial(5));

// It is very important to be sure to call the function you write
// Calls to function are typically done after all the function have 
// been written.  This helps to link functions together, and ensure 
// that all functions have run before they are asked to supply information
