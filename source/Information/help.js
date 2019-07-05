const Discord = require('discord.js');

exports.run = async(scott, message, args, prefixo, language) => {

    console.log(`Command help ${message.guild.name} ${message.guild.id} ${message.author.tag}`)


    try {

//Category CONFIGURATION -->

if (args[0] == 'ant-invite') {
  var antinvite = new Discord.RichEmbed()

  .addField(`<:pcb:541054703002189825> ▸ \`${prefixo}ant-invite\``, "Shows server ant-invite settings.")
  .addField("<:use:541054031003648010> ▸ How to use:", `**${prefixo}ant-invite**`)
  .addField("<:exa:541055403450957824> ▸ Examples:", `\`${prefixo}ant-invite\``)
  .addField("<:alter:541054054474842113> ▸ Alternatives:", `\`${prefixo}ant-invite, ${prefixo}a-invite\``)
  .setColor("#36393e")
  .setThumbnail(message.client.user.displayAvatarURL)
  .setTimestamp()
  .setFooter("Configuration", message.client.user.displayAvatarURL)
  message.channel.send(antinvite)
  return;
}

if (args[0] == 'autorole') {
  var autorole = new Discord.RichEmbed()

  .addField(`<:pcb:541054703002189825> ▸ \`${prefixo}autorole\``, "Displays the server auto role settings.")
  .addField("<:use:541054031003648010> ▸ How to use:", `**${prefixo}autorole**`)
  .addField("<:exa:541055403450957824> ▸ Examples:", `\`${prefixo}autorole\``)
  .addField("<:alter:541054054474842113> ▸ Alternatives:", `\`${prefixo}autorole\``)
  .setColor("#36393e")
  .setThumbnail(message.client.user.displayAvatarURL)
  .setTimestamp()
  .setFooter("Configuration", message.client.user.displayAvatarURL)
  message.channel.send(autorole)
  return;
}

if (args[0] == 'config') {
  var config = new Discord.RichEmbed()

  .addField(`<:pcb:541054703002189825> ▸ \`${prefixo}config\``, "Displays server configuration information.")
  .addField("<:use:541054031003648010> ▸ How to use:", `**${prefixo}config**`)
  .addField("<:exa:541055403450957824> ▸ Examples:", `\`${prefixo}config\``)
  .addField("<:alter:541054054474842113> ▸ Alternatives:", `\`${prefixo}config\``)
  .setColor("#36393e")
  .setThumbnail(message.client.user.displayAvatarURL)
  .setTimestamp()
  .setFooter("Configuration", message.client.user.displayAvatarURL)
  message.channel.send(config)
  return;
}

if (args[0] == 'output') {
  var output = new Discord.RichEmbed()

  .addField(`<:pcb:541054703002189825> ▸ \`${prefixo}output\``, "Displays server output settings.")
  .addField("<:use:541054031003648010> ▸ How to use:", `**${prefixo}output**`)
  .addField("<:exa:541055403450957824> ▸ Examples:", `\`${prefixo}output\``)
  .addField("<:alter:541054054474842113> ▸ Alternatives:", `\`${prefixo}output\``)
  .setColor("#36393e")
  .setThumbnail(message.client.user.displayAvatarURL)
  .setTimestamp()
  .setFooter("Configuration", message.client.user.displayAvatarURL)
  message.channel.send(output)
  return;
}

if (args[0] == 'prefix') {
  var prefix = new Discord.RichEmbed()

  .addField(`<:pcb:541054703002189825> ▸ \`${prefixo}prefix\``, "Displays server prefix settings.")
  .addField("<:use:541054031003648010> ▸ How to use:", `**${prefixo}prefix**`)
  .addField("<:exa:541055403450957824> ▸ Examples:", `\`${prefixo}prefix\``)
  .addField("<:alter:541054054474842113> ▸ Alternatives:", `\`${prefixo}prefix\``)
  .setColor("#36393e")
  .setThumbnail(message.client.user.displayAvatarURL)
  .setTimestamp()
  .setFooter("Configuration", message.client.user.displayAvatarURL)
  message.channel.send(prefix)
  return;
}

if (args[0] == 'welcome') {
  var welcome = new Discord.RichEmbed()

  .addField(`<:pcb:541054703002189825> ▸ \`${prefixo}welcome\``, "Displays server welcome settings.")
  .addField("<:use:541054031003648010> ▸ How to use:", `**${prefixo}welcome**`)
  .addField("<:exa:541055403450957824> ▸ Examples:", `\`${prefixo}welcome\``)
  .addField("<:alter:541054054474842113> ▸ Alternatives:", `\`${prefixo}welcome\``)
  .setColor("#36393e")
  .setThumbnail(message.client.user.displayAvatarURL)
  .setTimestamp()
  .setFooter("Configuration", message.client.user.displayAvatarURL)
  message.channel.send(welcome)
  return;
}

//Category FUN -->

if (args[0] == 'cat') {
  var cat = new Discord.RichEmbed()

  .addField(`<:pcb:541054703002189825> ▸ \`${prefixo}cat\``, "Does the bot send a picture of a cat")
  .addField("<:use:541054031003648010> ▸ How to use:", `**${prefixo}cat**`)
  .addField("<:exa:541055403450957824> ▸ Examples:", `\`${prefixo}cat\``)
  .addField("<:alter:541054054474842113> ▸ Alternatives:", `\`${prefixo}cat\``)
  .setColor("#36393e")
  .setThumbnail(message.client.user.displayAvatarURL)
  .setTimestamp()
  .setFooter("Fun", message.client.user.displayAvatarURL)
  message.channel.send(cat)
  return;
}

if (args[0] == 'fagot') {
  var fagot = new Discord.RichEmbed()

  .addField(`<:pcb:541054703002189825> ▸ \`${prefixo}fagot\``, "Calculates how much a member is fired.")
  .addField("<:use:541054031003648010> ▸ How to use:", `**${prefixo}fagot <mention user>**`)
  .addField("<:exa:541055403450957824> ▸ Examples:", `\`${prefixo}fagot @zSpl1nterUS_#8611\n${prefixo}fagot @Scott#1517\``)
  .addField("<:alter:541054054474842113> ▸ Alternatives:", `\`${prefixo}fagot, ${prefixo}lgbt, ${prefixo}fired\``)
  .setColor("#36393e")
  .setThumbnail(message.client.user.displayAvatarURL)
  .setTimestamp()
  .setFooter("Fun", message.client.user.displayAvatarURL)
  message.channel.send(fagot)
  return;
}

if (args[0] == 'meme') {
  var meme = new Discord.RichEmbed()

  .addField(`<:pcb:541054703002189825> ▸ \`${prefixo}meme\``, "Send a random meme.")
  .addField("<:use:541054031003648010> ▸ How to use:", `**${prefixo}meme**`)
  .addField("<:exa:541055403450957824> ▸ Examples:", `\`${prefixo}meme\``)
  .addField("<:alter:541054054474842113> ▸ Alternatives:", `\`${prefixo}meme\``)
  .setColor("#36393e")
  .setThumbnail(message.client.user.displayAvatarURL)
  .setTimestamp()
  .setFooter("Fun", message.client.user.displayAvatarURL)
  message.channel.send(meme)
  return;
}

if (args[0] == 'stiles') {
  var stiles = new Discord.RichEmbed()
  
   .addField(`<:pcb:541054703002189825> ▸ \`${prefixo}stiles\``, "Asks questions for Scott's friend, Stiles.")
   .addField("<:use:541054031003648010> ▸ How to use:", `**${prefixo}stiles <question>**`)
   .addField("<:exa:541055403450957824> ▸ Examples:", `\`${prefixo}stiles I'm beatiful?\n${prefixo}stiles Do you speak portuguese?\``)
   .addField("<:alter:541054054474842113> ▸ Alternatives:", `\`${prefixo}stiles, ${prefixo}8ball\``)
   .setColor("#36393e")
   .setThumbnail(message.client.user.displayAvatarURL)
   .setTimestamp()
   .setFooter("Fun", message.client.user.displayAvatarURL)
   message.channel.send(stiles)
   return;
  }  

//Category INFORMATION -->

if (args[0] == 'anime') {
  var anime = new Discord.RichEmbed()

  .addField(`<:pcb:541054703002189825> ▸ \`${prefixo}anime\``, "Does an anime request lookup.")
  .addField("<:use:541054031003648010> ▸ How to use:", `**${prefixo}anime <anime name>**`)
  .addField("<:exa:541055403450957824> ▸ Examples:", `\`${prefixo}anime Naruto Shippuden\n${prefixo}anime Black Clover\``)
  .addField("<:alter:541054054474842113> ▸ Alternatives:", `\`${prefixo}anime\``)
  .setColor("#36393e")
  .setThumbnail(message.client.user.displayAvatarURL)
  .setTimestamp()
  .setFooter("Information", message.client.user.displayAvatarURL)
  message.channel.send(anime)
  return;
}

if (args[0] == 'avatar') {
  var avatar = new Discord.RichEmbed()

  .addField(`<:pcb:541054703002189825> ▸ \`${prefixo}avatar\``, "Show your profile photo or some user.")
  .addField("<:use:541054031003648010> ▸ How to use:", `**${prefixo}avatar <mention>**`)
  .addField("<:exa:541055403450957824> ▸ Examples:", `\`${prefixo}avatar\n${prefixo}avatar @zSpl1nterUS_#8611\``)
  .addField("<:alter:541054054474842113> ▸ Alternatives:", `\`${prefixo}avatar\``)
  .setColor("#36393e")
  .setThumbnail(message.client.user.displayAvatarURL)
  .setTimestamp()
  .setFooter("Information", message.client.user.displayAvatarURL)
  message.channel.send(avatar)
  return;
}

if (args[0] == 'botinfo') {
var botinfo = new Discord.RichEmbed()

 .addField(`<:pcb:541054703002189825> ▸ \`${prefixo}botinfo\``, "Displays all Bot information at the current time.")
 .addField("<:use:541054031003648010> ▸ How to use:", `**${prefixo}botinfo**`)
 .addField("<:exa:541055403450957824> ▸ Examples:", `\`${prefixo}botinfo\``)
 .addField("<:alter:541054054474842113> ▸ Alternatives:", `\`${prefixo}botinfo\``)
 .setColor("#36393e")
 .setThumbnail(message.client.user.displayAvatarURL)
 .setTimestamp()
 .setFooter("Information", message.client.user.displayAvatarURL)
 message.channel.send(botinfo)
 return;
}

if (args[0] == 'commands') {
var commands = new Discord.RichEmbed()

 .addField(`<:pcb:541054703002189825> ▸ \`${prefixo}commands\``, "Displays the command quantity information for each category.")
 .addField("<:use:541054031003648010> ▸ How to use:", `**${prefixo}commands**`)
 .addField("<:exa:541055403450957824> ▸ Examples:", `\`${prefixo}commands\``)
 .addField("<:alter:541054054474842113> ▸ Alternatives:", `\`${prefixo}commands\``)
 .setColor("#36393e")
 .setThumbnail(message.client.user.displayAvatarURL)
 .setTimestamp()
 .setFooter("Information", message.client.user.displayAvatarURL)
 message.channel.send(commands)
 return;
}

if (args[0] == 'creator') {
var creator = new Discord.RichEmbed()

 .addField(`<:pcb:541054703002189825> ▸ \`${prefixo}creator\``, "Show my Creator's Discord.")
 .addField("<:use:541054031003648010> ▸ How to use:", `**${prefixo}creator**`)
 .addField("<:exa:541055403450957824> ▸ Examples:", `\`${prefixo}creator\``)
 .addField("<:alter:541054054474842113> ▸ Alternatives:", `\`${prefixo}creator\``)
 .setColor("#36393e")
 .setThumbnail(message.client.user.displayAvatarURL)
 .setTimestamp()
 .setFooter("Information", message.client.user.displayAvatarURL)
 message.channel.send(creator)
 return;
}

if (args[0] == 'invite') {
var invite = new Discord.RichEmbed()

 .addField(`<:pcb:541054703002189825> ▸ \`${prefixo}invite\``, "Send Bot invitation to you add it.")
 .addField("<:use:541054031003648010> ▸ How to use:", `**${prefixo}invite**`)
 .addField("<:exa:541055403450957824> ▸ Examples:", `\`${prefixo}invite\``)
 .addField("<:alter:541054054474842113> ▸ Alternatives:", `\`${prefixo}invite\``)
 .setColor("#36393e")
 .setThumbnail(message.client.user.displayAvatarURL)
 .setTimestamp()
 .setFooter("Information", message.client.user.displayAvatarURL)
 message.channel.send(invite)
 return;
}

if (args[0] == 'emoji-info') {
var emojiinfo = new Discord.RichEmbed()

  .addField(`<:pcb:541054703002189825> ▸ \`${prefixo}emoji-info\``, "Displays information about an emoji from your server.")
  .addField("<:use:541054031003648010> ▸ How to use:", `**${prefixo}emoji-info <emoji name>**`)
  .addField("<:exa:541055403450957824> ▸ Examples:", `\`${prefixo}emoji-info scott\n${prefixo}emoji-info netflix\``)
  .addField("<:alter:541054054474842113> ▸ Alternatives:", `\`${prefixo}emoji-info, ${prefixo}emojinfo, ${prefixo}emojiinfo, ${prefixo}e.info, ${prefixo}emoji.i\``)
  .setColor("#36393e")
  .setThumbnail(message.client.user.displayAvatarURL)
  .setTimestamp()
  .setFooter("Information", message.client.user.displayAvatarURL)
  message.channel.send(emojiinfo)
  return;
}

if (args[0] == 'm-status') {
var mstatus = new Discord.RichEmbed()

  .addField(`<:pcb:541054703002189825> ▸ \`${prefixo}m-status\``, "Displays information for all server members.")
  .addField("<:use:541054031003648010> ▸ How to use:", `**${prefixo}m-status**`)
  .addField("<:exa:541055403450957824> ▸ Examples:", `\`${prefixo}m-status\``)
  .addField("<:alter:541054054474842113> ▸ Alternatives:", `\`${prefixo}member-status, ${prefixo}member-s\``)
  .setColor("#36393e")
  .setThumbnail(message.client.user.displayAvatarURL)
  .setTimestamp()
  .setFooter("Information", message.client.user.displayAvatarURL)
  message.channel.send(mstatus)
  return;
}

if (args[0] == 'perms') {
var mstatus = new Discord.RichEmbed()

  .addField(`<:pcb:541054703002189825> ▸ \`${prefixo}perms\``, "Shows your permissions on the server.")
  .addField("<:use:541054031003648010> ▸ How to use:", `**${prefixo}perms**`)
  .addField("<:exa:541055403450957824> ▸ Examples:", `\`${prefixo}perms\``)
  .addField("<:alter:541054054474842113> ▸ Alternatives:", `\`${prefixo}permissions\``)
  .setColor("#36393e")
  .setThumbnail(message.client.user.displayAvatarURL)
  .setTimestamp()
  .setFooter("Information", message.client.user.displayAvatarURL)
  message.channel.send(mstatus)
  return;
}

if (args[0] == 'perms') {
var perms = new Discord.RichEmbed()

  .addField(`<:pcb:541054703002189825> ▸ \`${prefixo}perms\``, "Shows your permissions on the server.")
  .addField("<:use:541054031003648010> ▸ How to use:", `**${prefixo}perms**`)
  .addField("<:exa:541055403450957824> ▸ Examples:", `\`${prefixo}perms\``)
  .addField("<:alter:541054054474842113> ▸ Alternatives:", `\`${prefixo}permissions\``)
  .setColor("#36393e")
  .setThumbnail(message.client.user.displayAvatarURL)
  .setTimestamp()
  .setFooter("Information", message.client.user.displayAvatarURL)
  message.channel.send(perms)
  return;
}

if (args[0] == 'ping') {
var ping = new Discord.RichEmbed()

  .addField(`<:pcb:541054703002189825> ▸ \`${prefixo}latency\``, "Shows the bot ping.")
  .addField("<:use:541054031003648010> ▸ How to use:", `**${prefixo}ping**`)
  .addField("<:exa:541055403450957824> ▸ Examples:", `\`${prefixo}ping\``)
  .addField("<:alter:541054054474842113> ▸ Alternatives:", `\`${prefixo}latency, ${prefixo}ms, ${prefixo}pong\``)
  .setColor("#36393e")
  .setThumbnail(message.client.user.displayAvatarURL)
  .setTimestamp()
  .setFooter("Information", message.client.user.displayAvatarURL)
  message.channel.send(ping)
  return;
}

if (args[0] == 'roleinfo') {
var roleinfo = new Discord.RichEmbed()

  .addField(`<:pcb:541054703002189825> ▸ \`${prefixo}roleinfo\``, "Displays the information of a role.")
  .addField("<:use:541054031003648010> ▸ How to use:", `**${prefixo}roleinfo <name role>**`)
  .addField("<:exa:541055403450957824> ▸ Examples:", `\`${prefixo}roleinfo DJ\n${prefixo}roleinfo Owner\``)
  .addField("<:alter:541054054474842113> ▸ Alternatives:", `\`${prefixo}r-info\``)
  .setColor("#36393e")
  .setThumbnail(message.client.user.displayAvatarURL)
  .setTimestamp()
  .setFooter("Information", message.client.user.displayAvatarURL)
  message.channel.send(roleinfo)
  return;
}

if (args[0] == 'scott') {
var scott = new Discord.RichEmbed()

  .addField(`<:pcb:541054703002189825> ▸ \`${prefixo}scott\``, "Shows information from servers that I'm playing music.")
  .addField("<:use:541054031003648010> ▸ How to use:", `**${prefixo}scott**`)
  .addField("<:exa:541055403450957824> ▸ Examples:", `\`${prefixo}scott\``)
  .addField("<:alter:541054054474842113> ▸ Alternatives:", `\`${prefixo}scott\``)
  .setColor("#36393e")
  .setThumbnail(message.client.user.displayAvatarURL)
  .setTimestamp()
  .setFooter("Information", message.client.user.displayAvatarURL)
  message.channel.send(scott)
  return;
}

if (args[0] == 'total') {
var total = new Discord.RichEmbed()

  .addField(`<:pcb:541054703002189825> ▸ \`${prefixo}total\``, "Shows total bot information.")
  .addField("<:use:541054031003648010> ▸ How to use:", `**${prefixo}total**`)
  .addField("<:exa:541055403450957824> ▸ Examples:", `\`${prefixo}total\``)
  .addField("<:alter:541054054474842113> ▸ Alternatives:", `\`${prefixo}total\``)
  .setColor("#36393e")
  .setThumbnail(message.client.user.displayAvatarURL)
  .setTimestamp()
  .setFooter("Information", message.client.user.displayAvatarURL)
  message.channel.send(total)
  return;
}

if (args[0] == 'uptime') {
var uptime = new Discord.RichEmbed()

  .addField(`<:pcb:541054703002189825> ▸ \`${prefixo}roleinfo\``, "Shows the time the bot is online.")
  .addField("<:use:541054031003648010> ▸ How to use:", `**${prefixo}uptime**`)
  .addField("<:exa:541055403450957824> ▸ Examples:", `\`${prefixo}uptime\``)
  .addField("<:alter:541054054474842113> ▸ Alternatives:", `\`${prefixo}uptime, ${prefixo}ontime\``)
  .setColor("#36393e")
  .setThumbnail(message.client.user.displayAvatarURL)
  .setTimestamp()
  .setFooter("Information", message.client.user.displayAvatarURL)
  message.channel.send(uptime)
  return;
}

//Category MODERATION -->

if (args[0] == 'ads') {
var ads = new Discord.RichEmbed()
  
  .addField(`<:pcb:541054703002189825> ▸ \`${prefixo}ads\``, "Announces the message on the chosen channel.")
  .addField("<:use:541054031003648010> ▸ How to use:", `**${prefixo}ads <mention channel> <menssage>**`)
  .addField("<:exa:541055403450957824> ▸ Examples:", `\`${prefixo}ads #test I'm too cute is not I?\n${prefixo}ads #test All of you are fagots\``)
  .addField("<:alter:541054054474842113> ▸ Alternatives:", `\`${prefixo}ads\``)
  .setColor("#36393e")
  .setThumbnail(message.client.user.displayAvatarURL)
  .setTimestamp()
  .setFooter("Moderation", message.client.user.displayAvatarURL)
  message.channel.send(ads)
  return;
}

if (args[0] == 'announce') {
var announce = new Discord.RichEmbed()

  .addField(`<:pcb:541054703002189825> ▸ \`${prefixo}announce\``, "Make an advertisement on the server.")
  .addField("<:use:541054031003648010> ▸ How to use:", `**${prefixo}annonuce <menssage>**`)
  .addField("<:exa:541055403450957824> ▸ Examples:", `\`${prefixo}announce I'm too cute is not I?\n${prefixo}announce All of you are fagots\``)
  .addField("<:alter:541054054474842113> ▸ Alternatives:", `\`${prefixo}announce, ${prefixo}an\``)
  .setColor("#36393e")
  .setThumbnail(message.client.user.displayAvatarURL)
  .setTimestamp()
  .setFooter("Moderation", message.client.user.displayAvatarURL)
  message.channel.send(announce)
  return;
}

if (args[0] == 'ban') {
var ban = new Discord.RichEmbed()

  .addField(`<:pcb:541054703002189825> ▸ \`${prefixo}ban\``, "Ban on the desired server user.")
  .addField("<:use:541054031003648010> ▸ How to use:", `**${prefixo}ban <mention user> <reason>**`)
  .addField("<:exa:541055403450957824> ▸ Examples:", `\`${prefixo}ban @zSpl1nterUS_#8611\n${prefixo}ban @Scott#1517\``)
  .addField("<:alter:541054054474842113> ▸ Alternatives:", `\`${prefixo}ban\``)
  .setColor("#36393e")
  .setThumbnail(message.client.user.displayAvatarURL)
  .setTimestamp()
  .setFooter("Moderation", message.client.user.displayAvatarURL)
  message.channel.send(ban)
  return;
}

if (args[0] == 'clear') {
var clear = new Discord.RichEmbed()

  .addField(`<:pcb:541054703002189825> ▸ \`${prefixo}clear\``, "Clears the amount of messages you want on your server.")
  .addField("<:use:541054031003648010> ▸ How to use:", `**${prefixo}clear <number 2 the 200>**`)
  .addField("<:exa:541055403450957824> ▸ Examples:", `\`${prefixo}clear 50\n${prefixo}clear 200\``)
  .addField("<:alter:541054054474842113> ▸ Alternatives:", `\`${prefixo}clear\``)
  .setColor("#36393e")
  .setThumbnail(message.client.user.displayAvatarURL)
  .setTimestamp()
  .setFooter("Moderation", message.client.user.displayAvatarURL)
  message.channel.send(clear)
  return;
}

if (args[0] == 'kick') {
var kick = new Discord.RichEmbed()

  .addField(`<:pcb:541054703002189825> ▸ \`${prefixo}kick\``, "Kick the desired member of your server.")
  .addField("<:use:541054031003648010> ▸ How to use:", `**${prefixo}kick <mention user> <reason>**`)
  .addField("<:exa:541055403450957824> ▸ Examples:", `\`${prefixo}kick @zSpl1nterUS_#8611\n${prefixo}kick @Scott#1517\``)
  .addField("<:alter:541054054474842113> ▸ Alternatives:", `\`${prefixo}kick\``)
  .setColor("#36393e")
  .setThumbnail(message.client.user.displayAvatarURL)
  .setTimestamp()
  .setFooter("Moderation", message.client.user.displayAvatarURL)
  message.channel.send(kick)
  return;
}

if (args[0] == 'lockdown') {
var lockdown = new Discord.RichEmbed()

  .addField(`<:pcb:541054703002189825> ▸ \`${prefixo}lockdown\``, "Disables the chat that the command was used for the given time.")
  .addField("<:use:541054031003648010> ▸ How to use:", `**${prefixo}lockdown <time>**`)
  .addField("<:exa:541055403450957824> ▸ Examples:", `\`${prefixo}lockdown 15m\n${prefixo}lockdown 2h\``)
  .addField("<:alter:541054054474842113> ▸ Alternatives:", `\`${prefixo}lockdown\``)
  .setColor("#36393e")
  .setThumbnail(message.client.user.displayAvatarURL)
  .setTimestamp()
  .setFooter("Moderation", message.client.user.displayAvatarURL)
  message.channel.send(lockdown)
  return;
}

if (args[0] == 'mute') {
var mute = new Discord.RichEmbed()

  .addField(`<:pcb:541054703002189825> ▸ \`${prefixo}mute\``, "Muta a member on your server.")
  .addField("<:use:541054031003648010> ▸ How to use:", `**${prefixo}mute <mention user>**`)
  .addField("<:exa:541055403450957824> ▸ Examples:", `\`${prefixo}mute @zSpl1nterUS_#8611\n${prefixo}mute @Scott#1517\``)
  .addField("<:alter:541054054474842113> ▸ Alternatives:", `\`${prefixo}mute\``)
  .setColor("#36393e")
  .setThumbnail(message.client.user.displayAvatarURL)
  .setTimestamp()
  .setFooter("Moderation", message.client.user.displayAvatarURL)
  message.channel.send(mute)
  return;
}

if (args[0] == 'off') {
var off = new Discord.RichEmbed()

  .addField(`<:pcb:541054703002189825> ▸ \`${prefixo}off\``, "Disables chat where the command was run.")
  .addField("<:use:541054031003648010> ▸ How to use:", `**${prefixo}off**`)
  .addField("<:exa:541055403450957824> ▸ Examples:", `\`${prefixo}off\``)
  .addField("<:alter:541054054474842113> ▸ Alternatives:", `\`${prefixo}off\``)
  .setColor("#36393e")
  .setThumbnail(message.client.user.displayAvatarURL)
  .setTimestamp()
  .setFooter("Moderation", message.client.user.displayAvatarURL)
  message.channel.send(off)
  return;
}

if (args[0] == 'on') {
var on = new Discord.RichEmbed()

  .addField(`<:pcb:541054703002189825> ▸ \`${prefixo}on\``, "Active chat where the command was run.")
  .addField("<:use:541054031003648010> ▸ How to use:", `**${prefixo}on**`)
  .addField("<:exa:541055403450957824> ▸ Examples:", `\`${prefixo}on\``)
  .addField("<:alter:541054054474842113> ▸ Alternatives:", `\`${prefixo}on\``)
  .setColor("#36393e")
  .setThumbnail(message.client.user.displayAvatarURL)
  .setTimestamp()
  .setFooter("Moderation", message.client.user.displayAvatarURL)
  message.channel.send(on)
  return;
}

if (args[0] == 'say') {
var say = new Discord.RichEmbed()

  .addField(`<:pcb:541054703002189825> ▸ \`${prefixo}say\``, "Send a message as if it were the bot.")
  .addField("<:use:541054031003648010> ▸ How to use:", `**${prefixo}say <message>**`)
  .addField("<:exa:541055403450957824> ▸ Examples:", `\`${prefixo}say I'm beatiful\n${prefixo}say You must treat me very well.\``)
  .addField("<:alter:541054054474842113> ▸ Alternatives:", `\`${prefixo}say\``)
  .setColor("#36393e")
  .setThumbnail(message.client.user.displayAvatarURL)
  .setTimestamp()
  .setFooter("Moderation", message.client.user.displayAvatarURL)
  message.channel.send(say)
  return;
}

if (args[0] == 'tempmute') {
var tempmute = new Discord.RichEmbed()

  .addField(`<:pcb:541054703002189825> ▸ \`${prefixo}tempmute\``, "Mute the temporarily mentioned member.")
  .addField("<:use:541054031003648010> ▸ How to use:", `**${prefixo}tempmute <user mention> <time>**`)
  .addField("<:exa:541055403450957824> ▸ Examples:", `\`${prefixo}tempmute @zSpl1nterUS_#8611 10m\n${prefixo}tempmute @Scott#1517 1d.\``)
  .addField("<:alter:541054054474842113> ▸ Alternatives:", `\`${prefixo}tempmute\``)
  .setColor("#36393e")
  .setThumbnail(message.client.user.displayAvatarURL)
  .setTimestamp()
  .setFooter("Moderation", message.client.user.displayAvatarURL)
  message.channel.send(tempmute)
  return;
}

if (args[0] == 'unmute') {
var unmute = new Discord.RichEmbed()

  .addField(`<:pcb:541054703002189825> ▸ \`${prefixo}unmute\``, "Remove the mute of the mentioned member.")
  .addField("<:use:541054031003648010> ▸ How to use:", `**${prefixo}unmute <mention user>**`)
  .addField("<:exa:541055403450957824> ▸ Examples:", `\`${prefixo}unmute @zSpl1nterUS_#8611\n${prefixo}unmute @Scott#1517\``)
  .addField("<:alter:541054054474842113> ▸ Alternatives:", `\`${prefixo}unmute\``)
  .setColor("#36393e")
  .setThumbnail(message.client.user.displayAvatarURL)
  .setTimestamp()
  .setFooter("Moderation", message.client.user.displayAvatarURL)
  message.channel.send(unmute)
  return;
}

if (args[0] == 'voting') {
var voting = new Discord.RichEmbed()

  .addField(`<:pcb:541054703002189825> ▸ \`${prefixo}voting\``, "Votes on your server.")
  .addField("<:use:541054031003648010> ▸ How to use:", `**${prefixo}voting <votes>**`)
  .addField("<:exa:541055403450957824> ▸ Examples:", `\`${prefixo}voting I'm beatiful or no?\n${prefixo}voting You must treat me very well or no?\``)
  .addField("<:alter:541054054474842113> ▸ Alternatives:", `\`${prefixo}voting\``)
  .setColor("#36393e")
  .setThumbnail(message.client.user.displayAvatarURL)
  .setTimestamp()
  .setFooter("Moderation", message.client.user.displayAvatarURL)
  message.channel.send(voting)
  return;
}
  
//Category PHOTOSHOP -->

if (args[0] == 'gray') {
var gray = new Discord.RichEmbed()

  .addField(`<:pcb:541054703002189825> ▸ \`${prefixo}gray\``, "Send your photo with gray effect.")
  .addField("<:use:541054031003648010> ▸ How to use:", `**${prefixo}gray**`)
  .addField("<:exa:541055403450957824> ▸ Examples:", `\`${prefixo}gray\``)
  .addField("<:alter:541054054474842113> ▸ Alternatives:", `\`${prefixo}gray\``)
  .setColor("#36393e")
  .setThumbnail(message.client.user.displayAvatarURL)
  .setTimestamp()
  .setFooter("Photoshop", message.client.user.displayAvatarURL)
  message.channel.send(gray)
  return;
}

if (args[0] == 'nitro') {
var nitro = new Discord.RichEmbed()

  .addField(`<:pcb:541054703002189825> ▸ \`${prefixo}nitro\``, "Send your photo with nitro effect.")
  .addField("<:use:541054031003648010> ▸ How to use:", `**${prefixo}nitro**`)
  .addField("<:exa:541055403450957824> ▸ Examples:", `\`${prefixo}nitro\``)
  .addField("<:alter:541054054474842113> ▸ Alternatives:", `\`${prefixo}nitro\``)
  .setColor("#36393e")
  .setThumbnail(message.client.user.displayAvatarURL)
  .setTimestamp()
  .setFooter("Photoshop", message.client.user.displayAvatarURL)
  message.channel.send(nitro)
  return;
}

if (args[0] == 'sepia') {
var sepia = new Discord.RichEmbed()

  .addField(`<:pcb:541054703002189825> ▸ \`${prefixo}sepia\``, "Send your photo with sepia effect.")
  .addField("<:use:541054031003648010> ▸ How to use:", `**${prefixo}sepia**`)
  .addField("<:exa:541055403450957824> ▸ Examples:", `\`${prefixo}sepia\``)
  .addField("<:alter:541054054474842113> ▸ Alternatives:", `\`${prefixo}sepia\``)
  .setColor("#36393e")
  .setThumbnail(message.client.user.displayAvatarURL)
  .setTimestamp()
  .setFooter("Photoshop", message.client.user.displayAvatarURL)
  message.channel.send(sepia)
  return;
}

//Category SONG -->

if (args[0] == 'join') {
var join = new Discord.RichEmbed()

  .addField(`<:pcb:541054703002189825> ▸ \`${prefixo}join\``, "Connect the bot into the voice channel.")
  .addField("<:use:541054031003648010> ▸ How to use:", `**${prefixo}join**`)
  .addField("<:exa:541055403450957824> ▸ Examples:", `\`${prefixo}join\``)
  .addField("<:alter:541054054474842113> ▸ Alternatives:", `\`${prefixo}play\``)
  .setColor("#36393e")
  .setThumbnail(message.client.user.displayAvatarURL)
  .setTimestamp()
  .setFooter("Song", message.client.user.displayAvatarURL)
  message.channel.send(join)
  return;
}

if (args[0] == 'leave') {
var leave = new Discord.RichEmbed()

  .addField(`<:pcb:541054703002189825> ▸ \`${prefixo}leave\``, "Disconnect the bot from the voice channel.")
  .addField("<:use:541054031003648010> ▸ How to use:", `**${prefixo}leave**`)
  .addField("<:exa:541055403450957824> ▸ Examples:", `\`${prefixo}leave\``)
  .addField("<:alter:541054054474842113> ▸ Alternatives:", `\`${prefixo}leave\``)
  .setColor("#36393e")
  .setThumbnail(message.client.user.displayAvatarURL)
  .setTimestamp()
  .setFooter("Song", message.client.user.displayAvatarURL)
  message.channel.send(leave)
  return;
}

if (args[0] == 'np') {
var np = new Discord.RichEmbed()

  .addField(`<:pcb:541054703002189825> ▸ \`${prefixo}np\``, "Shows information about the currently playing song.")
  .addField("<:use:541054031003648010> ▸ How to use:", `**${prefixo}np**`)
  .addField("<:exa:541055403450957824> ▸ Examples:", `\`${prefixo}np\``)
  .addField("<:alter:541054054474842113> ▸ Alternatives:", `\`${prefixo}np\``)
  .setColor("#36393e")
  .setThumbnail(message.client.user.displayAvatarURL)
  .setTimestamp()
  .setFooter("Song", message.client.user.displayAvatarURL)
  message.channel.send(np)
  return;
}

if (args[0] == 'play') {
var play = new Discord.RichEmbed()

 .addField(`<:pcb:541054703002189825> ▸ \`${prefixo}play\``, "Select music to play on your server.")
 .addField("<:use:541054031003648010> ▸ How to use:", `**${prefixo}play <song name or url>**`)
 .addField("<:exa:541055403450957824> ▸ Examples:", `\`${prefixo}play Summer\n${prefixo}play The sun\``)
 .addField("<:alter:541054054474842113> ▸ Alternatives:", `\`${prefixo}play, ${prefixo}touch\``)
 .setColor("#36393e")
 .setThumbnail(message.client.user.displayAvatarURL)
 .setTimestamp()
 .setFooter("Song", message.client.user.displayAvatarURL)
 message.channel.send(play)
 return;
}

if (args[0] == 'queue') {
var queue = new Discord.RichEmbed()

  .addField(`<:pcb:541054703002189825> ▸ \`${prefixo}queue\``, "Show playlist.")
  .addField("<:use:541054031003648010> ▸ How to use:", `**${prefixo}queue**`)
  .addField("<:exa:541055403450957824> ▸ Examples:", `\`${prefixo}queue\``)
  .addField("<:alter:541054054474842113> ▸ Alternatives:", `\`${prefixo}queue\``)
  .setColor("#36393e")
  .setThumbnail(message.client.user.displayAvatarURL)
  .setTimestamp()
  .setFooter("Song", message.client.user.displayAvatarURL)
  message.channel.send(queue)
  return;
}

if (args[0] == 'radio') {
var radio = new Discord.RichEmbed()

  .addField(`<:pcb:541054703002189825> ▸ \`${prefixo}radio\``, "Displays radio information.")
  .addField("<:use:541054031003648010> ▸ How to use:", `**${prefixo}radio**`)
  .addField("<:exa:541055403450957824> ▸ Examples:", `\`${prefixo}radio\``)
  .addField("<:alter:541054054474842113> ▸ Alternatives:", `\`${prefixo}radio\``)
  .setColor("#36393e")
  .setThumbnail(message.client.user.displayAvatarURL)
  .setTimestamp()
  .setFooter("Song", message.client.user.displayAvatarURL)
  message.channel.send(radio)
  return;
}

if (args[0] == 'repeat') {
var repeat = new Discord.RichEmbed()

  .addField(`<:pcb:541054703002189825> ▸ \`${prefixo}repeat\``, "Put the song to repeat the times requested.")
  .addField("<:use:541054031003648010> ▸ How to use:", `**${prefixo}repeat <number of repetions>**`)
  .addField("<:exa:541055403450957824> ▸ Examples:", `\`${prefixo}repeat 1\n${prefixo}repeat 5\``)
  .addField("<:alter:541054054474842113> ▸ Alternatives:", `\`${prefixo}repeat\``)
  .setColor("#36393e")
  .setThumbnail(message.client.user.displayAvatarURL)
  .setTimestamp()
  .setFooter("Song", message.client.user.displayAvatarURL)
  message.channel.send(repeat)
  return;
}

if (args[0] == 'restart') {
var restart = new Discord.RichEmbed()

  .addField(`<:pcb:541054703002189825> ▸ \`${prefixo}restart\``, "Puts the song to play from the beginning.")
  .addField("<:use:541054031003648010> ▸ How to use:", `**${prefixo}restart**`)
  .addField("<:exa:541055403450957824> ▸ Examples:", `\`${prefixo}restart\``)
  .addField("<:alter:541054054474842113> ▸ Alternatives:", `\`${prefixo}restart\``)
  .setColor("#36393e")
  .setThumbnail(message.client.user.displayAvatarURL)
  .setTimestamp()
  .setFooter("Song", message.client.user.displayAvatarURL)
  message.channel.send(restart)
  return;
}

if (args[0] == 'skip') {
var skip = new Discord.RichEmbed()

  .addField(`<:pcb:541054703002189825> ▸ \`${prefixo}skip\``, "Skip to next song in playlist.")
  .addField("<:use:541054031003648010> ▸ How to use:", `**${prefixo}skip**`)
  .addField("<:exa:541055403450957824> ▸ Examples:", `\`${prefixo}skip\``)
  .addField("<:alter:541054054474842113> ▸ Alternatives:", `\`${prefixo}skip\``)
  .setColor("#36393e")
  .setThumbnail(message.client.user.displayAvatarURL)
  .setTimestamp()
  .setFooter("Song", message.client.user.displayAvatarURL)
  message.channel.send(skip)
  return;
}

if (args[0] == 'spotify') {
var spotify = new Discord.RichEmbed()

  .addField(`<:pcb:541054703002189825> ▸ \`${prefixo}spotify\``, "Shows information about the song the user is listening to on spotify.")
  .addField("<:use:541054031003648010> ▸ How to use:", `**${prefixo}spotify <user mention>**`)
  .addField("<:exa:541055403450957824> ▸ Examples:", `\`${prefixo}spotify @zSpl1nterUS_#8611\n${prefixo}spotify @Scott#1517\``)
  .addField("<:alter:541054054474842113> ▸ Alternatives:", `\`${prefixo}spotify\``)
  .setColor("#36393e")
  .setThumbnail(message.client.user.displayAvatarURL)
  .setTimestamp()
  .setFooter("Song", message.client.user.displayAvatarURL)
  message.channel.send(spotify)
  return;
}

if (args[0] == 'stop') {
var stop = new Discord.RichEmbed()

  .addField(`<:pcb:541054703002189825> ▸ \`${prefixo}stop\``, "For music.")
  .addField("<:use:541054031003648010> ▸ How to use:", `**${prefixo}stop**`)
  .addField("<:exa:541055403450957824> ▸ Examples:", `\`${prefixo}stop\``)
  .addField("<:alter:541054054474842113> ▸ Alternatives:", `\`${prefixo}stop\``)
  .setColor("#36393e")
  .setThumbnail(message.client.user.displayAvatarURL)
  .setTimestamp()
  .setFooter("Song", message.client.user.displayAvatarURL)
  message.channel.send(stop)
  return;
}

if (args[0] == 'volume') {
var volume = new Discord.RichEmbed()

  .addField(`<:pcb:541054703002189825> ▸ \`${prefixo}volume\``, "Change the bot volume.")
  .addField("<:use:541054031003648010> ▸ How to use:", `**${prefixo}volume <number>**`)
  .addField("<:exa:541055403450957824> ▸ Examples:", `\`${prefixo}volume 1\n${prefixo}volume 5\``)
  .addField("<:alter:541054054474842113> ▸ Alternatives:", `\`${prefixo}volume\``)
  .setColor("#36393e")
  .setThumbnail(message.client.user.displayAvatarURL)
  .setTimestamp()
  .setFooter("Song", message.client.user.displayAvatarURL)
  message.channel.send(volume)
  return;
}

    const information = require('fs').readdirSync('./source/Information').length
    const configuração = require('fs').readdirSync('./source/configuração').length
    const music = require('fs').readdirSync('./source/Song').length
    const fun = require('fs').readdirSync('./source/Fun').length
    const moderator = require('fs').readdirSync('./source/Moderation').length
    const photoshop = require('fs').readdirSync('./source/Photoshop').length

    let help = new Discord.RichEmbed()

    .setTitle(`${language.help.embed.a}`)
    .setDescription(`${language.help.embed.b} **${message.author.username}**, ${language.help.embed.c} **${prefixo}**`)
    .addField(`<:information:537072191292964865> **▸ ${language.help.embed.d}** [${information}]`, `\`anime ▸ avatar ▸ botinfo ▸ commands ▸ creator ▸ emoji-info ▸ invite ▸ m-status ▸ perms ▸ ping ▸ roleinfo ▸ scott ▸ total ▸ uptime ▸ serverinfo\``)
    .addField(`<a:music:512400492836683791> **▸ ${language.help.embed.e}** [${music}]`, `\`join ▸ leave ▸ np ▸ repeat ▸ play ▸ queue ▸ radio ▸ restart ▸ skip ▸ spotify ▸ stop ▸ volume\``)
    .addField(`<:photoshop:516045794965454853> **▸ ${language.help.embed.f}** [${photoshop}]`, `\`sepia ▸ gray ▸ nitro\``)
    .addField(`<:admin:538797350043516954> **▸ ${language.help.embed.g}** [${configuração}]`, `\`ant-invite ▸ autorole ▸ config ▸ output ▸ prefix ▸ welcome\``)
    .addField(`<:confetti:538797714780192800> **▸ ${language.help.embed.h}** [${fun}]`, `\`cat ▸ stiles ▸ fagot ▸ meme\``)
    .addField(`<:mod:538797835202592798> **▸ ${language.help.embed.i}** [${moderator}]`, `\`ads - unmute ▸ tempmute ▸ clear ▸ ban ▸ kick ▸ announce ▸ lockdown ▸ mute ▸ off ▸ on ▸ say\``)
    .addField(`<:more:542115576278024192> **▸ ${language.help.embed.j}**`, `${language.help.embed.k} **${prefixo}help ${language.help.embed.l}**`)
    .setColor("#36393e")
    .setThumbnail(scott.user.displayAvatarURL)
    .setFooter(`${language.help.embed.m}`)
    message.channel.send(help)

    } catch (e) {
        if(e.code === 50007) {

          message.channel.send({
            embed: {
              color: 0x36393e,
              description: `<:error:538505640889417752> - ${message.author}, You must allow me to send messages in your ** DM **
              Change your settings from **Privacy & Security** to **__PROSECUTE__**`
            }
        }).catch(er => {

          console.log(`Erro command help - guild: ID:(${message.guild.id}) - Name:(${message.guild.name}) Erro: ${er}`) 
          })
        } else {
console.log(`Erro command help - guild: ID:(${message.guild.id}) - Name:(${message.guild.name}) Erro: ${e}`)
}
}
}

exports.help = {
    name: "help",
    aliases: ["help", "pls"],
    diretorio: "Information"
  } 