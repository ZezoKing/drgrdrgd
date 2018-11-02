if (message.content === '*help') {
         let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)    
      .addField("** مبرمج البوت :wrench: **","**@!      @!  , AhMaD#4900   , @!  , Zezo#7765   **")
.setColor('RANDOM')
  message.author.sendEmbed(embed);
    }
});

client.login(process.env.BOT_TOKEN);
