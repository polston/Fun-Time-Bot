// JS ES6 Imports
import { config } from "./config/config";
import { Bot } from "./Bot";

var bot = new Bot(config.bot);
bot.start();