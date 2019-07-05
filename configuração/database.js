const mongoose = require('mongoose')
const Schema = mongoose.Schema

mongoose.connect('mongodb://admin:leozinho2004@ds163254.mlab.com:63254/scott', { useNewUrlParser: true }, (err) => {
  if (err) return console.log('(DataBase) > Error trying to connect to DATABASE')
  console.log('(DataBase) > Successfully connected to DataBase')
})


var User = new Schema({
  _id: {
    type: String
  },
  ban: {
    type: Boolean,
    default: false
  },
  dev: {
    type: Boolean,
    default: false
  },
  sup: {
    type: Boolean,
    default: false
  },
  dzn: {
    type: Boolean,
    default: false
  },
  owner: {
    type: Boolean,
    default: false
  },
  subowner: {
    type: Boolean,
    default: false
  },
  ban: {
    type: Boolean,
    default: false
  }
})

var Guild = new Schema({
    _id: {
      type: String
    },
    lang: {
      type: String,
      default: 'en-US'
    },
    contador: {
      type: Boolean,
      default: false
  },
  chatContador: {
      type: String,
      default: 'Nenhum'
  },
    prefix: {
      type: String,
      default: 's.'
    },
    welcome: {
      type: Boolean,
      default: false
    },
    welcomechannel: {
      type: String,
      default: 'Nenhum'
    },
    welcomemsg: {
      type: String,
      default: 'Nenhum'
    },
    byebye: {
      type: Boolean,
      default: false
    },
    byebyechannel: {
      type: String,
      default: 'Nenhum'
    },
    byebyemsg: {
      type: String,
      default: 'Nenhum'
    },
    autorole: {
      type: Boolean,
      default: false
    },
    autoroleid: {
      type: String,
      dafault: 'Nenhum'
    },
    antinvite: {
      type: Boolean,
      default: false
    },
    inviteChannels: {
      type: [],
      dafault: 'Nenhum'
    },
    ConfirmeInvite: {
      type: Boolean,
      default: false
    },
  })

var Comando = new Schema({
    _id: {
      type: String
    },
    usos: {
      type: Number,
      default: 0
    },
    manutenção: {
      type: Boolean,
      default: false
    },
    reason: {
      type: String,
    },
    lastError: {
      type: String,
      default: "Nenhum"
    }
  })

  var Bot = new Schema({
    _id: {
    type: String
    },
    botmanu: {
      type: Boolean,
      default: false
    },
  })

  var Guilds = mongoose.model('Guilds', Guild)
  var Users = mongoose.model('Users', User)
  var Comandos = mongoose.model('Comandos', Comando)
  var BotConfig = mongoose.model('BotConfig', Bot)
  exports.Guilds = Guilds
  exports.Users = Users
  exports.Comandos = Comandos
  exports.BotConfig = BotConfig