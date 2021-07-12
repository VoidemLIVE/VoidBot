const { MessageEmbed } = require('discord.js');

module.exports = {
    config: {
        name: `unban`,
        aliases: [`unban`],
    },
    run: async (bot, message, args) => {
        message.delete()
        if(!message.member.hasPermission(`BAN_MEMBERS`)) return message.reply(`You do not have permission to use this command.`)
        let serverm = message.guild.members;
        if(isNaN(args[0])) return message.reply(`Please state a valid USER id.`)
        let bannedMember = bot.users.fetch(args[0]);
        if(!bannedMember) return message.reply(`There was no user to Unban.`)
        serverm.unban(bannedMember);
        await message.reply(`**${bannedMember.id}** has been unbanned from the discord by ${message.author.tag}.`)
    }
}
