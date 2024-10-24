const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923226487042";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_18_55_10_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDEyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDEzLFxuICAgICAgICAyMjMsXG4gICAgICAgIDg4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgODAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNTUsXG4gICAgICAgIDE2MixcbiAgICAgICAgMzAsXG4gICAgICAgIDg1LFxuICAgICAgICAzMSxcbiAgICAgICAgNjQsXG4gICAgICAgIDIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNjQsXG4gICAgICAgIDIzLFxuICAgICAgICAyMzEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDgsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjIxLFxuICAgICAgICAyNyxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMDEsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTIwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MixcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNzUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgOTQsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTU2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgODEsXG4gICAgICAgIDI0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDQyLFxuICAgICAgICAxOTksXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjUxLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNjksXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTI1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNCxcbiAgICAgICAgMzUsXG4gICAgICAgIDI0MixcbiAgICAgICAgOSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTcwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNDksXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMjksXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjQwLFxuICAgICAgICA3LFxuICAgICAgICAxOTksXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNjgsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTgsXG4gICAgICAgIDE1LFxuICAgICAgICA1MixcbiAgICAgICAgMTY5LFxuICAgICAgICA5OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OCxcbiAgICAgICAgODQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMDksXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTIsXG4gICAgICAgIDU3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDExLFxuICAgICAgICAxNDQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTk2LFxuICAgICAgICA2MSxcbiAgICAgICAgMTU3LFxuICAgICAgICAzMixcbiAgICAgICAgOTcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgODIsXG4gICAgICAgIDI1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE0NixcbiAgICAgICAgNTMsXG4gICAgICAgIDUwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjYsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MixcbiAgICAgICAgNzYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMzEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNTksXG4gICAgICAgIDIwMixcbiAgICAgICAgODcsXG4gICAgICAgIDk4LFxuICAgICAgICAxOTksXG4gICAgICAgIDU4LFxuICAgICAgICA3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDYyLFxuICAgICAgICA1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNTcsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTY5LFxuICAgICAgICA1MCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDcwLFxuICAgICAgICA4MyxcbiAgICAgICAgMTYsXG4gICAgICAgIDg4LFxuICAgICAgICA5LFxuICAgICAgICA5N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDgsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTk5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDkzLFxuICAgICAgICAxNjksXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxODEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNDYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxOCxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMyxcbiAgICAgICAgNzUsXG4gICAgICAgIDM5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTIzLFxuICAgICAgICAzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDM5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE3LFxuICAgICAgICAxNDksXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMTYsXG4gICAgICAgIDMxLFxuICAgICAgICA0MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxMTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDExM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExOSxcbiAgICAgICAgMjExLFxuICAgICAgICAxMDIsXG4gICAgICAgIDk2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDEyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNDcsXG4gICAgICAgIDczLFxuICAgICAgICAxOTEsXG4gICAgICAgIDMyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMzgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNDUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTI0LFxuICAgICAgICA0MixcbiAgICAgICAgMTU4LFxuICAgICAgICAxODcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTY2LFxuICAgICAgICA0MixcbiAgICAgICAgMTA3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTksXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNDEsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDgwLFxuICAgICAgICAxODgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNzYsXG4gICAgICAgIDc0LFxuICAgICAgICA2NSxcbiAgICAgICAgMjAyLFxuICAgICAgICA5OSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNzQsXG4gICAgICAgIDI1MixcbiAgICAgICAgODIsXG4gICAgICAgIDUzLFxuICAgICAgICAxNSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDExLFxuICAgICAgICAzMyxcbiAgICAgICAgMTM1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA1OCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJUaUZnTlU3WEpSZ3p3M3lsc1dKWEYxVDUwaFBqQzRDc2gzbmRwVVB1R2o0PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzIyNjQ4NzA0MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRkM1MDU3NUU2QUM5RDZBNDhEQ0Y5QTYwRTE2QURGMUFcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzI5Nzk2MDk2XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMjI2NDg3MDQyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIwMTM1RjY5NTU0NUJEMDg1QjgyNzI3QTkwQzY4MUJEMVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3Mjk3OTYwOTZcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMyMjY0ODcwNDJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjZFQ0U3QjA5NUVCODJERUUwMDU1NjZBNTE2NDc3MzRDXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyOTc5NjA5N1xuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzIyNjQ4NzA0MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNDBEN0Q0QTVBODNBQTkxNUExMjg3NzA2NTgxQUJCM0RcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzI5Nzk2MDk3XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlhsWmhXUHg2UnhHM3hWeGJoUzByaWdcIixcbiAgXCJwaG9uZUlkXCI6IFwiZDdiMWE1N2QtMGUzYS00OWQ1LThkYTItNzg1YTQ4YzVjYmNiXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIwNCxcbiAgICAgIDI1MixcbiAgICAgIDE0NCxcbiAgICAgIDE1NCxcbiAgICAgIDM4LFxuICAgICAgNDEsXG4gICAgICAxMTAsXG4gICAgICA4MixcbiAgICAgIDE2MyxcbiAgICAgIDE1OCxcbiAgICAgIDQ0LFxuICAgICAgMTY2LFxuICAgICAgNjYsXG4gICAgICAxNyxcbiAgICAgIDkzLFxuICAgICAgMjQ3LFxuICAgICAgMTIwLFxuICAgICAgMzYsXG4gICAgICAyNixcbiAgICAgIDExN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMDYsXG4gICAgICAyNCxcbiAgICAgIDIxMixcbiAgICAgIDEyMCxcbiAgICAgIDIwLFxuICAgICAgMTYxLFxuICAgICAgNTcsXG4gICAgICAxMDYsXG4gICAgICA5NSxcbiAgICAgIDI3LFxuICAgICAgMTgwLFxuICAgICAgNTEsXG4gICAgICAxNjIsXG4gICAgICA4NyxcbiAgICAgIDY0LFxuICAgICAgMTMzLFxuICAgICAgNjEsXG4gICAgICAxMDcsXG4gICAgICAxNjYsXG4gICAgICAyMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJHUFdUTFlUMVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMjI2NDg3MDQyOjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJOXCIsXG4gICAgXCJsaWRcIjogXCIxNTQ5NjgxMjQ3ODU4MDoyQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0ttOXdSUVErcS9xdUFZWUFTQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiQUZISytMRThGUjB2ZTBCTkZQTEpKK0F5ZzRZdjFmd3lQWFAvN28vRFJTVT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJFakFjdEFIbUo3WE82VkZ6Z1E5b2NGU3Y5MDdEakxYU2JlRzFxWElGekkzRnQ3T0lkWkxzVkdkZ1JSQm95T2d5RzlkSE1GYXJvUm9lczkzRFk3WVNDQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJKWldFZzZpd0JwbUdDY0RDU2RFbmF2TGYrOTdKNktHR09nTG9QdkxranFVb01NMjh3d3Q4ZWNteldSeEg5NUhpM1ovcThZMzA4eHB2NGpMekJsMlpnZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMyMjY0ODcwNDI6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDM3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3Mjk3OTYwOTQsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFJdGFcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUl0YS5qc29uIjogIntcImtleURhdGFcIjpcIm9IZWdmNjBlNWxkWHdGWFR5dmdsdVFzSERIRjJqTlBFaENUNXBRaUttRzQ9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NDMwMTU4NDksXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyOTc5NjA5NTMyOVwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
