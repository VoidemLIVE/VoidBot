const { MessageEmbed } = require('discord.js');

module.exports = {
    config: {
        name: `privacy`,
        aliases: [`privacy`]
    },

    run: async (bot, message, args) => {
        message.reply(`https://www.termsfeed.com/live/85b4a158-97b3-4e2d-9951-ec247e36e9a3`)
        }
}