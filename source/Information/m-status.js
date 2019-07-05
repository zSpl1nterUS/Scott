const Discord = require("discord.js")

exports.run =  async (scott, message, args) => {

console.log(`Command m-status ${message.guild.name} ${message.guild.id} ${message.author.tag}`)
 
    
    let MembrosOnline = message.guild.members.filter(a => a.presence.status == "online").size;
    let MembrosOcupado = message.guild.members.filter(a => a.presence.status == "dnd").size;
    let MembrosAusente = message.guild.members.filter(a => a.presence.status == "idle").size;
    let MembrosOffline = message.guild.members.filter(a => a.presence.status == "offline").size;

    let statusembed = new Discord.RichEmbed()
    .setColor('36393e')
    .addField('Members Status:', `<:on:521116720149168148> ▸ **Online:** ${MembrosOnline} | <:ausente:521116753816846346> ▸ **Idle:** ${MembrosAusente} | <:oucupado:521116741594513409> ▸ **Busy:** ${MembrosOcupado} | <:off:521116730161102858> ▸ **Offline:** ${MembrosOffline} `)
    .setFooter(`Scott - 2019`, scott.user.displayAvatarURL);
   
    
    message.channel.send(statusembed)

};

exports.help = {
    name: "m-status",
    aliases: ["m-status", "member-status", "member-s"],
    diretorio: "Information"
}