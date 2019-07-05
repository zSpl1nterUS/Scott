const ytdl = require("ytdl-core")
const YouTube = require('simple-youtube-api')
const youtube = new YouTube('')
const fetchVideoInfo = require('youtube-info')
const Discord = require("discord.js")
const lista = require('../../configuração/queue.js')

exports.run =  async (scott, message, args, prefixo) => {

console.log(`Comando play ${message.guild.name} ${message.guild.id} ${message.author.tag}`)

const voiceChannel = message.member.voiceChannel;
var serverQueue = lista.queue.get(message.guild.id);

if(serverQueue) {
    if(serverQueue.radio == true)  lista.queue.delete(message.guild.id);
        if(voiceChannel !== message.guild.members.get(scott.user.id).voiceChannel) return message.channel.send({
        embed: {
            title: `<:error:538505640889417752> - ${message.author}, connect to the **voice** channel I am connected to **continue**`,
            color: 0x36393e,
        }
    })
}

if(!args[0]) return message.channel.send({
    embed: {
        description: `<:error:538505640889417752> - ${message.author}, enter the **NAME** or **URL** of the desired song`,
        color: 0x36393e,
    
    }
}).then(msg => msg.delete(5000))

var searchString = args.slice(0).join(' ')
var url = args[0] ? args[0].replace(/<(.+)>/g, '$1') : '';

		if(!voiceChannel) return message.channel.send({
            embed: {
                description: `<:error:538505640889417752> - ${message.author}, connect to a **voice** channel`,
                color: 0x36393e,
            
            }
        }).then(msg => {
            msg.delete(5000)
        })

var permissions = voiceChannel.permissionsFor(message.client.user);

		if(!permissions.has('CONNECT')) {
			message.channel.send({
                embed: {
                    description: `<:error:538505640889417752> - ${message.author}, without permission to **connect** to voice channel`,
                    color: 0x36393e,
                
                }
            }).then(msg => {
                msg.delete(5000)
            })
        };

		if(!permissions.has('SPEAK')) {
			message.channel.send({
                embed: {
                    description: `<:error:538505640889417752> - ${message.author}, without permission to **speak *`,
                    color: 0x36393e,
                
                }
            }).then(msg => {
                msg.delete(5000)
            })
        };

        if(url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {

            var tumb = message.guild.iconURL
            if(!tumb) tumb = message.client.user.displayAvatarURL

            var Ma = await message.channel.send({
                embed: {
                    description: `<:youtube:514806812143517725> - ${message.author}, I'm connecting to **YouTube**`,
                    color: 0x36393e,
                    }
                })

                setTimeout(async () => {

                    var Mb = await Ma.edit({
                             embed: {
                                description: `<a:spinner:540302486376808479> - ${message.author}, Searching for the desired **Playlist**`,
                                 color: 0x36393e,
                                 }
                             })
                            
                          return OKp(Mb)   
                     }, 1200)

async function OKp(Mb) {

        setTimeout(() => {

            youtube.getPlaylist(url).then(async playlist => {
                playlist.getVideos().then(async videos => {
                    videos.forEach(async video2 => {

            fetchVideoInfo(video2.id, async function (err ,video3) {

            await handleVideo(video3, message, voiceChannel, true);

                })
            })

            message.channel.startTyping()
            var embed = new Discord.RichEmbed()

                    .setTitle('**Playlist** Added Queue:')
                        .setThumbnail(tumb)
                            .setFooter(`${message.author.username}`, message.client.user.displayAvatarURL)
                                .setTimestamp()
                                    .setColor('#36393e')
                                        .setDescription(`**•** Name: **${playlist.title}**\n**•** Musics: **${videos.length}**\n**•** Author: ${message.author}`)
                                        
            Mb.edit(embed)
            message.channel.stopTyping()

                })
            }).catch(() => {
                
            Mb.edit({
                    embed: {
                        description: `<:error:538505640889417752> - ${message.author}, this **Playlist** no \`exists\` **or is** \`private\`**`,
                        color: 0x36393e,
                            }
                        })    
                    })
                }, 1500)
            }
            
		} else if(args.length === 1 && args[0].startsWith('https://www.youtube.com/watch?v=')) {

        try {
   
            await youtube.getVideo(url).then(vid => {
            
            fetchVideoInfo(vid.id, async function (err ,vide) {

            return handleVideo(vide, message, voiceChannel)
                })
            })

        } catch (e) {

            message.channel.send({
                embed: {
                    description: `<:error:538505640889417752> - ${message.author},  this link does´t \`match\` **there is no video from** \`YouTube\`**`,
                    color: 0x36393e,
                    }
                })
            }

        } else {

                    var Ma = await message.channel.send({
                        embed: {
                            description: `<:youtube:514806812143517725> - ${message.author}, I'm connecting to **YouTube**`,
                            color: 0x36393e,
                            }
                        })

                        setTimeout(async () => {

                            var Mb = await Ma.edit({
                                     embed: {
                                        description: `<a:spinner:540302486376808479> - ${message.author}, I'm getting **Results**`,
                                         color: 0x36393e,
                                         }
                                     })
                                    
                                  return OK(Mb)   
                             }, 1200)

async function OK(Mb) {
            
                    var videos = await youtube.searchVideos(searchString, 5)
                    if(!videos.length > 0 || videos.length < 5) {
                    
                    setTimeout(async () => { 

                            Mb.edit({
                                embed: {
                                    description: `<:error:538505640889417752> - ${message.author}, can´t get **results**`,
                                    color: 0x36393e,
                                }
                            })
                        }, 1200)
                    } else {

                    var tumb = message.guild.iconURL
                    if(!tumb) tumb = message.client.user.displayAvatarURL

                    var index = 0
                    var razao = args.slice(0).join(' ')
                    //if(!razao) razao = "Sem Pesquisa"

                    setTimeout(async () => {

                    var embedM = new Discord.RichEmbed()

                    .setTitle(`<:lens:538527577674088468> ▸ Search results: **${razao}**`)
                        .setTimestamp()
                            .setColor('#36393e')
                                .setFooter(`20 Seconds To Selection`, message.client.user.displayAvatarURL)
                                .setDescription(`ㅤㅤㅤㅤㅤㅤㅤㅤㅤ\n${videos.map(video2 => `**[\`${++index}\`] -** ${video2.title}`).join('\n\n')}**\n\n➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖\n\nINSERT A VALUE FROM 1 TO 5\nDESCEND CANCEL? ENTER "cancel"**`)
                                        .setThumbnail(tumb)

                    Mb.edit(embedM).then(async msg => {

                    message.channel.awaitMessages(message1 => message.content, {
                        max: 1,
                        time: 20000,
                        errors: ['time']
                    }).then(async coletado => {

                    var mes = coletado.first().content === 'cancel' || coletado.first().content > 0 && coletado.first().content < 6
                    
                    if(coletado.first().content === 'cancel') {
                    
                        cancelou();

                    } else if(coletado.first().content > 0 && coletado.first().content < 6) {
                        
                        var num = parseInt(coletado.first().content);
                        var video = await youtube.getVideoByID(videos[num - 1].id); 

                        //console.log(video)
                        
                        fetchVideoInfo(video.id, async function (err ,vido) {

                        await handleVideo(vido, message, voiceChannel);
                        
                    })
                } else if(!mes) {
                        
                        message.channel.send({
                            embed: {
                                description: `<:error:538505640889417752> - ${message.author}, answer **__ invalid __**, try **again**`,
                                color: 0x36393e,
                            
                            }
                        }).then(msg => {
    
                            msg.delete(5000)
                    })
                }

                    msg.delete()

                }).catch(err => {
                    
                    msg.delete()
                    message.channel.send({
                        embed: {
                            description: `<:error:538505640889417752> - ${message.author}, time **expired*, try **again**`,
                            color: 0x36393e,
                        
                            }
                        })
                    })
                })
            }, 1500)
        }
    }
};

async function cancelou() {

var a = await message.channel.send({
    embed: {
        description: `<a:spinner:540302486376808479> - ${message.author}, canceling the **Search**`,
        color: 0x36393e,
    
    }
})

setTimeout(() => {

a.edit({
    embed: {
        description: `<:okay:538503952900161538> - ${message.author}, search canceled with **success**`,
        color: 0x36393e,
            }
        })
    }, 2000)
};

async function handleVideo(video, message, voiceChannel, playlist = false) {
    
var serverQueue = lista.queue.get(message.guild.id);

    var song = {

        id: video.videoId,
        title: video.title,
        url:  video.url,
        inserido: message.author.tag,
        duracao: null,
        thumb: video.thumbnailUrl,
        duracaoT: video.duration,
        numero: 1
    };

    if(!serverQueue) {

        var queueConstruct = {

            canalTexto: message.channel,
			canalVoz: voiceChannel,
			volume: 5,
            radio: false,
            soms: [],
            music: true,
            atual: 0,
            inicio: new Date(),
            restart: false,
            restarM: [],
            connection: null,
            voz: true,
            join: false,
            duraTotal: null
        };

        lista.queue.set(message.guild.id, queueConstruct);
        queueConstruct.soms.push(song);
        queueConstruct.duraTotal = song.duracaoT
       
    try {

        var connection = await message.member.voiceChannel.join();
        queueConstruct.connection = connection;
        play(message.guild, queueConstruct.soms[0]);
        
    } catch (err) {
        
        console.log(`I could not get into the voice channel Guild - nome:(${message.guild.name}) id:(${message.guild.id}), erro: ${err}`); 

		message.channel.send({
                embed: {
                    description: `<:error:538505640889417752> - ${message.author}, I could not get into the voice channel`,
                    color: 0x36393e,
            }
        })

        lista.queue.delete(message.guild.id); 
    }

} else {

            let tempo = Math.floor(song.duracaoT)
            let horas;
            let minutos;
            let minutos2;
            let segundos;
    
            if (tempo >= 3600) {
    
                horas = Math.floor(tempo / 60 / 60)
                minutos = Math.floor(tempo / 60)
                minutos2 = Math.floor(tempo / 60 - horas * 60)
                segundos = Math.floor(tempo - (minutos * 60))
    
            } else {
    
                horas = 0
                minutos = Math.floor(tempo / 60)
                minutos2 = Math.floor(tempo / 60)
                segundos = Math.floor(tempo - (minutos * 60))
            }

        song.duracao = `${(horas < 10 ? '0' + horas : horas) + ':' + (minutos2 < 10 ? '0' + minutos2 : minutos2) + ':' + (segundos < 10 ? '0' + segundos : segundos)}`,
        song.numero = serverQueue.soms.length+1
        serverQueue.duraTotal = serverQueue.duraTotal+song.duracaoT

        serverQueue.soms.push(song)

        if(playlist) return undefined;

        var embed = new Discord.RichEmbed()

            .addField('<a:music:512400492836683791> ▸ Added to Queue:', `**${song.title}**`, false)
                .addField(`<:time:537051227037368330> ▸ Duration:`, `**\`[${song.duracao}]\`**`, true)
                    .addField('🌀 ▸ Posted By:', `**\`${song.inserido}\`**`, true)
                        .setFooter(`${message.author.username}`, message.client.user.displayAvatarURL)
                            .setTimestamp()
                                .setColor('#36393e')
                                    .setThumbnail(song.thumb)

        message.channel.send(embed).then(msg => msg.delete(15000))
    }

    return undefined;
};

async function play(g, s) {

var serverQueue = lista.queue.get(g.id);

if(!s) {

    serverQueue.connection.disconnect();
    lista.queue.delete(g.id);

    return message.channel.send({
        embed: {
            description: `The playlist is finished, use \`${prefixo}play\` **to play** again`,
            color: 0x36393e,
        }
    })
} else {

//console.log(s)

const dispatcher = serverQueue.connection.playStream(ytdl(s.url)).on('end', reason => {

console.log(`Música - Skip/Stop/Restart - Na guild: id(${message.guild.id}) - nome(${message.guild.name}) Razão: ${reason}`)
    
if(reason === 'Sem músicas em Fila')

console.log(`Música - Skip/Stop/Restart - Na guild: id(${message.guild.id}) - nome(${message.guild.name}) Razão: ${reason}`)

serverQueue.inicio = new Date();

if(serverQueue.restart === true) {

    play(g, serverQueue.soms[0])
} else {

serverQueue.soms.shift();
serverQueue.duraTotal = serverQueue.duraTotal-serverQueue.restarM[0].duracaoT
play(g, serverQueue.soms[0])

        serverQueue.soms.map(music => {
        music.numero = music.numero-1
        })
    }

}).on('error', error => {

    console.error(error)

});
 
dispatcher.setVolumeLogarithmic(serverQueue.volume / 10);

        let tempo = Math.floor(s.duracaoT)
        let horas;
        let minutos;
        let minutos2;
        let segundos;

        if (tempo >= 3600) {

            horas = Math.floor(tempo / 60 / 60)
            minutos = Math.floor(tempo / 60)
            minutos2 = Math.floor(tempo / 60 - horas * 60)
            segundos = Math.floor(tempo - (minutos * 60))

        } else {

            horas = 0
            minutos = Math.floor(tempo / 60)
            minutos2 = Math.floor(tempo / 60)
            segundos = Math.floor(tempo - (minutos * 60))
        }

            s.duracao = `${(horas < 10 ? '0' + horas : horas) + ':' + (minutos2 < 10 ? '0' + minutos2 : minutos2) + ':' + (segundos < 10 ? '0' + segundos : segundos)}`
            serverQueue.restarM = []
            serverQueue.restarM.push(s)

    var embedH = new Discord.RichEmbed()
        .addField('<a:music:512400492836683791> ▸ Getting Started:', `**${s.title}**`, false)
            .addField('<:time:537051227037368330> ▸ Duration:', `**\`[${s.duracao}]\`**`, true)
                .addField('🌀 ▸ Inserted By:', `**\`${s.inserido}\`**`, true)
                    .setFooter(`Scott - 2019`, message.client.user.displayAvatarURL)
                        .setColor('#36393e')
                            .setThumbnail(s.thumb)
        
    serverQueue.canalTexto.send(embedH).then(msg => msg.delete(15000))

        }
    }
}

exports.help = {
    name: "play",
    aliases: ["play", "touch"],
    diretorio: "Song"
  }
