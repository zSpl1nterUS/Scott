const Discord = require("discord.js");
const database = require("../../configuração/database.js");

function clean(text) {
    if (typeof (text) === "string")
        return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
    else
        return text;
}

exports.run = async (client, message, args) => {

    console.log(`comando eval ${message.guild.name} ${message.guild.id} ${message.author.tag}`)

    database.Users.findOne({ _id: message.author.id }, function (erro, usuario) {

        if (usuario) {
            if (usuario.owner) {

                try {

                    var code = args.join(" ");
                    var evaled = eval(code);

                    if (!code) {

                        var hhEmbed = new Discord.RichEmbed()

                            .setColor("#36393e")
                            .setDescription(`<:error:538505640889417752> - ${message.author}, enter the **code** to proceed with the **command**`)

                        message.channel.send(hhEmbed)
                    } else {

                        if (typeof evaled !== "string")
                            evaled = require("util").inspect(evaled);

                        var embed = new Discord.RichEmbed()

                            .setColor("#36393e")
                            .setThumbnail(client.user.displayAvatarURL)
                            .setFooter(`client - 2019`, client.user.displayAvatarURL)
                            .addField("<a:owner:512392346906656778> Code:", "```" + code + "```")
                            .addField("<:okay:538503952900161538> Result:", "```" + evaled + "```")

                        message.channel.send(embed).then(msg => {
                            msg.react('538503952900161538')
                        })
                    }
                } catch (err) {
                    const code = args.join(" ");
                    const embed = new Discord.RichEmbed()
                        .setColor("#36393e")
                        .setFooter(`client - 2019`, client.user.displayAvatarURL)
                        .setThumbnail(client.user.displayAvatarURL)
                        .addField("<a:owner:512392346906656778> Cod:", "```" + code + "```")
                        .addField("<:error:538505640889417752> Error:", "```" + `xl\n${clean(err)}` + "```")
                    message.channel.send(embed).then(msg => {
                        msg.react('538505640889417752')
                    })
                }
            } else {
                var yEmbed = new Discord.RichEmbed()

                    .setColor("#36393e")
                    .setDescription(`<:error:538505640889417752> - ${message.author}, you don't have **permission** to run this **command**`)
                message.channel.send(yEmbed)
            }
        } else {
            console.log('Comando Eval - confused')
        }
    })
}

exports.help = {
    name: "eval",
    aliases: ["eval"],
    diretorio: "Owner"
}