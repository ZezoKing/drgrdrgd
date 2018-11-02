client.on('typingStart', (ch, user) => {
    if(user.presence.status === 'offline') {
        ch.send(`${user} زيزو يقول اعمل نفسك اون لاين`)
        .then(msg => {
            msg.delete(10000)
        })
    }
});


client.login(process.env.BOT_TOKEN);
