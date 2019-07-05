const Discord = require("discord.js")
const database = require("../../configuração/database.js");

exports.run = async (scott, message, args) => {

    console.log(`Command SetAvatar ${message.guild.name} ${message.guild.id} ${message.author.tag}`)

    database.Users.findOne({ _id: message.author.id }, async function (erro, usuario) {

        if (usuario.owner) {

            try {

                if (!args[0]) {

                    message.channel.send(`<:error:538505640889417752> - ${message.author}, insert my **avatar**`)

                } else {

                    if (!/^(https?:\/\/)((([-a-z0-9]{1,})?(-?)+[-a-z0-9]{1,})(\.))+([a-z]{1,63})\/((([a-z0-9._\-~#%])+\/)+)?([a-z0-9._\-~#%]+)\.(jpg|jpeg|gif|png|bmp)$/i.test(args.join(' '))) {

                        var gEmbed = new Discord.RichEmbed()

                            .setTitle("<:error:538505640889417752> **Link Invalid**")
                            .setColor("#36393e")
                            .setThumbnail(`https://cdn.discordapp.com/attachments/534817264361275404/537063400090501128/settings_3.png`)
                            .setFooter(`Scott - 2019`, scott.user.displayAvatarURL)
                            .addField("Use a Valid Link", `**Format: \`https://AvatarLink.(jpg|jpeg|gif|png|bmp)\`**`)

                        message.channel.send(gEmbed)
                    } else {

                        await scott.user.setAvatar(args.join(' '));

                        let scottavatar = scott.user.displayAvatarURL;

                        var avatard = new Discord.RichEmbed()

                            .setThumbnail(`https://cdn.discordapp.com/attachments/534817264361275404/537063380196786257/settings_2.png`)
                            .setTitle("<:shuffle:537011775879774226> **Avatar changed**")
                            .setColor("#36393e")
                            .setFooter(`Scott - 2019`, scott.user.displayAvatarURL)
                            .addField(`Changed By: **${message.author.tag}**`,
                                `[[My Avatar]](${scottavatar})`)

                        message.channel.send(avatard).then(a => {
                            message.delete()
                        })
                    }
                }
            } catch (e) {
                console.log(`EError in the SetAvatar command - Error: ${e}`)
            }
        } else {
            var yEmbed = new Discord.RichEmbed()

                .setColor("#36393e")
                .setDescription(`<:error:538505640889417752> - ${message.author}, you don´t have **permission** to run this **command**`)
            message.channel.send(yEmbed)
        };
    })
}

exports.help = {
    name: "setavatar",
    aliases: ["setavatar"],
    diretorio: "Owner"
}