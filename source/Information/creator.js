const Discord = require("discord.js")

exports.run = async(scott, message, args, prefixo, language) => {

    console.log(`Command creator ${message.guild.name} ${message.guild.id} ${message.author.tag}`)

    var creator = new Discord.RichEmbed()

    .setTitle(`<a:dc:516402655661129729> - ${language.creator.embed.b}`)
    .setDescription(`<:alter:541054054474842113> - ${language.creator.embed.a}`)
    .setFooter(`${language.creator.embed.c} ${message.author.tag}`, message.author.avatarURL)
    .setColor("#36393e")
    message.channel.send(creator)
}

exports.help = {
    name: "creator",
    aliases: ["creator", "spl1nter"],
    diretorio: "Information"
  }