const Discord = require("discord.js");
const client = new Discord.Client();

           client.on('message', message => {
                    var prefix = "#";

           if (message.content.startsWith(prefix + "id")) {
                     if(!message.channel.guild) return message.reply(`هذا الأمر فقط ل السيرفرات :x:`);

                message.guild.fetchInvites().then(invs => {
      let member = client.guilds.get(message.guild.id).members.get(message.author.id);
      let personalInvites = invs.filter(i => i.inviter.id === message.author.id);
      let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
      var moment = require('moment');
      var args = message.content.split(" ").slice(1);
let user = message.mentions.users.first();
var men = message.mentions.users.first();
 var heg;
 if(men) {
     heg = men
 } else {
     heg = message.author
 }
var mentionned = message.mentions.members.first();
  var h;
 if(mentionned) {
     h = mentionned
 } else {
     h = message.member
 }
        moment.locale('ar-TN');
      var id = new  Discord.RichEmbed()
       
    .setColor("#0a0909")
    .setAuthor(message.author.username, message.author.avatarURL) 
.addField(': دخولك لديسكورد قبل', `${moment(heg.createdTimestamp).format('YYYY/M/D HH:mm:ss')} **\n** \`${moment(heg.createdTimestamp).fromNow()}\`` ,true) 
.addField(': انضمامك لسيرفر قبل', `${moment(h.joinedAt).format('YYYY/M/D HH:mm:ss')} \n \`${moment(h.joinedAt).fromNow()}\``, true)
.addField(': عدد الدعوات', inviteCount,false)
.setFooter("DEV_Zezo")  
    message.channel.sendEmbed(id);
})
}
    

         
     });
hero.on('message',async message => {
  let args = message.content.split(' ');
  let banUser = message.mentions.users.first();
  let banReason = args.slice(3).join(' ');
  let banDuration = args[2];
  if(message.content.toLowerCase().startsWith(prefix + "ban")) {
    if(message.content.toLowerCase().split(' ')[0] !== `${prefix}ban`) return;
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(`**:heavy_multiplication_x: | أنت لا تملك الخصائص اللازمة لتنفيذ هذا الأمر , يجب توفر خاصية \`تبنيد الأعضاء\`**`);
    if(!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send(`**:heavy_multiplication_x: | يجب اعطاء البوت خاصية \`تبنيد الأعضاء\` قبل استخدام هذا الأمر**`);
    if(!banUser) return message.channel.send(`**:heavy_multiplication_x: | يجب عليك منشنة عضو بالسيرفر ليتم طرده**`);
    if(banUser.bannable) return message.channel.send(`**:heavy_multiplication_x: | لا يمكنك تبنيد احد لديه رتبة اعلى مني أو لديه نفس رتبتي**`);
    if(!banReason) banReason = 'لم يتم التحديد';
 
    if(!banDuration) {
      banDuration = '0s';
    } else if(!banDuration.match(/[1-7][s,m,h,d,w]/)) {
       return message.channel.send(`**:heavy_multiplication_x: | يجب عليك تحديد مدة زمنية أو ترك هذه الخانة خالية ليتم اعطاءه باند مؤبد**`);
    }
 
    let banTime = banDuration.replace('s', ' ثانية') || banDuration.replace('d', ' يوم') || banDuration.replace('h', ' ساعة') || banDuration.replace('w', ' اسبوع') || banDuration.replace('m', ' دقيقة');
    var embed = new Discord.RichEmbed()
    .setTitle(`\`${message.guild.name}\``)
    .setColor('BLACK')
    .setThumbnail(banUser.avatarURL || banUser.user.avatarURL)
    .setDescription(`:black_circle: | معلومات الباند\n» \`بواسطة: ${message.author.tag}\`\n» \`المستخدم: ${banUser.tag || banUser.user.tag}\`\n» \`السبب: ${banReason}\`\n» \`المدة : ${banTime.replace(0, '')}\``);
    await banUser.send(embed).catch();
    await message.guild.member(banUser).ban({
      days: 7,
      reason: `Reason: ${banReason} || Duration: ${banDuration}`
    });
    await message.channel.send(`:ballot_box_with_check: | تم تبنيد الشخص .`);
 
    setTimeout(() => {
      if(banDuration === '0s') return;
 
      message.guild.unban(banUser).then(function(user, err) {
        if(err) return message.channel.send(`:heavy_multiplication_x: | ${banUser.user.username || banUser.username}, لم اقدر على فك الباند من الشخص`);
        message.channel.send(`:ballot_box_with_check: | ${banUser.user.username || banUser.username}, تم فك الباند عن الشخص`).catch();
      });
    }, ms(banDuration));
  }
});






client.login(process.env.BOT_TOKEN);
