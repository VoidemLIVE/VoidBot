const { MessageEmbed } = require('discord.js');

module.exports = {
    config: {
        name: `invite`,
        aliases: [`inv`, `invitation`, `invite`]
    },

    run: async (bot, message, args) => {
        let embed = new MessageEmbed()
        .setColor(`RED`)
        .setTitle(`Invite VoidBot`)
        .addFields(
            { name: `Invite Link:`, value: `https://discord.com/api/oauth2/authorize?client_id=834112995000057895&permissions=8&scope=bot` },
        )
        .setTimestamp()
        .setFooter(`VoidBot 2021`)

    message.channel.send(embed);
        }
}