const { MessageEmbed } = require('discord.js');

module.exports = {
    config: {
        name: `roleinfo`,
        aliases: [`roleinfo`, `role`]
    },

    run: async (bot, message, args) => {
        if (!args[0]) return message.channel.send("**Please Enter A Role!**")
        let role = message.mentions.roles.first() || message.guild.roles.cache.get(args[0]) || message.guild.roles.cache.find(r => r.name.toLowerCase() === args.join(' ').toLocaleLowerCase());
        if (!role) return message.channel.send("**Please Enter A Valid Role!**");

        const status = {
            false: "No",
            true: "Yes"
        }

        let roleembed = new MessageEmbed()
            .setColor("#00ff00")
            .setAuthor("Role Info")
            .addField("**ID**", `\`${role.id}\``, true)
            .addField("**Name**", role.name, true)
            .addField("**Hex**", role.hexColor)
            .addField("**Members**", role.members.size)
            .addField("**Position**", role.position)
            .addField("**Mentionable**", status[role.mentionable])
            .setFooter(`VoidBot 2021`)
            .setTimestamp()

        message.channel.send(roleembed);
        }
}