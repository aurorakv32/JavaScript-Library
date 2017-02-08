// Enumeration will include all properties from a loop, including functions and prototypes
// that you might not be interested in.  This can be regulated by using the right loop.  
// If using a for in loop, you will get your information returned to you in random order.
// However, if you use a for loop, you will get your results returned to you in the correct 
// order.  
// You can also filter out unneccessry values by using hasOwnProperty or typeOf.

// This will return name of peeps, but in a random order
// for in loop ie)
var name;
for (name in peeps) {
	if(typeOf peeps[name] !== 'function'){
		document.writeIn(name + ':' + peeps[name]);
	}
}


// this will return the name of peeps, but in order
var i;
var peeps = [
'firstname',
'lastname', 
'occupation'
];

for(i = 0; i < peeps.length; i += 1) {
	document.writeIn(peeps[i] + ':' + stooge[peeps[i]]);
}
