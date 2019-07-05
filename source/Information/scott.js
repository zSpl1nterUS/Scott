const Discord = require('discord.js');

exports.run = async (scott, message, args) => {


console.log(`Command Scott ${message.guild.name} ${message.guild.id} ${message.author.tag}`)


try {
            var connections = scott.voiceConnections

            if(connections.size === 0) {

                message.reply('<:error:538505640889417752> - None **\`voice connection\`** in **Moment**')

            } else {

            var embed = new Discord.RichEmbed();

            connections.forEach(a=> {
                embed.setColor('#36393e')
                embed.setThumbnail(scott.user.displayAvatarURL)
                embed.setFooter(`Scott - 2019`, scott.user.displayAvatarURL)
                embed.addField(`<a:music:512400492836683791>Server: **${a.channel.guild.name}**`, `**Channel: \`${a.channel.name}\`**\n**Members List: \`${a.channel.members.size}\`**`)
            })

            message.channel.send(embed)

        }

      } catch (e) {

       console.log(`Erro - Command Scott\n${e}`)
    }
}

exports.help = {
    name: "scott",
    aliases: ["scott"],
    diretorio: "Information"
  }