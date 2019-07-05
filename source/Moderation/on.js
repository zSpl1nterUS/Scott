const Discord = require('discord.js');

exports.run = (scott, message, args) => {

  console.log(`Command on ${message.guild.name} ${message.guild.id} ${message.author.tag}`)


  if (!message.guild.members.get(message.author.id).roles.find("name", "*")) {
    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(new Discord.RichEmbed()
      .setColor("#36393e")
      .setDescription(`<:error:538505640889417752> - ${message.author}, you do not have **permission** to run this **command**`))
  }
  var da = message.guild.roles.find("name", "@everyone")
  var da1 = message.guild.roles.find('name', "*")
  message.channel.overwritePermissions(da, {
    SEND_MESSAGES: true


  })

  message.channel.overwritePermissions(da1, {
    SEND_MESSAGES: true

  })
  message.delete().catch(O_o => { });
  message.channel.send(new Discord.RichEmbed()
    .setDescription(`The channel: **${message.channel}** was **ON** \nBy Staff: ${message.author}`)
    .setTimestamp()
    .setColor("#36393e")
    .setFooter(`SadnessZ | 2019`, message.snz.user.avatarURL, message.snz.user.avatarURL))
}

exports.help = {
  name: "on",
  aliases: ["on"],
  diretorio: "Moderation"
}