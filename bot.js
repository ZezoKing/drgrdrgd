const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', async() => {
var server = "619139460092788746"; 
var channel = "646390015563137025";
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('** سلوى اكس برو   **')
    },305);
}) 


client.login(process.env.BOT_TOKEN);
