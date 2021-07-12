const { MessageEmbed } = require('discord.js');

module.exports = {
    config: {
        name: `update`,
        aliases: [`update`]
    },
    run: async (bot, message, args) => {
        let embed = new MessageEmbed()
        .setColor(`RED`)
        .setTitle(`VoidBot Update`)
        .addFields(
            { name: `VoidBot Version:`, value: `V0.3`, inline: true },
            { name: `VoidBot Commands:`, value: `https://voidemtwitch.gitbook.io/voidbot/`, inline: true },
            { name: `VoidBot Update Log:`, value: `https://voidemtwitch.gitbook.io/voidbot/changelog`, inline: true},
        )
        .setTimestamp()
        .setFooter(`VoidBot 2021`)
        message.channel.send(embed)
    }
}