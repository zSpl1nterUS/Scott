const Discord = require("discord.js")

exports.run = (scott,message,args)=> {

    console.log(`Command total ${message.guild.name} ${message.guild.id} ${message.author.tag}`)


    let total = scott.commands.size


message.channel.send(new Discord.RichEmbed()
.setDescription("<a:spinner:540302486376808479>")
.setColor("36393e"))
.then(msg => {
setTimeout(()=>{
msg.edit(new Discord.RichEmbed()
.setColor("0x36393e")
.setThumbnail(message.client.user.displayAvatarURL)
.setFooter("Scott - 2019", message.client.user.displayAvatarURL)
.setTimestamp()
.setTitle(`<:exa:541055403450957824> - I **have** a **total** of:`)
.addField(`<:choice:504784284305981468> **▸** Channels:`, `\`\`\`js\n${scott.channels.size}\`\`\``, true)
.addField(`<:management:514580926794039298> **▸** Servers:`, `\`\`\`js\n${scott.guilds.size}\`\`\``, true)
.addField(`<:man:505042016745553940> **▸** Users:`, `\`\`\`js\n${scott.users.size}\`\`\``, true)
.addField("<:pcb:541054703002189825> **▸** Commands:", `\`\`\`js\n${total}\`\`\``)
.addField(`<a:minecraft:508786928481599490> **▸** Emojis:`, `\`\`\`js\n${scott.emojis.size.toLocaleString()}\`\`\``, true))
    
color: "0x36393e"
    
}, 3 * 1000)
})
}
exports.help = {
    name: "total",
    aliases: ["total"],
    diretorio: "Information"
}