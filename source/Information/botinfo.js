const Discord = require("discord.js");
const moment = require("moment")
require("moment-duration-format")
const os = require('os')
const cpuStat = require("cpu-stat");
const database = require("../../configuração/database.js"); 

exports.run = (scott, message, args, prefixo, language) => {
  
  console.log(`Command botinfo ${message.guild.name} ${message.guild.id} ${message.author.tag}`)

  database.Guilds.findOne({_id: message.guild.id}, function (erro, servidor) {

  try {
  
  let duration = moment.duration(scott.uptime).format('D [d], H [h], m [m], s [s]');
  avatar = message.author.avatarURL
  moment.locale(`${language.botinfo.embed.nine2}`)
  cpuStat.usagePercent(function(err, percent, seconds) {
    if (err) {
      return console.log(err);
    }
    var music = scott.voiceConnections.size
    var commands = scott.commands.size

  const embed = new Discord.RichEmbed()
    
    .setAuthor(`Scott - 2019`, message.client.user.displayAvatarURL)
    .setFooter(`${language.botinfo.embed.eight2} ${message.author.username}`, message.author.avatarURL)
    .setColor(`#36393e`, true)
    .addField(`**<:alter:541054054474842113> ▸ ${language.botinfo.embed.one}**`, `***zSpl1nterUS_#8611***`, true)
    .addField(`**<:translate:543961636948410378> ▸ ${language.botinfo.embed.a3}**`, `\`\`\`js\n${servidor.lang}\n\`\`\``, true)
    .addField(`**<:calendar:516018350665629715> ▸ ${language.botinfo.embed.two}**`, `\`\`\`js\n21/01/2019\`\`\``, true)
    .addField(`**<:use:541054031003648010> ▸ ${language.botinfo.embed.three2}**`, `\`\`\`js\n${scott.guilds.size}\`\`\``, true)
    .addField(`**<:contact:541103563217174539> ▸ ${language.botinfo.embed.three}**`, `\`\`\`js\n${scott.users.size}\`\`\``, true)
    .addField(`**<:channel:543953815406116894> ▸ ${language.botinfo.embed.four}**`, `\`\`\`js\n${scott.channels.size}\`\`\``, true)
    .addField(`**<:coding:543954403950985267> ▸ ${language.botinfo.embed.five}**`, `\`\`\`js\nDiscord.JS\`\`\``, true)
    .addField(`**<:pcb:541054703002189825> ▸ ${language.botinfo.embed.six}**`, `\`\`\`js\n${percent.toFixed(2)}%\`\`\``, true)
    .addField(`**<:file:543955973568725010> ▸ ${language.botinfo.embed.seven}**`, `\`\`\`js\n${scott.emojis.size.toLocaleString()}\`\`\``, true)
    .addField(`**<:time:537051227037368330> ▸ ${language.botinfo.embed.four2}**`,`\`\`\`js\n${duration}\`\`\``, true)
    .addField(`**<:ccloud:537349883242479616> ▸ ${language.botinfo.embed.eight}**`,`\`\`\`js\n${Math.round(scott.ping)}ms\`\`\``, true)
    .addField(`**<a:okay:512392301037748251> ▸ ${language.botinfo.embed.nine}**`, `\`\`\`js\n2.0a\`\`\``, true)
    .addField(`**<:command:538549732029759508> ▸ ${language.botinfo.embed.ten}**`, `\`\`\`js\n${prefixo}\`\`\``, true)
    .addField(`**<:listening:538543117373014016> ▸ ${language.botinfo.embed.eleven}**`, `\`\`\`js\n${music} ${language.botinfo.embed.ten2}\`\`\``, true)
    .addField(`**<:command:538549732029759508> ▸ ${language.botinfo.embed.twelven2}**`, `\`\`\`js\n${commands}\`\`\``, true)
    .addField(`**<:monitor:543956399949086720> ▸ ${language.botinfo.embed.twelven}**`, `\`\`\`js\n" ${language.botinfo.embed.eleven2} ${message.author.username}, ${language.botinfo.embed.two2} "\`\`\``)
    .addField(`**<:invitation:504807595471798274> ▸ ${language.botinfo.embed.one1}**`, `<:cloud78:497951853800325140>**${language.botinfo.embed.five2}** ***[${language.botinfo.embed.six2}](https://discordapp.com/oauth2/authorize?scott_id=536975800155766785&permissions=8&scope=bot)***\n<:cloud78:497951853800325140>**${language.botinfo.embed.seven2}** ***[${language.botinfo.embed.six2}](https://discord.gg/FM93nUE)***`)
    message.channel.send(embed)
  })

} catch (e) {

  console.log(`Erro - Command BotInfo\n${e}`)
}
  })
}

exports.help = {
 name: "botinfo",
 aliases: ["botinfo"],
 diretorio: "Information"
}