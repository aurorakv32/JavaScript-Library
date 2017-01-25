// it can be main.js, index.js, or app.js

var player = require('./player.js');  // this is similar to using a script tag or link
var monster = require('./monster.js');

// modules can be used like JS libraries

// var varname = require('express');  this is the normal way to do this

// player.name = "Aurora";
// player.life = 120;
// player.challenge();

// player.name = "John";
// player.life = 90;
// player.challenge();

var aurora = player(); // this is a shortcut way to pull that "file" into the variable
aurora.name = "Aurora";
aurora.challenge();

var james = player();
james.name = "James";
james.challenge();

var kenn = player();
kenn.name = "Kenn";
kenn.scream();

var gwarp = monster();
gwarp.name = "gwarp";
gwarp.scream();