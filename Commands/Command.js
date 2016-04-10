"use strict";

export class Command 
{
    constructor(bot) {
        this.bot = bot;
    }
    
    get name() {
        return null;
    }
    
    action(event, param, args = {}) {
        return;
    }
    
}