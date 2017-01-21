// Math.random() is a function that is extremely helpful when generating anyting randomly
// It returns a floating point number between 0 and 1.	
// THIS IS NOT A SECURE WAY TO GENERATE RANDOM NUMBERS!!!!

function getRandom() {
  return Math.random();
};

console.log(Math.random());

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
};

console.log(getRandomArbitrary(0,100));

// This can be a very powerful function when used properly.  It is most
// notably used in games (or at least this is my experience).