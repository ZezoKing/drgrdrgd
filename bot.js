const Discord = require("discord.js")
const bot = new Discord.Client({})
let client = bot;
client.on('message', message => {
    if(!message.channel.guild) return;
let args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith('=bc')){
 if(!message.member.hasPermission('ADMINISTRATOR')) return;
message.channel.sendMessage('جار ارسال الرسالة |:white_check_mark:')
client.users.forEach(m =>{
m.sendMessage(args)
})
}
});


client.login("NjQzMzI4NDY4Mzg5NzI0MTcz.XeUKVA.doYi_SSgx5tumc38egyIipvylHM
);
