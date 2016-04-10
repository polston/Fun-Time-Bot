export class CommandHandler 
{
    constructor(client) {
        this.client = client;
    }
    
    handle(event) {
        if(this.isSelf(event)) {
            return;
        }
        
        var commandString = event.message.content;
        
        if(commandString === "poopy") {
            event.message.channel.sendMessage("buttholes");
        } else if(commandString === "buttholes") {
            event.message.channel.sendMessage("some other junk");
        }
    }
    
    isSelf(event) {
        return event.message.author.id === this.client.User.id;
    }
}