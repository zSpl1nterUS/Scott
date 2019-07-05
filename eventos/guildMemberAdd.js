const Discord = require('discord.js')

module.exports = (scott, member) => {

  if (member.guild.id !== "592853940752744455") return

  let entrada = scott.channels.get('592854270118723585')
  let avatar = member.displayAvatarURL

  let msg = new Discord.RichEmbed()

    .setTitle(`<a:entrou:568232560099065886> - Sejá Bem-Vindo ao nosso **Servidor**!`)
    .setDescription(`<a:sino:512403319361372161> - ${member}, sejá Bem-Vindo ao nosso Servidor \`Han'z Developers\`, quem nós somos?\n\n<a:dc:516402655661129729> Este servidor foi criado para você **Developer** e iniciantes poderem aprender e aprimorar mais seu conhecimento, ajudando outras pessoas que tenham dificuldades ou então alguém mais experiente ajudar você em suas \`dúvidas!\`\n\n<:contact:541103563217174539> Para se **interagir** com nossos outros membros, acesse o chat: <#592855884267520030>!`)
    .setFooter(`👤 ID Do Usuário: ${member.id} - 📌 Membro Nº: ${member.guild.memberCount}`, member.displayAvatarURL)
    .setColor("0x36393e")
    .setTimestamp()
    .setThumbnail(avatar)
  entrada.send(msg);
}