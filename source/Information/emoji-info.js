const Discord = require("discord.js")
const moment = require("moment")
require("moment-duration-format")


exports.run =  async (scott, message, args, prefixo, language) => {
    
console.log(`comando emoji-info ${message.guild.name} ${message.guild.id} ${message.author.tag}`)

moment.locale(`${language.ei.embed.k}`)

try {

let emoji = message.guild.emojis.find(emoji => emoji.name === `${args.join(" ")}`)


let animado;
    if (emoji.animated === true) animado = `${language.ei.embed.i}`
    if (emoji.animated === false) animado = `${language.ei.embed.j}`

let emo;
if(emoji.animated === true) emo = "**`"+`<a:${emoji.name}:${emoji.id}>`+"`**"
if(emoji.animated === false) emo = "**`"+`<:${emoji.name}:${emoji.id}>`+"`**"

    
    const embed = new Discord.RichEmbed()

.setTitle(`<:lens:538527577674088468> - ${language.ei.embed.a} **${emoji.name}**`)
.setColor('36393e')
.setThumbnail(`${emoji.url}`)
.addField(`**<:alter:541054054474842113> **▸** ${language.ei.embed.b}**`, `**`+emoji.guild.name+`**`, true)
.addField(`**<a:owner:512392346906656778> **▸** ${language.ei.embed.c}**`, `**`+animado+`**`, true)
.addField(`**<:calendar:516018350665629715> **▸** ${language.ei.embed.d}**`, `**`+moment(emoji.createdAt).format(`LL`)+`**`,true)
.addField(`**<:exa:541055403450957824> **▸** Emoji ID:**`, `**`+emoji.id+`**`,true )
.addField(`**<:pcb:541054703002189825> **▸** ${language.ei.embed.e}**`, `${emo}`)
.setTimestamp()
.setFooter(`${language.ei.embed.l} ${message.author.tag}`, message.author.avatarURL)

message.channel.send(embed)

} catch (err) {

const embedy = new Discord.RichEmbed()
.setTitle(`<:error:538505640889417752> - **${language.ei.embed.f}**`)
.setColor('36393e')
.setFooter(`Scott - 2019`, scott.user.displayAvatarURL)
.addField(`<:okay:538503952900161538> - ${language.ei.embed.g}`, `**${prefixo}emoji-info \`${language.ei.embed.h}\`**`)
message.channel.send(embedy).then(msg => msg.delete(5000));

}
}

exports.help = {
name: `emoji-info`,
aliases: ["emoji-info", "emojinfo", "emojiinfo", "e.info", "emoji.i"],
diretorio: "Information"
}