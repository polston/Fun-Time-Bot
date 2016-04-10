"use strict";

export class CommandHandler 
{
    constructor(client, commands) {
        this.client = client;
        this.commands = commands;
    }
    
    handle(event) {
        if(this.isSelf(event)) {
            return;
        }
        
        var commandString = event.message.content;
        var commandParams = this.parse(commandString);
        
        var command = this.commands.find(c => c.name === commandParams.name);
        if(command == null) {
            return;
        }
        
        command.action(event, commandParams.param, commandParams.args);
    }
    
    parse(commandString) {
        /**
         * commandString:
         * say "hello world" channel general server "Ladies Only"
         * 
         * [0]: say, [1]: "hello world", 
         * [2]: channel, [3]: general, [4]: server, [5]: "Ladies Only"
         * 
         * params = {
              name: "say",
              param: "hello world",
              args: {
                  channel: "general",
                  server: "Ladies Only"
              }
           }
         */
        var parts = commandString.match(/(?:[^\s"]+|"[^"]*")+/g);
        
        var params = {
            name: parts[0].replace(new RegExp('"', "g"), ""),
            param: parts[1].replace(new RegExp('"', "g"), ""),
            args: {}  // {channel: "general", server: "Ladies Only"}
        };
        
        for(var i = 2; i < parts.length; i += 2) {
            if (parts.length > i + 1) {
                params.args[parts[i]] = parts[i + 1].replace(new RegExp('"', "g"), "");
            }
        }
        
        return params;
    }
    
    isSelf(event) {
        return event.message.author.id === this.client.User.id;
    }
}