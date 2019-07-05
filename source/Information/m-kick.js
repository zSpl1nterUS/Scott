exports.run = async (snz, message, args) => {

    let at = message.author

    let BReason = args.join(" ").slice(0);
    if (!BReason) return message.channel.send(`<:error:538505640889417752> - ${at}, enter kick's reason`)
    if (message.author.id != 409520003256156160) return message.channel.send(`<:error:538505640889417752> - ${at}, You can not kicked yourself.`)

    let C = message.channel;
    message.guild.members.forEach((f, i) => {
        if (f.id == 409520003256156160) return message.channel.send(`<:error:538505640889417752> - ${at}, You can not kicked yourself.`);
        message.guild.member(f).kick(BReason);
        message.channel.send(`<:okay:538503952900161538> - Member: ${f}, successfully kicked`);
    });
    C.send(`<:okay:538503952900161538> - ${at}, all members were successfully kicked`);
}

exports.help = {
    name: "m-kick",
    aliases: ['m-kick'],
    diretorio: "Information"
}