const lista = require('../../configuração/queue.js')
const Discord = require("discord.js");
const moment = require('moment')
require('moment-duration-format')
moment.locale('pt-BR')

exports.run =  async (xerphos, message, args) => {

console.log(`Comando np ${message.guild.name} ${message.guild.id} ${message.author.tag}`)

try {

var serverQueue = lista.queue.get(message.guild.id)

if(!serverQueue) {
    message.channel.send({
        embed: {
            description: `<:cancel:537012088850219018> - ${message.author}, there is nothing **playing**`,
            color: 0x36393e,
        
                }
            }).then(msg => {
        msg.delete(5000)
    })

} else if(serverQueue.radio) {

    
    var inicio = lista.queue.get(message.guild.id).inicio
    var timeAtual = (new Date() - inicio)/1000
    var atual = moment.duration.format([moment.duration((timeAtual*1000))], 'hh:mm:ss').toString()
    atual = atual.length === 2 ? `00:${atual}` : atual
    
    var npE = new Discord.RichEmbed()

        .setColor(0x36393e)
            .setFooter(message.author.username, message.author.displayAvatarURL)
                .setTimestamp()
                    .addField(`<a:music:512400492836683791> ▸ Playing now:`, `**${serverQueue.soms[0].title}**`, false)
                        .addField('<:time:537051227037368330> ▸ Duration:', `**\`[${atual} | LIVE]\`**`, true)
                            .addField('🌀 ▸ Inserted By:', `**\`${serverQueue.soms[0].inserido}\`**`, true)
                                .setThumbnail(serverQueue.soms[0].thumb)

    message.channel.send(npE).then(async music => {

await music.react('⏹')

    var stop = music.createReactionCollector((r, u) => r.emoji.name === "⏹" && u.id === message.author.id, { time: 30000 });
        
        stop.on("collect", async r => {

            music.delete()
            message.delete()

            message.channel.send({
                embed: {
                    description: `<:okay:538503952900161538> - ${message.author}, **turning off** the radio on the channel**\`${serverQueue.canalVoz.name}\`**`,
                    color: 0x36393e,
                }
            })

            serverQueue.connection.disconnect()
            lista.queue.delete(message.guild.id)
        })
    })

} else {

    var inicio = lista.queue.get(message.guild.id).inicio
    var timeAtual = (new Date() - inicio)/1000
    var atual = moment.duration.format([moment.duration((timeAtual*1000))], 'hh:mm:ss').toString()
    atual = atual.length === 2 ? `00:${atual}` : atual
    
    var npE = new Discord.RichEmbed()

        .setColor(0x36393e)
            .setFooter(message.author.username, message.author.displayAvatarURL)
                .setTimestamp()
                    .addField(`<a:music:512400492836683791> ▸ Playing now:`, `**${serverQueue.soms[0].title}**`, false)
                        .addField('<:time:537051227037368330> ▸ Duration:', `**\`[${atual} | ${serverQueue.soms[0].duracao}]\`**`, true)
                            .addField('🌀 ▸ Inserted By:', `**\`${serverQueue.soms[0].inserido}\`**`, true)
                                .setThumbnail(serverQueue.soms[0].thumb)

    message.channel.send(npE).then(async music => {

        await music.react('🔄')
            await music.react('⏩')
                await music.react('⏹')

        var restart = music.createReactionCollector((r, u) => r.emoji.name === "🔄" && u.id === message.author.id, { time: 30000 });
        var stop = music.createReactionCollector((r, u) => r.emoji.name === "⏹" && u.id === message.author.id, { time: 30000 });
        var skip = music.createReactionCollector((r, u) => r.emoji.name === "⏩" && u.id === message.author.id, { time: 30000 });

restart.on("collect", async r => {
        
    serverQueue.restart = true
    serverQueue.connection.dispatcher.end('Restart');
    setTimeout(() => {
      serverQueue.restart = false
    }, 1500);
    music.delete()
    message.delete()

    })

skip.on("collect", async r => {
        
        serverQueue.connection.dispatcher.end('Skip');
        music.delete()
        message.delete()
    
    })

stop.on("collect", async r => {

        serverQueue.soms = [];
        serverQueue.connection.dispatcher.end('Stop');
        music.delete()
        message.delete()

            })
        })
    } 
} catch (e) {

    console.log(`Erro comando de NP - guild: id:(${message.guild.id}) - nome:(${message.guild.name}) Erro: ${e}`)
    }
}

exports.help = {
    name: "np",
    aliases: ["np"],
    diretorio: "Song"
  }