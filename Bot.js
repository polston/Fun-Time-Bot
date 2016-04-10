"use strict";

var Discordie = require("discordie");
var Events = Discordie.Events;

import { CommandHandler } from "./CommandHandler";

export class Bot 
{
    constructor(config) {
        this.config = config;
        this.client = new Discordie();
        this.commandHandler = new CommandHandler(this.client);
    }
    
    start() {
        this.client.connect(this.config);
        
        this.client.Dispatcher.on(Events.GATEWAY_READY, event => {
            console.log("CONNECTED!");
        });
        
        this.client.Dispatcher.on(Events.MESSAGE_CREATE, event => {
            this.commandHandler.handle(event);
        });
    }
    
}