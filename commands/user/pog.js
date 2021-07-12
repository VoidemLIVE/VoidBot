const { MessageEmbed } = require('discord.js');

module.exports = {
    config: {
        name: `pog`,
        aliases: [`pog`, `pogers`, `poggers`]
    },

    run: async (bot, message, args) => {
        message.reply(`Poggers!`)
        }
}