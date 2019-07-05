const Discord = require("discord.js");
var randomPuppy = require("random-puppy")

exports.run = (scott, message, args) => {

    console.log(`Command meme ${message.guild.name} ${message.guild.id} ${message.author.tag}`)

randomPuppy('memes')
.then(url => {
    var memeEmbed = new Discord.RichEmbed()
        .setTimestamp()
        .setTitle('<:okay:538503952900161538> - Meme delivered:')
        .setFooter(`Asked By: ${message.author.username}`, message.author.avatarURL)
        .setTimestamp()
        .setImage(url)
        .setColor('36393e')
    message.channel.send(memeEmbed);
});
}

exports.help = {
    name: "meme",
    aliases: ["meme"],
    diretorio: "Fun"
  }