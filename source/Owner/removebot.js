const Discord = require("discord.js")
const ownerID = '409520003256156160';

module.exports.run = async (scott, message, args) => {

    console.log(`Command removerbot ${message.guild.name} ${message.guild.id} ${message.author.tag}`)

    let user = message.mentions.users.first() || message.author;
    if (message.author.id !== ownerID) return message.channel.send(new Discord.RichEmbed()
        .setColor("0x36393e")
        .setTimestamp()
        .setDescription("<:error:538505640889417752> - You do not have permission to run this command.")).then(m => m.delete(5000))
    var error17 = new Discord.RichEmbed().setColor("36393e")
        .setTimestamp()
        .setDescription('<:error:538505640889417752> - Please enter a **valid** server \`ID\`.')
        .setColor("36393e")

    if (isNaN(args[0])) return message.channel.send(error17).then(msg => {
        msg.delete(9000)
    });

    scott.guilds.get(args[0]).leave();
    const embed = new Discord.RichEmbed()
        .setColor("36393e")
        .setTimestamp()
        .setDescription(`<:okay:538503952900161538> - Bot has been **removed** from server: \`ID\` **[${args[0]}]**`)
    message.reply(embed);
}

exports.help = {
    name: "removebot",
    aliases: ["removebot", "removerbot"],
    diretorio: "Owner"
}