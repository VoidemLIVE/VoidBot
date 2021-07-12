const { MessageEmbed } = require('discord.js');

module.exports = {
    config: {
        name: `avatar`,
        aliases: [`avatar`]
    },

    run: async (bot, message, args) => {
        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.guild.members.cache.find(r => r.displayName.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.member;

        if (args[0]) {
          message.channel.send({
            embed: {
    
              title: `${user.user.username}'s Avatar`,
    
              color: `RED`,
    
              image: {
                url: `${user.user.displayAvatarURL({dynamic: true})}` + '?size=4096'
              },
    
              timestamp: new Date(),
    
              footer: {
                text: message.guild.name,
                icon_url: message.guild.iconURL()
              }
            }
          })
        }
        else if (!args[0]) {
          message.channel.send({
            embed: {
    
              title: `${user.user.username}'s Avatar`,
    
              color: `RED`,
    
              image: {
                url: `${user.user.displayAvatarURL({ dynamic: true })}` + '?size=4096'
              },
    
              timestamp: new Date(),
    
              footer: {
                text: `VoidBot 2021`
              }
    
            }
          })
        }
    }
}