const Discord = require('discord.js')
var Jimp = require('jimp')

exports.run = (scott, message, args) => {

  console.log(`Command gray ${message.guild.name} ${message.guild.id} ${message.author.tag}`)

  var imagem

  if (message.attachments.first()) {
    if (message.attachments.first().filename.includes('.png') || message.attachments.first().filename.includes('.jpg') || message.attachments.first().filename.includes('.jpeg')) {
      imagem = message.attachments.first().url
      cinza()
    } else {
      nofile()
    }
  } else {
    nofile()
  }

  async function nofile () {
    if (!args.slice(0).join(' ').length < 1) {
      if (message.mentions.users.size > 0) {
        imagem = message.mentions.users.first().displayAvatarURL
        cinza()
      } else {
        if (scott.users.get(args[0])) {
          imagem = scott.users.get(args[0]).displayAvatarURL
          cinza()
        } else if (scott.users.find('tag', args.slice(0).join(' '))) {
          imagem = scott.users.find('tag', args.slice(0).join(' ')).displayAvatarURL
          cinza()
        } else if (message.guild.members.find('displayName', args.slice(0).join(' '))) {
          imagem = message.guild.members.find('displayName', args.slice(0).join(' ')).user.displayAvatarURL
          cinza()
        } else if (scott.users.find('username', args.slice(0).join(' '))) {
          imagem = scott.users.find('username', args.slice(0).join(' ')).user.displayAvatarURL
          cinza()
        } else {
          if (args[0].includes('.png') || args[0].includes('.jpg') || args[0].includes('.jpeg')) {
            imagem = args.slice(0).join(' ')
            cinza()
          } else {
            imagem = message.author.displayAvatarURL
            cinza()
          }
        }
      }
    } else {
      imagem = message.author.displayAvatarURL
      cinza()
    }
  }

  async function cinza () {
    Jimp.read(imagem, function (err, img) {
      img.greyscale()

      img.getBuffer(Jimp.MIME_PNG, (erri, buffer) => {
        message.channel.send(`<:okay:538503952900161538> - ${message.author} Your **picture** in **gray**:`, new Discord.Attachment(buffer, 'Grey.png')).catch(err => {
          message.channel.send(`<:error:538505640889417752> -  ${message.author} There was an **error** submitting your image`)
        })
        message.channel.stopTyping()
      })
    }).catch(err => {
      message.channel.send(`<:error:538505640889417752> - ${message.author} There was an **error** submitting your image.`)
    })
  }
}

exports.help = {
  name: "gray",
  aliases: ["gray"],
  diretorio: "Photoshop"
}