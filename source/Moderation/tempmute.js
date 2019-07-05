const Discord = require('discord.js')
const ms = require("ms")
exports.run = async (scott, message, args) => { 

  console.log(`Command tempmute ${message.guild.name} ${message.guild.id} ${message.author.tag}`)


    //.setFooter(`${scott.user.username}™ 2019`, scott.user.displayAvatarURL)

    var motivo = args.slice(1).join(" ")
    var usera = message.mentions.members.first()

    if(!message.guild.member(message.author.id).hasPermissions("MANAGE_ROLES")) return message.channel.send("<:error:538505640889417752> - You are not allowed to use this command!");
    if(!usera) return message.channel.send("<:error:538505640889417752> - You should mention the user who wants to punish!"); 
    if(message.guild.member(usera.id).hasPermissions("MANAGE_ROLES")) return message.channel.send("<:error:538505640889417752> - You can not punish the user!");
    if(!motivo) return message.channel.send("<:error:538505640889417752> - You did not say why.");

    
    message.channel.send("<:error:538505640889417752> - Tell me how much time you want to mutate the user")
      var colletor4 =  new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 60000, max: 1})
      colletor4.on('collect', async c => {
      pergunta2 = c.content;

      var embed = new Discord.RichEmbed()
      .setTitle("**NEW PUNISHMENT**")
      .addField("**User::**", "```" + usera.user.username +"```", true)
      .addField("**Staff:**", "```" + message.author.username + "```", true)
      .addField("**Time:**", "```" + pergunta2 + "```", true)
      .setTimestamp()
      .setFooter(`${scott.user.username} - 2019`, scott.user.displayAvatarURL)
  
      let muterole = message.guild.roles.find(role => role.name === 'Muted');
  
      if(!muterole){
        try{
          muterole = await message.guild.createRole({
            name: "Muted",
            color: "RANDOM",
            permissions:[]
          })
          message.guild.channels.forEach(async (channel, id) => {
            await channel.overwritePermissions(muterole, {
              SEND_MESSAGES: false,
              ADD_REACTIONS: false
            });
          });
        }catch(e){
          console.log(e.stack);
        }
      }
      
      usera.addRole(muterole.id);
      message.channel.send(embed)
      setTimeout(function(){
        usera.removeRole(muterole.id);
      }, ms(pergunta2));
      
    })
}

exports.help = {
  name: "tempmute",
  aliases: ["tempmute"],
  diretorio: "Moderation"
}