// Objects Literals with Methods
// Methods are functions within an object
// COMMAS!!!!!!!
var player = {
	// Properties go first in an Object
	name 		: "",
	lifeTotal 	: 100,
	damage		: 50,
	hasSword 	: true,

	// Methods go second in an Object (functions are a little different)
	challenge	: function () {			//name the function first, then insert the function() {}
		console.log(this.name + " says: Would anyone care to fight???");
	},   // MUST HAVE A COMMA IN BETWEEN METHODS!!!
 
	response	: function () {
		console.log(this.name + " says: I'm gonna kick your butt " + melkor.name + "!");
	}, 

	attack 	: function (target) {
		console.log(this.name + " throws the fist " + target.name + " and does " + this.damage + " damage!");
	}, 
	pickedUpSword 	: function () {
		if(this.hasSword) {
			console.log(this.name + " picked up sword.");
		}
	}
	// TODO - picked up wrecking ball
}

var melkor = Object.create(player); // This is how to create another object utilizing the "original" above
melkor.name = "Melkor";


var miley = Object.create(player);
miley.name = "Miley";

// Access methods
melkor.challenge();
miley.response();
melkor.attack(miley);
melkor.pickedUpSword();
