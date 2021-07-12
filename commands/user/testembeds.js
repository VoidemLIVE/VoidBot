const { MessageEmbed } = require('discord.js');

module.exports = {
    config: {
        name: `testembeds`,
        aliases: [`testembeds`, `testembed`, `embedtest`, `embed`],
    },
    run: async (bot, message, args) => {

        let embed = new MessageEmbed()
            .setColor(`RED`)
            .setTitle(`Testing out Embed Mesasges`)
            .setURL(`https://backstorysmp.xyz`)
            .setAuthor(`The embed test message`, bot.user.displayAvatarURL())
            .setDescription(`Very poggers`)
            .addFields(
                { name: `Test 1`, value: `I love life` },
                { name: `Test 2`, value: `pog?` },
                { name: `Test 3`, value: `Voidem Development`, inline: true},
                { name: `Test 4`, value: `Add VoidBot to your server today`, inline: true},
            )
            .addField(`This is a test for a single field`, `YOOOOOO`, false)
            .setImage(bot.user.displayAvatarURL())
            .setTimestamp()
            .setThumbnail(bot.user.displayAvatarURL())
            .setFooter(`VoidBot 2021`)

        message.channel.send(embed);
    }
}