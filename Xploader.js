//
//project_name : XPLOADER 
// @author : TYLOR
// @youtube : https://www.youtube.com/@heyits_tylor
// @instagram  : heyits_tylor
// @telegram : t.me/heyits_tylor
// @github : heyit-tylor
// @tiktok :hey.its_tylor
// @whatsapp : +254796180105
//*
//*

const {
  BufferJSON,
  WA_DEFAULT_EPHEMERAL,
  generateWAMessageFromContent,
  proto,
  useMultiFileAuthState,
  makeWASocket,
  downloadContentFromMessage,
  generateWAMessageContent,
  generateWAMessage,
  prepareWAMessageMedia,
  areJidsSameUser,
  getContentType,
} = require("@whiskeysockets/baileys");
const os = require("os");
const fs = require("fs");
const fsx = require("fs-extra");
const path = require("path");
const util = require("util");
const { color } = require("./lib/color");
const chalk = require("chalk");
const moment = require("moment-timezone");
const cron = require("node-cron");
const speed = require("performance-now");
const ms = (toMs = require("ms"));
const axios = require("axios");
const fetch = require("node-fetch");
const ytdl = require("ytdl-core");
const yts = require("yt-search");
const gis = require("g-i-s");
const cheerio = require("cheerio");
const { randomBytes } = require("crypto");
const fg = require("api-dylux");
const acrcloud = require ('acrcloud');
const googleTTS = require("google-tts-api");
const jsobfus = require("javascript-obfuscator");
const { translate } = require("@vitalets/google-translate-api");
const scp2 = require("./lib/scraper2");
const pkg = require("imgur");
const pino = require("pino");
const { ImgurClient } = pkg;
const client = new ImgurClient({ clientId: "a0113354926015a" });
const { exec, spawn, execSync } = require("child_process");
const { performance } = require("perf_hooks");
const more = String.fromCharCode(8206);
const readmore = more.repeat(4001);
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
  getGroupAdmins,
  formatp,
  formatDate,
  getTime,
  isUrl,
  await,
  sleep,
  clockString,
  msToDate,
  sort,
  toNumber,
  enumGetKey,
  runtime,
  fetchJson,
  getBuffer,
  json,
  delay,
  format,
  logic,
  generateProfilePicture,
  parseMention,
  getRandom,
  pickRandom,
  fetchBuffer,
  buffergif,
  totalcase,
} = require("./lib/myfunc");
const acr = new acrcloud({
    host: 'identify-eu-west-1.acrcloud.com',
    access_key: '882a7ef12dc0dc408f70a2f3f4724340',
    access_secret: 'qVvKAxknV7bUdtxjXS22b5ssvWYxpnVndhy2isXP'
});
//prem owner function
const {
  addPremiumUser,
  getPremiumExpired,
  getPremiumPosition,
  expiredPremiumCheck,
  checkPremiumUser,
  getAllPremiumUser,
} = require("./lib/premiun");
//data
let ntnsfw = JSON.parse(fs.readFileSync("./src/data/function/nsfw.json"));
let bad = JSON.parse(fs.readFileSync("./src/data/function/badword.json"));
let premium = JSON.parse(fs.readFileSync("./src/data/role/premium.json"));
const owner = JSON.parse(fs.readFileSync("./src/data/role/owner.json"));
//media
const VoiceNoteXeon = JSON.parse(
  fs.readFileSync("./XploaderMedia/database/XploaderVn.json")
);
const StickerXeon = JSON.parse(
  fs.readFileSync("./XploaderMedia/database/XploaderSticker.json")
);
const ImageXeon = JSON.parse(
  fs.readFileSync("./XploaderMedia/database/Xploaderimage.json")
);
const VideoXeon = JSON.parse(
  fs.readFileSync("./XploaderMedia/database/XploaderVideo.json")
);
const DocXeon = JSON.parse(fs.readFileSync("./XploaderMedia/database/doc.json"));
const ZipXeon = JSON.parse(fs.readFileSync("./XploaderMedia/database/zip.json"));
const ApkXeon = JSON.parse(fs.readFileSync("./XploaderMedia/database/apk.json"));
const xeonverifieduser = JSON.parse(
  fs.readFileSync("./src/data/role/user.json"));
const tylorkid = fs.readFileSync("./XploaderMedia/theme/Xploader.jpg");
const tylorkiddo = fs.readFileSync("./XploaderMedia/theme/Xploader2.jpg")

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

let vote = (db.data.others.vote = []);
let kuismath = (db.data.game.math = []);
//afk function
function formatAfkDuration(ms) {
  let seconds = Math.floor(ms / 1000);
  let minutes = Math.floor(seconds / 60);
  let hours = Math.floor(minutes / 60);
  let days = Math.floor(hours / 24);

  seconds %= 60;
  minutes %= 60;
  hours %= 24;

  let parts = [];
  if (days) parts.push(days + " days");
  if (hours) parts.push(hours + " hours");
  if (minutes) parts.push(minutes + " minutes");
  if (seconds) parts.push(seconds + " seconds");

  return parts.join(", ");
}
//time
const xday = moment(Date.now()).tz('Africa/Nairobi').locale('id').format('dddd');
const xtime = moment(Date.now()).tz('Africa/Nairobi').locale('id').format('HH:mm:ss z');
const xdate = moment(Date.now()).tz("Africa/Nairobi").format("DD/MM/YYYY");
const time2 = moment(Date.now()).tz("Africa/Nairobi").locale('id').format("HH:mm:ss z");
if (time2 < "23:59:00") {
  var xeonytimewisher = `Good Night 🌌`;
}
if (time2 < "19:00:00") {
  var xeonytimewisher = `Good Evening 🌃`;
}
if (time2 < "18:00:00") {
  var xeonytimewisher = `Good Evening 🌃`;
}
if (time2 < "15:00:00") {
  var xeonytimewisher = `Good Afternoon 🌅`;
}
if (time2 < "11:00:00") {
  var xeonytimewisher = `Good Morning 🌄`;
}
if (time2 < "05:00:00") {
  var xeonytimewisher = `Good Morning 🌄`;
}
//function
const reSize = async (buffer, ukur1, ukur2) => {
  return new Promise(async (resolve, reject) => {
    let jimp = require("jimp");
    var baper = await jimp.read(buffer);
    var ab = await baper.resize(ukur1, ukur2).getBufferAsync(jimp.MIME_JPEG);
    resolve(ab);
  });
};
//module
module.exports = XliconBotInc = async (XliconBotInc, m, chatUpdate, store) => {
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
    const command2 = body.slice(1).trim().split(/ +/).shift().toLowerCase();
    const args = body.trim().split(/ +/).slice(1);
    const full_args = body.replace(command, "").slice(1).trim();
    const pushname = m.pushName || "No Name";
    const botNumber = await XliconBotInc.decodeJid(XliconBotInc.user.id);
    const itsMe = m.sender == botNumber ? true : false;
    const sender = m.sender;
    const text = (q = args.join(" "));
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
//media
    const isMedia = /image|video|sticker|audio/.test(mime);
    const isImage = type == "imageMessage";
    const isVideo = type == "videoMessage";
    const isAudio = type == "audioMessage";
    const isDocument = type == "documentMessage";
    const isLocation = type == "locationMessage";
    const isContact = type == "contactMessage";
    const isSticker = type == "stickerMessage";
    const isText = type == "textMessage";
    const isQuotedText =
      type === "extendexTextMessage" && content.includes("textMessage");
    const isQuotedImage =
      type === "extendedTextMessage" && content.includes("imageMessage");
    const isQuotedLocation =
      type === "extendedTextMessage" && content.includes("locationMessage");
    const isQuotedVideo =
      type === "extendedTextMessage" && content.includes("videoMessage");
    const isQuotedSticker =
      type === "extendedTextMessage" && content.includes("stickerMessage");
    const isQuotedAudio =
      type === "extendedTextMessage" && content.includes("audioMessage");
    const isQuotedContact =
      type === "extendedTextMessage" && content.includes("contactMessage");
    const isQuotedDocument =
      type === "extendedTextMessage" && content.includes("documentMessage");
    const downloadMp3 = async (Link) => {
try {
await ytdl.getInfo(Link)
let mp3File = getRandom(".mp3")
ytdl(Link, { filter: "audioonly" }).pipe(fs.createWriteStream(mp3File)).on("finish", async () => {
await XliconBotInc.sendMessage(m.chat, { audio: fs.readFileSync(mp3File), mimetype: "audio/mp4" }, { quoted: m })
await fs.unlinkSync(mp3File);
})
} catch (err) {
replygcXlicon(`${err}`);
}
}
    //prefix 2
    const pric = /^#.¦|\\^/.test(body) ? body.match(/^#.¦|\\^/gi) : xprefix;
    const xeonybody = body.startsWith(pric);
    const isCommand = xeonybody
      ? body.replace(pric, "").trim().split(/ +/).shift().toLowerCase()
      : "";
    const sticker = [];
    //group
    const isGroup = m.key.remoteJid.endsWith("@g.us");
    const groupMetadata = m.isGroup
      ? await XliconBotInc.groupMetadata(m.chat).catch((e) => {})
      : "";
    const groupName = m.isGroup ? groupMetadata.subject : "";
    const participants = m.isGroup ? await groupMetadata.participants : "";
    const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : "";
    const isGroupAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false;
    const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false;
    const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false;
    const groupOwner = m.isGroup ? groupMetadata.owner : "";
    const isGroupOwner = m.isGroup
      ? (groupOwner ? groupOwner : groupAdmins).includes(m.sender)
      : false;
    const AntiNsfw = m.isGroup ? ntnsfw.includes(from) : false;
    const mentionByReply =
      type == "extendedTextMessage" &&
      m.message.extendedTextMessage.contextInfo != null
        ? m.message.extendedTextMessage.contextInfo.participant || ""
        : "";
    const mentionByTag =
      type == "extendedTextMessage" &&
      m.message.extendedTextMessage.contextInfo != null
        ? m.message.extendedTextMessage.contextInfo.mentionedJid
        : [];
    //anti media
    const isXploaderMedia = m.mtype;
    //user status
    const isUser = xeonverifieduser.includes(sender);
    const XeonTheCreator = [botNumber, ...owner]
      .map((v) => v.replace(/[^0-9]/g, "") + "@s.whatsapp.net")
      .includes(m.sender);
    const isPremium = XeonTheCreator || checkPremiumUser(m.sender, premium);
    expiredPremiumCheck(XliconBotInc, m, premium);

    //premium
    async function replyprem(teks) {
      replygcXlicon(
        `This feature is for premium user, contact the owner to become premium user`
      );
    }
    //script replier
    async function sendXliconBotIncMessage(chatId, message, options = {}) {
      let generate = await generateWAMessage(chatId, message, options);
      let type2 = getContentType(generate.message);
      if ("contextInfo" in options)
        generate.message[type2].contextInfo = options?.contextInfo;
      if ("contextInfo" in message)
        generate.message[type2].contextInfo = message?.contextInfo;
      return await XliconBotInc.relayMessage(chatId, generate.message, {
        messageId: generate.key.id,
      });
    }
    //reply
    async function replygcXlicon(teks) {
      if (typereply === "v1") {
        m.reply(teks);
      } else if (typereply === "v2") {
        XliconBotInc.sendMessage(
          m.chat,
          {
            contextInfo: {
              externalAdReply: {
                showAdAttribution: true,
                title: botname,
                body: ownername,
                previewType: "PHOTO",
                thumbnail: fs.readFileSync("./XploaderMedia/theme/Xploader.jpg"),
                sourceUrl: wagc,
              },
            },
            text: teks,
          },
          {
            quoted: m,
          }
        );
      } else if (typereply === "v3") {
        XliconBotInc.sendMessage(
          m.chat,
          {
            text: teks,
            contextInfo: {
              externalAdReply: {
                showAdAttribution: true,
                title: botname,
                body: ownername,
                thumbnail: fs.readFileSync("./XploaderMedia/theme/Xploader.jpg"),
                sourceUrl: websitex,
                mediaType: 1,
                renderLargerThumbnail: true,
              },
            },
          },
          { quoted: m }
        );
      }
    }
    //fake bug
    const fbug2 = {
      key: { participant: "0@s.whatsapp.net", remoteJid: "status@broadcast" },
      message: {
        groupInviteMessage: {
          groupJid: "6288213840883-1616169743@g.us",
          inviteCode: "m",
          groupName: botname,
          caption: botname,
          jpegThumbnail: tylorkid,
        },
      },
    };
    let fbug = {
      key: {
        fromMe: false,
        participant: `0@s.whatsapp.net`,
        ...(m.chat ? { remoteJid: "status@broadcast" } : {}),
      },
      message: {
        imageMessage: {
          url: "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
          mimetype: "image/jpeg",
          caption: botname,
          fileSha256: "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
          fileLength: "999999999",
          height: 999999999,
          width: 999999999,
          mediaKey: "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
          fileEncSha256: "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
          directPath:
            "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
          mediaKeyTimestamp: "1610993486",
          jpegThumbnail: await reSize(tylorkid, 100, 100),
          scansSidecar:
            "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw==",
        },
      },
    };
    //end fbug

    let fstatus = {
      key: {
        fromMe: false,
        participant: `0@s.whatsapp.net`,
        ...(m.chat ? { remoteJid: "status@broadcast" } : {}),
      },
      message: {
        imageMessage: {
          url: "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
          mimetype: "image/jpeg",
          caption: botname,
          fileSha256: "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
          fileLength: "28777",
          height: 1080,
          width: 1079,
          mediaKey: "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
          fileEncSha256: "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
          directPath:
            "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
          mediaKeyTimestamp: "1610993486",
          jpegThumbnail: await reSize(tylorkid, 100, 100),
          scansSidecar:
            "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw==",
        },
      },
    };

    //Fake quoted
    const fpay = {
      key: {
        remoteJid: "0@s.whatsapp.net",
        fromMe: false,
        id: global.botname,
        participant: "0@s.whatsapp.net",
      },
      message: {
        requestPaymentMessage: {
          currencyCodeIso4217: "USD",
          amount1000: 999999999,
          requestFrom: "0@s.whatsapp.net",
          noteMessage: { extendedTextMessage: { text: global.botname } },
          expiryTimestamp: 999999999,
          amount: { value: 91929291929, offset: 1000, currencyCode: "USD" },
        },
      },
    };
    const ftroli = {
      key: {
        fromMe: false,
        participant: "0@s.whatsapp.net",
        remoteJid: "status@broadcast",
      },
      message: {
        orderMessage: {
          itemCount: 2022,
          status: 200,
          thumbnail: tylorkid,
          surface: 200,
          message: botname,
          orderTitle: ownername,
          sellerJid: "0@s.whatsapp.net",
        },
      },
      contextInfo: { forwardingScore: 999, isForwarded: true },
      sendEphemeral: true,
    };
    const fdoc = {
      key: {
        participant: "0@s.whatsapp.net",
        ...(m.chat ? { remoteJid: `status@broadcast` } : {}),
      },
      message: { documentMessage: { title: botname, jpegThumbnail: tylorkid } },
    };
    const fvn = {
      key: {
        participant: `0@s.whatsapp.net`,
        ...(m.chat ? { remoteJid: "status@broadcast" } : {}),
      },
      message: {
        audioMessage: {
          mimetype: "audio/ogg; codecs=opus",
          seconds: 359996400,
          ptt: "true",
        },
      },
    };
    const fgif = {
      key: {
        participant: `0@s.whatsapp.net`,
        ...(m.chat ? { remoteJid: "status@broadcast" } : {}),
      },
      message: {
        videoMessage: {
          title: botname,
          h: wm,
          seconds: "359996400",
          gifPlayback: "true",
          caption: ownername,
          jpegThumbnail: tylorkid,
        },
      },
    };
    const fgclink = {
      key: { participant: "0@s.whatsapp.net", remoteJid: "0@s.whatsapp.net" },
      message: {
        groupInviteMessage: {
          groupJid: "6288213840883-1616169743@g.us",
          inviteCode: "m",
          groupName: wm,
          caption: `${pushname}`,
          jpegThumbnail: tylorkid,
        },
      },
    };
    const fvideo = {
      key: {
        fromMe: false,
        participant: `0@s.whatsapp.net`,
        ...(m.chat ? { remoteJid: "status@broadcast" } : {}),
      },
      message: {
        videoMessage: {
          title: botname,
          h: wm,
          seconds: "359996400",
          caption: `${pushname}`,
          jpegThumbnail: tylorkid,
        },
      },
    };
    const floc = {
      key: {
        participant: "0@s.whatsapp.net",
        ...(m.chat ? { remoteJid: `status@broadcast` } : {}),
      },
      message: { locationMessage: { name: wm, jpegThumbnail: tylorkid } },
    };
    const fkontak = {
      key: {
        participant: `0@s.whatsapp.net`,
        ...(m.chat ? { remoteJid: `status@broadcast` } : {}),
      },
      message: {
        contactMessage: {
          displayName: ownername,
          vcard: `BEGIN:VCARD\nVERSION:3.0\nN:XL;${ownername},;;;\nFN:${ownername}\nitem1.TEL;waid=916909137213:916909137213\nitem1.X-ABLabel:Mobile\nEND:VCARD`,
          jpegThumbnail: tylorkid,
          thumbnail: tylorkid,
          sendEphemeral: true,
        },
      },
    };
    const fakestatus = {
      key: {
        fromMe: false,
        participant: `0@s.whatsapp.net`,
        ...(m.chat ? { remoteJid: "status@broadcast" } : {}),
      },
      message: {
        imageMessage: {
          url: "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
          mimetype: "image/jpeg",
          caption: wm,
          fileSha256: "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
          fileLength: "28777",
          height: 1080,
          width: 1079,
          mediaKey: "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
          fileEncSha256: "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
          directPath:
            "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
          mediaKeyTimestamp: "1610993486",
          jpegThumbnail: fs.readFileSync("./XploaderMedia/theme/Xploader.jpg"),
          scansSidecar:
            "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw==",
        },
      },
    };
    const frpayment = {
      key: {
        remoteJid: "0@s.whatsapp.net",
        fromMe: false,
        id: `${ownername}`,
        participant: "0@s.whatsapp.net",
      },
      message: {
        requestPaymentMessage: {
          currencyCodeIso4217: "USD",
          amount1000: 999999999,
          requestFrom: "0@s.whatsapp.net",
          noteMessage: {
            extendedTextMessage: {
              text: `${botname}`,
            },
          },
          expiryTimestamp: 999999999,
          amount: {
            value: 91929291929,
            offset: 1000,
            currencyCode: "USD",
          },
        },
      },
    };
    const pickRandom = (arr) => {
      return arr[Math.floor(Math.random() * arr.length)];
    };

    //database
    try {
      let isNumber = (x) => typeof x === "number" && !isNaN(x);
      let limitUser = isPremium ? 1000 : 100;
      let user = global.db.data.users[sender];
      if (typeof user !== "object") global.db.data.users[sender] = {};
      if (user) {
        if (!isNumber(user.afkTime)) user.afkTime = -1;
        if (!("badword" in user)) user.badword = 0;
        if (!("title" in user)) user.title = "";
        if (!("serialNumber" in user))
          user.serialNumber = randomBytes(16).toString("hex");
        if (!("afkReason" in user)) user.afkReason = "";
        if (!("nick" in user)) user.nick = XliconBotInc.getName(sender);
        if (!isPremium) user.premium = false;
        if (!("totalLimit" in user)) user.totalLimit = 0;
        if (!isNumber(user.limit)) user.limit = limitUser;
      } else
        global.db.data.users[sender] = {
          serialNumber: randomBytes(16).toString("hex"),
          title: `${isPremium ? "Premium" : "User"}`,
          afkTime: -1,
          badword: 0,
          afkReason: "",
          nick: XliconBotInc.getName(sender),
          premium: `${isPremium ? "true" : "false"}`,
          limit: limitUser,
          totalLimit: 0,
        };

      let chats = global.db.data.chats[from];
      if (typeof chats !== "object") global.db.data.chats[from] = {};
      if (chats) {
        if (!("badword" in chats)) chats.badword = false;
        if (!("antiforeignnum" in chats)) chats.antiforeignnum = false;
        if (!("antibot" in chats)) chats.antibot = false;
        if (!("antiviewonce" in chats)) chats.antiviewonce = false;
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
          antiviewonce: false,
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
        if (!("totalhit" in setting)) setting.totalhit = 0;
        if (!("totalError" in setting)) setting.totalError = 0;
        if (!("online" in setting)) setting.online = false;
        if (!("autosticker" in setting)) setting.autosticker = false;
        if (!("autobio" in setting)) setting.autobio = false;
        if (!("autoread" in setting)) setting.autoread = false;
        if (!("autorecordtype" in setting)) setting.autorecordtype = false;
        if (!("autorecord" in setting)) setting.autorecord = false;
        if (!("autotype" in setting)) setting.autotype = false;
        if (!("autoblocknum" in setting)) setting.autoblocknum = false;
        if (!("onlyindia" in setting)) setting.onlyindia = false;
        if (!("onlyindo" in setting)) setting.onlyindo = false;
        if (!("onlygrub" in setting)) setting.onlygrub = false;
        if (!("onlypc" in setting)) setting.onlypc = false;
        if (!("watermark" in setting)) setting.watermark = { packname, author };
        if (!("about" in setting))
          setting.about = {
            bot: { nick: XliconBotInc.getName(botNumber), alias: botname },
            owner: {
              nick: XliconBotInc.getName(
                global.ownernumber + "@s.whatsapp.net"
              ),
              alias: global.ownernumber,
            },
          };
      } else
        global.db.data.settings[botNumber] = {
          totalhit: 0,
          totalError: 0,
          online: false,
          autosticker: false,
          autobio: false,
          autoread: false,
          autoblocknum: false,
          onlyindia: false,
          onlyindo: false,
          onlygrub: false,
          onlypc: false,
          autorecordtype: false,
          autorecord: false,
          autotype: false,
          watermark: {
            packname: global.packname,
            author: global.author,
          },
          about: {
            bot: {
              nick: XliconBotInc.getName(botNumber),
              alias: botname,
            },
            owner: {
              nick: XliconBotInc.getName(
                global.ownernumber + "@s.whatsapp.net"
              ),
              alias: global.ownernumber,
            },
          },
        };
    } catch (err) {
      console.log(err);
    }
       //Xdownloader
   async function downloadXMp3 (link) {
try {
XliconBotInc.sendMessage(m.chat, { react: { text: '⏯️', key: m.key }})
let kyuu = await fetchJson (`https://widipe.com/download/ytdl?url=${link}`)
XliconBotInc.sendMessage(m.chat, {
 audio: {url: kyuu.result.mp3}, 
 mimetype: "audio/mpeg",
 contextInfo: {
        externalAdReply: {
          title: botname,
          body: kyuu.result.title,
          thumbnailUrl: kyuu.result.image,
          sourceUrl: kyuu.result.url,
          mediaType: 2,
          showAdAttribution: true,
          renderLargerThumbnail: false
        }
      }
    }, { quoted: m });

  } catch (error) {
    console.error('Error fetching the song:', error);
    await replygcXlicon(`*Error fetching the song.* \n_Please try again later._`)
  }
}
async function downloadXMp4 (link) {
try {
XliconBotInc.sendMessage(m.chat, { react: { text: '🎬', key: m.key }})
let kyuu = await fetchJson(`https://widipe.com/download/ytdl?url=${link}`)
XliconBotInc.sendMessage(m.chat, {
 video: {url: kyuu.result.mp4},
 caption: `©𝐗𝐩𝐥𝐨𝐚𝐝𝐞𝐫𝐁𝐨𝐭` ,
 contextInfo: {
        externalAdReply: {
          title: botname,
          body: kyuu.result.title,
          thumbnailUrl: kyuu.result.image,
          sourceUrl: kyuu.result.url,
          mediaType: 2,
          showAdAttribution: true,
          renderLargerThumbnail: false
        }
      }
    }, { quoted: m });

  } catch (error) {
    console.error('Error fetching the video:', error);
    await replygcXlicon(`*Error fetching the video.* \n_Please try again later._`)
  }
}
async function downloadXMp3Doc (link) {
try {
XliconBotInc.sendMessage(m.chat, { react: { text: '⏯️', key: m.key }})
let kyuu = await fetchJson (`https://widipe.com/download/ytdl?url=${link}`)
XliconBotInc.sendMessage(m.chat, {
 document: {url: kyuu.result.mp3},
mimetype: "audio/mp3",
 fileName: `${kyuu.result.title}.mp3`,
 contextInfo: {
        externalAdReply: {
          title: botname,
          body: kyuu.result.title,
          thumbnailUrl: kyuu.result.image,
          sourceUrl: kyuu.result.url,
          mediaType: 2,
          showAdAttribution: true,
          renderLargerThumbnail: false
        }
      }
    }, { quoted: m });
  } catch (error) {
    console.error('Error fetching the song:', error);
    await replygcXlicon(`*Error fetching the song.* \n_Please try again later._`)
  }
}
async function downloadXMp4Doc (link) {
try {
XliconBotInc.sendMessage(m.chat, { react: { text: '🎬', key: m.key }})
let kyuu = await fetchJson (`https://widipe.com/download/ytdl?url=${link}`)
XliconBotInc.sendMessage(m.chat, {
 document: {url: kyuu.result.mp4},
mimetype: "video/mp4",
 fileName: `${kyuu.result.title}.mp4`,
 contextInfo: {
        externalAdReply: {
          title: botname,
          body: kyuu.result.title,
          thumbnailUrl: kyuu.result.image,
          sourceUrl: kyuu.result.url,
          mediaType: 2,
          showAdAttribution: true,
          renderLargerThumbnail: false
        }
      }
    }, { quoted: m });
  } catch (error) {
    console.error('Error fetching the video:', error);
    await replygcXlicon(`*Error fetching the video.* \n_Please try again later._`)
  }
}
//photo uploader
    async function uploadtoimgur(imagepath) {
      try {
        const response = await client.upload({
          image: fs.createReadStream(imagepath),
          type: "stream",
        });

        let url = response.data.link;
        console.log(url);
        return url;
      } catch (error) {
        console.error("Error uploading image to Imgur:", error);
        throw error;
      }
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
    //bug loading
    async function loading() {
      var xeonlod = [
        "```▓▒░(𝗟𝗢𝗔𝗗𝗜𝗡𝗚)░▒▓```",
        "```■□□□□□□□□□ 10%```",
        "```■■□□□□□□□□ 20%```",
        "```■■■□□□□□□□ 30%```",
        "```■■■■□□□□□□ 40%```",
        "```■■■■■□□□□□ 50%```",
        "```■■■■■■□□□□ 60%```",
        "```■■■■■■■□□□ 70%```",
        "```■■■■■■■■□□ 80%```",
        "```■■■■■■■■■□ 90%```",
        "```■■■■■■■■■■ 100%```",
        "```𝙍𝙀𝘾𝙊𝘿𝙀 𝘽𝙔 𝙏𝙔𝙇𝙊𝙍```🐦",
        "```▓▒░(𝗫𝗣𝗟𝗢𝗔𝗗𝗘𝗥 𝗕𝗢𝗧)░▒▓```",
      ];
      let { key } = await XliconBotInc.sendMessage(from, {
        text: "ʟᴏᴀᴅɪɴɢ...",
      });

      for (let i = 0; i < xeonlod.length; i++) {
        await XliconBotInc.sendMessage(from, { text: xeonlod[i], edit: key });
      }
    }

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
    //random number
    function getRandomNumber(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    async function styletext(teks) {
      return new Promise((resolve, reject) => {
        axios
          .get("http://qaz.wtf/u/convert.cgi?text=" + teks)
          .then(({ data }) => {
            let $ = cheerio.load(data);
            let hasil = [];
            $("table > tbody > tr").each(function (a, b) {
              hasil.push({
                name: $(b).find("td:nth-child(1) > span").text(),
                result: $(b).find("td:nth-child(2)").text().trim(),
              });
            });
            resolve(hasil);
          });
      });
    }

    async function Telesticker(url) {
      return new Promise(async (resolve, reject) => {
        if (!url.match(/(https:\/\/t.me\/addstickers\/)/gi))
          return replygcXlicon("*_Enter your telegram sticker link_*");
        packName = url.replace("https://t.me/addstickers/", "");
        data = await axios(
          `https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getStickerSet?name=${encodeURIComponent(
            packName
          )}`,
          { method: "GET", headers: { "User-Agent": "GoogleBot" } }
        );
        const xeonyresult = [];
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
          xeonyresult.push(result);
        }
        resolve(xeonyresult);
      });
    }

    //limit func
    async function useLimit(senuseLimitder, amount) {
      db.data.users[sender].limit -= amount;
      db.data.users[sender].totalLimit += amount;
      replygcXlicon(
        `*_You have used up: ${amount} limit_*\n*_Remaining: ${db.data.users[sender].limit} limit_*`
      );
    }
    async function resetLimit() {
      let users = Object.keys(global.db.data.users);
      let Limitxeon = isPremium ? limit.prem : limit.free;
      for (let i of users) {
        db.data.users[i].limit = Limitxeon;
      }
      XliconBotInc.sendText("120363167338947238@g.us", { text: `Reset Limit` });
    }
    // Grup Only
    if (!m.isGroup && !XeonTheCreator && db.data.settings[botNumber].onlygrub) {
      if (isCommand) {
        return replygcXlicon(
          `*_Hello buddy! Because We Want to Reduce Spam, Please Use Bot in the Group Chat !_*\n\n*_If you have issue please chat owner wa.me/${ownernumber}_*`
        );
      }
    }
    // Private Only
    if (!XeonTheCreator && db.data.settings[botNumber].onlypc && m.isGroup) {
      if (isCommand) {
        return replygcXlicon(
          "*_Hello buddy! if you want to use this bot, please chat the bot in private chat_*"
        );
      }
    }

    if (!XliconBotInc.public) {
      if (XeonTheCreator && !m.key.fromMe) return;
    }
    if (db.data.settings[botNumber].online) {
      if (isCommand) {
        XliconBotInc.sendPresenceUpdate("unavailable", from);
      }
    }
    if (db.data.settings[botNumber].autoread) {
      XliconBotInc.readMessages([m.key]);
    }
    //auto set bio\\
    if (db.data.settings[botNumber].autobio) {
      XliconBotInc.updateProfileStatus(
        `𝐀𝐥𝐥 𝐡𝐚𝐢𝐥 𝐭𝐨 ${botname} 𝐛𝐨𝐭, 𝐚𝐜𝐭𝐢𝐯𝐞 𝐟𝐨𝐫 ${runtime(
          process.uptime()
        )}`
      ).catch((_) => _);
    }
    //auto type record
    if (db.data.settings[botNumber].autorecordtype) {
      if (isCommand) {
        let xeonmix = ["composing", "recording"];
        xeonmix2 = xeonmix[Math.floor(xeonmix.length * Math.random())];
        XliconBotInc.sendPresenceUpdate(xeonmix2, from);
      }
    }
    if (db.data.settings[botNumber].autorecord) {
      if (isCommand) {
        let xeonmix = ["recording"];
        xeonmix2 = xeonmix[Math.floor(xeonmix.length * Math.random())];
        XliconBotInc.sendPresenceUpdate(xeonmix2, from);
      }
    }
    if (db.data.settings[botNumber].autotype) {
      if (isCommand) {
        let xeonpos = ["composing"];
        XliconBotInc.sendPresenceUpdate(xeonpos, from);
      }
    }

    //auto block number
    if (
      m.sender.startsWith(`${autoblocknumber}`) &&
      db.data.settings[botNumber].autoblocknum === true
    ) {
      return XliconBotInc.updateBlockStatus(m.sender, "block");
    }
    if (
      !m.sender.startsWith("91") &&
      db.data.settings[botNumber].onlyindia === true
    ) {
      return XliconBotInc.updateBlockStatus(m.sender, "block");
    }
    if (
      !m.sender.startsWith("62") &&
      db.data.settings[botNumber].onlyindo === true
    ) {
      return XliconBotInc.updateBlockStatus(m.sender, "block");
    }
    if (
      !m.sender.startsWith(`${antiforeignnumber}`) &&
      db.data.chats[m.chat].antiforeignnum === true
    ) {
      if (XeonTheCreator || isAdmins || !isBotAdmins) return;
      XliconBotInc.sendMessage(
        m.chat,
        {
          text: `*_Sorry buddy! you will be removed because the group admin/owner has enabled anti foreign number, only +${antiforeignnumber} country code is allowed to join the group_*`,
        },
        { quoted: m }
      );
      await sleep(2000);
      await XliconBotInc.groupParticipantsUpdate(m.chat, [m.sender], "remove");
    }
    let list = [];
    for (let i of owner) {
      list.push({
        displayName: await XliconBotInc.getName(i),
        vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await XliconBotInc.getName(
          i
        )}\nFN:${await XliconBotInc.getName(
          i
        )}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Click here to chat\nitem2.EMAIL;type=INTERNET:${ytname}\nitem2.X-ABLabel:YouTube\nitem3.URL:${socialm}\nitem3.X-ABLabel:GitHub\nitem4.ADR:;;${location};;;;\nitem4.X-ABLabel:Region\nEND:VCARD`,
      });
    }
    //console log
    if (isCommand) {
      console.log(
        color(
          `\n< ================================================== >\n`,
          "cyan"
        )
      );
      console.log(
        chalk.black(chalk.bgWhite(!isCommand ? "[ MESSAGE ]" : "[ COMMAND ]")),
        chalk.black(chalk.bgGreen(new Date())),
        chalk.black(chalk.bgBlue(budy || m.mtype)) +
          "\n" +
          chalk.magenta("=> From"),
        chalk.green(pushname),
        chalk.yellow(m.sender) + "\n" + chalk.blueBright("=> In"),
        chalk.green(m.isGroup ? pushname : "Private Chat", m.chat)
      );
      global.db.data.settings[botNumber].totalhit += 1;
    }

    //antiviewonce
    if (
      db.data.chats[m.chat].antiviewonce &&
      m.isGroup &&
      m.mtype == "viewOnceMessageV2"
    ) {
      let val = { ...m };
      let msg =
        val.message?.viewOnceMessage?.message ||
        val.message?.viewOnceMessageV2?.message;
      delete msg[Object.keys(msg)[0]].viewOnce;
      val.message = msg;
      await XliconBotInc.sendMessage(m.chat, { forward: val }, { quoted: m });
    }
    //ANTI VIRUS
    if (isGroup && db.data.chats[m.chat].antivirtex) {
      if (
        budy.includes("๒๒๒๒") ||
        budy.includes("ดุ") ||
        budy.includes("ผิดุท้เึางืผิดุท้เึางื") ||
        budy.includes("๑๑๑๑๑๑๑๑") ||
        budy.includes("৭৭৭৭৭৭৭৭") ||
        budy.includes("   ⃢   ⃢   ⃢  ") ||
        budy.includes(
          "*⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃟ᡃ⃟ᡃ⃟ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃟ᡃ⃟ᡃ⃟ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃟ᡃ⃟ᡃ⃟ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟"
        ) ||
        budy.includes("ผดิทุเ้ึางผืดิทุเ้") ||
        budy.includes(".*࡞ࣰࣰࣰࣲࣲࣲࣲࣩࣩࣩࣩࣶࣶ࣯࣯࣮࣮ࣦ࣯ࣨࣨࣨࣻࣻࣻࣼࣼࣼࣽࣽࣾࣷࣵࣴ࣬࣬࣬ࣤࣤࣧࣧ*") ||
        budy.includes("᥋") ||
        budy.includes("؁") ||
        budy.includes("ٯٯٯٯٯ")
      ) {
        if (isGroupAdmins) return replygcXlicon("*VIRTEX DETECTED*");
        console.log(
          color("[KICK]", "red"),
          color("Received a virus text!", "yellow")
        );
        XliconBotInc.sendText(
          m.chat,
          `*MARK AS READ*\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n *Virus sender here👇:* \nwa.me/${
            sender.split("@")[0]
          }`
        );
        if (!isBotAdmins) return;
        if (XeonTheCreator) return;
        XliconBotInc.groupParticipantsUpdate(from, [sender], "remove");
        await XliconBotInc.sendMessage(from, {
          delete: {
            remoteJid: m.chat,
            fromMe: false,
            id: m.key.id,
            participant: m.key.participant,
          },
        });
        XliconBotInc.sendMessage(`${ownernumber}@s.whatsapp.net`, {
          text: `Hi Owner! wa.me/${
            sender.split("@")[0]
          } Detected Having Sent Virtex ${isGroup ? `in ${groupName}` : ""}`,
        });
      }
    }

    if (db.data.chats[m.chat].antibot) {
      if (m.isBaileys && m.fromMe == false) {
        if (isAdmin || !isBotAdmin) {
        } else {
          replygcXlicon(
            `*Another Bot Detected*\n\nHusshhh Get away from this group!!!`
          );
          return await XliconBotInc.groupParticipantsUpdate(
            m.chat,
            [m.sender],
            "remove"
          );
        }
      }
    }

    //anti media
    if (db.data.chats[m.chat].antimedia && isMedia) {
      if (XeonTheCreator || isAdmins || !isBotAdmins) {
      } else {
        replygcXlicon(
          `\`\`\`「 Media Detected 」\`\`\`\n\n*_Sorry, but I have to delete it, because the admin/owner has activated anti-media for this group_*`
        );
        return XliconBotInc.sendMessage(m.chat, {
          delete: {
            remoteJid: m.chat,
            fromMe: false,
            id: m.key.id,
            participant: m.key.participant,
          },
        });
      }
    }
    if (db.data.chats[m.chat].image && isXploaderMedia) {
      if (isXploaderMedia === "imageMessage") {
        if (XeonTheCreator || isAdmins || !isBotAdmins) {
        } else {
          replygcXlicon(
            `\`\`\`「 Image Detected 」\`\`\`\n\n*_Sorry, but I have to delete it, because the admin/owner has activated anti-image for this group_*`
          );
          return XliconBotInc.sendMessage(m.chat, {
            delete: {
              remoteJid: m.chat,
              fromMe: false,
              id: m.key.id,
              participant: m.key.participant,
            },
          });
        }
      }
    }
    if (db.data.chats[m.chat].antivideo && isXploaderMedia) {
      if (isXploaderMedia === "videoMessage") {
        if (XeonTheCreator || isAdmins || !isBotAdmins) {
        } else {
          replygcXlicon(
            `\`\`\`「 Video Detected 」\`\`\`\n\n*_Sorry, but I have to delete it, because the admin/owner has activated anti-video for this group_*`
          );
          return XliconBotInc.sendMessage(m.chat, {
            delete: {
              remoteJid: m.chat,
              fromMe: false,
              id: m.key.id,
              participant: m.key.participant,
            },
          });
        }
      }
    }
    if (db.data.chats[m.chat].antisticker && isXploaderMedia) {
      if (isXploaderMedia === "stickerMessage") {
        if (XeonTheCreator || isAdmins || !isBotAdmins) {
        } else {
          replygcXlicon(
            `\`\`\`「 Sticker Detected 」\`\`\`\n\n*_Sorry, but I have to delete it, because the admin/owner has activated anti-sticker for this group_*`
          );
          return XliconBotInc.sendMessage(m.chat, {
            delete: {
              remoteJid: m.chat,
              fromMe: false,
              id: m.key.id,
              participant: m.key.participant,
            },
          });
        }
      }
    }
    if (db.data.chats[m.chat].antiaudio && isXploaderMedia) {
      if (isXploaderMedia === "audioMessage") {
        if (XeonTheCreator || isAdmins || !isBotAdmins) {
        } else {
          replygcXlicon(
            `\`\`\`「 Audio Detected 」\`\`\`\n\n*_Sorry, but I have to delete it, because the admin/owner has activated anti-audio for this group_*`
          );
          return XliconBotInc.sendMessage(m.chat, {
            delete: {
              remoteJid: m.chat,
              fromMe: false,
              id: m.key.id,
              participant: m.key.participant,
            },
          });
        }
      }
    }
    if (db.data.chats[m.chat].antipoll && isXploaderMedia) {
      if (isXploaderMedia === "pollCreationMessage") {
        if (XeonTheCreator || isAdmins || !isBotAdmins) {
        } else {
          replygcXlicon(
            `\`\`\`「 Poll Detected 」\`\`\`\n\n*_Sorry, but I have to delete it, because the admin/owner has activated anti-poll for this group_*`
          );
          return XliconBotInc.sendMessage(m.chat, {
            delete: {
              remoteJid: m.chat,
              fromMe: false,
              id: m.key.id,
              participant: m.key.participant,
            },
          });
        }
      }
    }
    if (db.data.chats[m.chat].antilocation && isXploaderMedia) {
      if (isXploaderMedia === "locationMessage") {
        if (XeonTheCreator || isAdmins || !isBotAdmins) {
        } else {
          replygcXlicon(
            `\`\`\`「 Location Detected 」\`\`\`\n\n*_Sorry, but I have to delete it, because the admin/owner has activated anti-location for this group_*`
          );
          return XliconBotInc.sendMessage(m.chat, {
            delete: {
              remoteJid: m.chat,
              fromMe: false,
              id: m.key.id,
              participant: m.key.participant,
            },
          });
        }
      }
    }
    if (db.data.chats[m.chat].antidocument && isXploaderMedia) {
      if (isXploaderMedia === "documentMessage") {
        if (XeonTheCreator || isAdmins || !isBotAdmins) {
        } else {
          replygcXlicon(
            `\`\`\`「 Document Detected 」\`\`\`\n\n*_Sorry, but I have to delete it, because the admin/owner has activated anti-document for this group_*`
          );
          return XliconBotInc.sendMessage(m.chat, {
            delete: {
              remoteJid: m.chat,
              fromMe: false,
              id: m.key.id,
              participant: m.key.participant,
            },
          });
        }
      }
    }
    if (db.data.chats[m.chat].anticontact && isXploaderMedia) {
      if (isXploaderMedia === "contactMessage") {
        if (XeonTheCreator || isAdmins || !isBotAdmins) {
        } else {
          replygcXlicon(
            `\`\`\`「 Contact Detected 」\`\`\`\n\n*_Sorry, but I have to delete it, because the admin/owner has activated anti-contact for this group_*`
          );
          return XliconBotInc.sendMessage(m.chat, {
            delete: {
              remoteJid: m.chat,
              fromMe: false,
              id: m.key.id,
              participant: m.key.participant,
            },
          });
        }
      }
    }
    //respond
    if (db.data.chats[m.chat].badword) {
      for (let bak of bad) {
        if (budy === bak) {
          let baduser = await db.data.users[sender].badword;
          XliconBotInc.sendMessage(m.chat, {
            delete: {
              remoteJid: m.chat,
              fromMe: false,
              id: m.key.id,
              participant: m.key.participant,
            },
          });
          XliconBotInc.sendMessage(
            from,
            {
              text: `\`\`\`「 Bad Word Detected 」\`\`\`\n\n@${
                m.sender.split("@")[0]
              } *_was using harsh words and his chat has been deleted_*`,
              contextInfo: { mentionedJid: [m.sender] },
            },
            { quoted: m }
          );
        }
      }
    }
    //autosticker
    if (db.data.settings[botNumber].autosticker) {
      if (m.key.fromMe) return;
      if (/image/.test(mime) && !/webp/.test(mime)) {
        let mediac = await quoted.download();
        XliconBotInc.sendImageAsSticker(from, mediac, m, {
          packname: global.packname,
          author: global.author,
        });
        console.log(`Auto sticker detected`);
      } else if (/video/.test(mime)) {
        if ((quoted.msg || quoted).seconds > 11) return;
        let mediac = await quoted.download();
        XliconBotInc.sendVideoAsSticker(from, mediac, m, {
          packname: global.packname,
          author: global.author,
        });
      }
    }

    if (db.data.chats[m.chat].antilinkgc) {
      if (budy.match(`chat.whatsapp.com`)) {
        bvl = `\`\`\`「GROUP LINK DETECTED」\`\`\`\n\n*Admin ${pushname} has sent a group link, admin is free to send any link😇*`;
        if (isAdmins) return replygcXlicon(bvl);
        if (m.key.fromMe) return replygcXlicon(bvl);
        if (XeonTheCreator) return replygcXlicon(bvl);
        await XliconBotInc.sendMessage(m.chat, {
          delete: {
            remoteJid: m.chat,
            fromMe: false,
            id: m.key.id,
            participant: m.key.participant,
          },
        });
        XliconBotInc.sendMessage(
          from,
          {
            text: `\`\`\`「GROUP LINK DETECTED」\`\`\`\n\n@${
              m.sender.split("@")[0]
            } *Beware, links are not allowed in this group!*`,
            contextInfo: { mentionedJid: [m.sender] },
          },
          { quoted: m }
        );
      }
    }
    if (db.data.chats[m.chat].antilink) {
      if (budy.match("http") && budy.match("https")) {
        bvl = `\`\`\`「LINK DETECTED」\`\`\`\n\n*Admin ${pushname} has sent a link, admin is free to send any link😇*`;
        if (isAdmins) return replygcXlicon(bvl);
        if (m.key.fromMe) return replygcXlicon(bvl);
        if (XeonTheCreator) return replygcXlicon(bvl);
        await XliconBotInc.sendMessage(m.chat, {
          delete: {
            remoteJid: m.chat,
            fromMe: false,
            id: m.key.id,
            participant: m.key.participant,
          },
        });
        XliconBotInc.sendMessage(
          from,
          {
            text: `\`\`\`「LINK DETECTED」\`\`\`\n\n@${
              m.sender.split("@")[0]
            } *Beware, links are not allowed in this group!*`,
            contextInfo: { mentionedJid: [m.sender] },
          },
          { quoted: m }
        );
      }
    }
    //afk
    let mentionUser = [
      ...new Set([
        ...(m.mentionedJid || []),
        ...(m.quoted ? [m.quoted.sender] : []),
      ]),
    ];
    for (let jid of mentionUser) {
      let user = db.data.users[jid];
      if (!user) continue;
      let afkTime = user.afkTime;
      let nick = user.nick;
      if (!afkTime || afkTime < 0) continue;
      let afkDuration = formatAfkDuration(new Date() - user.afkTime);
      let reason = user.afkReason || "";
      replygcXlicon(
        `Don't Mention.. *${nick}* is currently AFK ${
          reason ? "for: " + reason : reason
        }\nAFK Since \`${afkDuration}\``
      );
    }
    if (db.data.users[m.sender].afkTime > -1) {
      let user = global.db.data.users[m.sender];
      let afkDuration = formatAfkDuration(new Date() - user.afkTime);

      replygcXlicon(`Welcome back...\nYou were away for: \`${afkDuration}\``);

      user.afkTime = -1;
      user.afkReason = "";
    }
 //total features
    const Xliconfeature = () => {
      var mytext = fs.readFileSync("./Xploader.js").toString();
      var numUpper = (mytext.match(/case "/g) || []).length;
      return numUpper;
    };
        //autoreply
    for (let BhosdikaXeon of VoiceNoteXeon) {
      if (budy === BhosdikaXeon) {
        let audiobuffy = fs.readFileSync(
          `./XploaderMedia/audio/${BhosdikaXeon}.mp3`
        );
        XliconBotInc.sendMessage(
          m.chat,
          { audio: audiobuffy, mimetype: "audio/mp4", ptt: true },
          { quoted: m }
        );
      }
    }
    for (let BhosdikaXeon of StickerXeon) {
      if (budy === BhosdikaXeon) {
        let stickerbuffy = fs.readFileSync(
          `./XploaderMedia/sticker/${BhosdikaXeon}.webp`
        );
        XliconBotInc.sendMessage(
          m.chat,
          { sticker: stickerbuffy },
          { quoted: m }
        );
      }
    }
    for (let BhosdikaXeon of ImageXeon) {
      if (budy === BhosdikaXeon) {
        let imagebuffy = fs.readFileSync(
          `./XploaderMedia/image/${BhosdikaXeon}.jpg`
        );
        XliconBotInc.sendMessage(m.chat, { image: imagebuffy }, { quoted: m });
      }
    }
    for (let BhosdikaXeon of VideoXeon) {
      if (budy === BhosdikaXeon) {
        let videobuffy = fs.readFileSync(
          `./XploaderMedia/video/${BhosdikaXeon}.mp4`
        );
        XliconBotInc.sendMessage(m.chat, { video: videobuffy }, { quoted: m });
      }
    }

    const sendapk = (teks) => {
      XliconBotInc.sendMessage(
        from,
        { document: teks, mimetype: "application/vnd.android.package-archive" },
        { quoted: m }
      );
    };
    for (let BhosdikaXeon of ApkXeon) {
      if (budy === BhosdikaXeon) {
        let buffer = fs.readFileSync(`./XploaderMedia/apk/${BhosdikaXeon}.apk`);
        sendapk(buffer);
      }
    }

    const sendzip = (teks) => {
      XliconBotInc.sendMessage(
        from,
        { document: teks, mimetype: "application/zip" },
        { quoted: m }
      );
    };
    for (let BhosdikaXeon of ZipXeon) {
      if (budy === BhosdikaXeon) {
        let buffer = fs.readFileSync(`./XploaderMedia/zip/${BhosdikaXeon}.zip`);
        sendzip(buffer);
      }
    }

    const senddocu = (teks) => {
      XliconBotInc.sendMessage(
        from,
        { document: teks, mimetype: "application/pdf" },
        { quoted: m }
      );
    };
    for (let BhosdikaXeon of DocXeon) {
      if (budy === BhosdikaXeon) {
        let buffer = fs.readFileSync(`./XploaderMedia/doc/${BhosdikaXeon}.pdf`);
        senddocu(buffer);
      }
    }

    // Respon Cmd with media
    if (
      isMedia &&
      m.msg.fileSha256 &&
      m.msg.fileSha256.toString("base64") in global.db.data.sticker
    ) {
      let hash = global.db.data.sticker[m.msg.fileSha256.toString("base64")];
      let { text, mentionedJid } = hash;
      let messages = await generateWAMessage(
        m.chat,
        { text: text, mentions: mentionedJid },
        {
          userJid: XliconBotInc.user.id,
          quoted: m.quoted && m.quoted.fakeObj,
        }
      );
      messages.key.fromMe = areJidsSameUser(m.sender, XliconBotInc.user.id);
      messages.key.id = m.key.id;
      messages.pushName = m.pushName;
      if (m.isGroup) messages.participant = m.sender;
      let msg = {
        ...chatUpdate,
        messages: [proto.WebMessageInfo.fromObject(messages)],
        type: "append",
      };
      XliconBotInc.ev.emit("messages.upsert", msg);
    }
//math
    if (kuismath.hasOwnProperty(m.sender.split("@")[0]) && isCmd2) {
      if (m.key.fromMe) return;
      kuis = true;
      jawaban = kuismath[m.sender.split("@")[0]];
      if (budy.toLowerCase() == jawaban) {
        await replygcXlicon(
          `*_🎮 Math Quiz 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Send ${prefix}math mode_*`
        );
        delete kuismath[m.sender.split("@")[0]];
      } else replygcXlicon("*Wrong Answer!*");
    }

    //game
    this.game = this.game ? this.game : {};
    let room = Object.values(this.game).find(
      (room) =>
        room.id &&
        room.game &&
        room.state &&
        room.id.startsWith("tictactoe") &&
        [room.game.playerX, room.game.playerO].includes(m.sender) &&
        room.state == "PLAYING"
    );
    if (room) {
      let ok;
      let isWin = !1;
      let isTie = !1;
      let isSurrender = !1;
      // replygcXlicon(`[DEBUG]\n${parseInt(m.text)}`)
      if (!/^([1-9]|(me)?giveup|surr?ender|off|skip)$/i.test(m.text)) return;
      isSurrender = !/^[1-9]$/.test(m.text);
      if (m.sender !== room.game.currentTurn) {
        if (!isSurrender) return !0;
      }
      if (
        !isSurrender &&
        1 >
          (ok = room.game.turn(
            m.sender === room.game.playerO,
            parseInt(m.text) - 1
          ))
      ) {
        replygcXlicon(
          {
            "-3": "The game is over",
            "-2": "Invalid",
            "-1": "Invalid Position",
            0: "Invalid Position",
          }[ok]
        );
        return !0;
      }
      if (m.sender === room.game.winner) isWin = true;
      else if (room.game.board === 511) isTie = true;
      let arr = room.game.render().map((v) => {
        return {
          X: "❌",
          O: "⭕",
          1: "1️⃣",
          2: "2️⃣",
          3: "3️⃣",
          4: "4️⃣",
          5: "5️⃣",
          6: "6️⃣",
          7: "7️⃣",
          8: "8️⃣",
          9: "9️⃣",
        }[v];
      });
      if (isSurrender) {
        room.game._currentTurn = m.sender === room.game.playerX;
        isWin = true;
      }
      let winner = isSurrender ? room.game.currentTurn : room.game.winner;
      let str = `Room ID: ${room.id}

${arr.slice(0, 3).join("")}
${arr.slice(3, 6).join("")}
${arr.slice(6).join("")}

${
  isWin
    ? `@${winner.split("@")[0]} Won!`
    : isTie
    ? `Game over`
    : `Turn ${["❌", "⭕"][1 * room.game._currentTurn]} (@${
        room.game.currentTurn.split("@")[0]
      })`
}
❌: @${room.game.playerX.split("@")[0]}
⭕: @${room.game.playerO.split("@")[0]}

Type *surrender* to surrender and admit defeat`;
      if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
        room[room.game._currentTurn ^ isSurrender ? "x" : "o"] = m.chat;
      if (room.x !== room.o)
        XliconBotInc.sendText(room.x, str, m, {
          mentions: parseMention(str),
        });
      XliconBotInc.sendText(room.o, str, m, {
        mentions: parseMention(str),
      });
      if (isTie || isWin) {
        delete this.game[room.id];
      }
    }

    //RPS
    this.suit = this.suit ? this.suit : {};
    let roof = Object.values(this.suit).find(
      (roof) => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender)
    );
    if (roof) {
      let win = "";
      let tie = false;
      if (
        m.sender == roof.p2 &&
        /^(acc(ept)?|accept|yes|okay?|reject|no|later|nop(e.)?yes|y)/i.test(
          m.text
        ) &&
        m.isGroup &&
        roof.status == "wait"
      ) {
        if (/^(reject|no|later|n|nop(e.)?yes)/i.test(m.text)) {
          XliconBotInc.sendTextWithMentions(
            m.chat,
            `@${roof.p2.split`@`[0]} rejected the challange, what a loser.`,
            m
          );
          delete this.suit[roof.id];
          return !0;
        }
        roof.status = "play";
        roof.asal = m.chat;
        clearTimeout(roof.waktu);
        //delete roof[roof.id].waktu
        XliconBotInc.sendText(
          m.chat,
          `Game has been sent in DMs

@${roof.p.split`@`[0]} and 
@${roof.p2.split`@`[0]}

Please choose an option in the respective chat"
click https://wa.me/${botNumber.split`@`[0]}`,
          m,
          { mentions: [roof.p, roof.p2] }
        );
        if (!roof.pilih)
          XliconBotInc.sendText(
            roof.p,
            `Please Select \n\Rock🗿\nPaper📄\nScissors✂️`,
            m
          );
        if (!roof.pilih2)
          XliconBotInc.sendText(
            roof.p2,
            `Please Select \n\nRock🗿\nPaper📄\nScissors✂️`,
            m
          );
        roof.waktu_milih = setTimeout(() => {
          if (!roof.pilih && !roof.pilih2)
            XliconBotInc.sendText(
              m.chat,
              `Both Players Don't Want To Play,\nGame Canceled`
            );
          else if (!roof.pilih || !roof.pilih2) {
            win = !roof.pilih ? roof.p2 : roof.p;
            XliconBotInc.sendTextWithMentions(
              m.chat,
              `@${
                (roof.pilih ? roof.p2 : roof.p).split`@`[0]
              } Didn't Choose an Option, Game Over!`,
              m
            );
          }
          delete this.suit[roof.id];
          return !0;
        }, roof.timeout);
      }
      let jwb = m.sender == roof.p;
      let jwb2 = m.sender == roof.p2;
      let g = /scissors/i;
      let b = /rock/i;
      let k = /paper/i;
      let reg = /^(scissors|rock|paper)/i;
      if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
        roof.pilih = reg.exec(m.text.toLowerCase())[0];
        roof.text = m.text;
        replygcXlicon(
          `_You have chosen_ ${m.text} ${
            !roof.pilih2 ? `\n\n*_Waiting for the opponent to choose_*` : ""
          }`
        );
        if (!roof.pilih2)
          XliconBotInc.sendText(
            roof.p2,
            "_The opponent has chosen_\nNow it is your turn",
            0
          );
      }
      if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
        roof.pilih2 = reg.exec(m.text.toLowerCase())[0];
        roof.text2 = m.text;
        replygcXlicon(
          `_You have chosen_ ${m.text} ${
            !roof.pilih ? `\n\n*_Waiting for the opponent to choose_*` : ""
          }`
        );
        if (!roof.pilih)
          XliconBotInc.sendText(
            roof.p,
            "_The opponent has chosen_\nNow it is your turn",
            0
          );
      }
      let stage = roof.pilih;
      let stage2 = roof.pilih2;
      if (roof.pilih && roof.pilih2) {
        clearTimeout(roof.waktu_milih);
        if (b.test(stage) && g.test(stage2)) win = roof.p;
        else if (b.test(stage) && k.test(stage2)) win = roof.p2;
        else if (g.test(stage) && k.test(stage2)) win = roof.p;
        else if (g.test(stage) && b.test(stage2)) win = roof.p2;
        else if (k.test(stage) && b.test(stage2)) win = roof.p;
        else if (k.test(stage) && g.test(stage2)) win = roof.p2;
        else if (stage == stage2) tie = true;
        XliconBotInc.sendText(
          roof.asal,
          `_*Game Result*_${tie ? "\nTIE" : ""}

@${roof.p.split`@`[0]} (${roof.text}) ${
            tie ? "" : roof.p == win ? ` Win \n` : ` Lost \n`
          }
@${roof.p2.split`@`[0]} (${roof.text2}) ${
            tie ? "" : roof.p2 == win ? ` Win \n` : ` Lost  \n`
          }
`.trim(),
          m,
          { mentions: [roof.p, roof.p2] }
        );
        delete this.suit[roof.id];
      }
    } //end
    //user db
    if (isCommand && !isUser) {
      xeonverifieduser.push(sender);
      fs.writeFileSync(
        "./src/data/role/user.json",
        JSON.stringify(xeonverifieduser, null, 2)
      );
    }

    switch (isCommand) {
//=====OWNER MENU CMDS===========================//   
        case "ping":
        case "p":
        {
          const used = process.memoryUsage();
         const quotexeony = await axios.get(`https://favqs.com/api/qotd`);
          const cpus = os.cpus().map((cpu) => {
            cpu.total = Object.keys(cpu.times).reduce(
              (last, type) => last + cpu.times[type],
              0
            );
            return cpu;
          });
          const cpu = cpus.reduce(
            (last, cpu, _, { length }) => {
              last.total += cpu.total;
              last.speed += cpu.speed / length;
              last.times.user += cpu.times.user;
              last.times.nice += cpu.times.nice;
              last.times.sys += cpu.times.sys;
              last.times.idle += cpu.times.idle;
              last.times.irq += cpu.times.irq;
              return last;
            },
            {
              speed: 0,
              total: 0,
              times: {
                user: 0,
                nice: 0,
                sys: 0,
                idle: 0,
                irq: 0,
              },
            }
          );
          let timestamp = speed();
          let latensi = speed() - timestamp;
          neww = performance.now();
          oldd = performance.now();
          let latencySeconds = latensi.toFixed(4);
          let latencyMs = oldd - neww;
          let totalLatencyMs = Math.round(latencySeconds * 1000 + latencyMs);
          let finalStatus =
            `*Quote of the day:*\n\n_${quotexeony.data.quote.body}_ \n\n> ©𝐗𝐩𝐥𝐨𝐚𝐝𝐞𝐫𝐁𝐨𝐭 `.trim();
await XliconBotInc.sendMessage(m.chat, {
                    text: finalStatus, 
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: `𝗦𝗣𝗘𝗘𝗗: ${totalLatencyMs} 𝐦𝐬`, 
                            body: `𝗨𝗣𝗧𝗜𝗠𝗘: ${runtime( process.uptime())}`,
                            thumbnail: tylorkid,
                            sourceUrl: `https://www.instagram.com/heyits_tylor?igsh=YzljYTk1ODg3Zg==`,
                            mediaType: 1,
                            renderLargerThumbnail: false
                        }
                    }
                }, {
                    quoted: m
                })
            }
        break;   
//=================================================//   
      case "menu":
        {
          let ownernya = ownernumber + "@s.whatsapp.net";
          let timestampe = speed();
          let latensie = speed() - timestampe;
          let a = db.data.users[sender];
          let me = m.sender;
          let xmenu_ic = `
┌───❍「 𝗫𝗣𝗟𝗢𝗔𝗗𝗘𝗥 」❍
┃ *ᴏᴡɴᴇʀ* :  ${ownername}
┃ *ᴘʀᴇғɪx* :  [ ${prefix} ]
┃ *ʜᴏsᴛ* : ${os.platform()}
┃ *ᴘʟᴜɢɪɴs* : 501
┃ *ᴍᴏᴅᴇ* : ${XliconBotInc.public ? "Public" : `Private`}
┃ *ᴠᴇʀsɪᴏɴ* : 2.0.0
┃ *sᴘᴇᴇᴅ* :  ${latensie.toFixed(4)} ms
┃ *ʟɪʙʀᴀʀʏ*  : WS-Baileys
┃ *ᴛʏᴘᴇ sᴄʀɪᴘᴛ* : Node.js
┃ *ʙᴏᴛ ɴᴀᴍᴇ* : Xploader V2
┃ *ʀᴀᴍ* :  ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}
╰─┬────❍┈ ▱╼❲✯❳${readmore}
┌────❖ 𝗠𝗘𝗡𝗨 ❖───┈ ⳹
│❂ ${prefix}allmenu
│❂ ${prefix}downloadmenu
│❂ ${prefix}funmenu
│❂ ${prefix}aimenu
│❂ ${prefix}groupmenu
│❂ ${prefix}ownermenu
│❂ ${prefix}animemenu
│❂ ${prefix}ephoto360menu
│❂  ${prefix}stalkermenu
│❂ ${prefix}othermenu
│❂ ${prefix}makermenu
│❂ ${prefix}reactionmenu
│❂ ${prefix}nsfwmenu
╰─┬────❍┈ ▱╼❲✯❳
 └─────────┈ ▱╼❲✯❳`;
          let xmenu_oh = `
┌───❍「 𝗫𝗣𝗟𝗢𝗔𝗗𝗘𝗥 」❍
┃ *ᴏᴡɴᴇʀ* :  ${ownername}
┃ *ᴘʀᴇғɪx* :  [ ${prefix} ]
┃ *ʜᴏsᴛ* : ${os.platform()}
┃ *ᴘʟᴜɢɪɴs* : 501
┃ *ᴍᴏᴅᴇ* : ${XliconBotInc.public ? "Public" : `Private`}
┃ *ᴠᴇʀsɪᴏɴ* : 2.0.0
┃ *sᴘᴇᴇᴅ* :  ${latensie.toFixed(4)} ms
┃ *ʟɪʙʀᴀʀʏ*  : WS-Baileys
┃ *ᴛʏᴘᴇ sᴄʀɪᴘᴛ* : Node.js
┃ *ʙᴏᴛ ɴᴀᴍᴇ* : Xploader V2
┃ *ʀᴀᴍ* :  ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}
╰─┬────❍┈ ▱╼❲✯❳
 └─────────┈ ▱╼❲✯❳`;
if (typemenu === 'v1') {
                    XliconBotInc.sendMessage(m.chat, {
                        image: tylorkiddo,
                        caption: xmenu_ic
                    }, {
                        quoted: m
                    })
} else if (typemenu === 'v2') {
let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
          message: {
              "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                  text: xmenu_oh
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                  text: botname
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : tylorkid}, { upload: XliconBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"ALL MENU","id":"${prefix}allmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"OWNER MENU","id":"${prefix}ownermenu"}`
              },
                            {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"DOWNLOAD MENU","id":"${prefix} downloadmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"GROUP MENU","id":"${prefix}groupmenu"}`
              },
                            {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"AI MENU","id":"${prefix}aimenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"MENU LIST","id":"${prefix}menulist"}`
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"CHANNEL\",\"url\":\"https://whatsapp.com/channel/0029VamSWUx77qVNJDy1Jf11\",\"merchant_url\":\"https://www.google.com\"}"
              },       
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"SCRIPT\",\"url\":\"https://github.com/heyit-tylor/Xploader-V2\",\"merchant_url\":\"https://www.google.com\"}"
              },       
                                  ],
                }),
                contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '254796180105@s.whatsapp.net',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
              }
              })
          }
        },
      }, { quoted: fstatus })
      
      await XliconBotInc.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
        })
}  
}
break;
//=================================================//
case "allmenu":
          let ownernya = ownernumber + "@s.whatsapp.net";
          let timestampe = speed();
          let latensie = speed() - timestampe;
          let xmenu_am = `
┌───❍「 𝗫𝗣𝗟𝗢𝗔𝗗𝗘𝗥 」❍
┃ *ᴏᴡɴᴇʀ* :  ${ownername}
┃ *ᴘʀᴇғɪx* :  [ ${prefix} ]
┃ *ʜᴏsᴛ* : ${os.platform()}
┃ *ᴘʟᴜɢɪɴs* : 501
┃ *ᴍᴏᴅᴇ* : ${XliconBotInc.public ? "Public" : `Private`}
┃ *ᴠᴇʀsɪᴏɴ* : 2.0.0
┃ *sᴘᴇᴇᴅ* :  ${latensie.toFixed(4)} ms
┃ *ʟɪʙʀᴀʀʏ*  : WS-Baileys
┃ *ᴛʏᴘᴇ sᴄʀɪᴘᴛ* : Node.js
┃ *ʙᴏᴛ ɴᴀᴍᴇ* : Xploader V2
┃ *ʀᴀᴍ* :  ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}
╰─┬────❍┈ ▱╼❲✯❳
 └─────────┈ ▱╼❲✯❳
┌──❖𝗢𝗪𝗡𝗘𝗥 𝗠𝗘𝗡𝗨❖──┈ ⳹
│❂ autoread
│❂ autobio
│❂ autotype
│❂ autorecord
│❂ autorecordtyping
│❂ offline 
│❂ autostatusview 
│❂ setautoblock
│❂ setantiforeign
│❂ autoblock
│❂ onlygc
│❂ onlypc
│❂ mode
│❂ public 
│❂ private 
│❂ join
│❂ leave
│❂ block
│❂ unblock 
│❂ anticall
│❂ broadcast 
│❂ menutype
│❂ setreply
│❂ setprefix
│❂ resethit
│❂ resetuser
│❂ creategroup
│❂ setbio
│❂ setprofilepic
│❂ delprofilepic
│❂ restart 
│❂ addlimit
│❂ dellimit
│❂ addpremium
│❂ delpremium
│❂ addowner
│❂ delowner
│❂ posttextstatus
│❂ postaudiostatus
│❂ postvideostatus
│❂ getsession
│❂ delsession 
│❂ pushcontact
│❂ request 
│❂ reportbug
│❂ ipbot
│❂ listowner
│❂ listpremium
│❂ setfullpp
│❂ getcase
│❂ delete
└─────────────┈ ⳹


┌──❖𝗚𝗥𝗢𝗨𝗣 𝗠𝗘𝗡𝗨❖──┈ ⳹
│❂ antibot
│❂ antipoll
│❂ antiviewonce
│❂ antilinkgc
│❂ antisticker
│❂ antidocument
│❂ antiaudio
│❂ antivideo
│❂ antivirus
│❂ antimedia
│❂ antiimage 
│❂ anticontact
│❂ antiforeign
│❂ tagadmin
│❂ welcome
│❂ listonline
│❂ adminevent
│❂ groupevent
│❂ grouplink
│❂ invite
│❂ add
│❂ kick
│❂ promote
│❂ demote 
│❂ ephemeral
│❂ setppgroup
│❂ delppgroup
│❂ setdesc
│❂ opentime
│❂ closetime
│❂ getcontact
│❂ savecontact
│❂ sendcontact
│❂ contacttag
│❂ totag
│❂ hidetag
│❂ tagall
│❂ resetlink
│❂ editinfo
│❂ react
│❂ setgroupname
│❂ getbio
│❂ userjid
│❂ groupmode 
│❂ nsfw
│❂ poll
└─────────────┈ ⳹


┌─❖𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗 𝗠𝗘𝗡𝗨❖─┈ ⳹
│❂ play
│❂ ytsearch
│❂ ytmp3
│❂ ytmp4
│❂ shazam
│❂ gitclone
│❂ facebook
│❂ tiktok
│❂ apk
│❂ telesticker
│❂ imdb
│❂ wanumber
│❂ ringtone
│❂ pinterest
│❂ itunes
│❂ image
│❂ instagram
│❂ happymod
└─────────────┈ ⳹


┌────❖𝗔𝗜 𝗠𝗘𝗡𝗨❖───┈ ⳹
│❂ gpt
│❂ gpt2
│❂ gemini
│❂ openai
│❂ gptgo
│❂ blackbox
│❂ bardai
│❂ bingai
│❂ dalle
│❂ imagen
│❂ photoai
│❂ generate
│❂ simi
│❂ llama
│❂ turbo
│❂ aidetector
└─────────────┈ ⳹


┌─❖𝗘𝗣𝗛𝗢𝗧𝗢360 𝗠𝗘𝗡𝗨❖─┈ ⳹
│❂ glitchtext
│❂ graffiti 
│❂ sand
│❂ matrix 
│❂ deadpool
│❂ dragonball
│❂ incandescent 
│❂ topography
│❂ writetext
│❂ advancedglow
│❂ typographytext
│❂ deletingtext
│❂ pixelglitch
│❂ flagtext
│❂ flag3dtext
│❂ neonglitch
│❂ logomaker
│❂ blackpinkstyle
│❂ underwatertext
│❂ glowingtext
│❂ cartoonstyle
│❂ blackpinklogo
│❂ effectclouds
│❂ watercolortext
│❂ papercutstyle
│❂ gradienttext
│❂ summerbeach
│❂ makingneon
│❂ multicoloredneon
│❂ sandsummer
│❂ 1917style
│❂ galaxywallpaper
│❂ freecreate
│❂ royaltext
│❂ luxurygold
│❂ lighteffects
│❂ galaxystyle
└─────────────┈ ⳹


┌───❖𝗢𝗧𝗛𝗘𝗥 𝗠𝗘𝗡𝗨❖──┈ ⳹
│❂ ping
│❂ take
│❂ pairid
│❂ pairfile
│❂ sticker
│❂ uptime
│❂ script
│❂ owner
│❂ toimage
│❂ tovideo
│❂ toaudio
│❂ tovn
│❂ tomp3
│❂ togif
│❂ smeme
│❂ shortlink
│❂ calculate
│❂ tourl
│❂ smeme
│❂ define
│❂ remini
│❂ emojimix
│❂ toviewonce
│❂ totalcmds
│❂ menu
│❂ obfuscate
│❂ fancy
│❂ Bible
│❂ Quran
│❂ fliptext
│❂ toqr
│❂ volaudio
│❂ volvideo
│❂ bass 
│❂ blown
│❂ deep
│❂ earrape
│❂ fast
│❂ fat
│❂ nightcore
│❂ reverse
│❂ robot
│❂ slow
│❂ smooth
│❂ squirrel
│❂ tts
│❂ translate
│❂ lyrics
│❂ ssweb
│❂ sswebpc
│❂ sswebtab
└─────────────┈ ⳹


┌───❖𝗙𝗨𝗡 𝗠𝗘𝗡𝗨❖───┈ ⳹
│❂ truthdetector
│❂ mathsquiz
│❂ rockpaperscissors
│❂ tictactoe
│❂ deltictactoe
│❂ xxqc
│❂ randomgirl
│❂ randomboy
│❂ rate
│❂ soulmate 
│❂ couple 
│❂ wallpaper 
│❂ wikimedia 
│❂ pick
│❂ fact 
│❂ quotes
│❂ truth
│❂ dare
│❂ checkme
│❂charactercheck
│❂ stupidcheck
│❂ uncleancheck
│❂ hotcheck
│❂ smartcheck
│❂ evilcheck
│❂ dogcheck
│❂ coolcheck
│❂ waifucheck
│❂ handsomecheck
│❂ beautifulcheck
│❂ awesomecheck
│❂ cutecheck
│❂ gaycheck
│❂ greatcheck
│❂ lesbiancheck
│❂ hornycheck
│❂ prettycheck
│❂ lovelycheck
│❂ uglycheck
│❂ lovesticker
└─────────────┈ ⳹


┌──❖𝗥𝗘𝗔𝗧𝗜𝗢𝗡 𝗠𝗘𝗡𝗨❖──┈ ⳹
│❂ cry
│❂ kill
│❂ hug
│❂ pat
│❂ lick
│❂ kiss
│❂ bite
│❂ yeet
│❂ bully 
│❂ bonk
│❂ wink
│❂ poke
│❂ nom
│❂ slap
│❂ smile
│❂ wave
│❂ awoo
│❂ blush
│❂ smug
│❂ glomp 
│❂ happy
│❂ dance
│❂ cringe
│❂ cuddle
│❂ highfive
│❂ handhold
│❂ shinobu
│❂ woof
│❂ 8ball
│❂ goose 
│❂ gecg
│❂ feed
│❂ avatar 
│❂ foxgirl
│❂ lizard
│❂ spank
│❂ meow
│❂ tickle
└─────────────┈ ⳹


┌───❖𝗠𝗔𝗞𝗘𝗥 𝗠𝗘𝗡𝗨❖──┈ ⳹
│❂ ttp
│❂ attp
└─────────────┈ ⳹


┌───❖𝗔𝗡𝗜𝗠𝗘 𝗠𝗘𝗡𝗨❖──┈ ⳹
│❂ anime
│❂ animeawoo
│❂ animemegumin
│❂ animeshinobu
│❂ animehandhold
│❂ animehighfive
│❂ animecringe
│❂ animedance
│❂ animehappy
│❂ animeglomp
│❂ animesmug
│❂ animeblush
│❂ animewave
│❂ animesmile
│❂ animepoke
│❂ animewink
│❂ animebonk
│❂ animebully
│❂ animeyeet
│❂ animebite
│❂ animelick
│❂ animekill
│❂ animecry
│❂ animewallpaper
│❂ animekiss 
│❂ animehug
│❂ animeneko
│❂ animepat
│❂ animeslap
│❂ animecuddle
│❂ animewaifu
│❂ animenom
│❂ animefoxgirl
│❂ animetickle
│❂ animegecg
│❂ dogwoof
│❂ 8ballpool
│❂ goosebird
│❂ animefeed
│❂ animeavatar
│❂ lizardpic
│❂ catmeow
│❂ animequote
└─────────────┈ ⳹


┌───❖𝗡𝗦𝗙𝗪 𝗠𝗘𝗡𝗨❖──┈ ⳹
│❂ hentai
│❂ trap
│❂ neko
│❂ waifu
│❂ gasm
│❂ milf
│❂ animespank
│❂ hentaivideo
│❂ ahegao
│❂ ass
│❂ bdsm
│❂ blowjob
│❂ cuckold
│❂ cum
│❂ eba
│❂ ero
│❂ foot
│❂ femdom
│❂ glasses
│❂ gangbang
│❂ jahy
│❂ manga
│❂ masturbation
│❂ neko-hentai
│❂ neko-hentai2
│❂ nsfwloli
│❂ orgy
│❂ panties
│❂ pussy
│❂ tentacles
│❂ thighs
│❂ yuri
│❂ zettai
│❂ gifblowjob
│❂ gifhentai
└─────────────┈ ⳹`;
 if (typemenu === 'v1') {
                    XliconBotInc.sendMessage(m.chat, {
                        image: tylorkiddo,
                        caption: xmenu_am
                    }, {
                        quoted: m
                    })
           }  else if (typemenu === 'v2') {
XliconBotInc.sendMessage(
              m.chat,
              {
                document: {
                  url: "https://i.ibb.co/2W0H9Jq/avatar-contact.png",
                },
                caption: xmenu_am,
                mimetype: "application/zip",
                fileName: ownername,
                fileLength: "99999999999",
                contextInfo: {
                  externalAdReply: {
                    showAdAttribution: true,
                    title: botname,
                    body: ownername,
                    thumbnail: tylorkid,
                    sourceUrl: wagc,
                    mediaType: 1,
                    renderLargerThumbnail: true,
                  },
                },
              },
              { quoted: fstatus });
          }
        break;

//=================================================//
case "ownermenu":
          let xmenu_ty = `
┌───❍「 𝗫𝗣𝗟𝗢𝗔𝗗𝗘𝗥 」❍
┃ *ᴏᴡɴᴇʀ* :  ${ownername}
┃ *ᴘʀᴇғɪx* :  [ ${prefix} ]
┃ *ʜᴏsᴛ* : ${os.platform()}
┃ *ᴘʟᴜɢɪɴs* : 501
┃ *ᴍᴏᴅᴇ* : ${XliconBotInc.public ? "Public" : `Private`}
┃ *ᴠᴇʀsɪᴏɴ* : 2.0.0
┃ *ʟɪʙʀᴀʀʏ*  : WS-Baileys
┃ *ᴛʏᴘᴇ sᴄʀɪᴘᴛ* : Node.js
┃ *ʙᴏᴛ ɴᴀᴍᴇ* : Xploader V2
┃ *ʀᴀᴍ* :  ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}
╰─┬────❍┈ ▱╼❲✯❳
 └─────────┈ ▱╼❲✯❳
┌──❖𝗢𝗪𝗡𝗘𝗥 𝗠𝗘𝗡𝗨❖──┈ ⳹
│❂ autoread
│❂ autobio
│❂ autotype
│❂ autorecord
│❂ autorecordtyping
│❂ offline 
│❂ autostatusview 
│❂ setautoblock
│❂ setantiforeign
│❂ autoblock
│❂ onlygc
│❂ onlypc
│❂ mode
│❂ public 
│❂ private 
│❂ join
│❂ leave
│❂ block
│❂ unblock 
│❂ anticall
│❂ broadcast 
│❂ menutype 
│❂ setreply
│❂ setprefix
│❂ resethit
│❂ resetuser
│❂ creategroup
│❂ setbio
│❂ setprofilepic
│❂ delprofilepic
│❂ restart 
│❂ addlimit
│❂ dellimit
│❂ addpremium
│❂ delpremium
│❂ addowner
│❂ delowner
│❂ posttextstatus
│❂ postaudiostatus
│❂ postvideostatus
│❂ getsession
│❂ delsession 
│❂ pushcontact
│❂ request 
│❂ reportbug
│❂ ipbot
│❂ listowner
│❂ listpremium
│❂ setfullpp
│❂ getcase
│❂ delete
└─────────────┈ ⳹`;
 if (typemenu === 'v1') {
                    XliconBotInc.sendMessage(m.chat, {
                        image: tylorkiddo,
                        caption: xmenu_ty
                    }, {
                        quoted: m
                    })
           }  else if (typemenu === 'v2') {
XliconBotInc.sendMessage(
              m.chat,
              {
                document: {
                  url: "https://i.ibb.co/2W0H9Jq/avatar-contact.png",
                },
                caption: xmenu_ty,
                mimetype: "application/zip",
                fileName: ownername,
                fileLength: "99999999999",
                contextInfo: {
                  externalAdReply: {
                    showAdAttribution: true,
                    title: botname,
                    body: ownername,
                    thumbnail: tylorkid,
                    sourceUrl: wagc,
                    mediaType: 1,
                    renderLargerThumbnail: true,
                  },
                },
              },
              { quoted: fstatus });
          }
        break;
//=================================================//
case "groupmenu":
          let xmenu_gc = `
┌───❍「 𝗫𝗣𝗟𝗢𝗔𝗗𝗘𝗥 」❍
┃ *ᴏᴡɴᴇʀ* :  ${ownername}
┃ *ᴘʀᴇғɪx* :  [ ${prefix} ]
┃ *ʜᴏsᴛ* : ${os.platform()}
┃ *ᴘʟᴜɢɪɴs* : 501
┃ *ᴍᴏᴅᴇ* : ${XliconBotInc.public ? "Public" : `Private`}
┃ *ᴠᴇʀsɪᴏɴ* : 2.0.0
┃ *ʟɪʙʀᴀʀʏ*  : WS-Baileys
┃ *ᴛʏᴘᴇ sᴄʀɪᴘᴛ* : Node.js
┃ *ʙᴏᴛ ɴᴀᴍᴇ* : Xploader V2
┃ *ʀᴀᴍ* :  ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}
╰─┬────❍┈ ▱╼❲✯❳
 └─────────┈ ▱╼❲✯❳
┌──❖𝗚𝗥𝗢𝗨𝗣 𝗠𝗘𝗡𝗨❖──┈ ⳹
│❂ antibot
│❂ antipoll
│❂ antiviewonce
│❂ antilinkgc
│❂ antisticker
│❂ antidocument
│❂ antiaudio
│❂ antivideo
│❂ antivirus
│❂ antimedia
│❂ antiimage 
│❂ anticontact
│❂ antiforeign
│❂ tagadmin
│❂ welcome
│❂ listonline
│❂ adminevent
│❂ groupevent
│❂ grouplink
│❂ invite
│❂ add
│❂ kick
│❂ promote
│❂ demote 
│❂ ephemeral
│❂ setppgroup
│❂ delppgroup
│❂ setdesc
│❂ opentime
│❂ closetime
│❂ getcontact
│❂ savecontact
│❂ sendcontact
│❂ contacttag
│❂ totag
│❂ hidetag
│❂ tagall
│❂ resetlink
│❂ editinfo
│❂ react
│❂ setgroupname
│❂ getbio
│❂ userjid
│❂ groupmode 
│❂ nsfw
│❂ poll
└─────────────┈ ⳹`;
if (typemenu === 'v1') {
                    XliconBotInc.sendMessage(m.chat, {
                        image: tylorkiddo,
                        caption: xmenu_gc
                    }, {
                        quoted: m
                    })
           }  else if (typemenu === 'v2') {
XliconBotInc.sendMessage(
              m.chat,
              {
                document: {
                  url: "https://i.ibb.co/2W0H9Jq/avatar-contact.png",
                },
                caption: xmenu_gc,
                mimetype: "application/zip",
                fileName: ownername,
                fileLength: "99999999999",
                contextInfo: {
                  externalAdReply: {
                    showAdAttribution: true,
                    title: botname,
                    body: ownername,
                    thumbnail: tylorkid,
                    sourceUrl: wagc,
                    mediaType: 1,
                    renderLargerThumbnail: true,
                  },
                },
              },
              { quoted: fstatus });
          }
        break;
 //=================================================//
 case "downloadmenu":
           let xmenu_dl = `
┌───❍「 𝗫𝗣𝗟𝗢𝗔𝗗𝗘𝗥 」❍
┃ *ᴏᴡɴᴇʀ* :  ${ownername}
┃ *ᴘʀᴇғɪx* :  [ ${prefix} ]
┃ *ʜᴏsᴛ* : ${os.platform()}
┃ *ᴘʟᴜɢɪɴs* : 501
┃ *ᴍᴏᴅᴇ* : ${XliconBotInc.public ? "Public" : `Private`}
┃ *ᴠᴇʀsɪᴏɴ* : 2.0.0
┃ *ʟɪʙʀᴀʀʏ*  : WS-Baileys
┃ *ᴛʏᴘᴇ sᴄʀɪᴘᴛ* : Node.js
┃ *ʙᴏᴛ ɴᴀᴍᴇ* : Xploader V2
┃ *ʀᴀᴍ* :  ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}
╰─┬────❍┈ ▱╼❲✯❳
 └─────────┈ ▱╼❲✯❳
 ┌─❖𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗 𝗠𝗘𝗡𝗨❖─┈ ⳹
│❂ play
│❂ ytsearch
│❂ ytmp3
│❂ ytmp4
│❂ shazam
│❂ gitclone
│❂ facebook
│❂ tiktok
│❂ apk
│❂ telesticker
│❂ imdb
│❂ wanumber
│❂ ringtone
│❂ pinterest
│❂ itunes
│❂ image
│❂ instagram
│❂ happymod
└─────────────┈ ⳹`;
if (typemenu === 'v1') {
                    XliconBotInc.sendMessage(m.chat, {
                        image: tylorkiddo,
                        caption: xmenu_dl
                    }, {
                        quoted: m
                    })
           }  else if (typemenu === 'v2') {
XliconBotInc.sendMessage(
              m.chat,
              {
                document: {
                  url: "https://i.ibb.co/2W0H9Jq/avatar-contact.png",
                },
                caption: xmenu_dl,
                mimetype: "application/zip",
                fileName: ownername,
                fileLength: "99999999999",
                contextInfo: {
                  externalAdReply: {
                    showAdAttribution: true,
                    title: botname,
                    body: ownername,
                    thumbnail: tylorkid,
                    sourceUrl: wagc,
                    mediaType: 1,
                    renderLargerThumbnail: true,
                  },
                },
              },
              { quoted: fstatus });
          }
        break;
 //=================================================//
 case "ephoto360menu":
            let xmenu_ep = `
┌───❍「 𝗫𝗣𝗟𝗢𝗔𝗗𝗘𝗥 」❍
┃ *ᴏᴡɴᴇʀ* :  ${ownername}
┃ *ᴘʀᴇғɪx* :  [ ${prefix} ]
┃ *ʜᴏsᴛ* : ${os.platform()}
┃ *ᴘʟᴜɢɪɴs* : 501
┃ *ᴍᴏᴅᴇ* : ${XliconBotInc.public ? "Public" : `Private`}
┃ *ᴠᴇʀsɪᴏɴ* : 2.0.0
┃ *ʟɪʙʀᴀʀʏ*  : WS-Baileys
┃ *ᴛʏᴘᴇ sᴄʀɪᴘᴛ* : Node.js
┃ *ʙᴏᴛ ɴᴀᴍᴇ* : Xploader V2
┃ *ʀᴀᴍ* :  ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}
╰─┬────❍┈ ▱╼❲✯❳
 └─────────┈ ▱╼❲✯❳
 ┌─❖𝗘𝗣𝗛𝗢𝗧𝗢360 𝗠𝗘𝗡𝗨❖─┈ ⳹
│❂ glitchtext
│❂ graffiti 
│❂ sand
│❂ matrix 
│❂ deadpool
│❂ dragonball
│❂ incandescent 
│❂ topography
│❂ writetext
│❂ advancedglow
│❂ typographytext
│❂ deletingtext
│❂ pixelglitch
│❂ flagtext
│❂ flag3dtext
│❂ neonglitch
│❂ logomaker
│❂ blackpinkstyle
│❂ underwatertext
│❂ glowingtext
│❂ cartoonstyle
│❂ blackpinklogo
│❂ effectclouds
│❂ watercolortext
│❂ papercutstyle
│❂ gradienttext
│❂ summerbeach
│❂ makingneon
│❂ multicoloredneon
│❂ sandsummer
│❂ 1917style
│❂ galaxywallpaper
│❂ freecreate
│❂ royaltext
│❂ luxurygold
│❂ lighteffects
│❂ galaxystyle
└─────────────┈ ⳹`;
 if (typemenu === 'v1') {
                    XliconBotInc.sendMessage(m.chat, {
                        image: tylorkiddo,
                        caption: xmenu_ep
                    }, {
                        quoted: m
                    })
           }  else if (typemenu === 'v2') {
XliconBotInc.sendMessage(
              m.chat,
              {
                document: {
                  url: "https://i.ibb.co/2W0H9Jq/avatar-contact.png",
                },
                caption: xmenu_ep,
                mimetype: "application/zip",
                fileName: ownername,
                fileLength: "99999999999",
                contextInfo: {
                  externalAdReply: {
                    showAdAttribution: true,
                    title: botname,
                    body: ownername,
                    thumbnail: tylorkid,
                    sourceUrl: wagc,
                    mediaType: 1,
                    renderLargerThumbnail: true,
                  },
                },
              },
              { quoted: fstatus });
          }
        break;
 //=================================================//
 case "aimenu":
             let xmenu_ai = `
┌───❍「 𝗫𝗣𝗟𝗢𝗔𝗗𝗘𝗥 」❍
┃ *ᴏᴡɴᴇʀ* :  ${ownername}
┃ *ᴘʀᴇғɪx* :  [ ${prefix} ]
┃ *ʜᴏsᴛ* : ${os.platform()}
┃ *ᴘʟᴜɢɪɴs* : 501
┃ *ᴍᴏᴅᴇ* : ${XliconBotInc.public ? "Public" : `Private`}
┃ *ᴠᴇʀsɪᴏɴ* : 2.0.0
┃ *ʟɪʙʀᴀʀʏ*  : WS-Baileys
┃ *ᴛʏᴘᴇ sᴄʀɪᴘᴛ* : Node.js
┃ *ʙᴏᴛ ɴᴀᴍᴇ* : Xploader V2
┃ *ʀᴀᴍ* :  ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}
╰─┬────❍┈ ▱╼❲✯❳
 └─────────┈ ▱╼❲✯❳
 ┌────❖𝗔𝗜 𝗠𝗘𝗡𝗨❖───┈ ⳹
│❂ gpt
│❂ gpt2
│❂ gemini
│❂ openai
│❂ gptgo
│❂ blackbox
│❂ bardai
│❂ bingai
│❂ dalle
│❂ imagen
│❂ photoai
│❂ generate
│❂ simi
│❂ llama
│❂ turbo
│❂ aidetector
└─────────────┈ ⳹`;
if (typemenu === 'v1') {
                    XliconBotInc.sendMessage(m.chat, {
                        image: tylorkiddo,
                        caption: xmenu_ai
                    }, {
                        quoted: m
                    })
           }  else if (typemenu === 'v2') {
XliconBotInc.sendMessage(
              m.chat,
              {
                document: {
                  url: "https://i.ibb.co/2W0H9Jq/avatar-contact.png",
                },
                caption: xmenu_ai,
                mimetype: "application/zip",
                fileName: ownername,
                fileLength: "99999999999",
                contextInfo: {
                  externalAdReply: {
                    showAdAttribution: true,
                    title: botname,
                    body: ownername,
                    thumbnail: tylorkid,
                    sourceUrl: wagc,
                    mediaType: 1,
                    renderLargerThumbnail: true,
                  },
                },
              },
              { quoted: fstatus });
          }
        break;
 //=================================================//
 case "othermenu":
              let xmenu_om = `
┌───❍「 𝗫𝗣𝗟𝗢𝗔𝗗𝗘𝗥 」❍
┃ *ᴏᴡɴᴇʀ* :  ${ownername}
┃ *ᴘʀᴇғɪx* :  [ ${prefix} ]
┃ *ʜᴏsᴛ* : ${os.platform()}
┃ *ᴘʟᴜɢɪɴs* : 501
┃ *ᴍᴏᴅᴇ* : ${XliconBotInc.public ? "Public" : `Private`}
┃ *ᴠᴇʀsɪᴏɴ* : 2.0.0
┃ *ʟɪʙʀᴀʀʏ*  : WS-Baileys
┃ *ᴛʏᴘᴇ sᴄʀɪᴘᴛ* : Node.js
┃ *ʙᴏᴛ ɴᴀᴍᴇ* : Xploader V2
┃ *ʀᴀᴍ* :  ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}
╰─┬────❍┈ ▱╼❲✯❳
 └─────────┈ ▱╼❲✯❳
 ┌───❖𝗢𝗧𝗛𝗘𝗥 𝗠𝗘𝗡𝗨❖──┈ ⳹
│❂ ping
│❂ take
│❂ pairid
│❂ pairfile
│❂ sticker
│❂ uptime
│❂ script
│❂ owner
│❂ toimage
│❂ tovideo
│❂ toaudio
│❂ tovn
│❂ tomp3
│❂ togif
│❂ smeme
│❂ shortlink
│❂ calculate
│❂ tourl
│❂ smeme
│❂ define
│❂ remini
│❂ emojimix
│❂ toviewonce
│❂ totalcmds
│❂ menu
│❂ obfuscate
│❂ fancy
│❂ Bible
│❂ Quran
│❂ fliptext
│❂ toqr
│❂ volaudio
│❂ volvideo
│❂ bass 
│❂ blown
│❂ deep
│❂ earrape
│❂ fast
│❂ fat
│❂ nightcore
│❂ reverse
│❂ robot
│❂ slow
│❂ smooth
│❂ squirrel
│❂ tts
│❂ translate
│❂ lyrics
│❂ ssweb
│❂ sswebpc
│❂ sswebtab
└─────────────┈ ⳹`;
if (typemenu === 'v1') {
                    XliconBotInc.sendMessage(m.chat, {
                        image: tylorkiddo,
                        caption: xmenu_om
                    }, {
                        quoted: m
                    })
           }  else if (typemenu === 'v2') {
XliconBotInc.sendMessage(
              m.chat,
              {
                document: {
                  url: "https://i.ibb.co/2W0H9Jq/avatar-contact.png",
                },
                caption: xmenu_om,
                mimetype: "application/zip",
                fileName: ownername,
                fileLength: "99999999999",
                contextInfo: {
                  externalAdReply: {
                    showAdAttribution: true,
                    title: botname,
                    body: ownername,
                    thumbnail: tylorkid,
                    sourceUrl: wagc,
                    mediaType: 1,
                    renderLargerThumbnail: true,
                  },
                },
              },
              { quoted: fstatus });
          }
        break;
 //=================================================//
 case "funmenu":
               let xmenu_fm = `
┌───❍「 𝗫𝗣𝗟𝗢𝗔𝗗𝗘𝗥 」❍
┃ *ᴏᴡɴᴇʀ* :  ${ownername}
┃ *ᴘʀᴇғɪx* :  [ ${prefix} ]
┃ *ʜᴏsᴛ* : ${os.platform()}
┃ *ᴘʟᴜɢɪɴs* : 501
┃ *ᴍᴏᴅᴇ* : ${XliconBotInc.public ? "Public" : `Private`}
┃ *ᴠᴇʀsɪᴏɴ* : 2.0.0
┃ *ʟɪʙʀᴀʀʏ*  : WS-Baileys
┃ *ᴛʏᴘᴇ sᴄʀɪᴘᴛ* : Node.js
┃ *ʙᴏᴛ ɴᴀᴍᴇ* : Xploader V2
┃ *ʀᴀᴍ* :  ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}
╰─┬────❍┈ ▱╼❲✯❳
 └─────────┈ ▱╼❲✯❳
 ┌───❖𝗙𝗨𝗡 𝗠𝗘𝗡𝗨❖───┈ ⳹
│❂ truthdetector
│❂ mathsquiz
│❂ rockpaperscissors
│❂ tictactoe
│❂ deltictactoe
│❂ xxqc
│❂ randomgirl
│❂ randomboy
│❂ rate
│❂ soulmate 
│❂ couple 
│❂ wallpaper 
│❂ wikimedia 
│❂ pick
│❂ fact 
│❂ quotes
│❂ truth
│❂ dare
│❂ checkme
│❂charactercheck
│❂ stupidcheck
│❂ uncleancheck
│❂ hotcheck
│❂ smartcheck
│❂ evilcheck
│❂ dogcheck
│❂ coolcheck
│❂ waifucheck
│❂ handsomecheck
│❂ beautifulcheck
│❂ awesomecheck
│❂ cutecheck
│❂ gaycheck
│❂ greatcheck
│❂ lesbiancheck
│❂ hornycheck
│❂ prettycheck
│❂ lovelycheck
│❂ uglycheck
│❂ lovesticker
└─────────────┈ ⳹`;
if (typemenu === 'v1') {
                    XliconBotInc.sendMessage(m.chat, {
                        image: tylorkiddo,
                        caption: xmenu_fm
                    }, {
                        quoted: m
                    })
           }  else if (typemenu === 'v2') {
XliconBotInc.sendMessage(
              m.chat,
              {
                document: {
                  url: "https://i.ibb.co/2W0H9Jq/avatar-contact.png",
                },
                caption: xmenu_fm,
                mimetype: "application/zip",
                fileName: ownername,
                fileLength: "99999999999",
                contextInfo: {
                  externalAdReply: {
                    showAdAttribution: true,
                    title: botname,
                    body: ownername,
                    thumbnail: tylorkid,
                    sourceUrl: wagc,
                    mediaType: 1,
                    renderLargerThumbnail: true,
                  },
                },
              },
              { quoted: fstatus });
          }
        break;
 //=================================================//
case "reactionmenu":
              let xmenu_rm = `
┌───❍「 𝗫𝗣𝗟𝗢𝗔𝗗𝗘𝗥 」❍
┃ *ᴏᴡɴᴇʀ* :  ${ownername}
┃ *ᴘʀᴇғɪx* :  [ ${prefix} ]
┃ *ʜᴏsᴛ* : ${os.platform()}
┃ *ᴘʟᴜɢɪɴs* : 501
┃ *ᴍᴏᴅᴇ* : ${XliconBotInc.public ? "Public" : `Private`}
┃ *ᴠᴇʀsɪᴏɴ* : 2.0.0
┃ *ʟɪʙʀᴀʀʏ*  : WS-Baileys
┃ *ᴛʏᴘᴇ sᴄʀɪᴘᴛ* : Node.js
┃ *ʙᴏᴛ ɴᴀᴍᴇ* : Xploader V2
┃ *ʀᴀᴍ* :  ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}
╰─┬────❍┈ ▱╼❲✯❳
 └─────────┈ ▱╼❲✯❳
┌──❖𝗥𝗘𝗔𝗧𝗜𝗢𝗡 𝗠𝗘𝗡𝗨❖──┈ ⳹
│❂ cry
│❂ kill
│❂ hug
│❂ pat
│❂ lick
│❂ kiss
│❂ bite
│❂ yeet
│❂ bully 
│❂ bonk
│❂ wink
│❂ poke
│❂ nom
│❂ slap
│❂ smile
│❂ wave
│❂ awoo
│❂ blush
│❂ smug
│❂ glomp 
│❂ happy
│❂ dance
│❂ cringe
│❂ cuddle
│❂ highfive
│❂ handhold
│❂ shinobu
│❂ woof
│❂ 8ball
│❂ goose 
│❂ gecg
│❂ feed
│❂ avatar 
│❂ foxgirl
│❂ lizard
│❂ spank
│❂ meow
│❂ tickle
└─────────────┈ ⳹`;
if (typemenu === 'v1') {
                    XliconBotInc.sendMessage(m.chat, {
                        image: tylorkiddo,
                        caption: xmenu_rm
                    }, {
                        quoted: m
                    })
           }  else if (typemenu === 'v2') {
XliconBotInc.sendMessage(
              m.chat,
              {
                document: {
                  url: "https://i.ibb.co/2W0H9Jq/avatar-contact.png",
                },
                caption: xmenu_rm,
                mimetype: "application/zip",
                fileName: ownername,
                fileLength: "99999999999",
                contextInfo: {
                  externalAdReply: {
                    showAdAttribution: true,
                    title: botname,
                    body: ownername,
                    thumbnail: tylorkid,
                    sourceUrl: wagc,
                    mediaType: 1,
                    renderLargerThumbnail: true,
                  },
                },
              },
              { quoted: fstatus });
          }
        break;
//=================================================//
case "nsfwmenu":
              let xmenu_nw = `
┌───❍「 𝗫𝗣𝗟𝗢𝗔𝗗𝗘𝗥 」❍
┃ *ᴏᴡɴᴇʀ* :  ${ownername}
┃ *ᴘʀᴇғɪx* :  [ ${prefix} ]
┃ *ʜᴏsᴛ* : ${os.platform()}
┃ *ᴘʟᴜɢɪɴs* : 501
┃ *ᴍᴏᴅᴇ* : ${XliconBotInc.public ? "Public" : `Private`}
┃ *ᴠᴇʀsɪᴏɴ* : 2.0.0
┃ *ʟɪʙʀᴀʀʏ*  : WS-Baileys
┃ *ᴛʏᴘᴇ sᴄʀɪᴘᴛ* : Node.js
┃ *ʙᴏᴛ ɴᴀᴍᴇ* : Xploader V2
┃ *ʀᴀᴍ* :  ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}
╰─┬────❍┈ ▱╼❲✯❳
 └─────────┈ ▱╼❲✯❳
┌───❖𝗡𝗦𝗙𝗪 𝗠𝗘𝗡𝗨❖──┈ ⳹
│❂ hentai
│❂ trap
│❂ neko
│❂ waifu
│❂ gasm
│❂ milf
│❂ animespank
│❂ hentaivideo
│❂ ahegao
│❂ ass
│❂ bdsm
│❂ blowjob
│❂ cuckold
│❂ cum
│❂ eba
│❂ ero
│❂ foot
│❂ femdom
│❂ glasses
│❂ gangbang
│❂ jahy
│❂ manga
│❂ masturbation
│❂ neko-hentai
│❂ neko-hentai2
│❂ nsfwloli
│❂ orgy
│❂ panties
│❂ pussy
│❂ tentacles
│❂ thighs
│❂ yuri
│❂ zettai
│❂ gifblowjob
│❂ gifhentai
└─────────────┈ ⳹`;
 if (typemenu === 'v1') {
                    XliconBotInc.sendMessage(m.chat, {
                        image: tylorkiddo,
                        caption: xmenu_nw
                    }, {
                        quoted: m
                    })
           }  else if (typemenu === 'v2') {
XliconBotInc.sendMessage(
              m.chat,
              {
                document: {
                  url: "https://i.ibb.co/2W0H9Jq/avatar-contact.png",
                },
                caption: xmenu_nw,
                mimetype: "application/zip",
                fileName: ownername,
                fileLength: "99999999999",
                contextInfo: {
                  externalAdReply: {
                    showAdAttribution: true,
                    title: botname,
                    body: ownername,
                    thumbnail: tylorkid,
                    sourceUrl: wagc,
                    mediaType: 1,
                    renderLargerThumbnail: true,
                  },
                },
              },
              { quoted: fstatus });
          }
        break;
 //=================================================//
 case "menulist":
     let mot = pickRandom(["⌬", "⏣", "✯", "✪", "⬡"]);
     let xmenu_ml = `
┌───❍「 𝗫𝗣𝗟𝗢𝗔𝗗𝗘𝗥 」❍
┃ *ᴏᴡɴᴇʀ* :  ${ownername}
┃ *ᴘʀᴇғɪx* :  [ ${prefix} ]
┃ *ʜᴏsᴛ* : ${os.platform()}
┃ *ᴘʟᴜɢɪɴs* : 501
┃ *ᴍᴏᴅᴇ* : ${XliconBotInc.public ? "Public" : `Private`}
┃ *ᴠᴇʀsɪᴏɴ* : 2.0.0
┃ *ʟɪʙʀᴀʀʏ*  : WS-Baileys
┃ *ᴛʏᴘᴇ sᴄʀɪᴘᴛ* : Node.js
┃ *ʙᴏᴛ ɴᴀᴍᴇ* : Xploader V2
┃ *ʀᴀᴍ* :  ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}
╰─┬────❍┈ ▱╼❲✯❳
 └─────────┈ ▱╼❲✯❳
┌────❖ 𝗠𝗘𝗡𝗨 ❖───┈ ⳹
│${mot} ${prefix}allmenu
│${mot} ${prefix}downloadmenu
│${mot} ${prefix}funmenu
│${mot} ${prefix}aimenu
│${mot} ${prefix}groupmenu
│${mot} ${prefix}ownermenu
│${mot} ${prefix}animemenu
│${mot} ${prefix}ephoto360menu
│${mot} ${prefix}stalkermenu
│${mot} ${prefix}othermenu
│${mot} ${prefix}makermenu
│${mot} ${prefix}reactionmenu
│${mot} ${prefix}nsfwmenu
└─────────────┈ ⳹`;
if (typemenu === 'v1') {
                    XliconBotInc.sendMessage(m.chat, {
                        image: tylorkiddo,
                        caption: xmenu_ml
                    }, {
                        quoted: m
                    })
           }  else if (typemenu === 'v2') {
XliconBotInc.sendMessage(
              m.chat,
              {
                document: {
                  url: "https://i.ibb.co/2W0H9Jq/avatar-contact.png",
                },
                caption: xmenu_ml,
                mimetype: "application/zip",
                fileName: ownername,
                fileLength: "99999999999",
                contextInfo: {
                  externalAdReply: {
                    showAdAttribution: true,
                    title: botname,
                    body: ownername,
                    thumbnail: tylorkid,
                    sourceUrl: wagc,
                    mediaType: 1,
                    renderLargerThumbnail: true,
                  },
                },
              },
              { quoted: fstatus });
          }
        break;
 //=================================================//
 //=================================================//
case "menutype":
case "menuset":
        {
          if (!XeonTheCreator) return replygcXlicon(mess.owner);
    let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
          message: {
              "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                  text: `
         ❍「 𝗫𝗣𝗟𝗢𝗔𝗗𝗘𝗥 」❍       
*_Choose your preferred menu type_*`
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                  text: botname
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : tylorkid}, { upload: XliconBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"MENUTYPE 1","id":"${prefix}setmenu v1"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"MENUTYPE 2","id":"${prefix}setmenu v2"}`
              },
                                    ],
                }),
                contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '254796180105@s.whatsapp.net',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
              }
              })
          }
        },
      }, { quoted: fstatus })
      
      await XliconBotInc.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
        })
      if (text.startsWith("v")) {
            typemenu = text;
            replygcXlicon(mess.done);
          }
        }
        break;
        case "setmenu":
        {
          if (!XeonTheCreator) return replygcXlicon(mess.owner)
          if (!text)
            return replygcXlicon(
              `Please select either v1(Android & iOS) or v2(Android)\n Example: . setmenu v1`
            );;
          if (text.startsWith("v")) {
            typemenu = text;
            replygcXlicon(mess.done);
          }
        }
        break;
//=================================================//
      case "mode":
        if (!XeonTheCreator) return replygcXlicon(mess.owner);
        if (args.length < 1)
          return replygcXlicon(`*_Example ${prefix + command} public/private_*`);
        if (q == "public") {
          XliconBotInc.public = true;
          replygcXlicon(mess.done);
        } else if (q == "private") {
          XliconBotInc.public = false;
          replygcXlicon(mess.done);
        }
        break;
//=================================================//
case "autoread":
        if (!XeonTheCreator) return replygcXlicon(mess.owner);
        if (args.length < 1)
          return replygcXlicon(`*_Example ${prefix + command} on/off_*`);
        if (q === "on") {
          db.data.settings[botNumber].autoread = true;
          replygcXlicon(`*_Successfully changed autoread to ${q}_*`);
        } else if (q === "off") {
          db.data.settings[botNumber].autoread = false;
          replygcXlicon(`*_Successfully changed autoread to ${q}_*`);
        }
        break;
//=================================================//
      case "offline":
        if (!XeonTheCreator) return replygcXlicon(mess.owner);
        if (args.length < 1)
          return replygcXlicon(`*_Example ${prefix + command} on/off_*`);
        if (q === "on") {
          db.data.settings[botNumber].online = true;
          replygcXlicon(`*Successfully changed unavailable to offline mode*`);
        } else if (q === "off") {
          db.data.settings[botNumber].online = false;
          replygcXlicon(`*Successfully changed unavailable to online mode, please restart bot*`);
        }
        break;
//=================================================//
      case "autorecordtyping":
      case "autorecordtype":
        if (!XeonTheCreator) return replygcXlicon(mess.owner);
        if (args.length < 1)
          return replygcXlicon(`*_Example ${prefix + command} on/off_*`);
        if (q === "on") {
          db.data.settings[botNumber].autorecordtype = true;
          replygcXlicon(
            `*_Successfully changed Auto-RecordingTyping to ${q}_*`
          );
        } else if (q === "off") {
          db.data.settings[botNumber].autorecordtype = false;
          replygcXlicon(
            `*_Successfully changed Auto-RecordingTyping to ${q}_*`
          );
        }
        break;
//=================================================//
      case "autorecord":
      case "autorecording":
        if (!XeonTheCreator) return replygcXlicon(mess.owner);
        if (args.length < 1)
          return replygcXlicon(`*_Example ${prefix + command} on/off_*`);
        if (q === "on") {
          db.data.settings[botNumber].autorecord = true;
          replygcXlicon(`*_Successfully changed Auto-Recording to ${q}_*`);
        } else if (q === "off") {
          db.data.settings[botNumber].autorecord = false;
          replygcXlicon(`*_Successfully changed Auto-Recording to ${q}_*`);
        }
        break;
//=================================================//
      case "autotype":
      case "autotyping":
        if (!XeonTheCreator) return replygcXlicon(mess.owner);
        if (args.length < 1)
          return replygcXlicon(`*_Example ${prefix + command} on/off_*`);
        if (q === "on") {
          db.data.settings[botNumber].autotype = true;
          replygcXlicon(`*_Successfully changed Auto-Typing to ${q}_*`);
        } else if (q === "off") {
          db.data.settings[botNumber].autotype = false;
          replygcXlicon(`*_Successfully changed Auto-Typing to ${q}_*`);
        }
        break;
//=================================================//
      case "autobio":
        if (!XeonTheCreator) return replygcXlicon(mess.owner);
        if (args.length < 1)
          return replygcXlicon(`*_Example ${prefix + command} on/off_*`);
        if (q == "on") {
          db.data.settings[botNumber].autobio = true;
          replygcXlicon(`*_Successfully Changed AutoBio To ${q}_*`);
        } else if (q == "off") {
          db.data.settings[botNumber].autobio = false;
          replygcXlicon(`*_Successfully Changed AutoBio To ${q}_*`);
        }
        break;
//=================================================//
      case "take":
      case "steal":
      {
if (!args.join(" ")) return replygcXlicon(`Where is the text?\nE.g Take Xploader|V2`)
const swn = args.join(" ")
const pcknm = swn.split("|")[0]
const atnm = swn.split("|")[1]
if (m.quoted.isAnimated === true) {
XliconBotInc.downloadAndSaveMediaMessage(quoted, "gifee")
XliconBotInc.sendMessage(m.chat, {sticker:fs.readFileSync("gifee.webp")}, m, { packname: pcknm, author: atnm })
} else if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await XliconBotInc.sendImageAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return replygcXlicon('Maximum length should be 10 Seconds!')
let media = await quoted.download()
let encmedia = await XliconBotInc.sendVideoAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
} else {
replygcXlicon(`Please reply to a sticker`)
}
}
break;
//=================================================//
      case "autostatusview":
      case "autosview":
        {
          if (!XeonTheCreator) return replygcXlicon(mess.owner);
          if (args.length < 1) return replygcXlicon("*_on/off?_*");
          if (args[0] === "on") {
            antiswview = true;
            replygcXlicon(`${command} is enabled`);
          } else if (args[0] === "off") {
            antiswview = false;
            replygcXlicon(`${command} is disabled`);
          }
        }
        break;
//=================================================//
      case "setautoblock":
        if (!XeonTheCreator) return replygcXlicon(mess.owner);
        if (!text)
          return replygcXlicon(
            `*_Example : ${prefix + command} 212_*`
          );
        global.autoblocknumber = text;
        replygcXlicon(`*_Auto-Block number successfully changed to Country code ${text}_*`);
        break;
//=================================================//
      case "setantiforeign":
        if (!XeonTheCreator) return replygcXlicon(mess.owner);
        if (!text)
          return replygcXlicon(
            `*_Example : ${prefix + command} 212_*`
          );
        global.antiforeignnumber = text;
        replygcXlicon(`Anti-foreign number successfully changed to country code ${text}`);
        break;
//=================================================//
case "autoblock":
        if (!XeonTheCreator) return replygcXlicon(mess.owner);
        if (args.length < 1)
          return replygcXlicon(`*_Example ${prefix + command} on/off_*`);
        if (q == "on") {
          db.data.settings[botNumber].autoblocknum = true;
          replygcXlicon(`*_Successfully Changed Auto-Block To ${q}_*`);
        } else if (q == "off") {
          db.data.settings[botNumber].autoblocknum = false;
          replygcXlicon(`*_Successfully Changed Auto-Block To ${q}_*`);
        }
        break;
//=================================================//
      case "onlygc":
        if (!XeonTheCreator) return replygcXlicon(mess.owner);
        if (args.length < 1)
          return replygcXlicon(`*_Example ${prefix + command} on/off_*`);
        if (q == "on") {
          db.data.settings[botNumber].onlygrub = true;
          replygcXlicon(`*Successful, now not will only respond im groups*`);
        } else if (q == "off") {
          db.data.settings[botNumber].onlygrub = false;
          replygcXlicon(`*Successful, now bot will respond anywhere.*`);
        }
        break;
 //=================================================//
      case "onlypc":
        if (!XeonTheCreator) return replygcXlicon(mess.owner);
        if (args.length < 1)
          return replygcXlicon(`*_Example ${prefix + command} on/off_*`);
        if (q == "on") {
          db.data.settings[botNumber].onlypc = true;
          replygcXlicon(`*_Successfully Changed Only-Pc To ${q}_*`);
        } else if (q == "off") {
          db.data.settings[botNumber].onlypc = false;
          replygcXlicon(`*_Successfully Changed Only-Pc To ${q}_*`);
        }
        break;
//=================================================//
      case "private":
      case "self":
        {
          if (!XeonTheCreator) return replygcXlicon(mess.owner);
          XliconBotInc.public = false;
          replygcXlicon("*Successful in Changing To Private Usage*");
        }
        break;
//=================================================//
      case "public":
        {
          if (!XeonTheCreator) return replygcXlicon(mess.owner);
          XliconBotInc.public = true;
          replygcXlicon("*Successful in Changing To Public Usage*");
        }
        break;
//=================================================//
case "anticall":
        {
          if (!XeonTheCreator) return replygcXlicon(mess.owner);
          if (args.length < 1) return replygcXlicon("*_on/off?_*");
          if (args[0] === "on") {
            anticall = true;
            replygcXlicon(`${command} is enabled`);
          } else if (args[0] === "off") {
            anticall = false;
            replygcXlicon(`${command} is disabled`);
          }
        }
        break;
//=================================================//
case "join":
        try {
          if (!XeonTheCreator) return replygcXlicon(mess.owner);
          if (!text) return replygcXlicon("*_Enter Group Link!_*");
          if (!isUrl(args[0]) && !args[0].includes("whatsapp.com"))
            return replygcXlicon("*_Link Invalid!_*");
          let result = args[0].split("https://chat.whatsapp.com/")[1];
          XliconBotInc.groupAcceptInvite(result);
          await replygcXlicon(`*_Done_*`);
        } catch {
          replygcXlicon("*_Failed to join the Group_*");
        }
        break;
//=================================================//
      case "getsession":
        if (!XeonTheCreator) return replygcXlicon(mess.owner);
        replygcXlicon(
          "*_Wait a moment, currently retrieving your session file_*"
        );
        let sesi = fs.readFileSync("./session/creds.json");
        XliconBotInc.sendMessage(
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
//=================================================//
      case "ipbot":
      case "serverip":
        if (!XeonTheCreator) return replygcXlicon(mess.owner);
        var http = require("http");
        http.get(
          {
            host: "api.ipify.org",
            port: 80,
            path: "/",
          },
          function (resp) {
            resp.on("data", function (ip) {
              replygcXlicon("🔎 My public IP address is: " + ip);
            });
          }
        );
        break;
//=================================================//
      case "request":
      case "reportbug":
        {
          if (!text)
            return replygcXlicon(
              `Example : ${prefix + command} hi dev play command is not working`
            );
          textt = `*| REQUEST/BUG |*`;
          teks1 = `\n\n*User* : @${
            m.sender.split("@")[0]
          }\n*Request/Bug* : ${text}`;
          teks2 = `\n\n*Hii ${pushname},You request has been forwarded to my Owners*.\n*Please wait...*`;
          for (let i of owner) {
            XliconBotInc.sendMessage("254796180105@s.whatsapp.net",
              {
                text: textt + teks1,
                mentions: [m.sender],
              },
              {
                quoted: m,
              }
            );
          }
          XliconBotInc.sendMessage(
            m.chat,
            {
              text: textt + teks2 + teks1,
              mentions: [m.sender],
            },
            {
              quoted: m,
  });
        }
        break;
//=================================================//
      case "restart":
        if (!XeonTheCreator) return replygcXlicon(mess.owner);
        replygcXlicon(`*_Restarting will be completed in seconds_*`);
        await sleep(3000);
        process.exit();
        break;
//=================================================//
   case "broadcast":
        {
          if (!XeonTheCreator) return replygcXlicon(mess.owner);
          if (!text) return replygcXlicon("*_Text?_*");
          let teksnya = `${text}\n\n\n\nDate: ${xdate} ${xtime}`;
          for (let i of Object.keys(global.db.data.users)) {
            await sleep(1500);
            if (/image/.test(mime)) {
              var media = await quoted.download();
              await XliconBotInc.sendMessage(i, {
                image: media,
                caption: teksnya,
              });
            } else if (/video/.test(mime)) {
              var media = await quoted.download();
              await XliconBotInc.sendMessage(i, {
                video: media,
                caption: teksnya,
              });
            } else if (text) {
              await XliconBotInc.sendMessage(i, {
                text: teksnya,
              });
            }
          }
          replygcXlicon(
            `*_Success ${command} To ${
              Object.keys(global.db.data.users).length
            } Users_*`
          );
        }
        break;
//=================================================//
      case "pushcontact":
        {
          if (!XeonTheCreator) return replygcXlicon(mess.owner);
          if (!m.isGroup)
            return replygcXlicon(`*_The feature works only in group_*`);
          if (!text) return replygcXlicon(`*_text?_*`);
          let mem = await participants
            .filter((v) => v.id.endsWith(".net"))
            .map((v) => v.id);
          replygcXlicon(`*_Success in pushing the message to contacts_*`);
          for (let pler of mem) {
            XliconBotInc.sendMessage(pler, { text: q });
          }
          replygcXlicon(`*_Done_*`);
        }
        break;
//=================================================//
      case "block":
        {
          if (!XeonTheCreator) return replygcXlicon(mess.owner);
          let users = m.mentionedJid[0]
            ? m.mentionedJid[0]
            : m.quoted
            ? m.quoted.sender
            : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
          await XliconBotInc.updateBlockStatus(users, "block");
          await replygcXlicon(`*_Done_*`);
        }
        break;
//=================================================//
      case "unblock":
        {
          if (!XeonTheCreator) return replygcXlicon(mess.owner);
          let users = m.mentionedJid[0]
            ? m.mentionedJid[0]
            : m.quoted
            ? m.quoted.sender
            : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
          await XliconBotInc.updateBlockStatus(users, "unblock");
          await replygcXlicon(`*_Done_*`);
        }
        break;
//=================================================//
      case "resethit":
        {
          if (!XeonTheCreator) return replygcXlicon(mess.owner);
          global.db.data.settings[botNumber].totalhit = 0;
          replygcXlicon(mess.done);
        }
        break;
//=================================================//
      case "setreply":
        {
          if (!XeonTheCreator) return replygcXlicon(mess.owner);
          if (!text)
            return replygcXlicon(
              `*_There are 3 reply(v1,v2,v3)_*\n*_Please select 1\nExample ${
                prefix + command
              } v1_*`
            );
          if (text.startsWith("v")) {
            typereply = text;
            replygcXlicon(mess.done);
          } else {
            replygcXlicon(
              `*_There are 3 reply(v1,v2,v3)_*\n*_Please select 1\nExample ${
                prefix + command
              } v1_*`
            );
          }
        }
        break;
//=================================================//
      case "posttextstatus":
        {
          if (!XeonTheCreator) return replygcXlicon(mess.owner);
          if (!q) return replygcXlicon("*_Text?_*");
          await XliconBotInc.sendMessage(
            "status@broadcast",
            { text: q },
            {
              backgroundColor: "#FF000000",
              font: 3,
              statusJidList: Object.keys(global.db.data.users),
            }
          );
          replygcXlicon(mess.done);
        }
        break;
//=================================================//
      case "postvideostatus":
        {
          if (!XeonTheCreator) return replygcXlicon(mess.owner);
          if (/video/.test(mime)) {
            var videosw = await XliconBotInc.downloadAndSaveMediaMessage(
              quoted
            );
            await XliconBotInc.sendMessage(
              "status@broadcast",
              {
                video: {
                  url: videosw,
                },
                caption: q ? q : "",
              },
              { statusJidList: Object.keys(global.db.data.users) }
            );
            await replygcXlicon(mess.done);
          } else {
            replygcXlicon("*_Reply to video_*");
          }
        }
        break;
//=================================================//
      case "postimagestatus":
        {
          if (!XeonTheCreator) return replygcXlicon(mess.owner);
          if (/image/.test(mime)) {
            var imagesw = await XliconBotInc.downloadAndSaveMediaMessage(
              quoted
            );
            await XliconBotInc.sendMessage(
              "status@broadcast",
              {
                image: {
                  url: imagesw,
                },
                caption: q ? q : "",
              },
              { statusJidList: Object.keys(global.db.data.users) }
            );
            await replygcXlicon(mess.done);
          } else {
            replygcXlicon("*_Reply to image_*");
          }
        }
        break;
//=================================================//
      case "postaudiostatus":
        {
          if (!XeonTheCreator) return replygcXlicon(mess.owner);
          if (/audio/.test(mime)) {
            var audiosw = await XliconBotInc.downloadAndSaveMediaMessage(
              quoted
            );
            await XliconBotInc.sendMessage(
              "status@broadcast",
              {
                audio: {
                  url: audiosw,
                },
                mimetype: "audio/mp4",
                ptt: true,
              },
              {
                backgroundColor: "#FF000000",
                statusJidList: Object.keys(global.db.data.users),
              }
            );
            await replygcXlicon(mess.done);
          } else {
            replygcXlicon("*_Reply to audio_*");
          }
        }
        break;
//=================================================//
      case "addpremium":
        if (!XeonTheCreator) return replygcXlicon(mess.owner);
        if (args.length < 2)
          return replygcXlicon(
            `*_Usage ${prefix + command} @tag time\n${
              prefix + command
            } number time\n\nExample : ${prefix + command} @tag 30d_*`
          );
        if (m.mentionedJid.length !== 0) {
          for (let i = 0; i < m.mentionedJid.length; i++) {
            addPremiumUser(m.mentionedJid[0], args[1], premium);
          }
          replygcXlicon("*_Premium Success_*");
        } else {
          addPremiumUser(args[0] + "@s.whatsapp.net", args[1], premium);
          replygcXlicon("*_Premium Success_*");
        }
        break;
//=================================================//
      case "delpremium":
        if (!XeonTheCreator) return replygcXlicon(mess.owner);
        if (args.length < 1)
          return replygcXlicon(
            `*_Usage ${prefix + command} @tag\n${
              prefix + command
            } number\n\nExample : ${prefix + command} 916909137213_*`
          );
        if (m.mentionedJid.length !== 0) {
          for (let i = 0; i < m.mentionedJid.length; i++) {
            premium.splice(getPremiumPosition(m.mentionedJid[i], premium), 1);
            fs.writeFileSync(
              "./src/data/role/premium.json",
              JSON.stringify(premium)
            );
          }
          replygcXlicon("*_Delete Success_*");
        } else {
          premium.splice(
            getPremiumPosition(args[0] + "@s.whatsapp.net", premium),
            1
          );
          fs.writeFileSync(
            "./src/data/role/premium.json",
            JSON.stringify(premium)
          );
          replygcXlicon("*_Delete Success_*");
        }
        break;
//=================================================//
      case "listpremium":
        {
          if (!XeonTheCreator) return replygcXlicon(mess.owner);
          let data = require("./src/data/role/premium.json");
          let txt = `*------「 LIST PREMIUM 」------*\n\n`;
          for (let x of data) {
            txt += `Number : ${x.id}\n`;
            txt += `Expire In: ${x.expired} ms\n`;
            XliconBotInc.sendMessage(
              m.chat,
              {
                text: txt,
                mentions: x,
              },
              {
                quoted: m,
              }
            );
          }
        }
        break;
//=================================================//
      case "addowner":
        if (!XeonTheCreator) return replygcXlicon(mess.owner);
        if (!args[0])
          return replygcXlicon(
            `*_Use ${prefix + command} number\nExample ${
              prefix + command
            } ${ownernumber}_*`
          );
        bnnd = q.split("|")[0].replace(/[^0-9]/g, "");
        let ceknye = await XliconBotInc.onWhatsApp(bnnd);
        if (ceknye.length == 0)
          return replygcXlicon(
            `*_Enter A Valid And Registered Number On WhatsApp!!!_*`
          );
        owner.push(bnnd);
        fs.writeFileSync("./src/data/role/owner.json", JSON.stringify(owner));
        replygcXlicon(`*_Number ${bnnd} Has Become An Owner!!!_*`);
        break;
//=================================================//
      case "delowner":
        if (!XeonTheCreator) return replygcXlicon(mess.owner);
        if (!args[0])
          return replygcXlicon(
            `*_Use ${prefix + command} nomor\nExample ${
              prefix + command
            } 916909137213_*`
          );
        ya = q.split("|")[0].replace(/[^0-9]/g, "");
        unp = owner.indexOf(ya);
        owner.splice(unp, 1);
        fs.writeFileSync("./src/data/role/owner.json", JSON.stringify(owner));
        replygcXlicon(
          `*_The Number ${ya} Has been deleted from owner list by the owner!!!_*`
        );
        break;
//=================================================//
      case "listowner":
        {
          let teks = "┌──⭓「 *List Owner* 」\n│\n";
          for (let x of owner) {
            teks += `│⭔ ${x}\n`;
          }
          teks += `│\n└────────────⭓\n\n*Total : ${owner.length}*`;
          replygcXlicon(teks);
        }
        break;
//=================================================//
      case "delsession":
        {
          if (!XeonTheCreator) return replygcXlicon(mess.owner);
          fs.readdir("./session", async function (err, files) {
            if (err) {
              console.log("Unable to scan directory: " + err);
              return replygcXlicon("Unable to scan directory: " + err);
            }
            let filteredArray = await files.filter(
              (item) =>
                item.startsWith("pre-key") ||
                item.startsWith("sender-key") ||
                item.startsWith("session-") ||
                item.startsWith("app-state")
            );
            console.log(filteredArray.length);
            let teks = `Detected ${filteredArray.length} junk files\n\n`;
            if (filteredArray.length == 0) return replygcXlicon(teks);
            filteredArray.map(function (e, i) {
              teks += i + 1 + `. ${e}\n`;
            });
            replygcXlicon(teks);
            await sleep(2000);
            replygcXlicon("*_Deleting junk files..._*");
            await filteredArray.forEach(function (file) {
              fs.unlinkSync(`./session/${file}`);
            });
            await sleep(2000);
            replygcXlicon(
              "*_Successfully deleted all the trash in the session folder_*"
            );
          });
        }
        break;
//=================================================//
      case "setprefix":
        if (!XeonTheCreator) return replygcXlicon(mess.owner);
        if (!text)
          return replygcXlicon(
            `*_Example : ${prefix + command} ._*`
          );
        global.xprefix = text;
        replygcXlicon(`*_Prefix successfully changed to ${text}_*`);
        break;
//=================================================//
      case "setprofilepic":
        if (!XeonTheCreator) return replygcXlicon(mess.owner);
        if (!quoted)
          return replygcXlicon(
            `*_Send/Reply Image With Caption ${prefix + command}_*`
          );
        if (!/image/.test(mime))
          return replygcXlicon(
            `*_Send/Reply Image With Caption ${prefix + command}_*`
          );
        if (/webp/.test(mime))
          return replygcXlicon(
            `*_Send/Reply Image With Caption ${prefix + command}_*`
          );
        var medis = await XliconBotInc.downloadAndSaveMediaMessage(
          quoted,
          "ppbot.jpeg"
        );
        if (args[0] == "full") {
          var { img } = await generateProfilePicture(medis);
          await XliconBotInc.query({
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
          replygcXlicon(mess.done);
        } else {
          var memeg = await XliconBotInc.updateProfilePicture(botNumber, {
            url: medis,
          });
          fs.unlinkSync(medis);
          replygcXlicon(mess.done);
        }
        break;
//=================================================//
      case "leave":
      case "leavegc":
        if (!XeonTheCreator) return replygcXlicon(mess.owner);
        if (!m.isGroup) return replygcXlicon(mess.group);
        replygcXlicon("*_Bye Everyone 🥺_*");
        await XliconBotInc.groupLeave(m.chat);
        break;
//=================================================//
  case "resetuser":
        {
          if (!XeonTheCreator) return replygcXlicon(mess.owner);
          let totalusernya = db.data.users[0];
          replygcXlicon(
            `*_Succesfully Deleted ${totalusernya} Users in Database_*`
          );
          db.data.users = [];
        }
        break;
//=================================================//
      case "creategroup":
        {
          if (!XeonTheCreator) return replygcXlicon(mess.owner);
          if (!args.join(" "))
            return replygcXlicon(`Use ${prefix + command} groupname`);
          try {
            let cret = await XliconBotInc.groupCreate(args.join(" "), []);
            let response = await XliconBotInc.groupInviteCode(cret.id);
            const teksop = `     「 Create Group 」

▸ Name : ${cret.subject}
▸ Owner : @${cret.owner.split("@")[0]}
▸ Creation : ${moment(cret.creation * 1000)
              .tz("Africa/Nairobi")
              .format("DD/MM/YYYY HH:mm:ss")}

https://chat.whatsapp.com/${response}`;
            XliconBotInc.sendMessage(
              m.chat,
              {
                text: teksop,
                mentions: await XliconBotInc.parseMention(teksop),
              },
              { quoted: m }
            );
          } catch {
            replygcXlicon(`*_Error_*`);
          }
        }
        break;
//=================================================//
      case "setbio":
        {
          if (!XeonTheCreator) return replygcXlicon(mess.owner);
          if (!text)
            return replygcXlicon(
              `Where is the text?\nExample: ${prefix + command} 𝐗𝐏𝐋𝐎𝐀𝐃𝐄𝐑 ᵇʸ Tყʅσɾ`
            );
          await XliconBotInc.updateProfileStatus(text);
          replygcXlicon(`*_Success in changing the bio of bot's number_*`);
        }
        break;
//=================================================//
  case "delprofilepic":
        {
          if (!XeonTheCreator) return replygcXlicon(mess.owner);
          await XliconBotInc.removeProfilePicture(XliconBotInc.user.id);
          replygcXlicon(`*_Success in deleting bot's profile picture_*`);
        }
        break;
//=================================================//
case "setfullpp":
case "setfullppbot":
{
if (!XeonTheCreator) return replygcXlicon(mess.owner);
if(m.quoted){
const media = await XliconBotInc.downloadAndSaveMediaMessage(quoted)
const { img } = await generateProfilePicture(media)
await XliconBotInc.query({ tag: 'iq',  attrs: { to: botNumber, type:'set', xmlns: 'w:profile:picture'}, content: [{ tag: 'picture', attrs: { type: 'image' }, content: img }]})   
await replygcXlicon("Successful")
} else replygcXlicon("Reply to image")
}
break;
//=================================================//
case "getcase":
        if (!XeonTheCreator) return replygcXlicon(mess.owner);
        try {
          const getCase = (cases) => {
            return (
              "case" +
              `"${cases}"` +
              fs
                .readFileSync("Xploader.js")
                .toString()
                .split("case '" + cases + "'")[1]
                .split("break")[0] +
              "break"
            );
          };
          replygcXlicon(`${getCase(q)}`);
        } catch {
          replygcXlicon(`case ${q} not found!`);
        }
        break;
//=================================================//
      case "delete":
      case "del":
        {
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
          XliconBotInc.sendMessage(m.chat, { delete: key });
        }
        break;
//=====GROUP MENU CMDS===========================//
case "antibot":
        {
          if (!m.isGroup) return replygcXlicon(mess.group);
          if (!isBotAdmins) return replygcXlicon(mess.admin);
          if (!isAdmins && !XeonTheCreator) return replygcXlicon(mess.notadmin);
          if (args.length < 1) return replygcXlicon("*_on/off?_*");
          if (args[0] === "on") {
            db.data.chats[from].antibot = true;
            replygcXlicon(`${command} is enabled`);
          } else if (args[0] === "off") {
            db.data.chats[from].antibot = false;
            replygcXlicon(`${command} is disabled`);
          }
        }
        break;
//=================================================//
      case "antiviewonce":
        {
          if (!m.isGroup) return replygcXlicon(mess.group);
          if (!isBotAdmins) return replygcXlicon(mess.admin);
          if (!isAdmins && !XeonTheCreator) return replygcXlicon(mess.notadmin);
          if (args.length < 1) return replygcXlicon("*_on/off?_*");
          if (args[0] === "on") {
            db.data.chats[from].antiviewonce = true;
            replygcXlicon(`${command} is enabled`);
          } else if (args[0] === "off") {
            db.data.chats[from].antiviewonce = false;
            replygcXlicon(`${command} is disabled`);
          }
        }
        break;
//=================================================//
      case "antimedia":
        {
          if (!m.isGroup) return replygcXlicon(mess.group);
          if (!isBotAdmins) return replygcXlicon(mess.admin);
          if (!isAdmins && !XeonTheCreator) return replygcXlicon(mess.notadmin);
          if (args.length < 1) return replygcXlicon("*_on/off?_*");
          if (args[0] === "on") {
            db.data.chats[from].antimedia = true;
            replygcXlicon(`${command} is enabled`);
          } else if (args[0] === "off") {
            db.data.chats[from].antimedia = false;
            replygcXlicon(`${command} is disabled`);
          }
        }
        break;
//=================================================//
      case "antidocument":
        {
          if (!m.isGroup) return replygcXlicon(mess.group);
          if (!isBotAdmins) return replygcXlicon(mess.admin);
          if (!isAdmins && !XeonTheCreator) return replygcXlicon(mess.notadmin);
          if (args.length < 1) return replygcXlicon("*_on/off?_*");
          if (args[0] === "on") {
            db.data.chats[from].antidocument = true;
            replygcXlicon(`${command} is enabled`);
          } else if (args[0] === "off") {
            db.data.chats[from].antidocument = false;
            replygcXlicon(`${command} is disabled`);
          }
        }
        break;
//=================================================//
      case "anticontact":
        {
          if (!m.isGroup) return replygcXlicon(mess.group);
          if (!isBotAdmins) return replygcXlicon(mess.admin);
          if (!isAdmins && !XeonTheCreator) return replygcXlicon(mess.notadmin);
          if (args.length < 1) return replygcXlicon("*_on/off?_*");
          if (args[0] === "on") {
            db.data.chats[from].anticontact = true;
            replygcXlicon(`${command} is enabled`);
          } else if (args[0] === "off") {
            db.data.chats[from].anticontact = false;
            replygcXlicon(`${command} is disabled`);
          }
        }
        break;
//=================================================//
      case "antilocation":
        {
          if (!m.isGroup) return replygcXlicon(mess.group);
          if (!isBotAdmins) return replygcXlicon(mess.admin);
          if (!isAdmins && !XeonTheCreator) return replygcXlicon(mess.notadmin);
          if (args.length < 1) return replygcXlicon("*_on/off?_*");
          if (args[0] === "on") {
            db.data.chats[from].antilocation = true;
            replygcXlicon(`${command} is enabled`);
          } else if (args[0] === "off") {
            db.data.chats[from].antilocation = false;
            replygcXlicon(`${command} is disabled`);
          }
        }
        break;
//=================================================//
      case "antilink":
        {
          if (!m.isGroup) return replygcXlicon(mess.group);
          if (!isBotAdmins) return replygcXlicon(mess.admin);
          if (!isAdmins && !XeonTheCreator) return replygcXlicon(mess.notadmin);
          if (args.length < 1) return replygcXlicon("*_on/off?_*");
          if (args[0] === "on") {
            db.data.chats[from].antilink = true;
            replygcXlicon(`${command} is enabled`);
          } else if (args[0] === "off") {
            db.data.chats[from].antilink = false;
            replygcXlicon(`${command} is disabled`);
          }
        }
        break;
//=================================================//
      case "antilinkgc":
        {
          if (!m.isGroup) return replygcXlicon(mess.group);
          if (!isBotAdmins) return replygcXlicon(mess.admin);
          if (!isAdmins && !XeonTheCreator) return replygcXlicon(mess.notadmin);
          if (args.length < 1) return replygcXlicon("*_on/off?_*");
          if (args[0] === "on") {
            db.data.chats[from].antilinkgc = true;
            replygcXlicon(`${command} is enabled`);
          } else if (args[0] === "off") {
            db.data.chats[from].antilinkgc = false;
            replygcXlicon(`${command} is disabled`);
          }
        }
        break;
//=================================================//
      case "welcome":
      case "left":
        {
          if (!m.isGroup) return replygcXlicon(mess.group);
          if (!isAdmins && !XeonTheCreator) return replygcXlicon(mess.notadmin);
          if (args.length < 1) return replygcXlicon("*_on/off?_*");
          if (args[0] === "on") {
            welcome = true;
            replygcXlicon(`${command} is enabled`);
          } else if (args[0] === "off") {
            welcome = false;
            replygcXlicon(`${command} is disabled`);
          }
        }
        break;
//=================================================//
      case "adminevent":
        {
          if (!m.isGroup) return replygcXlicon(mess.group);
          if (!isAdmins && !XeonTheCreator) return replygcXlicon(mess.notadmin);
          if (args.length < 1) return replygcXlicon("*_on/off?_*");
          if (args[0] === "on") {
            adminevent = true;
            replygcXlicon(`${command} is enabled`);
          } else if (args[0] === "off") {
            adminevent = false;
            replygcXlicon(`${command} is disabled`);
          }
        }
        break;
//=================================================//
      case "groupevent":
        {
          if (!m.isGroup) return replygcXlicon(mess.group);
          if (!isAdmins && !XeonTheCreator) return replygcXlicon(mess.notadmin);
          if (args.length < 1) return replygcXlicon("*_on/off?_*");
          if (args[0] === "on") {
            groupevent = true;
            replygcXlicon(`${command} is enabled`);
          } else if (args[0] === "off") {
            groupevent = false;
            replygcXlicon(`${command} is disabled`);
          }
        }
        break;
//=================================================//
      case "invite":
        {
          if (!m.isGroup) return replygcXlicon(mess.group);
          if (!isBotAdmins) return replygcXlicon(mess.admin);
          if (!text)
            return replygcXlicon(
              `*_Enter the number you want to invite to the group_*\n\nExample :\n*${prefix + command}* 254796180105`
            );
          if (text.includes("+"))
            return replygcXlicon(`*_Enter the number together without_* *+*`);
          if (isNaN(text))
            return replygcXlicon(
              `*_Enter only the numbers plus your country code without spaces_*`
            );
          let group = m.chat;
          let link =
            "https://chat.whatsapp.com/" +
            (await XliconBotInc.groupInviteCode(group));
          await XliconBotInc.sendMessage(text + "@s.whatsapp.net", {
            text: `≡ *GROUP INVITATION*\n\nA user invites you to join this group \n\n${link}`,
            mentions: [m.sender],
          });
          replygcXlicon(` *_An invite link is sent to the user_* `);
        }
        break;
//=================================================//
      case "closetime":
        if (!m.isGroup) return replygcXlicon(mess.group);
        if (!isAdmins && !XeonTheCreator) return replygcXlicon(mess.notadmin);
        if (!isBotAdmins) return replygcXlicon(mess.admin);
        if (args[1] == "second") {
          var timer = args[0] * `1000`;
        } else if (args[1] == "minute") {
          var timer = args[0] * `60000`;
        } else if (args[1] == "hour") {
          var timer = args[0] * `3600000`;
        } else if (args[1] == "day") {
          var timer = args[0] * `86400000`;
        } else {
          return replygcXlicon(
            "*select:*\nsecond\nminute\nhour\n\n*Example*\n10 second"
          );
        }
        replygcXlicon(`Close time ${q} starting from now`);
        setTimeout(() => {
          var nomor = m.participant;
          const close = `*Close time* group closed by admin\nnow only admin can send messages`;
          XliconBotInc.groupSettingUpdate(m.chat, "announcement");
          replygcXlicon(close);
        }, timer);
        break;
//=================================================//
      case "opentime":
        if (!m.isGroup) return replygcXlicon(mess.group);
        if (!isAdmins && !XeonTheCreator) return replygcXlicon(mess.notadmin);
        if (!isBotAdmins) return replygcXlicon(mess.admin);
        if (args[1] == "second") {
          var timer = args[0] * `1000`;
        } else if (args[1] == "minute") {
          var timer = args[0] * `60000`;
        } else if (args[1] == "hour") {
          var timer = args[0] * `3600000`;
        } else if (args[1] == "day") {
          var timer = args[0] * `86400000`;
        } else {
          return replygcXlicon(
            "*select:*\nsecond\nminute\nhour\n\n*example*\n10 second"
          );
        }
        replygcXlicon(`Open time ${q} starting from now`);
        setTimeout(() => {
          var nomor = m.participant;
          const open = `*Open time* the group was opened by admin\n now members can send messages`;
          XliconBotInc.groupSettingUpdate(m.chat, "not_announcement");
          replygcXlicon(open);
        }, timer);
        break;
//=================================================//
      case "kick":
      case "remove":
        if (!isAdmins && !isGroupOwner && !XeonTheCreator)
          return replygcXlicon(mess.admin);
        if (!m.isGroup) return replygcXlicon(mess.group);
        if (!isAdmins && !isGroupOwner && !XeonTheCreator)
          return replygcXlicon(mess.admin);
        if (!isBotAdmins) return replygcXlicon(mess.admin);
        let blockwww = m.mentionedJid[0]
          ? m.mentionedJid[0]
          : m.quoted
          ? m.quoted.sender
          : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
        await XliconBotInc.groupParticipantsUpdate(
          m.chat,
          [blockwww],
          "remove"
        );
        replygcXlicon(mess.done);
        break;
//=================================================//
      case "getcontact":
        {
          if (!m.isGroup) return replygcXlicon(mess.group);
          if (!(isGroupAdmins || XeonTheCreator)) return replygcXlicon(mess.admin);
          xeonbigpp = await XliconBotInc.sendMessage(
            m.chat,
            {
              text: `\nGroup: *${groupMetadata.subject}*\nMember: *${participants.length}*`,
            },
            { quoted: m, ephemeralExpiration: 86400 }
          );
          await sleep(1000);
          XliconBotInc.sendContact(
            m.chat,
            participants.map((a) => a.id),
            xeonbigpp
          );
        }
        break;
//=================================================//
      case "savecontact":
        {
          if (!m.isGroup) return replygcXlicon(mess.group);
          if (!(isGroupAdmins || XeonTheCreator)) return replygcXlicon(mess.admin);
          let cmiggc = await XliconBotInc.groupMetadata(m.chat);
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
          replygcXlicon(
            "\nBe patient bro, saving... " +
              cmiggc.participants.length +
              " contact"
          );
          require("fs").writeFileSync(nmfilect, vcard.trim());
          await sleep(2000);
          XliconBotInc.sendMessage(
            m.chat,
            {
              document: require("fs").readFileSync(nmfilect),
              mimetype: "text/vcard",
              fileName: "Contact.vcf",
              caption:
                "\nSucceed\nGroup: *" +
                cmiggc.subject +
                "*\nContact: *" +
                cmiggc.participants.length +
                "*",
            },
            { ephemeralExpiration: 86400, quoted: m }
          );
          require("fs").unlinkSync(nmfilect);
        }
        break;
//=================================================//
      case "sendcontact":
        {
          if (!m.isGroup) return replygcXlicon(mess.group);
          if (!m.mentionedJid[0])
            return replygcXlicon(
              "\nUse like this\n Example:.sendcontact @tag|name"
            );
          let snTak = text.split(" ")[1] ? text.split(" ")[1] : "Contact";
          let snContact = {
            displayName: "Contact",
            contacts: [
              {
                displayName: snTak,
                vcard:
                  "BEGIN:VCARD\nVERSION:3.0\nN:;" +
                  snTak +
                  ";;;\nFN:" +
                  snTak +
                  "\nitem1.TEL;waid=" +
                  m.mentionedJid[0].split("@")[0] +
                  ":" +
                  m.mentionedJid[0].split("@")[0] +
                  "\nitem1.X-ABLabel:Mobile\nEND:VCARD",
              },
            ],
          };
          XliconBotInc.sendMessage(
            m.chat,
            { contacts: snContact },
            { ephemeralExpiration: 86400 }
          );
        }
        break;
//=================================================//
      case "contacttag":
        {
          if (!m.isGroup) return replygcXlicon(mess.group);
          if (!(isGroupAdmins || XeonTheCreator)) return replygcXlicon(mess.admin);
          if (!m.mentionedJid[0])
            return replygcXlicon(
              "\nUse like this\n Example:.contacttag @tag|name"
            );
          let sngTak = text.split(" ")[1] ? text.split(" ")[1] : "Contact";
          let sngContact = {
            displayName: "Contact",
            contacts: [
              {
                displayName: sngTak,
                vcard:
                  "BEGIN:VCARD\nVERSION:3.0\nN:;" +
                  sngTak +
                  ";;;\nFN:" +
                  sngTak +
                  "\nitem1.TEL;waid=" +
                  m.mentionedJid[0].split("@")[0] +
                  ":" +
                  m.mentionedJid[0].split("@")[0] +
                  "\nitem1.X-ABLabel:Mobile\nEND:VCARD",
              },
            ],
          };
          XliconBotInc.sendMessage(
            m.chat,
            { contacts: sngContact, mentions: participants.map((a) => a.id) },
            { ephemeralExpiration: 86400 }
          );
        }
        break;
//=================================================//
      case "add":
        if (!m.isGroup) return replygcXlicon(mess.group);
        if (!XeonTheCreator) return replygcXlicon(mess.owner);
        if (!isBotAdmins) return replygcXlicon(mess.admin);
        let blockwwww = m.quoted
          ? m.quoted.sender
          : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
        await XliconBotInc.groupParticipantsUpdate(m.chat, [blockwwww], "add");
        replygcXlicon(mess.done);
        break;
  //=================================================//
      case "promote":
        if (!m.isGroup) return replygcXlicon(mess.group);
        if (!isAdmins && !isGroupOwner && !XeonTheCreator)
          return replygcXlicon(mess.admin);
        if (!isBotAdmins) return replygcXlicon(mess.admin);
        let blockwwwww = m.mentionedJid[0]
          ? m.mentionedJid[0]
          : m.quoted
          ? m.quoted.sender
          : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
        await XliconBotInc.groupParticipantsUpdate(
          m.chat,
          [blockwwwww],
          "promote"
        );
        replygcXlicon(mess.done);
        break;
//=================================================//
      case "demote":
        if (!m.isGroup) return replygcXlicon(mess.group);
        if (!isAdmins && !isGroupOwner && !XeonTheCreator)
          return replygcXlicon(mess.admin);
        if (!isBotAdmins) return replygcXlicon(mess.admin);
        let blockwwwwwa = m.mentionedJid[0]
          ? m.mentionedJid[0]
          : m.quoted
          ? m.quoted.sender
          : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
        await XliconBotInc.groupParticipantsUpdate(
          m.chat,
          [blockwwwwwa],
          "demote"
        );
        replygcXlicon(mess.done);
        break;
//=================================================//
      case "setgroupname":
        if (!m.isGroup) return replygcXlicon(mess.group);
        if (!isAdmins && !isGroupOwner && !XeonTheCreator)
          return replygcXlicon(mess.admin);
        if (!isBotAdmins) return replygcXlicon(mess.admin);
        if (!text) return replygcXlicon("*_Text ?_*");
        await XliconBotInc.groupUpdateSubject(m.chat, text);
        replygcXlicon(mess.done);
        break;
//=================================================//
      case "userjid":
        {
          if (!XeonTheCreator) return replygcXlicon(mess.owner);
          const groupMetadata = m.isGroup
            ? await XliconBotInc.groupMetadata(m.chat).catch((e) => {})
            : "";
          const participants = m.isGroup
            ? await groupMetadata.participants
            : "";
          let textt = `_Here is jid address of all users of_\n *- ${groupMetadata.subject}*\n\n`;
          for (let mem of participants) {
            textt += `${themeemoji} ${mem.id}\n`;
          }
          replygcXlicon(textt);
        }
        break;
//=================================================//
      case "delppgroup":
        {
          if (!m.isGroup) return replygcXlicon(mess.group);
          if (!isAdmins && !XeonTheCreator) return replygcXlicon(mess.notadmin);
          if (!isBotAdmins) return replygcXlicon(mess.admin);
          await XliconBotInc.removeProfilePicture(from);
        }
        break;
//=================================================//
     case "setppgroup":
        if (!m.isGroup) return replygcXlicon(mess.group);
        if (!isAdmins) return replygcXlicon(mess.admin);
        if (!isBotAdmins) return replygcXlicon(mess.admin);
        if (!quoted)
          return replygcXlicon(
            `Send/Reply Image With Caption ${prefix + command}`
          );
        if (!/image/.test(mime))
          return replygcXlicon(
            `Send/Reply Image Caption Caption ${prefix + command}`
          );
        if (/webp/.test(mime))
          return replygcXlicon(
            `Send/Reply Image With Caption ${prefix + command}`
          );
        var medis = await XliconBotInc.downloadAndSaveMediaMessage(
          quoted,
          "ppbot.jpeg"
        );
        if (args[0] == "full") {
          var { img } = await generateProfilePicture(medis);
          await XliconBotInc.query({
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
          replygcXlicon(mess.done);
        } else {
          var memeg = await XliconBotInc.updateProfilePicture(m.chat, {
            url: medis,
          });
          fs.unlinkSync(medis);
          replygcXlicon(mess.done);
        }
        break;
//=================================================//
      case "tagall":
      case "tag":
        if (!m.isGroup) return replygcXlicon(mess.group);
        if (!isAdmins && !isGroupOwner && !XeonTheCreator)
          return replygcXlicon(mess.admin);
        if (!isBotAdmins) return replygcXlicon(mess.admin);
        let me = m.sender;
        let teks = `╚»˙·٠${themeemoji}●♥ Tag All ♥●${themeemoji}٠·˙«╝\n😶 *Tagged by :*  @${
          me.split("@")[0]
        }\n🌿 *Message : ${q ? q : "no message"}*\n\n`;
        for (let mem of participants) {
          teks += `${themeemoji} @${mem.id.split("@")[0]}\n`;
        }
        XliconBotInc.sendMessage(
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
//=================================================//
      case "hidetag":
        if (!m.isGroup) return replygcXlicon(mess.group);
        if (!isAdmins && !isGroupOwner && !XeonTheCreator)
          return replygcXlicon(mess.admin);
        if (!isBotAdmins) return replygcXlicon(mess.admin);
        XliconBotInc.sendMessage(
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
//=================================================//
      case "totag":
        if (!m.isGroup) return replygcXlicon(mess.group);
        if (!isBotAdmins) return replygcXlicon(mess.admin);
        if (!isAdmins) return replygcXlicon(mess.admin);
        if (!m.quoted)
          return replygcXlicon(`Reply media with caption ${prefix + command}`);
        XliconBotInc.sendMessage(m.chat, {
          forward: m.quoted.fakeObj,
          mentions: participants.map((a) => a.id),
        });
        break;
//=================================================//
      case "groupmode":
        if (!m.isGroup) return replygcXlicon(mess.group);
        if (!isAdmins && !isGroupOwner && !XeonTheCreator)
          return replygcXlicon(mess.admin);
        if (!isBotAdmins) return replygcXlicon(mess.admin);
        if (args[0] === "close") {
          await XliconBotInc.groupSettingUpdate(m.chat, "announcement").then(
            (res) => replygcXlicon(`Success Closing Group`)
          );
        } else if (args[0] === "open") {
          await XliconBotInc.groupSettingUpdate(
            m.chat,
            "not_announcement"
          ).then((res) => replygcXlicon(`Success Opening Group`));
        } else {
          replygcXlicon(
            `Mode ${command}\n\n\nUse ${prefix + command}open/close`
          );
        }
        break;
//=================================================//
      case "editinfo":
        if (!m.isGroup) return replygcXlicon(mess.group);
        if (!isAdmins && !isGroupOwner && !XeonTheCreator)
          return replygcXlicon(mess.admin);
        if (!isBotAdmins) return replygcXlicon(mess.admin);
        if (args[0] === "open") {
          await XliconBotInc.groupSettingUpdate(m.chat, "unlocked").then(
            (res) => replygcXlicon(`Successfully Opened Edit Group Info`)
          );
        } else if (args[0] === "close") {
          await XliconBotInc.groupSettingUpdate(m.chat, "locked").then((res) =>
            replygcXlicon(`Successfully Closed Edit Group Info`)
          );
        } else {
          replygcXlicon(`Mode ${command}\n\n\nType ${prefix + command}on/off`);
        }
        break;
//=================================================//
      case "linkgc":
      case "gclink":
      case "grouplink":
        if (!m.isGroup) return replygcXlicon(mess.group);
        if (!isAdmins && !isGroupOwner && !XeonTheCreator)
          return replygcXlicon(mess.admin);
        if (!isBotAdmins) return replygcXlicon(mess.admin);
        let response = await XliconBotInc.groupInviteCode(m.chat);
        XliconBotInc.sendText(
          m.chat,
          `👥 *GROUP LINK*\n\n📛 *Name :* ${
            groupMetadata.subject
          }\n\n👤 *Owner Grup :* ${
            groupMetadata.owner !== undefined
              ? "+" + groupMetadata.owner.split`@`[0]
              : "Not known"
          }\n\n🌱 *ID :* ${
            groupMetadata.id
          }\n\n🔗 *Chat Link :* https://chat.whatsapp.com/${response}\n👥 *Member :* ${
            groupMetadata.participants.length
          }\n`,
          m,
          {
            detectLink: true,
          }
        );
        break;
//=================================================//
      case "getbio":
        {
          try {
            let who;
            if (m.isGroup)
              who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender;
            else who = m.quoted.sender ? m.quoted.sender : m.sender;
            let bio = await XliconBotInc.fetchStatus(who);
            replygcXlicon(bio.status);
          } catch {
            if (text)
              return replygcXlicon(
                `bio is private or you haven't replied to the person's message!`
              );
            else
              try {
                let who = m.quoted ? m.quoted.sender : m.sender;
                let bio = await XliconBotInc.fetchStatus(who);
                replygcXlicon(bio.status);
              } catch {
                return replygcXlicon(
                  `bio is private or you haven't replied to the person's message!`
                );
              }
          }
        }
        break;
//=================================================//
      case "resetlink":
        if (!m.isGroup) return replygcXlicon(mess.group);
        if (!isAdmins && !isGroupOwner && !XeonTheCreator)
          return replygcXlicon(mess.admin);
        if (!isBotAdmins) return replygcXlicon(mess.admin);
        await XliconBotInc.groupRevokeInvite(m.chat).then((res) => {
          replygcXlicon(`Reset Success`);
        });
        break;
//=================================================//
      case "antibadword":
        {
          if (!m.isGroup) return replygcXlicon(mess.group);
          if (!isBotAdmins) return replygcXlicon(mess.admin);
          if (!isAdmins && !XeonTheCreator) return replygcXlicon(mess.notadmin);
          if (args.length < 1) return replygcXlicon("*_on/off?_*");
          if (args[0] === "on") {
            db.data.chats[from].badword = true;
            replygcXlicon(`${command} is enabled`);
          } else if (args[0] === "off") {
            db.data.chats[from].badword = false;
            replygcXlicon(`${commad} is disabled`);
          }
        }
        break;
//=================================================//
      case "react":
        {
          if (!XeonTheCreator) return replygcXlicon(mess.owner);
          reactionMessage = {
            react: {
              text: args[0],
              key: { remoteJid: m.chat, fromMe: true, id: quoted.id },
            },
          };
          XliconBotInc.sendMessage(m.chat, reactionMessage);
        }
        break;
//=================================================//
      case "nsfw":
        {
          if (!m.isGroup) return replygcXlicon(mess.group);
          if (!isBotAdmins) return replygcXlicon(mess.admin);
          if (!isAdmins && !XeonTheCreator) return replygcXlicon(mess.notadmin);
          if (args[0] === "on") {
            if (AntiNsfw) return replygcXlicon("*_Already activated_*");
            ntnsfw.push(from);
            fs.writeFileSync(
              "./src/data/function/nsfw.json",
              JSON.stringify(ntnsfw)
            );
            replygcXlicon("*_Success in turning on nsfw in this group_*");
            var groupe = await XliconBotInc.groupMetadata(from);
            var members = groupe["participants"];
            var mems = [];
            members.map(async (adm) => {
              mems.push(adm.id.replace("c.us", "s.whatsapp.net"));
            });
            XliconBotInc.sendMessage(
              from,
              {
                text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nNsfw(not safe for work) feature has been enabled in this group, which means one can access sexual graphics from the bot!`,
                contextInfo: { mentionedJid: mems },
              },
              { quoted: m }
            );
          } else if (args[0] === "off") {
            if (!AntiNsfw) return replygcXlicon("*_Already deactivated_*");
            let off = ntnsfw.indexOf(from);
            ntnsfw.splice(off, 1);
            fs.writeFileSync(
              "./src/data/function/nsfw.json",
              JSON.stringify(ntnsfw)
            );
            replygcXlicon("*_Success in turning off nsfw in this group_*");
          } else {
            await replygcXlicon(
              `*_Please Type The Option\n\nExample: ${
                prefix + command
              } on\nExample: ${
                prefix + command
              } off\n\non to enable\noff to disable_*`
            );
          }
        }
        break;
//=================================================//
      case "antiaudio":
        {
          if (!m.isGroup) return replygcXlicon(mess.group);
          if (!isBotAdmins) return replygcXlicon(mess.admin);
          if (!isAdmins && !XeonTheCreator) return replygcXlicon(mess.notadmin);
          if (args.length < 1) return replygcXlicon("*_on/off?_*");
          if (args[0] === "on") {
            db.data.chats[from].antiaudio = true;
            replygcXlicon(`${command} is enabled`);
          } else if (args[0] === "off") {
            db.data.chats[from].antiaudio = false;
            replygcXlicon(`${command} is disabled`);
          }
        }
        break;
//=================================================//
      case "antiforeign":
        {
          if (!m.isGroup) return replygcXlicon(mess.group);
          if (!isBotAdmins) return replygcXlicon(mess.admin);
          if (!isAdmins && !XeonTheCreator) return replygcXlicon(mess.notadmin);
          if (args.length < 1) return replygcXlicon("*_on/off?_*");
          if (args[0] === "on") {
            db.data.chats[m.chat].antiforeignnum = true;
            replygcXlicon(`${command} is enabled`);
          } else if (args[0] === "off") {
            db.data.chats[m.chat].antiforeignnum = false;
            replygcXlicon(`${command} is disabled`);
          }
        }
        break;
//=================================================//
      case "poll":
        {
          if (!XeonTheCreator) return replygcXlicon(mess.owner);
          let [poll, opt] = text.split("|");
          if (text.split("|") < 2)
            return await replygcXlicon(
              `Mention question and atleast 2 options\nExample: ${prefix}poll Who is best player?|Messi,Ronaldo,None...`
            );
          let options = [];
          for (let i of opt.split(",")) {
            options.push(i);
          }
          await XliconBotInc.sendMessage(m.chat, {
            poll: {
              name: poll,
              values: options,
            },
          });
        }
        break;
//=================================================//
      case "antipoll":
        {
          if (!m.isGroup) return replygcXlicon(mess.group);
          if (!isBotAdmins) return replygcXlicon(mess.admin);
          if (!isAdmins && !XeonTheCreator) return replygcXlicon(mess.notadmin);
          if (args.length < 1) return replygcXlicon("*_on/off?_*");
          if (args[0] === "on") {
            db.data.chats[from].antipoll = true;
            replygcXlicon(`${command} is enabled`);
          } else if (args[0] === "off") {
            db.data.chats[from].antipoll = false;
            replygcXlicon(`${command} is disabled`);
          }
        }
        break;
//=================================================//
      case "antisticker":
        {
          if (!m.isGroup) return replygcXlicon(mess.group);
          if (!isBotAdmins) return replygcXlicon(mess.admin);
          if (!isAdmins && !XeonTheCreator) return replygcXlicon(mess.notadmin);
          if (args.length < 1) return replygcXlicon("*_on/off?_*");
          if (args[0] === "on") {
            db.data.chats[from].antisticker = true;
            replygcXlicon(`${command} is enabled`);
          } else if (args[0] === "off") {
            db.data.chats[from].antisticker = false;
            replygcXlicon(`${command} is disabled`);
          }
        }
        break;
//=================================================//
      case "antiimage":
        {
          if (!m.isGroup) return replygcXlicon(mess.group);
          if (!isBotAdmins) return replygcXlicon(mess.admin);
          if (!isAdmins && !XeonTheCreator) return replygcXlicon(mess.notadmin);
          if (args.length < 1) return replygcXlicon("*_on/off?_*");
          if (args[0] === "on") {
            db.data.chats[from].antiimage = true;
            replygcXlicon(`${command} is enabled`);
          } else if (args[0] === "off") {
            db.data.chats[from].antiimage = false;
            replygcXlicon(`${command} is disabled`);
          }
        }
        break;
//=================================================//
      case "antivideo":
        {
          if (!m.isGroup) return replygcXlicon(mess.group);
          if (!isBotAdmins) return replygcXlicon(mess.admin);
          if (!isAdmins && !XeonTheCreator) return replygcXlicon(mess.notadmin);
          if (args.length < 1) return replygcXlicon("*_on/off?_*");
          if (args[0] === "on") {
            db.data.chats[from].antivideo = true;
            replygcXlicon(`${command} is enabled`);
          } else if (args[0] === "off") {
            db.data.chats[from].antivideo = false;
            replygcXlicon(`${command} is disabled`);
          }
        }
        break;
//=================================================//
      case "antivirus":
        {
          if (!m.isGroup) return replygcXlicon(mess.group);
          if (!isBotAdmins) return replygcXlicon(mess.admin);
          if (!isAdmins && !XeonTheCreator) return replygcXlicon(mess.notadmin);
          if (args.length < 1) return replygcXlicon("*_on/off?_*");
          if (args[0] === "on") {
            db.data.chats[from].antivirtex = true;
            replygcXlicon(`${command} is enabled`);
          } else if (args[0] === "off") {
            db.data.chats[from].antivirtex = false;
            replygcXlicon(`${command} is disabled`);
          }
        }
        break;
//=================================================//
case "ephemeral":
        {
          if (!m.isGroup) return replygcXlicon(mess.group);
          if (!isBotAdmins) return replygcXlicon(mess.admin);
          if (!isAdmins) return replygcXlicon(mess.notadmin);
          if (!text) return replygcXlicon("Enter the value enable/disable");
          if (args[0] === "on") {
            await XliconBotInc.sendMessage(m.chat, {
              disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL,
            });
            await replygcXlicon(`*_Done_*`);
          } else if (args[0] === "off") {
            await XliconBotInc.sendMessage(m.chat, {
              disappearingMessagesInChat: false,
            });
            await replygcXlicon(`*_Done_*`);
          }
        }
        break;
//=================================================//
case "setdesc":
        if (!m.isGroup) return replygcXlicon(mess.group);
        if (!isAdmins && !isGroupOwner && !XeonTheCreator)
          return replygcXlicon(mess.notadmin);
        if (!isBotAdmins) return replygcXlicon(mess.admin);
        if (!text) return replygcXlicon("*_Text ?_*");
        await XliconBotInc.groupUpdateDescription(m.chat, text);
        replygcXlicon(mess.done);
        break;
//=================================================//
      case "tagadmin":
      case "listadmin":
      case "admin":
        {
          if (!m.isGroup) return replygcXlicon(mess.group);
          const groupAdmins = participants.filter((p) => p.admin);
          const listAdmin = groupAdmins
            .map((v, i) => `${i + 1}. @${v.id.split("@")[0]}`)
            .join("\n");
          const owner =
            groupMetadata.owner ||
            groupAdmins.find((p) => p.admin === "superadmin")?.id ||
            m.chat.split`-`[0] + "@s.whatsapp.net";
          let text = `   
*Group Admins:*
${listAdmin}
`.trim();
          XliconBotInc.sendMessage(
            m.chat,
            { text: text, mentions: [...groupAdmins.map((v) => v.id), owner] },
            { quoted: fstatus }
          );
        }
        break;
//=====DOWNLOAD MENU CMDS=======================//
case "xmp3":
{
	if (!text) return replygcXlicon('Please provide a song name!');
	const randomReduction = Math.floor(Math.random() * 5) + 1;
	let search = await yts(text);
	let telaso = search.all[0].url;
   await replygcXlicon(`Please wait, downloading ${search.all[0].title} 📥...`);
	let kyuu = await fetchJson (`https://widipe.com/download/ytdl?url=${telaso}`)
await XliconBotInc.sendMessage(m.chat, {
 audio: {url: kyuu.result.mp3}, 
 mimetype: 'audio/mpeg',
 contextInfo: {
        externalAdReply: {
          title: botname,
          body: `${search.all[0].title}`,
          thumbnailUrl: `${search.all[0].thumbnail}`,
          sourceUrl: `${telaso}`,
          mediaType: 2,
          showAdAttribution: true,
          renderLargerThumbnail: false
        }
      }
    }, { quoted: m });
    XliconBotInc.sendMessage(m.chat, { react: { text: '✅', key: m.key }})
  }
break;
//=================================================//
case "play":
case "song":
   {
	if (!text) return replygcXlicon(`*Example*: ${prefix + command} Godzilla by Eminem`)
	const randomReduction = Math.floor(Math.random() * 5) + 1;
	let search = await yts(text);
	let telaso = search.all[0].url;
	let body = `‎ ‎ ‎ ‎ ‎ ‎ ──❖𝗫𝗣𝗟𝗢𝗔𝗗𝗘𝗥 𝗕𝗢𝗧❖─┈ 
> ‎ 
> ❂ *TITLE:*
> ${search.all[0].title}
> ‎ 
> ❂ *VIEWS:*
> ${search.all[0].views}
> ‎ 
> ❂ *DURATION:*
> ${search.all[0].timestamp}
> ‎ 
> ❂ *UPLOADED:*
> ${search.all[0].ago}
> ‎ 
> ❂ *URL:*
> ${telaso}
`;
let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
          message: {
              "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                  text: body
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                  text: "©𝐗𝐩𝐥𝐨𝐚𝐝𝐞𝐫𝐁𝐨𝐭"
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image: {url: search.all[0].thumbnail}}, { upload: XliconBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"MP3 AUDIO","id":"${prefix}xmp3 ${search.all[0].title}"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"AUDIO DOC","id":"${prefix}xmp3doc ${search.all[0].title}"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"MP4 VIDEO","id":"${prefix}xmp4 ${search.all[0].title}"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"VIDEO DOC","id":"${prefix}xmp4doc ${search.all[0].title}"}`
              }
                                  ],
                }),
                contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '254796180105@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
              }
              })
          }
        },
      }, { quoted: m })
      
      await XliconBotInc.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
        });
}
break;
//=================================================//
case "xmp3doc":
{
	if (!text) return replygcXlicon('Please provide a song name!');
	const randomReduction = Math.floor(Math.random() * 5) + 1;
	let search = await yts(text);
	let telaso = search.all[0].url;
 await replygcXlicon(`Please wait, downloading ${search.all[0].title} 📥...`);
	let kyuu = await fetchJson (`https://widipe.com/download/ytdl?url=${telaso}`)
await XliconBotInc.sendMessage(m.chat, {
  document: {url: kyuu.result.mp3},
mimetype: "audio/mp3",
 fileName: `${kyuu.result.title}.mp3`,
 contextInfo: {
        externalAdReply: {
          title: botname,
          body: `${search.all[0].title}`,
          thumbnailUrl: `${search.all[0].thumbnail}`,
          sourceUrl: `${telaso}`,
          mediaType: 2,
          showAdAttribution: true,
          renderLargerThumbnail: false
        }
      }
    }, { quoted: m });
    XliconBotInc.sendMessage(m.chat, { react: { text: '✅', key: m.key }})
  }
break;
//=================================================//
case "xmp4":
{
	if (!text) return replygcXlicon('Please provide a video name!');
	const randomReduction = Math.floor(Math.random() * 5) + 1;
	let search = await yts(text);
	let telaso = search.all[0].url;
 await replygcXlicon(`Please wait, downloading ${search.all[0].title} 📥...`);
	let kyuu = await fetchJson (`https://widipe.com/download/ytdl?url=${telaso}`)
await XliconBotInc.sendMessage(m.chat, {
 video: {url: kyuu.result.mp4}, 
 caption: `©𝐗𝐩𝐥𝐨𝐚𝐝𝐞𝐫𝐁𝐨𝐭` ,
 contextInfo: {
        externalAdReply: {
          title: botname,
          body: `${search.all[0].title}`,
          thumbnailUrl: `${search.all[0].thumbnail}`,
          sourceUrl: `${telaso}`,
          mediaType: 2,
          showAdAttribution: true,
          renderLargerThumbnail: false
        }
      }
    }, { quoted: m });
    XliconBotInc.sendMessage(m.chat, { react: { text: '✅', key: m.key }})
  }
break;
//=================================================//
case "xmp4doc":
{
	if (!text) return replygcXlicon('Please provide a video name!');
	const randomReduction = Math.floor(Math.random() * 5) + 1;
	let search = await yts(text);
	let telaso = search.all[0].url;
    await replygcXlicon(`Please wait, downloading ${search.all[0].title} 📥...`);
	let kyuu = await fetchJson (`https://widipe.com/download/ytdl?url=${telaso}`)
await XliconBotInc.sendMessage(m.chat, {
 document: {url: kyuu.result.mp4},
mimetype: "video/mp4",
 fileName: `${search.all[0].title}.mp4`,
 contextInfo: {
        externalAdReply: {
          title: botname,
          body: `${search.all[0].title}`,
          thumbnailUrl: `${search.all[0].thumbnail}`,
          sourceUrl: `${telaso}`,
          mediaType: 2,
          showAdAttribution: true,
          renderLargerThumbnail: false
        }
      }
    }, { quoted: m });
    XliconBotInc.sendMessage(m.chat, { react: { text: '✅', key: m.key }})
  }
break;
//=================================================//
      case "yts":
      case "ytsearch":
        {
          if (!text)
            return replygcXlicon(
              `Example : ${prefix + command} Eminem Godzilla`
            );
          let yts = require("yt-search");
          let search = await yts(text);
          let teks = "YouTube Search\n\n Result From " + text + "\n\n";
          let no = 1;
          for (let i of search.all) {
            teks += `❂ No : ${no++}\n❂ Type : ${
              i.type
            }\n❂ Video ID : ${i.videoId}\n❂ Title : ${
              i.title
            }\n❂ Views : ${i.views}\n❂ Duration : ${
              i.timestamp
            }\n❂ Uploaded : ${i.ago}\n❂ Url : ${
              i.url
            }\n\n─────────────────\n\n`;
          }
          XliconBotInc.sendMessage(
            m.chat,
            { image: { url: search.all[0].thumbnail }, caption: teks },
            { quoted: m }
          );
        }
        break;
//=================================================//
      case "gitclone":
        if (!args[0])
          return replygcXlicon(
            `Where is the link?\nExample :\n${prefix}${command} https://github.com/Dark-Xploit/XPLOADER-BOT`
          );
        if (!isUrl(args[0]))
          return replygcXlicon("Link invalid! Please provide a valid URL.");
        let regex1 =
          /(?:https|git)(?::\/\/|@)(www\.)?github\.com[\/:]([^\/:]+)\/(.+)/i;
        let [, , user, repo] = args[0].match(regex1) || [];
        if (!repo) {
          return replygcXlicon(
            "Invalid GitHub link format. Please double-check the provided link."
          );
        }
        repo = repo.replace(/.git$/, "");
        let url = `https://api.github.com/repos/${user}/${repo}/zipball`;
        let filename = (await fetch(url, { method: "HEAD" })).headers
          .get("content-disposition")
          .match(/attachment; filename=(.*)/)[1];
        XliconBotInc.sendMessage(
          m.chat,
          {
            document: { url: url },
            fileName: filename + ".zip",
            mimetype: "application/zip",
          },
          { quoted: m }
        ).catch((err) => replygcXlicon(mess.error));
        break;
//=================================================//
      case "fbdl":
      case "facebook":
        {
          if (!args[0]) {
            return replygcXlicon(
              `Please send the link of a Facebook video\n\nEXAMPLE :\n*${
                prefix + command
              }* https://fb.watch/pLLTM4AFrO/?mibextid=Nif5oz`
            );
          }
          const urlRegex =
            /^(?:https?:\/\/)?(?:www\.)?(?:facebook\.com|fb\.watch)\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i;
          if (!urlRegex.test(args[0])) {
            return replygcXlicon("Url invalid");
          }
          try {
            const result = await fg.fbdl(args[0]);
            const tex = `
        [ FACEBOOK DL ]
${themeemoji} Title: ${result.title}`;
            const response = await fetch(result.videoUrl);
            const arrayBuffer = await response.arrayBuffer();
            const videoBuffer = Buffer.from(arrayBuffer);
            XliconBotInc.sendMessage(
              m.chat,
              { video: videoBuffer, caption: tex },
              { quoted: m }
            );
          } catch (error) {
            replygcXlicon("Maybe private video!");
          }
        }
        break;
//=================================================//
case "ytmp3":
{
	if (!text) return replygcXlicon('Please provide a valid  YouTube link!');
	let urls = text.match(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch\?v=|v\/|embed\/|shorts\/|playlist\?list=)?)([a-zA-Z0-9_-]{11})/gi);
	if (!urls) return replygcXlicon('Seems like your message does not contain a valid YouTube link');
	let urlIndex = parseInt(text) - 1;
	if (urlIndex < 0 || urlIndex >= urls.length)
		return replygcXlicon('Invalid URL index');
	await downloadXMp3(urls);
}
break;
//=================================================//
case "ytmp4":
{
	if (!text) return replygcXlicon('Please provide a valid  YouTube link!');
	let urls = text.match(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch\?v=|v\/|embed\/|shorts\/|playlist\?list=)?)([a-zA-Z0-9_-]{11})/gi);
	if (!urls) return replygcXlicon('Seems like your message does not contain a valid YouTube link');
	let urlIndex = parseInt(text) - 1;
	if (urlIndex < 0 || urlIndex >= urls.length)
		return replygcXlicon('Invalid URL index');
	await downloadXMp4(urls);
}
break;
//=================================================//
case "video":
{
	if (!text) return replygcXlicon('Please provide a video name!');
	const randomReduction = Math.floor(Math.random() * 5) + 1;
	let search = await yts(text);
	let telaso = search.all[0].url;
	let kyuu = await fetchJson (`https://widipe.com/download/ytdl?url=${telaso}`)
await XliconBotInc.sendMessage(m.chat, {
 video: {url: kyuu.result.mp4}, 
 caption: `©𝐗𝐩𝐥𝐨𝐚𝐝𝐞𝐫𝐁𝐨𝐭` ,
 contextInfo: {
        externalAdReply: {
          title: botname,
          body: `${search.all[0].title}`,
          thumbnailUrl: `${search.all[0].thumbnail}`,
          sourceUrl: `${telaso}`,
          mediaType: 2,
          showAdAttribution: true,
          renderLargerThumbnail: false
        }
      }
    }, { quoted: m });
    XliconBotInc.sendMessage(m.chat, { react: { text: '✅', key: m.key }})
  }
break;
//=================================================//
case "tiktok":
case "tikdl":
case "tiktokvideo":
{
	if (!args[0]) return replygcXlicon('Please provide a TikTok video url!');
	let kyuu = await fetchJson (`https://widipe.com/download/tikdl?url=${args[0]}`)
await XliconBotInc.sendMessage(
              m.chat,
              {
                caption: `©𝐗𝐩𝐥𝐨𝐚𝐝𝐞𝐫𝐁𝐨𝐭`,
                video: { url: kyuu.result.video },
                fileName: "video.mp4",
                mimetype: "video/mp4",
              },
              { quoted: m });
          }
        break;
//=================================================//

//=================================================//
      case "apk":
      case "apkdl":
        {
          if (!text) return replygcXlicon("What apk do you wanna download?");
        let kyuu = await fetchJson (`https://bk9.fun/search/apk?q=${text}`);
        let tylor = await fetchJson (`https://bk9.fun/download/apk?id=${kyuu.BK9[0].id}`);
         await XliconBotInc.sendMessage(
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
            let xeonresources = await Telesticker(args[0]);
            await replygcXlicon(`Sending ${xeonresources.length} stickers...`);
            if (m.isGroup && xeonresources.length > 30) {
              await replygcXlicon(
                "Number of stickers more than 30, bot will send it in private chat."
              );
              for (let i = 0; i < xeonresources.length; i++) {
                XliconBotInc.sendMessage(m.sender, {
                  sticker: { url: xeonresources[i].url },
                });
              }
            } else {
              for (let i = 0; i < xeonresources.length; i++) {
                XliconBotInc.sendMessage(m.chat, {
                  sticker: { url: xeonresources[i].url },
                });
              }
            }
          } else
            replygcXlicon(
              `Where is the telegram sticker link?\nExample. ${
                prefix + command
              } https://t.me/addstickers/FriendlyDeath`
            );
        }
        break;
//=================================================//
case "weather":
        {
          if (!text) return replygcXlicon("What location?");
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

          XliconBotInc.sendMessage(
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
        if (!text) return replygcXlicon(`_Name a Series or movie`);      let fids = await axios.get(
          `http://www.omdbapi.com/?apikey=742b2d09&t=${text}&plot=full`
        );
        let imdbt = "";
        console.log(fids.data);
        imdbt +=
          "⚍⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚍\n" + " ``` IMDB SEARCH```\n" + "⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎\n";
        imdbt += "🎬Title      : " + fids.data.Title + "\n";
        imdbt += "📅Year       : " + fids.data.Year + "\n";
        imdbt += "⭐Rated      : " + fids.data.Rated + "\n";
        imdbt += "📆Released   : " + fids.data.Released + "\n";
        imdbt += "⏳Runtime    : " + fids.data.Runtime + "\n";
        imdbt += "🌀Genre      : " + fids.data.Genre + "\n";
        imdbt += "👨🏻‍💻Director   : " + fids.data.Director + "\n";
        imdbt += "✍Writer     : " + fids.data.Writer + "\n";
        imdbt += "👨Actors     : " + fids.data.Actors + "\n";
        imdbt += "📃Plot       : " + fids.data.Plot + "\n";
        imdbt += "🌐Language   : " + fids.data.Language + "\n";
        imdbt += "🌍Country    : " + fids.data.Country + "\n";
        imdbt += "🎖️Awards     : " + fids.data.Awards + "\n";
        imdbt += "📦BoxOffice  : " + fids.data.BoxOffice + "\n";
        imdbt += "🏙️Production : " + fids.data.Production + "\n";
        imdbt += "🌟imdbRating : " + fids.data.imdbRating + "\n";
        imdbt += "✅imdbVotes  : " + fids.data.imdbVotes + "";
        XliconBotInc.sendMessage(
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
            return replygcXlicon(
              `*_Provide Number with last number x_*\n\nExample: ${
                prefix + command
              } 25479618010x`
            );
          var inputnumber = text.split(" ")[0];

          replygcXlicon(`*_Searching for WhatsApp account in given range..._*`);
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
            var anu = await XliconBotInc.onWhatsApp(
              `${number0}${i}${number1}@s.whatsapp.net`
            );
            var anuu = anu.length !== 0 ? anu : false;
            try {
              try {
                var anu1 = await XliconBotInc.fetchStatus(anu[0].jid);
              } catch {
                var anu1 = "401";
              }
              if (anu1 == "401" || anu1.status.length == 0) {
                nobio += `wa.me/${anu[0].jid.split("@")[0]}\n`;
              } else {
                text66 += `🪀 *Number:* wa.me/${
                  anu[0].jid.split("@")[0]
                }\n 🎗️*Bio :* ${anu1.status}\n🧐*Last update :* ${moment(
                  anu1.setAt
                )
                  .tz("Africa/Nairobi")
                  .format("HH:mm:ss DD/MM/YYYY")}\n\n`;
              }
            } catch {
              nowhatsapp += `${number0}${i}${number1}\n`;
            }
          }
          replygcXlicon(`${text66}${nobio}${nowhatsapp}`);
        }
        break;
//=================================================//
case "ringtone":
        {
          if (!text)
            return replygcXlicon(`Example : ${prefix + command} black rover`);
          let ringtone = require("./lib/scraper");
          let anutone2 = await ringtone.ringtone(text);
          let result = anutone2[Math.floor(Math.random() * anutone2.length)];
          XliconBotInc.sendMessage(
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
          if (!text) return replygcXlicon(`Enter Query`);
          let { pinterest } = require("./lib/scraper");
          anutrest = await pinterest(text);
          result = anutrest[Math.floor(Math.random() * anutrest.length)];
          XliconBotInc.sendMessage(
            m.chat,
            { image: { url: result }, caption: "⭔ Media Url : " + result },
            { quoted: m }
          );
        }
        break;
//=================================================//
case "itunes":
        {
          if (!text) return replygcXlicon("Please provide a song name");
          try {
            let res = await fetch(
              `https://api.popcat.xyz/itunes?q=${encodeURIComponent(text)}`
            );
            if (!res.ok) {
              throw new Error(`API request failed with status ${res.status}`);
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
              await XliconBotInc.sendMessage(
                m.chat,
                { image: { url: json.thumbnail }, caption: songInfo },
                { quoted: m }
              );
            } else {
              replygcXlicon(songInfo);
            }
          } catch (error) {
            console.error(error);
            // Handle the error appropriately
          }
        }
        break;
//=================================================//
//=================================================//
case "igdl": 
case "instagram":
{
if (!text) return replygcXlicon(`Please provide an Instagram video url!`)
var anu = await fetchJson(`https://widipe.com/download/igdl?url=${q}`)
var hassdl = anu.result[0].url
await XliconBotInc.sendMessage(m.chat, {
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
case "happymod":
        {
          if (!q)
            return replygcXlicon(
              `Example ${prefix + command} Sufway surfer mod`
            );
          let kat = await scp2.happymod(q);
          replygcXlicon(util.format(kat));
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
            return replygcXlicon(`Example : ${prefix + command} Tylor`);
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
          XliconBotInc.sendMessage(
            m.chat,
            { image: { url: haldwhd }, caption: `${mess.success}` },
            { quoted: m }
          );
        }
        break;
//=============AI MENU CMDS=======================//
      case "gpt":
        {
          if (!text) return replygcXlicon("What is your question?");
          let d = await fetchJson(
            `https://bk9.fun/ai/gptt4?q=${text}`
          );
          if (!d.BK9) {
            return replygcXlicon(
              "Please try again later or try another command!"
            );
          } else {
            replygcXlicon(d.BK9);
          }
        }
        break;
//=================================================//
      case "gemini":
        {
          if (!text) return replygcXlicon("What is your question?");
          let d = await fetchJson(
            `https://widipe.com/gemini?text=${text}`
          );
          if (!d.result) {
            return replygcXlicon(
              "Please try again later or try another command!"
            );
          } else {
            replygcXlicon(d.result);
          }
        }
        break;
//=================================================//
      case "openai":
      case "ai":
        {
          if (!text) return replygcXlicon("What is your question?");
          let d = await fetchJson(
            `https://widipe.com/openai?text=${text}`
          );
          if (!d.result) {
            return replygcXlicon(
              "Please try again later or try another command!"
            );
          } else {
            replygcXlicon(d.result);
          }
        }
        break;
//=================================================//
     case "gptgo":
        {
          if (!text) return replygcXlicon("What is your question?");
          let d = await fetchJson(
            `https://widipe.com/gptgo?text=${text}`
          );
          if (!d.result) {
            return replygcXlicon(
              "Please try again later or try another command!"
            );
          } else {
            replygcXlicon(d.result);
          }
        }
        break;
//=================================================//
     case "blackbox":
        {
          if (!text) return replygcXlicon("What is your question?");
          let d = await fetchJson(
            `https://widipe.com/blackbox?text=${text}`
          );
          if (!d.result) {
            return replygcXlicon(
              "Please try again later or try another command!"
            );
          } else {
            replygcXlicon(d.result);
          }
        }
        break;
//=================================================//
     case "bard":
     case "bardai":
        {
          if (!text) return replygcXlicon("What is your question?");
          let d = await fetchJson(
            `https://widipe.com/bard?text=${text}`
          );
          if (!d.result) {
            return replygcXlicon(
              "Please try again later or try another command!"
            );
          } else {
            replygcXlicon(d.result);
          }
        }
        break;
//=================================================//
     case "bingai":
        {
          if (!text) return replygcXlicon("What is your question?");
          let d = await fetchJson(
            `https://widipe.com/bingai?text=${text}`
          );
          if (!d.result) {
            return replygcXlicon(
              "Please try again later or try another command!"
            );
          } else {
            replygcXlicon(d.result);
          }
        }
        break;
//=================================================//
     case "simi":
        {
          if (!text) return replygcXlicon("What is your question?");
          let d = await fetchJson(
            `https://widipe.com/simi?text=${text}`
          );
          if (!d.result) {
            return replygcXlicon(
              "Please try again later or try another command!"
            );
          } else {
            replygcXlicon(d.result);
          }
        }
        break;
//=================================================//
      case "photoai":
        {
          if (!text) return replygcXlicon("Please enter a query!");
          let xeonfetch = await fetchJson(
            `https://widipe.com/bingimg?text=${text}`
          );
          XliconBotInc.sendMessage(
            from,
            { image: { url: xeonfetch.result[0] } },
            { quoted: m }
          );
        }
        break;
//=================================================//
      case "llama":
        {
          if (!text) return replygcXlicon("What is your question?");
          let d = await fetchJson(
            `https://bk9.fun/ai/llama?q=${text}`
          );
          if (!d.BK9) {
            return replygcXlicon(
              "Please try again later or try another command!"
            );
          } else {
            replygcXlicon(d.BK9);
          }
        }
        break;
//=================================================//
     case "gpt2":
        {
          if (!text) return replygcXlicon("What is your question?");
          let d = await fetchJson(
            `https://widipe.com/gpt4?text=${text}`
          );
          if (!d.result) {
            return replygcXlicon(
              "Please try again later or try another command!"
            );
          } else {
            replygcXlicon(d.result);
          }
        }
        break;
//=================================================//
     case "turbo":
        {
          if (!text) return replygcXlicon("What is your question?");
          let d = await fetchJson(
            `https://widipe.com/turbo?text=${text}`
          );
          if (!d.result) {
            return replygcXlicon(
              "Please try again later or try another command!"
            );
          } else {
            replygcXlicon(d.result);
          }
        }
        break;
//=========OTHER MENU CMDS=======================//
      case "runtime":
      case "uptime":
        let pinga = `Xploader Has Been Up For ${runtime(process.uptime())}`;
        XliconBotInc.sendMessage(
          m.chat,
          {
            text: pinga,
            contextInfo: {
              externalAdReply: {
                showAdAttribution: true,
                title: botname,
                body: ownername,
                thumbnailUrl: "https://itzpire.com/file/270de20ea91c.jpeg",
                sourceUrl: wagc,
                mediaType: 1,
                renderLargerThumbnail: true,
              },
            },
          },
          {
            quoted: m,
          }
        );
        break;
//=================================================//
case "script":
case "sc":
case "repo":
   {
    let me = m.sender;
   let teks = `
*「 𝐗𝐩𝐥𝐨𝐚𝐝𝐞𝐫 𝐒𝐜𝐫𝐢𝐩𝐭 」*

nHi @${me.split("@")[0]} 👋

Don't forget to fork and star my repository.😊`;
          
let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
          message: {
              "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                  text: teks
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                  text: botname
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : tylorkid}, { upload: XliconBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [  
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"CHANNEL\",\"url\":\"https://whatsapp.com/channel/0029VamSWUx77qVNJDy1Jf11\",\"merchant_url\":\"https://www.google.com\"}"
              },       
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"SCRIPT\",\"url\":\"https://github.com/Dark-Xploit/XPLOADER-BOT/fork\",\"merchant_url\":\"https://www.google.com\"}"
              },       
                                  ],
                }),
                contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '254796180105@s.whatsapp.net',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
              }
              })
          }
        },
      }, { quoted: fstatus })
      
      await XliconBotInc.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
        })
}  
break;
//=================================================//
      case "owner":
      {
const repf = await XliconBotInc.sendMessage(from, { 
contacts: { 
displayName: `${list.length} Contact`, 
contacts: list }, mentions: [sender] }, { quoted: fstatus })
}
break;
//=================================================//:
      case "sticker":
      case "s":
        {
          if (!quoted)
            return replygcXlicon(
              `Send/Reply Images/Videos/Gifs With Captions ${
                prefix + command
              }\nVideo Duration 1-9 Seconds`
            );
          if (/image/.test(mime)) {
            let media = await quoted.download();
            let encmedia = await XliconBotInc.sendImageAsSticker(
              m.chat,
              media,
              m,
              { packname: global.packname, author: global.author }
            );
          } else if (/video/.test(mime)) {
            if ((quoted.msg || quoted).seconds > 11)
              return replygcXlicon(
                "Send/Reply Images/Videos/Gifs With Captions ${prefix+command}\nVideo Duration 1-9 Seconds"
              );
            let media = await quoted.download();
            let encmedia = await XliconBotInc.sendVideoAsSticker(
              m.chat,
              media,
              m,
              { packname: global.packname, author: global.author }
            );
          } else {
            replygcXlicon(
              `Send/Reply Images/Videos/Gifs With Captions ${
                prefix + command
              }\nVideo Duration 1-9 Seconds`
            );
          }
        }
        break;
//=================================================//
      case "toimage":
      case "toimg":
        {
          if (!/webp/.test(mime))
            return replygcXlicon(
              `Reply sticker with caption *${prefix + command}*`
            );
          let media = await XliconBotInc.downloadAndSaveMediaMessage(qmsg);
          let ran = await getRandom(".png");
          exec(`ffmpeg -i ${media} ${ran}`, (err) => {
            fs.unlinkSync(media);
            if (err) return err;
            let buffer = fs.readFileSync(ran);
            XliconBotInc.sendMessage(
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
//=================================================//
      case "tomp4":
      case "tovideo":
        {
          if (!/webp/.test(mime))
            return replygcXlicon(
              `Reply sticker with caption *${prefix + command}*`
            );
          let media = await XliconBotInc.downloadAndSaveMediaMessage(qmsg);
          let webpToMp4 = await webp2mp4File(media);
          await XliconBotInc.sendMessage(
            m.chat,
            {
              video: {
                url: webpToMp4.result,
                caption: "Convert Webp To Video",
              },
            },
            {
              quoted: m,
            }
          );
          await fs.unlinkSync(media);
        }
        break;
//=================================================//
      case "toaud":
      case "toaudio":
        {
          if (!/video/.test(mime) && !/audio/.test(mime))
            return replygcXlicon(
              `Send/Reply Video/Audio that you want to make into audio with captions ${
                prefix + command
              }`
            );
          let media = await XliconBotInc.downloadMediaMessage(qmsg);
          let audio = await toAudio(media, "mp4");
          XliconBotInc.sendMessage(
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
//=================================================//
      case "tomp3":
        {
          if (!/video/.test(mime) && !/audio/.test(mime))
            return replygcXlicon(
              `Send/Reply Video/Audio that you want to make into MP3 with captions ${
                prefix + command
              }`
            );
          let media = await XliconBotInc.downloadMediaMessage(qmsg);
          let audio = await toAudio(media, "mp4");
          XliconBotInc.sendMessage(
            m.chat,
            {
              document: audio,
              mimetype: "audio/mp3",
              fileName: `XploaderV2.mp3`,
            },
            {
              quoted: m,
            }
          );
        }
        break;
//=================================================//
      case "tovn":
      case "toptt":
        {
          if (!/video/.test(mime) && !/audio/.test(mime))
            return replygcXlicon(
              `Send/Reply Video/Audio that you want to make into a VN with captions ${
                prefix + command
              }`
            );
          let media = await XliconBotInc.downloadMediaMessage(qmsg);
          let { toPTT } = require("./lib/converter");
          let audio = await toPTT(media, "mp4");
          XliconBotInc.sendMessage(
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
//=================================================//
      case "togif":
        {
          if (!/webp/.test(mime))
            return replygcXlicon(
              `Reply sticker with caption *${prefix + command}*`
            );
          let media = await XliconBotInc.downloadAndSaveMediaMessage(qmsg);
          let webpToMp4 = await webp2mp4File(media);
          await XliconBotInc.sendMessage(
            m.chat,
            {
              video: {
                url: webpToMp4.result,
                caption: "Convert Webp To Video",
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
//=================================================//
      case "emojimix":
        {
          let [emoji1, emoji2] = text.split`+`;
          if (!emoji1)
            return replygcXlicon(`Example : ${prefix + command} 😅+🤔`);
          if (!emoji2)
            return replygcXlicon(`Example : ${prefix + command} 😅+🤔`);
          let anu = await fetchJson(
            `https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(
              emoji1
            )}_${encodeURIComponent(emoji2)}`
          );
          for (let res of anu.results) {
            let encmedia = await XliconBotInc.sendImageAsSticker(
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
//=================================================//
      case "tovv":
      case "toviewonce":
        {
          if (!quoted) return replygcXlicon(`Reply Image/Video`);
          if (/image/.test(mime)) {
            anuan = await XliconBotInc.downloadAndSaveMediaMessage(quoted);
            XliconBotInc.sendMessage(
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
            anuanuan = await XliconBotInc.downloadAndSaveMediaMessage(quoted);
            XliconBotInc.sendMessage(
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
            bebasap = await XliconBotInc.downloadAndSaveMediaMessage(quoted);
            XliconBotInc.sendMessage(m.chat, {
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
//=================================================//

case 'whatmusic':
case 'find':
case 'shazam':
    if (!m.quoted) {
        replygcXlicon('It seems you want to identify a music. Please provide a quoted audio or video message for identification.');
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
            const txt = `┌──❖𝗫𝗣𝗟𝗢𝗔𝗗𝗘𝗥 𝗕𝗢𝗧❖──┈ ⳹
│• 📌 *TITLE*: ${title}
│• 👨‍🎤𝙰𝚁𝚃𝙸𝚂𝚃: ${artists !== undefined ? artists.map(v => v.name).join(', ') : 'NOT FOUND'}
│• 💾 𝙰𝙻𝙱𝚄𝙼: ${album.name || 'NOT FOUND'}
│• 🌐 𝙶𝙴𝙽𝚁𝙴: ${genres !== undefined ? genres.map(v => v.name).join(', ') : 'NOT FOUND'}
│• 📆 RELEASE DATE: ${release_date || 'NOT FOUND'}
└─────────────┈ ⳹`.trim();

            fs.unlinkSync(`./src/${m.sender}.${ext}`);
            replygcXlicon(txt);
        } catch (error) {
            console.error(error);
            replygcXlicon('An error occurred during music identification.');
        }
    }
    break;
//=================================================//
       case "commands":
        case "totalcmds":
        {
          let lowq = `©𝐗𝐩𝐥𝐨𝐚𝐝𝐞𝐫𝐁𝐨𝐭\n> Total Commands= 501`;
          replygcXlicon(lowq);
        }
        break;
//=================================================//
      case "obfuscate":
        {
          if (!q)
            return replygcXlicon(
              `Example ${prefix + command} const XploaderV2 = require('baileys')`
            );
          let meg = await obfus(q);
          replygcXlicon(`Success
${meg.result}`);
        }
        break;
//=================================================//
      case "fancy":
      case "styletext":
        {
          let { styletext } = require("./lib/scraper");
          if (!text) return replygcXlicon("Enter Query text!");
          let anu = await styletext(text);
          let teks = `Style Text From ${text}\n\n`;
          for (let i of anu) {
            teks += `${themeemoji} *${i.name}* : ${i.result}\n\n`;
          }
          replygcXlicon(teks);
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
                `Please specify the chapter number or name. Example: ${
                  prefix + command
                } john 3:16`
              );
            }
            // Encode the chapterInput to handle special characters
            chapterInput = encodeURIComponent(chapterInput);
            // Make an API request to fetch the chapter information.
            let chapterRes = await fetch(`${BASE_URL}/${chapterInput}`);
            if (!chapterRes.ok) {
              throw new Error(
                `Please specify the chapter number or name. Example: ${
                  prefix + command
                } john 3:16`
              );
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
📖 *The Holy Bible*\n
📜 *Chapter ${chapterData.reference}*\n
Type: ${chapterData.translation_name}\n
Number of verses: ${chapterData.verses.length}\n
🔮 *Chapter Content (English):*\n
${translatedChapterEnglish.text}\n
🔮 *Chapter Content (Hindi):*\n
${translatedChapterHindi.text}`;
            replygcXlicon(bibleChapter);
          } catch (error) {
            replygcXlicon(`Error: ${error.message}`);
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
              throw new Error(`Please specify the surah number or name`);
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
🕌 *Quran: The Holy Book*\n
📜 *Surah ${json.data.number}: ${json.data.asma.ar.long} (${json.data.asma.en.long})*\n
Type: ${json.data.type.en}\n
Number of verses: ${json.data.ayahCount}\n
🔮 *Explanation (Urdu):*\n
${translatedTafsirUrdu.text}\n
🔮 *Explanation (English):*\n
${translatedTafsirEnglish.text}`;

            replygcXlicon(quranSurah);

            if (json.data.recitation.full) {
              XliconBotInc.sendMessage(
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
            replygcXlicon(`Error: ${error.message}`);
          }
        }
        break;
//=================================================//
case "fliptext":
        {
          if (args.length < 1)
            return replygcXlicon(`Example:\n${prefix}fliptext SalmanSer`);
          quere = args.join(" ");
          flipe = quere.split("").reverse().join("");
          replygcXlicon(
            `\`\`\`「 FLIP TEXT 」\`\`\`\n\n*•> Normal :*\n${quere}\n*•> Flip :*\n${flipe}`
          );
        }
        break;
//=================================================//
      case "toqr":
        {
          if (!q) return replygcXlicon(" Please include link or text!");
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
          await XliconBotInc.sendMessage(
            from,
            { image: medi, caption: "©𝐗𝐩𝐥𝐨𝐚𝐝𝐞𝐫𝐁𝐨𝐭" },
            { quoted: m }
          );
          setTimeout(() => {
            fs.unlinkSync(buff);
          }, 10000);
        }
        break;
//=================================================//
      case "volaudio":
        {
          if (!args.join(" "))
            return replygcXlicon(`Example: ${prefix + command} 10`);
          media = await XliconBotInc.downloadAndSaveMediaMessage(
            quoted,
            "volume"
          );
          rname = getRandom(".mp3");
          exec(
            `ffmpeg -i ${media} -filter:a volume=${args[0]} ${rname}`,
            (err, stderr, stdout) => {
              fs.unlinkSync(media);
              if (err) return replygcXlicon("Error!");
              jadie = fs.readFileSync(rname);
              XliconBotInc.sendMessage(
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
            return replygcXlicon(`Example: ${prefix + command} 10`);
          media = await XliconBotInc.downloadAndSaveMediaMessage(
            quoted,
            "volume"
          );
          rname = getRandom(".mp4");
          exec(
            `ffmpeg -i ${media} -filter:a volume=${args[0]} ${rname}`,
            (err, stderr, stdout) => {
              fs.unlinkSync(media);
              if (err) return replygcXlicon("Error!");
              jadie = fs.readFileSync(rname);
              XliconBotInc.sendMessage(
                from,
                { video: jadie, mimetype: "video/mp4" },
                { quoted: m }
              );
              fs.unlinkSync(rname);
            }
          );
        }
        break;
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
            let media = await XliconBotInc.downloadAndSaveMediaMessage(quoted);
            let ran = getRandom(".mp3");
            exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
              fs.unlinkSync(media);
              if (err) return replygcXlicon(err);
              let buff = fs.readFileSync(ran);
              XliconBotInc.sendMessage(
                m.chat,
                { audio: buff, mimetype: "audio/mpeg" },
                { quoted: m }
              );
              fs.unlinkSync(ran);
            });
          } else
            replygcXlicon(
              `Reply to the audio you want to change with a caption *${
                prefix + command
              }*`
            );
        } catch (e) {
          replygcXlicon(e);
        }
        break;
//=================================================//
   case "say":
      case "tts":
        {
          if (!text) return replygcXlicon("Where is the text?");
          //Limit text to maximum supported 200 characters!
          let texttts = text.substring(0, 200);
          const xeonrl = googleTTS.getAudioUrl(texttts, {
            lang: "en",
            slow: false,
            host: "https://translate.google.com",
          });
          return XliconBotInc.sendMessage(
            m.chat,
            {
              audio: {
                url: xeonrl,
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
//=================================================//
      case "translate":
      case "trt":
        {
          if (!q)
            return replygcXlicon(
              `*Where is the text*\n\n*𝙴xample usage*\n*${
                prefix + command
              } <language id> <text>*\n*${prefix + command} ja yo wassup*`
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
            replygcXlicon(result.text);
          } catch (e) {
            return replygcXlicon(err);
          }
        }
        break;
//=================================================//
   case 'xp': {
    if (!text) return replygcXlicon(`Example : ${prefix + command} Halsey Without me`);
    const yts = require("youtube-yts");
    let search = await yts(text);
    let anup3k = search.videos[0];
    if (!anup3k) return replygcXlicon("Song not found,,try another .....!");
    const apiUrl = `https://widipe.com/download/ytdl?url=${encodeURIComponent(anup3k.url)}`;
    let audioResponse;
    try {
        audioResponse = await axios.get(apiUrl);
    } catch (error) {
        console.error("Error fetching audio:", error);
        return replygcXlicon("Failed to download the audio. Please try again.");
    }
    if (!audioResponse.data.status) {
        return reply("Failed to retrieve audio URL. Please try again.");
    }
    const mp3Url = audioResponse.data.result.mp3;
    // Download the MP3 file
    let mp3Buffer;
    try {
        const mp3DownloadResponse = await axios.get(mp3Url, { responseType: 'arraybuffer' });
        mp3Buffer = Buffer.from(mp3DownloadResponse.data);
    } catch (error) {
        console.error("Error downloading MP3:", error);
        return replygcXlicon("Failed to download the MP3. Please try again.");
    }
    await XliconBotInc.sendMessage(m.chat, {
        audio: mp3Buffer,
        fileName: anup3k.title + '.mp3',
        mimetype: 'audio/mp4',
        contextInfo: {
            externalAdReply: {
                title: anup3k.title,
                body: botname,
                thumbnail: await fetchBuffer(anup3k.thumbnail), // Use thumbnail from the search result
                mediaType: 2,
                mediaUrl: anup3k.url,
            }
        },
    }, { quoted: m });
}
break
//=================================================//
      case "lyrics":
        {
          if (!text)
            return replygcXlicon(
              `What lyrics you looking for?\nExample usage: ${prefix}lyrics Thunder`
            );
          let lyric = await fetch(
            `https://widipe.com/lirik?text=${text}`
          );
          let jsonxeon = await lyric.json();
          if (jsonxeon.result.error) {
            replygcXlicon("Lyrics not found.");
          } else {
            replygcXlicon(
              `*Artist*: ${jsonxeon.result.artist}\n*Lyrics*:\n${jsonxeon.result.lyrics}`
            );
          }
        }
     break;
//=================================================//
    case "truthdetector":
    case "liedetector":
        { 
          if (!m.quoted)
            return replygcXlicon(
              `Please reply to the message you want to detect!`
            );
          let ukweli = [`Thats a good lie!`, `Its a lie!`, `Its the truth!`, `Thats true!`, `Professional lier I see!`, `Truth!`, `False!`, `Im unable to detect this one!`];
          let uwongo = ukweli[Math.floor(Math.random() * ukweli.length)];
          let jibu = `*Result* : ${uwongo}`;
          await replygcXlicon(jibu);
        }
        break;
//=================================================//
  case "dalle":
  {
        if (!q) return replygcXlicon(`Please provide a query to generate an image. Example: ${prefix + command} Beautiful landscape`);
        const apiUrl = `https://widipe.com/dalle?text=${encodeURIComponent(q)}`;
        try {
          await XliconBotInc.sendMessage(m.chat, { image: { url: apiUrl } }, { quoted: m });
        } catch (error) {
          console.error(error);
          replygcXlicon("An error occurred while generating the image.");
        }
      }
        break;
//=================================================//
  case "imagen":
  {
        if (!q) return replygcXlicon(`Please provide a query to generate an image. Example: ${prefix + command} Beautiful landscape`);
        const api2Url = `https://widipe.com/ai/text2img?text=${encodeURIComponent(q)}`;
        try {
          await XliconBotInc.sendMessage(m.chat, { image: { url: api2Url } }, { quoted: m });
        } catch (error) {
          console.error(error);
          replygcXlicon("An error occurred while generating the image.");
        }
      }
        break;
//=================================================//
 case "generate":
  {
        if (!q) return replygcXlicon(`Please provide a query to generate an image. Example: ${prefix + command} Beautiful landscape`);
        const api3Url = `https://widipe.com/v6/text2img?text=${encodeURIComponent(q)}`;
        try {
          await XliconBotInc.sendMessage(m.chat, { image: { url: api3Url } }, { quoted: m });
        } catch (error) {
          console.error(error);
          replygcXlicon("An error occurred while generating the image.");
        }
      }
        break;
//=================================================//
      case "mathquiz":
      case "maths":
        {
          if (kuismath.hasOwnProperty(m.sender.split("@")[0]))
            replygcXlicon(`There are still unfinished sessions!`);
          let { genMath, modes } = require("./lib/math");
          if (!text)
            return replygcXlicon(
              `Mode: ${Object.keys(modes).join(
                " | "
              )}\nUsage example: ${prefix}math medium`
            );
          let result = await genMath(text.toLowerCase());
          XliconBotInc.sendText(
            m.chat,
            `*What is the result of: ${result.soal.toLowerCase()}*?\n\nTime: ${(
              result.waktu / 1000
            ).toFixed(2)} second`,
            m
          ).then(() => {
            kuismath[m.sender.split("@")[0]] = result.jawaban;
          });
          await sleep(result.waktu);
          if (kuismath.hasOwnProperty(m.sender.split("@")[0])) {
            console.log("Answer: " + result.jawaban);
            replygcXlicon(
              "Time has run out\nAnswer: " + kuismath[m.sender.split("@")[0]]
            );
            delete kuismath[m.sender.split("@")[0]];
          }
        }
        break;
//=================================================//
      case "rockpaperscissors":
      case "rps":
        {
          this.suit = this.suit ? this.suit : {};
          let poin = 10;
          let poin_lose = 10;
          let timeout = 60000;
          if (
            Object.values(this.suit).find(
              (roof) =>
                roof.id.startsWith("suit") &&
                [roof.p, roof.p2].includes(m.sender)
            )
          )
            replygcXlicon(`Finish your previous RPS game.`);
          if (m.mentionedJid[0] === m.sender)
            return replygcXlicon(`Can't play with yourself. !`);
          if (!m.mentionedJid[0])
            return replygcXlicon(
              `_Who do you want to challenge?_\nTag the person aswell..\n\nExample : ${prefix}rps @${owner[1]}`,
              m.chat,
              {
                mentions: [owner[1] + "@s.whatsapp.net"],
              }
            );
          if (
            Object.values(this.suit).find(
              (roof) =>
                roof.id.startsWith("suit") &&
                [roof.p, roof.p2].includes(m.mentionedJid[0])
            )
          )
            return replygcXlicon(
              `The person you are challenging is playing rps with someone else :(`
            );
          let id = "suit_" + new Date() * 1;
          let caption = `_*ROCK PAPER SCISSORS*_

@${m.sender.split`@`[0]} challenged @${
            m.mentionedJid[0].split`@`[0]
          } to play rock paper scissors

@${m.mentionedJid[0].split`@`[0]} Please type *accept* or *reject*...`;
          this.suit[id] = {
            chat: await XliconBotInc.sendText(m.chat, caption, m, {
              mentions: parseMention(caption),
            }),
            id: id,
            p: m.sender,
            p2: m.mentionedJid[0],
            status: "wait",
            waktu: setTimeout(() => {
              if (this.suit[id])
                XliconBotInc.sendText(m.chat, `_Game time is up_`, m);
              delete this.suit[id];
            }, 60000),
            poin,
            poin_lose,
            timeout,
          };
        }
        break;
//=================================================//
     case "tictactoe":
     case "ttc":
        {
          let TicTacToe = require("./lib/tictactoe");
          this.game = this.game ? this.game : {};
          if (
            Object.values(this.game).find(
              (room) =>
                room.id.startsWith("tictactoe") &&
                [room.game.playerX, room.game.playerO].includes(m.sender)
            )
          )
            return replygcXlicon("You are still in the game");
          let room = Object.values(this.game).find(
            (room) =>
              room.state === "WAITING" && (text ? room.name === text : true)
          );
          if (room) {
            replygcXlicon("Partner not found!");
            room.o = m.chat;
            room.game.playerO = m.sender;
            room.state = "PLAYING";
            let arr = room.game.render().map((v) => {
              return {
                X: "❌",
                O: "⭕",
                1: "1️⃣",
                2: "2️⃣",
                3: "3️⃣",
                4: "4️⃣",
                5: "5️⃣",
                6: "6️⃣",
                7: "7️⃣",
                8: "8️⃣",
                9: "9️⃣",
              }[v];
            });
            let str = `Room ID: ${room.id}

${arr.slice(0, 3).join("")}
${arr.slice(3, 6).join("")}
${arr.slice(6).join("")}

Wait @${room.game.currentTurn.split("@")[0]}

Type *surrender* to give up and admit defeat`;
            if (room.x !== room.o)
              await XliconBotInc.sendText(room.x, str, m, {
                mentions: parseMention(str),
              });
            await XliconBotInc.sendText(room.o, str, m, {
              mentions: parseMention(str),
            });
          } else {
            room = {
              id: "tictactoe-" + +new Date(),
              x: m.chat,
              o: "",
              game: new TicTacToe(m.sender, "o"),
              state: "WAITING",
            };
            if (text) room.name = text;
            replygcXlicon(
              "Waiting for partner" +
                (text
                  ? ` type the command below ${prefix}${command} ${text}`
                  : "")
            );
            this.game[room.id] = room;
          }
        }
        break;
      case "delttc":
      case "deltictactoe":
        {
          this.game = this.game ? this.game : {};
          try {
            if (this.game) {
              delete this.game;
              XliconBotInc.sendText(
                m.chat,
                `Berhasil delete session TicTacToe`,
                m
              );
            } else if (!this.game) {
              replygcXlicon(`Session TicTacToe🎮 tidak ada`);
            } else mewReply("?");
          } catch (e) {
            replygcXlicon("rusak");
          }
        }
        break;
//=================================================//
      case "xxqc":
        {
          if (!q)
            return replygcXlicon(
              `📌Example: ${
                prefix + command
              } pink hallo\n\n꒰ 🖌️ Color List ꒱ ೄྀ࿐ ˊˎ-\n━━━━━━⊱⋆⊰━━━━━━\npink\nblue\nred\ngreen\nyellow\npurple\ndarkblue\nlightblue\nash\norange\nblack\nwhite\nteal\nlightpink\nchocolate\nsalmon\nmagenta\ntan\nwheat\ndeeppink\nfire\nskyblue\nsafron\nbrightskyblue\nhotpink\nlightskyblue\nseagreen\ndarkred\norangered\ncyan\nviolet\nmossgreen\ndarkgreen\nnavyblue\ndarkorange\ndarkpurple\nfuchsia\ndarkmagenta\ndarkgray\npeachpuff\nblackishgreen\ndarkishred\ngoldenrod\ndarkishgray\ndarkishpurple\ngold\nsilver`
            );
          if (text.length > 100) return replygcXlicon(`Max 100 character.`);
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
              return replygcXlicon("The selected color is not available.");
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
                    url: await XliconBotInc.profilePictureUrl(
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
          XliconBotInc.sendImageAsSticker(m.chat, buffer, m, {
            packname: `${global.packname}`,
            author: `${global.author}`,
          });
        }
        break;
//=================================================//
      case "randomgirl":
        var notnot = JSON.parse(
          fs.readFileSync("./src/media/tiktokpics/random.json")
        );
        var hasil = pickRandom(notnot);
        XliconBotInc.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: hasil.url } },
          { quoted: m }
        );
        break;
      case "randomboy":
        var notnot = JSON.parse(
          fs.readFileSync("./src/media/tiktokpics/random2.json")
        );
        var hasil = pickRandom(notnot);
        XliconBotInc.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: hasil.url } },
          { quoted: m }
        );
        break;
//=================================================//
      case "remini":
        {
          if (!quoted) return replygcXlicon(`Where is the picture?`);
          if (!/image/.test(mime))
            return replygcXlicon(
              `Send/Reply Photos With Captions ${prefix + command}`
            );
          const { remini } = require("./lib/remini");
          let media = await quoted.download();
          let proses = await remini(media, "enhance");
          XliconBotInc.sendMessage(
            m.chat,
            { image: proses, caption: mess.success },
            { quoted: m }
          );
        }
        break;
      case "define":
        if (!q) return replygcXlicon(`What do you want to define?`);
        try {
          targetfine = await axios.get(
            `http://api.urbandictionary.com/v0/define?term=${q}`
          );
          if (!targetfine) return replygcXlicon(mess.error);
          const reply = `
*${themeemoji} Word:* ${q}
*${themeemoji} Definition:* ${targetfine.data.list[0].definition
            .replace(/\[/g, "")
            .replace(/\]/g, "")}
*${themeemoji} Example:* ${targetfine.data.list[0].example
            .replace(/\[/g, "")
            .replace(/\]/g, "")}`;
          XliconBotInc.sendMessage(m.chat, { text: reply }, { quoted: m });
        } catch (err) {
          console.log(err);
          return replygcXlicon(`*${q}* isn't a valid text`);
        }
        break;
//=================================================//
      case "rate":
        {
          if (!text)
            return replygcXlicon(`Example : ${prefix + command} my profile`);
          let kah = getRandomNumber(0, 100);
          let jawab = `*Rate ${text}*\nAnswer : ${kah}%`;
          await replygcXlicon(jawab);
        }
        break;
//=================================================//
      case "soulmate":
        {
          if (!m.isGroup) return replygcXlicon(mess.group);
          let member = participants.map((u) => u.id);
          let me = m.sender;
          let jodoh = member[Math.floor(Math.random() * member.length)];
          XliconBotInc.sendMessage(
            m.chat,
            {
              text: `👫Your Soulmate Is

@${me.split("@")[0]} ❤️ @${jodoh.split("@")[0]}`,
              contextInfo: {
                mentionedJid: [me, jodoh],
                forwardingScore: 9999999,
                isForwarded: true,
                externalAdReply: {
                  showAdAttribution: true,
                  containsAutoReply: true,
                  title: ` ${global.botname}`,
                  body: `${ownername}`,
                  previewType: "PHOTO",
                  thumbnailUrl: ``,
                  thumbnail: fs.readFileSync(
                    `./XploaderMedia/theme/xliconpic.jpg`
                  ),
                  sourceUrl: `${wagc}`,
                },
              },
            },
            { quoted: m }
          );
        }
        break;
      case "couple":
        {
          if (!m.isGroup) return replygcXlicon(mess.group);
          let member = participants.map((u) => u.id);
          let orang = member[Math.floor(Math.random() * member.length)];
          let jodoh = member[Math.floor(Math.random() * member.length)];
          XliconBotInc.sendMessage(
            m.chat,
            {
              text: `@${orang.split("@")[0]} ❤️ @${jodoh.split("@")[0]}
Cieeee, What's Going On❤️💖👀`,
              contextInfo: {
                mentionedJid: [orang, jodoh],
                forwardingScore: 9999999,
                isForwarded: true,
                externalAdReply: {
                  showAdAttribution: true,
                  containsAutoReply: true,
                  title: ` ${global.botname}`,
                  body: `${ownername}`,
                  previewType: "PHOTO",
                  thumbnailUrl: ``,
                  thumbnail: fs.readFileSync(
                    `./XploaderMedia/theme/Xploader.jpg`
                  ),
                  sourceUrl: `${wagc}`,
                },
              },
            },
            { quoted: m }
          );
        }
        break;
//=================================================//
      case "wallpaper":
        {
          if (!text) return replygcXlicon("Enter Query Title");
          let { wallpaper } = require("./lib/scraper");
          anuwallpep = await wallpaper(text);
          result = anuwallpep[Math.floor(Math.random() * anuwallpep.length)];
          XliconBotInc.sendMessage(
            m.chat,
            {
              caption: `${themeemoji} Title : ${
                result.title
              }\n${themeemoji} Category : ${
                result.type
              }\n${themeemoji} Detail : ${
                result.source
              }\n${themeemoji} Media Url : ${
                result.image[2] || result.image[1] || result.image[0]
              }`,
              image: { url: result.image[0] },
            },
            { quoted: m }
          );
        }
        break;
      case "wikimedia":
        {
          if (!text) return replygcXlicon("Enter Query Title");
          let { wikimedia } = require("./lib/scraper");
          let anumedia = await wikimedia(text);
          result = anumedia[Math.floor(Math.random() * anumedia.length)];
          XliconBotInc.sendMessage(
            m.chat,
            {
              caption: `${themeemoji} Title : ${result.title}\n${themeemoji} Source : ${result.source}\n${themeemoji} Media Url : ${result.image}`,
              image: { url: result.image },
            },
            { quoted: m }
          );
        }
        break;
//=================================================//
      case "pick":
        {
          if (!m.isGroup) return replygcXlicon(mess.group);
          if (!text)
            return replygcXlicon(
              `What do you want to pick?\nExample: ${prefix + command} idiot`
            );
          const groupMetadata = m.isGroup
            ? await XliconBotInc.groupMetadata(m.chat).catch((e) => {})
            : "";
          const participants = m.isGroup
            ? await groupMetadata.participants
            : "";
          let member = participants.map((u) => u.id);
          let me = m.sender;
          let xeonshimts = member[Math.floor(Math.random() * member.length)];
          XliconBotInc.sendMessage(
            from,
            {
              text: `The most *${text}* here is *@${xeonshimts.split("@")[0]}*`,
              contextInfo: {
                forwardingScore: 9999999,
                isForwarded: true,
                mentionedJid: [xeonshimts],
                externalAdReply: {
                  showAdAttribution: true,
                  title: ` ${global.botname}`,
                  body: `${ownername}`,
                  containsAutoReply: true,
                  previewType: "PHOTO",
                  thumbnailUrl: ``,
                  thumbnail: fs.readFileSync(
                    `./XploaderMedia/theme/xliconpic.jpg`
                  ),
                  sourceUrl: `${wagc}`,
                },
              },
            },
            { quoted: m }
          );
        }
        break;
//=================================================//
      case "fact":
        {
          const { data } = await axios.get(`https://nekos.life/api/v2/fact`);
          return replygcXlicon(`${themeemoji} *Fact:* ${data.fact}\n`);
        }
        break;
      case "quotes":
        const quotexeony = await axios.get(`https://favqs.com/api/qotd`);
        const textquotes = `*${themeemoji} Quote:* ${quotexeony.data.quote.body}\n\n*${themeemoji} Author:* ${quotexeony.data.quote.author}`;
        return replygcXlicon(textquotes);
        break;
      case "dare":
        const dare = [
          "eat 2 tablespoons of rice without any side dishes, if it's dragging you can drink",
          "spill people who make you pause",
          "call crush/pickle now and send ss",
          "drop only emote every time you type on gc/pc for 1 day.",
          "say Welcome to Who Wants To Be a Millionaire! to all the groups you have",
          "call ex saying miss",
          "sing the chorus of the last song you played",
          "vn your ex/crush/girlfriend, says hi (name), wants to call, just a moment. I miss you so much",
          "Bang on the table (which is at home) until you get scolded for being noisy",
          "Tell random people _I was just told I was your twin first, we separated, then I had plastic surgery. And this is the most ciyusss_ thing",
          "mention ex's name",
          "make 1 rhyme for the members!",
          "send ur whatsapp chat list",
          "chat random people with gheto language then ss here",
          "tell your own version of embarrassing things",
          "tag the person you hate",
          "Pretending to be possessed, for example: possessed by dog, possessed by grasshoppers, possessed by refrigerator, etc.",
          "change name to *I AM DONKEY* for 24 hours",
          "shout *ma chuda ma chuda ma chuda* in front of your house",
          "snap/post boyfriend photo/crush",
          "tell me your boyfriend type!",
          "say *i hv crush on you, do you want to be my girlfriend?* to the opposite sex, the last time you chatted (submit on wa/tele), wait for him to reply, if you have, drop here",
          "record ur voice that read *titar ke age do titar, titar ke piche do titar*",
          "prank chat ex and say *i love u, please come back.* without saying dare!",
          "chat to contact wa in the order according to your battery %, then tell him *i am lucky to hv you!*",
          "change the name to *I am a child of randi* for 5 hours",
          "type in bengali 24 hours",
          "Use selmon bhoi photo for 3 days",
          "drop a song quote then tag a suitable member for that quote",
          "send voice note saying can i call u baby?",
          "ss recent call whatsapp",
          "Say *YOU ARE SO BEAUTIFUL DON'T LIE* to guys!",
          "pop to a group member, and say fuck you",
          "Act like a chicken in front of ur parents",
          "Pick up a random book and read one page out loud in vn n send it here",
          "Open your front door and howl like a wolf for 10 seconds",
          "Take an embarrassing selfie and paste it on your profile picture",
          "Let the group choose a word and a well known song. You have to sing that song and send it in voice note",
          "Walk on your elbows and knees for as long as you can",
          "sing national anthem in voice note",
          "Breakdance for 30 seconds in the sitting roomðŸ˜‚",
          "Tell the saddest story you know",
          "make a twerk dance video and put it on status for 5mins",
          "Eat a raw piece of garlic",
          "Show the last five people you texted and what the messages said",
          "put your full name on status for 5hrs",
          "make a short dance video without any filter just with a music and put it on ur status for 5hrs",
          "call ur bestie, bitch",
          "put your photo without filter on ur status for 10mins",
          "say i love oli london in voice noteðŸ¤£ðŸ¤£",
          "Send a message to your ex and say I still like you",
          "call Crush/girlfriend/bestie now and screenshot here",
          "pop to one of the group member personal chat and Say you ugly bustard",
          "say YOU ARE BEAUTIFUL/HANDSOME to one of person who is in top of ur pinlist or the first person on ur chatlist",
          "send voice notes and say, can i call u baby, if u r boy tag girl/if girl tag boy",
          "write i love you (random grup member name, who is online) in personal chat, (if u r boy write girl name/if girl write boy name) take a snap of the pic and send it here",
          "use any bollywood actor photo as ur pfp for 3 days",
          "put your crush photo on status with caption, this is my crush",
          "change name to I AM GAY for 5 hours",
          "chat to any contact in whatsapp and say i will be ur bf/gf for 5hours",
          "send voice note says i hv crush on you, want to be my girlfriend/boyfriend or not? to any random person from the grup(if u girl choose boy, if boy choose girl",
          "slap ur butt hardly send the sound of slap through voice noteðŸ˜‚",
          "state ur gf/bf type and send the photo here with caption, ugliest girl/boy in the world",
          "shout bravooooooooo and send here through voice note",
          "snap your face then send it here",
          "Send your photo with a caption, i am lesbian",
          "shout using harsh words and send it here through vn",
          "shout you bastard in front of your mom/papa",
          "change the name to i am idiot for 24 hours",
          "slap urself firmly and send the sound of slap through voice noteðŸ˜‚",
          "say i love the bot owner xeon through voice note",
          "send your gf/bf pic here",
          "make any tiktok dance challenge video and put it on status, u can delete it after 5hrs",
          "breakup with your best friend for 5hrs without telling him/her that its a dare",
          "tell one of your frnd that u love him/her and wanna marry him/her, without telling him/her that its a dare",
          "say i love depak kalal through voice note",
          "write i am feeling horny and put it on status, u can delete it only after 5hrs",
          "write i am lesbian and put it on status, u can delete only after 5hrs",
          "kiss your mommy or papa and say i love youðŸ˜Œ",
          "put your father name on status for 5hrs",
          "send abusive words in any grup, excepting this grup, and send screenshot proof here",
        ];
        const xeondare = dare[Math.floor(Math.random() * dare.length)];
        bufferdare = await getBuffer(
          `https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`
        );
        XliconBotInc.sendMessage(
          from,
          { image: bufferdare, caption: "_You choose DARE_\n" + xeondare },
          { quoted: m }
        );
        break;
        break;
      case "truth":
        const truth = [
          "Have you ever liked anyone? How long?",
          "If you can or if you want, which gc/outside gc would you make friends with? (maybe different/same type)",
          "apa ketakutan terbesar kamu?",
          "Have you ever liked someone and felt that person likes you too?",
          "What is the name of your friend's ex-girlfriend that you used to secretly like?",
          "Have you ever stolen money from your father or mom? The reason?",
          "What makes you happy when you're sad?",
          "Ever had a one sided love? if so who? how does it feel bro?",
          "been someone's mistress?",
          "the most feared thing",
          "Who is the most influential person in your life?",
          "what proud thing did you get this year",
          "Who is the person who can make you awesome",
          "Who is the person who has ever made you very happy?",
          "Who is closest to your ideal type of partner here",
          "Who do you like to play with??",
          "Have you ever rejected people? the reason why?",
          "Mention an incident that made you hurt that you still remember",
          "What achievements have you got this year??",
          "What's your worst habit at school??",
          "What song do you sing most in the shower",
          "Have you ever had a near-death experience",
          "When was the last time you were really angry. Why?",
          "Who is the last person who called you",
          "Do you have any hidden talents, What are they",
          "What word do you hate the most?",
          "What is the last YouTube video you watched?",
          "What is the last thing you Googled",
          "Who in this group would you want to swap lives with for a week",
          "What is the scariest thing thats ever happened to you",
          "Have you ever farted and blamed it on someone else",
          "When is the last time you made someone else cry",
          "Have you ever ghosted a friend",
          "Have you ever seen a dead body",
          "Which of your family members annoys you the most and why",
          "If you had to delete one app from your phone, which one would it be",
          "What app do you waste the most time on",
          "Have you ever faked sick to get home from school",
          "What is the most embarrassing item in your room",
          "What five items would you bring if you got stuck on a desert island",
          "Have you ever laughed so hard you peed your pants",
          "Do you smell your own farts",
          "have u ever peed on the bed while sleeping ??",
          "What is the biggest mistake you have ever made",
          "Have you ever cheated in an exam",
          "What is the worst thing you have ever done",
          "When was the last time you cried",
          "whom do you love the most among ur parents",
          "do u sometimes put ur finger in ur nosetril?",
          "who was ur crush during the school days",
          "tell honestly, do u like any boy in this grup",
          "have you ever liked anyone? how long?",
          "do you have gf/bf','what is your biggest fear?",
          "have you ever liked someone and felt that person likes you too?",
          "What is the name of your ex boyfriend of your friend that you once liked quietly?",
          "ever did you steal your mothers money or your fathers money",
          "what makes you happy when you are sad",
          "do you like someone who is in this grup? if you then who?",
          "have you ever been cheated on by people?",
          "who is the most important person in your life",
          "what proud things did you get this year",
          "who is the person who can make you happy when u r sad",
          "who is the person who ever made you feel uncomfortable",
          "have you ever lied to your parents",
          "do you still like ur ex",
          "who do you like to play together with?",
          "have you ever stolen big thing in ur life? the reason why?",
          "Mention the incident that makes you hurt that you still remember",
          "what achievements have you got this year?",
          "what was your worst habit at school?",
          "do you love the bot creator, xeon?ðŸ¤£",
          "have you ever thought of taking revenge from ur teacher?",
          "do you like current prime minister of ur country",
          "you non veg or veg",
          "if you could be invisible, what is the first thing you would do",
          "what is a secret you kept from your parents",
          "Who is your secret crush",
          "whois the last person you creeped on social media",
          "If a genie granted you three wishes, what would you ask for",
          "What is your biggest regret",
          "What animal do you think you most look like",
          "How many selfies do you take a day",
          "What was your favorite childhood show",
          "if you could be a fictional character for a day, who would you choose",
          "whom do you text the most",
          "What is the biggest lie you ever told your parents",
          "Who is your celebrity crush",
          "Whats the strangest dream you have ever had",
          "do you play pubg, if you then send ur id number",
        ];
        const xeontruth = truth[Math.floor(Math.random() * truth.length)];
        buffertruth = await getBuffer(
          `https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`
        );
        XliconBotInc.sendMessage(
          from,
          { image: buffertruth, caption: "_You choose TRUTH_\n" + xeontruth },
          { quoted: m }
        );
        break;
//=================================================//
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
          axios
            .get(`https://api.waifu.pics/sfw/${command}`)
            .then(({ data }) => {
              XliconBotInc.sendImageAsSticker(from, data.url, m, {
                packname: global.packname,
                author: global.author,
              });
            });
        }
        break;
//=================================================//
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
          axios
            .get(`https://nekos.life/api/v2/img/${command}`)
            .then(({ data }) => {
              XliconBotInc.sendImageAsSticker(from, data.url, m, {
                packname: global.packname,
                author: global.author,
              });
            });
        }
        break;
//=================================================//
      case "checkme":
        neme = args.join(" ");
        bet = `${sender}`;
        var sifat = [
          "Fine",
          "Unfriendly",
          "Chapri",
          "Nibba/nibbi",
          "Annoying",
          "Dilapidated",
          "Angry person",
          "Polite",
          "Burden",
          "Great",
          "Cringe",
          "Liar",
        ];
        var hoby = [
          "Cooking",
          "Dancing",
          "Playing",
          "Gaming",
          "Painting",
          "Helping Others",
          "Watching anime",
          "Reading",
          "Riding Bike",
          "Singing",
          "Chatting",
          "Sharing Memes",
          "Drawing",
          "Eating Parents Money",
          "Playing Truth or Dare",
          "Staying Alone",
        ];
        var cakep = ["Yes", "No", "Very Ugly", "Very Handsome"];
        var wetak = [
          "Caring",
          "Generous",
          "Angry person",
          "Sorry",
          "Submissive",
          "Fine",
          "Im sorry",
          "Kind Hearted",
          "Patient",
          "UwU",
          "Top",
          "Helpful",
        ];

        var sipat = sifat[Math.floor(Math.random() * sifat.length)];
        var biho = hoby[Math.floor(Math.random() * hoby.length)];
        var bhucin = getRandomNumber(0, 100);
        var senga = getRandomNumber(0, 100);
        var chakep = cakep[Math.floor(Math.random() * cakep.length)];
        var watak = wetak[Math.floor(Math.random() * wetak.length)];
        var baik = getRandomNumber(0, 100);
        var burug = getRandomNumber(0, 100);
        var cerdas = getRandomNumber(0, 100);
        var berani = getRandomNumber(0, 100);
        var takut = getRandomNumber(0, 100);
        profile = `*≡══《 Check @${bet.split("@")[0]} 》══≡*

*Name :* ${pushname}
*Characteristic :* ${sipat}
*Hobby :* ${biho}
*Simp :* ${bhucin}%
*Great :* ${senga}%
*Handsome :* ${chakep}
*Character :* ${watak}
*Good Morals :* ${baik}%
*Bad Morals :* ${burug}%
*Intelligence :* ${cerdas}%
*Courage :* ${berani}%
*Afraid :* ${takut}%

*≡═══《 CHECK PROPERTIES 》═══≡*`;
        try {
          ppuser = await XliconBotInc.profilePictureUrl(m.sender, "image");
        } catch (err) {
          ppuser =
            "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60";
        }
        ppxeon = await getBuffer(ppuser);
        XliconBotInc.sendMessage(
          from,
          { image: ppxeon, caption: profile, mentions: [bet] },
          { quoted: m }
        );
        break;
//=================================================//
      case "charactercheck":
        if (!text)
          return replygcXlicon(
            `Tag Someone, Example : ${prefix + command} @Xeon`
          );
        const xeony = [
          "Compassionate",
          "Generous",
          "Grumpy",
          "Forgiving",
          "Obedient",
          "Good",
          "Simp",
          "Kind-Hearted",
          "patient",
          "UwU",
          "top, anyway",
          "Helpful",
        ];
        const taky = xeony[Math.floor(Math.random() * xeony.length)];
        XliconBotInc.sendMessage(
          from,
          { text: `Character Check : ${q}\nAnswer : *${taky}*` },
          { quoted: m }
        );
        break;
      case "stupidcheck":
      case "uncleancheck":
      case "hotcheck":
      case "smartcheck":
      case "evilcheck":
      case "dogcheck":
      case "coolcheck":
      case "waifucheck":
      case "handsomecheck":
      case "beautifulcheck":
      case "awesomecheck":
      case "greatcheck":
      case "gaycheck":
      case "cutecheck":
      case "lesbiancheck":
      case "hornycheck":
      case "prettycheck":
      case "lovelycheck":
      case "uglycheck":
        if (!m.isGroup) return replygcXlicon(mess.group);
        const cex = body.slice(0);
        const cek2 = getRandomNumber(0, 100);
        if (mentionByReply) {
          XliconBotInc.sendMessage(
            from,
            {
              text:
                "Question : *" +
                cex +
                "*\nChecker : " +
                `@${mentionByReply.split("@")[0]}` +
                "\nAnswer : " +
                cek2 +
                "%",
              mentions: [mentionByReply],
            },
            { quoted: m }
          );
        } else if (mentionByTag[0] && isGroup) {
          XliconBotInc.sendMessage(
            from,
            {
              text:
                "Question : *" +
                cex +
                "*\nChecker : " +
                `@${mentionByTag[0].split("@")[0]}` +
                "\nAnswer : " +
                cek2 +
                "%",
              mentions: [mentionByTag[0]],
            },
            { quoted: m }
          );
        } else if (!mentionByReply && !mentionByTag[0]) {
          XliconBotInc.sendMessage(
            from,
            {
              text:
                "Question : *" +
                cex +
                "*\nChecker : " +
                `@${sender.split("@")[0]}` +
                "\nAnswer : " +
                cek2 +
                "%",
              mentions: [sender],
            },
            { quoted: m }
          );
        }
        break;
//=================================================//
      case "lovesticker":
        {
          var ano = await fetchJson(
            "https://raw.githubusercontent.com/DGXeon/XeonMedia/main/love"
          );
          var wifegerak = ano.split("\n");
          var wifegerakx =
            wifegerak[Math.floor(Math.random() * wifegerak.length)];
          encmedia = await XliconBotInc.sendImageAsSticker(
            from,
            wifegerakx,
            m,
            { packname: global.packname, author: global.author }
          );
        }
        break;
//=================================================//
  case "ssweb":
  case "screenshot":
  {
        if (!q) return replygcXlicon(`Please provide a query to generate an image. Example: ${prefix + command} Beautiful landscape`);
        const api4Url = `https://widipe.com/ssfull?url=${q}`;
        try {
          await XliconBotInc.sendMessage(m.chat, { image: { url: api4Url } }, { quoted: m });
        } catch (error) {
          console.error(error);
          replygcXlicon("An error occurred while generating the image.");
        }
      }
        break;
//=================================================//
  case "sswebtab":
  {
        if (!q) return replygcXlicon(`Please provide a query to generate an image. Example: ${prefix + command} Beautiful landscape`);
        const api5Url = `https://widipe.com/sstab?url=${q}`;
        try {
          await XliconBotInc.sendMessage(m.chat, { image: { url: api5Url } }, { quoted: m });
        } catch (error) {
          console.error(error);
          replygcXlicon("An error occurred while generating the image.");
        }
      }
        break;
//=================================================//
  case "sswebpc":
  {
        if (!q) return replygcXlicon(`Please provide a query to generate an image. Example: ${prefix + command} Beautiful landscape`);
        const api6Url = `https://widipe.com/sspc?url=${q}`;
        try {
          await XliconBotInc.sendMessage(m.chat, { image: { url: api6Url } }, { quoted: m });
        } catch (error) {
          console.error(error);
          replygcXlicon("An error occurred while generating the image.");
        }
      }
        break;
//=================================================//
      case "ttp":
        if (args.length == 0)
          return replygcXlicon(`Example: ${prefix + command} SalmanSer`);
        dgxeontks = args.join(" ");
        dgxeonvuff = await getBuffer(
          `https://widipe.com/ttp?text=${dgxeontks}`
        );
        XliconBotInc.sendImageAsSticker(m.chat, dgxeonvuff, m, {
          packname: packname,
          author: author,
        });
        break;
//=================================================//
      case "attp":
        if (args.length == 0)
          return replygcXlicon(`Example: ${prefix + command} SalmanSer`);
        dgxeontks2 = args.join(" ");
        dgxeonvuff2 = await getBuffer(
          `https://widipe.com/attp?text=${dgxeontks2}`
        );
        XliconBotInc.sendImageAsSticker(m.chat, dgxeonvuff2, m, {
          packname: packname,
          author: author,
        });
        break;
//=================================================//
      case "blur":
        {
          if (!isMedia) return replygcXlicon("Where Is The Image");
          let media = await XliconBotInc.downloadAndSaveMediaMessage(quoted);
          let anu = await TelegraPh(media);
          XliconBotInc.sendMessage(
            m.chat,
            {
              image: {
                url: `https://widipe.com/blur?url=${anu}`,
              },
              caption: "©𝐗𝐩𝐥𝐨𝐚𝐝𝐞𝐫𝐁𝐨𝐭",
            },
            { quoted: m }
          );
        }
        break;
//=================================================//
      case "hentaivideo":
        {
          if (!m.isGroup) return  replygcXlicon(mess.group);
          if (!AntiNsfw) return replygcXlicon(mess.nsfw);
          const { hentai } = require("./lib/scraper.js");
          anu = await hentai();
          result912 = anu[Math.floor(Math.random(), anu.length)];
          XliconBotInc.sendMessage(
            m.chat,
            {
              video: { url: result912.video_1 },
              caption: `${themeemoji} Title : ${result912.title}\n${themeemoji} Category : ${result912.category}\n${themeemoji} Mimetype : ${result912.type}\n${themeemoji} Views : ${result912.views_count}\n${themeemoji} Shares : ${result912.share_count}\n${themeemoji} Source : ${result912.link}\n${themeemoji} Media Url : ${result912.video_1}`,
            },
            { quoted: m }
          );
        }
        break;
//=================================================//
      case "trap":
        if (!m.isGroup) return replygcXlicon(mess.group);
        if (!AntiNsfw) return replygcXlicon(mess.nsfw);
        waifudd = await axios.get(`https://waifu.pics/api/nsfw/${command}`);
        XliconBotInc.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: waifudd.data.url } },
          { quoted: m }
        );
        break;
//=================================================//
      case "neko":
        if (!m.isGroup) return replygcXlicon(mess.group);
        if (!AntiNsfw) return replygcXlicon(mess.nsfw);
        waifudd = await axios.get(`https://waifu.pics/api/nsfw/neko`);
        XliconBotInc.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: waifudd.data.url } },
          { quoted: m }
        );
        break;
//=================================================//
      case "waifu":
        if (!m.isGroup) return replygcXlicon(mess.group);
        if (!AntiNsfw) return replygcXlicon(mess.nsfw);
        waifudd = await axios.get(`https://waifu.pics/api/nsfw/waifu`);
        XliconBotInc.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: waifudd.data.url } },
          { quoted: m }
        );
        break;
//=================================================//
      case "gasm":
        if (!m.isGroup) return replygcXlicon(mess.group);
        if (!AntiNsfw) return replygcXlicon(mess.nsfw);
        waifudd = await axios.get(`https://nekos.life/api/v2/img/${command}`);
        XliconBotInc.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: waifudd.data.url } },
          { quoted: m }
        );
        break;
//=================================================//
      case "milf":
        if (!m.isGroup) return replygcXlicon(mess.group);
        var ahegaonsfw = JSON.parse(
          fs.readFileSync("./src/media/nsfw/milf.json")
        );
        var xeonyresult = pickRandom(ahegaonsfw);
        XliconBotInc.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: xeonyresult.url } },
          { quoted: m }
        );
        break;
//=================================================//
      case "animespank":
        if (!m.isGroup) return replygcXlicon(mess.group);
        if (!AntiNsfw) return replygcXlicon(mess.nsfw);
        waifudd = await axios.get(`https://nekos.life/api/v2/img/spank`);
        await XliconBotInc.sendMessage(
          m.chat,
          {
            caption: `©𝐗𝐩𝐥𝐨𝐚𝐝𝐞𝐫𝐁𝐨𝐭`,
            image: { url: waifudd.data.url },
          },
          { quoted: m }
        ).catch((err) => {
          return "Error!";
        });
        break;
//=================================================//
      case "ahegao":
        if (!m.isGroup) return replygcXlicon(mess.group);
        if (!AntiNsfw) return replygcXlicon(mess.nsfw);
        var ahegaonsfw = JSON.parse(
          fs.readFileSync("./src/media/nsfw/ahegao.json")
        );
        var xeonyresult = pickRandom(ahegaonsfw);
        XliconBotInc.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: xeonyresult.url } },
          { quoted: m }
        );
        break;
//=================================================//
      case "ass":
        if (!m.isGroup) return replygcXlicon(mess.group);
        if (!AntiNsfw) return replygcXlicon(mess.nsfw);
        var ahegaonsfw = JSON.parse(
          fs.readFileSync("./src/media/nsfw/ass.json")
        );
        var xeonyresult = pickRandom(ahegaonsfw);
        XliconBotInc.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: xeonyresult.url } },
          { quoted: m }
        );
        break;
//=================================================//
      case "bdsm":
        if (!m.isGroup) return replygcXlicon(mess.group);
        if (!AntiNsfw) return replygcXlicon(mess.nsfw);
        var ahegaonsfw = JSON.parse(
          fs.readFileSync("./src/media/nsfw/bdsm.json")
        );
        var xeonyresult = pickRandom(ahegaonsfw);
        XliconBotInc.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: xeonyresult.url } },
          { quoted: m }
        );
        break;
//=================================================//
      case "blowjob":
        if (!m.isGroup) return replygcXlicon(mess.group);
        if (!AntiNsfw) return replygcXlicon(mess.nsfw);
        var ahegaonsfw = JSON.parse(
          fs.readFileSync("./src/media/nsfw/blowjob.json")
        );
        var xeonyresult = pickRandom(ahegaonsfw);
        XliconBotInc.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: xeonyresult.url } },
          { quoted: m }
        );
        break;
 //=================================================//
      case "cuckold":
        if (!m.isGroup) return replygcXlicon(mess.group);
        if (!AntiNsfw) return replygcXlicon(mess.nsfw);
        var ahegaonsfw = JSON.parse(
          fs.readFileSync("./src/media/nsfw/cuckold.json")
        );
        var xeonyresult = pickRandom(ahegaonsfw);
        XliconBotInc.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: xeonyresult.url } },
          { quoted: m }
        );
        break;
//=================================================//
      case "cum":
        if (!m.isGroup) return replygcXlicon(mess.group);
        if (!AntiNsfw) return replygcXlicon(mess.nsfw);
        var ahegaonsfw = JSON.parse(
          fs.readFileSync("./src/media/nsfw/cum.json")
        );
        var xeonyresult = pickRandom(ahegaonsfw);
        XliconBotInc.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: xeonyresult.url } },
          { quoted: m }
        );
        break;
//=================================================//
      case "eba":
        if (!m.isGroup) return replygcXlicon(mess.group);
        if (!AntiNsfw) return replygcXlicon(mess.nsfw);
        var ahegaonsfw = JSON.parse(
          fs.readFileSync("./src/media/nsfw/eba.json")
        );
        var xeonyresult = pickRandom(ahegaonsfw);
        XliconBotInc.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: xeonyresult.url } },
          { quoted: m }
        );
        break;
//=================================================//
      case "ero":
        if (!m.isGroup) return replygcXlicon(mess.group);
        if (!AntiNsfw) return replygcXlicon(mess.nsfw);
        var ahegaonsfw = JSON.parse(
          fs.readFileSync("./src/media/nsfw/ero.json")
        );
        var xeonyresult = pickRandom(ahegaonsfw);
        XliconBotInc.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: xeonyresult.url } },
          { quoted: m }
        );
        break;
//=================================================//
      case "femdom":
        if (!m.isGroup) return replygcXlicon(mess.group);
        if (!AntiNsfw) return replygcXlicon(mess.nsfw);
        var ahegaonsfw = JSON.parse(
          fs.readFileSync("./src/media/nsfw/femdom.json")
        );
        var xeonyresult = pickRandom(ahegaonsfw);
        XliconBotInc.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: xeonyresult.url } },
          { quoted: m }
        );
        break;
//=================================================//
      case "foot":
        if (!m.isGroup) return replygcXlicon(mess.group);
        if (!AntiNsfw) return replygcXlicon(mess.nsfw);
        var ahegaonsfw = JSON.parse(
          fs.readFileSync("./src/media/nsfw/foot.json")
        );
        var xeonyresult = pickRandom(ahegaonsfw);
        XliconBotInc.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: xeonyresult.url } },
          { quoted: m }
        );
        break;
//=================================================//
      case "gangbang":
        if (!m.isGroup) return replygcXlicon(mess.group);
        if (!AntiNsfw) return replygcXlicon(mess.nsfw);
        var ahegaonsfw = JSON.parse(
          fs.readFileSync("./src/media/nsfw/gangbang.json")
        );
        var xeonyresult = pickRandom(ahegaonsfw);
        XliconBotInc.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: xeonyresult.url } },
          { quoted: m }
        );
        break;
//=================================================//
      case "glasses":
        if (!m.isGroup) return replygcXlicon(mess.group);
        if (!AntiNsfw) return replygcXlicon(mess.nsfw);
        var ahegaonsfw = JSON.parse(
          fs.readFileSync("./src/media/nsfw/glasses.json")
        );
        var xeonyresult = pickRandom(ahegaonsfw);
        XliconBotInc.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: xeonyresult.url } },
          { quoted: m }
        );
        break;
//=================================================//
      case "hentai":
        if (!m.isGroup) return replygcXlicon(mess.group);
        if (!AntiNsfw) return replygcXlicon(mess.nsfw);
        var ahegaonsfw = JSON.parse(
          fs.readFileSync("./src/media/nsfw/hentai.json")
        );
        var xeonyresult = pickRandom(ahegaonsfw);
        XliconBotInc.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: xeonyresult.url } },
          { quoted: m }
        );
        break;
//=================================================//
      case "jahy":
        if (!m.isGroup) return replygcXlicon(mess.group);
        if (!AntiNsfw) return replygcXlicon(mess.nsfw);
        var ahegaonsfw = JSON.parse(
          fs.readFileSync("./src/media/nsfw/jahy.json")
        );
        var xeonyresult = pickRandom(ahegaonsfw);
        XliconBotInc.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: xeonyresult.url } },
          { quoted: m }
        );
        break;
//=================================================//
      case "manga":
        if (!m.isGroup) return replygcXlicon(mess.group);
        if (!AntiNsfw) return replygcXlicon(mess.nsfw);
        var ahegaonsfw = JSON.parse(
          fs.readFileSync("./src/media/nsfw/manga.json")
        );
        var xeonyresult = pickRandom(ahegaonsfw);
        XliconBotInc.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: xeonyresult.url } },
          { quoted: m }
        );
        break;
//=================================================//
      case "masturbation":
        if (!m.isGroup) return replygcXlicon(mess.group);
        if (!AntiNsfw) return replygcXlicon(mess.nsfw);
        var ahegaonsfw = JSON.parse(
          fs.readFileSync("./src/media/nsfw/masturbation.json")
        );
        var xeonyresult = pickRandom(ahegaonsfw);
        XliconBotInc.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: xeonyresult.url } },
          { quoted: m }
        );
        break;
//=================================================//
      case "neko-hentai":
        if (!m.isGroup) return replygcXlicon(mess.group);
        if (!AntiNsfw) return replygcXlicon(mess.nsfw);
        var ahegaonsfw = JSON.parse(
          fs.readFileSync("./src/media/nsfw/neko.json")
        );
        var xeonyresult = pickRandom(ahegaonsfw);
        XliconBotInc.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: xeonyresult.url } },
          { quoted: m }
        );
        break;
//=================================================//
      case "neko-hentai2":
        if (!m.isGroup) return replygcXlicon(mess.group);
        if (!AntiNsfw) return replygcXlicon(mess.nsfw);
        var ahegaonsfw = JSON.parse(
          fs.readFileSync("./src/media/nsfw/neko2.json")
        );
        var xeonyresult = pickRandom(ahegaonsfw);
        XliconBotInc.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: xeonyresult.url } },
          { quoted: m }
        );
        break;
//=================================================//
      case "nsfwloli":
        if (!m.isGroup) return replygcXlicon(mess.group);
        if (!AntiNsfw) return replygcXlicon(mess.nsfw);
        var ahegaonsfw = JSON.parse(
          fs.readFileSync("./src/media/nsfw/nsfwloli.json")
        );
        var xeonyresult = pickRandom(ahegaonsfw);
        XliconBotInc.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: xeonyresult.url } },
          { quoted: m }
        );
        break;
//=================================================//
      case "orgy":
        if (!m.isGroup) return replygcXlicon(mess.group);
        if (!AntiNsfw) return replygcXlicon(mess.nsfw);
        var ahegaonsfw = JSON.parse(
          fs.readFileSync("./src/media/nsfw/orgy.json")
        );
        var xeonyresult = pickRandom(ahegaonsfw);
        XliconBotInc.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: xeonyresult.url } },
          { quoted: m }
        );
        break;
//=================================================//
      case "panties":
        if (!m.isGroup) return replygcXlicon(mess.group);
        if (!AntiNsfw) return replygcXlicon(mess.nsfw);
        var ahegaonsfw = JSON.parse(
          fs.readFileSync("./src/media/nsfw/panties.json")
        );
        var xeonyresult = pickRandom(ahegaonsfw);
        XliconBotInc.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: xeonyresult.url } },
          { quoted: m }
        );
        break;
//=================================================//
      case "pussy":
        if (!m.isGroup) return replygcXlicon(mess.group);
        if (!AntiNsfw) return replygcXlicon(mess.nsfw);
        var ahegaonsfw = JSON.parse(
          fs.readFileSync("./src/media/nsfw/pussy.json")
        );
        var xeonyresult = pickRandom(ahegaonsfw);
        XliconBotInc.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: xeonyresult.url } },
          { quoted: m }
        );
        break;
//=================================================//
      case "tentacles":
        if (!m.isGroup) return replygcXlicon(mess.group);
        if (!AntiNsfw) return replygcXlicon(mess.nsfw);
        var ahegaonsfw = JSON.parse(
          fs.readFileSync("./src/media/nsfw/tentacles.json")
        );
        var xeonyresult = pickRandom(ahegaonsfw);
        XliconBotInc.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: xeonyresult.url } },
          { quoted: m }
        );
        break;
//=================================================//
      case "thighs":
        if (!m.isGroup) return replygcXlicon(mess.group);
        if (!AntiNsfw) return replygcXlicon(mess.nsfw);
        var ahegaonsfw = JSON.parse(
          fs.readFileSync("./src/media/nsfw/thighs.json")
        );
        var xeonyresult = pickRandom(ahegaonsfw);
        XliconBotInc.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: xeonyresult.url } },
          { quoted: m }
        );
        break;
//=================================================//
      case "yuri":
        if (!m.isGroup) return replygcXlicon(mess.group);
        if (!AntiNsfw) return replygcXlicon(mess.nsfw);
        var ahegaonsfw = JSON.parse(
          fs.readFileSync("./src/media/nsfw/yuri.json")
        );
        var xeonyresult = pickRandom(ahegaonsfw);
        XliconBotInc.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: xeonyresult.url } },
          { quoted: m }
        );
        break;
//=================================================//
      case "zettai":
        if (!m.isGroup) return replygcXlicon(mess.group);
        if (!AntiNsfw) return replygcXlicon(mess.nsfw);
        var ahegaonsfw = JSON.parse(
          fs.readFileSync("./src/media/nsfw/zettai.json")
        );
        var xeonyresult = pickRandom(ahegaonsfw);
        XliconBotInc.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: xeonyresult.url } },
          { quoted: m }
        );
        break;
//=================================================//
      case "gifblowjob":
        if (!m.isGroup) return replygcXlicon(mess.group);
        if (!AntiNsfw) return replygcXlicon(mess.nsfw);
        let assss = await axios.get("https://api.waifu.pics/nsfw/blowjob");
        var bobuff = await fetchBuffer(assss.data.url);
        var bogif = await buffergif(bobuff);
        await XliconBotInc.sendMessage(
          m.chat,
          { video: bogif, gifPlayback: true },
          { quoted: m }
        ).catch((err) => {});
        break;
//=================================================//
      case "gifhentai":
        if (!m.isGroup) return replygcXlicon(mess.group);
        if (!AntiNsfw) return replygcXlicon(mess.nsfw);
        var ahegaonsfw = JSON.parse(
          fs.readFileSync("./src/media/nsfw/gifs.json")
        );
        var xeonyresultx = pickRandom(ahegaonsfw);
        await XliconBotInc.sendMessage(
          m.chat,
          { video: xeonyresultx, gifPlayback: true },
          { quoted: m }
        ).catch((err) => {});
        break;
//=================================================//
      case "animeawoo":
        {
          waifudd = await axios.get(`https://waifu.pics/api/sfw/awoo`);
          await XliconBotInc.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
//=================================================//
      case "animemegumin":
        {
          waifudd = await axios.get(`https://waifu.pics/api/sfw/megumin`);
          await XliconBotInc.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
//=================================================//
      case "animeshinobu":
        {
          waifudd = await axios.get(`https://waifu.pics/api/sfw/shinobu`);
          await XliconBotInc.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
//=================================================//
      case "animehandhold":
        {
          waifudd = await axios.get(`https://waifu.pics/api/sfw/handhold`);
          await XliconBotInc.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
//=================================================//
      case "animehighfive":
        {
          waifudd = await axios.get(`https://waifu.pics/api/sfw/highfive`);
          await XliconBotInc.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
//=================================================//
      case "animecringe":
        {
          waifudd = await axios.get(`https://waifu.pics/api/sfw/cringe`);
          await XliconBotInc.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
//=================================================//
      case "animedance":
        {
          waifudd = await axios.get(`https://waifu.pics/api/sfw/dance`);
          await XliconBotInc.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
//=================================================//
      case "animehappy":
        {
          waifudd = await axios.get(`https://waifu.pics/api/sfw/happy`);
          await XliconBotInc.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
//=================================================//
      case "animeglomp":
        {
          waifudd = await axios.get(`https://waifu.pics/api/sfw/glomp`);
          await XliconBotInc.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
//=================================================//
      case "animesmug":
        {
          waifudd = await axios.get(`https://waifu.pics/api/sfw/smug`);
          await XliconBotInc.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
//=================================================//
      case "animeblush":
        {
          waifudd = await axios.get(`https://waifu.pics/api/sfw/blush`);
          await XliconBotInc.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
//=================================================//
      case "animewave":
        {
          waifudd = await axios.get(`https://waifu.pics/api/sfw/wave`);
          await XliconBotInc.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
 //=================================================//
      case "animesmile":
        {
          waifudd = await axios.get(`https://waifu.pics/api/sfw/smile`);
          await XliconBotInc.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
//=================================================//
      case "animepoke":
        {
          waifudd = await axios.get(`https://waifu.pics/api/sfw/poke`);
          await XliconBotInc.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
//=================================================//
      case "animewink":
        {
          waifudd = await axios.get(`https://waifu.pics/api/sfw/wink`);
          await XliconBotInc.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
//=================================================//
      case "animebonk":
        {
          waifudd = await axios.get(`https://waifu.pics/api/sfw/bonk`);
          await XliconBotInc.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
//=================================================//
      case "animebully":
        {
          waifudd = await axios.get(`https://waifu.pics/api/sfw/bully`);
          await XliconBotInc.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
//=================================================//
      case "animeyeet":
        {
          waifudd = await axios.get(`https://waifu.pics/api/sfw/yeet`);
          await XliconBotInc.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
//=================================================//
      case "animebite":
        {
          waifudd = await axios.get(`https://waifu.pics/api/sfw/bite`);
          await XliconBotInc.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
//=================================================//
      case "animelick":
        {
          waifudd = await axios.get(`https://waifu.pics/api/sfw/lick`);
          await XliconBotInc.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
//=================================================//
      case "animekill":
        {
          waifudd = await axios.get(`https://waifu.pics/api/sfw/kill`);
          await XliconBotInc.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
//=================================================//
      case "animecry":
        {
          waifudd = await axios.get(`https://waifu.pics/api/sfw/cry`);
          await XliconBotInc.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
//=================================================//
      case "animewallpaper":
        {
          waifudd = await axios.get(`https://nekos.life/api/v2/img/wallpaper`);
          await XliconBotInc.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
//=================================================//
      case "animekiss":
        {
          waifudd = await axios.get(`https://nekos.life/api/v2/img/kiss`);
          await XliconBotInc.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
//=================================================//
      case "animehug":
        {
          waifudd = await axios.get(`https://nekos.life/api/v2/img/hug`);
          await XliconBotInc.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
//=================================================//
      case "animeneko":
        {
          waifudd = await axios.get(`https://waifu.pics/api/sfw/neko`);
          await XliconBotInc.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
//=================================================//
      case "animepat":
        {
          waifudd = await axios.get(`https://nekos.life/api/v2/img/pat`);
          await XliconBotInc.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
//=================================================//
      case "animeslap":
        {
          waifudd = await axios.get(`https://nekos.life/api/v2/img/slap`);
          await XliconBotInc.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
//=================================================//
      case "animecuddle":
        {
          waifudd = await axios.get(`https://nekos.life/api/v2/img/cuddle`);
          await XliconBotInc.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
 //=================================================//
      case "animewaifu":
        {
          waifudd = await axios.get(`https://nekos.life/api/v2/img/waifu`);
          await XliconBotInc.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
//=================================================//
      case "animenom":
        {
          waifudd = await axios.get(`https://nekos.life/api/v2/img/nom`);
          await XliconBotInc.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
//=================================================//
      case "animefoxgirl":
        {
          waifudd = await axios.get(`https://nekos.life/api/v2/img/fox_girl`);
          await XliconBotInc.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
//=================================================//
      case "animetickle":
        {
          waifudd = await axios.get(`https://nekos.life/api/v2/img/tickle`);
          await XliconBotInc.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
//=================================================//
      case "animegecg":
        {
          waifudd = await axios.get(`https://nekos.life/api/v2/img/gecg`);
          await XliconBotInc.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
//=================================================//
      case "dogwoof":
        {
          waifudd = await axios.get(`https://nekos.life/api/v2/img/woof`);
          await XliconBotInc.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
//=================================================//
      case "8ballpool":
        {
          waifudd = await axios.get(`https://nekos.life/api/v2/img/8ball`);
          await XliconBotInc.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
//=================================================//
      case "goosebird":
        {
          waifudd = await axios.get(`https://nekos.life/api/v2/img/goose`);
          await XliconBotInc.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
//=================================================//
      case "animefeed":
        {
          waifudd = await axios.get(`https://nekos.life/api/v2/img/feed`);
          await XliconBotInc.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
//=================================================//
      case "animeavatar":
        {
          waifudd = await axios.get(`https://nekos.life/api/v2/img/avatar`);
          await XliconBotInc.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
//=================================================//
      case "lizardpic":
        {
          waifudd = await axios.get(`https://nekos.life/api/v2/img/lizard`);
          await XliconBotInc.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
//=================================================//
      case "catmeow":
        {
          waifudd = await axios.get(`https://nekos.life/api/v2/img/meow`);
          await XliconBotInc.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
//=================================================//
      case "anime":
        {
          if (!text) return replygcXlicon(`Which anime are you lookin for?`);
          const malScraper = require("mal-scraper");
          const anime = await malScraper
            .getInfoFromName(text)
            .catch(() => null);
          if (!anime) return replygcXlicon(`Could not find`);
          let animetxt = `
🎀 *Title: ${anime.title}*
🎋 *Type: ${anime.type}*
🎐 *Premiered on: ${anime.premiered}*
💠 *Total Episodes: ${anime.episodes}*
📈 *Status: ${anime.status}*
💮 *Genres: ${anime.genres}
📍 *Studio: ${anime.studios}*
🌟 *Score: ${anime.score}*
💎 *Rating: ${anime.rating}*
🏅 *Rank: ${anime.ranked}*
💫 *Popularity: ${anime.popularity}*
♦️ *Trailer: ${anime.trailer}*
🌐 *URL: ${anime.url}*
❄ *Description:* ${anime.synopsis}*`;
          await XliconBotInc.sendMessage(
            m.chat,
            { image: { url: anime.picture }, caption: animetxt },
            { quoted: m }
          );
        }
        break;
//=================================================//
      case "animequote":
        {
          try {
            const res = await fetch("https://some-random-api.com/animu/quote");
            if (!res.ok) throw await res.text();
            const json = await res.json();
            const { sentence, character, anime } = json;
            const message = `${themeemoji}Quote\n${sentence}\n\n${themeemoji}Character: \`\`\`${character}\`\`\`\n${themeemoji}Anime: \`\`\`${anime}\`\`\`\n`;
            XliconBotInc.sendMessage(
              m.chat,
              { text: message },
              "extendedTextMessage",
              { quoted: m }
            );
          } catch (error) {
            console.error(error);
          }
        }
        break;
//=================================================//
//=================================================//
//=================================================//
case "smeme": {
 if (!text) return replygcXlicon(`Reply to Image With Caption ${prefix + command}`)
if (!quoted) return replygcXlicon(`Reply to Image With Caption ${prefix + command}`)
if (/image/.test(mime)) {
atas = text.split('|')[0] ? text.split('|')[0] : '-'
bawah = text.split('|')[1] ? text.split('|')[1] : '-'
let dwnld = await XliconBotInc.downloadAndSaveMediaMessage(qmsg)
let Bjirka = await TelegraPh(dwnld)
let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(bawah)}/${encodeURIComponent(atas)}.png?background=${Bjirka}`
let pop = await XliconBotInc.sendImageAsSticker(m.chat, smeme, m, {
packname: global.packname,
author: global.author
})
fs.unlinkSync(pop)
}
}
break;
//=================================================//
case "tinyurl": case "shortlink": {
if (!text) return replygcXlicon(`*Example: ${prefix+command} https://instagram.com/heyits_tylor*`)
let anu = await axios.get(`https://tinyurl.com/api-create.php?url=${text}`)
replygcXlicon(anu.data)
}
break;
//=================================================//
case "calculate":
case "calculator":
{
if (text.split("+")[0] && text.split("+")[1]) {
const value_one = Number(text.split("+")[0])
const value_two = Number(text.split("+")[1])
replygcXlicon(`${value_one + value_two}`)
} else if (text.split("-")[0] && text.split("-")[1]) {
const value_one = Number(text.split("-")[0])
const value_two = Number(text.split("-")[1])
replygcXlicon(`${value_one - value_two}`)
} else if (text.split("×")[0] && text.split("×")[1]) {
const value_one = Number(text.split("×")[0])
const value_two = Number(text.split("×")[1])
replygcXlicon(`${value_one * value_two}`)
} else if (text.split("÷")[0] && text.split("÷")[1]) {
const value_one = Number(text.split("÷")[0])
const value_two = Number(text.split("÷")[1])
(`${value_one / value_two}`)
} else replygcXlicon(`*Example* : ${prefix + command} 1 + 1`)
}
break
//=================================================//
     case "pairid":
        {
          if (!text) return replygcXlicon("Please enter your phone number starting with country code e.g 254...");
          let d = await fetchJson(
            `https://bk9.fun/tools/PairId?q=${text}`
          );
          if (!d.BK9) {
            return replygcXlicon(
              "An error occured!"
            );
          } else {
            replygcXlicon(d.BK9);
          }
        }
        break;
//=================================================//
     case "pairfile":
        {
          if (!text) return replygcXlicon("Please enter your phone number starting with country code e.g 254...");
          let d = await fetchJson(
            `https://bk9.fun/tools/PairFile?q=${text}`
          );
          if (!d.BK9) {
            return replygcXlicon(
              "An error occured!"
            );
          } else {
            replygcXlicon(d.BK9);
          }
        }
        break;
//=================================================//
     case "aidetector":
     case "gptdetector":
        {
          if (!text) return replygcXlicon("Where is the text?.");
          let d = await fetchJson(
            `https://bk9.fun/tools/txtdetect?q=${text}`
          );
          if (!d.BK9) {
            return replygcXlicon(
              "An error occured!"
            );
          } else {
            replygcXlicon(`Language =  ${d.BK9.data.detected_language}\nIs human = ${d.BK9.data.isHuman}\nTotal words = ${d.BK9.data.textWords}\nAi words =  ${d.BK9.data.aiWords}\nFake percentage =  ${d.BK9.data.fakePercentage}\nFeedback =  ${d.BK9.data.feedback}`);
          }
        }
        break;
//=================================================//
      case "tourl":
      case "url":
        {
          let media = await XliconBotInc.downloadAndSaveMediaMessage(qmsg);
          if (/image/.test(mime)) {
            let anu = await TelegraPh(media);
            replygcXlicon(util.format(anu));
          } else if (!/image/.test(mime)) {
            let anu = await UploadFileUgu(media);
            replygcXlicon(util.format(anu));
          }
          await fs.unlinkSync(media);
        }
        break;
//=================================================//
      case "image":
      case "img":
       {
          const searchTerm = args.join(" ");
        if (!searchTerm) return replygcXlicon(`${pushname} Please provide a search term!`);

        const url = `https://www.exenoz.tech/api/pinterest?q=${encodeURIComponent(searchTerm)}`;

        try {
          const response = await axios.get(url);
          const pins = response.data;

          const numImages = 5;
          const randomPins = pins.sort(() => 0.5 - Math.random()).slice(0, numImages);

          randomPins.forEach(pin => {
            XliconBotInc.sendMessage(m.chat, { image: { url: pin.url } }, { quoted: m });
          });
        } catch (error) {
          console.error('Error fetching data from the API:', error);
          reply('Error fetching data from the API. Please try again later.');
        }
      }
        break;
//=================================================//
      case "listonline": 
      case "onlinemembers":
        {
      if (!m.isGroup) return replygcXlicon(mess.group);
        let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
        let online = [...Object.keys(store.presences[id]), botNumber]
        let liston = 1
        XliconBotInc.sendText(m.chat, '  「 *Online Members In This Group* 」\n\n' + online.map(v => `${liston++} . @` + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
      }
        break;
//=================================================//
    case "addlimit":
      case "givelimit":
        {
          if (!XeonTheCreator) return replygcXlicon(mess.owner);
          if (!text)
            return replygcXlicon(
              `*_Usage ${prefix + command} number|limit amount_*`
            );
          usernya = text.split("|")[0];
          limitnya = text.split("|")[1];
          let oo = `${usernya}@s.whatsapp.net`;
          db.data.users[oo].limit += limitnya;
          replygcXlicon(mess.done);
        }
        break;
      case "dellimit":
        {
          if (!XeonTheCreator) return replygcXlicon(mess.owner);
          if (!text)
            return replygcXlicon(
              `*_Usage ${prefix + command} number|limit amount_*`
            );
          usernya = text.split("|")[0];
          limitnya = text.split("|")[1];
          if (db.data.users[usernya + "@s.whatsapp.net"].limit < limitnya)
            return replygcXlicon(`*_His Limit Is Less Than ${limitnya}_*`);
          db.data.users[usernya + "@s.whatsapp.net"].limit -= limitnya;
          replygcXlicon(mess.done);
        }
        break;
//=================================================//
//=================================================//
//=================================================//
//=================================================//

       default:
        if (budy.startsWith("=>")) {
          if (!XeonTheCreator) return replygcXlicon(mess.owner);
          function Return(sul) {
            sat = JSON.stringify(sul, null, 2);
            bang = util.format(sat);
            if (sat == undefined) {
              bang = util.format(sul);
            }
            return replygcXlicon(bang);
          }
          try {
            replygcXlicon(
              util.format(eval(`(async () => { return ${budy.slice(3)} })()`))
            );
          } catch (e) {
            replygcXlicon(String(e));
          }
        }

        if (budy.startsWith(">")) {
          if (!XeonTheCreator) return replygcXlicon(mess.owner);
          try {
            let evaled = await eval(budy.slice(2));
            if (typeof evaled !== "string")
              evaled = require("util").inspect(evaled);
            await replygcXlicon(evaled);
          } catch (err) {
            await replygcXlicon(String(err));
          }
        }
        if (budy.startsWith("$")) {
          if (!XeonTheCreator) return replygcXlicon(mess.owner);
          exec(budy.slice(2), (err, stdout) => {
            if (err) return replygcXlicon(err);
            if (stdout) return replygcXlicon(stdout);
          });
        }
        if (isCmd && budy.toLowerCase() != undefined) {
          if (m.chat.endsWith("broadcast")) return;
          if (m.isBaileys) return;
          let msgs = global.db.data.database;
          if (!(budy.toLowerCase() in msgs)) return;
          XliconBotInc.copyNForward(m.chat, msgs[budy.toLowerCase()], true, {
            quoted: m,
          });
        }
    }
  } catch (err) {
    console.log(util.format(err));
     let e = String(err)
XliconBotInc.sendMessage(XliconBotInc.user.id, { text: `_*Sorry, couldn't perform that request; an error occurred*_\n_*If the error persists, please use ${prefix}reportbug (error message) to report the error to my developer.*_\n\nError=` + util.format(e), 
contextInfo:{
forwardingScore: 9999999, 
isForwarded: true
}})
	}
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
});
