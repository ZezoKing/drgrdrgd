const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', async() => {
var server = "594651464836710400"; 
var channel = "594651823873458187";
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('** London Server   **')
    },305);
}) 
const fs = require("fs")
const say = JSON.parse(fs.readFileSync('./say.json', 'utf8'))

client.on("message", message =>
          {
      if(!say[message.guild.id]) say[message.guild.id] = {
        say: 'say'
        }
  if(message.content.startsWith(prefix + "say" ) || message.content.startsWith(say[message.guild.id].say)) {
    var args = message.content.split(" ").slice(1).join(" ")
    message.channel.send(args)
  }});
client.on("message", message => {
if(message.content.startsWith(prefix + 'set-say')) {
  var args = message.content.split(" ").slice(1).join(" ")
    if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('**Sorry But You Dont Have Permission** `MANAGE_GUILD`' );
    if(!say[message.guild.id]) say[message.guild.id] = {
        say: 'say'
        }
        message.channel.send(`**SET THE SAY COMMAND TO ${args}**`), say[message.guild.id].say = args
        fs.writeFile("./say.json", JSON.stringify(say), (err) => {
            if (err) console.error(err)
        })
}
})

client.login(process.env.BOT_TOKEN);
