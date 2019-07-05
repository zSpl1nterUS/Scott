const Discord = require("discord.js");

exports.run = async(scott, message, args, prefixo, language) => {

    console.log(`Command invite ${message.guild.name} ${message.guild.id} ${message.author.tag}`)

    message.channel.stopTyping()

    var invite = new Discord.RichEmbed()

    .setColor("#36393e")
    .setTitle(`<:invitation:504807595471798274> - ${language.invite.embed.a}`)
    .addField(`**<:alter:541054054474842113> ▸ ${language.invite.embed.b}**`, `***[${language.invite.embed.d}](https://discordapp.com/api/oauth2/authorize?client_id=536975800155766785&permissions=8&scope=bot)***`)
    .addField(`**<:maintenance:542162190908522520> ▸ ${language.invite.embed.c}**`, `***[${language.invite.embed.d}](https://discord.gg/EVhqaT)***`)
    .setFooter(`Scott - 2019`, scott.user.displayAvatarURL)
    message.channel.send(invite)
}

exports.help = {    
    name: "invite",
    aliases: ["invite"],
    diretorio: "Information"
  }