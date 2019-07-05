const Discord = require("discord.js");

const ownerID = '409520003256156160'

module.exports.run = async (scott, message, args) =>{

    console.log(`Command Create ${message.guild.name} ${message.guild.id} ${message.author.tag}`)


    message.delete(100)

    if (message.author.id !== ownerID) return message.channel.send(`<:error:538505640889417752> - **${message.author.username}**, I'm sorry but you're not allowed to use this **command.**`);

        let Servidor = scott.guilds.get(args[0])

            if (!Servidor) return message.channel.send(`<:error:538505640889417752> - **${message.author.username}**, you need to enter a **valid ID.**`);

                Servidor.channels.random().createInvite().then(a => message.author.send(a.toString()))

                    message.channel.send(`<:okay:538503952900161538> - **${message.author.username}**, The server invitation was sent in your **DM.**`);
}

exports.help = {
    name: "create",
    aliases: ["create"],
    diretorio: "Owner"
  }