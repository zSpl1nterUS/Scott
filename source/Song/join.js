exports.run =  async (xerphos, message, args) => {

console.log(`Comando join ${message.guild.name} ${message.guild.id} ${message.author.tag}`)

try {

var voicechannel = message.member.voiceChannel;

if(!voicechannel) return message.channel.send({
        embed: {
            title: `<:error:538505640889417752> - Connect to a voice channel`,
            color: 0x36393e,
        
        }
    })

return new Promise((resolve, reject) => {

var permissions = voicechannel.permissionsFor(message.client.user);

if(!permissions.has('CONNECT')) {
			return message.channel.send({
                embed: {
                    title: `<:error:538505640889417752> - Not allowed to connect to **voice** channel`,
                    color: 0x36393e,
                
                }
            }).then(msg => {
                msg.delete(5000)
            })
        }

if(voicechannel && voicechannel.type == 'voice') {

    voicechannel.join().then(connection => {
        xerphos.speakers = [];
        
        resolve(connection);

        message.channel.send({
            embed: {
                title: `<:okay:538503952900161538> - Connected to voice channel**\`${voicechannel.name}\`**!`,
                color: 0x36393e,
            
            }
        })

    }).catch(err => reject(err));

} else {

    message.channel.send({
        embed: {
            title: `<:error:538505640889417752> - Connect to a voice channel`,
            color: 0x36393e,
        
                }
            })
        }
    })
} catch (e) {

    console.log(`Erro command de Join - guild: id:(${message.guild.id}) - name:(${message.guild.name}) Erro: ${e}`)
    }
}

exports.help = {
    name: "join",
    aliases: ["join"],
    diretorio: "Song"
  }