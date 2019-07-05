const database = require("../../configuração/database.js"); 
const Discord = require('discord.js')

exports.run = async (scott, message, args) => {

console.log(`comando manu-list ${message.guild.name} ${message.guild.id} ${message.author.tag}`)

database.Users.findOne({_id: message.author.id}, function (erro, usuario) {

    if (usuario) {
      if (usuario.owner) {
        
database.Comandos.find({}, function (cerro, doc) {

    if(doc) {
        
        var cmd = doc.filter(a => a.manutenção === true).map(a => `**• Command:** ${a._id}\n**• Reason:** ${a.reason}`).join('\n')
        if(!cmd) return message.reply(`<:error:538505640889417752> - None **\`command\`** in **Maintenance**`)

        var yEmbed = new Discord.RichEmbed()

.setTitle("<:maintenance:542162190908522520> - **Scott Commands in Maintenance:**", scott.user.displayAvatarURL)
.setColor("#36393e")
.setThumbnail(scott.user.displayAvatarURL)
.setFooter(`Scott - 2019`, scott.user.displayAvatarURL)
.setDescription(`${cmd}`)
return message.channel.send(yEmbed)
            
        } else {}
    })

    } else {

        var yEmbed = new Discord.RichEmbed()
    
        .setColor("#36393e")
        .setDescription(`<:error:538505640889417752> - ${message.author}, you don´t have **permission** to execute this **command**`)
        message.channel.send(yEmbed)
        }

    } else {
            console.log('Command MANU-LIST, confused')
        }
    })
}

exports.help = {
    name: "manu-list",
    aliases: ["manu-list"],
    diretorio: "Owner"
  }