const lista = require('../../configuração/queue.js')

exports.run =  async (xerphos, message, args) => {

console.log(`Comando Restart ${message.guild.name} ${message.guild.id} ${message.author.tag}`)

try {

var serverQueue = lista.queue.get(message.guild.id)

if(!message.member.roles.some(r=>["DJ", "dj"].includes(r.name))) {
    
    message.channel.send({
      embed: {
          title: `<:error:538505640889417752> Only members with the position \`DJ\` can pause the song`,
          color: 0x36393e,
      
      }
  })
}

if(!message.member.voiceChannel) {
    
    message.channel.send({
    embed: {
        title: `<:error:538505640889417752> - You are not on a **voice** channel`,
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
            title: `<:error:538505640889417752> - I can´t restart a radio ** LIVE **`,
            color: 0x36393e,
        
                }
            }).then(msg => {
        msg.delete(5000)
    })

} else {

    serverQueue.restart = true
    serverQueue.connection.dispatcher.end('Restart');
    setTimeout(() => {
      serverQueue.restart = false
    }, 1500)
}

} catch (e) {

    console.log(`Erro comando de Restart - guild: id:(${message.guild.id}) - nome:(${message.guild.name}) Erro: ${e}`)
    }
}

exports.help = {
    name: "restart",
    aliases: ["restart"],
    diretorio: "Song"
  }