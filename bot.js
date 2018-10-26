client.on('message',async message => {
if(message.author.bot || message.channel.type === 'dm') return;
let args = message.content.split(' ');
let prefix = "&";
if(args[0] === ${prefix}bc) {
  if(!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send('- أنت لا تملك الصلاحيات اللازمة لأستخدام هذا الأمر');
  if(!args[1]) return message.channel.send('- يجب عليك كتابة الرسالة بعد الأمر');

  let msgCount = 0;
  let errorCount = 0;
  let successCount = 0;
    let status;
    if(msgCount === message.guild.memberCount) {
        status = 'تم الإرسال';
    } else if(msgCount !== message.guild.memberCount) {
        status = 'جارى الارسال';
    }
  message.channel.send(**- [ :bookmark: :: ${msgCount} ] ・عدد الرسائل المرسلة**\n**- [ :inbox_tray: :: ${successCount} ] ・عدد الرسائل المستلمة**\n**- [ :outbox_tray: :: ${errorCount} ]・عدد الرسائل الغير مستلمة\n- [ :white_small_square: :: ${status} ]・حالة الرسائل المرسلة**).then(msg => {
    message.guild.members.forEach(g => {
      g.send(args.slice(1).join(' ')).then(() => {
        successCount++;
        msgCount++;
                if(!msg) return;
        msg.edit(**- [ :bookmark: :: ${msgCount} ] ・عدد الرسائل المرسلة**\n**- [ :inbox_tray: :: ${successCount} ] ・عدد الرسائل المستلمة**\n**- [ :outbox_tray: :: ${errorCount} ]・عدد الرسائل الغير مستلمة\n- [ :white_small_square: :: ${status} ]・حالة الرسائل المرسل**);
      }).catch(e => {
        errorCount++;
        msgCount++;
                if(!msg) return;
        msg.edit(**- [ :bookmark: :: ${msgCount} ] ・عدد الرسائل المرسلة**\n**- [ :inbox_tray: :: ${successCount} ] ・عدد الرسائل المستلمة**\n**- [ :outbox_tray: :: ${errorCount} ]・عدد الرسائل الغير مستلمة\n- [ :white_small_square: :: ${status} ]・حالة الرسائل المرسل**);
      });
    });
  });
}
});
