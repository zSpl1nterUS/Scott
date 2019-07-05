const database = require("../../configuração/database.js"); 
const Discord = require('discord.js');

exports.run = async (scott, message, args) => {

console.log(`Command bot-manu ${message.guild.name} ${message.guild.id} ${message.author.tag}`)

database.Users.findOne({_id: message.author.id}, async function (erro, usuario) {
    if(usuario) {
        if(usuario.owner) {
            
database.BotConfig.findOne({_id: scott.user.id}, async function (erro, bot) {

//console.log(bot)

        if(bot) {
            if(bot.botmanu) {

            bot.botmanu = false
            bot.save()
            var embeda = new Discord.RichEmbed()

    .setColor("#36393e")
      .setDescription(`<:okay:538503952900161538> - ${message.author}, I was successfully removed from **Maintenance!**`)
  
  message.channel.send(embeda)
          } else {
            bot.botmanu = true
            bot.save()
            var embed = new Discord.RichEmbed()

    .setColor("#36393e")
      .setDescription(`<:okay:538503952900161538> - ${message.author}, I was placed in **Maintenance** with success!`)
  
  message.channel.send(embed)
          }
                    } else {

                        var saveG = new database.BotConfig({_id: scott.user.id})
                        saveG.save()
                    }
                
        })
    } else {
        var yEmbed = new Discord.RichEmbed()

.setColor("#36393e")
.setDescription(`<:error:538505640889417752> - ${message.author}, you don´t have **permission** to execute this **command**`)
message.channel.send(yEmbed)
            }
        }
    })
}