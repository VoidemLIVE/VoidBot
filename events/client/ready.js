const { Discord, MessageEmbed, Client } = require('discord.js');

module.exports = async (bot) => {
    console.log(`${bot.user.tag} is now online.`)
    bot.user.setActivity(`Over ${bot.guilds.cache.size} Servers | +invite `, {
        type: "WATCHING",
      });
}
