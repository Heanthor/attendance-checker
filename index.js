var Discord = require("discord.js");
var fs = require('fs');

var mybot = new Discord.Client();
// read and login with token
var token = fs.readFile("token.txt", 'utf8', function(err, data) {
	if (err) {
		return console.log(err);
	} else {
		mybot.loginWithToken(data);
	}
});

// get users
mybot.on("ready", function() {
	console.log(mybot.users);
});
