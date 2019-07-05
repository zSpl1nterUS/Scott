const Discord = require('discord.js');

exports.run = (client, message, args) => {

        avatar = message.author.avatarURL
        let simg = `${message.guild.iconURL}?size=2048`
        let icone = new Discord.RichEmbed()
        .setFooter(`Pedido por ${message.author.tag}`, message.author.avatarURL)
        .setDescription("<:foto:503708041171173386> | Ícone do servidor:")
        .setImage(simg)
        .setTimestamp()
        .setColor("#a32aff")
        message.channel.send(`${message.author}`)
        message.channel.send(icone).then(async msg => {
            await msg.react('518232708028301325')
          
            const DeleteFilter = (reaction, user) => reaction.emoji.name === '518232708028301325' && user.id === message.author.id;
              const deletee = msg.createReactionCollector(DeleteFilter);

          
deletee.on('collect', async bot => {
           await msg.delete()

        })
})
    }

module.exports.config = {
    name: "iconedoservidor",
    aliases: ["iconedoservidor", "icon-server", "icon"]
    }
