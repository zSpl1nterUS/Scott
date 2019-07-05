const Discord = require('discord.js');
const database = require("../../configuração/database.js"); 

exports.run = (scott, message, args) => {

    console.log(`Command say ${message.guild.name} ${message.guild.id} ${message.author.tag}`)
        
    database.Users.findOne({_id: message.author.id}, async function (erro, usuario) {
      
        if(usuario.owner || message.member.hasPermission("ADMINISTRATOR")) {

let say = args.slice(0).join(' ');

message.delete().catch(O_o=>{});  
message.channel.send(say)

} else {
    var yEmbed = new Discord.RichEmbed()

    .setColor("#36393e")
    .setDescription(`<:error:538505640889417752> - ${message.author}, you do not have **permission** to run this **command**`)
    message.channel.send(yEmbed)
}
})
}

exports.help = {
    name: "say",
    aliases: ["say", "speak"],
    diretorio: "Moderation"
  }