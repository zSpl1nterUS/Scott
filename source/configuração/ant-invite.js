const Discord = require("discord.js");
const database = require("../../configuração/database.js"); 

exports.run = async (scott, message, args, prefixo) => {

console.log(`Command ant-invite ${message.guild.name} ${message.guild.id} ${message.author.tag}`)

let razaou = args.slice(0).join(' ')
let razaod = args.slice(1).join(' ')

database.Users.findOne({_id: message.author.id}, function (erro, usuario) {
  
if(usuario.owner || message.member.hasPermission("ADMINISTRATOR")) {

database.Guilds.findOne({_id: message.guild.id}, function (servro, servidor) {

          if(servidor) {
            if(!razaou.length < 1) {
                /*if(args[0] == "canal") {
                    if(!razaod.length < 1) {

                    let guild  = scott.guilds.get(message.guild.id)
                    let canal = guild.channels.get(args[1]) || guild.channels.find(a=> a.name == args[1]) || message.mentions.channels.first()
                    
                      if(!canal){
                        return message.channel.send('<:error:538505640889417752> | **Invalid Channel**')
                      }
                      servidor.inviteChannels.push(canal.id)
                      servidor.ConfirmeInvite = true
                      servidor.save() 
                      message.channel.send(`<:shuffle:537011775879774226> | **Channel Defined:** ${canal}`)
    
                } else {
                  message.channel.send(`<:error:538505640889417752> | ${message.author}, Use: **\`${prefixo}ant-invite [channel] <channel>\`**`)
                }*/
              if(args[0] == "remove") { 
                if(servidor.antinvite) {
                  servidor.antinvite = false
                  servidor.inviteChannels = []
                  servidor.ConfirmeInvite = false
                  servidor.save()
                  message.channel.send(`<:off:537007288804704267>  - ${message.author}, **\`Ant-Invite\`** disabled on this **server**`)
                } else {
                  message.channel.send(`<:error:538505640889417752> - ${message.author}, There is no ** \`Ant-Invite\`** set on this **server**`)
                }
              } else if(args[0] == "help") {

    let server = servidor.ConfirmeInvite
    let = server;
    
    if(server === false) server = "None";
    if(server === true) server = `${servidor.inviteChannels.map(a=> `<#${a}>`).join(',')}`;

    let stat = servidor.antinvite
    let = stat;
    
    if(stat === true) stat = "<:on:537007283004243978> Activated";
    if(stat === false) stat = "<:off:537007288804704267> Disabled";
             
    //**<:okay:538503952900161538> Channels: ${server}
  message.channel.send({
                    'embed': {
                      'title': '• Ant-Invite',
                      'description': `\`${prefixo}Ant-invite [on]\` active Ant-Invite \n\`${prefixo}ant-invite [remove]\` remove Ant-Invite\nStatus: ${stat}`,
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

              } else if(args[0] == "on") {

                if(servidor.antinvite === true) return message.channel.send(`<:on:537007283004243978> - ${message.author}, **\`Ant-Invite\`** is already enabled on this **server**`);

                servidor.antinvite = true
                servidor.save()
                message.channel.send(`<:on:537007283004243978> - ${message.author}, **\`Ant-Invite\`** enabled on this **server**`)
                
              } else {
                message.channel.send(`<:error:538505640889417752> - ${message.author}, argument ** invalid **`)
              }
            } else {
                message.channel.send(`<:okay:538503952900161538> - ${message.author}, Use: **\`${prefixo}ant-invite [help]\`** to know my **parameters**`)
            }
        } else {
            var save = new database.Guilds({_id: message.guild.id})
            save.save()
            }
        })
      } else {
        var yEmbed = new Discord.RichEmbed()
    
        .setColor("#36393e")
        .setDescription(`<:error:538505640889417752> - ${message.author}, you don´t have **permission** to run this **command**`)
        message.channel.send(yEmbed)
    } 
  }).catch(e => {
    console.log('Mongoose Duplicated')
  })
}

  exports.help = {
    name: "ant-invite",
    aliases: ["ant-invite", "a-invite"],
    diretorio: "configuração"
  }