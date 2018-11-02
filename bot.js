client.on('message', message => {
    if (message.content === '.user') {
        if(!message.channel.guild) return message.reply(`❌ هذا الأمر فقط ل السيرفرات`);
   
   message.guild.fetchInvites().then(invs => {
   let personalInvites = invs.filter(i => i.inviter.id === message.author.id);
   let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
   var moment = require('moment');
   var men = message.mentions.users.first();
   var heg;
   if(men) {
   heg = men
   } else {
   heg = message.author
   }
   var mentionned = message.mentions.members.first();
   var h;
   if(mentionned) {  /// tm t3del mn Fox
   h = mentionned
   } else {
   h = message.member
   }
   moment.locale('ar-TN');
   var idDark = new  Discord.RichEmbed()
   
   .setColor("RANDOM")
     .setThumbnail(message.author.avatarURL)
   .addField(' دخولك لديسكورد قبل', `${moment(heg.createdTimestamp).format('`D/M/YYYY HH:mm`')} **\n** \**${moment(heg.createdTimestamp).fromNow()}**` ,true) 
   .addField('انضمامك لسيرفر قبل', `${moment(h.joinedAt).format('`D/M/YYYY HH:mm`')} \n \**${moment(h.joinedAt).fromNow()}\**`, true)
   .addField('عدد الدعوات', `${inviteCount}`, true) /// Dark last
   .setFooter(message.author.username , message.author.avatarURL)
   message.channel.sendEmbed(idDark);
   })}
   });
