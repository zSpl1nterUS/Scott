const Discord = require('discord.js');
const fs = require('fs')

exports.run = async(scott, message, args) => {

    console.log(`Command commands ${message.guild.name} ${message.guild.id} ${message.author.tag}`)


    const configuração = require('fs').readdirSync('./source/configuração').length
    const music = require('fs').readdirSync('./source/Song').length
    const information = require('fs').readdirSync('./source/Information').length

    let total = scott.commands.size

    let commands = new Discord.RichEmbed()
    .setTitle("• Total Commands")
    .addField("<:information:537072191292964865> ▸ Commands Information:", `\`\`\`js\n${information}\`\`\``, true)
    .addField("<a:music:512400492836683791> ▸ Commands Music:", `\`\`\`js\n${music}\`\`\``, true)
    .addField("<:settings:537012558289174529> ▸ Commands Configuration:", `\`\`\`js\n${configuração}\`\`\``, true)
    .addField("<:command:538549732029759508> ▸ Total of all commands:", `\`\`\`js\n${total}\`\`\``, true)
    .setFooter(`Asked by: ${message.author.tag}`, message.author.avatarURL)
    .setColor("#36393e")
    message.channel.send(commands)
}

exports.help = {
    name: "commands",
    aliases: ["commands"],
    diretorio: "Information"
  }