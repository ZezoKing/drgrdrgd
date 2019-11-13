const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', async() => {
var server = "642711609768280075"; 
var channel = "644073599262654464";
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('** سلوى اكس برو   **')
    },305);
}) 


client.login(process.env.BOT_TOKEN);
