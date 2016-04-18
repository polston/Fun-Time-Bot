"use strict";

import { Command } from "./Command";

export class ClearCommand extends Command
{
    get name(){
        return "clear";
    }
    
    action(event, param, args = {}){
        var channel = event.message.channel;
        
        var guild = event.message.guild;
        var channels = this.bot.client.Channels.forGuild(guild);
        
        if(args.channel){
            channel = channels.find(c => c.name === args.channel) || channel;
        }
        
        //var temp = channel.forChannel(channel);
        //console.log(temp);
        
        channel.fetchMessages().then(response => {
            console.log(response);
            console.log(" ======================= ");
            // console.log(channel.messages);
            // for(var i = 0; i < channel.messages.length; i++)
            // {
            //     channel.messages[i];
            // }
        });
        
    }
}