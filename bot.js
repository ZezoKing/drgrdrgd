const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(Logged in as ${client.user.tag}!);
});


client.on('ready', async() => {
var server = "Id server"; // 506408511240929290
var channel = "id room";// 506908518591234048
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('ahmad , ahmad , ahmad, ahmad , ahmad , ahmad , ahmad , ahmad , ahmad , ahmad , ahmad , ahmad , ahmad , ahmad , ahmad , ahmad , ahmad,ahmad, ')
    },305);
})


client.login(process.env.BOT_TOKEN);
