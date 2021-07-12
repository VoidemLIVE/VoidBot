const { MessageEmbed } = require('discord.js');

module.exports = {
    config: {
        name: `hug`,
        aliases: [`hug`]
    },

    run: async (bot, message, args) => {
        let hugged = message.mentions.members.first();
        let hugger = message.author.tag

        
        let embed = new MessageEmbed()
            .setColor(`RED`)
            .setTitle(`${hugger} Hugged You!`)
            .setImage("https://i.imgur.com/9W6ipdh.gif")
        hugged.send(embed);
    }
}