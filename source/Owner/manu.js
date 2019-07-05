const database = require("../../configuração/database.js"); 
const Discord = require("discord.js");

exports.run = (scott, message, args) => {

console.log(`comando Manu ${message.guild.name} ${message.guild.id} ${message.author.tag}`)

database.Users.findOne({_id: message.author.id}, function (erro, usuario) {
if(usuario) {
      if(usuario.owner) {

  var razaou = args.slice(0).join(' ')
  var re = args.slice(1).join(' ')

        if (!razaou.length < 1) {

database.Comandos.findOne({_id: args[0].toLowerCase()}, function (cerro, comando) {

            if (comando) {
              if (comando.manutenção) {
                comando.manutenção = false
                comando.reason = 'Not specified'
                comando.save()
                message.channel.send(`<:okay:538503952900161538> - ${message.author}, the command \`${args}\` has been removed from **Maintenance**`)

              } else {

                let reason;
                if(!re) reason = 'Not specified';
                if(re) reason = re;

                comando.manutenção = true
                comando.reason = reason
                comando.save()
                message.channel.send(`<:okay:538503952900161538> - ${message.author},the **command** \`${args[0]}\` has been placed in **Maintenance**.\n**Reason:** \`${reason}\``)
              }
            } else {
              message.channel.send(`<:error:538505640889417752> - ${message.author}, the command \`${razaou}\` wasn´t **found**`)
            }
          })
         } else {
          message.channel.send(`<:error:538505640889417752> - ${message.author}, say which \`command\` you want to put in **Maintenance**`)
        }
} else {
  var yEmbed = new Discord.RichEmbed()
    
        .setColor("#36393e")
        .setDescription(`<:error:538505640889417752> - ${message.author}, you don´t have **permission** to run this **command**`)
        message.channel.send(yEmbed)
}
} else {
  console.log('Command manu - confused')
    }
  })
}

exports.help = {
  name: "manu",
  aliases: ["manu"],
  diretorio: "Owner"
}