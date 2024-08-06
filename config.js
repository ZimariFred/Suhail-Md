const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_23_08_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTcwLFxuICAgICAgICA1OSxcbiAgICAgICAgNjgsXG4gICAgICAgIDksXG4gICAgICAgIDY3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTgsXG4gICAgICAgIDExNCxcbiAgICAgICAgNyxcbiAgICAgICAgMTI3LFxuICAgICAgICAyOCxcbiAgICAgICAgODUsXG4gICAgICAgIDQ2LFxuICAgICAgICA1NSxcbiAgICAgICAgMTAsXG4gICAgICAgIDgyLFxuICAgICAgICAxNSxcbiAgICAgICAgMTksXG4gICAgICAgIDU4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTIxLFxuICAgICAgICAyOSxcbiAgICAgICAgMzMsXG4gICAgICAgIDI5LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNzNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODksXG4gICAgICAgIDEzMixcbiAgICAgICAgMTA3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTcyLFxuICAgICAgICA3OCxcbiAgICAgICAgMTM1LFxuICAgICAgICAyNCxcbiAgICAgICAgMjMyLFxuICAgICAgICA1NCxcbiAgICAgICAgMTUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxLFxuICAgICAgICA0MyxcbiAgICAgICAgMTM4LFxuICAgICAgICA0MSxcbiAgICAgICAgMjUzLFxuICAgICAgICA0OCxcbiAgICAgICAgMTA4LFxuICAgICAgICA1OCxcbiAgICAgICAgMjIsXG4gICAgICAgIDc4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDYzLFxuICAgICAgICA0MCxcbiAgICAgICAgMTYzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTM3LFxuICAgICAgICA5NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDQ2LFxuICAgICAgICAxOCxcbiAgICAgICAgNTUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgOCxcbiAgICAgICAgNDEsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjMxLFxuICAgICAgICA4MSxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDc5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNDEsXG4gICAgICAgIDY0LFxuICAgICAgICAzOCxcbiAgICAgICAgNzQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTUsXG4gICAgICAgIDkwLFxuICAgICAgICA3MCxcbiAgICAgICAgMTMwLFxuICAgICAgICA3MixcbiAgICAgICAgMTY3LFxuICAgICAgICA1MyxcbiAgICAgICAgMzAsXG4gICAgICAgIDQwLFxuICAgICAgICAxMDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzQsXG4gICAgICAgIDEsXG4gICAgICAgIDIyLFxuICAgICAgICA1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNDEsXG4gICAgICAgIDM3LFxuICAgICAgICAwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDg1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDYzLFxuICAgICAgICAyMzksXG4gICAgICAgIDE0NixcbiAgICAgICAgMjI5LFxuICAgICAgICA0NCxcbiAgICAgICAgODUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNzMsXG4gICAgICAgIDksXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMSxcbiAgICAgICAgNTMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNTUsXG4gICAgICAgIDk1LFxuICAgICAgICAxOCxcbiAgICAgICAgMjQ2LFxuICAgICAgICA1NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNDMsXG4gICAgICAgIDE5LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjQ3LFxuICAgICAgICA3OSxcbiAgICAgICAgNjQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE1LFxuICAgICAgICAyMTMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjQzLFxuICAgICAgICA5OCxcbiAgICAgICAgMTUyLFxuICAgICAgICA2MCxcbiAgICAgICAgMjQsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDcwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDQ4LFxuICAgICAgICA3OSxcbiAgICAgICAgMjU0LFxuICAgICAgICA2OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgOCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE3LFxuICAgICAgICAxOTgsXG4gICAgICAgIDExMixcbiAgICAgICAgMzcsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTE4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgODQsXG4gICAgICAgIDMzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMDksXG4gICAgICAgIDE4NCxcbiAgICAgICAgNTYsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNyxcbiAgICAgICAgMTM1LFxuICAgICAgICA5MCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxODMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjU1LFxuICAgICAgICA1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA2LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA5NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgODksXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA0M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzOSxcbiAgICAgICAgNzUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNDksXG4gICAgICAgIDE3NixcbiAgICAgICAgODksXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTIsXG4gICAgICAgIDk5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDUzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDgwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjE3LFxuICAgICAgICA1MSxcbiAgICAgICAgNDcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNTUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMjcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMzYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNDAsXG4gICAgICAgIDkxLFxuICAgICAgICA0MSxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxODEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTksXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMjksXG4gICAgICAgIDE5MixcbiAgICAgICAgMTA3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIwLFxuICAgICAgICAxODUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMzYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMjksXG4gICAgICAgIDU4LFxuICAgICAgICA3XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMzAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiaFM5Rm00U3Z4Y3BaQ0J2WGF6NnJFMjRlckdSWlZVMkFJaWhpdm5VTUlrYz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNTQ3NTY4NTkwMTFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkFDMDYwNTBBQTJEOTQwMkNCMEJDNjE3NDlCOUU3RUE5XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMjkzMjYwNlxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCIyaThkZkxkQlFXdWZpSUh2eUtEblVBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjk2ODk2MTUzLWY2YTAtNGUzYS1hYzJjLTA0Zjc3NTBiZWFjZFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA4OCxcbiAgICAgIDExOSxcbiAgICAgIDExNixcbiAgICAgIDIwLFxuICAgICAgMTgsXG4gICAgICAxMDksXG4gICAgICAxMjgsXG4gICAgICA2OSxcbiAgICAgIDczLFxuICAgICAgMTM5LFxuICAgICAgMTE0LFxuICAgICAgNTAsXG4gICAgICA3NCxcbiAgICAgIDEwNSxcbiAgICAgIDExOCxcbiAgICAgIDIyNSxcbiAgICAgIDI0OSxcbiAgICAgIDExMCxcbiAgICAgIDY2LFxuICAgICAgMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTk2LFxuICAgICAgMjMxLFxuICAgICAgMTIxLFxuICAgICAgNjksXG4gICAgICAyNDUsXG4gICAgICAxLFxuICAgICAgMTk4LFxuICAgICAgODcsXG4gICAgICAzMSxcbiAgICAgIDcwLFxuICAgICAgMTE0LFxuICAgICAgMTgyLFxuICAgICAgMTk5LFxuICAgICAgMTIzLFxuICAgICAgOTMsXG4gICAgICAxNjQsXG4gICAgICAyMTUsXG4gICAgICAyMjEsXG4gICAgICA4NixcbiAgICAgIDE4MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ095cmpwa0dFUFc2eDdVR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwibUtCOEJBeUdWdWpyOHZUUHpnd2EwanNmNURhaDA2bTRBZE1xckdlUHEyaz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI2M05CMHNLelhtNS9jUHlEQWRlanErNUJOZEhNQUlub0RhM1ZTbUVveVFxU1daK2Nma1dOYVVuVTl0aE0wTkhmZXFubHlERU5JdkNvbjRLZ1hZYitCZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJGdGtmdG9KVlpNQ3NBd3VpSjN3YU4yVkVEcHhVUXlLUnVMYVlVa3E3YjRRV3ZXUDRjSEFzbEZ1OFZUMFU2QVErcHNaRkJhdStidkxHcmtHbGxFZDVEZz09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NDc1Njg1OTAxMToxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI1NjkxNzQyNjc0NTQ3NDoxQGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU0NzU2ODU5MDExOjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTA1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjI5MzI2MDIsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFKaEpcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUpoSi5qc29uIjogIntcImtleURhdGFcIjpcImRpU2hzanVuMlZBYXNuNHNEVFBOdjdsMWZjUlVFMytxLy92Uml5V2lTQTQ9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTY2MzI3NjUyNCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIyOTMyNjA1OTkzXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "*",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
