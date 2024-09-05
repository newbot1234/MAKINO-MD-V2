const fs = require("fs");
const chalk = require("chalk");
//const fs = require('fs-extra')
//if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//to enable function - true
//to disable function - false
//
global.available = false;
global.autoReadGc = false;
global.autoReadAll = false;
global.antitags = false;


//auto functioner
global.autoTyping = false;                //make true to enable auto typing
global.autoRecord = false;                //make true to enable auto recording
global.groupevent = false;                //This is the new variable for controlling group event handling.
global.statusseen = false;                 //make true to view statuses 


//
/*global.Owner = process.env.OWNER || "2347045174399";// Owner number
global.OwnerNumber = process.env.OWNER_NUMBER || "2347045174399" ;// Also owner number
global.ownertag = process.env.OWNER_TAG || "2347045174399";// Also owner number
global.sessID = process.env.sessID || ""; //Session ID here.
global.OwnerName = process.env.OWNER_NAME || "Tᴀɪʀᴀ Mᴀᴋɪɴᴏ";// Owner Name
global.BotName = "🐦Makino-md-v2";//Do not change 🥵
global.packname = process.env.PACKNAME || "Tᴀɪʀᴀ Mᴀᴋɪɴᴏ";//Sticker pack name.
global.author = "🐦Makino-md-v2 ᴍᴜʟᴛɪ-ᴅᴇᴠɪᴄᴇ";//Do not change                            //Do not change.
global.BotSourceCode = "https://github.com/anonphoenix007/MAKINO-MD-V2"; //Do not change or bot will not function.
global.SupportGroupLink = "https://chat.whatsapp.com/KEg0G3UUs1G39ikdyfF5Pm"; //Do not change!
global.dbase = process.env.DBASE || "";//Mongodb here
global.AuthorWhatsapp = "https://wa.me/2347080968564"; //Bot creator WhatsApp link,don't change or bot will not work.
*/
global.Owner = ["𝑅𝛥𝑆𝛪𝑌𝛥999"];
global.OwnerNumber = ["94783694260"];
global.ownertag = [""]; 
global.OwnerName =  "Tᴀɪʀᴀ Mᴀᴋɪɴᴏ";
global.BotName = "🐦Makino-md-v2";
global.packname = "Tᴀɪʀᴀ Mᴀᴋɪɴᴏ";                             //Do not change.
global.author = "🐦Makino md ᴍᴜʟᴛɪ-ᴅᴇᴠɪᴄᴇ";                               //Do not change.
global.BotSourceCode = "https://github.com/anonphoenix007/MAKINO-MD-V2"; //Do not change.
global.SupportGroupLink = "https://chat.whatsapp.com/KEg0G3UUs1G39ikdyfF5Pm "; 
global.sessID = process.env.sessID || "{"noiseKey":{"private":{"type":"Buffer","data":"eLGbes9bHghs3hvYd5uKhenRd2q3kVZsKIVJHQwWH0k="},"public":{"type":"Buffer","data":"2GnFZv9UlWpVb2jRdNyUxJxX7kVUem0+zI0H+cYm5Cs="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"GN8RHknYn+gSMbakUqQ/sWru9ze1t3dZKWNuMxYdnWg="},"public":{"type":"Buffer","data":"O8zpuD2BQ8GHSnxKmyy5WrstKryKGT5rNvunEu8omAs="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"wN6SDleb8ZssFgn4R/B3eA7e5m2qOpsjN7OK3JxSQFQ="},"public":{"type":"Buffer","data":"Uf011Mdqb2wtceimBUsc58uNNrdhE4bzTiv8rZwLXC4="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"8AvUbJIOcKCFY03kpSByhWTXmRLE25sW76uCHu2Tr3A="},"public":{"type":"Buffer","data":"oE6tAn1hjcJ/I4Pd51cGriHhLObP3amMREJ/7uLI/X8="}},"signature":{"type":"Buffer","data":"+s5wY88dHb8UNZZtmYPETravShd9AdQNMgdlCLd+R/lG2GNbKOwDrD3ZpNVjV5q+8OIJ8djQrFUS4BUfuhLcDw=="},"keyId":1},"registrationId":180,"advSecretKey":"kfOINvr96f8y3UzNcbm42afvvHsBtSsIsEFFzvYkIIE=","processedHistoryMessages":[],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"deviceId":"yjy70OlITBWkz_sWx1mqzQ","phoneId":"f323e042-bfaa-478d-acf7-b9ff35e6727f","identityId":{"type":"Buffer","data":"rHwuQ+qp/BkOOLPyeyEuvt8aaoU="},"registered":true,"backupToken":{"type":"Buffer","data":"MP9JFwEBo07oYCw6eJUostUSspo="},"registration":{},"pairingCode":"84A7SZ9C","me":{"id":"94783694260:60@s.whatsapp.net"},"account":{"details":"CNuIyusDEL3M5LYGGAEgACgA","accountSignatureKey":"42b6ErIxq4ANDddyOMAqHL4DJBW9kAcXtIHwztOp700=","accountSignature":"/syEmEo0+WmtaudxUCHOr1WAJ+7Nn0gATfWpi2FuCp6EpKIDjAJqpCnq1hCy9VQpE1CtMsn5WXXOgscvFLD4BA==","deviceSignature":"aXS992/B763Yua0cbyRpyl/c1BycJUqOt8K+UGvxBRJS/MSn8H8uXoRxcP2buTw0/fu+hH15L5oDzf7jc4JzDw=="},"signalIdentities":[{"identifier":{"name":"94783694260:60@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BeNm+hKyMauADQ3XcjjAKhy+AyQVvZAHF7SB8M7Tqe9N"}}],"platform":"android","lastAccountSyncTimestamp":1725507146,"myAppStateKeyId":"AAAAAKxC"}"; //Session ID here.
global.SupportGroupLink = "https://chat.whatsapp.com/KEg0G3UUs1G39ikdyfF5Pm"; //Do not change!
//global.dbase = process.env.DBASE || "";//Mongodb here
global.AuthorWhatsapp = "https://wa.me/2347080968564"; //Bot creator WhatsApp link,don't change or bot will not work.
//
global.sessionName = "session";                          //Do not change.


//
global.prefa = ["."];
//process.env.PREFIX || "/";// Prefix                                 //Default prefix here.
global.openAiAPI = "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";


//
global.location = "Lagos, Nigeria";                   
global.reactmoji = "🐦";
global.themeemoji = "😏";
global.vidmenu = { url: 'https://tenor.com/view/jujutsu-kaisen0-yuta-okkotsu-gif-26767662' };
global.websitex = "https://github.com/anonphoenix007";
global.lolhuman = "KaysaS";


//
global.BotLogo = fs.readFileSync("./Assets/pic1.jpg");
global.Thumb = fs.readFileSync("./Assets/pic9.jpg");
global.Thumb1 = fs.readFileSync("./Assets/pic5.jpg");
global.ErrorPic = fs.readFileSync("./Assets/pic7.jpg");


//
global.ntilinkytvid = []
global.ntilinkytch = []
global.ntilinkig = []
global.ntilinkfb = []
global.ntilinktg = []
global.ntilinktt = []
global.ntilinktwt = []
global.ntilinkall = []
global.nticall = []
global.ntwame = []
global.nttoxic = []
global.ntnsfw = []
global.ntvirtex = []
global.rkyt = []
global.wlcm = []
global.gcrevoke = []
global.autorep = []
global.ntilink = []


//
global.mess = {
    jobdone: 'Here you go...',
    useradmin: 'Only group Admin can use the command 😂 ',
    botadmin: 'Make me Admin first 😌📍.',
    botowner: 'Only my *Owner* can use this command,Dont trespass, Baka!',
    grouponly: 'This command is only made for *Groups*, Baka!',
    privateonly: 'This command is only made for *Private Chat*, Baka!',
    botonly: 'Only the *Bot itself* can use this command!',
    waiting: 'Wait a lil bit (¬_¬)ﾉ...',
    nolink: ' provide me *link*, Baka!',
    error: 'An error occurd!',
    banned: 'You cant use the commands because you Are *Banned*',
    bangc: 'This Group is *Banned* from using Commands!',
    nonsfw: 'Dont be a pervert,idiot! This is not a NSFW enabled group!'
    
}

global.limitawal = {
  premium: "Infinity",
  free: 2,
  monayawal: 1000,
};

global.limitawal = {
  rakyat: "Infinity",
  free: 100,
};

global.APIs = {
  zenz: "https://zenzapis.xyz",
};
global.APIKeys = {
  "https://zenzapis.xyz": "5d1197db351b",
};
