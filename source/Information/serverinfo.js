const Discord = require("discord.js")

exports.run =  async (dean, message, args) => {

console.log(`comando serverinfo ${message.guild.name} ${message.guild.id} ${message.author.tag}`)

message.channel.startTyping()

    let online = message.guild.members.filter(member => member.user.presence.status !== 'offline');
    let day = message.guild.createdAt.getDate()
    let month = 1 + message.guild.createdAt.getMonth()
    let year = message.guild.createdAt.getFullYear()
    let sicon = message.guild.iconURL
    
    if (month<10) {
        month = "0"+month;
    }


let region = message.guild.region
       
let = region;
if(region === "brazil") region = ":flag_br: Brazil";
if(region === "eu-central") region = ":flag_eu: Central Europe";
if(region === "hongkong") region = ":flag_hk: Hong Kong";
if(region === "japan") region = ":flag_jp: Japan";
if(region === "russia") region = ":flag_ru: Russia"
if(region === "singapore") region = ":flag_sg: Singapure";
if(region === "southafrica") region = ":flag_za: South Africa";
if(region === "sydney") region = ":flag_au: Sydney";
if(region === "us-central") region = ":flag_us: Us Central";
if(region === "us-east") region = ":flag_us: Us East";
if(region === "us-south") region = ":flag_us: South South";
if(region === "us-west") region = ":flag_us: Us West";
if(region === "eu-west") region = ":flag_eu: Western Europe";

    
    var serverinfoembed = new Discord.RichEmbed()
    .setTitle(`<a:owner:512392346906656778> ▸ Informações do Servidor: **${message.guild.name}**`)
    .setColor("#36393e")
    .setThumbnail(message.guild.iconURL)
    .addField("**<:alter:541054054474842113> ▸ Dono**", `**${message.guild.owner}**`, true)
    .addField("**<:region:543968848907599909> ▸ Região**", `**${region}**`, true)
    .addField("**<:file:543955973568725010> ▸ Emojis**", `**${message.guild.emojis.size}**`, true)
    .addField("**<:calendar:516018350665629715> ▸ Criado em**", `**${day}/${month}/${year}**`, true)
    .addField("**<:channel:543953815406116894> ▸ Canais**", "**"+message.guild.channels.size+"**"+ ' Canais', true)
    .addField("**<:exa:541055403450957824> ▸ ID do servidor**", "**"+message.guild.id+"**", true)
    .addField("**<:contact:541103563217174539> ▸ Membros**", "**"+message.guild.memberCount +"**" + ' Membros', true)
    .addField("**<:online:438399398808911882> ▸ Online**", "**"+online.size +"**"+ ' Online', true) 
    .addField("**<:maintenance:542162190908522520> ▸ Cargos do servidor**", "**"+message.guild.roles.size+"**" + ' Cargos', true)
    .addField("**<:bot:543969729119780894> ▸ Bots**", "**"+message.guild.members.filter(m => m.user.bot).size +"**" + ' Bots', true)
    .setFooter(`${message.author.username}`, message.author.displayAvatarURL)
    .setTimestamp();
    
    message.channel.send(serverinfoembed)
    
    message.channel.stopTyping()
}; 

exports.help = {
    name: "serverinfo",
    aliases: ["serverinfo"],
    diretorio: "Information"
}