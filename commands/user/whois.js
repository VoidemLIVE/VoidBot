const { MessageEmbed } = require('discord.js');
const { formatDate } = require("../../functions.js");

module.exports = {
    config: {
        name: `whois`,
        aliases: [`whois`]
    },
    run: async (bot, message, args) => {
        let member = await message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.guild.members.cache.find(r => r.displayName.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.member;
      
        if(!member)
        return message.channel.send("**Enter A Valid User!**");
      
        const joined = formatDate(member.joinedAt);
        const roles = member.roles.cache
            .filter(r => r.id !== message.guild.id)
            .map(r => r.name).join(", ") || 'none';
        const created = formatDate(member.user.createdAt);

        const embed = new MessageEmbed()
            .setTitle("User Info")
            .setFooter(`VoidBot 2021`)
            .setThumbnail(member.user.displayAvatarURL({ dynamic: true}))
            .setColor("GREEN")
            .addField("**User information**", `${member.displayName}`)
            .addField("**ID**", `${member.user.id}`)
            .addField("**Username**",`${member.user.username}`)
            .addField("**Tag**", `${member.user.tag}`)
            .addField("**Created at**", `${created}`)
            .addField("**Joined at**", `${joined}`)
            .addField("**Roles**", `${roles}`, true)
            .setTimestamp()

            member.presence.activities.forEach((activity) => {
        if (activity.type === 'PLAYING') {
            embed.addField('Currently playing',`\n**${activity.name}**`)
        }
            })

        message.channel.send(embed);
    }
}