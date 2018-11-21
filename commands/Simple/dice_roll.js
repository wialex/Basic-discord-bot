const commando=require('discord.js-commando');
class rollDice extends commando.Command{
  constructor(client){
    super(client,{
      name: 'roll',
      group: 'simple',
      memberName: 'roll',
      description: 'Rolls a dice'
    });
  }
  async run(message,args){
    var roll=Math.floor(Math.random()*6+1);
    message.reply("You rolled "+ roll);
  }
}
module.exports = rollDice;
