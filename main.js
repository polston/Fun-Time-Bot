// Node Imports
var Discordie = require("discordie");
var Events = Discordie.Events;

// JS ES6 Imports
import { config } from "./config/config"

// SOME RANDOM JUNK

var discordie = new Discordie();
discordie.connect(config.bot);


var onReady = function(event) {
    console.log("Connected!");
};

discordie.Dispatcher.on("GATEWAY_READY", function(event) {
    console.log("Connected!");
});

// Events.MESSAGE_CREATE = "MESSAGE_CREATE";

discordie.Dispatcher.on(Events.MESSAGE_CREATE, function(event) {
    console.log(event.message.content);
});