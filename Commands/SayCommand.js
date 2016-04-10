"use strict";

import { Command } from "./Command";

export class SayCommand extends Command
{
    get name() {
        return "say";
    }
    
    action(event, sayString, args = {}) {
        var channel = event.message.channel;
        
        channel.sendMessage(sayString);
    }
    
}