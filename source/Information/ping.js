const Discord = require("discord.js");

module.exports.run = async (scott, message, args, prefixo, language) => {   

    console.log(`Command Ping ${message.guild.name} ${message.guild.id} ${message.author.tag}`)


message.channel.send(new Discord.RichEmbed()
.setDescription("<a:spinner:540302486376808479>")
.setColor("36393e"))
.then(msg => {
setTimeout(()=>{
msg.edit(new Discord.RichEmbed()
.setColor("#36393e")
.setTimestamp()
.setThumbnail("https://cdn.discordapp.com/attachments/536998827358683140/537425758222680074/hourglass.png")
.setDescription(`<:time:537051227037368330>** - ${language.ping.embed.description} **\n\n<:ccloud:537349883242479616>${language.ping.embed.description2} **${msg.createdTimestamp - message.createdTimestamp}ms**\n<:ccloud:537349883242479616>${language.ping.embed.description3} **${Math.round(scott.ping)}ms**\n<:ccloud:537349883242479616>${language.ping.embed.description4} **${scott.ws.connection.sequence}ms**\n<:ccloud:537349883242479616>Shard **${(scott.shard.id + 1)}/${(scott.shard.count)}**`))

color: "#36393e"

}, 3 * 1000)

})
}

exports.help = {
    name: "ping",
    aliases: ["ping", "pong", "latency", "ms"],
    diretorio: "Information"
  }