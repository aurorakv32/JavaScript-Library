// filter, setTimeout, foreach
//foreach doesn't return an array like map does
// functions that call other functions as a paramter

var aurora = {
    name: "",
    age: 36,
    greeting: function(name){
        return "Hello " + name;
    }
};

var classPeep = ["brian", "walker", "tony"];
var personalPeeps = classPeep.forEach(function(name){
    console.log(aurora.greeting(name))
});


aurora.greeting("Aurora");