const database = require("../../configuração/database.js");
const Discord = require('discord.js');

exports.run = async (xerphos, message, args) => {

  let razaou = args.slice(0).join(' ')

  console.log(`Command b-ban ${message.guild.name} ${message.guild.id} ${message.author.tag}`)

  database.Users.findOne({ _id: message.author.id }, function (erro, usuario) {

    if (usuario) {
      if (usuario.owner) {
        if (!razaou.length < 1) {
          let banir = message.mentions.users.first() ? message.mentions.users.first() : xerphos.users.get(args[0])
          if (banir) {
            if (banir.id === message.author.id) {
              message.channel.send(`<:error:538505640889417752> - ${message.author} **You cant banish yourself**`)
            } else {
              database.Users.findOne({ _id: banir.id }, function (arro, alvo) {
                if (alvo) {
                  if (alvo.ban) {
                    alvo.ban = false
                    alvo.save()
                    message.channel.send(`**<:okay:538503952900161538> - ${message.author}, ${banir.tag}** was **unsuccessful** with **success**`)
                  } else {
                    alvo.ban = true
                    alvo.save()
                    message.channel.send(`**<:okay:538503952900161538> - ${message.author}, ${banir.tag}** was **banned** with **success**`)
                  }

                } else {
                  message.channel.send(`<:error:538505640889417752> - ${message.author}, the **user entered** is not saved in my **\`DataBase\`**`)
                }
              })
            }
          } else {
            message.channel.send(`<:error:538505640889417752> - ${message.author}, **user * not **\`found\`**`)
          }
        } else {
          message.channel.send(`<:error:538505640889417752> - ${message.author}, **\`mention\`** or enter **username **`)
        }
      } else {
        var yEmbed = new Discord.RichEmbed()

          .setColor("#36393e")
          .setDescription(`<:error:538505640889417752> - ${message.author}, you don´t have **permission** to execute this **command**`)
        message.channel.send(yEmbed)
      }
    } else {
      console.log(`Command b-ban, confused`)
    }
  })

}

exports.help = {
  name: "b-ban",
  aliases: ["b-ban", "botban"],
  diretorio: "Owner"
}