const Discord = require("discord.js")
const malScraper = require('mal-scraper')

exports.run =  async (dean, message, args) => {

if(!args[0]){message.channel.send("<:error:538505640889417752> - Please enter a first anime name")

let volte = args.slice[0]
if(!volte) return;
}

console.log(`Command anime ${message.guild.name} ${message.guild.id} ${message.author.tag}`)


const search = `${args}`;

  malScraper.getInfoFromName(search)

    .then((data) => {

    const malEmbed = new Discord.RichEmbed()

      .setTitle(`**Search Results: \`${args}\`**`.split(',').join(' '))
      .setThumbnail(data.picture)
      .setColor('#36393e')
      .addField('• Title in Japanese', data.japaneseTitle, true)
      .setTimestamp()
      .addField('• Título em Inglês:', data.englishTitle, true)
      .addField('• Type:', data.type, true)
      .addField('• RSS Feeds:', data.episodes, true)
      .addField('• Punctuation:', data.score, true)
      .addField('• Created on:', data.aired, true)
      .addField('• Evaluation:', data.rating, true)
      .addField('• Score status:', data.scoreStats, true)
      .addField('Link:', `[Click Here](${data.url})`)
      .setFooter(`${message.author.username}`, message.author.displayAvatarURL)

      message.channel.send(malEmbed);

    })
    .catch((err) => {
    
    const embedy = new Discord.RichEmbed()
        .setTitle(`<:error:538505640889417752> - **Anime not found**`)
        .setColor('36393e')
        .setFooter(`Scott - 2019`, dean.user.displayAvatarURL)
        .setThumbnail(message.author.displayAvatarURL)
        .addField("<:okay:538503952900161538> - Use Correctly:", `**${prefixo}anime \`<Some existing anime>\`**`)
        message.channel.send(embedy).then(msg => msg.delete(5000));

    })
}

exports.help = {
  name: "anime",
  aliases: ["anime"],
  diretorio: "Information"
}