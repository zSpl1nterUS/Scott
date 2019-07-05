const database = require("../../configuração/database.js"); 

exports.run =  async (xerphos, message, args, prefixo) => {

console.log(`Command mute ${message.guild.name} ${message.guild.id} ${message.author.tag}`)

let mat = message.author.tag

database.Users.findOne({_id: message.author.id}, async function (erro, usuario) {
  
  if(usuario.owner || message.member.hasPermission("ADMINISTRATOR")) {

  if (!args[0]) return message.channel.send({embed: {
    description: `**${mat},** Mention member, **USE:** \`${prefixo}mute\` \`<member>\` \`<reason>\``,
    color:  0x36393e
}})

  var user = message.mentions.members.first()
  var razao = args.slice(1).join(' ') 
  if (!razao) razao = "Without a reason"
  var muteRole = message.guild.roles.find(x=> x.name == "Muted")
    

  if(!muteRole) return message.channel.send({embed: {
    description: `**${mat},**I did not find the job **\`Muted\`**`,
    color:  0x36393e
}})

if(user.roles.find(th=> th.name == "Muted")){

    return message.channel.send({embed: {
        description: `**${mat},** This member is already *8\`muted.\`**`,
        color:  0x36393e
    }})   
}

  try {
    user.addRole(muteRole)
    return message.channel.send({embed: {
        description: `${user}, was mutated by: **${mat}**\nReason: **${razao}**`,
        color:  0x36393e
    }})

    
  } catch (err) { 
    message.channel.send({embed: {
        description: `**${mat},**, I do not have the necessary permissions to mutate a member!`,
        color:  0x36393e
  }})
};
  
} else {

var yEmbed = new Discord.RichEmbed()
    
.setColor("#36393e")
.setDescription(`<:error:538505640889417752> - ${message.author}, you do not have **permission** to run this **command**`)
message.channel.send(yEmbed)
    }
  })
}
exports.help = {
  name: "mute",
  aliases: ["mute"],
  diretorio: "Moderation"
}