client.on('guildMemberAdd', Sal => { 
    var embed = new Discord.RichEmbed()
    .setTitle('Zezo')
    .setDescription('ارحب نورت Welcome To Evil ')
    .setColor('RANDOM')
    .setFooter(Sal.guild.name, Sal.guild.iconURL, true)
    var channel =Sal.guild.channels.find('name', 'evil') // هنا حط اسم الروم الي تبيه يكتب فيه
    if (!channel) return;
    channel.send({embed : embed});
    });






client.login(process.env.BOT_TOKEN);
