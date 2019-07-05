const Discord = require('discord.js');


var autor;

exports.run = async (mysterium, message) => {

    message.channel.startTyping()

    let at = message.author

    autor = message.author.id;
    if (autor) {
        await message.author.createDM()
        await message.channel.send(`${at}, verifique sua **DM** e siga os passos indicados!`)
        await message.author.send(`Primeiro diga seu **Nick** usado em nosso servidor!\n\nTempo para resposta: **1 Minuto**`)
        var c1 = message.author.dmChannel.createMessageCollector(x => x.author.id = message.author.id, { time: 1000000, max: 1 })
        c1.on('collect', async a => {
            nick = a.content;
            await message.author.send(`Para qual plataforma deseja fazer a sugestão? \`Discord/Minecraft\`\n\nTempo para resposta: **1 Minuto**`)
            var c2 = message.author.dmChannel.createMessageCollector(x => x.author.id = message.author.id, { time: 1000000, max: 1 })
            c2.on('collect', async a => {
                plataforma = a.content
                await message.author.send(`Qual o bug que você encontrou e deseja reportar?\n\nTempo para resposta: **5 Minutos**`)
                var c3 = message.author.dmChannel.createMessageCollector(x => x.author.id = message.author.id, { time: 5000000, max: 1 })
                c3.on('collect', async a => {
                    sugestão = a.content
                    await message.author.send(`Coloque provas do **BUG** que você encontrou! \`[Provas de tal bug, caso ache que é desnecessário desconsidere esta opção]\`\n\nTempo para resposta: **3 Minutos**`)
                    var c4 = message.author.dmChannel.createMessageCollector(x => x.author.id = message.author.id, { time: 3000000, max: 1 })
                    c4.on('collect', async a => {
                        motivo = a.content

                    await message.author.send(`${at}, Sua sugestão foi enviada com sucesso, aguarde até um **Staff** entrar em contato!`) 
                    await message.channel.send(`${at}, Sua sugestão foi enviada com sucesso, não ultilize este comando repetidamente nem de forma errada, caso use você poderá ser punido!`)

                        let canal = mysterium.channels.get('594615684026204170')
                        let msg = new Discord.RichEmbed()

                            .setTitle(`Nova Sugestão enviada!`)
                            .addField(`Nick:`, `\`\`\`js\n" ${nick} "\`\`\``)
                            .addField(`Plataforma:`, `\`\`\`js\n" ${plataforma} "\`\`\``)
                            .addField(`Bug:`, `\`\`\`js\n" ${sugestão} "\`\`\``)
                            .addField(`Provas:`, `\`\`\`js\n" ${motivo} "\`\`\``)
                            .setColor('#9400ff')
                            .setTimestamp()
                            .setFooter(`Bug enviado por: ${message.author.tag}`, message.author.displayAvatarURL)
                            .setThumbnail(message.author.displayAvatarURL)

                        canal.send(msg)
                    })
                })
            })
        })

        message.channel.stopTyping()

    }
}

exports.help = {
    name: "sugestão",
    aliases: ["sugestão"],
    diretorio: "Ultilidades"
}