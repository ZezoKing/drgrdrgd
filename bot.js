client.on('ready', async() => {
var server = "اي دي السيرفر"; 
var channel = "اي دي الروم";
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('**  زيزووووووووووووووووووووووووووووووووووووووووووووووووووووووووووووووووووووووووووووووووووووووووووووووووووووووووووووو **')
    },305);
}) 



client.login(process.env.BOT_TOKEN);
