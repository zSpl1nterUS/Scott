const lista = require('../../configuração/queue.js')

exports.run =  async (xerphos, message, args) => {

console.log(`Comando volume ${message.guild.name} ${message.guild.id} ${message.author.tag}`)

try {

var serverQueue = lista.queue.get(message.guild.id);
var deleteCount = parseInt(args[0], 10);

if(!message.member.roles.some(r=>["DJ", "dj"].includes(r.name))) {
    return message.channel.send({
      embed: {
          title: `<:error:538505640889417752> - Only members with the \`DJ\` role can set the volume`,
          color: 0x36393e,
      }
  })
}

if(!message.member.voiceChannel) {
    
    message.channel.send({
        embed: {
            title: `<:error:538505640889417752> - You aren´t on a **voice** channel`,
            color: 0x36393e,
            }
        }).then(msg => {
        msg.delete(5000)
    })
}

if(!serverQueue) {
    message.channel.send({
        embed: {
            title: `<:error:538505640889417752> - There is nothing **playing**`,
            color: 0x36393e,
            }
        }).then(msg => {
        msg.delete(5000)
    })
} else if(serverQueue.radio) {
        
    message.channel.send({
        embed: {
            title: `<:error:538505640889417752> - I can not change the **volume** of a **radio**`,
            color: 0x36393e,
            }
        }).then(msg => {
        msg.delete(5000)
    })

}  else {
        if(!args[0]) return message.channel.send({
                embed: {
                    title: `**Volume**`,
                    color: 0x36393e,
                    description: `The current volume is: **${serverQueue.volume}**`,
                    footer: {
                        "text": message.author.username,
                        'icon_url': message.author.displayAvatarURL
                    },
                    timestamp: new Date(),
                }
            })
} if(isNaN(args[0])) {

        message.channel.send({
            embed: {
                color: 0x36393e,
                description: `<:cancel:518226555668004894> - Use **only** numbers to change the **\`volume\`**`,
                footer: {
                    "text": message.author.username,
                    'icon_url': message.author.displayAvatarURL
                },
                timestamp: new Date(),
        }
    })
    
} else if(!deleteCount || deleteCount < 1 || deleteCount > 10) {

message.channel.send({
        embed: {
            color: 0x36393e,
            description: `<:cancel:518226555668004894> - Use **only** numbers from \`1\` to \`\`10\`\``,
            footer: {
                "text": message.author.username,
                'icon_url': message.author.displayAvatarURL
                },
            timestamp: new Date(),
        }
    })
} else {
            
message.channel.send({
            embed: {
                title: ` **Volume**`,
                color: 0x36393e,
                description: `I set the volume to: **${args[0]}**`,
                footer: {
                    "text": message.author.username,
                    'icon_url': message.author.displayAvatarURL
                },
                timestamp: new Date(),
                }
            }).then(opa => {
                serverQueue.volume = args[0];
                serverQueue.connection.dispatcher.setVolumeLogarithmic(args[0] / 10)
                message.delete(5000)
                opa.delete(5000)
            })
        }


} catch (e) {

console.log(`Erro comando de Volume - guild: id:(${message.guild.id}) - nome:(${message.guild.name}) Erro: ${e}`)
    }
}

exports.help = {
    name: "volume",
    aliases: ["volume"],
    diretorio: "Song"
  }