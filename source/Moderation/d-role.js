
const database = require("../../configuração/database.js");
const Discord = require('discord.js');

exports.run = async (scott, message, args) => {

    console.log(`Comando D-ROLE ${message.guild.name} ${message.guild.id} ${message.author.tag}`)

    database.Users.findOne({ _id: message.author.id }, async function (erro, usuario) {

        if (usuario.owner || message.member.hasPermission("ADMINISTRATOR")) {

            var rol = args.slice(0).join(' ')
            let role = message.guild.roles.find(x => x.name == `${rol}`) || message.mentions.roles.first()
            var hata = new Discord.RichEmbed()
                .setColor('#36393e')
                .setDescription(`<:error:538505640889417752> - ${message.author}, Mencione a role desejada`);
            if (!role) return message.channel.send(hata)
            message.guild.removeRole()

            message.channel.send("role deletada com sucesso")

        } else {
            var yEmbed = new Discord.RichEmbed()

                .setColor("#36393e")
                .setDescription(`<:error:538505640889417752> - ${message.author}, you do not have **permission** to run this **command**`)
            message.channel.send(yEmbed)
        }
    })
}

exports.help = {
    name: "d-role",
    aliases: ["d-role"],
    diretorio: "Moderation"
}