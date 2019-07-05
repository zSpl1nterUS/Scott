const Discord = require('discord.js');
const cooldown = new Set()

var autor;
exports.run = async (snz, message, args) => {

    snz.channels.get(`594227255593664523`).send(`<:okay:538503952900161538> - Comando **RECRUTAR** executado: \n\nGuilda: \`${message.guild.name}\` \nID da Guilda: \`${message.guild.id}\` \nMembro: **${message.author.tag}**`)


    if (autor && autor.id !== message.author.id)
        return;
    autor = message.author.id;
    if (autor) {
        await message.author.createDM()
        await message.channel.send(`${message.author}, olhe sua **DM** e responda as perguntas para concluir o recrutamento!`).then(msg => msg.delete(10000))
        await message.author.send("Qual nick você ultiliza no Minecraft?\nTempo de Resposta:`2 minutos`")
        var collector1 = message.author.dmChannel.createMessageCollector(x => x.author.id == message.author.id, { time: 120000, max: 1 })
        collector1.on('collect', async c => {
            nick = c.content;
            await message.author.send("Quais suas Team's passadas?\nTempo de Resposta:`4 minutos`")
            var colletor2 = message.author.dmChannel.createMessageCollector(x => x.author.id == message.author.id, { time: 120000 * 2, max: 1 })
            colletor2.on('collect', async c => {
                teams = c.content;
                await message.author.send("Qual seu horário de disponibildade?\n Tempo de Resposta:`2 minutos`")
                var colletor3 = message.author.dmChannel.createMessageCollector(x => x.author.id == message.author.id, { time: 120000, max: 1 })
                colletor3.on('collect', async c => {
                    disponibilidade = c.content;
                    await message.author.send("Seu Minecraft é original?\n Tempo de Resposta:`2 minutos`")
                    var colletor4 = message.author.dmChannel.createMessageCollector(x => x.author.id == message.author.id, { time: 120000, max: 1 })
                    colletor4.on('collect', async c => {
                        mine = c.content;

                        let canal = snz.channels.get('594248834645884968')
                        let recrutamento = new Discord.RichEmbed()

                            .setTitle(`<a:warn2:567125982331273216> | Nova Solicitação de **Recrutamento**`)
                            .addField(`<a:setadireita:585663686480494602> **Nick:**`, `${nick}`)
                            .addField(`<a:setadireita:585663686480494602> **Team's Passadas:**`, `${teams}`)
                            .addField(`<a:setadireita:585663686480494602> **Disponibilidade:**`, `${disponibilidade}`)
                            .addField(`<a:setadireita:585663686480494602> **Minecraft Original:**`, `${mine}`)
                            .setColor("#36393e")
                            .setTimestamp()
                            .setThumbnail(message.author.displayAvatarURL)
                            .setFooter(`${message.author.tag}`, message.author.displayAvatarURL)
                        canal.send(recrutamento)
                    })
                    cooldown.add(message.author.id);
                    message.channel.send(`${message.author}, agora para ultilizar este comando novamente você terá que esperar alguns minutos!`).then(msg => msg.delete(100000))
                    setTimeout(() => {
                        cooldown.delete(message.author.id);
                    }, 1000 * 60 * 60 * 24 * 7);
                })
            })
        })
    } else {
        message.channel.send("Um usuário já executou o comando... Aguarde ele terminar.")
    }
}

exports.help = {
    name: "recrutar",
    aliases: ["recrutar"],
    diretorio: "Moderation"
}