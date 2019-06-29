const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', async() => {
var server = "594651464836710400"; 
var channel = "594651823873458187";
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('** London Server   **')
    },305);
}) 


client.login(process.env.BOT_TOKEN);
