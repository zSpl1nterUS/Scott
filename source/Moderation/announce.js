const Discord = require("discord.js");
const database = require("../../configuração/database.js"); 

exports.run =  async (xerphos, message, args) => {

console.log(`Comando announce - ${message.guild.name} ${message.guild.id} ${message.author.tag}`)
    

database.Users.findOne({_id: message.author.id}, function (erro, usuario) {
  
    if(usuario.owner || message.member.hasPermission("ADMINISTRATOR")) {

if(!args[0]) {
    return message.channel.send({embed: {
        description: `<:error:538505640889417752> - **${message.author},** Sorry, you did not write anything`,
        color:  0x36393e
    }}).then(msg => msg.delete(5000));
}


var sayMessage = args.join(" ");

const embed = new Discord.RichEmbed()

.setTitle('**ADVERTISEMENT**')
.setDescription(sayMessage)
.setFooter(`Sent by: ${message.author.username}`, message.author.displayAvatarURL)
.setTimestamp(new Date())
.setColor('36393e')
.setThumbnail('http://icons.iconarchive.com/icons/graphicloads/100-flat/256/announcement-icon.png')

message.channel.send(embed).then(async msg => {
    
    await msg.react('📢')
    message.delete()

            })
        } else {
            var yEmbed = new Discord.RichEmbed()
    
            .setColor("#36393e")
            .setDescription(`<:error:538505640889417752> - ${message.author}, you do not have **permission** to run this **command**`)
            message.channel.send(yEmbed)
        }
    })
}

exports.help = {
    name: "announce",
    aliases: ["announce", "ads", "an"],
    diretorio: "Moderation"
  }