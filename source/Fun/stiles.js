const Discord = require("discord.js")

module.exports.run = async (scott, message, args, prefixo) => {

    console.log(`Command stiles ${message.guild.name} ${message.guild.id} ${message.author.tag}`)

    if(message.content.split(' ').slice(1).join(' ').length < 1) return message.channel.send(new Discord.RichEmbed()
    .setColor("#36393e")
    .setTimestamp()
    .setDescription(`<:error:538505640889417752> - ${message.author}, Ask Stiles a question to respond. Example \`${prefixo}stiles I'm cool?\``))
let replies = ["Yes.","I do not know.", "¯\_(ツ)_/¯","I only know that I know nothing.","I've never even seen (͡ ° ͜ʖ ͡ °)","The important is what matters.", "No.", "I do not know.", "Perhaps.","I think so.","I'm not sure","Probably.","From my point of view, yes.","I think so","I do not think so."]

let result = Math.floor((Math.random() * replies.length));

message.channel.createWebhook('Stiles', 'https://cdn.discordapp.com/attachments/538807732975960074/540322293692235777/stiles_stilinki.jpg').then(y => {
    y.send(`${message.author}, **${replies[result]}**`);
    y.delete();
})

}

exports.help = {
    name: "stiles",
    aliases: ["stiles", "8ball"],
    diretorio: "Fun"
}