const Discord = require("discord.js")
const scott = new Discord.Client({})
const DBL = require('dblapi.js')
const dbl = new DBL("", scott)

module.exports = (scott, prefixo) => {

try {

console.log(`(Ok) > Bot Connected and Active`)

setTimeout(function () {
    
console.log(`(Online) > Scott | Online in:\n\nGuilds: ${scott.guilds.size}\nUsers: ${scott.users.size}\nChannels: ${scott.channels.size}`)

}, 1000)

/*

client.shard.fetchClientValues('guilds.size').then(servers => {
client.shard.fetchClientValues('users.size').then(users => {
client.shard.fetchClientValues('channels.size').then(channels => {
    
        })
    })
})

/*

///////

/*
    //  0 = Jogando
    //  1 = Transmitindo
    //  2 = Ouvindo
    //  3 = Assistindo
*/
  
let status = [
    { name: `I'm developing`,  type: 'STREAMING', url: 'https://www.twitch.tv/yunogasayxvii' },
    { name: `I'm on ${scott.guilds.size} servers`,  type: 'STREAMING', url: 'https://www.twitch.tv/yunogasayxvii' },
    { name: `I know ${scott.users.size} people, how many people ❤`,  type: 'STREAMING', url: 'https://www.twitch.tv/yunogasayxvii' },
    { name: `I'm updated every day`,  type: 'STREAMING', url: 'https://www.twitch.tv/yunogasayxvii' },
    { name: `To ${scott.users.size} people in ${scott.guilds.size} servers`,  type: 'LISTENING', url: 'https://www.twitch.tv/yunogasayxvii' },
];

//STREAMING = Transmitindo
//LISTENING = Ouvindo
//PLAYING = Jogando
//WATCHING = Assistindo

function setStatus() {
    let randomStatus = status[Math.floor(Math.random() * status.length)];
    scott.user.setPresence({ game: randomStatus });
}

setStatus();
setInterval(() => setStatus(), 10000);  //10000 = 10Ms = 10 segundos
} catch (err) {

    console.log(`Error in my Ready event - Error:\n${err}`)
  }
}
