const { MessageEmbed } = require('discord.js');

module.exports = {
    config: {
        name: `info`,
        aliases: [`information`, `info`,]
    },
    run: async (bot, message, args) => {
        let info1 = `v0.2`
        let info2 = bot.guilds.cache.size
        let info3 = `Discord.js`

        let embed = new MessageEmbed()
            .setTitle(`Info`)
            .setColor(`RED`)
            .setThumbnail(bot.user.displayAvatarURL())
            .setFooter(`VoidBot 2021`, bot.user.displayAvatarURL())
            .setTimestamp()
            .setDescription(`Bot developed by Voidem#2269`)
            .addField(`Servers:`, info2, true)
            .addField(`Version:`, info1, true)
            .addField(`Coded in:`, info3, true)
        message.channel.send(embed).then;
    }
}