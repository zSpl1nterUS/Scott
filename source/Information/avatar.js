const Discord = require('discord.js');

exports.run = (scott, message, args, prefixo, language) => {
    console.log(`Command avatar ${message.guild.name} ${message.guild.id} ${message.author.tag}`)
    
let member = message.mentions.users.first() || scott.users.get(args[0]) || message.author;
let avatar = member.displayAvatarURL;
if (avatar.endsWith(".gif")) {
avatar = `${member.displayAvatarURL}?size=2048`
}

message.channel.send(new Discord.RichEmbed()
.setImage(avatar)
.setColor("#36393e")
.setDescription(`[**${language.av.embed.a}**](${avatar})`)
.setTitle(`<:alter:541054054474842113> ▸ ${language.av.embed.b} **${member.tag}**`)
.setFooter(`${language.lang.embed.lang5} ${message.author.username}`, message.author.avatarURL))
}

exports.help = {
    name: "avatar",
    aliases: ["avatar", "perfil"],
    diretorio: "Information"
}