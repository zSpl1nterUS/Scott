const database = require('../../configuração/database.js')
const Discord = require('discord.js')

exports.run = async (scott, message, args, prefixo, language) => {

    console.log(`Command lang ${message.guild.name} ${message.guild.id} ${message.author.tag}`)

    database.Guilds.findOne({ _id: message.guild.id }, function (erro, servidor) {
        if (servidor) {
            let lang = new Discord.RichEmbed()
            .addField(`**• ${language.lang.embed.lang3}**`, language.lang.embed.lang)
            .setColor("36393e")
            .setFooter()
            .setFooter(`${language.lang.embed.lang5} ${message.author.username}`, message.author.avatarURL)
            .addField(`**• ${language.lang.embed.lang4}**`, `**\`[${servidor.lang}]\`**`)
            .addField(`**• ${language.lang.embed.lang1}**`, `${language.lang.embed.lang2}\n\n<:eua:513024190027137025> ▸ **\`en-US\`**\n<:brazil:513024209925046282> ▸ **\`pt-BR\`**`)
            message.channel.send(lang).then(msg=> {
            msg.react('513024190027137025')
            .then(() => msg.react('513024209925046282'))

            const englishfilter = (reaction, user) => reaction.emoji.id === '513024190027137025' && user.id === message.author.id;
            const english = msg.createReactionCollector(englishfilter, { time: 60000 });
            const portuguesefilter = (reaction, user) => reaction.emoji.id === '513024209925046282' && user.id === message.author.id;
            const portuguese = msg.createReactionCollector(portuguesefilter, { time: 60000 });

            english.on('collect', r => {
              r.remove(message.author.id)
                servidor.lang = 'en-US'
                servidor.save()
                message.channel.send(`<:okay:538503952900161538> - ${message.author}, Language changed to: **\`en-US\`** [<:eua:513024190027137025>]`)
                message.delete(lang)
              })
              portuguese.on('collect', r => {
                r.remove(message.author.id)
                servidor.lang = 'pt-BR'
                servidor.save()
                message.channel.send(`<:okay:538503952900161538> - ${message.author}, Linguagem alterada para: **\`pt-BR\`** [<:brazil:513024209925046282>]`)
                message.delete(lang)
              })
            })
        }
 })
}

exports.help = {
    name: "lang",
    aliases: ["lang"],
    diretorio: "configuração"
}