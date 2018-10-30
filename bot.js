client.on('ready', () => {
var x = client.channels.get("506763611113390080");
if (x) x.join();
});




client.login(process.env.BOT_TOKEN);
