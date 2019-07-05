const Discord = require('discord.js');
var Jimp = require("jimp") 

exports.run = (client, message, args) => {

if(message.content.split(' ').slice(1).join(' ').length > 50) {
    message.channel.send(new Discord.RichEmbed()
    .setColor("#36393e")
    .setDescription('Você ultrapassou o limite de 50 caracteres.')).then(m => m.delete(5000))
} else {
        var authorMessage = message
        message.channel.send(new Discord.RichEmbed()
        .setColor("#36393e")
        .setDescription('Espere um poquin amigo :)')).then(m => m.delete(5000)).then(message => {
    Jimp.read(`https://i.imgur.com/bGcmaqO.png`, function (err, image) {
    if (err) message.channel.send(new Discord.RichEmbed()
    .setColor("#36393e")
    .setDescription('Ocorreu um erro ao criar a imagem.')).then(m => m.delete(5000))
    Jimp.loadFont(Jimp.FONT_SANS_12_BLACK).then(function (font) {
    image.print(font, 120, 40, authorMessage.content.split(' ').slice(1).join(' '))
    var aguardeMessage = message
    image.getBuffer(Jimp.MIME_PNG, (err, buffer) => {
    message.channel.sendFile(buffer, 'imagem.png')
    })
    })
    })})
    
}

}

exports.help = {
    name: ""
}