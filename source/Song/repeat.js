const lista = require('../../configuração/queue.js')
const Discord = require("discord.js");
const moment = require('moment')
require('moment-duration-format')
moment.locale('pt-BR')

exports.run =  async (scott, message, args, prefixo) => {

console.log(`Command repeat ${message.guild.name} ${message.guild.id} ${message.author.tag}`)

try {

var serverQueue = lista.queue.get(message.guild.id)
var deleteCount = parseInt(args[0])

if(serverQueue) {
    if(serverQueue.music) {
        if(serverQueue.repeat == 0) {
            if(args[0]) {
                if(!deleteCount || deleteCount < 1 || deleteCount > 5) {

                    message.channel.send({
                        embed: {
                            color: 0x36393e,
                            description: `<:error:538505640889417752> - Use **only** numbers from **\`1\`** the **\`5\`**`,
                            footer: {
                                "text": message.author.username,
                                'icon_url': message.author.displayAvatarURL
                                }   ,
                                timestamp: new Date(),
                            }
                        })

                        } else {
                        serverQueue.repeat = args[0]

                            message.channel.send({
                                embed: {
                                color: 0x36393e,
                                description: `<:okay:538503952900161538> - Repeat **enabled** Repeat: **${args[0]}**`,
                                footer: {
                                "text": message.author.username,
                                'icon_url': message.author.displayAvatarURL
                                    },
                                timestamp: new Date(),
                                }
                            })
                        }
                
                    } else {

                message.channel.send({
                    embed: {
                        color: 0x36393e,
                        description: `<:okay:538503952900161538> - Enter a numeric value of  **\`1\`** the **\`5\`** to set the **\`repetition\`**`,
                        footer: {
                            "text": message.author.username,
                            'icon_url': message.author.displayAvatarURL
                            },
                            timestamp: new Date(),
                            }
                        })
                    }
                } else {
                    if(args[0] == 'off') { 
                    
                        serverQueue.repeat = 0

                        message.channel.send({
                        embed: {
                            color: 0x36393e,
                            description: `<:okay:538503952900161538> - Repeat **disabled** Enable use: **${prefixo}repeat [number]**`,
                            footer: {
                                "text": message.author.username,
                                'icon_url': message.author.displayAvatarURL
                                    },
                                timestamp: new Date(),
                            }
                        })
                    } else if(serverQueue.repeat >= 1) {

            message.channel.send({
                embed: {
                    color: 0x36393e,
                    description: `<:error:538505640889417752> - Repeat already **enabled ** Use: **${prefixo}repeat off** `,
                    footer: {
                        "text": message.author.username,
                        'icon_url': message.author.displayAvatarURL
                        },
                    timestamp: new Date(),
                        }
                    })
                }
            }
        } else if(serverQueue.radio) {
            message.channel.send({
            embed: {
                description: `<:error:538505640889417752> - ${message.author}, **radio** detected, not the way to enable replay!`,
                color: 0x36393e,
                        }
                    }).then(msg => {
                msg.delete(5000)
            })
        }
    } else {
    message.channel.send({
        embed: {
            description: `<:error:538505640889417752> - ${message.author}, there is nothing **playing**`,
            color: 0x36393e,
        
                }
            }).then(msg => {
        msg.delete(5000)
        });
    }
} catch (e) {

    console.log(`Erro command REPEAT - guild: ID:(${message.guild.id}) - Name:(${message.guild.name}) Erro: ${e}`)
    }
}