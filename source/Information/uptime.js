const Discord = require("discord.js")

function convertMS(ms) {
    var d, h, m, s;
    s = Math.floor(ms / 1000);
    m = Math.floor(s / 60);
    s = s % 60;
    h = Math.floor(m / 60);
    m = m % 60;
    d = Math.floor(h / 24);
    h = h % 24;
    return {
        d: d
        , h: h
        , m: m
        , s: s
    };
};


exports.run =  async (scott, message, args) => {

    console.log(`command uptime ${message.guild.name} ${message.guild.id} ${message.author.tag}`);
    
    let u = convertMS(scott.uptime);

    let segundo = u.s + " Seconds"
    let minuto = u.m + " Minutes"
    let hora =u.h + " Hours" 
    let dia = u.d + " Days"  



    let uptimeE = new Discord.RichEmbed()
        
            .setThumbnail(`http://atomicgroup.com/wp-content/uploads/2017/08/Consulting.png`)
            .setColor("#36393e")
             .setFooter(`Scott - 2019`, scott.user.displayAvatarURL)
            .addField('<:time:537051227037368330> - **Uptime:**', `**${dia}\n${hora}\n${minuto}\n${segundo}**`)
            message.channel.send(uptimeE)
 
};

exports.help = {
    name: "uptime",
    aliases: ["uptime"],
    diretorio: "Information"
}