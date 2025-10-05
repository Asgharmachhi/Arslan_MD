const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ARSLAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUZGZ1NIcmpYRk1SWnVuZk5weDFDV2tvVWcwNHJLRis1aWFaTFhZd3NWbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT2wxZ21lMWlSczlZWlVwMVpRVnkzTlRBcElKL3poMlVsZmx3eFdONHVCRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnRDhoZWViQ203VGZSeDdBM3ovZ2VwcW1XZXFqRC94cmlOMFAzdUh5QkZrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJkQXdDVUtXaTg4VHpHSVBRUjJQY1BwZGRiVGRvbTBjTnVHdVpiUlNsR1dvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9FcXkzSHVHYmNLRnplSHdGZElXSWVwM1dQQkFJYzhIVFZJazY1Z05RVU09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldyTXBKaDVSSWJkMzk2SmtrNnRzdVNrbDQ2YnFqTXE3WVI5MVcwWjl6QUk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUxxVU51eTlzbVZPQUxOYTVSSjRiV2dodWFtY3NWZ3QreTgxWGJqbmowUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaWkvSnpDaG15d1FQUldmK0JTWlZkL293UWxpQUZZbXh0UGoxbXhlcEJVdz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ilhta1FZZXp4SzBBUDZ3aHY0QTczL1dGN0ZiQ2pEUHk2cldibmxqa2RKODNVcUhKQ2RJa2xlMmw3YkwvMVVzemEwdzkycjcreGprQ3RXT0xJYjRyeGd3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTQ2LCJhZHZTZWNyZXRLZXkiOiJDRC9vRGwvcHhmcmY5RTNLTUl2Y1cweUt3UXBvMjlHMWxPNzdrRkY3Rm1JPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkyMzI0MzgzMTQ2NUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBQ0M3MTMzODkyMjgwMTBBRkEwQURFOURCNjJENDdBNCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzU5NjY4MTA3fSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5MjMyNDM4MzE0NjVAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQUNFRTRCNjAyMjgzNDAyQTBDMjcxMkIwNjM4OUVCNkYifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1OTY2ODEwN31dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiNEpUOTZLRzEiLCJtZSI6eyJpZCI6IjkyMzI0MzgzMTQ2NToxMEBzLndoYXRzYXBwLm5ldCIsImxpZCI6IjE0MzYzNzA5NDYyMTIwNjoxMEBsaWQiLCJuYW1lIjoiTWlIUkstU0lSIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNPL0NzdVFHRUlYUGljY0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJkWWRiSGJCZHFJSnBLd1NWM1JkZDdzSEJScThqZ3dsM3gwZFBOV3dzb1U4PSIsImFjY291bnRTaWduYXR1cmUiOiJoL1FSRmtraERSZ25jQzdYcjN1WXFjK0E0VWkyWXRMSTVPdXBmenRSbHpHU3ZoZUp2QkNXUmhXV2oxbGxNVytyc0d6bDhHellEbHQ2Qmhaak9xMHdCZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoieW1uL0hJZnZJTFZFZE5Wa3VmelFFdlpnTWFMSGc5SlNzWVZFQXUySWs1VGM0ZmpTNW9wckI0d1BIVHFJdGFYczVhY2lydG5hSUtvcHhSYm9rMDc0Z0E9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjMyNDM4MzE0NjU6MTBAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWFdIV3gyd1hhaUNhU3NFbGQwWFhlN0J3VWF2STRNSmQ4ZEhUelZzTEtGUCJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FnSURRPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzU5NjY4MTAzLCJsYXN0UHJvcEhhc2giOiIxSzRoSDQiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU9qYSJ9",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY Arslan_MD 🇵🇰*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "false",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "false",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "false",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "true",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/lcpy9f.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "Arslan_MD",
// add bot namw here for menu
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// true to get auto status react
STICKER_NAME: process.env.STICKER_NAME || "Arslan_MD",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923237045919",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "ArslanMD Official",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*©𝙿𝙾𝚆𝙴𝚁𝙴𝙳 𝙱𝚈 Arslan_MD*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/lcpy9f.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> I'm alive*Arslan_MD*🇵🇰",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "true",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923237045919",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "false",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
