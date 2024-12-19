
require('./settings')
const { makeWASocket, makeCacheableSignalKeyStore, downloadContentFromMessage, emitGroupParticipantsUpdate, emitGroupUpdate, generateWAMessageContent, generateWAMessage, makeInMemoryStore, prepareWAMessageMedia, generateWAMessageFromContent, MediaType, areJidsSameUser, WAMessageStatus, downloadAndSaveMediaMessage, AuthenticationState, GroupMetadata, initInMemoryKeyStore, getContentType, MiscMessageGenerationOptions, useSingleFileAuthState, BufferJSON, WAMessageProto, MessageOptions, WAFlag, WANode, WAMetric, ChatModification, MessageTypeProto, WALocationMessage, ReconnectMode, WAContextInfo, proto, WAGroupMetadata, ProxyAgent, waChatKey, MimetypeMap, MediaPathMap, WAContactMessage, WAContactsArrayMessage, WAGroupInviteMessage, WATextMessage, WAMessageContent, WAMessage, BaileysError, WA_MESSAGE_STATUS_TYPE, MediaConnInfo, URL_REGEX, WAUrlInfo, WA_DEFAULT_EPHEMERAL, WAMediaUpload, mentionedJid, processTime, Browser, MessageType, Presence, WA_MESSAGE_STUB_TYPES, Mimetype, relayWAMessage, Browsers, GroupSettingChange, DisconnectReason, WASocket, getStream, WAProto, isBaileys, PHONENUMBER_MCC, AnyMessageContent, useMultiFileAuthState, fetchLatestBaileysVersion, templateMessage, InteractiveMessage, Header } = require('@whiskeysockets/baileys')
const { exec, spawn, execSync } = require("child_process")
const fs = require('fs')
const util = require('util')
const fetch = require('node-fetch')
const path = require('path')
const axios = require('axios')
const chalk = require('chalk')
const googleTTS = require("google-tts-api");
const acrcloud = require ('acrcloud');
const FormData = require('form-data');
const cheerio = require('cheerio')
const { randomBytes } = require('crypto')
const { performance } = require("perf_hooks");
const process = require('process');
const moment = require("moment-timezone")
const lolcatjs = require('lolcatjs')
const os = require('os');
const scp2 = require("./lib/scraper2");
const checkDiskSpace = require('check-disk-space').default;
const speed = require('performance-now')
const yts = require("yt-search")
const jsobfus = require("javascript-obfuscator");
const gifted = require('gifted-dls');
const { translate } = require("@vitalets/google-translate-api");
const more = String.fromCharCode(8206);
const readmore = more.repeat(4001);
const timestampp = speed();
const latensi = speed() - timestampp
const { bytesToSize, checkBandwidth, formatSize, jsonformat, nganuin, shorturl, color } = require('./lib/function');
const { addExif } = require('./lib/exif');
const {
  TelegraPh,
  UploadFileUgu,
  webp2mp4File,
  floNime,
} = require("./lib/uploader");
const {
  toAudio,
  toPTT,
  toVideo,
  ffmpeg,
  addExifAvatar,
} = require("./lib/converter");
const {
    smsg,
    formatDate,
    getTime,
    getGroupAdmins,
    formatp,
    await,
    sleep,
    isUrl,
    runtime,   
    clockString,
    msToDate,
    sort,
    toNumber,
    enumGetKey,
    fetchJson,
    getBuffer,
    json,
    delay,
    format,
    logic,
    generateProfilePicture,
    parseMention,
    getRandom,
    fetchBuffer,
    buffergif,
    GIFBufferToVideoBuffer,
    totalcase
} = require('./lib/myfunc')

//error handling
const errorLog = new Map();
const ERROR_EXPIRY_TIME = 60000; // 60 seconds

const recordError = (error) => {
  const now = Date.now();
  errorLog.set(error, now);
  setTimeout(() => errorLog.delete(error), ERROR_EXPIRY_TIME);
};

const shouldLogError = (error) => {
  const now = Date.now();
  if (errorLog.has(error)) {
    const lastLoggedTime = errorLog.get(error);
    if (now - lastLoggedTime < ERROR_EXPIRY_TIME) {
      return false;
    }
  }
  return true;
};

//Images
const tylorkid1 = fs.readFileSync("./Media/Images/Xploader1.jpg");
const tylorkid2 = fs.readFileSync("./Media/Images/Xploader2.jpg");
const tylorkid3 = fs.readFileSync("./Media/Images/Xploader3.jpg");
const tylorkid4 = fs.readFileSync("./Media/Images/Xploader4.jpg");
const tylorkid5 = fs.readFileSync("./Media/Images/Xploader5.jpg");

//Version
const versions = require("./package.json").version

//badwords
const bad = JSON.parse(fs.readFileSync("./src/badwords.json")); 

//Shazam
const acr = new acrcloud({
    host: 'identify-eu-west-1.acrcloud.com',
    access_key: '882a7ef12dc0dc408f70a2f3f4724340',
    access_secret: 'qVvKAxknV7bUdtxjXS22b5ssvWYxpnVndhy2isXP'
});

//Catbox upload
const { uploadMedia, handleMediaUpload } = require('./lib/catbox'); 

//database 
global.db.data = JSON.parse(fs.readFileSync("./src/database.json"));
if (global.db.data)
  global.db.data = {
    sticker: {},
    database: {},
    game: {},
    others: {},
    users: {},
    chats: {},
    settings: {},
    ...(global.db.data || {}),
  };

module.exports = Xploader = async (Xploader, m, chatUpdate, store) => {
try {
   const { type, quotedMsg, mentioned, now, fromMe } = m;
    var body =
      m.mtype === "conversation"
        ? m.message.conversation
        : m.mtype == "imageMessage"
        ? m.message.imageMessage.caption
        : m.mtype == "videoMessage"
        ? m.message.videoMessage.caption
        : m.mtype == "extendedTextMessage"
        ? m.message.extendedTextMessage.text
        : m.mtype == "buttonsResponseMessage"
        ? m.message.buttonsResponseMessage.selectedButtonId
        : m.mtype == "listResponseMessage"
        ? m.message.listResponseMessage.singleSelectReply.selectedRowId
        : m.mtype == "templateButtonReplyMessage"
        ? m.message.templateButtonReplyMessage.selectedId
        : m.mtype === "messageContextInfo"
        ? m.message.buttonsResponseMessage?.selectedButtonId ||
          m.message.listResponseMessage?.singleSelectReply.selectedRowId ||
          m.text
        : "";
    var budy = typeof m.text == "string" ? m.text : "";
    //prefix 1
    var prefix = [".", "/"]
      ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body)
        ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0]
        : ""
      : xprefix;
    const isCmd = body.startsWith(prefix, "");
    const isCmd2 = body.startsWith(prefix);
    const command = body
      .replace(prefix, "")
      .trim()
      .split(/ +/)
      .shift()
      .toLowerCase();
       //prefix 2
    const pric = /^#.¦|\\^/.test(body) ? body.match(/^#.¦|\\^/gi) : xprefix;
    const XpBotbody = body.startsWith(pric);
    const isCommand = XpBotbody
      ? body.replace(pric, "").trim().split(/ +/).shift().toLowerCase()
      : "";
      
const args = body.trim().split(/ +/).slice(1);
const full_args = body.replace(command, '').slice(1).trim();
const pushname = m.pushName || "No Name";
const botNumber = await Xploader.decodeJid(Xploader.user.id);
const sender = m.sender
const senderNumber = sender.split('@')[0]
const isCreator = [botNumber, ...global.ownernumber]
      .map((v) => v.replace(/[^0-9]/g, "") + "@s.whatsapp.net")
      .includes(m.sender);
const itsMe = m.sender == botNumber ? true : false;
const text = q = args.join(" ");
const from = m.key.remoteJid;
const fatkuns = m.quoted || m;
const quoted =
      fatkuns.mtype == "buttonsMessage"
        ? fatkuns[Object.keys(fatkuns)[1]]
        : fatkuns.mtype == "templateMessage"
        ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]]
        : fatkuns.mtype == "product"
        ? fatkuns[Object.keys(fatkuns)[0]]
        : m.quoted
        ? m.quoted
        : m;
const mime = (quoted.msg || quoted).mimetype || "";
 const qmsg = quoted.msg || quoted;
const isMedia = /image|video|sticker|audio/.test(mime);
const isImage = (type === 'imageMessage')
const isVideo = (type === 'videoMessage')
const isSticker = (type == 'stickerMessage')
const isAudio = (type == 'audioMessage')
//group
    const groupMetadata = m.isGroup
      ? await Xploader.groupMetadata(m.chat).catch((e) => {})
      : "";
    const groupName = m.isGroup ? groupMetadata.subject : "";
    const participants = m.isGroup ? await groupMetadata.participants : "";
   const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : "";
    const isGroupAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false;
    const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false;
const isBot = botNumber.includes(senderNumber)
    const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false;
    const groupOwner = m.isGroup ? groupMetadata.owner : "";
    const isGroupOwner = m.isGroup
      ? (groupOwner ? groupOwner : groupAdmins).includes(m.sender)
      : false;
const froms = m.quoted ? m.quoted.sender : text ? (text.replace(/[^0-9]/g, '') ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : false) : false;
const isMediaLily = m.mtype
//================== [ TIME ] ==================//
const dayz = moment(Date.now()).tz(`${timezones}`).locale('en').format('dddd');
const timez = moment(Date.now()).tz(`${timezones}`).locale('en').format('HH:mm:ss z');
const datez = moment(Date.now()).tz(`${timezones}`).format("DD/MM/YYYY");
if (timez < "23:59:00") {
  var timewisher = `Good Night 🌌`;
}
if (timez < "19:00:00") {
  var timewisher = `Good Evening 🌃`;
}
if (timez < "18:00:00") {
  var timewisher = `Good Evening 🌃`;
}
if (timez < "15:00:00") {
  var timewisher = `Good Afternoon 🌅`;
}
if (timez < "11:00:00") {
  var timewisher = `Good Morning 🌄`;
}
if (timez < "05:00:00") {
  var timewisher = `Good Morning 🌄`;
}


//================== [ FUNCTION ] ==================//
async function dellCase(filePath, caseNameToRemove) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('There is an error:', err);
            return;
        }

        const regex = new RegExp(`case\\s+'${caseNameToRemove}':[\\s\\S]*?break`, 'g');
        const modifiedData = data.replace(regex, '');

        fs.writeFile(filePath, modifiedData, 'utf8', (err) => {
            if (err) {
                console.error('An error occurred while writing the file:', err);
                return;
            }

            console.log(`The text of case '${caseNameToRemove}' has been removed from the file.`);
        });
    });
}


 //ytmp3 downloader
   async function downloadXMp3 (link) {
try {
Xploader.sendMessage(m.chat, { react: { text: '⏯️', key: m.key }})
let kyuu = await fetchJson (`https://api.siputzx.my.id/api/d/ytmp3?url=${link}`)
Xploader.sendMessage(m.chat, {
 audio: {url: kyuu.data.dl}, 
 mimetype: "audio/mpeg",
      contextInfo: { 
        externalAdReply: { 
          title: botname, 
           body: `${kyuu.data.title}`,
          thumbnailUrl: `${search.all[0].thumbnail}`,
          sourceUrl: `${telaso}`,
          mediaType: 2,
          mediaUrl: `${search.all[0].thumbnail}`,
          showAdAttribution: true,
          renderLargerThumbnail: false
        } 
      } 
    }, { quoted: m });
  
  } catch (error) {
    console.error(error);
    m.reply(`Error: ${error.message}`);
  }
}
async function downloadXMp4 (link) {
try {
Xploader.sendMessage(m.chat, { react: { text: '🎬', key: m.key }})
	let kyuu = await fetchJson (`https://api.siputzx.my.id/api/d/ytmp4?url=${link}`)
await Xploader.sendMessage(m.chat, {
 video: {url: kyuu.data.dl}, 
 caption: `©𝐗𝐩𝐥𝐨𝐚𝐝𝐞𝐫𝐁𝐨𝐭` ,
 contextInfo: {
        externalAdReply: {
          title: botname,
          body: `${search.all[0].title}`,
          thumbnailUrl: `${search.all[0].thumbnail}`,
          sourceUrl: `${telaso}`,
          mediaType: 2,
          mediaUrl: `${telaso}`,
        }
      }
    }, { quoted: m });

  } catch (error) {
    console.error(error);
    m.reply(`Error: ${error.message}`);
  }
}
async function downloadXMp3Doc (link) {
try {
Xploader.sendMessage(m.chat, { react: { text: '⏯️', key: m.key }})
let kyuu = await fetchJson (`https://api.siputzx.my.id/api/d/ytmp3?url=${link}`)
Xploader.sendMessage(m.chat, {
 document: {url: kyuu.data.dl},
mimetype: "audio/mp3",
 fileName: `${kyuu.data.title}.mp3`,
      contextInfo: { 
        externalAdReply: { 
          title: botname, 
           body: `${kyuu.data.title}`,
          thumbnailUrl: `${search.all[0].thumbnail}`,
          sourceUrl: `${telaso}`,
          mediaType: 2,
          mediaUrl: `${search.all[0].thumbnail}`,
          showAdAttribution: true,
          renderLargerThumbnail: false
        } 
      } 
    }, { quoted: m });
  } catch (error) {
    console.error(error);
   m.reply(`Error: ${error.message}`);
  }
}
async function downloadXMp4Doc (link) {
try {
Xploader.sendMessage(m.chat, { react: { text: '🎬', key: m.key }})
	let kyuu = await fetchJson (`https://api.siputzx.my.id/api/d/ytmp4?url=${link}`)
await Xploader.sendMessage(m.chat, {
 document: {url: kyuu.data.dl},
mimetype: "video/mp4",
 fileName: `${search.all[0].title}.mp4`,
 contextInfo: {
        externalAdReply: {
          title: botname,
          body: `${search.all[0].title}`,
          thumbnailUrl: `${search.all[0].thumbnail}`,
          sourceUrl: `${telaso}`,
          mediaType: 2,
          mediaUrl: `${telaso}`,
        }
      }
    }, { quoted: m });
  } catch (error) {
    console.error(error);
   m.reply(`Error: ${error.message}`);
  }
}


async function Telesticker(url) {
      return new Promise(async (resolve, reject) => {
        if (!url.match(/(https:\/\/t.me\/addstickers\/)/gi))
          return m.reply("*_Enter your telegram sticker link_*");
        packName = url.replace("https://t.me/addstickers/", "");
        data = await axios(
          `https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getStickerSet?name=${encodeURIComponent(
            packName
          )}`,
          { method: "GET", headers: { "User-Agent": "GoogleBot" } }
        );
        const XpBotresult = [];
        for (let i = 0; i < data.data.result.stickers.length; i++) {
          fileId = data.data.result.stickers[i].thumb.file_id;
          data2 = await axios(
            `https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getFile?file_id=${fileId}`
          );
          result = {
            status: 200,
            author: "Tylor",
            url:
              "https://api.telegram.org/file/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/" +
              data2.data.result.file_path,
          };
          XpBotresult.push(result);
        }
        resolve(XpBotresult);
      });
    }
    
async function ephoto(url, texk) {
      let form = new FormData();
      let gT = await axios.get(url, {
        headers: {
          "user-agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
        },
      });
      let $ = cheerio.load(gT.data);
      let text = texk;
      let token = $("input[name=token]").val();
      let build_server = $("input[name=build_server]").val();
      let build_server_id = $("input[name=build_server_id]").val();
      form.append("text[]", text);
      form.append("token", token);
      form.append("build_server", build_server);
      form.append("build_server_id", build_server_id);
      let res = await axios({
        url: url,
        method: "POST",
        data: form,
        headers: {
          Accept: "*/*",
          "Accept-Language": "en-US,en;q=0.9",
          "user-agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
          cookie: gT.headers["set-cookie"]?.join("; "),
          "Content-Type": "multipart/form-data",
        },
      });
      let $$ = cheerio.load(res.data);
      let json = JSON.parse($$("input[name=form_value_input]").val());
      json["text[]"] = json.text;
      delete json.text;
      let { data } = await axios.post(
        "https://en.ephoto360.com/effect/create-image",
        new URLSearchParams(json),
        {
          headers: {
            "user-agent":
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
            cookie: gT.headers["set-cookie"].join("; "),
          },
        }
      );
      return build_server + data.image;
 }

//obfuscator 
async function obfus(query) {
      return new Promise((resolve, reject) => {
        try {
          const obfuscationResult = jsobfus.obfuscate(query, {
            compact: false,
            controlFlowFlattening: true,
            controlFlowFlatteningThreshold: 1,
            numbersToExpressions: true,
            simplify: true,
            stringArrayShuffle: true,
            splitStrings: true,
            stringArrayThreshold: 1,
          });
          const result = {
            status: 200,
            author: `${ownername}`,
            result: obfuscationResult.getObfuscatedCode(),
          };
          resolve(result);
        } catch (e) {
          reject(e);
        }
      });
    }

 //cmds
const totalCmds = () => {
  const myText = fs.readFileSync("./Xploader.js", "utf8");
  const numUpper = (myText.match(/case "/g) || []).length;
  return numUpper;
};
const pickRandom = (arr) => {
return arr[Math.floor(Math.random() * arr.length)]
}
 
// TAKE  PP USER
try {
var ppuser = await Xploader.profilePictureUrl(m.sender, 'image')} catch (err) {
let ppuser = 'https://telegra.ph/file/6880771a42bad09dd6087.jpg'}
let ppnyauser = await getBuffer(ppuser)
let ppUrl = await Xploader.profilePictureUrl(m.sender, 'image').catch(_ => 'https://telegra.ph/file/6880771a42bad09dd6087.jpg')

//================== [ DATABASE ] ==================//
    //database
    try {
      let isNumber = (x) => typeof x === "number" && !isNaN(x);
      let user = global.db.data.users[sender];
      if (typeof user !== "object") global.db.data.users[sender] = {};
      if (user) {
        if (!isNumber(user.afkTime)) user.afkTime = -1;
        if (!("badword" in user)) user.badword = 0;
        if (!("title" in user)) user.title = "";
        if (!("serialNumber" in user))
          user.serialNumber = randomBytes(16).toString("hex");
        if (!("afkReason" in user)) user.afkReason = "";
        if (!("nick" in user)) user.nick = Xploader.getName(sender);
      } else
        global.db.data.users[sender] = {
          serialNumber: randomBytes(16).toString("hex"),
          afkTime: -1,
          badword: 0,
          afkReason: "",
          nick: Xploader.getName(sender),
        };

      let chats = global.db.data.chats[from];
      if (typeof chats !== "object") global.db.data.chats[from] = {};
      if (chats) {
        if (!("badword" in chats)) chats.badword = false;
        if (!("antiforeignnum" in chats)) chats.antiforeignnum = false;
        if (!("antibot" in chats)) chats.antibot = false;
        if (!("antimedia" in chats)) chats.media = false;
        if (!("antivirtex" in chats)) chats.antivirtex = false;
        if (!("antiimage" in chats)) chats.antiimage = false;
        if (!("antivideo" in chats)) chats.video = false;
        if (!("antiaudio" in chats)) chats.antiaudio = false;
        if (!("antipoll" in chats)) chats.antipoll = false;
        if (!("antisticker" in chats)) chats.antisticker = false;
        if (!("anticontact" in chats)) chats.anticontact = false;
        if (!("antilocation" in chats)) chats.antilocation = false;
        if (!("antidocument" in chats)) chats.antidocument = false;
        if (!("antilink" in chats)) chats.antilink = false;
        if (!("antilinkgc" in chats)) chats.antilinkgc = false;
      } else
        global.db.data.chats[from] = {
          badword: false,
          antiforeignnum: false,
          antibot: false,
          antivirtex: false,
          antimedia: false,
          antiimage: false,
          antivideo: false,
          antiaudio: false,
          antipoll: false,
          antisticker: false,
          antilocation: false,
          antidocument: false,
          anticontact: false,
          antilink: false,
          antilinkgc: false,
        };

      let setting = global.db.data.settings[botNumber];
      if (typeof setting !== "object") global.db.data.settings[botNumber] = {};
      if (setting) {
        if (!("unavailable" in setting)) setting.unavailable = false;
        if (!("autobio" in setting)) setting.autobio = false;
        if (!("antispam" in setting)) setting.antispam = false;
        if (!('autoswview' in setting)) setting.autoswview = false;
        if (!("autoread" in setting)) setting.autoread = false;
        if (!("public" in setting)) setting.public = true;
        if (!("autorecordtype" in setting)) setting.autorecordtype = false;
        if (!("autorecord" in setting)) setting.autorecord = false;
        if (!("autotype" in setting)) setting.autotype = false;
        if (!("antidelete" in setting)) setting.antidelete = false;
        if (!('welcome' in setting)) setting.welcome = false
       if (!("antiviewonce" in setting)) setting.antiviewonce = false;
        if (!("autoblocknum" in setting)) setting.autoblocknum = false;
        if (!("onlygroup" in setting)) setting.onlygroup = false;
        if (!("onlypc" in setting)) setting.onlypc = false;
        if (!("watermark" in setting)) setting.watermark = { packname, author };
        if (!("about" in setting))
          setting.about = {
            bot: { nick: Xploader.getName(botNumber), alias: botname },
            owner: {
              nick: Xploader.getName(
                global.ownernumber + "@s.whatsapp.net"
              ),
              alias: global.ownernumber,
            },
          };
      } else
        global.db.data.settings[botNumber] = {
          unavailable: false,
          autobio: false,
          antispam: false,
          autoswview: false,
          autoread: false,
          public: true,
          autoblocknum: false,
          onlygroup: false,
          onlypc: false,
          antidelete: false,
          antiviewonce: false,
          autorecordtype: false,
          autorecord: false,
          autotype: false,
          watermark: {
            packname: global.packname,
            author: global.author,
          },
          about: {
            bot: {
              nick: Xploader.getName(botNumber),
              alias: botname,
            },
            owner: {
              nick: Xploader.getName(
                global.ownernumber + "@s.whatsapp.net"
              ),
              alias: global.ownernumber,
            },
          },
        };
    } catch (err) {
      console.log(err);
    }

//================== [ CONSOLE LOG] ==================//
if (m.message) {
  lolcatjs.fromString(`────────────『 ᙭ᑭᒪOᗩᗪᗴᖇ 』────────────`);
  lolcatjs.fromString(`» Sent Time: ${dayz}, ${timez}`);
  lolcatjs.fromString(`» Message Type: ${m.mtype}`);
  lolcatjs.fromString(`» Sender Name: ${pushname || 'N/A'}`);
  lolcatjs.fromString(`» Chat ID: ${m.chat.split('@')[0]}`);
  lolcatjs.fromString(`» Message: ${budy || 'N/A'}`);
  lolcatjs.fromString(`» Made By: Tylor`);
 lolcatjs.fromString('───────────────────────────────────⳹\n');
}

    //auto set bio\\
    if (db.data.settings[botNumber].autobio) {
let xdpy = moment(Date.now()).tz(`${timezones}`).locale('en').format('dddd');
let xtipe = moment(Date.now()).tz(`${timezones}`).locale('en').format('HH:mm z');
let xdpte = moment(Date.now()).tz(`${timezones}`).format("DD/MM/YYYY");
      Xploader.updateProfileStatus(
        `${xtipe}, ${xdpy}; ${xdpte}:- ${botname}`
      ).catch((_) => _);
    }
    //auto type record
    if (db.data.settings[botNumber].autorecordtype) {
      if (m.message) {
        let XpBotmix = ["composing", "recording"];
        XpBotmix2 = XpBotmix[Math.floor(XpBotmix.length * Math.random())];
        Xploader.sendPresenceUpdate(XpBotmix2, from);
      }
    }
    if (db.data.settings[botNumber].autorecord) {
      if (m.message) {
        let XpBotmix = ["recording"];
        XpBotmix2 = XpBotmix[Math.floor(XpBotmix.length * Math.random())];
        Xploader.sendPresenceUpdate(XpBotmix2, from);
      }
    }
    if (db.data.settings[botNumber].autotype) {
      if (m.message) {
        let XpBotpos = ["composing"];
        Xploader.sendPresenceUpdate(XpBotpos, from);
      }
    }   
//<================================================>//
    if (db.data.chats[m.chat].antibot) {
      if (m.isBaileys && m.fromMe == false) {
        if (isAdmins || !isBotAdmins) {
        } else {
          m.reply(
            `*BOT DETECTED*\n\nXploader Doesnt want competition!`
          );
          return await Xploader.groupParticipantsUpdate(
            m.chat,
            [m.sender],
            "remove"
          );
        }
      }
    }
//<================================================>//
    if (db.data.chats[m.chat].antilinkgc) {
      if (budy.match(`chat.whatsapp.com`)) {
        await Xploader.sendMessage(m.chat, {
          delete: {
            remoteJid: m.chat,
            fromMe: false,
            id: m.key.id,
            participant: m.key.participant,
          },
        });
        Xploader.sendMessage(
          from,
          {
            text: `GROUP LINK DETECTED\n\n@${
              m.sender.split("@")[0]
            } *Beware, group links are not allowed in this group!*`,
            contextInfo: { mentionedJid: [m.sender] },
          },
          { quoted: m }
        );
      }
    }
    if (db.data.chats[m.chat].antilink) {
      if (budy.match("http") && budy.match("https")) {
        await Xploader.sendMessage(m.chat, {
          delete: {
            remoteJid: m.chat,
            fromMe: false,
            id: m.key.id,
            participant: m.key.participant,
          },
        });
        Xploader.sendMessage(
          from,
          {
            text: `LINK DETECTED\n\n@${
              m.sender.split("@")[0]
            } *Beware, links are not allowed in this group!*`,
            contextInfo: { mentionedJid: [m.sender] },
          },
          { quoted: m }
        );
      }
    }
//<================================================>//
//anti bad words.
if (db.data.chats[m.chat].badword) {
  for (let bak of bad) {
    let regex = new RegExp(`\\b${bak}\\b`, 'i'); // Create a regex to match the bad word (case-insensitive)
    if (regex.test(budy)) {
      let baduser = await db.data.users[sender].badword;
      await Xploader.sendMessage(m.chat, {
        delete: {
          remoteJid: m.chat,
          fromMe: false,
          id: m.key.id,
          participant: m.key.participant,
        },
      });
      await Xploader.sendMessage(
        from,
        {
          text: `BAD WORD DETECTED\n\n@${
            m.sender.split("@")[0]
          } *Beware, using bad words is prohibited in this group!*`,
          contextInfo: { mentionedJid: [m.sender] },
        },
        { quoted: m }
      );
      break; // Exit the loop after detecting the first bad word
    }
  }
}
//<================================================>//
// Updated automatic anti-view-once logic
if (
  db.data.settings[botNumber].antiviewonce &&
  m.mtype === "viewOnceMessageV2"
) {
  let msg = m.message?.viewOnceMessage?.message || m.message?.viewOnceMessageV2?.message;
  let type = Object.keys(msg)[0];
  let media = await downloadContentFromMessage(msg[type], type === 'imageMessage' ? 'image' : 'video');
  let buffer = Buffer.from([]);
  for await (const chunk of media) {
    buffer = Buffer.concat([buffer, chunk]);
  }
  if (/video/.test(type)) {
    await Xploader.sendFile(m.chat, buffer, 'media.mp4', msg[type].caption || `*᙭ᑭᒪOᗩᗪᗴᖇ ᗷOT*`, m);
  } else if (/image/.test(type)) {
    await Xploader.sendFile(m.chat, buffer, 'media.jpg', msg[type].caption || '*᙭ᑭᒪOᗩᗪᗴᖇ ᗷOT*', m);
  }
}
//<================================================>//
    if (db.data.settings[botNumber].unavailable) {
      if (m.message) {
        Xploader.sendPresenceUpdate("unavailable", from);
      }
    }
    if (db.data.settings[botNumber].autoread) {
      Xploader.readMessages([m.key]);
    }
//<================================================>//
if ((budy.match) && ["Assalamualaikum", "assalamualaikum", "Assalamu'alaikum",].includes(budy)) {
let urel = `https://pomf2.lain.la/f/7ixvc40h.mp3`
Xploader.sendMessage(m.chat, {audio: {url: urel}, mimetype: 'audio/mpeg', ptt: true }, { quoted: m})
}

if ((budy.match) && ["kak", "woy", "mek", "jawir", "y", "dah", "yaudah", "bang", "bg", "Bang", "Bg", "Ajg", "ajg", "kontol", "Kontol", "puki", "Puki", "yatim", "Yatim", "memek", "Memek", "asu", "Asu", "ngtd", "Ngtd"].includes(budy)) {
var stik = await fetchJson('https://raw.githubusercontent.com/tanakasenn/Database-Json/refs/heads/main/StickerRespon.json')
var pick = pickRandom(stik)
Xploader.sendImageAsSticker(m.chat, pick.url, m, { packname: global.packname, author: global.author })
}
//<================================================>//
if (
  !m.sender.startsWith(global.countrycode) &&
  db.data.chats[m.chat].antiforeignnum === true
) {
  if (isCreator || isAdmins || !isBotAdmins) return;
  Xploader.sendMessage(
    m.chat,
    {
      text: `*FOREIGN NUMBER DETECTED*\n\n Only +${global.countrycode} users are allowed to join the group.`,
    },
    { quoted: m }
  );
  await sleep(2000);
  await Xploader.groupParticipantsUpdate(m.chat, [m.sender], "remove");
}
//<================================================>//
if (
  !m.sender.startsWith(`${global.countrycode}`) &&
  db.data.settings[botNumber].autoblocknum === true
) {
  if (isCreator || isAdmins || !isBotAdmins) return;
  Xploader.sendMessage(
    m.chat,
    {
      text: `*FOREIGN NUMBER DETECTED*\n\nSorry, but my owner has enabled a strict policy to block foreign numbers. Only users with country code +${global.countrycode} are allowed.`,
    },
    { quoted: m }
  );
  await sleep(2000);
  return Xploader.updateBlockStatus(m.sender, "block");
}
//<================================================>//
//<================================================>// 
//=================================================//
//<================================================>//
Xploader.public = db.data.settings[botNumber].public;
    if (!Xploader.public) {
      if (isCreator && !m.key.fromMe) return;
    }
//<================================================// 
//mode checker
const modeStatus = db.data.settings[botNumber].public ? "Public" : "Private";  
    
//================== [ FAKE REPLY ] ==================//
const fkontak = {
key: {
participants: "0@s.whatsapp.net",
remoteJid: "status@broadcast",
fromMe: false,
id: "Halo"},
message: {
contactMessage: {
vcard: `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
}},
participant: "0@s.whatsapp.net"
}

const reply = async(teks) => { 
Xploader.sendMessage(m.chat, { text : teks,
contextInfo: {
mentionedJid: [m.sender],
forwardingScore: 9999, 
isForwarded: true, 
forwardedNewsletterMessageInfo: {
newsletterJid: '120363345633217147@newsletter',
serverMessageId: 20,
newsletterName: '❃᙭ᑭᒪOᗩᗪᗴᖇ ᗷOT'
},
externalAdReply: {
title: "᙭ᑭᒪOᗩᗪᗴᖇ ᗷOT", 
body: "",
thumbnailUrl: "https://files.catbox.moe/vikf6c.jpg", 
sourceUrl: null,
mediaType: 1
}}}, { quoted : m })
}

switch (isCommand) {
//=================================================//
//<================================================>//
case "disk": {
if (!isCreator) return m.reply(mess.owner)
  let cp = require ('child_process')
let { promisify } = require ('util')
let exec = promisify(cp.exec).bind(cp)

  await m.reply(`Please Wait`)
  let o
  try {
    o = await exec('cd && du -h --max-depth=1')
  } catch (e) {
    o = e
  } finally {
    let { stdout, stderr } = o
    if (stdout.trim())
    m.reply(stdout)
    if (stderr.trim()) m.reply(stderr)
  }
}
break;
//<================================================>//
//<================================================>//
case "menu": 
  const tylorkids = pickRandom([
    tylorkid1,
    tylorkid2,
    tylorkid3,
    tylorkid4,	  
    tylorkid5,
  ]);

  const startTime = performance.now();
  await m.reply("Loading menu...");
  const endTime = performance.now();
  const latensie = endTime - startTime;

  let menulist = `┏▣ ◊ 𝗫𝗣𝗟𝗢𝗔𝗗𝗘𝗥 𝗕𝗢𝗧 ◊
┃ *ᴏᴡɴᴇʀ* :  ${ownername}
┃ *ᴘʀᴇғɪx* :  [ ${xprefix} ]
┃ *ʜᴏsᴛ* : ${os.platform()}
┃ *ᴘʟᴜɢɪɴs* : 395
┃ *ᴍᴏᴅᴇ* : ${modeStatus}
┃ *ᴠᴇʀsɪᴏɴ* : ${versions}
┃ *sᴘᴇᴇᴅ* :  ${latensie.toFixed(4)} ms
┃ *ʀᴀᴍ* :  ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}
┗▣ 
${readmore}
┏▣ ◊ 𝗢𝗪𝗡𝗘𝗥 𝗠𝗘𝗡𝗨 ◊
│□ mode
│□ public
│□ private
│□ available
│□ vv
│□ tovv
│□ groupid
│□ join 
│□ leave
│□ delete 
│□ block 
│□ unblock 
│□ restart
│□ shutdown
│□ request 
│□ disk 
│□ react
│□ botstatus
│□ modestatus 
│□ autobio
│□ autoread
│□ autotype
│□ autorecord
│□ antiviewonce
│□ autorecordtype
│□ request 
│□ serverip
│□ resetuser
│□ delsession
│□ getsession 
│□ reportbug
│□ poll
│□ pin
│□ unpin
│□ clear
│□ online
│□ lastseen 
│□ ppprivacy
│□ readreceipts
│□ gcaddprivacy
│□ statusprivacy
│□ disappearingmsg
│□ setprofilepic
│□ setbio
│□ blockforeign
│□ addbadword 
│□ delbadword 
│□ listbadword
┗▣

┏▣ ◊ 𝗚𝗥𝗢𝗨𝗣 𝗠𝗘𝗡𝗨 ◊
│□ antibot
│□ antilink
│□ antilinkgc
│□ tagall
│□ hidetag
│□ tagadmin
│□ mediatag 
│□ grouplink
│□ resetlink
│□ setdesc
│□ vcf
│□ add
│□ kick
│□ promote
│□ demote
│□ setgcname
│□ invite
│□ open 
│□ close 
│□ opentime
│□ closetime
│□ userid
│□ antibadword
│□ listonline 
│□ editsettings
│□ antiforeign
│□ setppgroup
│□ delppgroup
┗▣

┏▣ ◊ 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗 𝗠𝗘𝗡𝗨 ◊
│□ play
│□ playdoc
│□ video
│□ videodoc
│□ ytsearch
│□ ytmp3
│□ ytmp4
│□ shazam
│□ gitclone
│□ facebook
│□ tiktok
│□ apk
│□ telesticker
│□ imdb
│□ wanumber
│□ ringtone
│□ pinterest
│□ itunes
│□ image
│□ lyrics
│□ xvideos 
│□ shazam
│□ tiktokaudio
│□ instagram
│□ happymod
│□ wallpaper 
│□ wikimedia 
┗▣ 

┏▣ ◊ 𝗔𝗜 𝗠𝗘𝗡𝗨 ◊
│□ gpt
│□ gpt2
│□ gemini
│□ openai
│□ gptgo
│□ blackbox
│□ bardai
│□ bingai
│□ dalle
│□ imagen
│□ photoai
│□ generate
│□ simi
│□ llama
│□ turbo
│□ aidetector
┗▣ 

┏▣ ◊ 𝗔𝗨𝗗𝗜𝗢 𝗘𝗗𝗜𝗧𝗢𝗥 ◊
│□ bass 
│□ blown
│□ deep
│□ earrape
│□ fast
│□ fat
│□ nightcore
│□ reverse
│□ robot
│□ slow
│□ smooth
│□ squirrel
│□ volaudio
┗▣ 

┏▣ ◊ 𝗜𝗠𝗔𝗚𝗘 𝗘𝗗𝗜𝗧𝗢𝗥 ◊
│□ remini
┗▣ 

┏▣ ◊ 𝗩𝗜𝗗𝗘𝗢 𝗘𝗗𝗜𝗧𝗢𝗥 ◊
│□ volvideo
┗▣ 

┏▣ ◊ 𝗥𝗘𝗟𝗜𝗚𝗜𝗢𝗡 𝗠𝗘𝗡𝗨 ◊
│□ bible
│□ quran
┗▣ 

┏▣ ◊ 𝗙𝗨𝗡 𝗠𝗘𝗡𝗨 ◊
│□ truth
│□ dare 
│□ fact 
│□ quotes
│□ xxqc
│□ joke
│□ meme
│□ trivia 
│□ truthdetector
┗▣ 

┏▣ ◊ 𝗧𝗢𝗢𝗟 𝗠𝗘𝗡𝗨 ◊
│□ device
│□ encode
│□ decode
│□ obfuscate
│□ genpass
│□ define
│□ define2
│□ qrcode
│□ qrcode2
│□ browse 
│□ download
│□ tinyurl
│□ calculate
│□ tourl
│□ tts
│□ translate
│□ fliptext
│□ fancy
│□ take 
│□ tovn
│□ togif
│□ tomp3
│□ toaudio
│□ tovideo
│□ toimage
│□ sticker
│□ emojimix
┗▣ 

┏▣ ◊ 𝗢𝗧𝗛𝗘𝗥 𝗠𝗘𝗡𝗨 ◊
│□ ping
│□ uptime
│□ runtime
│□ script
│□ owner
│□ time
│□ date
┗▣

┏▣ ◊ 𝗥𝗘𝗔𝗧𝗜𝗢𝗡 𝗠𝗘𝗡𝗨 ◊
│□ cry
│□ kill
│□ hug
│□ pat
│□ lick
│□ kiss
│□ bite
│□ yeet
│□ bully 
│□ bonk
│□ wink
│□ poke
│□ nom
│□ slap
│□ smile
│□ wave
│□ awoo
│□ blush
│□ smug
│□ glomp 
│□ happy
│□ dance
│□ cringe
│□ cuddle
│□ highfive
│□ handhold
│□ shinobu
│□ woof
│□ 8ball
│□ goose 
│□ gecg
│□ feed
│□ avatar 
│□ foxgirl
│□ lizard
│□ spank
│□ meow
│□ tickle
┗▣

┏▣ ◊ 𝗘𝗣𝗛𝗢𝗧𝗢360 𝗠𝗘𝗡𝗨 ◊
│□ glitchtext
│□ graffiti 
│□ sand
│□ matrix 
│□ deadpool
│□ dragonball
│□ incandescent 
│□ topography
│□ writetext
│□ advancedglow
│□ typographytext
│□ deletingtext
│□ pixelglitch
│□ flagtext
│□ flag3dtext
│□ neonglitch
│□ logomaker
│□ blackpinkstyle
│□ underwatertext
│□ glowingtext
│□ cartoonstyle
│□ blackpinklogo
│□ effectclouds
│□ watercolortext
│□ papercutstyle
│□ gradienttext
│□ summerbeach
│□ makingneon
│□ multicoloredneon
│□ sandsummer
│□ 1917style
│□ galaxywallpaper
│□ freecreate
│□ royaltext
│□ luxurygold
│□ lighteffects
│□ galaxystyle
┗▣`
if (menustyle === '1') {
Xploader.sendMessage(
  m.chat,
  {
    document: {
      url: "https://i.ibb.co/2W0H9Jq/avatar-contact.png",
    },
    caption: menulist,
    mimetype: "application/zip",
    fileName: "᙭ᑭᒪOᗩᗪᗴᖇ ᗷOT",
    fileLength: "9999999",
    contextInfo: {
      externalAdReply: {
        showAdAttribution: true,
        title: "",
        body: "",
        thumbnail: tylorkids,
        sourceUrl: plink,
        mediaType: 1,
        renderLargerThumbnail: true,
      },
    },
  },
  {
    quoted: fkontak,
  }
);
} else if (menustyle === '2') {
m.reply(menulist);
} else if (menustyle === '3') {
Xploader.sendMessage(m.chat, {
      text: menulist,
      contextInfo: {
          externalAdReply: {
              showAdAttribution: true,
              title: botname,
              body: ownername,
              thumbnail: tylorkids,
              sourceUrl: plink,
              mediaType: 1,
              renderLargerThumbnail: true
          }
      }
  }, { quoted: m })
} else if (menustyle === '4') {
Xploader.sendMessage(m.chat, {
      image: tylorkids,
      caption: menulist
  }, { quoted: m })
} else if (menustyle === '5') {
Xploader.relayMessage(m.chat, {
      requestPaymentMessage: {
        currencyCodeIso4217: 'USD',
        requestFrom: '0@s.whatsapp.net',
        amount1000: '1',
        noteMessage: {
          extendedTextMessage: {
            text: menulist,
            contextInfo: {
              mentionedJid: [m.sender],
              externalAdReply: {
                showAdAttribution: true
              }
            }
          }
        }
      }
    }, {});
}
break;
//<================================================>//
case "botstatus":
case "statusbot": {
  if (!isCreator) return m.reply(mess.owner);

  const used = process.memoryUsage();
  const cpus = os.cpus().map((cpu) => {
    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0);
    return cpu;
  });
  const cpu = cpus.reduce((last, cpu, _, { length }) => {
    last.total += cpu.total;
    last.speed += cpu.speed / length;
    last.times.user += cpu.times.user;
    last.times.nice += cpu.times.nice;
    last.times.sys += cpu.times.sys;
    last.times.idle += cpu.times.idle;
    last.times.irq += cpu.times.irq;
    return last;
  }, {
    speed: 0,
    total: 0,
    times: {
      user: 0,
      nice: 0,
      sys: 0,
      idle: 0,
      irq: 0,
    },
  });

  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const ram = `${formatSize(process.memoryUsage().heapUsed)} / ${formatSize(os.totalmem)}`;
  const cpuuuu = os.cpus();
  const sisaram = `${Math.round(os.freemem)}`;
  const totalram = `${Math.round(os.totalmem)}`;
  const persenram = (sisaram / totalram) * 100;
  const persenramm = 100 - persenram;
  const ramused = totalram - sisaram;

  const space = await checkDiskSpace(process.cwd());
  const freespace = `${Math.round(space.free)}`;
  const totalspace = `${Math.round(space.size)}`;
  const diskused = totalspace - freespace;

  const startTime = performance.now();
  m.reply("Calculating ping...").then(async () => {
    const endTime = performance.now();
    const latency = endTime - startTime;

    const { download, upload } = await checkBandwidth();
    const respon = ` *PING* 
> ${latency.toFixed(2)} ms 

 *RUNTIME*
> ${runtime(process.uptime())} 

 *SERVER* 
 
 RAM:
> ${formatSize(ramused)} (${persenramm.toString().split('.')[0]}%) / ${formatSize(totalram)} 

 FREERAM:
> ${formatSize(sisaram)} 

 MEMORY:
> ${ram}

 DISK:
> ${formatSize(diskused)} / ${formatSize(totalspace)}

 FREEDISK:
> ${formatSize(freespace)}
 
 PLATFORM:
> ${os.platform()}

 SERVER:
> ${os.hostname()}

 BOT'S UPLOADED:
> ${upload}

 BOT'S DOWNLOADED:
> ${download}

 SERVER TIME: 
> ${hours} : ${minutes} : ${seconds}
 
 NODEJS VERSION:
> ${process.version}

 CPU MODEL:
> ${cpuuuu[0].model}

 OS VERSION:
> ${os.version()}
 
${readmore}
NodeJS Memory Usage
${Object.keys(used)
  .map((key, _, arr) => `${key.padEnd(Math.max(...arr.map((v) => v.length)), " ")}: ${formatp(used[key])}`)
  .join("\n")}
${readmore}
${cpus[0]
  ? `Total CPU Usage
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times)
  .map((type) => `- *${(type + "*").padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`)
  .join("\n")}
CPU Core(s) Usage (${cpus.length} Core CPU)
${cpus
  .map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times)
  .map((type) => `- *${(type + "*").padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`)
  .join("\n")}`)
  .join("\n\n")}`
  : ""
}
`.trim();

    Xploader.relayMessage(m.chat, {
      requestPaymentMessage: {
        currencyCodeIso4217: 'IDR',
        requestFrom: '0@s.whatsapp.net',
        noteMessage: {
          extendedTextMessage: {
            text: respon,
            contextInfo: {
              mentionedJid: [m.sender],
              externalAdReply: {
                showAdAttribution: true
              }
            }
          }
        }
      }
    }, {});
  }).catch(console.error);
}
break;
//<================================================>//

      case "runtime":
      case "uptime":
     {
const menui = pickRandom([
tylorkid1,
tylorkid2,
tylorkid3,
tylorkid4,	  
tylorkid5,
])
        let pinga = `*${runtime(process.uptime())}*`;
        Xploader.sendMessage(
          m.chat,
          {
            text: pinga,
            contextInfo: {
              externalAdReply: {
                showAdAttribution: true,
                title: `XPLOADER`,
                body: `Tylor`,
                thumbnail: menui,
                sourceUrl: `https://www.instagram.com/heyits_tylor?igsh=YzljYTk1ODg3Zg==`,
                mediaType: 1,
                renderLargerThumbnail: false,
              },
            },
          },
          {
            quoted: m,
          }
        );
    }
        break;
//=================================================//
case "ping":
case "p": {
  const startTime = performance.now();
  Xploader.sendMessage(m.chat, { text: "Pong!", contextInfo: { quotedMessage: m.message } }).then(async (sentMessage) => {
    const endTime = performance.now();
    const latency = endTime - startTime;
    const finalStatus = `*XPLOADER: ${latency.toFixed(2)} ms*`;

    await Xploader.sendMessage(m.chat, { text: finalStatus, edit: sentMessage.key, contextInfo: { quotedMessage: m.message } });
  }).catch(console.error);
}
break;
//<================================================>//
case "autoread": {
  if (!isCreator) return m.reply(mess.owner);
  if (args.length < 1) return m.reply(`Example: ${prefix + command} on/off`);

  const validOptions = ["on", "off"];
  const option = args[0].toLowerCase();

  if (!validOptions.includes(option)) return m.reply("Invalid option");

  db.data.settings[botNumber].autoread = option === "on";
  m.reply(`Auto-read ${option === "on" ? "enabled" : "disabled"} successfully`);
}
break;
//<================================================>//
case "available": {
  if (!isCreator) return m.reply(mess.owner);
  if (args.length < 1) return m.reply(`Example: ${prefix + command} on/off`);

  const validOptions = ["on", "off"];
  const option = args[0].toLowerCase();

  if (!validOptions.includes(option)) return m.reply("Invalid option");

  db.data.settings[botNumber].unavailable = option === "off";
  m.reply(`Bot set to ${option === "off" ? "offline" : "online"} mode. ${option === "on" ? "Please restart the bot." : ""}`);
}
break;
//<================================================>//
case "autorecordtyping":
case "autorecordtype": {
  if (!isCreator) return m.reply(mess.owner);
  if (args.length < 1) return m.reply(`Example: ${prefix + command} on/off`);

  const validOptions = ["on", "off"];
  const option = args[0].toLowerCase();

  if (!validOptions.includes(option)) return m.reply("Invalid option");

  db.data.settings[botNumber].autorecordtype = option === "on";
  m.reply(`Auto-record typing ${option === "on" ? "enabled" : "disabled"} successfully`);
}
break;
//<================================================>//
case "autorecord":
case "autorecording": {
if (!isCreator) return m.reply(mess.owner);
if (args.length < 1) return m.reply(`Example: ${prefix + command} on/off`);

const validOptions = ["on", "off"];
const option = args[0].toLowerCase();

if (!validOptions.includes(option)) return m.reply("Invalid option");

db.data.settings[botNumber].autorecord = option === "on";
m.reply(`Auto-record ${option === "on" ? "enabled" : "disabled"} successfully`);
}
break;
//<================================================>//
case "autotype":
case "autotyping": {
if (!isCreator) return m.reply(mess.owner);
if (args.length < 1) return m.reply(`Example: ${prefix + command} on/off`);

const validOptions = ["on", "off"];
const option = args[0].toLowerCase();

if (!validOptions.includes(option)) return m.reply("Invalid option");

db.data.settings[botNumber].autotype = option === "on";m.
reply(`Auto-type ${option === "on" ? "enabled" : "disabled"} successfully`);
}
break;
//<================================================>//
case "autobio": {
if (!isCreator) return m.reply(mess.owner);
if (args.length < 1) return m.reply(`Example: ${prefix + command} on/off`);

const validOptions = ["on", "off"];
const option = args[0].toLowerCase();

if (!validOptions.includes(option)) return m.reply("Invalid option");

db.data.settings[botNumber].autobio = option === "on";
m.reply(`Auto-bio ${option === "on" ? "enabled" : "disabled"} successfully`);
}
break;
//<================================================>//
      case "public":
        {
          if (!isCreator) return m.reply(mess.owner);
 db.data.settings[botNumber].public = true;
  m.reply(`Public mode enabled successfully`);
} break;
//<================================================>//
      case "private":
      case "self":
        {
          if (!isCreator) return m.reply(mess.owner);
 db.data.settings[botNumber].public = false;
  m.reply(`Private mode enabled successfully`);
} break;
//<================================================>//
//<================================================>//
case "mode": {
if (!isCreator) return m.reply(mess.owner);
if (args.length < 1) return m.reply(`Example: ${prefix + command} public/private`);

const validModes = ["public", "private"];
const mode = args[0].toLowerCase();

if (!validModes.includes(mode)) return m.reply("Invalid mode");

db.data.settings[botNumber].public = mode === "public";
m.reply(mode === "public" ? "Public mode enabled" : "Private mode enabled");
} break;
//<================================================>//
//<================================================>//
case "modestatus": {
if (!isCreator) return m.reply(mess.owner);
m.reply(`Current mode: ${modeStatus}`);
} break;
//<================================================>//
case "join": {
try {
if (!isCreator) return m.reply(mess.owner);
if (!text) return m.reply("Enter group link");
if (!isUrl(args[0]) && !args[0].includes("whatsapp.com")) return m.reply("Invalid link");

const link = args[0].split("https://chat.whatsapp.com/")[1];
await Xploader.groupAcceptInvite(link);
m.reply("Joined successfully");
} catch {
m.reply("Failed to join group");
}
}
break;
//<================================================>//
    case "getsession":
        if (!isCreator) return m.reply(mess.owner);
        reply(
          "*Fetching session file...*"
        );
        let sesi = fs.readFileSync("./session/creds.json");
        Xploader.sendMessage(
          m.chat,
          {
            document: sesi,
            mimetype: "application/json",
            fileName: "creds.json",
          },
          {
            quoted: m,
          }
        );
        break;
//<================================================>//
case "ipbot":
case "serverip": {
if (!isCreator) return m.reply(mess.owner);
const https = require("https");
https.get("https://api.ipify.org", (res) => {
let data = '';
res.on("data", (chunk) => data += chunk);
res.on("end", () => m.reply("Bot's public IP: " + data));
});
}
break;
//<================================================>//
case "request": {
  if (!text) return m.reply(`Example: ${prefix + command} I would like a new feature (specify) to be added.`);

  const requestMsg = `
*REQUEST*
*User*: @${m.sender.split("@")[0]}
*Request*: ${text}
  `;

  const confirmationMsg = `
Hi ${pushname},

Your request has been forwarded to the Owners.
Please wait for a reply.

*Details:*
${requestMsg}
  `;

  Xploader.sendMessage("254754783972@s.whatsapp.net", { text: requestMsg, mentions: [m.sender] }, { quoted: m });
  Xploader.sendMessage(m.chat, { text: confirmationMsg, mentions: [m.sender] }, { quoted: m });
}
break;
//<================================================>//
case "reportbug": {
  if (!text) return m.reply(`Example: ${prefix + command} Hey, play command isn't working`);

  const bugReportMsg = `
*BUG REPORT*
*User*: @${m.sender.split("@")[0]}
*Issue*: ${text}
  `;

  const confirmationMsg = `
Hi ${pushname},

Your bug report has been forwarded to the Owners.
Please wait for a reply.

*Details:*
${bugReportMsg}
  `;

  Xploader.sendMessage("254754783972@s.whatsapp.net", { text: bugReportMsg, mentions: [m.sender] }, { quoted: m });
  Xploader.sendMessage(m.chat, { text: confirmationMsg, mentions: [m.sender] }, { quoted: m });
}
break;
//<================================================>//
 case "restart": {
        if (!isCreator) return m.reply(mess.owner);
        m.reply(`*Restarting...*`);
        await sleep(3000);
        process.exit(0);
        }
        break;
//<================================================>//
      
case "shutdown": {
    if (!isCreator) return m.reply(mess.owner);
    m.reply(`*Shutting down...*`);
    await sleep(3000);
    process.exit(100); // Exit with code 143 to indicate SIGTERM shutdown
}
break;        
//<================================================>//
case "block": {
if (!isCreator) return m.reply(mess.owner);
if (!m.quoted && !m.mentionedJid[0] && !text) return m.reply("Reply to a message or mention/user ID to block");
const userId = m.mentionedJid[0] || m.quoted?.sender || text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
await Xploader.updateBlockStatus(userId, "block");
m.reply(mess.done);
}
break;
//=================================================//
case "unblock": {
if (!isCreator) return m.reply(mess.owner);
if (!m.quoted && !m.mentionedJid[0] && !text) return m.reply("Reply to a message or mention/user ID to unblock");
const userId = m.mentionedJid[0] || m.quoted?.sender || text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
await Xploader.updateBlockStatus(userId, "unblock");
m.reply(mess.done);
}
break;
//<================================================>//
      case "delsession":
        {
          if (!isCreator) return m.reply(mess.owner);
          fs.readdir("./session", async function (err, files) {
            if (err) {
              console.log("Unable to scan directory: " + err);
              return m.reply("Unable to scan directory: " + err);
            }
            let filteredArray = await files.filter(
              (item) =>
                item.startsWith("pre-key") ||
                item.startsWith("sender-key") ||
                item.startsWith("session-") ||
                item.startsWith("app-state")
            );
            console.log(filteredArray.length);
            await sleep(2000);
            m.reply(`*Clearing ${filteredArray.length}  junk files...*`);
            await filteredArray.forEach(function (file) {
              fs.unlinkSync(`./session/${file}`);
            });
            await sleep(2000);
            m.reply(
              "*Successfully cleared all the junk files in the session's folder*"
            );
          });
        }
        break;
//<================================================>//
//<================================================>//
      case "leave":
      case "leavegc":
        if (!isCreator) return m.reply(mess.owner);
        if (!m.isGroup) return m.reply(mess.group);
        m.reply("*We go!*");
        await sleep(3000);
        await Xploader.groupLeave(m.chat);
        break;
//=================================================//
  case "resetuser":
        {
          if (!isCreator) return m.reply(mess.owner);
          let totalusernya = db.data.users[0];
          m.reply(
            `*Succesfully deleted ${totalusernya} users in Database*`
          );
          db.data.users = [];
        }
        break;
//<================================================>//
      case "delete":
      case "del":
        {
          if (!isCreator) return m.reply(mess.owner);
          let key = {};
          try {
            key.remoteJid = m.quoted
              ? m.quoted.fakeObj.key.remoteJid
              : m.key.remoteJid;
            key.fromMe = m.quoted ? m.quoted.fakeObj.key.fromMe : m.key.fromMe;
            key.id = m.quoted ? m.quoted.fakeObj.key.id : m.key.id;
            key.participant = m.quoted
              ? m.quoted.fakeObj.participant
              : m.key.participant;
          } catch (e) {
            console.error(e);
          }
          Xploader.sendMessage(m.chat, { delete: key });
        }
        break;
//<================================================>//
 case "antiviewonce":
 case "antivv": {
if (!isCreator) return m.reply(mess.owner);
if (args.length < 1) return m.reply("*on or off?*");

const status = args[0].toLowerCase();
if (status !== "on" && status !== "off") return m.reply("Invalid option");

db.data.settings[botNumber].antiviewonce = status === "on";
m.reply(`Anti-viewonce ${status === "on" ? "enabled" : "disabled"} successfully`);
} break;
//<================================================>//
case "vv": {
if (!isCreator) return m.reply(mess.owner);
if (!m.quoted) return m.reply(`*Please reply to a viewonce message!*`)
        if (m.quoted.mtype !== 'viewOnceMessageV2') return m.reply(`*Is that a viewonce message?*`)
    let msg = m.quoted.message
    let type = Object.keys(msg)[0]
    let media = await downloadContentFromMessage(msg[type], type == 'imageMessage' ? 'image' : 'video')
    let buffer = Buffer.from([])
    for await (const chunk of media) {
        buffer = Buffer.concat([buffer, chunk])
    }
    if (/video/.test(type)) {
        return Xploader.sendFile(m.chat, buffer, 'media.mp4', msg[type].caption || `*᙭ᑭᒪOᗩᗪᗴᖇ ᗷOT*`, m)
    } else if (/image/.test(type)) {
        return Xploader.sendFile(m.chat, buffer, 'media.jpg', msg[type].caption || '*᙭ᑭᒪOᗩᗪᗴᖇ ᗷOT*', m)
    }
}
break;
//<================================================>//
case "pinchat":
case "pin":
    if (!isCreator) return m.reply(mess.owner);
    Xploader.chatModify({ pin: true }, m.chat);
    m.reply('Chat pinned successfully!');
    break;
//<================================================>//
  case "unpinchat":
  case "unpin":
    if (!isCreator) return m.reply(mess.owner);
    Xploader.chatModify({ pin: false }, m.chat);
    m.reply('Chat unpinned successfully!');
    break;
//<================================================>//
case "clearchat":
case "clear": {
  if (!isCreator) return m.reply(mess.owner);
  
  try {
    Xploader.chatModify({ delete: true, lastMessages: [{ key: m.key, messageTimestamp: m.messageTimestamp }] }, m.chat);
    Xploader.sendMessage(m.chat, { text: `Chat cleared successfully!\n\nThis message will disappear automatically` }, { ephemeralExpiration: 5 });
  } catch (error) {
    console.error('Error clearing chat:', error);
    Xploader.sendMessage(m.chat, { text: `Failed to clear chat. Please try again later.` });
  }
  break;
}
//<================================================>//
case "ppprivacy": {
    if (!isCreator) return m.reply(mess.owner);
  if (!text) return m.reply(`Options: all/contacts/contact_blacklist/none\nExample: ${prefix + command} all`);

  const validOptions = ["all", "contacts", "contact_blacklist", "none"];
  if (!validOptions.includes(args[0])) return m.reply("Invalid option");

  await Xploader.updateProfilePicturePrivacy(text);
  await m.reply(mess.done);
}
break;
//<================================================>//
case "lastseen": {
    if (!isCreator) return m.reply(mess.owner);
  if (!text) return m.reply(`Options: all/contacts/contact_blacklist/none\nExample: ${prefix + command} all`);

  const validOptions = ["all", "contacts", "contact_blacklist", "none"];
  if (!validOptions.includes(args[0])) return m.reply("Invalid option");

  await Xploader.updateLastSeenPrivacy(text);
  await m.reply(mess.done);
}
break;
//<================================================>//
case "online": {
    if (!isCreator) return m.reply(mess.owner);
  if (!text) return m.reply(`Options: all/match_last_seen\nExample: ${prefix + command} all`);

  const validOptions = ["all", "match_last_seen"];
  if (!validOptions.includes(args[0])) return m.reply("Invalid option");

  await Xploader.updateOnlinePrivacy(text);
  await m.reply(mess.done);
}
break;
//<================================================>//
case "statusprivacy": {
    if (!isCreator) return m.reply(mess.owner);
  if (!text) return m.reply(`Options: all/contacts/contact_blacklist/none\nExample: ${prefix + command} all`);

  const validOptions = ["all", "contacts", "contact_blacklist", "none"];
  if (!validOptions.includes(args[0])) return m.reply("*Invalid option*");

  await Xploader.updateStatusPrivacy(text);
  await m.reply(mess.done);
}
break;
//<================================================>//
case "readreceipts": {
    if (!isCreator) return m.reply(mess.owner);
  if (!text) return m.reply(`Options: all/none\nExample: ${prefix + command} all`);

  const validOptions = ["all", "none"];
  if (!validOptions.includes(args[0])) return m.reply("Invalid option");

  await Xploader.updateReadReceiptsPrivacy(text);
  await m.reply(mess.done);
}
break;
//<================================================>//
case "gcaddprivacy": {
    if (!isCreator) return m.reply(mess.owner);
  if (!text) return m.reply(`Options: all/contacts/contact_blacklist/none\nExample: ${prefix + command} all`);

  const validOptions = ["all", "contacts", "contact_blacklist"];
  if (!validOptions.includes(args[0])) return m.reply("*Invalid option!*");

  await Xploader.updateGroupsAddPrivacy(text);
  await m.reply(mess.done);
}
break;
//<================================================>//
case "disappearing":
case "disappearingmsg": {
    if (!isCreator) return m.reply(mess.owner);
  if (!text) return m.reply(`Disappearing message options: 0 (off), 7 (7 days), 90 (90 days)\nExample: ${prefix + command} 7`);

  const disappearingModes = {
    "0": 0, // off
    "7": 604800, // 7 days
    "90": 7776000 // 90 days
  };

  const mode = args[0];
  if (!(mode in disappearingModes)) return m.reply("*Invalid option*");

  await Xploader.updateDefaultDisappearingMode(disappearingModes[mode]);
  await m.reply(mess.done);
}
break;
//<================================================>//
case "setprofilepic":
         if (!isCreator) return m.reply(mess.owner);
        if (!quoted)
          return m.reply(
            `*Send or reply to an image With captions ${prefix + command}*`
          );
        if (!/image/.test(mime))
          return m.reply(
            `*Send or reply to an image With captions ${prefix + command}*`
          );
        if (/webp/.test(mime))
          return m.reply(
            `*Send or reply to an image With captions ${prefix + command}*`
          );
        var medis = await Xploader.downloadAndSaveMediaMessage(
          quoted,
          "ppbot.jpeg"
        );
        if (args[0] == "full") {
          var { img } = await generateProfilePicture(medis);
          await Xploader.query({
            tag: "iq",
            attrs: {
              to: botNumber,
              type: "set",
              xmlns: "w:profile:picture",
            },
            content: [
              {
                tag: "picture",
                attrs: {
                  type: "image",
                },
                content: img,
              },
            ],
          });
          fs.unlinkSync(medis);
          reply(mess.done);
        } else {
          var memeg = await Xploader.updateProfilePicture(botNumber, {
            url: medis,
          });
          fs.unlinkSync(medis);
          reply(mess.done);
        }
        break;
//<================================================>//
case "setbio":
        {
   if (!isCreator) return m.reply(mess.owner);
   if (!text) return m.reply(`*Text needed*\nExample: ${prefix + command} ${botname}`);
          await Xploader.updateProfileStatus(text);
          m.reply(`*Successfully updated bio to "${text}"*`);
        }
        break;
//<================================================>//
    case "react":
        {
          if (!isCreator) return m.reply(mess.owner);
          reactionMessage = {
            react: {
              text: args[0],
              key: { remoteJid: m.chat, fromMe: true, id: quoted.id },
            },
          };
          Xploader.sendMessage(m.chat, reactionMessage);
        }
        break;
//<================================================>//
//<================================================>//
//<================================================>//
//<================================================>//
//<================================================>//
//<================================================>//
//<================================================>//
case "antibot":
        {
          if (!m.isGroup) return m.reply(mess.group);
          if (!isBotAdmins) return m.reply(mess.admin);
          if (!isAdmins && !isCreator) return m.reply(mess.notadmin);
          if (args.length < 1) return m.reply("*on or off?*");
          if (args[0] === "on") {
            db.data.chats[from].antibot = true;
            m.reply(`*Successfully enabled ${command}*`);
          } else if (args[0] === "off") {
            db.data.chats[from].antibot = false;
            m.reply(`*Successfully disabled ${command}*`);
          }
        }
        break;
//<================================================>//
      case "antilink":
        {
          if (!m.isGroup) return m.reply(mess.group);
          if (!isBotAdmins) return m.reply(mess.admin);
          if (!isAdmins && !isCreator) return m.reply(mess.notadmin);
          if (args.length < 1) return m.reply("*on or off?*");
          if (args[0] === "on") {
            db.data.chats[from].antilink = true;
            m.reply(`*Successfully enabled ${command}*`);
          } else if (args[0] === "off") {
            db.data.chats[from].antilink = false;
            m.reply(`*Successfully disabled ${command}*`);
          }
        }
        break;
//=================================================//
      case "antilinkgc":
        {
          if (!m.isGroup) return m.reply(mess.group);
          if (!isBotAdmins) return m.reply(mess.admin);
          if (!isAdmins && !isCreator) return m.reply(mess.notadmin);
          if (args.length < 1) return m.reply("*on or off?*");
          if (args[0] === "on") {
            db.data.chats[from].antilinkgc = true;
            m.reply(`*Successfully enabled ${command}*`);
          } else if (args[0] === "off") {
            db.data.chats[from].antilinkgc = false;
            m.reply(`*Successfully disabled ${command}*`);
          }
        }
        break;
//<================================================>//
      case "tagall":
      case "tag":
        if (!m.isGroup) return m.reply(mess.group);
        if (!isAdmins && !isGroupOwner && !isCreator)
          return m.reply(mess.admin);
        if (!isBotAdmins) return m.reply(mess.admin);
        let me = m.sender;
        let teks = `*TAGGED BY:*  @${
          me.split("@")[0]
        }\n\n*MESSAGE:* ${q ? q : "No message"}\n\n`;
        for (let mem of participants) {
          teks += `@${mem.id.split("@")[0]}\n`;
        }
        Xploader.sendMessage(
          m.chat,
          {
            text: teks,
            mentions: participants.map((a) => a.id),
          },
          {
            quoted: m,
          }
        );
        break;
//<================================================>//
    case "hidetag":
        if (!m.isGroup) return m.reply(mess.group);
        if (!isAdmins && !isGroupOwner && !isCreator)
          return m.reply(mess.admin);
        if (!isBotAdmins) return m.reply(mess.admin);
        Xploader.sendMessage(
          m.chat,
          {
            text: q ? q : "",
            mentions: participants.map((a) => a.id),
          },
          {
            quoted: m,
          }
        );
        break;
//<================================================>//
     case "mediatag":
        if (!m.isGroup) return m.reply(mess.group);
        if (!isBotAdmins) return m.reply(mess.admin);
        if (!isAdmins) return m.reply(mess.admin);
        if (!m.quoted)
          return m.reply(`Reply to any media with caption ${prefix + command}`);
        Xploader.sendMessage(m.chat, {
          forward: m.quoted.fakeObj,
          mentions: participants.map((a) => a.id),
        });
        break;
//<================================================>//
      case "link":
      case "linkgc":
      case "gclink":
      case "grouplink":
        if (!m.isGroup) return m.reply(mess.group);
        if (!isAdmins && !isGroupOwner && !isCreator)
          return m.reply(mess.admin);
        if (!isBotAdmins) return m.reply(mess.admin);
        let response = await Xploader.groupInviteCode(m.chat);
        Xploader.sendText(
          m.chat,
          `*GROUP LINK*\n\n*NAME:* ${
            groupMetadata.subject
          }\n\n*OWNER:* ${
            groupMetadata.owner !== undefined
              ? "+" + groupMetadata.owner.split`@`[0]
              : "Unknown"
          }\n\n*ID:* ${
            groupMetadata.id
          }\n\n*LINK:* https://chat.whatsapp.com/${response}\n\n*MEMBERS:* ${
            groupMetadata.participants.length
          }`,
          m,
          {
            detectLink: true,
          }
        );
        break;
//<================================================>//
case "resetlink":
        if (!m.isGroup) return m.reply(mess.group);
        if (!isAdmins && !isGroupOwner && !isCreator)
          return m.reply(mess.admin);
        if (!isBotAdmins) return m.reply(mess.admin);
        await Xploader.groupRevokeInvite(m.chat).then((res) => {
          m.reply(mess.done);
        });
        break;
//<================================================>//
      case "tagadmin":
      case "listadmin":
      case "admin":
        {
          if (!m.isGroup) return m.reply(mess.group);
          const groupAdmins = participants.filter((p) => p.admin);
          const listAdmin = groupAdmins
            .map((v, i) => `${i + 1}. @${v.id.split("@")[0]}`)
            .join("\n");
          const owner =
            groupMetadata.owner ||
            groupAdmins.find((p) => p.admin === "superadmin")?.id ||
            m.chat.split`-`[0] + "@s.whatsapp.net";
          let text = `   
*Group Admins Here:*
${listAdmin}
`.trim();
          Xploader.sendMessage(
            m.chat,
            { text: text, mentions: [...groupAdmins.map((v) => v.id), owner] },
            { quoted: m }
          );
        }
        break;
//<================================================>//
case "setdesc":
        if (!m.isGroup) return m.reply(mess.group);
        if (!isAdmins && !isGroupOwner && !isCreator)
          return m.reply(mess.notadmin);
        if (!isBotAdmins) return m.reply(mess.admin);
        if (!text) return m.reply("*Please enter a text*");
        await Xploader.groupUpdateDescription(m.chat, text);
        m.reply(mess.done);
        break;
//<================================================>//
  case "poll":
        {
          if (!isCreator) return m.reply(mess.owner);
          let [poll, opt] = text.split("|");
          if (text.split("|") < 2)
            return await m.reply(
              `Enter a question and atleast 2 options\nExample: ${prefix}poll Who is best player?|Messi,Ronaldo,None...`
            );
          let options = [];
          for (let i of opt.split(",")) {
            options.push(i);
          }
          await Xploader.sendMessage(m.chat, {
            poll: {
              name: poll,
              values: options,
            },
          });
        }
        break;
//<================================================>//
      case "add":
        if (!m.isGroup) return m.reply(mess.group);
        if (!isCreator) return m.reply(mess.owner);
        let bws = m.quoted
          ? m.quoted.sender
          : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
        await Xploader.groupParticipantsUpdate(m.chat, [bws], "add");
        m.reply(mess.done);
        break;
  //=================================================//
      case "promote":
        if (!m.isGroup) return m.reply(mess.group);
        if (!isAdmins && !isGroupOwner && !isCreator)
          return m.reply(mess.admin);
        if (!isBotAdmins) return m.reply(mess.admin);
        let bwst = m.mentionedJid[0]
          ? m.mentionedJid[0]
          : m.quoted
          ? m.quoted.sender
          : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
        await Xploader.groupParticipantsUpdate(
          m.chat,
          [bwst],
          "promote"
        );
        m.reply(mess.done);
        break;
//=================================================//
      case "demote":
        if (!m.isGroup) return m.reply(mess.group);
        if (!isAdmins && !isGroupOwner && !isCreator)
          return m.reply(mess.admin);
        if (!isBotAdmins) return m.reply(mess.admin);
        let bwstq = m.mentionedJid[0]
          ? m.mentionedJid[0]
          : m.quoted
          ? m.quoted.sender
          : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
        await Xploader.groupParticipantsUpdate(
          m.chat,
          [bwstq],
          "demote"
        );
        m.reply(mess.done);
        break;
//=================================================//
      case "setgroupname":
      case "setgcname":
        if (!m.isGroup) return m.reply(mess.group);
        if (!isAdmins && !isGroupOwner && !isCreator)
          return m.reply(mess.admin);
        if (!isBotAdmins) return m.reply(mess.admin);
        if (!text) return m.reply("*Desired groupname?*");
        await Xploader.groupUpdateSubject(m.chat, text);
        m.reply(mess.done);
        break;
//<================================================>//
     case "kick":
     case "remove":
        if (!isAdmins && !isGroupOwner && !isCreator)
          return m.reply(mess.admin);
        if (!m.isGroup) return m.reply(mess.group);
        if (!isAdmins && !isGroupOwner && !isCreator)
          return m.reply(mess.admin);
        if (!isBotAdmins) return m.reply(mess.admin);
        let bck = m.mentionedJid[0]
          ? m.mentionedJid[0]
          : m.quoted
          ? m.quoted.sender
          : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
        await Xploader.groupParticipantsUpdate(
          m.chat,
          [bck],
          "remove"
        );
         m.reply(mess.done);
        break;
//<================================================>//
      case "invite":
        {
          if (!m.isGroup) return m.reply(mess.group);
          if (!isBotAdmins) return m.reply(mess.admin);
          if (!text)
            return m.reply(
              `*Enter the number you want to invite to this group*\n\nExample :\n${prefix + command} 254796180105`
            );
          if (text.includes("+"))
            return m.reply(`*Enter the number together without* *+*`);
          if (isNaN(text))
            return m.reply(
              `*Enter only the numbers with your country code without spaces*`
            );
          let group = m.chat;
          let link =
            "https://chat.whatsapp.com/" +
            (await Xploader.groupInviteCode(group));
          await Xploader.sendMessage(text + "@s.whatsapp.net", {
            text: `*GROUP INVITATION*\n\nSomeone invites you to join this group: \n\n${link}`,
            mentions: [m.sender],
          });
          m.reply(`*Successfully sent invite link*`);
        }
        break;
//<================================================>//
case "closetime": {
  if (!m.isGroup) return m.reply(mess.group);
  if (!isAdmins && !isCreator) return m.reply(mess.notadmin);
  if (!isBotAdmins) return m.reply(mess.admin);

  const duration = args[0];
  const unit = args[1].toLowerCase();

  let timer;
  switch (unit) {
    case "seconds":
      timer = duration * 1000;
      break;
    case "minutes":
      timer = duration * 60000;
      break;
    case "hours":
      timer = duration * 3600000;
      break;
    case "days":
      timer = duration * 86400000;
      break;
    default:
      return m.reply("*Select unit:*\nseconds\nminutes\nhours\ndays\n\n*Example:*\n10 seconds");
  }

  m.reply(`*Closing group after ${duration} ${unit}*`);
  setTimeout(() => {
    Xploader.groupSettingUpdate(m.chat, "announcement");
    m.reply("Group closed by admin. Only admins can send messages.");
  }, timer);
  }
  break;
//=================================================//
     case "opentime": {
  if (!m.isGroup) return m.reply(mess.group);
  if (!isAdmins && !isCreator) return m.reply(mess.notadmin);
  if (!isBotAdmins) return m.reply(mess.admin);

  const duration = args[0];
  const unit = args[1].toLowerCase();

  let timer;
  switch (unit) {
    case "seconds":
      timer = duration * 1000;
      break;
    case "minutes":
      timer = duration * 60000;
      break;
    case "hours":
      timer = duration * 3600000;
      break;
    case "days":
      timer = duration * 86400000;
      break;
    default:
      return m.reply("*Select unit:*\nseconds\nminutes\nhours\ndays\n\n*Example:*\n10 seconds");
  }

  m.reply(`*Opening group after ${duration} ${unit}*`);
  setTimeout(() => {
    Xploader.groupSettingUpdate(m.chat, "not_announcement");
    m.reply("Group opened by admin. Members can now send messages.");
  }, timer);
}
  break;
//<================================================>//
      case "vcf":
        {
          if (!m.isGroup) return m.reply(mess.group);
          if (!(isGroupAdmins || isCreator)) return m.reply(mess.admin);
          let cmiggc = await Xploader.groupMetadata(m.chat);
          let orgiggc = participants.map((a) => a.id);
          vcard = "";
          noPort = 0;
          for (let a of cmiggc.participants) {
            vcard += `BEGIN:VCARD\nVERSION:3.0\nFN:[${noPort++}] +${
              a.id.split("@")[0]
            }\nTEL;type=CELL;type=VOICE;waid=${a.id.split("@")[0]}:+${
              a.id.split("@")[0]
            }\nEND:VCARD\n`;
          }
          let nmfilect = "./contacts.vcf";
          m.reply(
            "\nPlease wait, saving " +
              cmiggc.participants.length +
              " contacts"
          );
          require("fs").writeFileSync(nmfilect, vcard.trim());
          await sleep(2000);
          Xploader.sendMessage(
            m.chat,
            {
              document: require("fs").readFileSync(nmfilect),
              mimetype: "text/vcard",
              fileName: "Contact.vcf",
              caption:
                "Successful\n\nGroup: *" +
                cmiggc.subject +
                "*\nContacts: *" +
                cmiggc.participants.length +
                "*",
            },
            { ephemeralExpiration: 86400, quoted: m }
          );
          require("fs").unlinkSync(nmfilect);
        }
        break;
//<================================================>//
   case "allcontact":
        {
          if (!m.isGroup) return m.reply(mess.group);
          if (!(isGroupAdmins || isCreator)) return m.reply(mess.admin);
          XpBotbigpp = await Xploader.sendMessage(
            m.chat,
            {
              text: `*GROUP*: ${groupMetadata.subject}\n*MEMBERS*: ${participants.length}`,
            },
            { quoted: m, ephemeralExpiration: 86400 }
          );
          await sleep(1000);
          Xploader.sendContact(
            m.chat,
            participants.map((a) => a.id),
            XpBotbigpp
          );
        }
        break;
//<================================================>//
case "take":
case "steal":
  const swn = args.join(" ");
  let pcknm = swn.split("|")[0];
  let atnm = swn.split("|")[1];

  if (m.quoted.isAnimated === true) {
    const filePath = './godzilla';
    await Xploader.downloadAndSaveMediaMessage(quoted, filePath);
    await Xploader.sendMessage(m.chat, { sticker: fs.readFileSync(`./tmp/godzilla.webp`) }, { packname: `${pcknm ? pcknm : global.packname}`,  author: `${atnm ? atnm : global.author}` });
  } else if (/image/.test(mime)) {
    let media = await quoted.download();
    let encmedia = await Xploader.sendImageAsSticker(m.chat, media, m, { packname: `${pcknm ? pcknm : global.packname}`,  author: `${atnm ? atnm : global.author}` });
  } else if (/video/.test(mime)) {
    if ((quoted.msg || quoted).seconds > 10) {
      return m.reply('*Maximum length should be 10 seconds!*');
    }
    let media = await quoted.download();
    let encmedia = await Xploader.sendVideoAsSticker(m.chat, media, m, { packname: `${pcknm ? pcknm : global.packname}`,  author: `${atnm ? atnm : global.author}` });
  } else {
    m.reply(`Please reply to a sticker`);
  }
  break;
//<================================================>//
case "sticker":
case "s":
  if (!quoted) {
    return m.reply(`Send or reply to images, videos, or gifs with captions ${prefix + command}`);
  }
  let swns = args.join(" ");
  let pcknms = swns.split("|")[0];
  let atnms = swns.split("|")[1];
  
  if (/image/.test(mime)) {
    let media = await quoted.download();
    let encmedia = await Xploader.sendImageAsSticker(
      m.chat,
      media,
      m,
      { packname: `${pcknms ? pcknms : global.packname}`,  author: `${atnms ? atnms : global.author}` });
  } else if (/video/.test(mime)) {
    if ((quoted.msg || quoted).seconds > 10) {
      return m.reply("The video length must be 10 seconds or less. Please try again.");
    }
    let media = await quoted.download();
    let encmedia = await Xploader.sendVideoAsSticker(
      m.chat,
      media,
      m,
     { packname: `${pcknms ? pcknms : global.packname}`,  author: `${atnms ? atnms : global.author}` });
  } else {
    return m.reply(`Send or reply to images, videos, or gifs with captions ${prefix + command}`);
  }
  break;
//<================================================>//
      case "toimage":
      case "toimg":
        {
          if (!/webp/.test(mime))
            return m.reply(
              `*Reply sticker with caption ${prefix + command}*`
            );
          let media = await Xploader.downloadAndSaveMediaMessage(qmsg);
          let ran = await getRandom(".png");
          exec(`ffmpeg -i ${media} ${ran}`, (err) => {
            fs.unlinkSync(media);
            if (err) return err;
            let buffer = fs.readFileSync(ran);
            Xploader.sendMessage(
              m.chat,
              {
                image: buffer,
              },
              {
                quoted: m,
              }
            );
            fs.unlinkSync(ran);
          });
        }
        break;
//<================================================>//
     case "tomp4":
      case "tovideo":
        {
          if (!/webp/.test(mime))
            return m.reply(
              `*Reply sticker with caption ${prefix + command}*`
            );
          let media = await Xploader.downloadAndSaveMediaMessage(qmsg);
          let webpToMp4 = await webp2mp4File(media);
          await Xploader.sendMessage(
            m.chat,
            {
              video: {
                url: webpToMp4.result,
                caption: "XPLOADER",
              },
            },
            {
              quoted: m,
            }
          );
          await fs.unlinkSync(media);
        }
        break;
//<================================================>//
      case "toaud":
      case "toaudio":
        {
          if (!/video/.test(mime) && !/audio/.test(mime))
            return m.reply(`Send or reply to a video to be converted to audio with captions ${prefix + command}`);
          let media = await Xploader.downloadMediaMessage(qmsg);
          let audio = await toAudio(media, "mp4");
          Xploader.sendMessage(
            m.chat,
            {
              audio: audio,
              mimetype: "audio/mpeg",
            },
            {
              quoted: m,
            }
          );
        }
        break;
//<================================================>//
     case "tomp3":
        {
          if (!/video/.test(mime) && !/audio/.test(mime))
            return m.reply(`Send or reply to a video to be converted to mp3 with captions ${prefix + command}`);
          let media = await Xploader.downloadMediaMessage(qmsg);
          let audio = await toAudio(media, "mp4");
          Xploader.sendMessage(
            m.chat,
            {
              document: audio,
              mimetype: "audio/mp3",
              fileName: `Xploader.mp3`,
            },
            {
              quoted: m,
            }
          );
        }
        break;
//<================================================>//
    case "tovn":
      case "toptt":
        {
          if (!/video/.test(mime) && !/audio/.test(mime))
            return m.reply(`Send or reply to a video to be converted to VN with captions ${prefix + command}`);
          let media = await Xploader.downloadMediaMessage(qmsg);
          let { toPTT } = require("./lib/converter");
          let audio = await toPTT(media, "mp4");
          Xploader.sendMessage(
            m.chat,
            {
              audio: audio,
              mimetype: "audio/mpeg",
              ptt: true,
            },
            {
              quoted: m,
            }
          );
        }
        break;
//<================================================>//
 case "togif":
        {
          if (!/webp/.test(mime))
            return m.reply(
              `*Reply to a sticker with caption ${prefix + command}*`
            );
          let media = await Xploader.downloadAndSaveMediaMessage(qmsg);
          let webpToMp4 = await webp2mp4File(media);
          await Xploader.sendMessage(
            m.chat,
            {
              video: {
                url: webpToMp4.result,
                caption: "XPLOADER",
              },
              gifPlayback: true,
            },
            {
              quoted: m,
            }
          );
          await fs.unlinkSync(media);
        }
        break;
//<================================================>//
case "play":
case "song": {
  try {
    if (!text) return m.reply('*Please provide a song name!*');
    
    // Try the first method
    const randomReduction = Math.floor(Math.random() * 5) + 1;
    let search = await yts(text);
    
    if (!search.all[0]) {
      throw new Error('*Song not found!*');
    }
    
    let telaso = search.all[0].url;
    let kyuu = await fetchJson(`https://api.siputzx.my.id/api/d/ytmp3?url=${telaso}`);
    
    if (!kyuu.data.dl) {
      throw new Error('*Failed to retrieve the song!*');
    }
    
    await Xploader.sendMessage(m.chat, { 
      audio: {url: kyuu.data.dl}, 
      mimetype: 'audio/mpeg', 
      contextInfo: { 
        externalAdReply: { 
          title: botname, 
           body: `${kyuu.data.title}`,
          thumbnailUrl: `${search.all[0].thumbnail}`,
          sourceUrl: `${telaso}`,
          mediaType: 2,
          mediaUrl: `${search.all[0].thumbnail}`,
          showAdAttribution: true,
          renderLargerThumbnail: false
        } 
      } 
    }, { quoted: m });
    
    Xploader.sendMessage(m.chat, { react: { text: '✅', key: m.key }});
  
  } catch (error) {
    console.error('First method failed:', error);
    // Try the second method
    try {
      const search = await yts(text);
      if (!search.all[0]) return m.reply('*Song not found!*');
      const url = search.all[0].url;
      const data = await gifted.giftedytmp3(url);
      const audioUrl = data.result.download_url;
      await Xploader.sendMessage(m.chat, { 
        audio: { url: audioUrl }, 
        mimetype: 'audio/mpeg', 
        contextInfo: { 
          externalAdReply: { 
            title: botname, 
             body: `${search.all[0].title}`,
            thumbnailUrl: `${search.all[0].thumbnail}`,
            sourceUrl: `${url}`,
            mediaType: 2,
            mediaUrl: `${search.all[0].thumbnail}`,
            showAdAttribution: true,
            renderLargerThumbnail: false
          } 
        } 
      }, { quoted: m });
      Xploader.sendMessage(m.chat, { react: { text: '✅', key: m.key }});
    } catch (error) {
      console.error('Second method failed:', error);
      m.reply(`Error: ${error.message}`);
    }
  }
}
break;
//=================================================//
case "playdoc":
case "songdoc": {
  try {
    if (!text) return m.reply('*Please provide a song name!*');

    // Try the first method
    const search = await yts(text);
    const telaso = search.all[0].url;
    const kyuu = await fetchJson(`https://api.siputzx.my.id/api/d/ytmp3?url=${telaso}`);
    
    await Xploader.sendMessage(m.chat, {
      document: { url: kyuu.data.dl },
      mimetype: 'audio/mp3',
      fileName: `${search.all[0].title}.mp3`,
      contextInfo: {
        externalAdReply: {
          title: botname,
          body: kyuu.data.title,
          thumbnailUrl: search.all[0].thumbnail,
          sourceUrl: telaso,
          mediaType: 2,
          mediaUrl: search.all[0].thumbnail
        }
      }
    }, { quoted: m });

    Xploader.sendMessage(m.chat, { react: { text: '✅', key: m.key } });

  } catch (error) {
    console.error('First method failed:', error);
    // Try the second method
    try {
      const search = await yts(text);
      if (!search.all[0]) return m.reply('*Song not found!*');
      const url = search.all[0].url;
      const data = await gifted.giftedytmp3(url);
      const audioUrl = data.result.download_url;
      await Xploader.sendMessage(m.chat, {
        document: { url: audioUrl },
        mimetype: 'audio/mp3',
        fileName: `${search.all[0].title}.mp3`,
        contextInfo: {
          externalAdReply: {
            title: botname,
            body: `${search.all[0].title}`,
            thumbnailUrl: `${search.all[0].thumbnail}`,
            sourceUrl: `${url}`,
            mediaType: 2,
            mediaUrl: `${search.all[0].thumbnail}`
          }
        }
      }, { quoted: m });
      Xploader.sendMessage(m.chat, { react: { text: '✅', key: m.key } });
    } catch (error) {
      console.error('Second method failed:', error);
      m.reply(`Error: ${error.message}`);
    }
  }
}
break;
//=================================================//
case "video":
{
	if (!text) return m.reply('*Please provide a song/video name!*');
	const randomReduction = Math.floor(Math.random() * 5) + 1;
	let search = await yts(text);
	let telaso = search.all[0].url;
	let kyuu = await fetchJson (`https://api.siputzx.my.id/api/d/ytmp4?url=${telaso}`)
await Xploader.sendMessage(m.chat, {
 video: {url: kyuu.data.dl}, 
 caption: `©𝐗𝐩𝐥𝐨𝐚𝐝𝐞𝐫𝐁𝐨𝐭` ,
 contextInfo: {
        externalAdReply: {
          title: botname,
          body: `${search.all[0].title}`,
          thumbnailUrl: `${search.all[0].thumbnail}`,
          sourceUrl: `${telaso}`,
          mediaType: 2,
          mediaUrl: `${telaso}`,
        }
      }
    }, { quoted: m });
    Xploader.sendMessage(m.chat, { react: { text: '✅', key: m.key }})
  }
break;
//=================================================//
case "xvideos":
case "xvideo":
case "xvideosdl":
case "porn":
{
	if (!text) return m.reply('*Please provide a porn video search query!*');
    let kutu = await fetchJson (`https://api-aswin-sparky.koyeb.app/api/search/xvideos?search=${text}`)
	let kyuu = await fetchJson (`https://api-aswin-sparky.koyeb.app/api/downloader/xdl?url=${kutu.data[0].url}`)
await Xploader.sendMessage(m.chat, {
 video: {url: kyuu.data}, 
 caption: `©𝐗𝐩𝐥𝐨𝐚𝐝𝐞𝐫𝐁𝐨𝐭` ,
 contextInfo: {
        externalAdReply: {
          title: botname,
          body: `${kutu.data[0].title}`,
          sourceUrl: `${kutu.data[0].url}`,
          mediaType: 2,
          mediaUrl: `${kutu.data[0].url}`,
        }
      }
    }, { quoted: m });
    
	let kyut = await fetchJson (`https://api-aswin-sparky.koyeb.app/api/downloader/xdl?url=${kutu.data[1].url}`)
await Xploader.sendMessage(m.chat, {
 video: {url: kyut.data}, 
 caption: `©𝐗𝐩𝐥𝐨𝐚𝐝𝐞𝐫𝐁𝐨𝐭` ,
 contextInfo: {
        externalAdReply: {
          title: botname,
          body: `${kutu.data[1].title}`,
          sourceUrl: `${kutu.data[1].url}`,
          mediaType: 2,
          mediaUrl: `${kutu.data[0].url}`,
        }
      }
    }, { quoted: m });
  
	let ktut = await fetchJson (`*https://api-aswin-sparky.koyeb.app/api/downloader/xdl?url=${kutu.data[2].url}*`)
await Xploader.sendMessage(m.chat, {
 video: {url: ktut.data}, 
 caption: `©𝐗𝐩𝐥𝐨𝐚𝐝𝐞𝐫𝐁𝐨𝐭` ,
 contextInfo: {
        externalAdReply: {
          title: botname,
          body: `${kutu.data[2].title}`,
          sourceUrl: `${kutu.data[2].url}`,
          mediaType: 2,
          mediaUrl: `${kutu.data[2].url}`,
        }
      }
    }, { quoted: m });
    Xploader.sendMessage(m.chat, { react: { text: '✅', key: m.key }})
  }
break;
//=================================================//
case "videodoc":
{
	if (!text) return m.reply('*Please provide a song/video name!*');
	const randomReduction = Math.floor(Math.random() * 5) + 1;
	let search = await yts(text);
	let telaso = search.all[0].url;
	let kyuu = await fetchJson (`https://api.siputzx.my.id/api/d/ytmp4?url=${telaso}`)
await Xploader.sendMessage(m.chat, {
 document: {url: kyuu.data.dl},
mimetype: "video/mp4",
 fileName: `${search.all[0].title}.mp4`,
 contextInfo: {
        externalAdReply: {
          title: botname,
          body: `${search.all[0].title}`,
          thumbnailUrl: `${search.all[0].thumbnail}`,
          sourceUrl: `${telaso}`,
          mediaType: 2,
          mediaUrl: `${telaso}`,
        }
      }
    }, { quoted: m });
    Xploader.sendMessage(m.chat, { react: { text: '✅', key: m.key }})
  }
break;
//=================================================//
      case "yts":
      case "ytsearch":
        {
          if (!text)
            return m.reply(
              `*Example : ${prefix + command} Eminem Godzilla*`
            );
          let yts = require("yt-search");
          let search = await yts(text);
          let teks = "YouTube Search\n\n Result From " + text + "\n\n";
          let no = 1;
          for (let i of search.all) {
            teks += `□ No : ${no++}\n□ Type : ${
              i.type
            }\n□ Video ID : ${i.videoId}\n□ Title : ${
              i.title
            }\n□ Views : ${i.views}\n□ Duration : ${
              i.timestamp
            }\n□ Uploaded : ${i.ago}\n□ Url : ${
              i.url
            }\n\n─────────────────\n\n`;
          }
          Xploader.sendMessage(
            m.chat,
            { image: { url: search.all[0].thumbnail }, caption: teks },
            { quoted: m }
          );
        }
        break;
//=================================================//
      case "gitclone":
        if (!args[0])
          return m.reply(
            `*GitHub link to clone?*\nExample :\n${prefix}${command} https://github.com/Dark-Xploit/XPLOADER-BOT`
          );
        if (!isUrl(args[0]))
          return m.reply("*Link invalid! Please provide a valid URL.*");
        let regex1 =
          /(?:https|git)(?::\/\/|@)(www\.)?github\.com[\/:]([^\/:]+)\/(.+)/i;
        let [, , user, repo] = args[0].match(regex1) || [];
        if (!repo) {
          return m.reply(
            "*Invalid GitHub link format. Please double-check the provided link.*"
          );
        }
        repo = repo.replace(/.git$/, "");
        let url = `https://api.github.com/repos/${user}/${repo}/zipball`;
        let filename = (await fetch(url, { method: "HEAD" })).headers
          .get("content-disposition")
          .match(/attachment; filename=(.*)/)[1];
        Xploader.sendMessage(
          m.chat,
          {
            document: { url: url },
            fileName: filename + ".zip",
            mimetype: "application/zip",
          },
          { quoted: m }
        ).catch((err) => m.reply(mess.error));
        break;
//=================================================//
//=================================================//
case "ytmp3":
{
	if (!text) return m.reply('*Please provide a valid YouTube link!*');
	let urls = text.match(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch\?v=|v\/|embed\/|shorts\/|playlist\?list=)?)([a-zA-Z0-9_-]{11})/gi);
	if (!urls) return m.reply('*Seems like your message does not contain a valid YouTube link*');
	let urlIndex = parseInt(text) - 1;
	if (urlIndex < 0 || urlIndex >= urls.length)
		return m.reply('*Invalid URL index*');
	await downloadXMp3(urls);
}
break;
//=================================================//
case "ytmp4":
{
	if (!text) return m.reply('*Please provide a valid  YouTube link!*');
	let urls = text.match(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch\?v=|v\/|embed\/|shorts\/|playlist\?list=)?)([a-zA-Z0-9_-]{11})/gi);
	if (!urls) return m.reply('*Seems like your message does not contain a valid YouTube link*');
	let urlIndex = parseInt(text) - 1;
	if (urlIndex < 0 || urlIndex >= urls.length)
		return m.reply('*Invalid URL index*');
	await downloadXMp4(urls);
}
break;
//=================================================//
case "tiktok":
case "tikdl":
case "tiktokvideo":
{
	if (!args[0]) return m.reply('*Please provide a TikTok video url!*');
	let kyuu = await fetchJson (`https://api-aswin-sparky.koyeb.app/api/downloader/tiktok?url=${args[0]}`)
await Xploader.sendMessage(
              m.chat,
              {
                caption: `©𝐗𝐩𝐥𝐨𝐚𝐝𝐞𝐫𝐁𝐨𝐭`,
                video: { url: kyuu.data.video },
                fileName: "video.mp4",
                mimetype: "video/mp4",
              },
              { quoted: m });
          }
        break;
//=================================================//
case "tiktokaudio":
{
	if (!args[0]) return m.reply('*Please provide a TikTok audio url!*');
	let kyuu = await fetchJson (`https://api-aswin-sparky.koyeb.app/api/downloader/tiktok?url=${args[0]}`)
await Xploader.sendMessage(
              m.chat,
              {
                audio: { url: kyuu.data.audio },
                fileName: "tiktok.mp3",
                mimetype: "audio/mpeg",
              },
              { quoted: m });
          }
        break;
//=================================================//
      case "apk":
      case "apkdl":
        {
          if (!text) return m.reply("*Which apk do you want to download?*");
        let kyuu = await fetchJson (`https://bk9.fun/search/apk?q=${text}`);
        let tylor = await fetchJson (`https://bk9.fun/download/apk?id=${kyuu.BK9[0].id}`);
         await Xploader.sendMessage(
              m.chat,
              {
                document: { url: tylor.BK9.dllink },
                fileName: tylor.BK9.name,
                mimetype: "application/vnd.android.package-archive",
                contextInfo: {
        externalAdReply: {
          title: botname,
          body: `${tylor.BK9.name}`,
          thumbnailUrl: `${tylor.BK9.icon}`,
          sourceUrl: `${tylor.BK9.dllink}`,
          mediaType: 2,
          showAdAttribution: true,
          renderLargerThumbnail: false
        }
      }
    }, { quoted: m });
          }
      break;
//=================================================//
case "telesticker":
case "telegramsticker":
        {
          if (args[0] && args[0].match(/(https:\/\/t.me\/addstickers\/)/gi)) {
            let XpBotresources = await Telesticker(args[0]);
            await reply(`*Sending ${XpBotresources.length} stickers...*`);
            if (m.isGroup && XpBotresources.length > 30) {
              await reply(
                "*Number of stickers more than 30, bot will send it in private chat.*"
              );
              for (let i = 0; i < XpBotresources.length; i++) {
                Xploader.sendMessage(m.sender, {
                  sticker: { url: XpBotresources[i].url },
                });
              }
            } else {
              for (let i = 0; i < XpBotresources.length; i++) {
                Xploader.sendMessage(m.chat, {
                  sticker: { url: XpBotresources[i].url },
                });
              }
            }
          } else
            reply(
              `*Telegram sticker link?*\nExample. ${
                prefix + command
              } https://t.me/addstickers/FriendlyDeath`
            );
        }
        break;
//=================================================//
case "weather":
        {
          if (!text) return m.reply("*Which place?*");
          let city = text.split(" ")[0];
          let wdata = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273&language=en`
          );
          let textw = "";
          textw += `*🗺️Weather of  ${city}*\n\n`;
          textw += `*Weather:-* ${wdata.data.weather[0].main}\n`;
          textw += `*Description:-* ${wdata.data.weather[0].description}\n`;
          textw += `*Avg Temp:-* ${wdata.data.main.temp}\n`;
          textw += `*Feels Like:-* ${wdata.data.main.feels_like}\n`;
          textw += `*Pressure:-* ${wdata.data.main.pressure}\n`;
          textw += `*Humidity:-* ${wdata.data.main.humidity}\n`;
          textw += `*Humidity:-* ${wdata.data.wind.speed}\n`;
          textw += `*Latitude:-* ${wdata.data.coord.lat}\n`;
          textw += `*Longitude:-* ${wdata.data.coord.lon}\n`;
          textw += `*Country:-* ${wdata.data.sys.country}\n`;

          Xploader.sendMessage(
            m.chat,
            {
              text: textw,
            },
            {
              quoted: m,
            }
          );
        }
        break;
//=================================================//
case "imdb":
        if (!text) return m.reply(`*Name a Series or movie*`);      let fids = await axios.get(
          `http://www.omdbapi.com/?apikey=742b2d09&t=${text}&plot=full`
        );
        let imdbt = "";
        console.log(fids.data);
        imdbt +=
          "⚍⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚍\n" + " ``` IMDB SEARCH```\n" + "⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎\n";
        imdbt += "Title      : " + fids.data.Title + "\n";
        imdbt += "Year       : " + fids.data.Year + "\n";
        imdbt += "Rated      : " + fids.data.Rated + "\n";
        imdbt += "Released   : " + fids.data.Released + "\n";
        imdbt += "Runtime    : " + fids.data.Runtime + "\n";
        imdbt += "Genre      : " + fids.data.Genre + "\n";
        imdbt += "Director   : " + fids.data.Director + "\n";
        imdbt += "Writer     : " + fids.data.Writer + "\n";
        imdbt += "Actors     : " + fids.data.Actors + "\n";
        imdbt += "Plot       : " + fids.data.Plot + "\n";
        imdbt += "Language   : " + fids.data.Language + "\n";
        imdbt += "Country    : " + fids.data.Country + "\n";
        imdbt += "Awards     : " + fids.data.Awards + "\n";
        imdbt += "BoxOffice  : " + fids.data.BoxOffice + "\n";
        imdbt += "Production : " + fids.data.Production + "\n";
        imdbt += "imdbRating : " + fids.data.imdbRating + "\n";
        imdbt += "imdbVotes  : " + fids.data.imdbVotes + "";
        Xploader.sendMessage(
          m.chat,
          {
            image: {
              url: fids.data.Poster,
            },
            caption: imdbt,
          },
          {
            quoted: m,
          }
        );
        break;
//=================================================//
      case "wanumber":
        {
          if (!text)
            return m.reply(
              `*Provide Number with last values as x*\n\nExample: ${
                prefix + command
              } 2547961801xx`
            );
          var inputnumber = text.split(" ")[0];

          m.reply(`*Searching for WhatsApp account in given range...*`);
          function countInstances(string, word) {
            return string.split(word).length - 1;
          }
          var number0 = inputnumber.split("x")[0];
          var number1 = inputnumber.split("x")[countInstances(inputnumber, "x")]
            ? inputnumber.split("x")[countInstances(inputnumber, "x")]
            : "";
          var random_length = countInstances(inputnumber, "x");
          var randomxx;
          if (random_length == 1) {
            randomxx = 10;
          } else if (random_length == 2) {
            randomxx = 100;
          } else if (random_length == 3) {
            randomxx = 1000;
          }
          var text66 = `*==[ List of Whatsapp Numbers ]==*\n\n`;
          var nobio = `\n*Bio:* || \nHey there! I am using WhatsApp.\n`;
          var nowhatsapp = `\n*Numbers with no WhatsApp account within provided range.*\n`;
          for (let i = 0; i < randomxx; i++) {
            var nu = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
            var status1 = nu[Math.floor(Math.random() * nu.length)];
            var status2 = nu[Math.floor(Math.random() * nu.length)];
            var status3 = nu[Math.floor(Math.random() * nu.length)];
            var dom4 = nu[Math.floor(Math.random() * nu.length)];
            var random21;
            if (random_length == 1) {
              random21 = `${status1}`;
            } else if (random_length == 2) {
              random21 = `${status1}${status2}`;
            } else if (random_length == 3) {
              random21 = `${status1}${status2}${status3}`;
            } else if (random_length == 4) {
              random21 = `${status1}${status2}${status3}${dom4}`;
            }
            var anu = await Xploader.onWhatsApp(
              `${number0}${i}${number1}@s.whatsapp.net`
            );
            var anuu = anu.length !== 0 ? anu : false;
            try {
              try {
                var anu1 = await Xploader.fetchStatus(anu[0].jid);
              } catch {
                var anu1 = "401";
              }
              if (anu1 == "401" || anu1.status.length == 0) {
                nobio += `wa.me/${anu[0].jid.split("@")[0]}\n`;
              } else {
                text66 += `*Number:* wa.me/${
                  anu[0].jid.split("@")[0]
                }\n*Bio:* ${anu1.status}\n*Last updated:* ${moment(
                  anu1.setAt
                )
                  .tz(`${timezones}`)
                  .format("HH:mm:ss DD/MM/YYYY")}\n\n`;
              }
            } catch {
              nowhatsapp += `${number0}${i}${number1}\n`;
            }
          }
          m.reply(`${text66}${nobio}${nowhatsapp}`);
        }
        break;
//=================================================//
case "ringtone":
        {
          if (!text)
            return m.reply(`*Example : ${prefix + command} black rover*`);
          let ringtone = require("./lib/scraper");
          let anutone2 = await ringtone.ringtone(text);
          let result = anutone2[Math.floor(Math.random() * anutone2.length)];
          Xploader.sendMessage(
            m.chat,
            {
              audio: { url: result.audio },
              fileName: result.title + ".mp3",
              mimetype: "audio/mpeg",
            },
            { quoted: m }
          );
        }
        break;
//=================================================//
case "pinterest":
        {
          if (!text) return m.reply(`*Enter a search quiry*`);
          let { pinterest } = require("./lib/scraper");
          anutrest = await pinterest(text);
          result = anutrest[Math.floor(Math.random() * anutrest.length)];
          Xploader.sendMessage(
            m.chat,
            { image: { url: result }, caption: "Media Url : " + result },
            { quoted: m }
          );
        }
        break;
//=================================================//
case "itunes":
        {
          if (!text) return m.reply("*Please provide a song name*");
          try {
            let res = await fetch(
              `https://api.popcat.xyz/itunes?q=${encodeURIComponent(text)}`
            );
            if (!res.ok) {
              throw new Error(`*API request failed with status ${res.status}*`);
            }
            let json = await res.json();
            console.log("JSON response:", json);
            let songInfo = `*Song Information:*\n
     • *Name:* ${json.name}\n
     • *Artist:* ${json.artist}\n
     • *Album:* ${json.album}\n
     • *Release Date:* ${json.release_date}\n
     • *Price:* ${json.price}\n
     • *Length:* ${json.length}\n
     • *Genre:* ${json.genre}\n
     • *URL:* ${json.url}`;
            // Check if thumbnail is present, then send it with songInfo as caption
            if (json.thumbnail) {
              await Xploader.sendMessage(
                m.chat,
                { image: { url: json.thumbnail }, caption: songInfo },
                { quoted: m }
              );
            } else {
              m.reply(songInfo);
            }
          } catch (error) {
            console.error(error);
            // Handle the error appropriately
          }
        }
        break;
//=================================================//
case "fbdl":
case "facebook":
{
if (!text) return m.reply(`*Please provide an Facebook video url!*`)
var anut = await fetchJson(`https://api-aswin-sparky.koyeb.app/api/downloader/fbdl?url=${q}`)
var hasdl = anut.data[0].url
await Xploader.sendMessage(m.chat, {
video: {
url: hasdl,
caption: '©𝐗𝐩𝐥𝐨𝐚𝐝𝐞𝐫𝐁𝐨𝐭'
}
}, {
quoted: m
})
}
break;
//=================================================//
case "igdl": 
case "instagram":
{
if (!text) return m.reply(`*Please provide an Instagram video url!*`)
var anu = await fetchJson(`https://api-aswin-sparky.koyeb.app/api/downloader/igdl?url=${q}`)
var hassdl = anu.data[0].url
await Xploader.sendMessage(m.chat, {
video: {
url: hassdl,
caption: '©𝐗𝐩𝐥𝐨𝐚𝐝𝐞𝐫𝐁𝐨𝐭'
}
}, {
quoted: m
})
}
break;
//=================================================//
//=================================================//
//=================================================//
case "happymod":
        {
          if (!q)
            return m.reply(
              `*Example ${prefix + command} Sufway surfer mod*`
            );
          let kat = await scp2.happymod(q);
          m.reply(util.format(kat));
        }
        break;
//=====EPHOTO360 MENU CMDS=======================//
      case "glitchtext":
      case "graffiti":
      case "matrix":
      case "sand":
      case "topography":
      case "incandescent":
      case "dragonball":
      case "deadpool":
      case "writetext":
      case "advancedglow":
      case "typographytext":
      case "pixelglitch":
      case "neonglitch":
      case "flagtext":
      case "flag3dtext":
      case "deletingtext":
      case "blackpinkstyle":
      case "glowingtext":
      case "underwatertext":
      case "logomaker":
      case "cartoonstyle":
      case "papercutstyle":
      case "watercolortext":
      case "effectclouds":
      case "blackpinklogo":
      case "gradienttext":
      case "summerbeach":
      case "luxurygold":
      case "multicoloredneon":
      case "sandsummer":
      case "galaxywallpaper":
      case "1917style":
      case "makingneon":
      case "royaltext":
      case "freecreate":
      case "galaxystyle":
      case "lighteffects":
        {
          if (!q)
            return m.reply(`*Example : ${prefix + command} Tylor*`);
          let link;
          if (/glitchtext/.test(command))
            link =
              "https://en.ephoto360.com/create-digital-glitch-text-effects-online-767.html";
          if (/writetext/.test(command))
            link =
              "https://en.ephoto360.com/write-text-on-wet-glass-online-589.html";
          if (/advancedglow/.test(command))
            link = "https://en.ephoto360.com/advanced-glow-effects-74.html";
          if (/typographytext/.test(command))
            link =
              "https://en.ephoto360.com/create-typography-text-effect-on-pavement-online-774.html";
          if (/pixelglitch/.test(command))
            link =
              "https://en.ephoto360.com/create-pixel-glitch-text-effect-online-769.html";
          if (/neonglitch/.test(command))
            link =
              "https://en.ephoto360.com/create-impressive-neon-glitch-text-effects-online-768.html";
          if (/flagtext/.test(command))
            link =
              "https://en.ephoto360.com/nigeria-3d-flag-text-effect-online-free-753.html";
          if (/flag3dtext/.test(command))
            link =
              "https://en.ephoto360.com/free-online-american-flag-3d-text-effect-generator-725.html";
          if (/deletingtext/.test(command))
            link =
              "https://en.ephoto360.com/create-eraser-deleting-text-effect-online-717.html";
          if (/blackpinkstyle/.test(command))
            link =
              "https://en.ephoto360.com/online-blackpink-style-logo-maker-effect-711.html";
          if (/glowingtext/.test(command))
            link =
              "https://en.ephoto360.com/create-glowing-text-effects-online-706.html";
          if (/underwatertext/.test(command))
            link =
              "https://en.ephoto360.com/3d-underwater-text-effect-online-682.html";
          if (/logomaker/.test(command))
            link =
              "https://en.ephoto360.com/free-bear-logo-maker-online-673.html";
          if (/cartoonstyle/.test(command))
            link =
              "https://en.ephoto360.com/create-a-cartoon-style-graffiti-text-effect-online-668.html";
          if (/papercutstyle/.test(command))
            link =
              "https://en.ephoto360.com/multicolor-3d-paper-cut-style-text-effect-658.html";
          if (/watercolortext/.test(command))
            link =
              "https://en.ephoto360.com/create-a-watercolor-text-effect-online-655.html";
          if (/effectclouds/.test(command))
            link =
              "https://en.ephoto360.com/write-text-effect-clouds-in-the-sky-online-619.html";
          if (/blackpinklogo/.test(command))
            link =
              "https://en.ephoto360.com/create-blackpink-logo-online-free-607.html";
          if (/gradienttext/.test(command))
            link =
              "https://en.ephoto360.com/create-3d-gradient-text-effect-online-600.html";
          if (/summerbeach/.test(command))
            link =
              "https://en.ephoto360.com/write-in-sand-summer-beach-online-free-595.html";
          if (/luxurygold/.test(command))
            link =
              "https://en.ephoto360.com/create-a-luxury-gold-text-effect-online-594.html";
          if (/multicoloredneon/.test(command))
            link =
              "https://en.ephoto360.com/create-multicolored-neon-light-signatures-591.html";
          if (/sandsummer/.test(command))
            link =
              "https://en.ephoto360.com/write-in-sand-summer-beach-online-576.html";
          if (/galaxywallpaper/.test(command))
            link =
              "https://en.ephoto360.com/create-galaxy-wallpaper-mobile-online-528.html";
          if (/1917style/.test(command))
            link = "https://en.ephoto360.com/1917-style-text-effect-523.html";
          if (/makingneon/.test(command))
            link =
              "https://en.ephoto360.com/making-neon-light-text-effect-with-galaxy-style-521.html";
          if (/royaltext/.test(command))
            link =
              "https://en.ephoto360.com/royal-text-effect-online-free-471.html";
          if (/freecreate/.test(command))
            link =
              "https://en.ephoto360.com/free-create-a-3d-hologram-text-effect-441.html";
          if (/galaxystyle/.test(command))
            link =
              "https://en.ephoto360.com/create-galaxy-style-free-name-logo-438.html";
          if (/lighteffects/.test(command))
            link =
              "https://en.ephoto360.com/create-light-effects-green-neon-online-429.html";
        if (/deadpool/.test(command))
            link =
              "https://en.ephoto360.com/create-light-effects-green-neon-online-429.html";
        if (/dragonball/.test(command))
            link =
              "https://en.ephoto360.com/create-dragon-ball-style-text-effects-online-809.html";
        if (/incandescent/.test(command))
            link =
              "https://en.ephoto360.com/text-effects-incandescent-bulbs-219.html";
        if (/topography/.test(command))
            link =
              "https://en.ephoto360.com/create-typography-text-effect-on-pavement-online-774.html";
        if (/sand/.test(command))
            link =
              "https://en.ephoto360.com/write-in-sand-summer-beach-online-576.html";
        if (/matrix/.test(command))
            link =
              "https://en.ephoto360.com/matrix-text-effect-154.html";
        if (/graffiti/.test(command))
            link =
              "https://en.ephoto360.com/cute-girl-painting-graffiti-text-effect-667.html";
          let haldwhd = await ephoto(link, q);
          Xploader.sendMessage(
            m.chat,
            { image: { url: haldwhd }, caption: `${mess.success}` },
            { quoted: m }
          );
        }
        break;
//=============AI MENU CMDS=======================//
      case "gpt":
        {
          if (!text) return m.reply("*Please ask a question*");
          let d = await fetchJson(
            `https://api.siputzx.my.id/api/ai/copilot?text=${text}`
          );
          if (!d.data) {
            return m.reply(
              "*Please try again later or try another command!*"
            );
          } else {
            m.reply(d.data);
          }
        }
        break;
//=================================================//
      case "gemini":
        {
          if (!text) return m.reply("*Please ask a question*");
          let d = await fetchJson(
            `https://widipe.com/gemini?text=${text}`
          );
          if (!d.result) {
            return m.reply(
              "*Please try again later or try another command!*"
            );
          } else {
            m.reply(d.result);
          }
        }
        break;
//=================================================//
      case "openai":
      case "ai":
        {
          if (!text) return m.reply("*Please ask a question*");
          let d = await fetchJson(
            `https://widipe.com/openai?text=${text}`
          );
          if (!d.result) {
            return m.reply(
              "*Please try again later or try another command!*"
            );
          } else {
            m.reply(d.result);
          }
        }
        break;
//=================================================//
     case "gptgo":
        {
          if (!text) return m.reply("*Please ask a question*");
          let d = await fetchJson(
            `https://widipe.com/gptgo?text=${text}`
          );
          if (!d.result) {
            return m.reply(
              "*Please try again later or try another command!*"
            );
          } else {
            m.reply(d.result);
          }
        }
        break;
//=================================================//
     case "blackbox":
        {
          if (!text) return m.reply("*Please ask a question*");
          let d = await fetchJson(
            `https://widipe.com/blackbox?text=${text}`
          );
          if (!d.result) {
            return m.reply(
              "*Please try again later or try another command!*"
            );
          } else {
            m.reply(d.result);
          }
        }
        break;
//=================================================//
     case "bard":
     case "bardai":
        {
          if (!text) return m.reply("*Please ask a question*");
          let d = await fetchJson(
            `https://widipe.com/bard?text=${text}`
          );
          if (!d.result) {
            return m.reply(
              "*Please try again later or try another command!*"
            );
          } else {
            m.reply(d.result);
          }
        }
        break;
//=================================================//
     case "bingai":
        {
          if (!text) return m.reply("*Please ask a question*");
          let d = await fetchJson(
            `https://widipe.com/bingai?text=${text}`
          );
          if (!d.result) {
            return m.reply(
              "*Please try again later or try another command!*"
            );
          } else {
            m.reply(d.result);
          }
        }
        break;
//=================================================//
     case "simi":
        {
          if (!text) return m.reply("*Please ask a question*");
          let d = await fetchJson(
            `https://widipe.com/simi?text=${text}`
          );
          if (!d.result) {
            return m.reply(
              "*Please try again later or try another command!*"
            );
          } else {
            m.reply(d.result);
          }
        }
        break;
//=================================================//
      case "photoai":
        {
          if (!text) return m.reply("*Please enter a query!*");
          let XpBotfetch = await fetchJson(
            `https://bk9.fun/ai/photoleap?q=${text}`
          );
          Xploader.sendMessage(
            from,
            { image: { url: XpBotfetch.BK9 } },
            { quoted: m }
          );
        }
        break;
//=================================================//
      case "llama":
        {
          if (!text) return m.reply("*Please ask a question*");
          let d = await fetchJson(
            `https://bk9.fun/ai/llama?q=${text}`
          );
          if (!d.BK9) {
            return m.reply(
              "*Please try again later or try another command!*"
            );
          } else {
            m.reply(d.BK9);
          }
        }
        break;
//=================================================//
     case "gpt2":
        {
          if (!text) return m.reply("*Please ask a question*");
          let d = await fetchJson(
            `https://bk9.fun/ai/jeeves-chat?q=${text}`
          );
          if (!d.BK9) {
            return m.reply(
              "*Please try again later or try another command!*"
            );
          } else {
            m.reply(d.BK9);
          }
        }
        break;
//=================================================//
     case "turbo":
        {
          if (!text) return m.reply("*Please ask a question*");
          let d = await fetchJson(
            `https://widipe.com/turbo?text=${text}`
          );
          if (!d.result) {
            return m.reply(
              "*Please try again later or try another command!*"
            );
          } else {
            m.reply(d.result);
          }
        }
        break;
//<================================================>//
      case "bass":
      case "blown":
      case "deep":
      case "earrape":
      case "fast":
      case "fat":
      case "nightcore":
      case "reverse":
      case "robot":
      case "slow":
      case "smooth":
      case "squirrel":
        try {
          let set;
          if (/bass/.test(command))
            set = "-af equalizer=f=54:width_type=o:width=2:g=20";
          if (/blown/.test(command)) set = "-af acrusher=.1:1:64:0:log";
          if (/deep/.test(command)) set = "-af atempo=4/4,asetrate=44500*2/3";
          if (/earrape/.test(command)) set = "-af volume=12";
          if (/fast/.test(command))
            set = '-filter:a "atempo=1.63,asetrate=44100"';
          if (/fat/.test(command))
            set = '-filter:a "atempo=1.6,asetrate=22100"';
          if (/nightcore/.test(command))
            set = "-filter:a atempo=1.06,asetrate=44100*1.25";
          if (/reverse/.test(command)) set = '-filter_complex "areverse"';
          if (/robot/.test(command))
            set =
              "-filter_complex \"afftfilt=real='hypot(re,im)*sin(0)':imag='hypot(re,im)*cos(0)':win_size=512:overlap=0.75\"";
          if (/slow/.test(command))
            set = '-filter:a "atempo=0.7,asetrate=44100"';
          if (/smooth/.test(command))
            set =
              "-filter:v \"minterpolate='mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120'\"";
          if (/squirrel/.test(command))
            set = '-filter:a "atempo=0.5,asetrate=65100"';
          if (/audio/.test(mime)) {           
            let media = await Xploader.downloadAndSaveMediaMessage(quoted);
            let ran = getRandom(".mp3");
            exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
              fs.unlinkSync(media);
              if (err) return m.reply(err);
              let buff = fs.readFileSync(ran);
              Xploader.sendMessage(
                m.chat,
                { audio: buff, mimetype: "audio/mpeg" },
                { quoted: m }
              );
              fs.unlinkSync(ran);
            });
          } else
            m.reply(
              `Reply to the audio you want to change with a caption *${prefix + command}*`);
        } catch (e) {
          m.reply(e);
        }
        break;
//<================================================>//
case "cry":
case "kill":
case "hug":
case "pat":
case "lick":
case "kiss":
case "bite":
case "yeet":
case "bully":
case "bonk":
case "wink":
case "poke":
case "nom":
case "slap":
case "smile":
case "wave":
case "awoo":
case "blush":
case "smug":
case "glomp":
case "happy":
case "dance":
case "cringe":
case "cuddle":
case "highfive":
case "shinobu":
case "handhold":
  {
    axios.get(`https://api.waifu.pics/sfw/${command}`)
.then(({ data }) => {
  Xploader.sendImageAsSticker(from, data.url, m, {
    packname: global.packname,
    author: global.author,
  });
});
  }
  break;
//<================================================>//
case "woof":
case "8ball":
case "goose":
case "gecg":
case "feed":
case "avatar":
case "foxgirl":
case "lizard":
case "spank":
case "meow":
case "tickle":
  {
    axios.get(`https://nekos.life/api/v2/img/${command}`).then(({ data }) => {
  Xploader.sendImageAsSticker(from, data.url, m, {
    packname: global.packname,
    author: global.author,
  });
});
  }
break;
//<================================================>//
case "script":
case "sc":
case "repository":
case "repo": {
  try {
    let me = m.sender;
 const response = await axios.get(`https://api.github.com/repos/Dark-Xploit/XPLOADER-BOT`)
    if (response.status === 200) {
      const repoData = response.data
      const repos = `
*BOT NAME:*
> ${repoData.name}

*STARS:* 
> ${repoData.stargazers_count}

*FORKS:* 
> ${repoData.forks_count}

*GITHUB LINK:* 
https://github.com/Dark-Xploit/XPLOADER-BOT

@${me.split("@")[0]}👋, Don't forget to star and fork my repository😊

> 𝐗𝐩𝐥𝐨𝐚𝐝𝐞𝐫𝐁𝐨𝐭`;
Xploader.sendMessage(m.chat, { text : repos,
contextInfo: {
mentionedJid: [m.sender],
forwardingScore: 9999, 
isForwarded: true, 
forwardedNewsletterMessageInfo: {
newsletterJid: '120363345633217147@newsletter',
serverMessageId: 20,
newsletterName: '❃᙭ᑭᒪOᗩᗪᗴᖇ ᗷOT'
},
externalAdReply: {
title: "᙭ᑭᒪOᗩᗪᗴᖇ ᗷOT", 
body: "",
thumbnail: tylorkid5, 
sourceUrl: null,
mediaType: 1
}}}, { quoted : m })
    } else {
      await m.reply(`Failed to fetch repository data!`)
    }
  } catch (error) {
    console.error(error)
    await m.reply(`Couldn't find repository!`)
  }
}
break;
//<================================================>//
case "owner": {
  let list = [];
  for (let i of [ownernumber]) {
    list.push({
      displayName: await Xploader.getName(i),
      vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${global.ownername}\nFN:${global.ownername}\nitem1.TEL;waid=${i.split('@')[0]}:${i.split('@')[0]}\nitem1.X-ABLabel:Mobile\nEND:VCARD`
    })
  }
  await Xploader.sendMessage(from, { contacts: { displayName: `${list.length} Contact`, contacts: list }, mentions: [sender] }, { quoted: m })
}
break;
//<================================================>//
case "emojimix":
case "emix":
        {
          let [emoji1, emoji2] = text.split`+`;
          if (!emoji1)
            return m.reply(`*Example : ${prefix + command} 😅+🤔*`);
          if (!emoji2)
            return m.reply(`*Example : ${prefix + command} 😅+🤔*`);
          let anu = await fetchJson(
            `https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(
              emoji1
            )}_${encodeURIComponent(emoji2)}`
          );
          for (let res of anu.results) {
            let encmedia = await Xploader.sendImageAsSticker(
              m.chat,
              res.url,
              m,
              {
                packname: global.packname,
                author: global.author,
                categories: res.tags,
              }
            );
          }
        }
        break;
//<================================================>//
 case "tovv":
 case "toviewonce":
        {
 if (!isCreator) return m.reply(mess.owner);
 if (!quoted) return m.reply(`*Reply to an Image or Video*`);
          if (/image/.test(mime)) {
            anuan = await Xploader.downloadAndSaveMediaMessage(quoted);
            Xploader.sendMessage(
              m.chat,
              {
                image: {
                  url: anuan,
                },
                caption: mess.done,
                fileLength: "999",
                viewOnce: true,
              },
              {
                quoted: m,
              }
            );
          } else if (/video/.test(mime)) {
            anuanuan = await Xploader.downloadAndSaveMediaMessage(quoted);
            Xploader.sendMessage(
              m.chat,
              {
                video: {
                  url: anuanuan,
                },
                caption: mess.done,
                fileLength: "99999999",
                viewOnce: true,
              },
              {
                quoted: m,
              }
            );
          } else if (/audio/.test(mime)) {
            bebasap = await Xploader.downloadAndSaveMediaMessage(quoted);
            Xploader.sendMessage(m.chat, {
              audio: {
                url: bebasap,
              },
              mimetype: "audio/mpeg",
              ptt: true,
              viewOnce: true,
            });
          }
        }
        break;
//<================================================>//
case "whatmusic":
case "find":
case "shazam":
    if (!m.quoted) {
        m.reply('*It seems you want to identify a music. Please provide a quoted audio or video message for identification.*');
    } else if (/audio|video/.test(mime)) {
        try {
            let media = await m.quoted.download();
            const ext = mime.split('/')[1];
            fs.writeFileSync(`./src/${m.sender}.${ext}`, media);     
          const res = await acr.identify(fs.readFileSync(`./src/${m.sender}.${ext}`));
            const { code, msg } = res.status;

            if (code !== 0) {
                throw msg;
            }

            const { title, artists, album, genres, release_date } = res.metadata.music[0];
            const txt = `┏▣ ◊ 𝗫𝗣𝗟𝗢𝗔𝗗𝗘𝗥 𝗕𝗢𝗧 ◊
│• TITLE: ${title}
│• 𝙰𝚁𝚃𝙸𝚂𝚃: ${artists !== undefined ? artists.map(v => v.name).join(', ') : 'NOT FOUND'}
│• 𝙰𝙻𝙱𝚄𝙼: ${album.name || 'NOT FOUND'}
│• 𝙶𝙴𝙽𝚁𝙴: ${genres !== undefined ? genres.map(v => v.name).join(', ') : 'NOT FOUND'}
│• RELEASE DATE: ${release_date || 'NOT FOUND'}
┗▣ `.trim();

            fs.unlinkSync(`./src/${m.sender}.${ext}`);
            m.reply(txt);
        } catch (error) {
            console.error(error);
            m.reply('*An error occurred during music identification.*');
        }
    }
    break;
//<================================================>//
case "tinyurl":
case "shortlink": {
if (!text) return m.reply(`*Example: ${prefix+command} https://instagram.com/heyits_tylor*`)
let links = await axios.get(`https://tinyurl.com/api-create.php?url=${text}`)
m.reply(links.data)
}
break;
//<================================================>//
case "calculate":
case "calculator":
{
if (text.split("+")[0] && text.split("+")[1]) {
const value_one = Number(text.split("+")[0])
const value_two = Number(text.split("+")[1])
reply(`${value_one + value_two}`)
} else if (text.split("-")[0] && text.split("-")[1]) {
const value_one = Number(text.split("-")[0])
const value_two = Number(text.split("-")[1])
reply(`${value_one - value_two}`)
} else if (text.split("×")[0] && text.split("×")[1]) {
const value_one = Number(text.split("×")[0])
const value_two = Number(text.split("×")[1])
reply(`${value_one * value_two}`)
} else if (text.split("÷")[0] && text.split("÷")[1]) {
const value_one = Number(text.split("÷")[0])
const value_two = Number(text.split("÷")[1])
(`${value_one / value_two}`)
} else m.reply(`*Enter a maths question, Example* : ${prefix + command} 1 + 1\n\nAvailable options (+, -, ÷, ×)`)
}
break
//<================================================>//
case "tourl":
case "url":
  let media = await Xploader.downloadAndSaveMediaMessage(quoted);
  let mediaUrl = await handleMediaUpload(m, mime);  
  if (mediaUrl.startsWith("http")) {  
    m.reply('Url : ' + mediaUrl);  
  } else {
    m.reply(mediaUrl);  
  }
break;
//<================================================>//
case "define2":
        if (!q) return m.reply(`What do you want to define?`);
        try {
          targetfine = await axios.get(
            `http://api.urbandictionary.com/v0/define?term=${q}`
          );
          if (!targetfine) return m.reply(mess.error);
          const reply = `
*WORD:* ${q}
*DEFINITION:* ${targetfine.data.list[0].definition
            .replace(/\[/g, "")
            .replace(/\]/g, "")}
*EXAMPLE:* ${targetfine.data.list[0].example
            .replace(/\[/g, "")
            .replace(/\]/g, "")}`;
          Xploader.sendMessage(m.chat, { text: reply }, { quoted: m });
        } catch (err) {
          console.log(err);
          return m.reply(`*${q}* isn't a valid text`);
        }
        break;
//<================================================>//
case "remini":
case "enhance":
case "hd":
        {
          if (!quoted) return m.reply(`*Send or reply to an image*`);
          if (!/image/.test(mime))
            return m.reply(
              `Send or reply to an image with captions ${prefix + command}`
            );
          const { remini } = require("./lib/remini");
          let media = await quoted.download();
          let proses = await remini(media, "enhance");
          Xploader.sendMessage(
            m.chat,
            { image: proses, caption: mess.success },
            { quoted: m }
          );
        }
        break;
//<================================================>//
 case "wallpaper":
        {
          if (!text) return m.reply("Enter a search query");
          let { wallpaper } = require("./lib/scraper");
          anuwallpep = await wallpaper(text);
          result = anuwallpep[Math.floor(Math.random() * anuwallpep.length)];
          Xploader.sendMessage(
            m.chat,
            {
              caption: `TITLE : ${
                result.title
              }\nCATEGORY : ${
                result.type
              }\nDETAIL : ${
                result.source
              }\nMEDIA URL : ${
                result.image[2] || result.image[1] || result.image[0]
              }`,
              image: { url: result.image[0] },
            },
            { quoted: m }
          );
        }
        break;
//<================================================>//
case "wikimedia":
        {
          if (!text) return m.reply("Enter a search query");
          let { wikimedia } = require("./lib/scraper");
          let anumedia = await wikimedia(text);
          result = anumedia[Math.floor(Math.random() * anumedia.length)];
          Xploader.sendMessage(
            m.chat,
            {
              caption: `TITLE : ${result.title}\nSOURCE : ${result.source}\nMEDIA URL : ${result.image}`,
              image: { url: result.image },
            },
            { quoted: m }
          );
        }
        break;
//<================================================>//
case "fact":
        {
          const { data } = await axios.get(`https://nekos.life/api/v2/fact`);
          return m.reply(`*FACT:* ${data.fact}\n`);
        }
        break;
//<================================================>//
      case "quotes":
        const quoteXpBot = await axios.get(`https://favqs.com/api/qotd`);
        const textquotes = `*QUOTE:* ${quoteXpBot.data.quote.body}\n\n*AUTHOR:* ${quoteXpBot.data.quote.author}`;
        return m.reply(textquotes);
        break;
//<================================================>//
case "dare": {
  const dares = [
    "Eat 2 tablespoons of rice without any side dishes.",
    "Spill a secret about yourself.",
    "Call your crush now and send a screenshot.",
    "Drop only emojis for 1 day in group chats.",
    "Sing the chorus of your favorite song.",
    "Change your name to 'I'm a daredevil' for 24 hours.",
    "Tell a random person 'I was told I'm your twin, separated at birth.'",
    "Pretend to be possessed by an animal for 30 minutes.",
    "Record yourself reading a funny quote and send it here.",
    "Prank chat an ex and say 'I still love you.'",
    "Change your profile picture to a funny meme for 5 hours.",
    "Type only in Spanish for 24 hours.",
    "Use a funny voice note greeting for 3 days.",
    "Drop a song quote and tag a suitable member.",
    "Say 'You're beautiful' to someone you admire.",
    "Act like a chicken in front of your parents.",
    "Read a page from a random book aloud and send it here.",
    "Howl like a wolf for 10 seconds outside.",
    "Make a short dance video and put it on your status.",
    "Eat a raw piece of garlic.",
    "Show the last five people you texted and what the messages said.",
    "Put your full name on status for 5 hours.",
    "Make a twerk dance video and put it on your status.",
    "Call your bestie and say 'I love you.'",
    "Put your photo without filters on your status.",
    "Say 'I love you' to someone you secretly admire.",
    "Send a voice note saying 'Can I call you baby?'",
    "Change your name to 'I'm a daredevil' for 24 hours.",
    "Use a Bollywood actor's photo as your profile picture.",
    "Put your crush's photo on status with the caption 'My crush.'",
    "Write 'I love you' to someone and send a screenshot.",
    "Slap your butt and send the sound effect.",
    "Shout 'Bravo!' and send it here.",
    "Snap your face and send it here.",
    "Send your photo with the caption 'I'm feeling confident.'",
    "Kiss your mom or dad and say 'I love you.'",
    "Put your dad's name on status for 5 hours.",
    "Make a TikTok dance challenge video.",
    "Break up with your best friend for 5 hours without telling them.",
    "Tell a friend you love them and want to marry them.",
  ];

  const dareMessage = dares[Math.floor(Math.random() * dares.length)];
  const buffer = await getBuffer('https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg');
  
  Xploader.sendMessage(from, { 
    image: buffer, 
    caption: `DARE\n${dareMessage}` 
  }, { quoted: m });
}
break;
//<================================================>//
case "truth": {
  const truths = [
    "What's your biggest fear?",
    "Have you ever lied to your best friend?",
    "What's your deepest secret?",
    "Who's your secret crush?",
    "What's the biggest mistake you've ever made?",
    "Have you ever cheated on a test?",
    "What's the most embarrassing thing that's ever happened to you?",
    "Do you have a hidden talent?",
    "What's the biggest lie you've ever told?",
    "Have you ever been in love?",
    "What's the most spontaneous thing you've ever done?",
    "Who's the person you trust most?",
    "What's the biggest risk you've ever taken?",
    "Have you ever regretted something?",
    "What's the most memorable gift you've received?",
    "Have you ever had a crush on someone older?",
    "What's the biggest lesson you've learned?",
    "Have you ever broken someone's heart?",
    "What's the most exciting thing you've done?",
    "Do you believe in soulmates?",
    "What's the biggest challenge you've faced?",
    "Have you ever kept a secret from your parents?",
    "What's the most creative thing you've done?",
    "Have you ever felt betrayed?",
    "What's the biggest adventure you've been on?",
    "Have you ever had a rival?",
    "What's the most thoughtful thing someone's done for you?",
    "Have you ever forgiven someone?",
    "What's the biggest obstacle you've overcome?",
    "Do you believe in karma?",
    "What's the most romantic thing someone's done for you?",
    "Have you ever taken a risk for love?",
    "What's the biggest surprise you've ever received?",
    "Have you ever had a paranormal experience?",
    "What's the most inspiring story you've heard?",
    "Have you ever helped someone in need?",
    "What's the biggest accomplishment you're proud of?",
  ];

  const truthMessage = truths[Math.floor(Math.random() * truths.length)];
  const buffer = await getBuffer('https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg');
  
  Xploader.sendMessage(from, { 
    image: buffer, 
    caption: `TRUTH\n${truthMessage}` 
  }, { quoted: m });
}
break;
//<================================================>//
case "truthdetector":
case "liedetector": {
  if (!m.quoted) return m.reply(`Please reply to the message you want to detect!`);

  let responses = [
    "That's a blatant lie!",
    "Truth revealed!",
    "Lie alert!",
    "Hard to believe, but true!",
    "Professional liar detected!",
    "Fact-check: TRUE",
    "Busted! That's a lie!",
    "Unbelievable, but FALSE!",
    "Detecting... TRUTH!",
    "Lie detector activated: FALSE!",
    "Surprisingly, TRUE!",
    "My instincts say... LIE!",
    "That's partially true!",
    "Can't verify, try again!",
    "Most likely, TRUE!",
    "Don't believe you!",
    "Surprisingly, FALSE!",
    "Truth!",
    "Honest as a saint!",
    "Deceptive much?",
    "Absolutely true!",
    "Completely false!",
    "Seems truthful.",
    "Not buying it!",
    "You're lying through your teeth!",
    "Hard to believe, but it's true!",
    "I sense honesty.",
    "Falsehood detected!",
    "Totally legit!",
    "Lies, lies, lies!",
    "You can't fool me!",
    "Screams truth!",
    "Fabrication alert!",
    "Spot on!",
    "Fishy story, isn't it?",
    "Unquestionably true!",
    "Pure fiction!" 
  ];

  let result = responses[Math.floor(Math.random() * responses.length)];
  let reply = `*RESULT*: ${result}`;

  await m.reply(reply);
}
break;
//<================================================>//
case "translate":
case "trt":
        {
          if (!q)
            return m.reply(
              `*Text needed*\n\n*𝙴xample*\n*${
                prefix + command
              } <language en> <text>*\n*${prefix + command} siente la asombrosa vitalidad*`
            );
          const defaultLang = "en";
          const tld = "cn";
          let err = `
 *Example:*

*${prefix + command}* <id> [text]
*${prefix + command}* en Hello World

≡ *List of supported languages:* 
https://cloud.google.com/translate/docs/languages
`.trim();
          let lang = args[0];
          let text = args.slice(1).join(" ");
          if ((args[0] || "").length !== 2) {
            lang = defaultLang;
            text = args.join(" ");
          }
          if (!text && m.quoted && m.quoted.text) text = m.quoted.text;
          try {
            let result = await translate(text, {
              to: lang,
              autoCorrect: true,
            }).catch((_) => null);
            m.reply(result.text);
          } catch (e) {
            return m.reply(err);
          }
        }
        break;
//<================================================>//
case "say":
case "tts":
        {
          if (!text) return m.reply("*Text needed*");
          //Limit text to maximum supported 500 characters!
          let texttts = text.substring(0, 500);
          const XpBotrl = googleTTS.getAudioUrl(texttts, {
            lang: "en",
            slow: false,
            host: "https://translate.google.com",
          });
          return Xploader.sendMessage(
            m.chat,
            {
              audio: {
                url: XpBotrl,
              },
              mimetype: "audio/mp4",
              ptt: true,
              fileName: `${text}.mp3`,
            },
            {
              quoted: m,
            }
          );
        }
        break;
//<================================================>//
case "obfuscate":
        {
          if (!q)
            return m.reply(
              `*Example ${prefix + command} const xploader = require("xpbots");*`
            );
          let meg = await obfus(q);
          m.reply(`${meg.result}`);
        }
        break;
//=================================================//
      case "fancy":
      case "styletext":
        {
          let { styletext } = require("./lib/scraper");
          if (!text) return m.reply("*Enter a text!*");
          let anu = await styletext(text);
          let teks = `Style texts for ${text}\n\n`;
          for (let i of anu) {
            teks += `□ *${i.name}* : ${i.result}\n\n`;
          }
          m.reply(teks);
        }
        break;
//=================================================//
      case "bible":
        {
          const { translate } = require("@vitalets/google-translate-api");
          const BASE_URL = "https://bible-api.com";
          try {
            // Extract the chapter number or name from the command text.
            let chapterInput = m.text.split(" ").slice(1).join("").trim();
            if (!chapterInput) {
              throw new Error(
                `*Please specify the chapter number or name. Example: ${prefix + command} John 3:16*`);
            }
            // Encode the chapterInput to handle special characters
            chapterInput = encodeURIComponent(chapterInput);
            // Make an API request to fetch the chapter information.
            let chapterRes = await fetch(`${BASE_URL}/${chapterInput}`);
            if (!chapterRes.ok) {
              throw new Error(
                `*Please specify the chapter number or name. Example: ${prefix + command} John 3:16*`);
            }
            let chapterData = await chapterRes.json();
            let translatedChapterHindi = await translate(chapterData.text, {
              to: "hi",
              autoCorrect: true,
            });
            let translatedChapterEnglish = await translate(chapterData.text, {
              to: "en",
              autoCorrect: true,
            });
            let bibleChapter = `
*The Holy Bible*\n
*Chapter ${chapterData.reference}*\n
Type: ${chapterData.translation_name}\n
Number of verses: ${chapterData.verses.length}\n
*Chapter Content:*\n
${translatedChapterEnglish.text}\n`;
            m.reply(bibleChapter);
          } catch (error) {
            m.reply(`Error: ${error.message}`);
          }
        }
        break;
//=================================================//
case "quran":
        {
          try {
            // Extract the surah number or name from the command text.
            let surahInput = m.text.split(" ")[1];
            if (!surahInput) {
              throw new Error(`*Please specify the surah number or name*`);
            }
            let surahListRes = await fetch(
              "https://quran-endpoint.vercel.app/quran"
            );
            let surahList = await surahListRes.json();
            let surahData = surahList.data.find(
              (surah) =>
                surah.number === Number(surahInput) ||
                surah.asma.ar.short.toLowerCase() ===
                  surahInput.toLowerCase() ||
                surah.asma.en.short.toLowerCase() === surahInput.toLowerCase()
            );
            if (!surahData) {
              throw new Error(
                `Couldn't find surah with number or name "${surahInput}"`
              );
            }
            let res = await fetch(
              `https://quran-endpoint.vercel.app/quran/${surahData.number}`
            );
            if (!res.ok) {
              let error = await res.json();
              throw new Error(
                `API request failed with status ${res.status} and message ${error.message}`
              );
            }

            let json = await res.json();

            // Translate tafsir from Bahasa Indonesia to Urdu
            let translatedTafsirUrdu = await translate(json.data.tafsir.id, {
              to: "ur",
              autoCorrect: true,
            });

            // Translate tafsir from Bahasa Indonesia to English
            let translatedTafsirEnglish = await translate(json.data.tafsir.id, {
              to: "en",
              autoCorrect: true,
            });

            let quranSurah = `
*Quran: The Holy Book*\n
*Surah ${json.data.number}: ${json.data.asma.ar.long} (${json.data.asma.en.long})*\n
Type: ${json.data.type.en}\n
Number of verses: ${json.data.ayahCount}\n
*Explanation:*\n
${translatedTafsirEnglish.text}`;

           m.reply(quranSurah);

            if (json.data.recitation.full) {
              Xploader.sendMessage(
                m.chat,
                {
                  audio: { url: json.data.recitation.full },
                  mimetype: "audio/mp4",
                  ptt: true,
                  fileName: `recitation.mp3`,
                },
                { quoted: m }
              );
            }
          } catch (error) {
            m.reply(`Error: ${error.message}`);
          }
        }
        break;
//=================================================//
case "fliptext":
        {
          if (args.length < 1)
            return m.reply(`*Example:\n${prefix}fliptext Tylor*`);
          quere = args.join(" ");
          flipe = quere.split("").reverse().join("");
          m.reply(
            `Normal :\n${quere}\nFlip :\n${flipe}`
          );
        }
        break;
//=================================================//
      case "qrcode2":
        {
          if (!q) return m.reply("*Please include link or text!*");
          const QrCode = require("qrcode-reader");
          const qrcode = require("qrcode");
          let qyuer = await qrcode.toDataURL(q, { scale: 35 });
          let data = new Buffer.from(
            qyuer.replace("data:image/png;base64,", ""),
            "base64"
          );
          let buff = getRandom(".jpg");
          await fs.writeFileSync("./" + buff, data);
          let medi = fs.readFileSync("./" + buff);
          await Xploader.sendMessage(
            from,
            { image: medi, caption: "©𝐗𝐩𝐥𝐨𝐚𝐝𝐞𝐫𝐁𝐨𝐭" },
            { quoted: m }
          );
          setTimeout(() => {
            fs.unlinkSync(buff);
          }, 10000);
        }
        break;
//<================================================>//
case "lyrics":
        {
          if (!text)
            return m.reply(
              `*Please provide a song name!*`
            );
          let lyric = await fetch(
            `https://api-aswin-sparky.koyeb.app/api/search/lyrics?search=${text}`
          );
          let jsonXpBot = await lyric.json();
          if (jsonXpBot.error) {
            m.reply("*Lyrics not found.*");
          } else {
            m.reply(
              `*Artist*: Undefined\n*Lyrics*:\n${jsonXpBot.data}`
            );
          }
        }
     break;
//<================================================>//

//<================================================>//
case "time":
case "date":
        {
 let xpday = moment(Date.now()).tz(`${timezones}`).locale('en').format('dddd');
let xptime = moment(Date.now()).tz(`${timezones}`).locale('en').format('HH:mm:ss z');
          let lowq = `𝗧𝗜𝗠𝗘:\n${xptime}\n\n𝗗𝗔𝗧𝗘:\n${xpday}`;
          m.reply(lowq);
        }
        break;
//<================================================>//
case "volaudio":
        {
          if (!args.join(" "))
            return m.reply(`*Example: ${prefix + command} 10*`);
          media = await Xploader.downloadAndSaveMediaMessage(
            quoted,
            "volume"
          );
          rname = getRandom(".mp3");
          exec(
            `ffmpeg -i ${media} -filter:a volume=${args[0]} ${rname}`,
            (err, stderr, stdout) => {
              fs.unlinkSync(media);
              if (err) return m.reply("*Error!*");
              jadie = fs.readFileSync(rname);
              Xploader.sendMessage(
                from,
                { audio: jadie, mimetype: "audio/mp4", ptt: true },
                { quoted: m }
              );
              fs.unlinkSync(rname);
            }
          );
        }
        break;
//=================================================//
case "volvideo":
        {
          if (!args.join(" "))
            return m.reply(`*Example: ${prefix + command} 10*`);
          media = await Xploader.downloadAndSaveMediaMessage(
            quoted,
            "volume"
          );
          rname = getRandom(".mp4");
          exec(
            `ffmpeg -i ${media} -filter:a volume=${args[0]} ${rname}`,
            (err, stderr, stdout) => {
              fs.unlinkSync(media);
              if (err) return m.reply("*Error!*");
              jadie = fs.readFileSync(rname);
              Xploader.sendMessage(
                from,
                { video: jadie, mimetype: "video/mp4" },
                { quoted: m }
              );
              fs.unlinkSync(rname);
            }
          );
        }
        break;
//<================================================>//
case "close": {
  if (!m.isGroup) return m.reply(mess.group);
  if (!isAdmins && !isCreator) return m.reply(mess.notadmin);
  if (!isBotAdmins) return m.reply(mess.admin);

  Xploader.groupSettingUpdate(m.chat, "announcement");
  m.reply("Group closed by admin. Only admins can send messages.");
}
break;
//<================================================>//
case "open": {
  if (!m.isGroup) return m.reply(mess.group);
  if (!isAdmins && !isCreator) return m.reply(mess.notadmin);
  if (!isBotAdmins) return m.reply(mess.admin);

  Xploader.groupSettingUpdate(m.chat, "not_announcement");
  m.reply("Group opened by admin. Members can now send messages.");
}
break;
//<================================================>//
case "idgc":
case "groupid": {
 if (!isCreator) return m.reply(mess.owner);
if (!q) return m.reply('Please provide a group link!')
let linkRegex = args.join(" ")
let coded = linkRegex.split("https://chat.whatsapp.com/")[1]
if (!coded) return m.reply("Link Invalid")
Xploader.query({
tag: "iq",
attrs: {
type: "get",
xmlns: "w:g2",
to: "@g.us"
},
content: [{ tag: "invite", attrs: { code: coded } }]
}).then(async(res) => { 
tee = `${res.content[0].attrs.id ? res.content[0].attrs.id : "undefined"}`
m.reply(tee+ '@g.us')
})}
break
//<================================================>//
case "userid":
case "userjid":
        {
     if (!isCreator) return m.reply(mess.owner);
    if (!m.isGroup) return m.reply(mess.group);
          const groupMetadata = m.isGroup
            ? await Xploader.groupMetadata(m.chat).catch((e) => {})
            : "";
          const participants = m.isGroup
            ? await groupMetadata.participants
            : "";
          let textt = `Here is jid address of all users of\n *- ${groupMetadata.subject}*\n\n`;
          for (let mem of participants) {
            textt += `□ ${mem.id}\n`;
          }
          m.reply(textt);
        }
        break;
//<================================================>//
case "browse": {
  if (!text) return m.reply("Enter URL");

  try {
    let res = await fetch(text);

    if (res.headers.get('Content-Type').includes('application/json')) {
      let json = await res.json();
      Xploader.sendMessage(m.chat, { text: JSON.stringify(json, null, 2) }, { quoted: m });
    } else {
      let text = await res.text();
      Xploader.sendMessage(m.chat, { text }, { quoted: m });
    }

    if (!res.ok) throw new Error(`HTTP Error ${res.status}`);
  } catch (error) {
    m.reply(`Error fetching URL: ${error.message}`);
  }
}
break;
//<================================================>//
case "download": {
  if (!text) return m.reply('Enter download URL');
  try {
    let res = await fetch(text, { method: 'GET', redirect: 'follow' }); // Follow redirects
    let contentType = res.headers.get('content-type');
    let buffer = await res.buffer();
    let extension = contentType.split('/')[1]; // Get file extension from content type
    let filename = res.headers.get('content-disposition')?.match(/filename="(.*)"/)?.[1] || `download-${Math.random().toString(36).slice(2, 10)}.${extension}`;

    // Determine mime type
    let mimeType;
    switch (contentType) {
      case 'audio/mpeg':
        mimeType = 'audio/mpeg';
        break;
      case 'image/png':
        mimeType = 'image/png';
        break;
      case 'image/jpeg':
        mimeType = 'image/jpeg';
        break;
      case 'application/pdf':
        mimeType = 'application/pdf';
        break;
      case 'application/zip':
        mimeType = 'application/zip';
        break;
      case 'video/mp4':
        mimeType = 'video/mp4';
        break;
      case 'video/webm':
        mimeType = 'video/webm';
        break;
      case 'application/vnd.android.package-archive':
        mimeType = 'application/vnd.android.package-archive';
        break;
      default:
        mimeType = 'application/octet-stream';
    }

    Xploader.sendMessage(m.chat, { document: buffer, mimetype: mimeType, fileName: filename }, { quoted: m });
  } catch (error) {
    m.reply(`Error downloading file: ${error.message}`);
  }
}
break;
//<================================================>//
case "device":
case "getdevice": {
  if (!m.quoted) {
    return m.reply('*Please quote a message to use this command!*');
  }

  try {
    // Get the quoted message
    const quotedMsg = await m.getQuotedMessage();

    if (!quotedMsg) {
      return m.reply('*Could not detect, please try with newly sent message!*');
    }

    const messageId = quotedMsg.key.id;
    const messageIdLength = messageId.length;
    
    // Determine the device based on the message ID length
    let device = 'Unknown';
    if (messageIdLength === 32) {
      device = 'Android';
    } else if (messageIdLength === 22) {
      device = 'Web';
    } else if (messageIdLength === 20) {
      device = 'iOS';
    }

    m.reply(`The message is sent from ${device} device.`);
  } catch (err) {
    m.reply('Error determining device: ' + err.message);
  }
}
break;
//<================================================>//
case "deviceid": {
  if (!m.quoted) {
    return m.reply('*Please quote a message to use this command!*');
  }

  try {
    // Get the quoted message
    const quotedMsg = await m.getQuotedMessage();

    if (!quotedMsg) {
      return m.reply('*Could not find the quoted message!*');
    }

    const messageId = quotedMsg.key.id;
    const messageIdLength = messageId.length;

    m.reply(`Device Information:\nMessage ID: ${messageId}\nMessage ID Length: ${messageIdLength}`);
  } catch (err) {
    m.reply('Error retrieving device information: ' + err.message);
  }
}
break;
//<================================================>//
case "meme":
case "memes": {
  let res = await fetch("https://api.imgflip.com/get_memes");
  let json = await res.json();
  
  for (let i = 0; i < 5; i++) {
    let meme = json.data.memes[i];
    Xploader.sendMessage(m.chat, { image: { url: meme.url } }, { quoted: m });
  }
}
break;
//<================================================>//
case "joke":
case "jokes": {
  let res = await fetch("https://api.chucknorris.io/jokes/random");
  let json = await res.json();
  Xploader.sendMessage(m.chat, { text: json.value }, { quoted: m });
}
break;
//<================================================>//
case "encode": {
  if (!text) return m.reply("Enter URL");
  let encoded = encodeURIComponent(text);
  Xploader.sendMessage(m.chat, { text: encoded }, { quoted: m });
}
break;
//<================================================>//
case "qrcode": {
  if (!text) return m.reply("Enter text or URL");
  let res = await fetch(`https://api.qrserver.com/v1/create-qr-code/?data=${text}&size=200x200`);
  Xploader.sendMessage(m.chat, { image: { url: res.url } }, { quoted: m });
}
break;
//<================================================>//
case "define": {
  if (!text) return m.reply("Enter word");
  let res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${text}`);
  let json = await res.json();
  
  let definitions = json[0].meanings[0].definitions;
  let definitionList = "";
  
  for (let i = 0; i < definitions.length; i++) {
    definitionList += `Definition ${i+1}: ${definitions[i].definition}\n\n`;
  }
  
  Xploader.sendMessage(m.chat, { text: definitionList }, { quoted: m });
}
break;
//<================================================>//
case "trivia": {
  let res = await fetch("https://opentdb.com/api.php?amount=1");
  let json = await res.json();
  
  let question = json.results[0].question;
  let answer = json.results[0].correct_answer;
  
  Xploader.sendMessage(m.chat, { text: `Question: ${question}\n\nThink you know the answer? Sending the correct answer after 20 seconds` }, { quoted: m });
  
  setTimeout(async () => {
    Xploader.sendMessage(m.chat, { text: `Answer: ${answer}` });
  }, 20000); // 20 seconds
} break;
//<================================================>//
case "genpass": 
case "genpassword": 
  {
let length = text ? parseInt(text) : 12;
let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
let pass = "";
for (let i = 0; i < length; i++) {
pass += chars.charAt(Math.floor(Math.random() * chars.length));
}
Xploader.sendMessage(m.chat, { text: pass }, { quoted: m });
}
break;
//<================================================>//
case "decode": {
if (!text) return m.reply("Enter encoded URL");
let decoded = decodeURIComponent(text);
Xploader.sendMessage(m.chat, { text: decoded }, { quoted: m });
}
break;
//<================================================>//
//<================================================>//
case "antibadword":
case "antitoxic":
        {
          if (!m.isGroup) return m.reply(mess.group);
          if (!isBotAdmins) return m.reply(mess.admin);
          if (!isAdmins && !isCreator) return m.reply(mess.notadmin);
          if (args.length < 1) return m.reply("*on or off?*");
          if (args[0] === "on") {
            db.data.chats[from].badword = true;
            m.reply(`*Successfully enabled ${command}*`);
          } else if (args[0] === "off") {
            db.data.chats[from].badword = false;
            m.reply(`*Successfully disabled ${command}*`);
          }
        }
        break;
//<================================================>//
case "xxqc":
        {
          if (!q)
            return m.reply(
              `📌Example: ${
                prefix + command
              } pink hallo\n\n꒰ 🖌️ Color List ꒱ ೄྀ࿐ ˊˎ-\n━━━━━━⊱⋆⊰━━━━━━\npink\nblue\nred\ngreen\nyellow\npurple\ndarkblue\nlightblue\nash\norange\nblack\nwhite\nteal\nlightpink\nchocolate\nsalmon\nmagenta\ntan\nwheat\ndeeppink\nfire\nskyblue\nsafron\nbrightskyblue\nhotpink\nlightskyblue\nseagreen\ndarkred\norangered\ncyan\nviolet\nmossgreen\ndarkgreen\nnavyblue\ndarkorange\ndarkpurple\nfuchsia\ndarkmagenta\ndarkgray\npeachpuff\nblackishgreen\ndarkishred\ngoldenrod\ndarkishgray\ndarkishpurple\ngold\nsilver`
            );
          if (text.length > 100) return m.reply(`Max 100 character.`);
          let [color, ...message] = text.split(" ");
          message = message.join(" ");
          let backgroundColor;
          switch (color) {
            case "pink":
              backgroundColor = "#f68ac9";
              break;
            case "blue":
              backgroundColor = "#6cace4";
              break;
            case "red":
              backgroundColor = "#f44336";
              break;
            case "green":
              backgroundColor = "#4caf50";
              break;
            case "yellow":
              backgroundColor = "#ffeb3b";
              break;
            case "purple":
              backgroundColor = "#9c27b0";
              break;
            case "darkblue":
              backgroundColor = "#0d47a1";
              break;
            case "lightblue":
              backgroundColor = "#03a9f4";
              break;
            case "ash":
              backgroundColor = "#9e9e9e";
              break;
            case "orange":
              backgroundColor = "#ff9800";
              break;
            case "black":
              backgroundColor = "#000000";
              break;
            case "white":
              backgroundColor = "#ffffff";
              break;
            case "teal":
              backgroundColor = "#008080";
              break;
            case "lightpink":
              backgroundColor = "#FFC0CB";
              break;
            case "chocolate":
              backgroundColor = "#A52A2A";
            case "salmon":
              backgroundColor = "#FFA07A";
              break;
            case "magenta":
              backgroundColor = "#FF00FF";
              break;
            case "tan":
              backgroundColor = "#D2B48C";
              break;
            case "wheat":
              backgroundColor = "#F5DEB3";
              break;
            case "deeppink":
              backgroundColor = "#FF1493";
              break;
            case "fire":
              backgroundColor = "#B22222";
              break;
            case "skyblue":
              backgroundColor = "#00BFFF";
              break;
            case "orange":
              backgroundColor = "#FF7F50";
              break;
            case "brightskyblue":
              backgroundColor = "#1E90FF";
              break;
            case "hotpink":
              backgroundColor = "#FF69B4";
              break;
            case "lightskyblue":
              backgroundColor = "#87CEEB";
              break;
            case "seagreen":
              backgroundColor = "#20B2AA";
              break;
            case "darkred":
              backgroundColor = "#8B0000";
              break;
            case "orangered":
              backgroundColor = "#FF4500";
              break;
            case "cyan":
              backgroundColor = "#48D1CC";
              break;
            case "violet":
              backgroundColor = "#BA55D3";
              break;
            case "mossgreen":
              backgroundColor = "#00FF7F";
              break;
            case "darkgreen":
              backgroundColor = "#008000";
              break;
            case "navyblue":
              backgroundColor = "#191970";
              break;
            case "darkorange":
              backgroundColor = "#FF8C00";
              break;
            case "darkpurple":
              backgroundColor = "#9400D3";
              break;
            case "fuchsia":
              backgroundColor = "#FF00FF";
              break;
            case "darkmagenta":
              backgroundColor = "#8B008B";
              break;
            case "darkgray":
              backgroundColor = "#2F4F4F";
              break;
            case "peachpuff":
              backgroundColor = "#FFDAB9";
              break;
            case "darkishgreen":
              backgroundColor = "#BDB76B";
              break;
            case "darkishred":
              backgroundColor = "#DC143C";
              break;
            case "goldenrod":
              backgroundColor = "#DAA520";
              break;
            case "darkishgray":
              backgroundColor = "#696969";
              break;
            case "darkishpurple":
              backgroundColor = "#483D8B";
              break;
            case "gold":
              backgroundColor = "#FFD700";
              break;
            case "silver":
              backgroundColor = "#C0C0C0";
              break;
            default:
              return m.reply("The selected color is not available.");
          }
          let obj = {
            type: "quote",
            format: "png",
            backgroundColor,
            width: 512,
            height: 768,
            scale: 2,
            messages: [
              {
                entities: [],
                avatar: true,
                from: {
                  id: 1,
                  name: pushname,
                  photo: {
                    url: await Xploader.profilePictureUrl(
                      m.sender,
                      "image"
                    ).catch(
                      () =>
                        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60"
                    ),
                  },
                },
                text: message,
                replyMessage: {},
              },
            ],
          };
          let response = await axios.post(
            "https://bot.lyo.su/quote/generate",
            obj,
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          let buffer = Buffer.from(response.data.result.image, "base64");
          Xploader.sendImageAsSticker(m.chat, buffer, m, {
            packname: `${global.packname}`,
            author: `${global.author}`,
          });
        }
        break;
//<================================================>//
case "listonline": 
 case "onlinemembers":
        {
      if (!m.isGroup) return m.reply(mess.group);
        let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
        let online = [...Object.keys(store.presences[id]), botNumber]
        let liston = 1
        Xploader.sendText(m.chat, '*ONLINE MEMBERS IN THIS GROUP*\n\n' + online.map(v => `${liston++} . @` + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
      }
        break; 
//<================================================>//
case "editsettings":
case "editinfo":
        if (!m.isGroup) return m.reply(mess.group);
        if (!isAdmins && !isGroupOwner && !isCreator)
          return m.reply(mess.admin);
        if (!isBotAdmins) return m.reply(mess.admin);
        if (args[0] === "on") {
          await Xploader.groupSettingUpdate(m.chat, "unlocked").then(
            (res) => m.reply(`*Successful, members can edit group info*`)
          );
        } else if (args[0] === "off") {
          await Xploader.groupSettingUpdate(m.chat, "locked").then((res) =>
            m.reply(`*Successful, members cannot edit group info*`)
          );
        } else {
          m.reply(`Example ${prefix + command} on/off`);
        }
        break;
//<================================================>//
case "blockforeign": {
  if (!isCreator) return m.reply(mess.owner);
  if (args.length < 1) return m.reply(`Example: ${prefix + command} on/off`);

  const option = args[0].toLowerCase();
  if (option !== "on" && option !== "off") return m.reply("Invalid option");

  db.data.settings[botNumber].autoblocknum = option === "on";
  m.reply(`Block foreign numbers ${option === "on" ? "enabled" : "disabled"} successfully.`);
}
break;
//<================================================>//
case "antiforeign": {
  if (!m.isGroup) return m.reply(mess.group);
  if (!isBotAdmins) return m.reply(mess.admin);
  if (!isAdmins && !isCreator) return m.reply(mess.notadmin);
  if (args.length < 1) return m.reply("*on or off?*");

  const option = args[0].toLowerCase();
  if (option !== "on" && option !== "off") return m.reply("Invalid option");

  db.data.chats[m.chat].antiforeignnum = option === "on";
  m.reply(`*Successfully ${option === "on" ? "enabled" : "disabled"} ${command}*`);
}
break;
//<================================================>//
case "delppgroup": {
  if (!m.isGroup) return m.reply(mess.group);
  if (!isAdmins && !isCreator) return m.reply(mess.notadmin);
  if (!isBotAdmins) return m.reply(mess.admin);
  await Xploader.removeProfilePicture(from);
  m.reply("Group profile picture has been successfully removed.");
}
break;
//<================================================>//
case "setppgroup": {
  if (!m.isGroup) return m.reply(mess.group);
  if (!isAdmins && !isCreator) return m.reply(mess.notadmin);
  if (!isBotAdmins) return m.reply(mess.admin);
  if (!quoted) 
    return m.reply(`*Send or reply to an image with the caption ${prefix + command}*`);
  if (!/image/.test(mime))
    return m.reply(`*Send or reply to an image with the caption ${prefix + command}*`);
  if (/webp/.test(mime))
    return m.reply(`*Send or reply to an image with the caption ${prefix + command}*`);

  var medis = await Xploader.downloadAndSaveMediaMessage(quoted, "ppbot.jpeg");
  if (args[0] == "full") {
    var { img } = await generateProfilePicture(medis);
    await Xploader.query({
      tag: "iq",
      attrs: {
        to: m.chat,
        type: "set",
        xmlns: "w:profile:picture",
      },
      content: [
        {
          tag: "picture",
          attrs: {
            type: "image",
          },
          content: img,
        },
      ],
    });
    fs.unlinkSync(medis);
    m.reply("Group profile picture has been successfully set.");
  } else {
    var memeg = await Xploader.updateProfilePicture(m.chat, { url: medis });
    fs.unlinkSync(medis);
    m.reply("Group profile picture has been successfully updated.");
  }
}
break;
//<================================================>//;
//<================================================>//
case "addbadword": {
    if (!isCreator) return m.reply(mess.owner);

    if (args.length < 1) {
        return m.reply(`Use ${prefix}addbadword [harsh word].`);
    }

    // Add the bad word to the list
    bad.push(q);

    // Save the updated bad word list to the JSON file
    fs.writeFileSync('./src/badwords.json', JSON.stringify(bad, null, 2));

    m.reply('Successfully added bad word!');
}
break;
//<================================================>//
case "delbadword": {
    if (!isCreator) return m.reply(mess.owner);

    if (args.length < 1) {
        return m.reply(`Use ${prefix}delbadword [bad word].`);
    }

    // Find the index of the bad word to be removed
    const index = bad.indexOf(q);
    if (index !== -1) {
        // Remove the bad word from the list
        bad.splice(index, 1);

        // Save the updated bad word list to the JSON file
        fs.writeFileSync('./src/badwords.json', JSON.stringify(bad, null, 2));

        m.reply('Successfully deleted bad word!');
    } else {
        m.reply('Bad word not found!');
    }
}
break;
//<================================================>//
case "listbadword": {
    if (!isCreator) return m.reply(mess.owner);

    // Check if the message is from a group
    if (m.isGroup) {
        return m.reply('This command cannot be used in personal chats.');
    }

    if (bad.length === 0) {
        return m.reply('No bad words have been added yet.');
    }

    let text = '*Bad Words List:*\n\n';
    bad.forEach((word, index) => {
        text += `${index + 1}. ${word}\n`;
    });

    text += `\nTotal bad words: ${bad.length}`;
    m.reply(text);
}
break;
//<================================================>//
//<================================================>//
//<================================================>//
//<================================================>//
//<================================================>//

default: {
    if (budy.startsWith('$')) {
        if (!isCreator) return m.reply(mess.owner);
        exec(budy.slice(2), (err, stdout) => {
            if (err) return m.reply(err);
            if (stdout) return m.reply(stdout);
        });
    }

    if (budy.startsWith('>')) {
        if (!isCreator) return m.reply(mess.owner);
        try {
            let evaled = await eval(budy.slice(2));
            if (typeof evaled !== 'string') evaled = require('util').inspect(evaled);
            await m.reply(evaled);
        } catch (err) {
            console.error(err); // Log the error to the console
            await m.reply(String(err));
        }
    }

    if (budy.startsWith('=>')) {
        if (!isCreator) return m.reply(mess.owner);

        function Return(sul) {
            let sat = JSON.stringify(sul, null, 2);
            let bang = util.format(sat);
            if (sat == undefined) {
                bang = util.format(sul);
            }
            return m.reply(bang);
        }
        try {
            const result = await eval(`(async () => { return ${budy.slice(3)} })()`);
            m.reply(util.format(result));
        } catch (e) {
            console.error(e); // Log the error to the console
            m.reply(String(e));
        }
    }
}

}
} catch (err) {
  let formattedError = util.format(err);
  let errorMessage = String(formattedError);

  if (shouldLogError(errorMessage)) {
    if (typeof err === 'string') {
      m.reply(`An error occurred:\n\nError Description: ${errorMessage}`);
    } else {
      console.log(formattedError);
      Xploader.sendMessage(Xploader.user.id, {
        text: `An error occurred:\n\nError Description: ${errorMessage}`,
        contextInfo: {
          forwardingScore: 9999999,
          isForwarded: true
        }
      });
    }

    recordError(errorMessage);
  } else {
    console.log(`Repeated error suppressed: ${errorMessage}`);
  }
}
}

//file watch code...
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(color(`Updated ${__filename}`));
  delete require.cache[file];
  require(file);
});