const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(` اكتب اي شي هنا  `,"http://twitch.tv/S-F")
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online ')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});

client.on('message', message => {
                                if(!message.channel.guild) return;
                        if (message.content.startsWith('ping')) {
                            if(!message.channel.guild) return;
                            var msg = `${Date.now() - message.createdTimestamp}`
                            var api = `${Math.round(client.ping)}`
                            if (message.author.bot) return;
                        let embed = new Discord.RichEmbed()
                        .setAuthor(message.author.username,message.author.avatarURL)
                        .setColor('RANDOM')
                        .addField('**Time Taken:**',msg + " ms 📶 ")
                        .addField('**WebSocket:**',api + " ms 📶 ")
         message.channel.send({embed:embed});
                        }
                    }); 

client.on("guildMemberAdd", msg => {
  var AlphaE = new Discord.RichEmbed()
.setColor("RANDOM")
.setAuthor(msg.user.username, msg.user.avatarURL)
.setThumbnail(msg.user.avatarURL)
.setTitle(`
مرحبا بك في السيرفر
نتمى ان تدخل الي السيرفر
`)
.addField("هذي الرساله خاصه بك يا حبيبي", `${msg.user.tag}`, true)
.addField(`هذا الرابط خاصه بك`,`Link`, true)
 .setFooter(msg.user.tag, msg.user.avatarURL, true)
msg.user.sendMessage(AlphaE);
});









 


client.login(process.env.BOT_TOKEN);
