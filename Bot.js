"use strict";

var Discordie = require("discordie");
var Events = Discordie.Events;

export class Bot 
{
    constructor(config) {
        this.config = config;
        this.client = new Discordie();
    }
    
    start() {
        this.client.connect(this.config);
        
        this.client.Dispatcher.on(Events.GATEWAY_READY, event => {
            console.log("CONNECTED!");
        });
        
        this.client.Dispatcher.on(Events.MESSAGE_CREATE, event => {
            console.log(event.message.content);
        });
    }
    
}