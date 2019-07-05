const database = require("../../configuração/database.js"); 
const Discord = require("discord.js");

exports.run = async (scott, message, args, prefixo) => {
  
console.log(`Command prefix ${message.guild.name} ${message.guild.id} ${message.author.tag}`)
  
database.Users.findOne({_id: message.author.id}, function (erro, usuario) {
  
  if(usuario.owner || message.member.hasPermission("ADMINISTRATOR")) {
    
database.Guilds.findOne({_id: message.guild.id}, function (servro, servidor) {
  
  let razaou = args.slice(0).join(' ')
  let razaod = args.slice(1).join(' ')

  if(razaod.length > 3) return message.channel.send({embed: {
    description: `**${message.author.tag}**, Sorry, the **maximum** of characters is **3**`,
    color: 0x36393e
}});
                    
          
          if(servidor) {
            if(!razaou.length < 1) {
              if(args[0] == "set") { 
                if(!razaod.length < 1) {

                  servidor.prefix = razaod
                  servidor.save()
                  
                  let sEmbed = new Discord.RichEmbed()

                  .setColor("36393e")
                     .setFooter(`Scott - 2019`, scott.user.displayAvatarURL)
                      .setThumbnail(`https://cdn.discordapp.com/attachments/516068030338301963/537011577933529089/settings_1.png`)
                        .setTitle("<:shuffle:537011775879774226> **Prefix Changed**")
                          .addField('New Prefix', `The server prefix has been changed to: **${args [1]}**`);
                  
                 message.channel.send(sEmbed);
                
                } else {
                  
                  message.channel.send({
                    embed: {
                        title: `<:error:538505640889417752> - ${message.author},say the **prefix** you want **to get**`,
                        color: 0x36393e,
                    }
                })
              }

              } else if(args[0] == "help"){ 

                let XEmbed = new Discord.RichEmbed()

                .setThumbnail(`https://cdn.discordapp.com/attachments/516068030338301963/537021818611957791/settings_3.png`)
                  .setTitle("<:wrench:537016278452404254> **Server Prefix**")
                    .setColor("#36393e")
                       .setFooter(`Scott - 2019`, scott.user.displayAvatarURL)
                        .addField('Prefix ', `The **prefix** of the server is: **${prefixo}**`)

                message.channel.send(XEmbed)

              }
            } else {

              let HEmbed = new Discord.RichEmbed()

              .setThumbnail(`https://cdn.discordapp.com/attachments/516068030338301963/537021818611957791/settings_3.png`)
                .setTitle("<:wrench:537016278452404254> **Setting the Prefix**")
                  .setColor("#36393e")
                     .setFooter(`Scott - 2019`, scott.user.displayAvatarURL)
                      .setDescription(`\`\`\`${prefixo}prefixo set <new>\n${prefixo}prefixo help\`\`\``)
                      
              message.channel.send(HEmbed)
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
    .setDescription(`<:error:538505640889417752> - ${message.author}, you don´t have **permission** to run this **command**.`)
    message.channel.send(yEmbed)
    }
  }).catch(e => {
    console.log('Mongoose Duplicated')
  })
}

exports.help = {
  name: "prefix",
  aliases: ["prefix", "prefixo"],
  diretorio: "configuração"
}