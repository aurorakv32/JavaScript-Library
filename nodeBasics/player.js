module.exports = {     // this is how to create a module in node
	name: "",
	life: 100,
	challenge: function(){
		console.log("Fight me!");
	}
}

// object factory
module.exports = function(){
	return{
		name: "",
		life: 100,
		challenge: function(){
			console.log(this.name + " says fight me!");
		},
		scream : function() {
			console.log(this.name + " roars");
		}
	} 

}