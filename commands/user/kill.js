const { MessageEmbed } = require('discord.js');

module.exports = {
    config: {
        name: `kill`,
        aliases: [`kill`]
    },

    run: async (bot, message, args) => {
        let killed = message.mentions.members.first();
        let killer = message.author.tag

        
        let embed = new MessageEmbed()
            .setColor(`RED`)
            .setTitle(`${killer} Killed you!`)
            .setImage("https://i.imgur.com/IMzsXos.jpg")
        killed.send(embed);
    }
}