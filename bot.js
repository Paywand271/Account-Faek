
// 20 token dane   
//
const Discord = require("discord.js");
const Canvas = require("canvas");
const fs = require("fs");
const cmd = require("node-cmd");
const config = require("./config.json");
const prefix = config.prefix;
const client = new Discord.Client();
const client2 = new Discord.Client();
const client3 = new Discord.Client();
const client4 = new Discord.Client();
const client5 = new Discord.Client();
const client6 = new Discord.Client();
const client7 = new Discord.Client();
const client8 = new Discord.Client();
const client9 = new Discord.Client();
const client10 = new Discord.Client();
const client11 = new Discord.Client();
const client12 = new Discord.Client();
const client13 = new Discord.Client(); // كههربا (حسن ياسر)
const client14 = new Discord.Client();
const client15 = new Discord.Client();
const client16 = new Discord.Client();
const client17 = new Discord.Client();
const client18 = new Discord.Client();
const client19 = new Discord.Client(); // كههربا (حسن ياسر)
const client20 = new Discord.Client();
const client21 = new Discord.Client();
const client22 = new Discord.Client();
const client23 = new Discord.Client();
const client24 = new Discord.Client();
const client25 = new Discord.Client();
const client26 = new Discord.Client();
const client27 = new Discord.Client();
const client28 = new Discord.Client();
const client29 = new Discord.Client();
const client30 = new Discord.Client();
const client31 = new Discord.Client();
const client32 = new Discord.Client();
const client33 = new Discord.Client();
const client34 = new Discord.Client();
const client35 = new Discord.Client();
const client36 = new Discord.Client();
const client37 = new Discord.Client();
const client38 = new Discord.Client();
const client39 = new Discord.Client();
const client40 = new Discord.Client();
const client41 = new Discord.Client();
const client42 = new Discord.Client();
const client43 = new Discord.Client();
const client44 = new Discord.Client();
const client45 = new Discord.Client();
const client46 = new Discord.Client();
const client47 = new Discord.Client();
const client48 = new Discord.Client();
const client49 = new Discord.Client();
const client50 = new Discord.Client();
const client51 = new Discord.Client();
const client52 = new Discord.Client();
const client53 = new Discord.Client();
const client54 = new Discord.Client();
const client55 = new Discord.Client();
const client56 = new Discord.Client();
const client57 = new Discord.Client();
const client58 = new Discord.Client();
const client59 = new Discord.Client();
const client60 = new Discord.Client();
const client61 = new Discord.Client();
const client62 = new Discord.Client();
const client63 = new Discord.Client();
const client64 = new Discord.Client();
const client65 = new Discord.Client();
const client66 = new Discord.Client();
const client67 = new Discord.Client();
const client68 = new Discord.Client();
const client69 = new Discord.Client();
const client70 = new Discord.Client();
const client71 = new Discord.Client();
const client72 = new Discord.Client();
const client73 = new Discord.Client();
const client74 = new Discord.Client();
const client75 = new Discord.Client();
const client76 = new Discord.Client();
const client77 = new Discord.Client();
const client78 = new Discord.Client();
const client79 = new Discord.Client();
const client80 = new Discord.Client();
const client81 = new Discord.Client();
const client82 = new Discord.Client();
const client83 = new Discord.Client();
const client84 = new Discord.Client();
const client85 = new Discord.Client();
const client86 = new Discord.Client();
const client87 = new Discord.Client();
const client88 = new Discord.Client();
const client89 = new Discord.Client();
const client90 = new Discord.Client();
const client91 = new Discord.Client();
const client92 = new Discord.Client();
const client93 = new Discord.Client();
const client94 = new Discord.Client();
const client95 = new Discord.Client();
const client96 = new Discord.Client();
const client97 = new Discord.Client();
const client98 = new Discord.Client();
const client99 = new Discord.Client();
const client100 = new Discord.Client();
// كههربا (حسن ياسر)
const help = `**
       \`\`\`  Main Commands  :   \`\`\`
                  
- ${config.prefix}spam on - لتشغيل الاسبام 
         
- ${config.prefix}spam off - لايقاف الاسبام
         
- ${config.groupnm}[NumberACC] - لاستخدام امر تحويل الفلوس (Say CODE)

- ${config.prefix}react - لضافة ريأكت علي اي رسالة
         
- ${config.prefix}stayvoice - لتثبيت الحسابات في روم صوتي

- ${config.prefix}randomava - لضافة صورة عشوائي لكل حساب
         
- ${config.prefix}join [LINK INVITE] - لـ اضافة الحسابات في اي سيرفر 

- ${config.prefix}friend [ID USER] - لـ ارسال طلبات صداقة بـ الحسابات

- ${config.prefix}dly - لجمع المرتب اليومي من جميع الحسابات 

- ${config.prefix}prof - لظهار جميع معلومات الحسابات في البروبوت

- ${config.prefix}cc - لظهار رصيد الحسابات في البروبوت

         \`\`\` Admin Commands : \`\`\` 
                  
- ${config.prefix}setownerID [ID NEW OWNER] - لـ تغير ايدي الصاحب
                  
- ${config.prefix}setserverID [ID SERVER SPAM] - لـ تحديد سيرفر الاسبام
                  
- ${config.prefix}setchannelID [ID CHANNEL SPAM] - لـ تحديد روم الاسبام
                  
- ${config.prefix}settimeSpam [TIME SPAM] - لتحديد سرعة الاسبام
                  
- ${config.prefix}settimeStop [TIME STOP SPAM] - لتحديد مدة توقف الاسبام بعد تشغيلة
                  
- ${config.prefix}reload - لـ اعادة تشغيل البوت  بعد تغير بيانات JSON (مهم جدا بعد م تستخدم اوامر الادمن)

         
**`;
// كههربا (حسن ياسر)
//embed
//embed
client6.on("message", message => {
if (message.author.bot) return;

 let prefix = ">"
let command = message.content.split(" ")[0];
command = command.slice(prefix.length);

let args = message.content.split(" ").slice(1);

// +say
if (command === "say") {
if (!message.channel.guild)
return message.channel
.send("ببورە ئەم ئەمرە تەنها بۆ سێرفەرە")
.then(m => m.delete(5000));
if (!message.member.hasPermission("ADMINISTRATOR"))
return message.channel.send("ببورە ئەم دەسەڵاتەت نیە ADMINISTRATOR");
message.delete();
message.channel.sendMessage(args.join(" "));
} 

if (command == "embed") {
if (!message.channel.guild)
return message.channel
.send("ببورە ئەم ئەمرە تەنها بۆ سێرفەرە")
.then(m => m.delete(5000));
if (!message.member.hasPermission("MANAGE_MESSAGES"))
return message.channel.send("ببورە ئەم دەسەڵاتەت نیە MANAGE_MESSAGES");
let say = new Discord.RichEmbed()
.setDescription(args.join(" "))
.setColor(0x23b2d6);
message.channel.sendEmbed(say);
message.delete();
}
});





const err = `** \`\`\`  [ERORR] : لازم تسوي رتبة بـ اسم  \`\`\`
         \`\` Role.Kahrbaa \`\` **`;

// ======= [ settings JSON   ] ======== //
const dinfo = JSON.parse(fs.readFileSync("./data.json", "UTF8"));
client.on("message", async msg => {
  if (!msg.guild) return;
  if (msg.author.bot) return;
  if (!dinfo)
    dinfo = {
      // جمــيع الحقوق محفوظة لدي "Kahrbaa"
      owner: config.kahrbaaid,
      serverid: "NONE",
      channelid: "NONE", // كههربا (حسن ياسر)
      timespam: "NONE",
      timestop: "NONE"
    };
  if (msg.content.startsWith(config.prefix + "setownerID")) {
    // كههربا (حسن ياسر)
    if (msg.channel.type == "dm")
      // جمــيع الحقوق محفوظة لدي "Kahrbaa"
      return msg.reply("** لا تستيطع استخدام الامر علي الخاص .. **");
    if (!dinfo.owner.includes(msg.author.id)) return;
    let args = msg.content
      .split(" ")
      .slice(1)
      .join(" ");
    if (!args) return msg.channel.send("**قم بوضع ايدي **");
    if (args.length > 18 || args.length <= 17) {
      return msg.channel.send("** تـأكد من ايدي  **");
    }
    if (isNaN(args)) return msg.channel.send("**__الارقام فقط__!**");
    dinfo.owner = args;
    await msg
      .reply(`** __ تم وضع ايدي جديد لصاحب التوكانات __  \`${args}\`**`)
      .then(m => m.delete(5000));
    fs.writeFile("./data.json", JSON.stringify(dinfo), function(a) {
      if (a) throw a;
    });
    await cmd.run("refresh");
  }
  if (msg.content.startsWith(config.prefix + "setserverID")) {
    if (msg.channel.type == "dm")
      // جمــيع الحقوق محفوظة لدي "Kahrbaa"
      return msg.reply("** لا تستيطع استخدام الامر علي الخاص .. **");
    if (!dinfo.owner.includes(msg.author.id)) return;
    let args = msg.content
      .split(" ")
      .slice(1)
      .join(" ");
    if (!args) return msg.channel.send("**قم بوضع ايدي **");
    if (args.length > 18 || args.length <= 17) {
      return msg.channel.send("** تـأكد من ايدي  **");
    }
    if (isNaN(args)) return msg.channel.send("**__الارقام فقط__!**"); // جمــيع الحقوق محفوظة لدي "Kahrbaa"
    dinfo.serverid = args;
    await msg
      .reply(`** __ تم وضع ايدي جديد لسيرفر الاسبام __  \`${args}\`**`)
      .then(m => m.delete(5000));
    fs.writeFile("./data.json", JSON.stringify(dinfo), function(a) {
      if (a) throw a;
    });
  }
  if (msg.content.startsWith(config.prefix + "setchannelID")) {
    if (msg.channel.type == "dm")
      return msg.reply("** لا تستيطع استخدام الامر علي الخاص .. **");
    if (!dinfo.owner.includes(msg.author.id)) return;
    let args = msg.content
      .split(" ")
      .slice(1)
      .join(" ");
    if (!args) return msg.channel.send("**قم بوضع ايدي **");
    if (args.length > 18 || args.length <= 17) {
      return msg.channel.send("** تـأكد من ايدي  **");
    }
    if (isNaN(args)) return msg.channel.send("**__الارقام فقط__!**");
    dinfo.channelid = args;
    await msg
      .reply(`** __ تم وضع ايدي جديد لروم الاسبام __  \`${args}\`**`)
      .then(m => m.delete(5000));
    fs.writeFile("./data.json", JSON.stringify(dinfo), function(a) {
      if (a) throw a;
    });
  }
  if (msg.content.startsWith(config.prefix + "settimeSpam")) {
    // جمــيع الحقوق محفوظة لدي "Kahrbaa"
    if (msg.channel.type == "dm")
      return msg.reply("** لا تستيطع استخدام الامر علي الخاص .. **");
    if (!dinfo.owner.includes(msg.author.id)) return;
    let args = msg.content
      .split(" ")
      .slice(1)
      .join(" ");
    if (!args) return msg.channel.send("**قم بوضع وقت الاسبام بـ الثواني **");
    if (isNaN(args)) return msg.channel.send("**__الارقام فقط__!**"); // جمــيع الحقوق محفوظة لدي "Kahrbaa"
    dinfo.timespam = args;
    await msg
      .reply(`** __ تم اضافة مدة ارسال الاسبام ب الثواني __  \`${args}\`**`)
      .then(m => m.delete(5000));
    fs.writeFile("./data.json", JSON.stringify(dinfo), function(a) {
      if (a) throw a;
    });
  }
  if (msg.content.startsWith(config.prefix + "settimeStop")) {
    // جمــيع الحقوق محفوظة لدي "Kahrbaa"
    if (msg.channel.type == "dm")
      return msg.reply("** لا تستيطع استخدام الامر علي الخاص .. **");
    if (!dinfo.owner.includes(msg.author.id)) return;
    let args = msg.content
      .split(" ")
      .slice(1)
      .join(" ");
    if (!args)
      return msg.channel.send(
        "** قم بوضع وقت توقف البوت بعد بداء الاسبام بـ الساعات **"
      );
    if (isNaN(args)) return msg.channel.send("**__الارقام فقط__!**"); // جمــيع الحقوق محفوظة لدي "Kahrbaa"
    dinfo.timestop = args;
    await msg
      .reply(`** __ تم اضافة مدة توقف الاسبام بـ الساعات  __  \`${args}\`**`)
      .then(m => m.delete(5000));
    fs.writeFile("./data.json", JSON.stringify(dinfo), function(a) {
      if (a) throw a;
    });
  }
}); // جمــيع الحقوق محفوظة لدي "Kahrbaa"

client.on("message", async message => {
  if (message.content === prefix + "reset") {
    if (!dinfo.owner.includes(message.author.id)) return; // جمــيع الحقوق محفوظة لدي "Kahrbaa"
    dinfo.serverid = "NONE";
    dinfo.channelid = "NONE";
    dinfo.timespam = "NONE"; // جمــيع الحقوق محفوظة لدي "Kahrbaa"
    dinfo.timestop = "NONE";
    message.channel.send(`**⚠️ restsettings , <@${dinfo.owner}>**`);
    fs.writeFile("./data.json", JSON.stringify(dinfo), function(a) {
      if (a) throw a;
    });
    await cmd.run("refresh"); // جمــيع الحقوق محفوظة لدي "Kahrbaa"
  }
});

// ======= [ settings JSON - END   ] ======== //

// جمــيع الحقوق محفوظة لدي "Kahrbaa"
// ======= [ Reload JSON   ] ======== //
client.on("message", async message => {
  if (message.author.id !== dinfo.owner) return;
  if (message.content === config.prefix + "reload") {
    await cmd.run("refresh");
    await message.channel.send("Done,");
  }
});
// ======= [ Reload JSON - END   ] ======== //

// جمــيع الحقوق محفوظة لدي "Kahrbaa"
// ======= [ Console LOG    ] ======== //
client.on("ready", () => {
  console.log(`[Kahrbaa] : الحساب رقم واحد يعمل`);
  console.log(`Hi ${client.user.tag} , This Code by : Kahrbaa `);
  console.log(`i Have  [ " ${client.guilds.size} " ]`);
}); // جمــيع الحقوق محفوظة لدي "Kahrbaa"
client2.on("ready", () => {
  console.log(`[Kahrbaa] : الحساب رقم اثنين يعمل `);
  console.log(`Hi ${client2.user.tag} , This Code by : Kahrbaa `);
  console.log(`i Have  [ " ${client2.guilds.size} " ]`); // جمــيع الحقوق محفوظة لدي "Kahrbaa"
});
client3.on("ready", () => {
  console.log(`[Kahrbaa] : الحساب رقم 3 يعمل`);
  console.log(`Hi ${client3.user.tag} , This Code by : Kahrbaa `);
  console.log(`i Have  [ " ${client3.guilds.size} " ]`);
});
client4.on("ready", () => {
  console.log(`[Kahrbaa] : الحساب رقم 4 يعمل`);
  console.log(`Hi ${client4.user.tag} , This Code by : Kahrbaa `);
  console.log(`i Have  [ " ${client4.guilds.size} " ]`);
});
client5.on("ready", () => {
  console.log(`[Kahrbaa] : الحساب رقم 5 يعمل`);
  console.log(`Hi ${client5.user.tag} , This Code by : Kahrbaa `);
  console.log(`i Have  [ " ${client5.guilds.size} " ]`);
});
client6.on("ready", () => {
  console.log(`[Kahrbaa] : الحساب رقم 6 يعمل`);
  console.log(`Hi ${client6.user.tag} , This Code by : Kahrbaa `);
  console.log(`i Have  [ " ${client6.guilds.size} " ]`);
});
client7.on("ready", () => {
  console.log(`[Kahrbaa] : الحساب رقم 7 يعمل`);
  console.log(`Hi ${client7.user.tag} , This Code by : Kahrbaa `);
  console.log(`i Have  [ " ${client7.guilds.size} " ]`);
});
client8.on("ready", () => {
  console.log(`[Kahrbaa] : الحساب رقم 8 يعمل`);
  console.log(`Hi ${client8.user.tag} , This Code by : Kahrbaa `);
  console.log(`i Have  [ " ${client8.guilds.size} " ]`);
});
client9.on("ready", () => {
  console.log(`[Kahrbaa] : الحساب رقم 9 يعمل`);
  console.log(`Hi ${client9.user.tag} , This Code by : Kahrbaa `);
  console.log(`i Have  [ " ${client9.guilds.size} " ]`);
});
client10.on("ready", () => {
  console.log(`[Kahrbaa] : الحساب رقم 10 يعمل`);
  console.log(`Hi ${client10.user.tag} , This Code by : Kahrbaa `);
  console.log(`i Have  [ " ${client10.guilds.size} " ]`);
});
client11.on("ready", () => {
  console.log(`[Kahrbaa] : الحساب رقم 11 يعمل`);
  console.log(`Hi ${client11.user.tag} , This Code by : Kahrbaa `);
  console.log(`i Have  [ " ${client11.guilds.size} " ]`);
});
client12.on("ready", () => {
  console.log(`[Kahrbaa] : الحساب رقم 12 يعمل`);
  console.log(`Hi ${client12.user.tag} , This Code by : Kahrbaa `);
  console.log(`i Have  [ " ${client12.guilds.size} " ]`);
});
client13.on("ready", () => {
  console.log(`[Kahrbaa] : الحساب رقم 13 يعمل`);
  console.log(`Hi ${client13.user.tag} , This Code by : Kahrbaa `);
  console.log(`i Have  [ " ${client13.guilds.size} " ]`);
});
client14.on("ready", () => {
  console.log(`[Kahrbaa] : الحساب رقم 14 يعمل`);
  console.log(`Hi ${client14.user.tag} , This Code by : Kahrbaa `);
  console.log(`i Have  [ " ${client14.guilds.size} " ]`);
});
client15.on("ready", () => {
  console.log(`[Kahrbaa] : الحساب رقم 15 يعمل`);
  console.log(`Hi ${client15.user.tag} , This Code by : Kahrbaa `);
  console.log(`i Have  [ " ${client15.guilds.size} " ]`);
});
client16.on("ready", () => {
  console.log(`[Kahrbaa] : الحساب رقم 16 يعمل`);
  console.log(`Hi ${client16.user.tag} , This Code by : Kahrbaa `);
  console.log(`i Have  [ " ${client16.guilds.size} " ]`);
});
client17.on("ready", () => {
  console.log(`[Kahrbaa] : الحساب رقم 17 يعمل`);
  console.log(`Hi ${client17.user.tag} , This Code by : Kahrbaa `);
  console.log(`i Have  [ " ${client17.guilds.size} " ]`);
});
client18.on("ready", () => {
  console.log(`[Kahrbaa] : الحساب رقم 18 يعمل`);
  console.log(`Hi ${client18.user.tag} , This Code by : Kahrbaa `);
  console.log(`i Have  [ " ${client18.guilds.size} " ]`);
});
client19.on("ready", () => {
  console.log(`[Kahrbaa] : الحساب رقم 19 يعمل`);
  console.log(`Hi ${client19.user.tag} , This Code by : Kahrbaa `);
  console.log(`i Have  [ " ${client19.guilds.size} " ]`);
});
client20.on("ready", () => {
  console.log(`[Kahrbaa] : الحساب رقم 20 يعمل`);
  console.log(`Hi ${client20.user.tag} , This Code by : Kahrbaa `);
  console.log(`i Have  [ " ${client20.guilds.size} " ]`);
});
// ==== [مهم جدااا ] ==== //
const KahDEV = require("request");
const invitecode = config.invite;
client.on("ready", () => {
  console.log(`[BOT] ${client.user.username} Ready!`);
  KahDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN }
  });
});

client2.on("ready", () => {
  console.log(`[BOT] ${client2.user.username} Ready!`);
  KahDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN2 }
  });
});

client3.on("ready", () => {
  console.log(`[BOT] ${client3.user.username} Ready!`);
  KahDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN3 }
  });
});

client4.on("ready", () => {
  console.log(`[BOT] ${client4.user.username} Ready!`);
  KahDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN4 }
  });
});

client5.on("ready", () => {
  console.log(`[BOT] ${client5.user.username} Ready!`);
  KahDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN5 }
  });
});

client6.on("ready", () => {
  console.log(`[BOT] ${client6.user.username} Ready!`);
  KahDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN6 }
  });
});

client7.on("ready", () => {
  console.log(`[BOT] ${client7.user.username} Ready!`);
  KahDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN7 }
  });
});

client8.on("ready", () => {
  console.log(`[BOT] ${client8.user.username} Ready!`);
  KahDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN8 }
  });
});

client9.on("ready", () => {
  console.log(`[BOT] ${client9.user.username} Ready!`);
  KahDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN9 }
  });
});

client10.on("ready", () => {
  console.log(`[BOT] ${client10.user.username} Ready!`);
  KahDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN10 }
  });
});

client11.on("ready", () => {
  console.log(`[BOT] ${client11.user.username} Ready!`);
  KahDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN11 }
  });
});

client12.on("ready", () => {
  console.log(`[BOT] ${client12.user.username} Ready!`);
  KahDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN12 }
  });
});

client13.on("ready", () => {
  console.log(`[BOT] ${client13.user.username} Ready!`);
  KahDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN13 }
  });
});

client14.on("ready", () => {
  console.log(`[BOT] ${client14.user.username} Ready!`);
  KahDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN14 }
  });
});

client15.on("ready", () => {
  console.log(`[BOT] ${client15.user.username} Ready!`);
  KahDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN15 }
  });
});

client16.on("ready", () => {
  console.log(`[BOT] ${client16.user.username} Ready!`);
  KahDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN16 }
  });
});

client17.on("ready", () => {
  console.log(`[BOT] ${client17.user.username} Ready!`);
  KahDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN17 }
  });
});

client18.on("ready", () => {
  console.log(`[BOT] ${client18.user.username} Ready!`);
  KahDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN18 }
  });
});

client19.on("ready", () => {
  console.log(`[BOT] ${client19.user.username} Ready!`);
  KahDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN19 }
  });
});

client20.on("ready", () => {
  console.log(`[BOT] ${client20.user.username} Ready!`);
  KahDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN20 }
  });
});
// DONE //
// ======= [ Console LOG - END   ] ======== //

client.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.toLowerCase() === config.prefix + "help") {
    message.delete(5000);
    if (!message.channel.guild) return;
    message.channel.send(help);
  }
});

// ======= [ Say MODE  ] ======== //
client.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "1") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.Kahrbaa");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});

client2.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "2") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.Kahrbaa");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});

client3.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "3") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.Kahrbaa");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});

client4.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "4") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.Kahrbaa");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});

client5.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "5") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.Kahrbaa");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});
// كههربا (حسن ياسر)
client6.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);
  // كههربا (حسن ياسر)
  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "6") {
    // كههربا (حسن ياسر)
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.Kahrbaa");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});

// كههربا (حسن ياسر)
client7.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "7") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.Kahrbaa");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});

client8.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return; // جمــيع الحقوق محفوظة لدي "Kahrbaa"

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "8") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.Kahrbaa");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000)); // جمــيع الحقوق محفوظة لدي "Kahrbaa"
    message.channel.send(args.join("  "));
    message.delete();
  }
});

client9.on("message", message => {
  if (message.author.bot) return; // جمــيع الحقوق محفوظة لدي "Kahrbaa"
  if (!message.content.startsWith(config.prefix)) return;
  // جمــيع الحقوق محفوظة لدي "Kahrbaa"
  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "9") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.Kahrbaa");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});

client10.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "10") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.Kahrbaa");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});
client11.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "11") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.Kahrbaa");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});

client12.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "12") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.Kahrbaa");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});

client13.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "13") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.Kahrbaa");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});

client14.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "14") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.Kahrbaa");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});

client15.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "15") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.Kahrbaa");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});

client16.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "16") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.Kahrbaa");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});
// كههربا (حسن ياسر)

client17.on("message", message => {
  if (message.author.bot) return; // كههربا (حسن ياسر)
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);
  // كههربا (حسن ياسر)
  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "17") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.Kahrbaa");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});

client18.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);
  // جمــيع الحقوق محفوظة لدي "Kahrbaa"
  let args = message.content.split(" ").slice(1);

  // جمــيع الحقوق محفوظة لدي "Kahrbaa"
  if (command == config.groupnm + "18") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.Kahrbaa");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000)); // جمــيع الحقوق محفوظة لدي "Kahrbaa"
    message.channel.send(args.join("  "));
    message.delete();
  }
});

// جمــيع الحقوق محفوظة لدي "Kahrbaa" // جمــيع الحقوق محفوظة لدي "Kahrbaa"
client19.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1); // جمــيع الحقوق محفوظة لدي "Kahrbaa"

  if (command == config.groupnm + "19") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.Kahrbaa"); // جمــيع الحقوق محفوظة لدي "Kahrbaa"
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});

// جمــيع الحقوق محفوظة لدي "Kahrbaa"
client20.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return; // جمــيع الحقوق محفوظة لدي "Kahrbaa"

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length); // جمــيع الحقوق محفوظة لدي "Kahrbaa"

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "20") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.Kahrbaa");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});
// ======= [ Say MODE - END   ] ======== //

// ======= [ MODE - Join Server , add Friend   ] ======== //
client.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});

client2.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
client3.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
client4.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
client5.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
client6.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
client7.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
client8.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
client9.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
client10.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
client11.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});

client12.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
client13.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
client14.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
client15.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
client16.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
client17.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
client18.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
client19.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
client20.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
// ======= [ MODE - Join Server , add Friend END  ] ======== //

// ======= [ MODE - React MSG  ] ======== //
client.on("message", async message => {
  if (message.content.startsWith(prefix + "react")) {
    if (!dinfo.owner.includes(message.author.id)) return;
    let args = message.content.split(" ").slice(1);
    console.log(
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")
    );
    if (!args[0])
      return message.channel.send(
        " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
      );
    if (args[0].length > 18 || args[0].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الروم``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[1])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    if (args[1].length > 18 || args[1].length <= 17) {
      return message.channel
        .send("")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[2])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    let channel = await message.guild.channels.get(args[0]);
    if (!channel) return;
    let msg = await channel.fetchMessage(args[1]);
    if (!msg) return;
    if (!args.slice(2)) return;
    if (
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2] &&
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2].length == 18
    ) {
      try {
        await msg.react(
          client.emojis.get(
            args
              .slice(2)
              .join(" ")
              .replace(/\<|\>/g, "")
              .split(":")[2]
          )
        );
      } catch (e) {
        return;
      }
    } else {
      try {
        await msg.react(args[2]);
      } catch (e) {
        return;
      }
    }
  }
});
client2.on("message", async message => {
  if (message.content.startsWith(prefix + "j")) {
    if (!dinfo.owner.includes(message.author.id)) return;
    let args = message.content.split(" ").slice(1);
    console.log(
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")
    );
    if (!args[0])
      return message.channel.send(
        " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
      );
    if (args[0].length > 18 || args[0].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الروم``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[1])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    if (args[1].length > 18 || args[1].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الرسالة``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[2])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    let channel = await message.guild.channels.get(args[0]);
    if (!channel) return;
    let msg = await channel.fetchMessage(args[1]);
    if (!msg) return;
    if (!args.slice(2)) return;
    if (
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2] &&
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2].length == 18
    ) {
      try {
        await msg.react(
          client2.emojis.get(
            args
              .slice(2)
              .join(" ")
              .replace(/\<|\>/g, "")
              .split(":")[2]
          )
        );
      } catch (e) {
        // كههربا (حسن ياسر)
        return;
      } // كههربا (حسن ياسر)
    } else {
      try {
        await msg.react(args[2]);
      
      } catch (e) {
        return;
      } // كههربا (حسن ياسر)
    }
  } // كههربا (حسن ياسر)
}); // كههربا (حسن ياسر)
client3.on("message", async message => {
  if (message.content.startsWith(prefix + "react")) {
    if (!dinfo.owner.includes(message.author.id)) return;
    let args = message.content.split(" ").slice(1);
    console.log(
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")
    );
    if (!args[0])
      return message.channel.send(
        " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
      );
    if (args[0].length > 18 || args[0].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الروم``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[1])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    if (args[1].length > 18 || args[1].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الرسالة``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[2])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    let channel = await message.guild.channels.get(args[0]);
    if (!channel) return;
    let msg = await channel.fetchMessage(args[1]);
    if (!msg) return;
    if (!args.slice(2)) return;
    if (
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2] &&
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2].length == 18
    ) {
      try {
        await msg.react(
          client3.emojis.get(
            args
              .slice(2)
              .join(" ")
              .replace(/\<|\>/g, "")
              .split(":")[2]
          )
        );
      } catch (e) {
        return;
      }
    } else {
      try {
        await msg.react(args[2]);
        
      } catch (e) {
        return;
      }
    }
  }
});
client4.on("message", async message => {
  if (message.content.startsWith(prefix + "react")) {
    if (!dinfo.owner.includes(message.author.id)) return;
    let args = message.content.split(" ").slice(1);
    console.log(
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")
    );
    if (!args[0])
      return message.channel.send(
        " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
      );
    if (args[0].length > 18 || args[0].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الروم``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[1])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    if (args[1].length > 18 || args[1].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الرسالة``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[2])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    let channel = await message.guild.channels.get(args[0]);
    if (!channel) return;
    let msg = await channel.fetchMessage(args[1]);
    if (!msg) return;
    if (!args.slice(2)) return;
    if (
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2] &&
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2].length == 18
    ) {
      try {
        await msg.react(
          client4.emojis.get(
            args
              .slice(2)
              .join(" ")
              .replace(/\<|\>/g, "")
              .split(":")[2]
          )
        );
      } catch (e) {
        return;
      }
    } else {
      try {
        await msg.react(args[2]);
         
      } catch (e) {
        return;
      }
    }
  }
});
client5.on("message", async message => {
  if (message.content.startsWith(prefix + "react")) {
    if (!dinfo.owner.includes(message.author.id)) return;
    let args = message.content.split(" ").slice(1);
    console.log(
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")
    );
    if (!args[0])
      return message.channel.send(
        " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
      );
    if (args[0].length > 18 || args[0].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الروم``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[1])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    if (args[1].length > 18 || args[1].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الرسالة``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[2])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    let channel = await message.guild.channels.get(args[0]);
    if (!channel) return;
    let msg = await channel.fetchMessage(args[1]);
    if (!msg) return;
    if (!args.slice(2)) return;
    if (
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2] &&
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2].length == 18
    ) {
      try {
        await msg.react(
          client5.emojis.get(
            args
              .slice(2)
              .join(" ")
              .replace(/\<|\>/g, "")
              .split(":")[2]
          )
        );
      } catch (e) {
        return;
      }
    } else {
      try {
        await msg.react(args[2]);
         
      } catch (e) {
        return;
      }
    }
  }
});
client6.on("message", async message => {
  if (message.content.startsWith(prefix + "react")) {
    if (!dinfo.owner.includes(message.author.id)) return;
    let args = message.content.split(" ").slice(1);
    console.log(
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")
    );
    if (!args[0])
      return message.channel.send(
        " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
      );
    if (args[0].length > 18 || args[0].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الروم``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[1])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    if (args[1].length > 18 || args[1].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الرسالة``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[2])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    let channel = await message.guild.channels.get(args[0]);
    if (!channel) return;
    let msg = await channel.fetchMessage(args[1]);
    if (!msg) return;
    if (!args.slice(2)) return;
    if (
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2] &&
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2].length == 18
    ) {
      try {
        await msg.react(
          client6.emojis.get(
            args
              .slice(2)
              .join(" ")
              .replace(/\<|\>/g, "")
              .split(":")[2]
          )
        );
      } catch (e) {
        return;
      }
    } else {
      try {
        await msg.react(args[2]);
        
      } catch (e) {
        return;
      }
    }
  }
});
client7.on("message", async message => {
  if (message.content.startsWith(prefix + "react")) {
    if (!dinfo.owner.includes(message.author.id)) return; // جمــيع الحقوق محفوظة لدي "Kahrbaa"
    let args = message.content.split(" ").slice(1);
    console.log(
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")
    );
    if (!args[0])
      return message.channel.send(
        " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
      );
    if (args[0].length > 18 || args[0].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الروم``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[1])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    if (args[1].length > 18 || args[1].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الرسالة``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[2])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    let channel = await message.guild.channels.get(args[0]);
    if (!channel) return;
    let msg = await channel.fetchMessage(args[1]); // جمــيع الحقوق محفوظة لدي "Kahrbaa"
    if (!msg) return;
    if (!args.slice(2)) return;
    if (
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2] &&
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2].length == 18
    ) {
      try {
        // جمــيع الحقوق محفوظة لدي "Kahrbaa"

        await msg.react(
          client7.emojis.get(
            args
              .slice(2)
              .join(" ")
              .replace(/\<|\>/g, "")
              .split(":")[2]
          )
        );
      } catch (e) {
        return; // جمــيع الحقوق محفوظة لدي "Kahrbaa"
      }
    } else {
      // جمــيع الحقوق محفوظة لدي "Kahrbaa"
      try {
        await msg.react(args[2]);
        
      } catch (e) {
        // جمــيع الحقوق محفوظة لدي "Kahrbaa"
        return;
      }
    }
  }
});
client8.on("message", async message => {
  if (message.content.startsWith(prefix + "react")) {
    if (!dinfo.owner.includes(message.author.id)) return;
    let args = message.content.split(" ").slice(1);
    console.log(
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")
    );
    if (!args[0])
      return message.channel.send(
        " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
      );
    if (args[0].length > 18 || args[0].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الروم``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[1])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    if (args[1].length > 18 || args[1].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الرسالة``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[2])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    let channel = await message.guild.channels.get(args[0]);
    if (!channel) return;
    let msg = await channel.fetchMessage(args[1]);
    if (!msg) return;
    if (!args.slice(2)) return;
    if (
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2] &&
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2].length == 18
    ) {
      try {
        await msg.react(
          client8.emojis.get(
            args
              .slice(2)
              .join(" ")
              .replace(/\<|\>/g, "")
              .split(":")[2]
          )
        );
      } catch (e) {
        return;
      }
    } else {
      try {
        await msg.react(args[2]);
      
      } catch (e) {
        return;
      }
    }
  }
});
client9.on("message", async message => {
  if (message.content.startsWith(prefix + "react")) {
    if (!dinfo.owner.includes(message.author.id)) return;
    let args = message.content.split(" ").slice(1);
    console.log(
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")
    );
    if (!args[0])
      return message.channel.send(
        " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
      );
    if (args[0].length > 18 || args[0].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الروم``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[1])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    if (args[1].length > 18 || args[1].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الرسالة``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[2])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    let channel = await message.guild.channels.get(args[0]);
    if (!channel) return;
    let msg = await channel.fetchMessage(args[1]);
    if (!msg) return;
    if (!args.slice(2)) return;
    if (
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2] &&
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2].length == 18
    ) {
      try {
        await msg.react(
          client9.emojis.get(
            args
              .slice(2)
              .join(" ")
              .replace(/\<|\>/g, "")
              .split(":")[2]
          )
        );
      } catch (e) {
        return;
      }
    } else {
      try {
        await msg.react(args[2]);
        
      } catch (e) {
        return;
      }
    }
  }
});
client10.on("message", async message => {
  if (message.content.startsWith(prefix + "react")) {
    if (!dinfo.owner.includes(message.author.id)) return;
    let args = message.content.split(" ").slice(1);
    console.log(
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")
    );
    if (!args[0])
      return message.channel.send(
        " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
      );
    if (args[0].length > 18 || args[0].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الروم``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[1])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    if (args[1].length > 18 || args[1].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الرسالة``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[2])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    let channel = await message.guild.channels.get(args[0]);
    if (!channel) return;
    let msg = await channel.fetchMessage(args[1]);
    if (!msg) return;
    if (!args.slice(2)) return;
    if (
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2] &&
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2].length == 18
    ) {
      try {
        await msg.react(
          client10.emojis.get(
            args
              .slice(2)
              .join(" ")
              .replace(/\<|\>/g, "")
              .split(":")[2]
          )
        );
      } catch (e) {
        return;
      }
    } else {
      try {
        await msg.react(args[2]);
         
      } catch (e) {
        return;
      }
    }
  }
});
client11.on("message", async message => {
  if (message.content.startsWith(prefix + "react")) {
    if (!dinfo.owner.includes(message.author.id)) return;
    let args = message.content.split(" ").slice(1);
    console.log(
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")
    );
    if (!args[0])
      return message.channel.send(
        " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
      );
    if (args[0].length > 18 || args[0].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الروم``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[1])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    if (args[1].length > 18 || args[1].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الرسالة``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[2])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    let channel = await message.guild.channels.get(args[0]);
    if (!channel) return;
    let msg = await channel.fetchMessage(args[1]);
    if (!msg) return;
    if (!args.slice(2)) return;
    if (
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2] &&
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2].length == 18
    ) {
      try {
        await msg.react(
          client11.emojis.get(
            args
              .slice(2)
              .join(" ")
              .replace(/\<|\>/g, "")
              .split(":")[2]
          )
        );
      } catch (e) {
        return;
      }
    } else {
      try {
        await msg.react(args[2]);
        
      } catch (e) {
        return;
      }
    }
  }
});
client12.on("message", async message => {
  if (message.content.startsWith(prefix + "react")) {
    if (!dinfo.owner.includes(message.author.id)) return;
    let args = message.content.split(" ").slice(1);
    console.log(
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")
    );
    if (!args[0])
      return message.channel.send(
        " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
      );
    if (args[0].length > 18 || args[0].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الروم``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[1])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    if (args[1].length > 18 || args[1].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الرسالة``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[2])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    let channel = await message.guild.channels.get(args[0]);
    if (!channel) return;
    let msg = await channel.fetchMessage(args[1]);
    if (!msg) return;
    if (!args.slice(2)) return;
    if (
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2] &&
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2].length == 18
    ) {
      try {
        await msg.react(
          client12.emojis.get(
            args
              .slice(2)
              .join(" ")
              .replace(/\<|\>/g, "")
              .split(":")[2]
          )
        );
      } catch (e) {
        return;
      }
    } else {
      try {
        await msg.react(args[2]);
        
      } catch (e) {
        return;
      }
    }
  }
});
client13.on("message", async message => {
  if (message.content.startsWith(prefix + "react")) {
    if (!dinfo.owner.includes(message.author.id)) return;
    let args = message.content.split(" ").slice(1);
    console.log(
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")
    );
    if (!args[0])
      return message.channel.send(
        " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
      );
    if (args[0].length > 18 || args[0].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الروم``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[1])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    if (args[1].length > 18 || args[1].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الرسالة``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[2])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    let channel = await message.guild.channels.get(args[0]);
    if (!channel) return;
    let msg = await channel.fetchMessage(args[1]);
    if (!msg) return;
    if (!args.slice(2)) return;
    if (
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2] &&
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2].length == 18
    ) {
      try {
        await msg.react(
          client13.emojis.get(
            args
              .slice(2)
              .join(" ")
              .replace(/\<|\>/g, "")
              .split(":")[2]
          )
        );
      } catch (e) {
        return;
      }
    } else {
      try {
        await msg.react(args[2]);
        
      } catch (e) {
        return;
      }
    }
  }
});
client14.on("message", async message => {
  if (message.content.startsWith(prefix + "react")) {
    if (!dinfo.owner.includes(message.author.id)) return;
    let args = message.content.split(" ").slice(1);
    console.log(
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")
    );
    if (!args[0])
      return message.channel.send(
        " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
      );
    if (args[0].length > 18 || args[0].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الروم``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[1])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    if (args[1].length > 18 || args[1].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الرسالة``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[2])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    let channel = await message.guild.channels.get(args[0]);
    if (!channel) return;
    let msg = await channel.fetchMessage(args[1]);
    if (!msg) return;
    if (!args.slice(2)) return;
    if (
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2] &&
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2].length == 18
    ) {
      try {
        await msg.react(
          client14.emojis.get(
            args
              .slice(2)
              .join(" ")
              .replace(/\<|\>/g, "")
              .split(":")[2]
          )
        );
      } catch (e) {
        return;
      }
    } else {
      try {
        await msg.react(args[2]);
         
      } catch (e) {
        return;
      }
    }
  }
});
client15.on("message", async message => {
  if (message.content.startsWith(prefix + "react")) {
    if (!dinfo.owner.includes(message.author.id)) return;
    let args = message.content.split(" ").slice(1);
    console.log(
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")
    );
    if (!args[0])
      return message.channel.send(
        " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
      );
    if (args[0].length > 18 || args[0].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الروم``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[1])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    if (args[1].length > 18 || args[1].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الرسالة``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[2])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    let channel = await message.guild.channels.get(args[0]);
    if (!channel) return;
    let msg = await channel.fetchMessage(args[1]);
    if (!msg) return;
    if (!args.slice(2)) return;
    if (
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2] &&
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2].length == 18
    ) {
      try {
        await msg.react(
          client15.emojis.get(
            args
              .slice(2)
              .join(" ")
              .replace(/\<|\>/g, "")
              .split(":")[2]
          )
        );
      } catch (e) {
        return;
      }
    } else {
      try {
        await msg.react(args[2]);
        
      } catch (e) {
        return;
      }
    }
  }
});
client16.on("message", async message => {
  if (message.content.startsWith(prefix + "react")) {
    if (!dinfo.owner.includes(message.author.id)) return;
    let args = message.content.split(" ").slice(1);
    console.log(
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")
    );
    if (!args[0])
      return message.channel.send(
        " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
      );
    if (args[0].length > 18 || args[0].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الروم``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[1])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    if (args[1].length > 18 || args[1].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الرسالة``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[2])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    let channel = await message.guild.channels.get(args[0]);
    if (!channel) return;
    let msg = await channel.fetchMessage(args[1]);
    if (!msg) return;
    if (!args.slice(2)) return;
    if (
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2] &&
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2].length == 18
    ) {
      try {
        await msg.react(
          client16.emojis.get(
            args
              .slice(2)
              .join(" ")
              .replace(/\<|\>/g, "")
              .split(":")[2]
          )
        );
      } catch (e) {
        return;
      }
    } else {
      try {
        await msg.react(args[2]);
        
      } catch (e) {
        return;
      }
    }
  }
});
client17.on("message", async message => {
  if (message.content.startsWith(prefix + "react")) {
    if (!dinfo.owner.includes(message.author.id)) return;
    let args = message.content.split(" ").slice(1);
    console.log(
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")
    );
    if (!args[0])
      return message.channel.send(
        " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
      );
    if (args[0].length > 18 || args[0].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الروم``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[1])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    if (args[1].length > 18 || args[1].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الرسالة``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[2])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    let channel = await message.guild.channels.get(args[0]);
    if (!channel) return;
    let msg = await channel.fetchMessage(args[1]);
    if (!msg) return;
    if (!args.slice(2)) return;
    if (
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2] &&
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2].length == 18
    ) {
      try {
        await msg.react(
          client17.emojis.get(
            args
              .slice(2)
              .join(" ")
              .replace(/\<|\>/g, "")
              .split(":")[2]
          )
        );
      } catch (e) {
        return;
      }
    } else {
      try {
        await msg.react(args[2]);
        
      } catch (e) {
        return;
      }
    }
  }
});
client18.on("message", async message => {
  if (message.content.startsWith(prefix + "react")) {
    if (!dinfo.owner.includes(message.author.id)) return;
    let args = message.content.split(" ").slice(1);
    console.log(
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")
    );
    if (!args[0])
      return message.channel.send(
        " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
      );
    if (args[0].length > 18 || args[0].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الروم``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[1])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    if (args[1].length > 18 || args[1].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الرسالة``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[2])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    let channel = await message.guild.channels.get(args[0]);
    if (!channel) return;
    let msg = await channel.fetchMessage(args[1]);
    if (!msg) return;
    if (!args.slice(2)) return;
    if (
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2] &&
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2].length == 18
    ) {
      try {
        await msg.react(
          client18.emojis.get(
            args
              .slice(2)
              .join(" ")
              .replace(/\<|\>/g, "")
              .split(":")[2]
          )
        );
      } catch (e) {
        return;
      }
    } else {
      try {
        await msg.react(args[2]);
        
      } catch (e) {
        return;
      }
    }
  }
});
client19.on("message", async message => {
  if (message.content.startsWith(prefix + "react")) {
    if (!dinfo.owner.includes(message.author.id)) return;
    let args = message.content.split(" ").slice(1);
    console.log(
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")
    );
    if (!args[0])
      return message.channel.send(
        " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
      );
    if (args[0].length > 18 || args[0].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الروم``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[1])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    if (args[1].length > 18 || args[1].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الرسالة``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[2])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    let channel = await message.guild.channels.get(args[0]);
    if (!channel) return;
    let msg = await channel.fetchMessage(args[1]);
    if (!msg) return;
    if (!args.slice(2)) return;
    if (
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2] &&
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2].length == 18
    ) {
      try {
        await msg.react(
          client19.emojis.get(
            args
              .slice(2)
              .join(" ")
              .replace(/\<|\>/g, "")
              .split(":")[2]
          )
        );
      } catch (e) {
        return;
      }
    } else {
      try {
        await msg.react(args[2]);
        
      } catch (e) {
        return;
      }
    }
  }
});
client20.on("message", async message => {
  if (message.content.startsWith(prefix + "react")) {
    if (!dinfo.owner.includes(message.author.id)) return;
    let args = message.content.split(" ").slice(1);
    console.log(
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")
    );
    if (!args[0])
      return message.channel.send(
        " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
      );
    if (args[0].length > 18 || args[0].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الروم``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[1])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    if (args[1].length > 18 || args[1].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الرسالة``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[2])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    let channel = await message.guild.channels.get(args[0]);
    if (!channel) return;
    let msg = await channel.fetchMessage(args[1]);
    if (!msg) return;
    if (!args.slice(2)) return;
    if (
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2] &&
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2].length == 18
    ) {
      try {
        await msg.react(
          client20.emojis.get(
            args
              .slice(2)
              .join(" ")
              .replace(/\<|\>/g, "")
              .split(":")[2]
          )
        );
      } catch (e) {
        return;
      }
    } else {
      try {
        await msg.react(args[2]);
        
      } catch (e) {
        return;
      }
    }
  }
});
client21.on("message", async message => {
if (message.content.startsWith(prefix + "react")) {
if (!dinfo.owner.includes(message.author.id)) return;
let args = message.content.split(" ").slice(1);
console.log(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")
);
if (!args[0])
return message.channel.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
);
if (args[0].length > 18 || args[0].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الروم``")
.then(message => message.delete(4000));
}
if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
if (!args[1])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
if (args[1].length > 18 || args[1].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الرسالة``")
.then(message => message.delete(4000));
}
if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
if (!args[2])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
let channel = await message.guild.channels.get(args[0]);
if (!channel) return;
let msg = await channel.fetchMessage(args[1]);
if (!msg) return;
if (!args.slice(2)) return;
if (
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2] &&
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2].length == 18
) {
try {
await msg.react(
client21.emojis.get(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2]
)
);
} catch (e) {
return;
}
} else {
try {
await msg.react(args[2]);

} catch (e) {
return;
}
}
}
});
client22.on("message", async message => {
if (message.content.startsWith(prefix + "react")) {
if (!dinfo.owner.includes(message.author.id)) return;
let args = message.content.split(" ").slice(1);
console.log(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")
);
if (!args[0])
return message.channel.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
);
if (args[0].length > 18 || args[0].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الروم``")
.then(message => message.delete(4000));
}
if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
if (!args[1])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
if (args[1].length > 18 || args[1].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الرسالة``")
.then(message => message.delete(4000));
}
if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
if (!args[2])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
let channel = await message.guild.channels.get(args[0]);
if (!channel) return;
let msg = await channel.fetchMessage(args[1]);
if (!msg) return;
if (!args.slice(2)) return;
if (
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2] &&
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2].length == 18
) {
try {
await msg.react(
client22.emojis.get(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2]
)
);
} catch (e) {
return;
}
} else {
try {
await msg.react(args[2]);

} catch (e) {
return;
}
}
}
});
client23.on("message", async message => {
if (message.content.startsWith(prefix + "react")) {
if (!dinfo.owner.includes(message.author.id)) return;
let args = message.content.split(" ").slice(1);
console.log(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")
);
if (!args[0])
return message.channel.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
);
if (args[0].length > 18 || args[0].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الروم``")
.then(message => message.delete(4000));
}
if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
if (!args[1])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
if (args[1].length > 18 || args[1].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الرسالة``")
.then(message => message.delete(4000));
}
if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
if (!args[2])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
let channel = await message.guild.channels.get(args[0]);
if (!channel) return;
let msg = await channel.fetchMessage(args[1]);
if (!msg) return;
if (!args.slice(2)) return;
if (
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2] &&
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2].length == 18
) {
try {
await msg.react(
client23.emojis.get(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2]
)
);
} catch (e) {
return;
}
} else {
try {
await msg.react(args[2]);

} catch (e) {
return;
}
}
}
});
client24.on("message", async message => {
if (message.content.startsWith(prefix + "react")) {
if (!dinfo.owner.includes(message.author.id)) return;
let args = message.content.split(" ").slice(1);
console.log(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")
);
if (!args[0])
return message.channel.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
);
if (args[0].length > 18 || args[0].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الروم``")
.then(message => message.delete(4000));
}
if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
if (!args[1])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
if (args[1].length > 18 || args[1].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الرسالة``")
.then(message => message.delete(4000));
}
if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
if (!args[2])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
let channel = await message.guild.channels.get(args[0]);
if (!channel) return;
let msg = await channel.fetchMessage(args[1]);
if (!msg) return;
if (!args.slice(2)) return;
if (
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2] &&
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2].length == 18
) {
try {
await msg.react(
client24.emojis.get(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2]
)
);
} catch (e) {
return;
}
} else {
try {
await msg.react(args[2]);

} catch (e) {
return;
}
}
}
});
client25.on("message", async message => {
if (message.content.startsWith(prefix + "react")) {
if (!dinfo.owner.includes(message.author.id)) return;
let args = message.content.split(" ").slice(1);
console.log(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")
);
if (!args[0])
return message.channel.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
);
if (args[0].length > 18 || args[0].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الروم``")
.then(message => message.delete(4000));
}
if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
if (!args[1])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
if (args[1].length > 18 || args[1].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الرسالة``")
.then(message => message.delete(4000));
}
if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
if (!args[2])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
let channel = await message.guild.channels.get(args[0]);
if (!channel) return;
let msg = await channel.fetchMessage(args[1]);
if (!msg) return;
if (!args.slice(2)) return;
if (
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2] &&
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2].length == 18
) {
try {
await msg.react(
client25.emojis.get(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2]
)
);
} catch (e) {
return;
}
} else {
try {
await msg.react(args[2]);

} catch (e) {
return;
}
}
}
});
client26.on("message", async message => {
if (message.content.startsWith(prefix + "react")) {
if (!dinfo.owner.includes(message.author.id)) return;
let args = message.content.split(" ").slice(1);
console.log(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")
);
if (!args[0])
return message.channel.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
);
if (args[0].length > 18 || args[0].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الروم``")
.then(message => message.delete(4000));
}
if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
if (!args[1])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
if (args[1].length > 18 || args[1].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الرسالة``")
.then(message => message.delete(4000));
}
if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
if (!args[2])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
let channel = await message.guild.channels.get(args[0]);
if (!channel) return;
let msg = await channel.fetchMessage(args[1]);
if (!msg) return;
if (!args.slice(2)) return;
if (
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2] &&
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2].length == 18
) {
try {
await msg.react(
client26.emojis.get(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2]
)
);
} catch (e) {
return;
}
} else {
try {
await msg.react(args[2]);

} catch (e) {
return;
}
}
}
});
client27.on("message", async message => {
if (message.content.startsWith(prefix + "react")) {
if (!dinfo.owner.includes(message.author.id)) return;
let args = message.content.split(" ").slice(1);
console.log(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")
);
if (!args[0])
return message.channel.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
);
if (args[0].length > 18 || args[0].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الروم``")
.then(message => message.delete(4000));
}
if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
if (!args[1])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
if (args[1].length > 18 || args[1].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الرسالة``")
.then(message => message.delete(4000));
}
if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
if (!args[2])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
let channel = await message.guild.channels.get(args[0]);
if (!channel) return;
let msg = await channel.fetchMessage(args[1]);
if (!msg) return;
if (!args.slice(2)) return;
if (
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2] &&
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2].length == 18
) {
try {
await msg.react(
client27.emojis.get(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2]
)
);
} catch (e) {
return;
}
} else {
try {
await msg.react(args[2]);

} catch (e) {
return;
}
}
}
});
client28.on("message", async message => {
if (message.content.startsWith(prefix + "react")) {
if (!dinfo.owner.includes(message.author.id)) return;
let args = message.content.split(" ").slice(1);
console.log(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")
);
if (!args[0])
return message.channel.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
);
if (args[0].length > 18 || args[0].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الروم``")
.then(message => message.delete(4000));
}
if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
if (!args[1])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
if (args[1].length > 18 || args[1].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الرسالة``")
.then(message => message.delete(4000));
}
if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
if (!args[2])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
let channel = await message.guild.channels.get(args[0]);
if (!channel) return;
let msg = await channel.fetchMessage(args[1]);
if (!msg) return;
if (!args.slice(2)) return;
if (
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2] &&
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2].length == 18
) {
try {
await msg.react(
client29.emojis.get(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2]
)
);
} catch (e) {
return;
}
} else {
try {
await msg.react(args[2]);

} catch (e) {
return;
}
}
}
});
client30.on("message", async message => {
if (message.content.startsWith(prefix + "react")) {
if (!dinfo.owner.includes(message.author.id)) return;
let args = message.content.split(" ").slice(1);
console.log(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")
);
if (!args[0])
return message.channel.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
);
if (args[0].length > 18 || args[0].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الروم``")
.then(message => message.delete(4000));
}
if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
if (!args[1])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
if (args[1].length > 18 || args[1].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الرسالة``")
.then(message => message.delete(4000));
}
if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
if (!args[2])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
let channel = await message.guild.channels.get(args[0]);
if (!channel) return;
let msg = await channel.fetchMessage(args[1]);
if (!msg) return;
if (!args.slice(2)) return;
if (
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2] &&
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2].length == 18
) {
try {
await msg.react(
client30.emojis.get(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2]
)
);
} catch (e) {
return;
}
} else {
try {
await msg.react(args[2]);

} catch (e) {
return;
}
}
}
});
client31.on("message", async message => {
if (message.content.startsWith(prefix + "react")) {
if (!dinfo.owner.includes(message.author.id)) return;
let args = message.content.split(" ").slice(1);
console.log(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")
);
if (!args[0])
return message.channel.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
);
if (args[0].length > 18 || args[0].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الروم``")
.then(message => message.delete(4000));
}
if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
if (!args[1])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
if (args[1].length > 18 || args[1].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الرسالة``")
.then(message => message.delete(4000));
}
if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
if (!args[2])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
let channel = await message.guild.channels.get(args[0]);
if (!channel) return;
let msg = await channel.fetchMessage(args[1]);
if (!msg) return;
if (!args.slice(2)) return;
if (
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2] &&
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2].length == 18
) {
try {
await msg.react(
client31.emojis.get(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2]
)
);
} catch (e) {
return;
}
} else {
try {
await msg.react(args[2]);

} catch (e) {
return;
}
}
}
});
client32.on("message", async message => {
if (message.content.startsWith(prefix + "react")) {
if (!dinfo.owner.includes(message.author.id)) return;
let args = message.content.split(" ").slice(1);
console.log(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")
);
if (!args[0])
return message.channel.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
);
if (args[0].length > 18 || args[0].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الروم``")
.then(message => message.delete(4000));
}
if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
if (!args[1])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
if (args[1].length > 18 || args[1].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الرسالة``")
.then(message => message.delete(4000));
}
if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
if (!args[2])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
let channel = await message.guild.channels.get(args[0]);
if (!channel) return;
let msg = await channel.fetchMessage(args[1]);
if (!msg) return;
if (!args.slice(2)) return;
if (
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2] &&
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2].length == 18
) {
try {
await msg.react(
client32.emojis.get(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2]
)
);
} catch (e) {
return;
}
} else {
try {
await msg.react(args[2]);

} catch (e) {
return;
}
}
}
});
client33.on("message", async message => {
if (message.content.startsWith(prefix + "react")) {
if (!dinfo.owner.includes(message.author.id)) return;
let args = message.content.split(" ").slice(1);
console.log(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")
);
if (!args[0])
return message.channel.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
);
if (args[0].length > 18 || args[0].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الروم``")
.then(message => message.delete(4000));
}
if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
if (!args[1])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
if (args[1].length > 18 || args[1].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الرسالة``")
.then(message => message.delete(4000));
}
if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
if (!args[2])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
let channel = await message.guild.channels.get(args[0]);
if (!channel) return;
let msg = await channel.fetchMessage(args[1]);
if (!msg) return;
if (!args.slice(2)) return;
if (
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2] &&
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2].length == 18
) {
try {
await msg.react(
client33.emojis.get(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2]
)
);
} catch (e) {
return;
}
} else {
try {
await msg.react(args[2]);

} catch (e) {
return;
}
}
}
});
client34.on("message", async message => {
if (message.content.startsWith(prefix + "react")) {
if (!dinfo.owner.includes(message.author.id)) return;
let args = message.content.split(" ").slice(1);
console.log(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")
);
if (!args[0])
return message.channel.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
);
if (args[0].length > 18 || args[0].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الروم``")
.then(message => message.delete(4000));
}
if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
if (!args[1])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
if (args[1].length > 18 || args[1].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الرسالة``")
.then(message => message.delete(4000));
}
if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
if (!args[2])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
let channel = await message.guild.channels.get(args[0]);
if (!channel) return;
let msg = await channel.fetchMessage(args[1]);
if (!msg) return;
if (!args.slice(2)) return;
if (
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2] &&
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2].length == 18
) {
try {
await msg.react(
client34.emojis.get(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2]
)
);
} catch (e) {
return;
}
} else {
try {
await msg.react(args[2]);

} catch (e) {
return;
}
}
}
});
client35.on("message", async message => {
if (message.content.startsWith(prefix + "react")) {
if (!dinfo.owner.includes(message.author.id)) return;
let args = message.content.split(" ").slice(1);
console.log(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")
);
if (!args[0])
return message.channel.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
);
if (args[0].length > 18 || args[0].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الروم``")
.then(message => message.delete(4000));
}
if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
if (!args[1])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
if (args[1].length > 18 || args[1].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الرسالة``")
.then(message => message.delete(4000));
}
if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
if (!args[2])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
let channel = await message.guild.channels.get(args[0]);
if (!channel) return;
let msg = await channel.fetchMessage(args[1]);
if (!msg) return;
if (!args.slice(2)) return;
if (
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2] &&
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2].length == 18
) {
try {
await msg.react(
client35.emojis.get(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2]
)
);
} catch (e) {
return;
}
} else {
try {
await msg.react(args[2]);

} catch (e) {
return;
}
}
}
});
client36.on("message", async message => {
if (message.content.startsWith(prefix + "react")) {
if (!dinfo.owner.includes(message.author.id)) return;
let args = message.content.split(" ").slice(1);
console.log(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")
);
if (!args[0])
return message.channel.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
);
if (args[0].length > 18 || args[0].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الروم``")
.then(message => message.delete(4000));
}
if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
if (!args[1])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
if (args[1].length > 18 || args[1].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الرسالة``")
.then(message => message.delete(4000));
}
if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
if (!args[2])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
let channel = await message.guild.channels.get(args[0]);
if (!channel) return;
let msg = await channel.fetchMessage(args[1]);
if (!msg) return;
if (!args.slice(2)) return;
if (
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2] &&
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2].length == 18
) {
try {
await msg.react(
client36.emojis.get(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2]
)
);
} catch (e) {
return;
}
} else {
try {
await msg.react(args[2]);

} catch (e) {
return;
}
}
}
});
client37.on("message", async message => {
if (message.content.startsWith(prefix + "react")) {
if (!dinfo.owner.includes(message.author.id)) return;
let args = message.content.split(" ").slice(1);
console.log(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")
);
if (!args[0])
return message.channel.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
);
if (args[0].length > 18 || args[0].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الروم``")
.then(message => message.delete(4000));
}
if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
if (!args[1])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
if (args[1].length > 18 || args[1].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الرسالة``")
.then(message => message.delete(4000));
}
if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
if (!args[2])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
let channel = await message.guild.channels.get(args[0]);
if (!channel) return;
let msg = await channel.fetchMessage(args[1]);
if (!msg) return;
if (!args.slice(2)) return;
if (
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2] &&
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2].length == 18
) {
try {
await msg.react(
client37.emojis.get(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2]
)
);
} catch (e) {
return;
}
} else {
try {
await msg.react(args[2]);

} catch (e) {
return;
}
}
}
});
client38.on("message", async message => {
if (message.content.startsWith(prefix + "react")) {
if (!dinfo.owner.includes(message.author.id)) return;
let args = message.content.split(" ").slice(1);
console.log(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")
);
if (!args[0])
return message.channel.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
);
if (args[0].length > 18 || args[0].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الروم``")
.then(message => message.delete(4000));
}
if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
if (!args[1])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
if (args[1].length > 18 || args[1].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الرسالة``")
.then(message => message.delete(4000));
}
if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
if (!args[2])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
let channel = await message.guild.channels.get(args[0]);
if (!channel) return;
let msg = await channel.fetchMessage(args[1]);
if (!msg) return;
if (!args.slice(2)) return;
if (
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2] &&
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2].length == 18
) {
try {
await msg.react(
client38.emojis.get(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2]
)
);
} catch (e) {
return;
}
} else {
try {
await msg.react(args[2]);

} catch (e) {
return;
}
}
}
});
client39.on("message", async message => {
if (message.content.startsWith(prefix + "react")) {
if (!dinfo.owner.includes(message.author.id)) return;
let args = message.content.split(" ").slice(1);
console.log(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")
);
if (!args[0])
return message.channel.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
);
if (args[0].length > 18 || args[0].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الروم``")
.then(message => message.delete(4000));
}
if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
if (!args[1])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
if (args[1].length > 18 || args[1].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الرسالة``")
.then(message => message.delete(4000));
}
if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
if (!args[2])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
let channel = await message.guild.channels.get(args[0]);
if (!channel) return;
let msg = await channel.fetchMessage(args[1]);
if (!msg) return;
if (!args.slice(2)) return;
if (
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2] &&
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2].length == 18
) {
try {
await msg.react(
client38.emojis.get(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2]
)
);
} catch (e) {
return;
}
} else {
try {
await msg.react(args[2]);

} catch (e) {
return;
}
}
}
});
client39.on("message", async message => {
if (message.content.startsWith(prefix + "react")) {
if (!dinfo.owner.includes(message.author.id)) return;
let args = message.content.split(" ").slice(1);
console.log(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")
);
if (!args[0])
return message.channel.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
);
if (args[0].length > 18 || args[0].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الروم``")
.then(message => message.delete(4000));
}
if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
if (!args[1])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
if (args[1].length > 18 || args[1].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الرسالة``")
.then(message => message.delete(4000));
}
if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
if (!args[2])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
let channel = await message.guild.channels.get(args[0]);
if (!channel) return;
let msg = await channel.fetchMessage(args[1]);
if (!msg) return;
if (!args.slice(2)) return;
if (
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2] &&
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2].length == 18
) {
try {
await msg.react(
client39.emojis.get(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2]
)
);
} catch (e) {
return;
}
} else {
try {
await msg.react(args[2]);

} catch (e) {
return;
}
}
}
});
client40.on("message", async message => {
if (message.content.startsWith(prefix + "react")) {
if (!dinfo.owner.includes(message.author.id)) return;
let args = message.content.split(" ").slice(1);
console.log(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")
);
if (!args[0])
return message.channel.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
);
if (args[0].length > 18 || args[0].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الروم``")
.then(message => message.delete(4000));
}
if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
if (!args[1])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
if (args[1].length > 18 || args[1].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الرسالة``")
.then(message => message.delete(4000));
}
if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
if (!args[2])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
let channel = await message.guild.channels.get(args[0]);
if (!channel) return;
let msg = await channel.fetchMessage(args[1]);
if (!msg) return;
if (!args.slice(2)) return;
if (
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2] &&
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2].length == 18
) {
try {
await msg.react(
client40.emojis.get(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2]
)
);
} catch (e) {
return;
}
} else {
try {
await msg.react(args[2]);

} catch (e) {
return;
}
}
}
});
client41.on("message", async message => {
if (message.content.startsWith(prefix + "react")) {
if (!dinfo.owner.includes(message.author.id)) return;
let args = message.content.split(" ").slice(1);
console.log(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")
);
if (!args[0])
return message.channel.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
);
if (args[0].length > 18 || args[0].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الروم``")
.then(message => message.delete(4000));
}
if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
if (!args[1])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
if (args[1].length > 18 || args[1].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الرسالة``")
.then(message => message.delete(4000));
}
if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
if (!args[2])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
let channel = await message.guild.channels.get(args[0]);
if (!channel) return;
let msg = await channel.fetchMessage(args[1]);
if (!msg) return;
if (!args.slice(2)) return;
if (
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2] &&
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2].length == 18
) {
try {
await msg.react(
client41.emojis.get(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2]
)
);
} catch (e) {
return;
}
} else {
try {
await msg.react(args[2]);

} catch (e) {
return;
}
}
}
});
client42.on("message", async message => {
if (message.content.startsWith(prefix + "react")) {
if (!dinfo.owner.includes(message.author.id)) return;
let args = message.content.split(" ").slice(1);
console.log(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")
);
if (!args[0])
return message.channel.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
);
if (args[0].length > 18 || args[0].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الروم``")
.then(message => message.delete(4000));
}
if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
if (!args[1])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
if (args[1].length > 18 || args[1].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الرسالة``")
.then(message => message.delete(4000));
}
if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
if (!args[2])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
let channel = await message.guild.channels.get(args[0]);
if (!channel) return;
let msg = await channel.fetchMessage(args[1]);
if (!msg) return;
if (!args.slice(2)) return;
if (
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2] &&
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2].length == 18
) {
try {
await msg.react(
client42.emojis.get(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2]
)
);
} catch (e) {
return;
}
} else {
try {
await msg.react(args[2]);

} catch (e) {
return;
}
}
}
});
client43.on("message", async message => {
if (message.content.startsWith(prefix + "react")) {
if (!dinfo.owner.includes(message.author.id)) return;
let args = message.content.split(" ").slice(1);
console.log(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")
);
if (!args[0])
return message.channel.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
);
if (args[0].length > 18 || args[0].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الروم``")
.then(message => message.delete(4000));
}
if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
if (!args[1])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
if (args[1].length > 18 || args[1].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الرسالة``")
.then(message => message.delete(4000));
}
if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
if (!args[2])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
let channel = await message.guild.channels.get(args[0]);
if (!channel) return;
let msg = await channel.fetchMessage(args[1]);
if (!msg) return;
if (!args.slice(2)) return;
if (
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2] &&
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2].length == 18
) {
try {
await msg.react(
client43.emojis.get(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2]
)
);
} catch (e) {
return;
}
} else {
try {
await msg.react(args[2]);

} catch (e) {
return;
}
}
}
});
client44.on("message", async message => {
if (message.content.startsWith(prefix + "react")) {
if (!dinfo.owner.includes(message.author.id)) return;
let args = message.content.split(" ").slice(1);
console.log(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")
);
if (!args[0])
return message.channel.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
);
if (args[0].length > 18 || args[0].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الروم``")
.then(message => message.delete(4000));
}
if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
if (!args[1])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
if (args[1].length > 18 || args[1].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الرسالة``")
.then(message => message.delete(4000));
}
if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
if (!args[2])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
let channel = await message.guild.channels.get(args[0]);
if (!channel) return;
let msg = await channel.fetchMessage(args[1]);
if (!msg) return;
if (!args.slice(2)) return;
if (
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2] &&
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2].length == 18
) {
try {
await msg.react(
client44.emojis.get(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2]
)
);
} catch (e) {
return;
}
} else {
try {
await msg.react(args[2]);

} catch (e) {
return;
}
}
}
});
client45.on("message", async message => {
if (message.content.startsWith(prefix + "react")) {
if (!dinfo.owner.includes(message.author.id)) return;
let args = message.content.split(" ").slice(1);
console.log(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")
);
if (!args[0])
return message.channel.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
);
if (args[0].length > 18 || args[0].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الروم``")
.then(message => message.delete(4000));
}
if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
if (!args[1])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
if (args[1].length > 18 || args[1].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الرسالة``")
.then(message => message.delete(4000));
}
if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
if (!args[2])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
let channel = await message.guild.channels.get(args[0]);
if (!channel) return;
let msg = await channel.fetchMessage(args[1]);
if (!msg) return;
if (!args.slice(2)) return;
if (
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2] &&
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2].length == 18
) {
try {
await msg.react(
client45.emojis.get(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2]
)
);
} catch (e) {
return;
}
} else {
try {
await msg.react(args[2]);

} catch (e) {
return;
}
}
}
});
client46.on("message", async message => {
if (message.content.startsWith(prefix + "react")) {
if (!dinfo.owner.includes(message.author.id)) return;
let args = message.content.split(" ").slice(1);
console.log(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")
);
if (!args[0])
return message.channel.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
);
if (args[0].length > 18 || args[0].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الروم``")
.then(message => message.delete(4000));
}
if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
if (!args[1])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
if (args[1].length > 18 || args[1].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الرسالة``")
.then(message => message.delete(4000));
}
if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
if (!args[2])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
let channel = await message.guild.channels.get(args[0]);
if (!channel) return;
let msg = await channel.fetchMessage(args[1]);
if (!msg) return;
if (!args.slice(2)) return;
if (
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2] &&
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2].length == 18
) {
try {
await msg.react(
client46.emojis.get(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2]
)
);
} catch (e) {
return;
}
} else {
try {
await msg.react(args[2]);

} catch (e) {
return;
}
}
}
});
client47.on("message", async message => {
if (message.content.startsWith(prefix + "react")) {
if (!dinfo.owner.includes(message.author.id)) return;
let args = message.content.split(" ").slice(1);
console.log(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")
);
if (!args[0])
return message.channel.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
);
if (args[0].length > 18 || args[0].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الروم``")
.then(message => message.delete(4000));
}
if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
if (!args[1])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
if (args[1].length > 18 || args[1].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الرسالة``")
.then(message => message.delete(4000));
}
if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
if (!args[2])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
let channel = await message.guild.channels.get(args[0]);
if (!channel) return;
let msg = await channel.fetchMessage(args[1]);
if (!msg) return;
if (!args.slice(2)) return;
if (
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2] &&
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2].length == 18
) {
try {
await msg.react(
client47.emojis.get(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2]
)
);
} catch (e) {
return;
}
} else {
try {
await msg.react(args[2]);

} catch (e) {
return;
}
}
}
});
client48.on("message", async message => {
if (message.content.startsWith(prefix + "react")) {
if (!dinfo.owner.includes(message.author.id)) return;
let args = message.content.split(" ").slice(1);
console.log(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")
);
if (!args[0])
return message.channel.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
);
if (args[0].length > 18 || args[0].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الروم``")
.then(message => message.delete(4000));
}
if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
if (!args[1])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
if (args[1].length > 18 || args[1].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الرسالة``")
.then(message => message.delete(4000));
}
if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
if (!args[2])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
let channel = await message.guild.channels.get(args[0]);
if (!channel) return;
let msg = await channel.fetchMessage(args[1]);
if (!msg) return;
if (!args.slice(2)) return;
if (
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2] &&
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2].length == 18
) {
try {
await msg.react(
client47.emojis.get(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2]
)
);
} catch (e) {
return;
}
} else {
try {
await msg.react(args[2]);

} catch (e) {
return;
}
}
}
});
client48.on("message", async message => {
if (message.content.startsWith(prefix + "react")) {
if (!dinfo.owner.includes(message.author.id)) return;
let args = message.content.split(" ").slice(1);
console.log(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")
);
if (!args[0])
return message.channel.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
);
if (args[0].length > 18 || args[0].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الروم``")
.then(message => message.delete(4000));
}
if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
if (!args[1])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
if (args[1].length > 18 || args[1].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الرسالة``")
.then(message => message.delete(4000));
}
if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
if (!args[2])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
let channel = await message.guild.channels.get(args[0]);
if (!channel) return;
let msg = await channel.fetchMessage(args[1]);
if (!msg) return;
if (!args.slice(2)) return;
if (
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2] &&
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2].length == 18
) {
try {
await msg.react(
client48.emojis.get(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2]
)
);
} catch (e) {
return;
}
} else {
try {
await msg.react(args[2]);

} catch (e) {
return;
}
}
}
});
client49.on("message", async message => {
if (message.content.startsWith(prefix + "react")) {
if (!dinfo.owner.includes(message.author.id)) return;
let args = message.content.split(" ").slice(1);
console.log(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")
);
if (!args[0])
return message.channel.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
);
if (args[0].length > 18 || args[0].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الروم``")
.then(message => message.delete(4000));
}
if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
if (!args[1])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
if (args[1].length > 18 || args[1].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الرسالة``")
.then(message => message.delete(4000));
}
if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
if (!args[2])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
let channel = await message.guild.channels.get(args[0]);
if (!channel) return;
let msg = await channel.fetchMessage(args[1]);
if (!msg) return;
if (!args.slice(2)) return;
if (
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2] &&
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2].length == 18
) {
try {
await msg.react(
client49.emojis.get(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2]
)
);
} catch (e) {
return;
}
} else {
try {
await msg.react(args[2]);

} catch (e) {
return;
}
}
}
});
client50.on("message", async message => {
if (message.content.startsWith(prefix + "react")) {
if (!dinfo.owner.includes(message.author.id)) return;
let args = message.content.split(" ").slice(1);
console.log(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")
);
if (!args[0])
return message.channel.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
);
if (args[0].length > 18 || args[0].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الروم``")
.then(message => message.delete(4000));
}
if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
if (!args[1])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
if (args[1].length > 18 || args[1].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الرسالة``")
.then(message => message.delete(4000));
}
if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
if (!args[2])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
let channel = await message.guild.channels.get(args[0]);
if (!channel) return;
let msg = await channel.fetchMessage(args[1]);
if (!msg) return;
if (!args.slice(2)) return;
if (
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2] &&
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2].length == 18
) {
try {
await msg.react(
client50.emojis.get(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2]
)
);
} catch (e) {
return;
}
} else {
try {
await msg.react(args[2]);

} catch (e) {
return;
}
}
}
});
client.on("message", async message => {
if (message.content.startsWith(prefix + "react")) {
if (!dinfo.owner.includes(message.author.id)) return;
let args = message.content.split(" ").slice(1);
console.log(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")
);
if (!args[0])
return message.channel.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
);
if (args[0].length > 18 || args[0].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الروم``")
.then(message => message.delete(4000));
}
if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
if (!args[1])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
if (args[1].length > 18 || args[1].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الرسالة``")
.then(message => message.delete(4000));
}
if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
if (!args[2])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
let channel = await message.guild.channels.get(args[0]);
if (!channel) return;
let msg = await channel.fetchMessage(args[1]);
if (!msg) return;
if (!args.slice(2)) return;
if (
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2] &&
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2].length == 18
) {
try {
await msg.react(
client20.emojis.get(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2]
)
);
} catch (e) {
return;
}
} else {
try {
await msg.react(args[2]);

} catch (e) {
return;
}
}
}
});
client.on("message", async message => {
if (message.content.startsWith(prefix + "react")) {
if (!dinfo.owner.includes(message.author.id)) return;
let args = message.content.split(" ").slice(1);
console.log(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")
);
if (!args[0])
return message.channel.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
);
if (args[0].length > 18 || args[0].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الروم``")
.then(message => message.delete(4000));
}
if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
if (!args[1])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
if (args[1].length > 18 || args[1].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الرسالة``")
.then(message => message.delete(4000));
}
if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
if (!args[2])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
let channel = await message.guild.channels.get(args[0]);
if (!channel) return;
let msg = await channel.fetchMessage(args[1]);
if (!msg) return;
if (!args.slice(2)) return;
if (
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2] &&
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2].length == 18
) {
try {
await msg.react(
client20.emojis.get(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2]
)
);
} catch (e) {
return;
}
} else {
try {
await msg.react(args[2]);

} catch (e) {
return;
}
}
}
});
client.on("message", async message => {
if (message.content.startsWith(prefix + "react")) {
if (!dinfo.owner.includes(message.author.id)) return;
let args = message.content.split(" ").slice(1);
console.log(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")
);
if (!args[0])
return message.channel.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
);
if (args[0].length > 18 || args[0].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الروم``")
.then(message => message.delete(4000));
}
if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
if (!args[1])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
if (args[1].length > 18 || args[1].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الرسالة``")
.then(message => message.delete(4000));
}
if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
if (!args[2])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
let channel = await message.guild.channels.get(args[0]);
if (!channel) return;
let msg = await channel.fetchMessage(args[1]);
if (!msg) return;
if (!args.slice(2)) return;
if (
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2] &&
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2].length == 18
) {
try {
await msg.react(
client20.emojis.get(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2]
)
);
} catch (e) {
return;
}
} else {
try {
await msg.react(args[2]);

} catch (e) {
return;
}
}
}
});
client.on("message", async message => {
if (message.content.startsWith(prefix + "react")) {
if (!dinfo.owner.includes(message.author.id)) return;
let args = message.content.split(" ").slice(1);
console.log(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")
);
if (!args[0])
return message.channel.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
);
if (args[0].length > 18 || args[0].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الروم``")
.then(message => message.delete(4000));
}
if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
if (!args[1])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
if (args[1].length > 18 || args[1].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الرسالة``")
.then(message => message.delete(4000));
}
if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
if (!args[2])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
let channel = await message.guild.channels.get(args[0]);
if (!channel) return;
let msg = await channel.fetchMessage(args[1]);
if (!msg) return;
if (!args.slice(2)) return;
if (
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2] &&
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2].length == 18
) {
try {
await msg.react(
client20.emojis.get(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2]
)
);
} catch (e) {
return;
}
} else {
try {
await msg.react(args[2]);

} catch (e) {
return;
}
}
}
});
client.on("message", async message => {
if (message.content.startsWith(prefix + "react")) {
if (!dinfo.owner.includes(message.author.id)) return;
let args = message.content.split(" ").slice(1);
console.log(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")
);
if (!args[0])
return message.channel.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
);
if (args[0].length > 18 || args[0].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الروم``")
.then(message => message.delete(4000));
}
if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
if (!args[1])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
if (args[1].length > 18 || args[1].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الرسالة``")
.then(message => message.delete(4000));
}
if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
if (!args[2])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
let channel = await message.guild.channels.get(args[0]);
if (!channel) return;
let msg = await channel.fetchMessage(args[1]);
if (!msg) return;
if (!args.slice(2)) return;
if (
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2] &&
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2].length == 18
) {
try {
await msg.react(
client20.emojis.get(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2]
)
);
} catch (e) {
return;
}
} else {
try {
await msg.react(args[2]);

} catch (e) {
return;
}
}
}
});
client.on("message", async message => {
if (message.content.startsWith(prefix + "react")) {
if (!dinfo.owner.includes(message.author.id)) return;
let args = message.content.split(" ").slice(1);
console.log(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")
);
if (!args[0])
return message.channel.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
);
if (args[0].length > 18 || args[0].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الروم``")
.then(message => message.delete(4000));
}
if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
if (!args[1])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
if (args[1].length > 18 || args[1].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الرسالة``")
.then(message => message.delete(4000));
}
if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
if (!args[2])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
let channel = await message.guild.channels.get(args[0]);
if (!channel) return;
let msg = await channel.fetchMessage(args[1]);
if (!msg) return;
if (!args.slice(2)) return;
if (
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2] &&
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2].length == 18
) {
try {
await msg.react(
client20.emojis.get(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2]
)
);
} catch (e) {
return;
}
} else {
try {
await msg.react(args[2]);

} catch (e) {
return;
}
}
}
});
client.on("message", async message => {
if (message.content.startsWith(prefix + "react")) {
if (!dinfo.owner.includes(message.author.id)) return;
let args = message.content.split(" ").slice(1);
console.log(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")
);
if (!args[0])
return message.channel.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
);
if (args[0].length > 18 || args[0].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الروم``")
.then(message => message.delete(4000));
}
if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
if (!args[1])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
if (args[1].length > 18 || args[1].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الرسالة``")
.then(message => message.delete(4000));
}
if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
if (!args[2])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
let channel = await message.guild.channels.get(args[0]);
if (!channel) return;
let msg = await channel.fetchMessage(args[1]);
if (!msg) return;
if (!args.slice(2)) return;
if (
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2] &&
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2].length == 18
) {
try {
await msg.react(
client20.emojis.get(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2]
)
);
} catch (e) {
return;
}
} else {
try {
await msg.react(args[2]);

} catch (e) {
return;
}
}
}
});
client.on("message", async message => {
if (message.content.startsWith(prefix + "react")) {
if (!dinfo.owner.includes(message.author.id)) return;
let args = message.content.split(" ").slice(1);
console.log(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")
);
if (!args[0])
return message.channel.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
);
if (args[0].length > 18 || args[0].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الروم``")
.then(message => message.delete(4000));
}
if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
if (!args[1])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
if (args[1].length > 18 || args[1].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الرسالة``")
.then(message => message.delete(4000));
}
if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
if (!args[2])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
let channel = await message.guild.channels.get(args[0]);
if (!channel) return;
let msg = await channel.fetchMessage(args[1]);
if (!msg) return;
if (!args.slice(2)) return;
if (
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2] &&
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2].length == 18
) {
try {
await msg.react(
client20.emojis.get(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2]
)
);
} catch (e) {
return;
}
} else {
try {
await msg.react(args[2]);

} catch (e) {
return;
}
}
}
});

// ======= [ MODE - React MSG END  ] ======== //

// ======= [ functions - Join Server , add Friend   ] ======== //
async function joinServer(invite, message) {
  console.log(invite);
  require("request")(
    {
      method: "POST",
      url: `https://discordapp.com/api/v6/invites/${invite}`,
      json: true,
      headers: {
        authorization: message.client.token
      }
    },
    async (err, res, body) => {
      if (err) {
        console.log(err);
        await console.log(`[ERROR] - ${err}`);
        return;
      } else {
        if (body.message.includes("Unknown Invite"))
          return console.log("[ERROR] - Unkown Invite.");
        if (body.message.includes("banned"))
          return console.log("[ERROR] - Banned from this server.");
        await console.log(`[INFO] - Done.`);
      }
    }
  );
}

async function addFriend(id, message) {
  try {
    let user = await message.client.fetchUser(id);
    await require("request")(
      {
        url: `https://discordapp.com/api/v6/users/@me/relationships`,
        method: "POST",
        json: true,
        headers: {
          "Content-Type": "application/json",
          authorization: message.client.token
        },
        body: {
          username: user.username,
          discriminator: parseInt(user.discriminator)
        }
      },
      async (err, res, body) => {
        if (err) {
          await console.log(err);
          await console.log(`[ERROR] - ${err}`);
          return;
        } else {
          await console.log(body ? body.message : "No status message.");
          await console.log(`[INFO] - Done.`);
        }
      }
    );
  } catch (e) {
    console.log(`[ERROR] - ${e}`);
  }
}

// ======= [ functions - Join Server , add Friend END  ] ======== //

// ======= [ StayVoice - MODE  ] ======== //
client.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          
        })
        .catch(console.log);
    } else {
      
    }
  }
});
client2.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          
        })
        .catch(console.log);
    } else {
      
    }
  }
});
client3.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          
        })
        .catch(console.log);
    } else {

    }
  }
});
client4.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          
        })
        .catch(console.log);
    } else {
      
    }
  }
});
client5.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          
        })
        .catch(console.log);
    } else {
      }
  }
});
client6.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          
        })
        .catch(console.log);
    } else {
      
    }
  }
});
client7.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          
        })
        .catch(console.log);
    } else {
      
    }
  }
});
client8.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          
        })
        .catch(console.log);
    } else {
      
    }
  }
});
client9.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          
        })
        .catch(console.log);
    } else {
    }
  }
});
client10.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          
        })
        .catch(console.log);
    } else {
      // جمــيع الحقوق محفوظة لدي "Kahrbaa"
      
    }
  }
});
client11.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join() // جمــيع الحقوق محفوظة لدي "Kahrbaa"
        .then(connection => {
          
        })
        .catch(console.log);
    } else {
      message.reply("");
    }
  } // جمــيع الحقوق محفوظة لدي "Kahrbaa"
});
client12.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return; // جمــيع الحقوق محفوظة لدي "Kahrbaa"
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          
        })
        .catch(console.log);
    } else {
      
    }
  }
});
client13.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          
        })
        .catch(console.log);
    } else {
      
    }
  }
});
client14.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          
        })
        .catch(console.log);
    } else {
      
    }
  }
});
client15.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          
        })
        .catch(console.log);
    } else {
      
    }
  }
});
client16.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          
        })
        .catch(console.log);
    } else {
      
    }
  }
});
client17.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          
        })
        .catch(console.log);
    } else {
      
    }
  }
});
client18.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          
        
        })
        .catch(console.log);
    } else {
      
    }
  }
});
client19.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          
        })
        .catch(console.log);
    } else {
      
    }
  }
});
client20.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
         
        })
        .catch(console.log);
    } else {
      
    }
  }
});


client21.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client22.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client23.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client24.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client25.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client26.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client27.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client28.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client29.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client30.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client31.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client32.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {
}
}
});
client33.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client34.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client35.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client36.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client37.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client38.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client39.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client40.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client41.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client42.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client43.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client44.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client45.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client46.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client47.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client48.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client49.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client50.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client51.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client52.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client53.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client54.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client55.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client56.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client57.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client58.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client59.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client60.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client61.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client62.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client63.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client64.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client65.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client66.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client67.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client68.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client69.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client70.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client71.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client72.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client73.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client74.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client75.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client76.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client77.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client78.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client79.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client80.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client81.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client82.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client83.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client84.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client85.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client86.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client87.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client88.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client89.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client90.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client91.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client92.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client93.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client94.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client95.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client96.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client97.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client98.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client99.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client100.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});











































































// ======= [ StayVoice - MODE END  ] ======== //

// ======= [ RANDOM - AVATAR  ] ======== //

    
const kahAVA = "Ava";
client.on("message", message => {
  fs.readFile(`./${kahAVA}.txt`, function(err, data) {
    if (err) throw err;
    data = data + "";
    var lines = data.split("\n");
    let randomf = lines[Math.floor(Math.random() * lines.length)];
    let argresult = message.content
      .split(` `)
      .slice(1)
      .join(" ");
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.content.startsWith(prefix + "randomava")) {
      client.user.setAvatar("https://media.discordapp.net/attachments/654999835547795486/668574640922296330/image0.jpg?width=616&height=598");
      message.channel.send(`**»وێـنـەی  ئـەڪـاونـتـەڪـان گــۆڕا**`);
    }
  });
});




client2.on("message", message => {
  fs.readFile(`./${kahAVA}.txt`, function(err, data) {
    if (err) throw err;
    data = data + "";
    var lines = data.split("\n");
    let randomf = lines[Math.floor(Math.random() * lines.length)];
    let argresult = message.content
      .split(` `)
      .slice(1)
      .join(" ");
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.content.startsWith(prefix + "randomava")) {
      client2.user.setAvatar("https://media.discordapp.net/attachments/654999489714847764/671241308374827008/image3.jpg?width=619&height=599");
      message.channel.send(`**»وێـنـەی  ئـەڪـاونـتـەڪـان گــۆڕا**`);
    }
  });
});


client3.on("message", message => {
  fs.readFile(`./${kahAVA}.txt`, function(err, data) {
    if (err) throw err;
    data = data + "";
    var lines = data.split("\n");
    let randomf = lines[Math.floor(Math.random() * lines.length)];
    let argresult = message.content
      .split(` `)
      .slice(1)
      .join(" ");
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.content.startsWith(prefix + "random")) {
      client3.user.setAvatar("https://media.discordapp.net/attachments/654999835547795486/668881880321359882/image6.jpg?width=611&height=599");
      message.channel.send(`**»وێـنـەی  ئـەڪـاونـتـەڪـان گــۆڕا**`);
    }
  });
});





client4.on("message", message => {
  fs.readFile(`./${kahAVA}.txt`, function(err, data) {
    if (err) throw err;
    data = data + "";
    var lines = data.split("\n");
    let randomf = lines[Math.floor(Math.random() * lines.length)];
    let argresult = message.content
      .split(` `)
      .slice(1)
      .join(" ");
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.content.startsWith(prefix + "randomava")) {
      client4.user.setAvatar("https://media.discordapp.net/attachments/654999835547795486/671936010246160384/image1.jpg?width=659&height=598");
      message.channel.send(`**»وێـنـەی  ئـەڪـاونـتـەڪـان گــۆڕا**`);
    }
  });
});





client5.on("message", message => {
  fs.readFile(`./${kahAVA}.txt`, function(err, data) {
    if (err) throw err;
    data = data + "";
    var lines = data.split("\n");
    let randomf = lines[Math.floor(Math.random() * lines.length)];
    let argresult = message.content
      .split(` `)
      .slice(1)
      .join(" ");
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.content.startsWith(prefix + "randomava")) {
      client5.user.setAvatar("https://media.discordapp.net/attachments/654999835547795486/668574640922296330/image0.jpg?width=616&height=598");
      message.channel.send(`**»وێـنـەی  ئـەڪـاونـتـەڪـان گــۆڕا**`);
    }
  });
});




client6.on("message", message => {
  fs.readFile(`./${kahAVA}.txt`, function(err, data) {
    if (err) throw err;
    data = data + "";
    var lines = data.split("\n");
    let randomf = lines[Math.floor(Math.random() * lines.length)];
    let argresult = message.content
      .split(` `)
      .slice(1)
      .join(" ");
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.content.startsWith(prefix + "randomava")) {
      client6.user.setAvatar("https://media.discordapp.net/attachments/654999489714847764/671241308374827008/image3.jpg?width=619&height=599");
      message.channel.send(`**»وێـنـەی  ئـەڪـاونـتـەڪـان گــۆڕا**`);
    }
  });
});




client7.on("message", message => {
  fs.readFile(`./${kahAVA}.txt`, function(err, data) {
    if (err) throw err;
    data = data + "";
    var lines = data.split("\n");
    let randomf = lines[Math.floor(Math.random() * lines.length)];
    let argresult = message.content
      .split(` `)
      .slice(1)
      .join(" ");
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.content.startsWith(prefix + "randomava")) {
      client7.user.setAvatar("https://media.discordapp.net/attachments/654999835547795486/668881880321359882/image6.jpg?width=611&height=599");
      message.channel.send(`**»وێـنـەی  ئـەڪـاونـتـەڪـان گــۆڕا**`);
    }
  });
});





client8.on("message", message => {
  fs.readFile(`./${kahAVA}.txt`, function(err, data) {
    if (err) throw err;
    data = data + "";
    var lines = data.split("\n");
    let randomf = lines[Math.floor(Math.random() * lines.length)];
    let argresult = message.content
      .split(` `)
      .slice(1)
      .join(" ");
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.content.startsWith(prefix + "randomava")) {
      client8.user.setAvatar("https://media.discordapp.net/attachments/654999835547795486/671936010246160384/image1.jpg?width=659&height=598");
      message.channel.send(`**»وێـنـەی  ئـەڪـاونـتـەڪـان گــۆڕا**`);
    }
  });
});






client9.on("message", message => {
  fs.readFile(`./${kahAVA}.txt`, function(err, data) {
    if (err) throw err;
    data = data + "";
    var lines = data.split("\n");
    let randomf = lines[Math.floor(Math.random() * lines.length)];
    let argresult = message.content
      .split(` `)
      .slice(1)
      .join(" ");
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.content.startsWith(prefix + "randomava")) {
      client9.user.setAvatar("https://media.discordapp.net/attachments/654999835547795486/668574640922296330/image0.jpg?width=616&height=598");
      message.channel.send(`**»وێـنـەی  ئـەڪـاونـتـەڪـان گــۆڕا**`);
    }
  });
});




client10.on("message", message => {
  fs.readFile(`./${kahAVA}.txt`, function(err, data) {
    if (err) throw err;
    data = data + "";
    var lines = data.split("\n");
    let randomf = lines[Math.floor(Math.random() * lines.length)];
    let argresult = message.content
      .split(` `)
      .slice(1)
      .join(" ");
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.content.startsWith(prefix + "randomava")) {
      client10.user.setAvatar("https://media.discordapp.net/attachments/654999489714847764/671241308374827008/image3.jpg?width=619&height=599");
      message.channel.send(`**»وێـنـەی  ئـەڪـاونـتـەڪـان گــۆڕا**`);
    }
  });
});




client11.on("message", message => {
  fs.readFile(`./${kahAVA}.txt`, function(err, data) {
    if (err) throw err;
    data = data + "";
    var lines = data.split("\n");
    let randomf = lines[Math.floor(Math.random() * lines.length)];
    let argresult = message.content
      .split(` `)
      .slice(1)
      .join(" ");
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.content.startsWith(prefix + "randomava")) {
      client11.user.setAvatar("https://media.discordapp.net/attachments/654999835547795486/668881880321359882/image6.jpg?width=611&height=599");
      message.channel.send(`**»وێـنـەی  ئـەڪـاونـتـەڪـان گــۆڕا**`);
    }
  });
});





client12.on("message", message => {
  fs.readFile(`./${kahAVA}.txt`, function(err, data) {
    if (err) throw err;
    data = data + "";
    var lines = data.split("\n");
    let randomf = lines[Math.floor(Math.random() * lines.length)];
    let argresult = message.content
      .split(` `)
      .slice(1)
      .join(" ");
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.content.startsWith(prefix + "randomava")) {
      client12.user.setAvatar("https://media.discordapp.net/attachments/654999835547795486/671936010246160384/image1.jpg?width=659&height=598");
      message.channel.send(`**»وێـنـەی  ئـەڪـاونـتـەڪـان گــۆڕا**`);
    }
  });
});






client13.on("message", message => {
  fs.readFile(`./${kahAVA}.txt`, function(err, data) {
    if (err) throw err;
    data = data + "";
    var lines = data.split("\n");
    let randomf = lines[Math.floor(Math.random() * lines.length)];
    let argresult = message.content
      .split(` `)
      .slice(1)
      .join(" ");
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.content.startsWith(prefix + "randomava")) {
      client13.user.setAvatar("https://media.discordapp.net/attachments/654999835547795486/668574640922296330/image0.jpg?width=616&height=598");
      message.channel.send(`**»وێـنـەی  ئـەڪـاونـتـەڪـان گــۆڕا**`);
    }
  });
});




client14.on("message", message => {
  fs.readFile(`./${kahAVA}.txt`, function(err, data) {
    if (err) throw err;
    data = data + "";
    var lines = data.split("\n");
    let randomf = lines[Math.floor(Math.random() * lines.length)];
    let argresult = message.content
      .split(` `)
      .slice(1)
      .join(" ");
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.content.startsWith(prefix + "randomava")) {
      client14.user.setAvatar("https://media.discordapp.net/attachments/654999489714847764/671241308374827008/image3.jpg?width=619&height=599");
      message.channel.send(`**»وێـنـەی  ئـەڪـاونـتـەڪـان گــۆڕا**`);
    }
  });
});




client15.on("message", message => {
  fs.readFile(`./${kahAVA}.txt`, function(err, data) {
    if (err) throw err;
    data = data + "";
    var lines = data.split("\n");
    let randomf = lines[Math.floor(Math.random() * lines.length)];
    let argresult = message.content
      .split(` `)
      .slice(1)
      .join(" ");
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.content.startsWith(prefix + "randomava")) {
      client15.user.setAvatar("https://media.discordapp.net/attachments/654999835547795486/668881880321359882/image6.jpg?width=611&height=599");
      message.channel.send(`**»وێـنـەی  ئـەڪـاونـتـەڪـان گــۆڕا**`);
    }
  });
});





client16.on("message", message => {
  fs.readFile(`./${kahAVA}.txt`, function(err, data) {
    if (err) throw err;
    data = data + "";
    var lines = data.split("\n");
    let randomf = lines[Math.floor(Math.random() * lines.length)];
    let argresult = message.content
      .split(` `)
      .slice(1)
      .join(" ");
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.content.startsWith(prefix + "randomava")) {
      client16.user.setAvatar("https://media.discordapp.net/attachments/654999835547795486/671936010246160384/image1.jpg?width=659&height=598");
      message.channel.send(`**»وێـنـەی  ئـەڪـاونـتـەڪـان گــۆڕا**`);
    }
  });
});



client17.on("message", message => {
  fs.readFile(`./${kahAVA}.txt`, function(err, data) {
    if (err) throw err;
    data = data + "";
    var lines = data.split("\n");
    let randomf = lines[Math.floor(Math.random() * lines.length)];
    let argresult = message.content
      .split(` `)
      .slice(1)
      .join(" ");
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.content.startsWith(prefix + "randomava")) {
      client17.user.setAvatar("https://media.discordapp.net/attachments/654999835547795486/671936010246160384/image1.jpg?width=659&height=598");
      message.channel.send(`**»وێـنـەی  ئـەڪـاونـتـەڪـان گــۆڕا**`);
    }
  });
});






client18.on("message", message => {
  fs.readFile(`./${kahAVA}.txt`, function(err, data) {
    if (err) throw err;
    data = data + "";
    var lines = data.split("\n");
    let randomf = lines[Math.floor(Math.random() * lines.length)];
    let argresult = message.content
      .split(` `)
      .slice(1)
      .join(" ");
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.content.startsWith(prefix + "randomava")) {
      client18.user.setAvatar("https://media.discordapp.net/attachments/654999835547795486/668574640922296330/image0.jpg?width=616&height=598");
      message.channel.send(`**»وێـنـەی  ئـەڪـاونـتـەڪـان گــۆڕا**`);
    }
  });
});




client19.on("message", message => {
  fs.readFile(`./${kahAVA}.txt`, function(err, data) {
    if (err) throw err;
    data = data + "";
    var lines = data.split("\n");
    let randomf = lines[Math.floor(Math.random() * lines.length)];
    let argresult = message.content
      .split(` `)
      .slice(1)
      .join(" ");
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.content.startsWith(prefix + "randomava")) {
      client19.user.setAvatar("https://media.discordapp.net/attachments/654999489714847764/671241308374827008/image3.jpg?width=619&height=599");
      message.channel.send(`**»وێـنـەی  ئـەڪـاونـتـەڪـان گــۆڕا**`);
    }
  });
});




client20.on("message", message => {
  fs.readFile(`./${kahAVA}.txt`, function(err, data) {
    if (err) throw err;
    data = data + "";
    var lines = data.split("\n");
    let randomf = lines[Math.floor(Math.random() * lines.length)];
    let argresult = message.content
      .split(` `)
      .slice(1)
      .join(" ");
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.content.startsWith(prefix + "randomava")) {
      client20.user.setAvatar("https://media.discordapp.net/attachments/654999835547795486/668881880321359882/image6.jpg?width=611&height=599");
      message.channel.send(`**»وێـنـەی  ئـەڪـاونـتـەڪـان گــۆڕا**`);
    }
  });
});






 
// ======= [ RANDOM - AVATAR end ] ======== //

// ======= [ SPAM - MODE  ] ======== //

client.on("warn", console.warn);
client.on("error", console.error);
const child_process = require("child_process");
client.on("message", message => {
  if (message.content === prefix + "spa") {
    if (dinfo.serverid === "NONE")
      return message
        .reply(`**لم يتم وضع ايدي سيرفر الاسبام \`${prefix}setserverID\`**`)
        .then(m => m.delete(5000));
    if (dinfo.channelid === "NONE")
      return message
        .reply(`**لم يتم وضع ايدي روم الاسبام \`${prefix}setchannelID\`**`)
        .then(m => m.delete(5000));
    if (dinfo.timespam === "NONE")
      return message
        .reply(
          `**لم يتم وضع وقت الاسبام - بـ الثواني \`${prefix}settimeSpam\`**`
        )
        .then(m => m.delete(5000));
    if (dinfo.timestop === "NONE")
      return message
        .reply(
          `**لم يتم وضع وقت توقف الاسبام بـ الساعات \`${prefix}settimeStop\`**`
        )
        .then(m => m.delete(5000));
    if (!dinfo.owner.includes(message.author.id)) return;
    message.channel.send(`**⚠️ | SPAM ON , <@${dinfo.owner}>**`);
    child_process.fork(__dirname + "/spam.js");
    console.log("[SYSTEM-SPAM] - تم التفعيل ..");
  }
});
// ======= [ SPAM - MODE end ] ======== //

// ======= [ Credits - INFO ] ======== //

client.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "cc") {
    message.channel.send("c");
  }
});
client2.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "cc") {
    message.channel.send("c");
  }
});
client3.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "cc") {
    message.channel.send("c");
  }
});
client4.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "cc") {
    message.channel.send("c");
  }
});
client5.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "cc") {
    message.channel.send("c");
  }
});
client6.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "cc") {
    message.channel.send("c");
  }
});
client7.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "cc") {
    message.channel.send("c");
  }
});
client8.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "cc") {
    message.channel.send("c");
  }
});
client9.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "cc") {
    message.channel.send("c");
  }
});
client10.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "cc") {
    message.channel.send("c");
  }
});
client11.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "cc") {
    message.channel.send("c");
  }
});
client12.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "cc") {
    message.channl.send("c");
  }
});
client13.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "cc") {
    message.channel.send("c");
  }
});
client14.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "cc") {
    message.channel.send("c");
  }
});
client15.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "cc") {
    message.channel.send("c");
  }
});
client16.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "cc") {
    message.channel.send("c");
  }
});
client17.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "cc") {
    message.channel.send("c");
  }
});
client18.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "cc") {
    message.channel.send("c");
  }
});
client19.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "cc") {
    message.channel.send("c");
  }
});
client20.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "cc") {
    message.channel.send("c");
  }
});

// ======= [ Credits - INFO end ] ======== //

// ======= [ Daily - INFO ] ======== //

client.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "dly") {
    message.channel.send("#daily");
  }
});
client2.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "dly") {
    message.channel.send("#daily");
  }
});
client3.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "dly") {
    message.channel.send("#daily");
  }
});
client4.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "dly") {
    message.channel.send("#daily");
  }
});
client5.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "dly") {
    message.channel.send("#daily");
  }
});
client6.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "dly") {
    message.channel.send("#daily");
  }
});
client7.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "dly") {
    message.channel.send("#daily");
  }
});
client8.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "dly") {
    message.channel.send("#daily");
  }
});
client9.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "dly") {
    message.channel.send("#daily");
  }
});
client10.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "dly") {
    message.channel.send("#daily");
  }
});
client11.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "dly") {
    message.channel.send("#daily");
  }
});
client12.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "dly") {
    message.channel.send("#daily");
  }
});
client13.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "dly") {
    message.channel.send("#daily");
  }
});
client14.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "dly") {
    message.channel.send("#daily");
  }
});
client15.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "dly") {
    message.channel.send("#daily");
  }
});
client16.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "dly") {
    message.channel.send("#daily");
  }
});
client17.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "dly") {
    message.channel.send("#daily");
  }
});
client18.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "dly") {
    message.channel.send("#daily");
  }
});
client19.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "dly") {
    message.channel.send("#daily");
  }
});
client20.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "dly") {
    message.channel.send("#daily");
  }
});

// ======= [ Daily - INFO end ] ======== //

// ======= [ PROFILE - INFO ] ======== //

client.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "prof") {
    message.channel.send("#profile");
  }
});
client2.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "prof") {
    message.channel.send("#profile");
  }
});
client3.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "prof") {
    message.channel.send("#profile");
  }
});
client4.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "prof") {
    message.channel.send("#profile");
  }
});
client5.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "prof") {
    message.channel.send("#profile");
  }
});
client6.on("message", message => {
  // جمــيع الحقوق محفوظة لدي "Kahrbaa"
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "prof") {
    message.channel.send("#profile");
  }
});
client7.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return; // جمــيع الحقوق محفوظة لدي "Kahrbaa"
  if (message.content === prefix + "prof") {
    message.channel.send("#profile");
  }
});
client8.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "prof") {
    message.channel.send("#profile");
  }
}); // جمــيع الحقوق محفوظة لدي "Kahrbaa"
client9.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "prof") {
    message.channel.send("#profile"); // جمــيع الحقوق محفوظة لدي "Kahrbaa"
  }
});
client10.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "prof") {
    // جمــيع الحقوق محفوظة لدي "Kahrbaa"
    message.channel.send("#profile");
  }
});
client11.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "prof") {
    message.channel.send("#profile");
  }
});
client12.on("message", message => {
  // جمــيع الحقوق محفوظة لدي "Kahrbaa"
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "prof") {
    message.channel.send("#profile");
  }
});
client13.on("message", message => {
  // جمــيع الحقوق محفوظة لدي "Kahrbaa"
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "prof") {
    message.channel.send("#profile");
  }
});
client14.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "prof") {
    message.channel.send("#profile");
  }
});
client15.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "prof") {
    message.channel.send("#profile");
  }
});
client16.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "prof") {
    message.channel.send("#profile");
  }
});
client17.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "prof") {
    message.channel.send("#profile");
  }
});
client18.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "prof") {
    message.channel.send("#profile");
  }
});
client19.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "prof") {
    message.channel.send("#profile");
  }
});
client20.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "prof") {
    message.channel.send("#profile");
  }
}); // جمــيع الحقوق محفوظة لدي "Kahrbaa"

// ======= [ PROFILE - INFO end ] ======== //

// جمــيع الحقوق محفوظة لدي "Kahrbaa"



client.login("NzUxODQyMDEzNzExOTU4MTQ2.X1O-EA.xvaInH0ZJDQMc_DKs_BJWmwf9_M");
client2.login("NzUxODQyNjEwNDU2NTU5NzA4.X1O-fg.cKZRIXnO-JX7Z1ZgCCbtXKwlr-0");
client3.login("NzUxODQzMDc4Njk2MDc1MzQ3.X1O_AQ.wk_XYvfQSFbnZD2js_rypUVmG98");
client4.login("NzUxODQzNjE0MjE2MTU5MzE0.X1QfqQ.uW9OTtoukc2dns9QIVQqKQVKq5U");
client5.login("NzUxOTQ3MzU2OTkxMjU4NzA1.X1QgGw.IHOlBJFlqYdFKUkA8MygYg3s_UI");
client6.login("NzUxOTQ5NzAxOTYzNTc5NDA2.X1QiFw.bCCJNny0G1I21WpuICipFIgphbk");
client7.login("NzUxOTUwMDMwNjIxMTE0NDQ4.X1Qilg.M45bu2U1FYXGSUI9aWT5QW98GyM");
client8.login("NzUyMTM4NjM3OTQ4NDg1NjUy.X1TSDQ.KRFvyJYbJc5v8jlwodoRE4T7Ggc");
client9.login("NzUyMTM5NDY0Mjg0OTYyODE3.X1TSxw.MTayPObM6VQ9WXCjhW5fZwRjtFc");
client10.login("");
client11.login("");
client12.login("");
client13.login("");
client14.login("");
client15.login("");
client16.login("");
client17.login("");
client18.login("");
client19.login("");
client20.login("");
client21.login("");
client22.login("");
client23.login("");
client24.login("");
client25.login("");
client26.login("");
client27.login("");
client28.login("");
client29.login("");
client30.login("");
client31.login("");
client32.login("");
client33.login("");
client34.login("");
client35.login("");
client36.login("");
client37.login("");
client38.login("");
client39.login("");
client40.login("");
client41.login("");
client42.login("");
client43.login("");
client44.login("");
client45.login("");
client46.login("");
client47.login("");
client48.login("");
client49.login("");
client50.login("");
client51.login("");
client52.login("");
client53.login("");
client54.login("");
client55.login("");
client56.login("");
client57.login("");
client58.login("");
client59.login("");
client60.login("");
client61.login("");
client62.login("");
client63.login("");
client64.login("");
client65.login("");
client66.login("");
client67.login("");
client68.login("");
client69.login("");
client70.login("");
client71.login("");
client72.login("");
client73.login("");
client74.login("");
client75.login("");
client76.login("");
client77.login("");
client78.login("");
client79.login("");
client80.login("");
client81.login("");
client82.login("");
client83.login("");
client84.login("");
client85.login("");
client86.login("");
client87.login("");
client88.login("");
client89.login("");
client90.login("");
client91.login("");
client92.login("");
client93.login("");
client94.login("");
client95.login("");
client96.login("");
client97.login("");
client98.login("");
client99.login("");
client100.login("");