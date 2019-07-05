const Discord = require("discord.js")
const moment = require("moment")
require("moment-duration-format")

exports.run =  async (scott, message, args, prefixo, language) => {

console.log(`Command roleinfo ${message.guild.name} ${message.guild.id} ${message.author.tag}`)


        var rol = args.slice(0).join(' ')
        let role = message.guild.roles.find(x=> x.name == `${rol}`)  || message.mentions.roles.first()
        var hata = new Discord.RichEmbed()
        .setColor('#36393e')
        .setDescription(`<:error:538505640889417752> - ${message.author}, ${language.ri.embed.a}`);
        if(!role) return message.channel.send(hata);
        
        moment.locale(`${language.ri.embed.g}`) 
        var roleinfoEmbed = new Discord.RichEmbed()
        .setColor(role.hexColor)
        .setTitle(`<:information:537072191292964865> - ${language.ri.embed.j} **\`${role.name}\`**`)
        .addField(`**<:name:541104754672271361> **▸** ${language.ri.embed.b}**`, role.name, true)
        .addField(`**<:idd:541104701395959814> **▸** ID:**`, role.id, true)
        .addField(`**<:team:516020368729702431> **▸** ${language.ri.embed.c}**`, role.members.size, true)
        .addField(`**<:palette:541103742934843403> **▸** ${language.ri.embed.d}**`, role.hexColor, true)
        .addField(`**<:contact:541103563217174539> **▸** ${language.ri.embed.e}**`, role.mentionable ? `${language.ri.embed.h}` : `${language.ri.embed.i}`, true)
        .addField(`**<:calendar:516018350665629715> **▸** ${language.ri.embed.f}**`, moment(role.createdAt).format("LL"), true)
        .setFooter("Scott - 2019", scott.user.displayAvatarURL);
        message.channel.send(roleinfoEmbed)
 
};

exports.help = {
        name: "roleinfo",
        aliases: ["roleinfo", "role-info"],
        diretorio: "Information"
      }