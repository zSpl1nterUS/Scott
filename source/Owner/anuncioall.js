const Discord = require("discord.js");

exports.run = async (client, message, args) => {

  if(message.author.id !== "409520003256156160") return message.reply(new Discord.RichEmbed()
  .setColor("#a32aff")
  .setTimestamp()
  .setDescription("<:cancel:504782695667335178> | Você não tem permissão para usar esse comando!")).then(m => m.delete(5000))
  message.delete().catch(O_o=>{}); 
message.delete('')
  let reason = args.slice(0).join(' ');
  if (reason.length < 1) return message.reply('Use xh!anuncioall (Oque deseja anunciar!)');
  message.channel.send( new Discord.RichEmbed()
  .setColor("#a32aff")
  .setTimestamp()
  .setTitle('<a:okay:512392301037748251> | Deu trabalho mais eu mandei menssagem para todos do servidor.')).then(m => m.delete(9000))
      var embed = new Discord.RichEmbed()
        .setTitle('<a:sininho:497973448648425482> | Anúncio')
        .setDescription(args.join(" "))
        .setColor("#a32aff")
        .addField("Quem anuncio:", `${message.author.tag}`)
        .addField("Anunciado do Servidor:", message.guild.name)
        .setTimestamp()
        .setFooter('Anunciado por: ' + message.author.tag,message.author.avatarURL)
        message.delete().catch(O_o=>{}); 
        message.guild.members.map(users=>users.send(embed));
};

module.exports.config = {
name: "anuncioall",
aliases: ["massdm", "dm", "mass", "anuncioall"]
}