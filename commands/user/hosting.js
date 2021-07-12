const { MessageEmbed } = require('discord.js');

module.exports = {
    config: {
        name: `host`,
        aliases: [`host`, `hosting`, `retronode`]
    },

    run: async (bot, message, args) => {
        const ptero = `Pterodactyl`
        let embed = new MessageEmbed()
        .setColor(`ORANGE`)
        .setTitle(`Hosting`)
        .addFields(
            { name: `Software:`, value: `Pterodactyl`, inline: true},
            { name: `Hosting Type:`, value: `VPS`, inline: true},
            { name: `Hosting:`, value: `Retronode.net`, inline: true},
        )
        .setTimestamp()
        .setFooter(`VoidBot 2021`)

    message.channel.send(embed);
        }
}