const { MessageEmbed } = require('discord.js');

module.exports = {
    config: {
        name: `help`,
        aliases: [`help`, `commands`]
    },
    run: async (bot, message, args) => {

        let embed = new MessageEmbed()
            .setTitle(`Help`)
            .setColor(`RED`)
            .setFooter(`VoidBot 2021`)
            .setTimestamp()
            .setDescription(`Bot developed by Voidem#2269`)
            .addField(`Commands:`, `https://voidbot.ddns.net`)
        message.channel.send(embed).then;
    }
}