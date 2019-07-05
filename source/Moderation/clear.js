const Discord = require('discord.js');


exports.run = async (scott, message, args, prefixo, language) => {

    console.log(`Command clear ${message.guild.name} ${message.guild.id} ${message.author.tag}`)

    if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(new Discord.RichEmbed()
    .setColor("#36393e")
    .setDescription(`<:error:538505640889417752> - ${message.author}, ${language.clear.embed.a}`))

        const deleteCount = parseInt(args[0], 10);
        if(!deleteCount || deleteCount < 2 || deleteCount > 100)
        return message.channel.send(new Discord.RichEmbed()
        .setColor("#36393e")
        .setTimestamp()
        .setDescription(`<:error:538505640889417752> - ${message.author}, ${language.clear.embed.b}`))
        
        const fetched = await message.channel.fetchMessages({limit: deleteCount});
        message.channel.bulkDelete(fetched)
        .catch(error => message.channel.send(new Discord.RichEmbed()
        .setColor("#36393e")
        .setTimestamp()
        .setDescription(`<:error:538505640889417752> - ${message.author}, ${language.clear.embed.c}`)))
      
        return message.channel.send(new Discord.RichEmbed()
        .setColor("#36393e")
        .setTitle(`<:information:537072191292964865> - ${language.clear.embed.d}`)
        .addField(`<:exa:541055403450957824> ▸ ${language.clear.embed.e}`,`\`${args[0]}\``)
        .addField(`<:alter:541054054474842113> ▸ ${language.clear.embed.f}`, message.author)
        .setFooter("Scott - 2019", message.client.displayAvatarURL))
    }

    exports.help = {
        name: "clear",
        aliases: ["clear"],
        diretorio: "Moderation"
      }