const database = require("../configuração/database.js");
const Discord = require('discord.js')

var cmdCol = new Set()
var dbCol = new Set()

module.exports = async (client, message, member) => {

    try {

        if (message.author.bot) return;
        if (message.channel.type === "dm") {
            message.channel.send({
                embed: {
                    description: `<:error:538505640889417752> - **${message.author.tag}, You can´t **Run Commands/Chat** in my DM.`,
                    color: 0x36393e,
                }
            }).then(msg => msg.delete(10000)).catch(a => { });
            console.log(`Mensagem em minha DM -> Author: ${message.author.tag}`)
        } else {

            database.Guilds.findOne({ _id: message.guild.id }, function (servro, servidor) {
                database.Users.findOne({ _id: message.author.id }, function (erro, usuario) {
                    database.BotConfig.findOne({ _id: client.user.id }, async function (erro, bot) {

                        if (usuario) {
                            if (servidor) {

                                var prefixo
                                prefixo = servidor.prefix || ''

                                if (message.content.includes("https://discord.gg/") || message.content.includes("discord.gg/")) {
                                    if (servidor.antinvite) {
                                        if (!message.member.hasPermission("ADMINISTRATOR")) {

                                            message.channel.send({
                                                embed: {
                                                    title: `<:war:543591737319227392> ▸ WARNING`,
                                                    description: `<:error:538505640889417752> - ${message.author}, **You can´t divulge here.**`,
                                                    color: 0x36393e
                                                }
                                            }).then(gg => {
                                                message.delete().catch(o => {
                                                    console.log(`Error deleting message - Ant-Invite - Error: ${message.guild.name} - ${message.guild.id} - ${message.author.tag} --- Ant-Invite - Erro: ${o}`)
                                                })
                                            });
                                        } else { }
                                    } else { }
                                } else { }

                                if (message.content.startsWith("<@536975800155766785>")) {
                                    var embedmention = new Discord.RichEmbed()

                                        .setColor("#36393e")
                                        .setTitle(`<:information:537072191292964865> - Do you need help? Use **\`${prefixo}help\`**`)
                                        .setFooter(`client - 2019`, client.user.displayAvatarURL)
                                    console.log(`I'm mention in: ${message.guild.name} ${message.guild.id} ${message.author.tag}`)

                                    message.channel.send(embedmention)
                                }

                                if (message.content.indexOf(prefixo) !== 0) return;

                                const args = message.content.slice(prefixo.length).trim().split(/ +/g);
                                const command = args.shift().toLowerCase();
                                const cmd = client.commands.get(command);

                                if (cmd) {

                                    if (!usuario.ban || usuario.owner) {
                                        if (!cmdCol.has(message.author.id)) {
                                            if (message.guild.me.hasPermission(['SEND_MESSAGES', 'ADD_REACTIONS', 'VIEW_CHANNEL'])) {

                                                database.Comandos.findOne({ _id: command }, function (cerro, comando) {

                                                    if (comando) {
                                                        if (comando.manutenção && comando.reason && !usuario.owner) {

                                                            message.channel.send(`<:error:538505640889417752> - ${message.author}, The command \`${comando._id}\` It is in **maintenance**.\n**Reason:** \`${comando.reason}\``)
                                                            cooldown()

                                                        } else {

                                                            const language = require(`../Locales/${servidor.lang}.json`)
                                                            cmd.run(client, message, args, prefixo, language)

                                                            var num = comando.usos
                                                            num = num + 1

                                                            comando.usos = num
                                                            comando.save()

                                                            cooldown()
                                                        }

                                                    } else {

                                                        var comandoC = new database.Comandos({
                                                            _id: command,
                                                            usos: 0,
                                                            manutenção: false,
                                                        })

                                                        comandoC.save()
                                                    }
                                                })
                                            } else {
                                                console.log(`Sem permissão de Enviar/Reagir/Falar -> ${message.guild.name} - ${message.guild.id} - ${message.author.tag}`)
                                            }
                                        } else {

                                            var yEmbed = new Discord.RichEmbed()

                                                .setDescription(`<:time:537051227037368330> - ${message.author}, You should wait a while before executing another **command!**`)
                                                .setColor('#36393e')

                                            message.channel.send(yEmbed).then(colldown => {

                                                setTimeout(() => {
                                                    colldown.delete()
                                                }, 3000)

                                                message.delete(3000).catch(a => { })

                                            })
                                        }

                                    } else {

                                        var yEmbed = new Discord.RichEmbed()

                                            .setDescription(`<:error:538505640889417752> - ${message.author}, You're **banned** from using my **commands**`)
                                            .setColor('#36393e')

                                        message.channel.send(yEmbed)

                                    }

                                } else if (!cmd) {
                                    console.log(`${message.author.tag} tried to execute a nonexistent command in the Guild: id(${message.guild.id}) - name(${message.guild.name})`)
                                    message.react("538505640889417752")
                                }

                            } else if (!servidor) {

                                var saveG = new database.Guilds({ _id: message.guild.id })
                                saveG.save()

                            }
                        } else if (!usuario) {

                            var saveU = new database.Users({ _id: message.author.id })
                            saveU.save()

                        }
                    }).catch(a => { })

                }).catch(a => { })

            }).catch(a => { })

            if (!dbCol.has(message.author.id)) {
                dbCol.add(message.author.id)
                setTimeout(function () {
                    dbCol.delete(message.author.id)
                }, 60 * 1000)

                database.Users.findOne({ _id: message.author.id }, function (userro, usuario) {

                    if (usuario) {

                        database.Guilds.findOne({ _id: message.guild.id }, function (servro, servidor) {

                            if (servidor) {
                                if (message.mentions.users.size > 0) {

                                    database.Users.findOne({ _id: message.author.id }, function (menrro, mencionado) {

                                        if (!mencionado) {
                                            if (!message.mentions.users.first().bot) {

                                                res = message.mentions.users.first()
                                                var saveUu = new database.Users({ _id: res.id })
                                                saveUu.save()

                                            }
                                        }
                                    }).catch(a => { })
                                }

                            } else {
                                var saveG = new database.Guilds({ _id: message.guild.id })
                                saveG.save()
                            }
                        }).catch(a => { })

                    } else { }
                }).catch(a => { })
            };
        }

        async function cooldown() {

            cmdCol.add(message.author.id)
            setTimeout(function () {
                cmdCol.delete(message.author.id)
            }, 3000)
        };

    } catch (err) {

        console.log(`Error in my Message event - Erro\n${err}`)
    }
}