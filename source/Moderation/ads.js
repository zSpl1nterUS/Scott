const Discord = require('discord.js');

exports.run = async(scott, message, args) => {

    console.log(`Command test ${message.guild.name} ${message.guild.id} ${message.author.tag}`)

    if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(new Discord.RichEmbed()
    .setColor("#36393e")
    .setDescription(`<:error:538505640889417752> - ${message.author}, you do not have **permission** to run this **command!**`))  

    let announce = args.slice(1).join(' ');
    let channel = message.mentions.channels.first() || message.channel;

    if(!channel) {message.channel.send(`<:error:538505640889417752> - ${message.author}, You should mention the channel you want the ad to be sent to!`)

    let volte = args[0];
    if (!volte) return;
}

if(!announce) {message.channel.send(`<:error:538505640889417752> - ${message.author}, You must enter the message to be announced first!`)

   let volte1 = args.slice(1).join(' ');
   if (!volte1) return;
}

    if (channel.id === message.channel.id) {
        message.channel.send(`The channel where the ad will be sent is \`${channel.name}\`, do you want to continue?`).then(async msg => {
            await msg.react('✅').then(async () => {
                await msg.react('❌')
            })
            let collector = await msg.createReactionCollector((r, u) => r.emoji.name === "✅" || r.emoji.name === '❌' && u.id === message.author.id, { time: 120000, errors: ['time'] })
            collector.on('collect', async react => {
                if (react.emoji.name === '✅') {
                    let announce1 = new Discord.RichEmbed()
                    .setDescription(announce)
                    .setColor("#36393e")
                    .setTitle('**ADVERTISEMENT**')
                    .setThumbnail('http://icons.iconarchive.com/icons/graphicloads/100-flat/256/announcement-icon.png')
                    .setFooter(`Announced By: ${message.author.username}`, message.author.avatarURL)
                    .setTimestamp()
                    channel.send(announce1).then(a => a.react("📢"))
                } else {
                    msg.delete()
                }
            })
        })
    } else {

        let announce1 = new Discord.RichEmbed()
        .setDescription(announce)
        .setColor("#36393e")
        .setTitle('**ADVERTISEMENT**')
        .setThumbnail('http://icons.iconarchive.com/icons/graphicloads/100-flat/256/announcement-icon.png')
        .setFooter(`Announced By: ${message.author.username}`, message.author.avatarURL)
        .setTimestamp()
        channel.send(announce1).then(a => a.react("📢"))
        message.channel.send(`<:okay:538503952900161538> - ${message.author}, Message advertised on the channel: ${args[0]} successfully!`)
    }
}

exports.help = {
    name: "ads",
    aliases: ["ads"],
    diretorio: "Moderation"
}