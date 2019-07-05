const Discord = require("discord.js");

module.exports.run = async (scott, message, args,) => {

    console.log(`Command fagot ${message.guild.name} ${message.guild.id} ${message.author.tag}`)

    if(!args[0]){ message.channel.send(`<:error:538505640889417752> - ${message.author}, You must mention someone first`)

    let volte = args.slice[0]
    if(!volte) return;
    }

    let user1 = message.mentions.users.first() || message.author;
    let gay = Math.round(Math.random() * 100);
    
    let gayembed = new Discord.RichEmbed()
    
        .setColor("#f442d4")
        .setDescription(`<:flag:511299147903664128> - I think that the **${user1.tag}** is \`${gay}%\` fagot!`);
    return message.channel.send(gayembed);
}; 

exports.help = {
    name: "fagot",
    aliases: ["fagot", "lgbt", "fired"],
    diretorio: "Fun"
  }
