const database = require("../../configuração/database.js"); 
const Discord = require("discord.js");

exports.run = async (scott, message, args, prefixo) => {
  
  console.log(`Comando welcome ${message.guild.name} ${message.guild.id} ${message.author.tag}`)
    
  let razaou = args.slice(0).join(' ')
  let razaod = args.slice(1).join(' ')
  
database.Users.findOne({_id: message.author.id}, function (erro, usuario) {
  
    if(usuario.owner || message.member.hasPermission("ADMINISTRATOR")) {

database.Guilds.findOne({_id: message.guild.id}, function (servro, servidor) {
            
  let server = servidor.welcome
  let = server;
  
  if(server === true) server = "<:on:537007283004243978> Activated";
  if(server === false) server = "<:off:537007288804704267> Disabled";
              
                if(servidor) {
                if(!razaou.length < 1) {

                  if(args[0] == "msg"){ 
                    if(!razaod.length < 1) {
                      servidor.welcome = true
                      servidor.welcomemsg = args.slice(1).join(' ')
                      servidor.save()
                      let sEmbed = new Discord.RichEmbed()

                  .setColor("36393e")
                     .setFooter(`Scott - 2019`, scott.user.displayAvatarURL)
                        .setTitle("<:on:537007283004243978> **Welcome was set**")
                          .setDescription(`**Set to:**\`\`\`${args.slice(1).join(' ')}\`\`\``)
                  
                 message.channel.send(sEmbed)

                    } else {
                      message.channel.send('<:error:538505640889417752> - **Please quote the input message you wish to set**')
                    }
                  } else if(args[0] == "remove"){ 
                    if(servidor.welcome) {
                      servidor.welcome = false
                      servidor.welcomechannel = 'None'
                      servidor.welcomemsg = 'None'
                      servidor.save()
                      message.channel.send(`<:off:537007288804704267> - **Welcome Disabled in this server**`)
                    } else {
                      message.channel.send('**<:error:538505640889417752> - There is no welcome enabled on this server**')
                    }
                  } else if(args[0] == "help") { 

                    message.channel.send({
                      'embed': {
                        'title': '• Welcome',
                        'description': `**Message Set: ** ${server.welcomemsg}\n\n**How to use:** \`\`\`\n{member} mentions user\n{name} user name \n{users} quantity of users entering \n{guild} server name\`\`\`\nStatus: ${server}\nChannel: <#${servidor.welcomechannel}>`,
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
                    
                  } else if(args[0] == "channel"){
                  
                  let guild  = scott.guilds.get(message.guild.id)
                  let canal = guild.channels.get(args[1]) || guild.channels.find(a=> a.name == args[1]) || message.mentions.channels.first()
                  
                  if(!args[1]){
                    return message.channel.send('<:error:538505640889417752> - **Invalid argument**')
                   }

                  if(!canal){
                    return message.channel.send('<:error:538505640889417752> - **Invalid Channel**')
                  }
                  servidor.welcomechannel = canal.id
                  servidor.save() 
                  message.channel.send(`<:okay:538503952900161538> - **Channel Defined:** ${canal}`)
                  
                  } else {
                    message.channel.send('<:error:538505640889417752> - **Invalid argument**')
                  }

                } else {
  
                  message.channel.send({
                    'embed': {
                      'title': '• Welcome',
                      'description': `Status: ${server}\n\`\`\`\n${prefixo}welcome msg <input message>\n${prefixo}welcome remove\n${prefixo}welcome help\n${prefixo}welcome channel <channel>\`\`\``,
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
                var save = new database.Guilds({_id: message.guild.id})
                save.save()
        }
      }).catch(e => {
        console.log('Mongoose Duplicated')
      })
      
    } else {
      var yEmbed = new Discord.RichEmbed()
    
      .setColor("#36393e")
      .setDescription(`<:error:538505640889417752> - ${message.author}, you don´t have **permission** to execute this **command**`)
      message.channel.send(yEmbed)
    }
  }).catch(e => {
    console.log('Mongoose Duplicated')
  })
}
   
exports.help = {
  name: "welcome",
  aliases: ["welcome"],
  diretorio: "configuração"
}