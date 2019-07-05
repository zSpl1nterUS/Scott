//var express = require('express');
//var app = express();
console.log('(OPEN) > Turning the Bot ...')

const Discord = require("discord.js")
const database = require("./configuração/database.js")

const client = new Discord.Client({
  autoReconnect: true,
  messageCacheMaxSize: 2024,
  fetchAllMembers: true,
  messageCacheLifetime: 1680,
  disableEveryone: false,
  messageSweepInterval: 1680,
  disabledEvents: ['typingStart', 'typingStop', 'guildMemberSpeaking']
})

const config = require("./configuração/config.json")
const Enmap = require("enmap")
const fs = require("fs")

client.config = config;
client.commands = new Enmap();


client.on("debug", debug => {
  console.log(`Shard ${(client.shard.id + 1)}: ${debug}`)
})

//Eventos

fs.readdir("./eventos/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    const event = require(`./eventos/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
  });
});

//Moderation

fs.readdir("./source/Information", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./source/Information/${file}`);
    let commandName = file.split(".")[0];
    client.commands.set(commandName, props);
  });
});

//Configuration DataBase

fs.readdir("./source/configuração", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./source/configuração/${file}`);
    let commandName = file.split(".")[0];
    client.commands.set(commandName, props);
  });
});

//Music

fs.readdir("./source/Song", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./source/Song/${file}`);
    let commandName = file.split(".")[0];
    client.commands.set(commandName, props);
  });
});

//Configuration

fs.readdir("./source/configuração", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./source/configuração/${file}`);
    let commandName = file.split(".")[0];
    client.commands.set(commandName, props);
  });
});

//Owner Commands

fs.readdir("./source/Owner", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./source/Owner/${file}`);
    let commandName = file.split(".")[0];
    client.commands.set(commandName, props);
  });
});

//photoshop Commands

fs.readdir("./source/Photoshop", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./source/Photoshop/${file}`);
    let commandName = file.split(".")[0];
    client.commands.set(commandName, props);
  });
});

//Fun Commands

fs.readdir("./source/Fun", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./source/Fun/${file}`);
    let commandName = file.split(".")[0];
    client.commands.set(commandName, props);
  });
});

//Moderation Commands

fs.readdir("./source/Moderation", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./source/Moderation/${file}`);
    let commandName = file.split(".")[0];
    client.commands.set(commandName, props);
  });
});

console.log(`(Commands) > All commands successfully loaded!`);

client.on("message", async message => {

  if (message.author.bot) return;
  if (message.channel.type === "dm") return;

  if (message.content.startsWith("<@536975800155766785>")) {

    try {

      database.Guilds.findOne({ _id: message.guild.id }, function (servro, servidor) {
        if (servidor) {

          var prefixo
          prefixo = servidor.prefix

          //Mensagem de Menção

          if (!message.guild.me.hasPermission("SEND_MESSAGES")) {
            console.log(`Not allowed to send messages - ${message.guild.name} - ${message.guild.id} - ${message.author.tag}`)
          }

        } else if (!servidor) {
          var save = new database.Guilds({ _id: message.guild.id })
          save.save()
        }
      }).catch(e => {
        console.log('Mongoose Duplicated')
      })

    } catch (erro) {

      console.log(`Error in Message-Mention Event\n${erro}`)

    }
  }
});

client.login(config.token).catch(e => {

  console.log(`Error in My Login - Error:\n${e}`)

})

client.on("error", err => {
  console.error("____erro____ ")
  console.error(err)
  console.error("____________")
})

//var port = process.env.PORT || 3000;
//app.listen(port, function () {
//    console.log('Umbler listening on port %s', port);
//});
