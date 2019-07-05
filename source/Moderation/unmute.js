const database = require("../../configuração/database.js"); 

exports.run =  async (dean, message, args, prefixo) => {

console.log(`comando unmute ${message.guild.name} ${message.guild.id} ${message.author.tag}`)

let mat = message.author.tag

database.Users.findOne({_id: message.author.id}, async function (erro, usuario) {
  
if(usuario.owner || message.member.hasPermission("ADMINISTRATOR")) {

if (!args[0]) { 
   
    message.channel.send({embed: {
                    description: `**${mat},** Mention member, **USE:** \`${prefixo}unmute\` \`<member>\``,
                    color:  0x36393e
        }
    })
}
    let muteRole = message.guild.roles.find(x=> x.name == "Muted")
    
    let member = message.mentions.members.first();
    let memberA = message.mentions.members.first();
    
    let memberRole = memberA.roles.find(xa=> xa.name == "Muted")
  

if(!memberRole){
    
        return message.channel.send({embed: {
        description: `**${mat},** This member is not **mutated**`,
        color:  0x36393e
    }})
}


if(!member) return message.channel.send({embed: {
        description: `**${mat},** Mention who you want to dismantle`,
        color:  0x36393e
    }})

try {
     member.removeRole(muteRole);
     message.channel.send({embed: {
        description: `${member}, It was demoted by: **${message.author.tag}**`,
        color:  0x36393e
    }})

} catch (err) { 
        message.channel.send({embed: {
            description: `**${mat},** I do not have the necessary permissions to dismember a member!`,
            color:  0x36393e
        }})
    }
} else {
    var yEmbed = new Discord.RichEmbed()
    
    .setColor("#36393e")
    .setDescription(`<:error:538505640889417752> - ${message.author}, you do not have **permission** to run this **command**`)
    message.channel.send(yEmbed)
        }
    })
}
