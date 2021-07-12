const { MessageEmbed } = require('discord.js');

module.exports = {
    config: {
        name: `poll`,
        aliases: [`poll`]
    },
    run: async (bot, message, args) => {
        if(!message.member.hasPermission(`MANAGE_MESSAGES`)) return message.reply(`You do not have permission to use this command.`).then(m => (m.delete({timeout: 10000})));

        if (!args[0])
            return message.channel.send("**Please Enter A Query!**");

        const embed = new MessageEmbed()
            .setColor("GREEN")
            .setTitle(`Poll For ${message.guild.name} Sever`)
            .setFooter(`Poll by ${message.author.tag} |VoidBot 2021`)
            .setDescription(args.join(' '))
        var msg = await message.channel.send(embed);

        await msg.react('✅');
        await msg.react('❌');

        message.delete({ timeout: 1000 });
    }
}