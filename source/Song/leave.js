const lista = require('../../configuração/queue.js')

exports.run =  async (xerphos, message, args) => {

console.log(`Command leave ${message.guild.name} ${message.guild.id} ${message.author.tag}`)

try {

var voicechannel = message.member.voiceChannel;
var serverQueue = lista.queue.get(message.guild.id);

if(serverQueue) {

    if(serverQueue.music === true) return message.channel.send({
        embed: {
            description: `<:error:538505640889417752> - ${message.author}, I'm playing **music**, USE **\`${prefixo}stop\`**to stop **playing**`,
            color: 0x36393e,
        }
    })

if(serverQueue.radio === true) return message.channel.send({
        embed: {
            description: `<:okay:538503952900161538> - ${message.author}, I'm **playing** radio, USE**\`${prefixo}radio leave\`**to stop **playing**`,
            color: 0x36393e,
        }
    })
}

if(message.guild.members.get(xerphos.user.id).voiceChannel) {
    if(voicechannel) {
        if(message.member.voiceChannel.id === message.guild.members.get(xerphos.user.id).voiceChannel.id) {

let vc = message.guild.members.get(xerphos.user.id).voiceChannel

message.guild.voiceConnection.disconnect()

message.channel.send({
        embed: {
            title: `<:okay:538503952900161538> - Disconnected from voice channel**\`${vc.name}\`**!`,
            color: 0x36393e,
        
        }
    })
    
} else {

    message.channel.send({
        embed: {
            title: `<:error:538505640889417752> - Connect to the **voice** channel I'm connected to`,
            color: 0x36393e,
            }
        })
    }
} else {

    message.channel.send({
        embed: {
            title: `<:error:538505640889417752> - Connect to a voice channel`,
            color: 0x36393e,
            }
        })

    }
} else {

    message.channel.send({
        embed: {
            title: `<:error:538505640889417752> - I'm not **connected** to any voice channel`,
            color: 0x36393e,
            }
        })
    }
} catch (e) {

    console.log(`Erro comando de Leave - guild: id:(${message.guild.id}) - nome:(${message.guild.name}) Erro: ${e}`)
    }
}

exports.help = {
    name: "leave",
    aliases: ["leave"],
    diretorio: "Song"
  }