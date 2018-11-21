const commando=require('discord.js-commando');
class CoinFlip extends commando.Command{
  constructor(client)
  {
    super(client,{
      name: 'coin',
      group: 'simple',
      memberName: 'coinflip',
      description: 'Flips a coin'
    });
  }
  async run(message,args){
    var chance = Math.floor(Math.random()*2);
    if(chance == 0){
      message.reply("You landed on heads",{ files : [__dirname + "/coins/heads.jpg"]});
    }
    else{
      message.reply("You landed on tails",{files : [__dirname+"/coins/tails.jpg"]});
    }
  }
}

module.exports = CoinFlip;
