const Discord = require('discord.js');

module.exports = async(scott, member) => {

  if(member.guild.id !== "592853940752744455") return;

  let saida = scott.channels.get('592854283825971202')
  let avatar = member.displayAvatarURL

  let msg = new Discord.RichEmbed()

  .setTitle(`<a:saiu:568232563542458378> - Um membro saiu de nosso **Servidor**!`)
  .setDescription(`💔 ${member}, acabou de sair de nosso **servidor**, é uma pena \`:(\`, esperamos que você volte um dia!\n\n❤ O que acha de chamar um amigo seu pra oucupar está vaga?)`)
  .setFooter(`👤 ID Do Usuário: ${member.id} - 📌 Membros: ${member.guild.memberCount}`, member.displayAvatarURL)
  .setColor("0x36393e")
  .setTimestamp()
  .setThumbnail(avatar)
  saida.send(msg)
}