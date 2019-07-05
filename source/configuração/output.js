const database = require("../../configuração/database.js"); 
const Discord = require("discord.js");

exports.run = async (scott, message, args, prefixo) => {

console.log(`Comando output ${message.guild.name} ${message.guild.id} ${message.author.tag}`)
  
    let razaou = args.slice(0).join(' ')
    let razaod = args.slice(1).join(' ')
  
  
database.Users.findOne({_id: message.author.id}, function (erro, usuario) {
  
    if(usuario.owner || message.member.hasPermission("ADMINISTRATOR")) {

database.Guilds.findOne({_id: message.guild.id}, function (servro, servidor) {

    let server = servidor.byebye
    let = server;
    
    if(server === true) server = "<:on:537007283004243978> Actived";
    if(server === false) server = "<:off:537007288804704267> Disable";

            if(servidor) {
              if(!razaou.length < 1) {

                if(args[0] == "msg") {

                  if(!razaod.length < 1) {
                    servidor.byebye = true
                    servidor.byebyemsg = args.slice(1).join(' ')
                    servidor.save()
                    
                    let sEmbed = new Discord.RichEmbed()

                  .setColor("36393e")
                     .setFooter(`Scott - 2019`, scott.user.displayAvatarURL)
                      .setTitle("<:on:537007283004243978> **Set output**")
                        .setDescription(`**Setado To:**\`\`\`${args.slice(1).join(' ')}\`\`\``)
                  
                 message.channel.send(sEmbed)
                  } else {
                    message.channel.send('<:error:538505640889417752> - **Please quote the outgoing message you wish to set**')
                  }
                } else if(args[0] == "remove") {
                  if (servidor.byebye) {
                    servidor.byebye = false
                    servidor.byebyechannel = 'None'
                    servidor.byebyemsg = 'None'
                    servidor.save()
                    message.channel.send(`<:off:537007288804704267> - **Exit message disabled on this server**`)
                  } else {
                    message.channel.send('**<:error:538505640889417752> - There is no outgoing message set on this server**')
                  }
                } else if(args[0] == "help") {
                    
                    let mensagem = servidor.byebyemsg
                    let = mensagem;
                    
                    if(mensagem === 'None') mensagem = "None"; 
                    if(mensagem === 'None') mensagem = "None";


                  message.channel.send({
                    'embed': {
                      'title': '• Output:',
                      'description': `**Message set:** ${mensagem}\n\n**How to use:**\`\`\`\n{member} mentions user\n{name} user name\n{guild} server name\`\`\`\nStatus: ${server}\nChannel:<#${servidor.byebyechannel}>`,
                      'color': 0x36393e,
                      'timestamp': new Date(),
                      'footer': {
                        'icon_url': message.author.displayAvatarURL,
                        'text': message.author.username
                      },
                      'thumbnail': {
                        'url': scott.user.displayAvatarURL
                      }
                    }
                  })
                } else if(args[0] == "channel") {
                
                let guild  = scott.guilds.get(message.guild.id)
                let canal = guild.channels.get(args[1]) || guild.channels.find(a=> a.name == args[1]) || message.mentions.channels.first()
                  
                  if(!args[1]){
                    return message.channel.send('<:error:538505640889417752> - **Invalid argument **')
                   }

                  if(!canal){
                    return message.channel.send('<:error:538505640889417752> - **Invalid Channel**')
                  }
                  servidor.byebyechannel = canal.id
                  servidor.save() 
                  message.channel.send(`<:okay:538503952900161538> - **Channel Defined:** ${canal}`)

                 } else {
                  message.channel.send('<:error:538505640889417752> - **Invalid argument **')
                }
              } else {
                message.channel.send({
                  'embed': {
                    'title': '• Output:',
                    'description': `Status: ${server}\n\`\`\`\n${prefixo}output msg <outgoing message>\n${prefixo}output remove\n${prefixo}output help\n${prefixo}output channel \`\`\``,
                    'color': 0x36393e,
                    'timestamp': new Date(),
                    'footer': {
                      'icon_url': message.author.displayAvatarURL,
                      'text': message.author.username
                    },
                    'thumbnail': {
                      'url': scott.user.displayAvatarURL
                    }
                  }
                })
              }
            } else {
              message.channel.send('<:error:538505640889417752> - **An error occurred while executing this command.**')
          }
      }).catch(e => {
        console.log('Mongoose Duplicated')
      })

    } else {
      var yEmbed = new Discord.RichEmbed()
    
        .setColor("#36393e")
        .setDescription(`<:error:538505640889417752> - ${message.author}, you don't have **permission** to run this **command**`)
        message.channel.send(yEmbed)
    }
  }).catch(e => {
        console.log('Mongoose Duplicated')
      })
}

exports.help = {
  name: "output",
  aliases: ["output", "left"],
  diretorio: "configuração"
}