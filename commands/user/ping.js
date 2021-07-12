const { MessageEmbed } = require('discord.js');

module.exports = {
    config: {
        name: `ping`,
        aliases: [`ping`]
    },
    run: async (bot, message, args) => {
        message.channel.send("**Pinging...**").then(m => {
            let ping = m.createdTimestamp - message.createdTimestamp
            const embed = new MessageEmbed()
                .setColor("RED")
                .setFooter(`VoidBot 2021`)
                .setDescription(`<:hourglass_flowing_sand:699128011743690794> ${ping}\n\n💓 ${Math.round(bot.ws.ping)}`)
            message.channel.send(embed)
        })
    }
}
