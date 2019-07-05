const database = require("../../configuração/database.js"); 

exports.run =  async (xerphos, message, args) => {

console.log(`Comando kick ${message.guild.name} ${message.guild.id} ${message.author.tag}`)
    
let mat = message.author.tag
    
database.Users.findOne({_id: message.author.id}, async function (erro, usuario) {
  
    if(usuario.owner || message.member.hasPermission("ADMINISTRATOR")) {

    if(!message.guild.me.hasPermission("ADMINISTRATOR")) return message.channel.send({embed: {
        description: `**${mat}**, I am not allowed to ban members`,
        color:  0x36393e
    }})

      let member = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
      
      if(!member)
      return message.channel.send({embed: {
        description: `**${mat}**, Mention a **valid** member of this server`,
        color:  0x36393e
    }})

      if(!member.kickable) 
      return message.channel.send({
        embed: {
            description: `I can not **expel** this user! He may have a higher position or I do not have expelling permissions`,
            color:  0x36393e
        }
    })
      
      let reason = args.slice(1).join(' ');
      if(!reason) reason = "Uninformed";
      
      await member.kick(reason)
        .catch(error => message.channel.send({
            embed: {
                description: `**${mat}**,I could not kick the member: **${member.user.tag}** by mistake: ${error}`,
                color:  0x36393e
            }
        })
        )
        
        message.channel.send({embed: {
            title: `**Successfully Kicked User**`,
            fields: [
                {
                    name: "Name:",
                    value: `${member.user.tag}`
                },
                {
                    name: "ID:",
                    value: `${member.user.id}`
                },
            {
                name: "Kick By:",
                value: `${mat}`
            },
            {
                name: "Reason:",
                value: `${reason}`
            }

            ],
            color: 0x36393e,
            thumbnail: {
                url: member.user.displayAvatarURL
                }
            }})
        } else {
            var yEmbed = new Discord.RichEmbed()

            .setColor("#36393e")
            .setDescription(`<:error:538505640889417752> - ${message.author}, you do not have **permission** to run this **command**`)
           message.channel.send(yEmbed)
        }
    })
}

exports.help = {
    name: "kick",
    aliases: ["kick"],
    diretorio: "Moderation"
  }