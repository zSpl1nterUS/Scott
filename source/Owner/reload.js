exports.run = async(scott, message, args) => {

  console.log(`Command reload ${message.guild.name} ${message.guild.id} ${message.author.tag}`)

  if(message.author.id ==! "221865218840592384" || message.author.id ==! "408762620770779138") return message.reply("Sem permissão bro ❌ ");
 
 if(!args[0]) return message.channel.send(`<:error:538505640889417752> - ${message.author}, Enter the name of the command first!`)

 var cmd = scott.commands.get(args[0]) || scott.commands.find(a=> a.help && a.help.aliases && a.help.aliases.includes(args[0]));

     if(!cmd) return message.channel.send(`<:error:538505640889417752> - ${message.author}, The command: **\`${args[0]}\`**, not found.`)
 
     var props = require(`../${cmd.help.diretorio}/${cmd.help.name}.js`)
 
     delete require.cache[require.resolve(`../${cmd.help.diretorio}/${cmd.help.name}.js`)];
     
     scott.commands.delete(cmd.help.name); 
      
     scott.commands.set(cmd.help.name, props); 
     
     message.channel.send(`<:okay:538503952900161538> - ${message.author}, The command: **\`${cmd.help.name}\`**, **Successfully restarted!**`); 
     }
exports.help = {
  name: "reload",
  aliases: ["reload", "recarregar","r"], //formas De usar o cmd (qts quiser)
  diretorio: "Owner"
}