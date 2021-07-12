const { MessageEmbed } = require('discord.js');

module.exports = {
    config: {
        name: `tos`,
        aliases: [`tos`, `discord`, `terms`, `discordtos`],
    },
    run: async (bot, message, args) => {

        let embed = new MessageEmbed()
            .setColor(`RED`)
            .setTitle(`Discord TOS / User Report`)
            .addFields(
                { name: `Discord TOS:`, value: `https://discord.com/terms`, inline: true},
                { name: `Report A User:`, value: `https://support.discord.com/hc/en-us/requests/new`, inline: true },
            )
            .setTimestamp()
            .setFooter(`VoidBot 2021`)

        message.channel.send(embed);
    }
}