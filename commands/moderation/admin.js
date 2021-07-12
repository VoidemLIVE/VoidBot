const { MessageEmbed } = require('discord.js');

module.exports = {
    config: {
        name: `admin`,
        aliases: [`admin`, `server`, `guild`]
    },
    run: async (bot, message, args) => {
        if(!message.member.hasPermission(`ADMINISTRATOR`)) return message.reply(`You do not have permission to use this command.`)
        let embed = new MessageEmbed()
            .setColor(`BLUE`)
            .setTitle(`Admin Info`)
            .setAuthor(`Server Administrator Information`)
            .setDescription(`Info about the guild`)
            .addFields(
                { name:  `Guild Name:`, value: message.guild.name },
                { name:  `Guild Boosts:`, value: message.guild.premiumSubscriptionCount },
                { name:  `Guild Region:`, value: message.guild.region },
                { name:  `Guild Verification lvl:`, value: message.guild.verificationLevel },
                { name:  `Guild Member Count:`, value: message.guild.memberCount },
                { name:  `Guild Role Count:`, value: message.guild.roles.cache.size },
            )
            .addField(`Guild Emojis Count:`, message.guild.emojis.cache.size)
            .addField(`Guild Owner:`, message.guild.owner)
            .setFooter(`VoidBot 2021`, bot.user.displayAvatarURL())

        message.channel.send(embed);
    }
}