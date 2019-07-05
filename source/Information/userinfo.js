const Discord = require("discord.js")
const moment = require("moment")
require("moment-duration-format")

exports.run =  async (scott, message, args, prefixo, language) => {

console.log(`Command userinfo ${message.guild.name} ${message.guild.id} ${message.author.tag}`)

message.channel.startTyping()

moment.locale(`${language.ui.embed.w}`)

let boti =  message.mentions.users.first() || message.author
let usuario = message.guild.member(message.mentions.users.first() || message.author)
let servers = scott.guilds.filter(a => a.members.get(usuario.id))
servers = servers.map(a => a.name).join(' **\`||\`** ')
var criado = moment(usuario.createdAt).format('lll')
var entrou = moment(message.guild.members.get(usuario.id).joinedAt).format('lll')
    
let user;
if (message.mentions.users.first()) {
  user = message.mentions.users.first();
} else {
    user = message.author;
}

let administrador;
if(usuario.hasPermission(`ADMINISTRATOR`) === true) administrador = `${language.ui.embed.n}`;
if(usuario.hasPermission(`ADMINISTRATOR`) === false) administrador = `${language.ui.embed.o}`;

let statusmebro;
if(usuario.presence.status === `dnd`) statusmebro = `<:oucupado:521116741594513409> ${language.ui.embed.p}`;
if(usuario.presence.status === `idle`) statusmebro = `<:ausente:521116753816846346> ${language.ui.embed.q}`;
if(usuario.presence.status === `stream`) statusmebro = `<:stream:438399396963418131> ${language.ui.embed.t}`;
if(usuario.presence.status === `offline`) statusmebro = `<:offline:438399398762905600> ${language.ui.embed.u}`;
if(usuario.presence.status === `online`) statusmebro = `<:osnline:438399398808911882> ${language.ui.embed.v}`;

let botinfo;
if(boti.bot === true) botinfo = `${language.ui.embed.n}`; 
if(boti.bot === false) botinfo = `${language.ui.embed.o}`;    

let roles = usuario.roles.map(r => `<@&${r.id}>`).slice(1).join(' **\`||\`** ');
if(roles.length === 0) roles = `**${language.ui.embed.x}**`;


let member = message.guild.member(user);

const embed = new Discord.RichEmbed()

    .setColor('#36393e')
    .setThumbnail(user.displayAvatarURL)
    .setTitle(`<:information:537072191292964865> - ${language.ui.embed.m} **${user.tag}**`)
    .addField(`**<:alter:541054054474842113> ▸ ${language.ui.embed.a}**`, `${member.nickname !== null ? `${member.nickname}` : `${language.ui.embed.b1}`}`, true)
    .addField(`**<:gearr:516026024660828180> ▸ ${language.ui.embed.b}**`, `${user.id}`, true)
    .addField(`**<:calendar:516018350665629715> ▸ ${language.ui.embed.c}**`, `${criado}`, true)
    .addField(`**<a:okay:512392301037748251> ▸ ${language.ui.embed.d}**`, `${entrou}`, true)
    .addField(`**<:support:511297634628141076> ▸ ${language.ui.embed.e}**`, `${botinfo}`, true)
    .addField(`**<a:spinner:540302486376808479> ▸ ${language.ui.embed.f}**`, `${statusmebro}`, true)
    .addField(`**<:tag:505157510970474548> ▸ ${language.ui.embed.g}**`, `#${user.discriminator}`, true)
    .addField(`**<:man:505042016745553940> ▸ ${language.ui.embed.h}**`, `${administrador}`, true)
    .addField(`**<:management:514580926794039298> ▸ ${language.ui.embed.i}**`, `**${roles}**`)
    .addField(`**<:contact:541103563217174539> ▸ ${language.ui.embed.z}**`, `***[${language.ui.embed.a1}](${user.displayAvatarURL})***`, true)
    .addField(`**<:chat:543224058075152391> ▸ ${language.ui.embed.j}**`, `**${servers}**`)
    .setFooter(`${language.ui.embed.l} ${message.author.username}`, message.author.displayAvatarURL)
    .setTimestamp();

 message.channel.send(embed);
 
 message.channel.stopTyping()
}

exports.help = {
  name: "userinfo",
  aliases: ["userinfo"],
  diretorio: "Information"
}