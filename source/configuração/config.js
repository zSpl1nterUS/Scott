const Discord = require("discord.js");
const database = require("../../configuração/database.js");

exports.run = async (scott, message, args, prefixo, language) => {

    console.log(`Command config ${message.guild.name} ${message.guild.id} ${message.author.tag}`)

    database.Guilds.findOne({ _id: message.guild.id }, function (erro, servidor) {

        let welcome = servidor.welcome
        let = welcome
        if (welcome === true) welcome = "<:on:537007283004243978>"
        if (welcome === false) welcome = "<:off:537007288804704267>";

        let saida = servidor.byebye
        let = saida
        if (saida === true) saida = "<:on:537007283004243978>"
        if (saida === false) saida = "<:off:537007288804704267>";

        let antinvite = servidor.antinvite
        let = antinvite
        if (antinvite === true) antinvite = "<:on:537007283004243978>"
        if (antinvite === false) antinvite = "<:off:537007288804704267>";

        let autorole = servidor.autorole
        let = autorole
        if (autorole === true) autorole = "<:on:537007283004243978>"
        if (autorole === false) autorole = "<:off:537007288804704267>";


        message.channel.startTyping()

        var embedConfig = new Discord.RichEmbed()

            .setTitle(`**• ${language.config.embed.i}**`)
            .setThumbnail(scott.user.displayAvatarURL)
            .setFooter(`${language.config.embed.g} ${message.author.username}`, message.author.displayAvatarURL)
            .addField(`• **Ant-Invite ${antinvite}**`, `Use \`${prefixo}ant-invite\`, \n${language.config.embed.a}`)
            .addField(`• **Welcome ${welcome}**`, `Use \`${prefixo}welcome\`, \n${language.config.embed.b}`)
            .addField(`• **Output ${saida}**`, `Use \`${prefixo}output\`, \n${language.config.embed.c}`)
            .addField(`• **Autorole ${autorole}**`, `Use \`${prefixo}autorole\`, \n${language.config.embed.d}`)
            .addField(`• **Prefix - ${language.config.embed.h} \`[${servidor.prefix}]\`**`, `Use \`${prefixo}prefix\`, \n${language.config.embed.e}`)
            .addField(`• **Lang - ${language.config.embed.h} \`[${servidor.lang}]\`**`, `Use \`${prefixo}lang\`, \n${language.config.embed.f}`)
            .setColor('#36393e')

        message.channel.stopTyping()
        message.channel.send(embedConfig)

    }).catch(e => {
        console.log('Mongoose Duplicated')
    })
}
exports.help = {
    name: "config",
    aliases: ["config"],
    diretorio: "configuração"
}