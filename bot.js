const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', async() => {
var server = "509037653040300053"; 
var channel = "509037699831955456";
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('** ماما جابت اندومي ماما جابت اندومي ماما جابت اندومي ماما جابت اندومي ماما جابت اندومي ماما جابت اندومي ماما جابت اندومي ماما جابت اندومي ماما جابت اندومي ماما جابت اندومي ماما جابت اندومي ماما جابت اندومي ماما جابت اندومي ماما جابت اندومي ماما جابت اندومي ماما جابت اندومي ماما جابت اندومي ماما جابت اندومي ماما  ماما جابت اندومي ماما جابت اندومي  **')
    },305);
}) 


client.login(process.env.BOT_TOKEN);
