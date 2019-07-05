const Discord = require('discord.js');

exports.run = async(scott, message, args) => {

    if(!args[0]){
        message.channel.send(`<:error:538505640889417752> - ${message.author}, Enter the voting content.`)
              let volte = args[0];
              if (!volte) return;
    }

    if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(new Discord.RichEmbed()
    .setColor("#36393e")
    .setTimestamp()
    .setDescription(`<:error:538505640889417752> - ${message.author}, You do not have permission to run this command.`))

avatar = message.author.avatarURL
message.channel.send(new Discord.RichEmbed()
.setColor("#36393e")
.setTimestamp()
.setTitle("<:vote:540356413306961933> - New poll")
.setDescription(`\n${args.slice(0).join(' ')}`)).then(async msg => {
    await msg.react('538503952900161538')
    await msg.react('538505640889417752')
  


message.delete().catch(O_o=>{});  

})
}

exports.help = {
    name: "voting",
    aliases: ["voting"],
    diretorio: "Moderation"
}