const database = require("../../configuração/database.js");

exports.run = async (scott, message, args, prefixo, language) => {

  console.log(`Command autorole ${message.guild.name} ${message.guild.id} ${message.author.tag}`)

  let razaou = args.slice(0).join(' ')
  let razaod = args.slice(1).join(' ')

  database.Users.findOne({ _id: message.author.id }, function (erro, usuario) {

    if (usuario.owner || message.member.hasPermission("ADMINISTRATOR")) {

      database.Guilds.findOne({ _id: message.guild.id }, function (servro, servidor) {

        if (servidor) {
          if (!razaou.length < 1) {
            if (args[0] == "set") {

              if (!razaod.length < 1) {

                if (message.mentions.roles.size > 0) {
                  if (message.guild.roles.get(message.mentions.roles.first().id).position < message.guild.members.get(scott.user.id).highestRole.position) {
                    servidor.autorole = true
                    servidor.autoroleid = message.mentions.roles.first().id
                    servidor.save()
                    message.channel.send(`<:on:537007283004243978> - **${language.at.one}** ${message.mentions.roles.first().name}`)
                  } else {
                    message.channel.send(`<:error:538505640889417752> - **${language.at.two}**`)
                  }
                } else {
                  message.channel.send(`<:error:538505640889417752> - **${language.at.three}**`)
                }
              } else {
                message.channel.send(`<:error:538505640889417752> - ${message.author}, Use: **\`${prefixo}autorole set [role]\`**`)
              }
            } else if (args[0] == "remove") {
              if (servidor.autorole) {
                servidor.autorole = false
                servidor.autoroleid = 'None'
                servidor.save()
                message.channel.send(`<:off:537007288804704267> - ${message.author},**\`Autorole\`** disabled on this **server**`)
              } else {
                message.channel.send(`**<:error:538505640889417752> - ${message.author}, there is no **\`Autorole\`** set on this **server**`)
              }
            } else if (args[0] == "help") {
              message.channel.send({
                'embed': {
                  'title': '• Autorole:',
                  'description': `**Position set:** <@&${servidor.autoroleid}>`,
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
            } else {
              message.channel.send(`<:error:538505640889417752> - ${message.author}, argument **Invalid**`)
            }
          } else {
            message.channel.send({
              'embed': {
                'title': '• Autorole:',
                'description': `\`\`\`\n${prefixo}autorole set <position mention>\n${prefixo}autorole remove\n${prefixo}autorole help\`\`\``,
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
          var save = new database.Guilds({ _id: message.guild.id })
          save.save()
        }
      }).catch(e => {
        console.log('Mongoose Duplicated')
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
  name: "autorole",
  aliases: ["autorole"],
  diretorio: "configuração"
}