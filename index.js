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
	var users = mybot.users;
	var statuses = {
		online: [],
		offline: [],
		idle: []
	}

	users.forEach(function(user) {
		var username = user["username"];
		var status = user["status"];

		if (!user["bot"]) {
			statuses[status].push(username);
		}
	});

	statuses["online"].forEach(function(identity) {
		console.log(identity + " is\033[1;32m Online\033[0m");
	});

	statuses["idle"].forEach(function(identity) {
		console.log(identity + " is\033[1;33m Idle\033[0m");
	});

	statuses["offline"].forEach(function(identity) {
		console.log(identity+  " is\033[1;31m Offline\033[0m");
	});
});

// function formatStatusString(identity, printString) {
// 	var username = identity[0];
// 	var note = identity[1];

// 	if (note == null) {
// 		return "(Missing IGN note) " + username + " is " + printString;
// 	} else {
// 		return note + " is " + printString;
// 	}
// }
