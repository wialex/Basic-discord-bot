const Commando = require('discord.js-commando');
const bot = new Commando.Client();

bot.registry.registerGroup('simple','Simple');
bot.registry.registerGroup('music','Music');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + '/commands');

global.servers={};

bot.on('message',function(message){
    if(message.content == 'hello'){
      message.channel.sendMessage('Hello' + message.author +' ,how are you?');
    }
})

bot.on('ready',function(){
  console.log("Ready");
})


bot.login('NTEzNDMzNzUzOTIyODMwMzM2.DtH_Lg.HL9lKiXB94tkQTvYhHt5D72rqGc');
