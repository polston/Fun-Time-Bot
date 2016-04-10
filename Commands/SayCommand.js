"use strict";

import { Command } from "./Command";

export class SayCommand extends Command
{
    get name() {
        return "say";
    }
    
    action(event, sayString, args = {}) {
        var channel = event.message.channel;
        
        var guild = event.message.guild;
        var channels = this.bot.client.Channels.forGuild(guild);
        
        if(args.channel) {
            channel = channels.find(c => c.name === args.channel) || channel;
        }
        
        channel.sendMessage(sayString);
    }
    
}