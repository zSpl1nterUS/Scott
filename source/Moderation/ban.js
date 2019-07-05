const database = require("../../configuração/database.js"); 
const Discord = require('discord.js');

exports.run =  async (xerphos, message, args) => {

console.log(`Comando Ban ${message.guild.name} ${message.guild.id} ${message.author.tag}`)
    
let mat = message.author.tag
    
database.Users.findOne({_id: message.author.id}, async function (erro, usuario) {
  
    if(usuario.owner || message.member.hasPermission("ADMINISTRATOR")) {

    if(!message.guild.me.hasPermission("ADMINISTRATOR")) return message.channel.send({embed: {
        description: `**${mat}**, I am not allowed to ban members`,
        color:  0x36393e
    }})
    let member =  message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    let reason = args.slice(1).join(" ")
    if(!reason) {
        reason = "Uninformed"
    }
    if(!member) return message.channel.send({embed: {
        description: `**${mat}**, Mention Member`,
        color:  0x36393e
    }})
    if(member.id === message.author.id) return message.channel.send({embed: {
        description: `**${mat}**, You can not banish yourself.`,
        color:  0x36393e
    }})
    if(!member.bannable) return message.channel.send({
        embed: {
            description: `**${mat}**, I could not ban the member: **${member.user.tag}**`,
            color:  0x36393e
        }
    })
    member.ban(`${mat} | ${reason}`).then(() => {
        message.channel.send({embed: {
            title: `**User Banished Successfully**`,
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
            });
        } else {
            var yEmbed = new Discord.RichEmbed()
    
            .setColor("#36393e")
            .setDescription(`<:error:538505640889417752> - ${message.author}, you do not have **permission** to run this **command**`)
            message.channel.send(yEmbed)
        }
    })
}

exports.help = {
    name: "ban",
    aliases: ["ban"],
    diretorio: "Moderation"
  }