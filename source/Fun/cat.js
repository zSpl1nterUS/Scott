const gifSearch = require('gif-search')

exports.run = (scott, message, args) => {
  gifSearch.random('cat').then(
    gifUrl => message.channel.sendMessage({
      'embed': {
        'title': ('**Gif of Cat**'),
        'color': 11676858,
        'timestamp': new Date(),
        'footer': {
          'icon_url': message.author.displayAvatarURL,
          'text': message.author.username
        },
        'image': {
          'url': gifUrl
        }
      }
    })
  )
}

exports.help = {
  name: "cat",
  aliases: ["cat"],
  diretorio: "Fun"
}