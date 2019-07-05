const ms = require("ms");
const Discord = require('discord.js')


exports.run = async(scott, message, [time, reason]) => {

  console.log(`Command lockdown ${message.guild.name} ${message.guild.id} ${message.author.tag}`)

  if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(new Discord.RichEmbed()
  .setColor("#36393e")
  .setDescription(`<:error:538505640889417752> - ${message.author}, you do not have **permission** to run this **command**`))
 
  if (!scott.lockit) { scott.lockit = []; }
  let validUnlocks = ["release", "unlock", "u"];
  if (!time) { return message.reply("Specify a time."); }

  const Lockembed = new Discord.RichEmbed()
    .setColor("#36393e")
    .setTimestamp()
    .setTitle("<:lock:519260605991878666> - Notice of closure:")
    .setDescription(`The chat: ${message.channel} was deactivated by: ${message.author} per \`${time}\``);
    if (reason != null) { Lockembed.addField("Razão:", reason); }

  const Unlockembed = new Discord.RichEmbed()
    .setColor("#36393e")
    .setTimestamp()
    .setTitle("<:unlock:519260622563835925> - Unlocked Chat")
    .setDescription(`${message.channel}, was reactivated`);


  if (validUnlocks.includes(time)) {
    message.channel.overwritePermissions(message.guild.id, { SEND_MESSAGES: null }).then(() => {
      message.channel.send({embed: Unlockembed});
      clearTimeout(scott.lockit[message.channel.id]);
      delete scott.lockit[message.channel.id];
    }).catch(error => { console.log(error); });
  } else {
    message.channel.overwritePermissions(message.guild.id, { SEND_MESSAGES: false }).then(() => {
      message.channel.send({embed: Lockembed}).then(() => {
        scott.lockit[message.channel.id] = setTimeout(() => {
          message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: null
          }).then(message.channel.send({embed: Unlockembed})).catch(console.error);
          delete scott.lockit[message.channel.id];
        }, ms(time));
      }).catch(error => { console.log(error); });
    });
  }
};

exports.help = {
  name: "lockdown",
  aliases: ["lockdown"],
  diretorio: "Moderation"
}