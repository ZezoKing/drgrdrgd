const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(` 1  `,"http://twitch.tv/S-F")
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
client.on('ready', async() => {
var server = "509037653040300053"; 
var channel = "509037699831955456";
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('** ماما جابت اندومي ماما جابت اندومي ماما جابت اندومي ماما جابت اندومي ماما جابت اندومي ماما جابت اندومي ماما جابت اندومي ماما جابت اندومي ماما جابت اندومي ماما جابت اندومي ماما جابت اندومي ماما جابت اندومي ماما جابت اندومي ماما جابت اندومي ماما جابت اندومي ماما جابت اندومي ماما جابت اندومي ماما جابت اندومي ماما  ماما جابت اندومي ماما جابت اندومي  **')
    },305);
}) 



client.login(process.env.BOT_TOKEN);
