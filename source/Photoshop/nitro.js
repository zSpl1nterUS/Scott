const Discord = require("discord.js");
var Jimp = require('jimp');

exports.run = async (scott, message, args) => {


    var user = message.mentions.users.first() || message.author;
    if (!message.guild) user = message.author;
   
    message.channel.send(new Discord.RichEmbed()
    .setDescription(`<a:spinner:540302486376808479>`)).then(m => m.delete(2000));

Jimp.read(user.avatarURL, (err, image) => {
    image.resize(315, 310)
    Jimp.read("https://api.eggsybot.xyz/api/cerceve?cerceve=nitro&url=https://api.eggsybot.xyz/pub/resources/frames/nitro.png", (err, avatar) => {
        avatar.resize(315, 320)
        image.composite(avatar, 0, 0).write(`./img/snip/${scott.user.id}-${user.id}.png`);
        setTimeout(function() {
            message.channel.send(new Discord.Attachment(`Sua ./img/snip/${scott.user.id}-${user.id}.png`));
        }, 1000);
    });

});
}

exports.help = {
    name: "nitro",
    aliases: ["nitro"],
    diretorio: "Photoshop"
  }