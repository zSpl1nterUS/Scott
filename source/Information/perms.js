const Discord = require("discord.js");

module.exports.run = (scott, message, args, prefixo, language) => {

    console.log(`Command perms ${message.guild.name} ${message.guild.id} ${message.author.tag}`)

    let user = message.mentions.members.first() || message.member;
    let string = ''
    message.channel.permissionsFor(user).toArray().map(p => string += `${p.charAt(0) + p.toLowerCase().replace(/_/g, ' ').slice(1).replace(`vad`, `VAD`)}, `)
    let finalStr = string 
    let embed = new Discord.RichEmbed()
    .setDescription(`<:alter:541054054474842113> - ${language.perms.embed.a} **\`${message.author.username}\`**`)
    .addField(`<:exa:541055403450957824> - ${language.perms.embed.b}`, `\`\`\`js\n" ${finalStr}" \`\`\``)
    .setColor('#36393e')
    .setTimestamp(new Date())
    .setFooter(message.author.username, message.author.avatarURL)
    .setThumbnail(message.author.avatarURL)
    message.channel.send(embed);
    }

    exports.help = {
        name: "perms",
        aliases: ["perms", "permissions"],
        diretorio: "Information"
      }