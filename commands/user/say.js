const { MessageEmbed } = require('discord.js');

module.exports = {
    config: {
        name: `say`,
        aliases: [`say`]
    },
    run: async (bot, message, args) => {
        try {
            if (args.length === 0)
                return message.channel.send("**Enter Some Text!**")
            message.delete({ timeout: 1000 })
    
            const embed = new MessageEmbed()
                .setDescription(args.join(" "))
                .setColor(`GREEN`);
    
            message.channel.send(embed)
          } catch (e) {
              throw e;
            }
        }
    }
