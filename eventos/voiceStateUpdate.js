const lista = require('../configuração/queue.js')

module.exports = (scott, oldMember, newMember) => {

var serverQueue = lista.queue.get(oldMember.guild.id);

var memb;

if(oldMember) {

memb = oldMember

} else {

memb = newMember

}

if(scott.guilds.get(memb.guild.id).members.get(scott.user.id).voiceChannel) {

if(serverQueue) {
    if(serverQueue.music) {
        if(oldMember.id === scott.user.id) return;
        else
            if(oldMember.guild.members.get(scott.user.id).voiceChannel) {
                if(oldMember.guild.members.get(scott.user.id).voiceChannel === oldMember.voiceChannel) { 

                setTimeout(() => {
                    if((memb.guild.members.get(scott.user.id).voiceChannel.members.size - 1) === 0) {
                        serverQueue.soms = [];
                        serverQueue.connection.dispatcher.end('Canal de Voz Vazio');
                        } else {}
                    }, 20 * 1000) 
                } else {}
            } else {}
        } else {}
    } else {}
}
}