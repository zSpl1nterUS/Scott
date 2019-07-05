const database = require("../../configuração/database.js");
const Discord = require("discord.js"); 

exports.run = async (xerphos, message, args, prefixo) => {

console.log(`comando setdev ${message.guild.name} ${message.guild.id} ${message.author.tag}`)

let razaou = args.slice(0).join(' ')
let member = message.mentions.users.first() ? message.mentions.users.first() : xerphos.users.get(args[0])

database.Users.findOne({_id: message.author.id}, function (erro, usuario) {
 
  if(usuario.owner) {
    if(razaou.length < 1) {

           message.channel.send(`<:cancel:504782695667335178> - ${message.author}, **mencione** ou insira o **ID** do usuário`)
        } else {

database.Users.findOne({_id: member.id}, function (erro, usuario) {

            if (usuario) {
              if (usuario.owner) {
                usuario.owner = false
                usuario.save()
                message.channel.send(`<:Sucesso:561777651878985773> - ${message.author}, **${member.tag}** não é mais **\`Dono\`**`)
              } else {
                usuario.owner = true
                usuario.save()
                message.channel.send(`<:Sucesso:561777651878985773> - ${message.author}, **${member.tag}** agora é **\`Dono\`** e pode desfrutar dos meus comandos!`)
              }
            } else {
               message.channel.send(`<:error:538505640889417752> - ${message.author}, este **usuário** não está salvo em minha **\`Database\`**`)
            }
          })
        }
      
      } else {

        var yEmbed = new Discord.RichEmbed()
    
        .setColor("#36393e")
        .setDescription(`<:cancel:504782695667335178> | ${message.author}, você não tem **permissão** para executar esse **comando**`)
        message.channel.send(yEmbed)
    }
  })
}