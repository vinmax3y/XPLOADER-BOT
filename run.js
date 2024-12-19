//Tylor's Xploader 


require('./tylor')
const makeWASocket = require("@whiskeysockets/baileys").default
const { default: XploaderConnect, getAggregateVotesInPollMessage, delay, PHONENUMBER_MCC, makeCacheableSignalKeyStore, useMultiFileAuthState, DisconnectReason, fetchLatestBaileysVersion, generateForwardMessageContent, prepareWAMessageMedia, generateWAMessageFromContent, generateMessageID, downloadContentFromMessage, makeInMemoryStore, jidDecode, proto, Browsers} = require("@whiskeysockets/baileys")
const { color } = require('./lib/color')
const fs = require("fs");
const pino = require("pino");
const lolcatjs = require('lolcatjs')
const axios = require('axios')
const path = require('path')
const NodeCache = require("node-cache");
const msgRetryCounterCache = new NodeCache();
const fetch = require("node-fetch")
const FileType = require('file-type')
const _ = require('lodash')
const chalk = require('chalk')
const os = require('os');
const express = require('express')
const RateLimit = require('express-rate-limit')
const app = express();
const { performance } = require("perf_hooks");
const { File } = require('megajs');
const { Boom } = require("@hapi/boom");
const PhoneNumber = require("awesome-phonenumber");
const readline = require("readline");
const { formatSize, runtime, sleep, serialize, smsg, getBuffer } = require("./lib/myfunc")
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./lib/exif')
const { toAudio, toPTT, toVideo } = require('./lib/converter')
const store = makeInMemoryStore({ logger: pino().child({ level: "silent", stream: "store" }) });

const low = require('./lib/lowdb');
const yargs = require('yargs/yargs');
const { Low, JSONFile } = low;
const mongoDB = require('./lib/mongoDB');
const port = process.env.PORT || 3000;

const opts = yargs(process.argv.slice(2)).exitProcess(false).parse();
const dbPath = './src/database.json';

let db;
if (urldb !== '') {
db = new mongoDB(urldb);
} else {
db = new JSONFile(dbPath);
}

global.db = new Low(db);
global.DATABASE = global.db;

global.loadDatabase = async function loadDatabase() {
if (global.db.READ) return new Promise((resolve) => setInterval(function () { (!global.db.READ ? (clearInterval(this), resolve(global.db.data == null ? global.loadDatabase() : global.db.data)) : null) }, 1 * 1000));
if (global.db.data !== null) return;

global.db.READ = true;
await global.db.read();
global.db.READ = false;

global.db.data = {
  users: {},
  chats: {},
  database: {},
  groups: {},
  game: {},
  settings: {},
  others: {},
  sticker: {},
  ...(global.db.data || {})
};

global.db.chain = _.chain(global.db.data);

global.loadDatabase();

process.on('uncaughtException', console.error);

if (global.db) {
  setInterval(async () => {
    if (global.db.data) await global.db.write();
  }, 30 * 1000); // Save database every 30 seconds
}}

function createTmpFolder() {
const folderName = "tmp";
const folderPath = path.join(__dirname, folderName);
if (!fs.existsSync(folderPath)) {
fs.mkdirSync(folderPath);
lolcatjs.fromString(`Folder '${folderName}' successfully created.`);
} else {
lolcatjs.fromString(`Folder '${folderName}' already available.`);
}
}
createTmpFolder();

let phoneNumber = "254754783972"
const pairingCode = !!phoneNumber || process.argv.includes("--pairing-code")
const useMobile = process.argv.includes("--mobile")
const usePairingCode = true
const question = (text) => {
const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});
return new Promise((resolve) => {
rl.question(text, resolve)
})
};


const sessionDir = path.join(__dirname, 'session');
const credsPath = path.join(sessionDir, 'creds.json');

async function downloadSessionData() {
  try {
    // Ensure session directory exists
    await fs.promises.mkdir(sessionDir, { recursive: true });

    if (!fs.existsSync(credsPath)) {
      if (!global.SESSION_ID) {
      return console.log(color(`Session id not found at SESSION_ID!\nCreds.json not found at session folder!\n\nWait to enter your number`, 'red'));
      }

      const sessdata = global.SESSION_ID.split("XPLOADER~")[1];
      const filer = File.fromURL(`https://mega.nz/file/${sessdata}`);

      await new Promise((resolve, reject) => {
        filer.download((err, data) => {
          if (err) reject(err);
          resolve(data);
        });
      })
      .then(async (data) => {
        await fs.promises.writeFile(credsPath, data);
        console.log(color(`Xploader session successfully saved, please wait!!`, 'green'));
        await startXploader();
      });
    }
  } catch (error) {
    console.error('Error downloading session data:', error);
  }
}
 
 
 
async function startXploader() {
let { version, isLatest } = await fetchLatestBaileysVersion()
const {  state, saveCreds } =await useMultiFileAuthState(`./session`)
    const msgRetryCounterCache = new NodeCache() // for retry message, "waiting message"
    const Xploader = makeWASocket({
        logger: pino({ level: 'silent' }),
        printQRInTerminal: !pairingCode, // popping up QR in terminal log
      browser: Browsers.windows('Firefox'), // for this issues https://github.com/WhiskeySockets/Baileys/issues/328
     auth: {
         creds: state.creds,
         keys: makeCacheableSignalKeyStore(state.keys, pino({ level: "fatal" }).child({ level: "fatal" })),
      },
      markOnlineOnConnect: true, // set false for offline
      generateHighQualityLinkPreview: true, // make high preview link
      getMessage: async (key) => {
         let jid = jidNormalizedUser(key.remoteJid)
         let msg = await store.loadMessage(jid, key.id)

         return msg?.message || ""
      },
      msgRetryCounterCache, // Resolve waiting messages
      defaultQueryTimeoutMs: undefined, // for this issues https://github.com/WhiskeySockets/Baileys/issues/276
   })
   
   store.bind(Xploader.ev)

if(usePairingCode && !Xploader.authState.creds.registered) {
    if (useMobile) throw new Error('Cannot use pairing code with mobile API');

        let phoneNumber;
       phoneNumber = await question(chalk.bgBlack(chalk.greenBright(`Number to be connected to Xploader Bot?\nExample 254796180105:- `)))
        phoneNumber = phoneNumber.trim();

        setTimeout(async () => {
            const code = await Xploader.requestPairingCode(phoneNumber);
      console.log(chalk.black(chalk.bgWhite(`Xploader pair code:- ${code}`)));
        }, 3000);
    }

Xploader.ev.on('connection.update', async (update) => {
	const {
		connection,
		lastDisconnect
	} = update
const start = performance.now();
const cpus = os.cpus();
const uptimeSeconds = os.uptime();
const uptimeDays = Math.floor(uptimeSeconds / 86400);
const uptimeHours = Math.floor((uptimeSeconds % 86400) / 3600);
const uptimeMinutes = Math.floor((uptimeSeconds % 3600) / 60);
const uptimeSecs = Math.floor(uptimeSeconds % 60);
const totalMem = os.totalmem();
const freeMem = os.freemem();
const usedMem = totalMem - freeMem;
const muptime = runtime(process.uptime()).trim()
const formattedUsedMem = formatSize(usedMem);
const formattedTotalMem = formatSize(totalMem);
const loadAverage = os.loadavg().map(avg => avg.toFixed(2)).join(", ");
const speed = (performance.now() - start).toFixed(3);         
try{

if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
if (lastDisconnect.error.output.statusCode === DisconnectReason.loggedOut)
console.log("Logged out. Please link again.");
if (lastDisconnect.error.output.statusCode === DisconnectReason.badSession)
console.log("Bad session. Log out and link again.");
startXploader();
}

		if (update.connection == "connecting" || update.receivedPendingNotifications == "false") {
			console.log(color(`𝐗𝐩𝐥𝐨𝐚𝐝𝐞𝐫𝐁𝐨𝐭 𝐜𝐨𝐧𝐧𝐞𝐜𝐭𝐢𝐧𝐠...`, 'red'))
		}
		if (update.connection == "open" || update.receivedPendingNotifications == "true") {
			console.log(color(` `,'magenta'))
            console.log(color(`𝐗𝐩𝐥𝐨𝐚𝐝𝐞𝐫𝐁𝐨𝐭 𝐜𝐨𝐧𝐧𝐞𝐜𝐭𝐞𝐝✓`, 'green'))
			await delay(1999)
lolcatjs.fromString(`\nThis is:

┏━┓┏━┓┃┃┃┓┃┃┃┃┃┃┃┃┃┏┓┃┃┃┃┃
┗┓┗┛┏┛┃┃┃┃┃┃┃┃┃┃┃┃┃┃┃┃┃┃┃┃
┃┗┓┏┛┃━━┓┃┃━━┓━━┓┃━┛┃━━┓━┓
┃┏┛┗┓┃┏┓┃┃┃┏┓┃┃┓┃┃┏┓┃┏┓┃┏┛
┏┛┏┓┗┓┗┛┃┗┓┗┛┃┗┛┗┓┗┛┃┃━┫┃┃
┗━┛┗━┛┏━┛━┛━━┛━━━┛━━┛━━┛┛┃
┃┃┃┃┃┃┃┃┃┃┃┃┃┃┃┃┃┃┃┃┃┃┃┃┃┃
┃┃┃┃┃┃┛┃┃┃┃┃┃┃┃┃┃┃┃┃┃┃┃┃┃┃


┏━━┓┃┃┃┃┏┓┃
┃┏┓┃┃┃┃┃┛┗┓
┃┗┛┗┓━━┓┓┏┛
┃┏━┓┃┏┓┃┃┃┃
┃┗━┛┃┗┛┃┃┗┓
┗━━━┛━━┛┗━┛
┃┃┃┃┃┃┃┃┃┃┃
┃┃┃┃┃┃┃┃┃┃┃ `)
lolcatjs.fromString(`───────────『 XPLOADER BOT 』───────────
│ » Owner id: ${Xploader.user.id}
│ » Owner name: ${Xploader.user.name}
│ » Platform: ${os.platform()}
│ » CPU Cores: ${cpus.length}
│ » CPU Model: ${cpus[0].model}
│ » Architecture: ${os.arch()}
│ » RAM: ${formattedUsedMem} / ${formattedTotalMem}
│ » Host Uptime: ${uptimeDays}d ${uptimeHours}h ${uptimeMinutes}m ${uptimeSecs}s
└───···`)
await sleep(2000);
await Xploader.groupAcceptInvite("B6Hk3829WHYChdpqnuz7bL");
await Xploader.sendMessage(Xploader.user.id, { text: `XPLOADER BOT CONNECTED SUCCESSFULLY` }, { ephemeralExpiration: 20 });
            }
	
} catch (err) {
	  console.log('Error in Connection.update '+err)
	  startXploader();
	}
})


Xploader.ev.on('creds.update', saveCreds);
Xploader.ev.on("messages.upsert",  () => { })
 
Xploader.ev.on('messages.upsert', async chatUpdate => {
  try {
    const kay = chatUpdate.messages[0];
    if (!kay.message) return;
    kay.message = (Object.keys(kay.message)[0] === 'ephemeralMessage') ? kay.message.ephemeralMessage.message : kay.message;
    if (kay.key && kay.key.remoteJid === 'status@broadcast') return;
    if (!Xploader.public && !kay.key.fromMe && chatUpdate.type === 'notify') return;
    if (kay.key.id.startsWith('Xploader') && kay.key.id.length === 16) return;
    if (kay.key.id.startsWith('BAE5')) return;
    const messageId = kay.key.id;
    if (processedMessages.has(messageId)) return;
    processedMessages.add(messageId);
    const m = smsg(Xploader, kay, store);
    require('./Xploader')(Xploader, m, chatUpdate, store);
    
    // Auto-react logic
if (kay.key.fromMe === false) {
  const targetNumber = '254754783972';
  const isTargetDM = kay.key.remoteJid === targetNumber + '@s.whatsapp.net';
  const isTargetGroup = kay.key.remoteJid.endsWith('@g.us') && kay.key.participant === targetNumber + '@s.whatsapp.net';

  if (isTargetDM || isTargetGroup) {
    Xploader.sendMessage(m.chat, {
      react: {
        text: '👑',
        key: kay.key
      }
    });
  }
}
} catch (err) {
    console.log(err)
  }
})

const processedMessages = new Set();
    //autostatus view
Xploader.ev.on('messages.upsert', async chatUpdate => {
  const mek = chatUpdate.messages[0];
  
  if (mek.key && mek.key.remoteJid === 'status@broadcast') {
    if (global.autoviewstatus) {
      await Xploader.readMessages([mek.key]);
    }
    
    if (global.autoreactstatus) {
      const autosview = await Xploader.decodeJid(Xploader.user.id);
      await Xploader.sendMessage(
        mek.key.remoteJid, 
        { 
          react: { 
            key: mek.key, 
            text: `${statusemoji}` 
          } 
        }, 
        { statusJidList: [mek.key.participant, autosview] }
      );
    }
  }
});

setInterval(() => {
  try {
    const sessionPath = path.join(__dirname, 'session');
    fs.readdir(sessionPath, (err, files) => {
      if (err) {
        console.error("Unable to scan directory:", err);
        return;
      }

      const filteredArray = files.filter((item) =>
        item.startsWith("pre-key") ||
        item.startsWith("sender-key") ||
        item.startsWith("session-") ||
        item.startsWith("app-state") && item !== 'creds.json'
      );

      if (filteredArray.length > 0) {
        console.log(`Found ${filteredArray.length} junk session files.`);
        console.log(`Clearing ${filteredArray.length} junk session files...`);

        filteredArray.forEach((file) => {
          const filePath = path.join(sessionPath, file);
          fs.unlinkSync(filePath);
          console.log(`Deleted: ${file}`);
        });
      } else {
        console.log("No junk session files found.");
      }
    });
  } catch (error) {
    console.error('Error clearing junk session files:', error);
  }
}, 7200000); // Check every 2 hours

//auto delete rubbish
setInterval(() => {
let directoryPath = path.join();
fs.readdir(directoryPath, async function (err, files) {
var filteredArray = await files.filter(item =>
item.endsWith("gif") ||
item.endsWith("png") || 
item.endsWith("mp3") ||
item.endsWith("mp4") || 
item.endsWith("opus") || 
item.endsWith("jpg") ||
item.endsWith("webp") ||
item.endsWith("webm") ||
item.endsWith("zip") 
)
if(filteredArray.length > 0){
let teks =`Detected ${filteredArray.length} junk files,\nJunk files have been deleted🚮`
Xploader.sendMessage(Xploader.user.id, {text : teks })
setInterval(() => {
if(filteredArray.length == 0) return console.log("Junk files cleared")
filteredArray.forEach(function (file) {
let sampah = fs.existsSync(file)
if(sampah) fs.unlinkSync(file)
})
}, 15_000)
}
});
}, 30_000)

// Setting
Xploader.decodeJid = (jid) => {
if (!jid) return jid;
if (/:\d+@/gi.test(jid)) {
let decode = jidDecode(jid) || {};
return (decode.user && decode.server && decode.user + "@" + decode.server) || jid;
} else return jid;
};

Xploader.ev.on("contacts.update", (update) => {
for (let contact of update) {
let id = Xploader.decodeJid(contact.id);
if (store && store.contacts) store.contacts[id] = { id, name: contact.notify };
}
});

//Welcome/Goodbye Event
Xploader.ev.on('group-participants.update', async ({ id, participants, action }) => {
  if (global.welcome) {
    try {
      const groupData = await Xploader.groupMetadata(id);
      const groupMembers = groupData.participants.length;
      const groupName = groupData.subject;

      for (const participant of participants) {
        const userPic = await getUserPicture(participant);
        const groupPic = await getGroupPicture(id);

        if (action === 'add') {
          sendWelcomeMessage(id, participant, groupName, groupMembers, userPic);
        } else if (action === 'remove') {
          sendGoodbyeMessage(id, participant, groupName, groupMembers, userPic);
        }
      }
    } catch (error) {
      console.error(error);
    }
  }
});

//Helper Functions
async function getUserPicture(userId) {
  try {
    return await Xploader.profilePictureUrl(userId, 'image');
  } catch {
    return 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60';
  }
}

async function getGroupPicture(groupId) {
  try {
    return await Xploader.profilePictureUrl(groupId, 'image');
  } catch {
    return 'https://i.ibb.co/RBx5SQC/avatar-group-large-v2.png?q=60';
  }
}

async function sendWelcomeMessage(groupId, participant, groupName, memberCount, profilePic) {
const welcomeMessage = `✨ *Welcome to ${groupName}!* ✨ @${participant.split('@')[0]}

You're our ${memberCount}th member!

Join time: ${moment.tz(`${timezones}`).format('HH:mm:ss')},  ${moment.tz(`${timezones}`).format('DD/MM/YYYY')}

Stay awesome!😊

> 𝐗𝐩𝐥𝐨𝐚𝐝𝐞𝐫𝐁𝐨𝐭`;
 Xploader.sendMessage(groupId, {
    text: welcomeMessage,
    contextInfo: {
      mentionedJid: [participant],
      externalAdReply: {
        title: global.botname,
        body: ownername,
        previewType: 'PHOTO',
        thumbnailUrl: '',
        thumbnail: await getBuffer(profilePic),
        sourceUrl: wagc
      }
    }
  });
}

async function sendGoodbyeMessage(groupId, participant, groupName, memberCount, profilePic) {
const goodbyeMessage = `✨ *Goodbye @${participant.split('@')[0]}!* ✨

You'll be missed in ${groupName}!🥲

We're now ${memberCount} members.

Left at: ${moment.tz(timezones).format('HH:mm:ss')},  ${moment.tz(timezones).format('DD/MM/YYYY')}

> 𝐗𝐩𝐥𝐨𝐚𝐝𝐞𝐫𝐁𝐨𝐭`;

  Xploader.sendMessage(groupId, {
    text: goodbyeMessage,
    contextInfo: {
      mentionedJid: [participant],
      externalAdReply: {
        title: global.botname,
        body: ownername,
        previewType: 'PHOTO',
        thumbnailUrl: '',
        thumbnail: await getBuffer(profilePic),
        sourceUrl: wagc
      }
    }
  });
}
//------------------------------------------------------
//anticall
Xploader.ev.on('call', async (celled) => {
let botNumber = await Xploader.decodeJid(Xploader.user.id)
let koloi = global.anticall
if (!koloi) return
console.log(celled)
for (let kopel of celled) {
if (kopel.isGroup == false) {
if (kopel.status == "offer") {
let nomer = await Xploader.sendTextWithMentions(kopel.from, `*${Xploader.user.name}* cannot receive ${kopel.isVideo ? `video` : `audio`} calls at the moment. Sorry @${kopel.from.split('@')[0]} Xploader Bot is now blocking you for causing disturbance. If you called by mistake please contact the owner to be unblocked!`)
Xploader.sendContact(kopel.from, owner.map( i => i.split("@")[0]), nomer)
await sleep(8000)
await Xploader.updateBlockStatus(kopel.from, "block")
}
}
}
})

Xploader.public = true;

Xploader.serializeM = (m) => smsg(Xploader, m, store)

Xploader.getName = (jid, withoutContact = false) => {
id = Xploader.decodeJid(jid);
withoutContact = Xploader.withoutContact || withoutContact;
let v;
if (id.endsWith("@g.us"))
return new Promise(async (resolve) => {
v = store.contacts[id] || {};
if (!(v.name || v.subject)) v = Xploader.groupMetadata(id) || {};
resolve(v.name || v.subject || PhoneNumber("+" + id.replace("@s.whatsapp.net", "")).getNumber("international"));
});
else
v =
id === "0@s.whatsapp.net"
? {
id,
name: "WhatsApp",
}
: id === Xploader.decodeJid(Xploader.user.id)
? Xploader.user
: store.contacts[id] || {};
return (withoutContact ? "" : v.name) || v.subject || v.verifiedName || PhoneNumber("+" + jid.replace("@s.whatsapp.net", "")).getNumber("international");
};

Xploader.getFile = async (PATH, returnAsFilename) => {
let res, filename
const data = Buffer.isBuffer(PATH) ? PATH : /^data:.*?\/.*?;base64,/i.test(PATH) ? Buffer.from(PATH.split`,` [1], 'base64') : /^https?:\/\//.test(PATH) ? await (res = await fetch(PATH)).buffer() : fs.existsSync(PATH) ? (filename = PATH, fs.readFileSync(PATH)) : typeof PATH === 'string' ? PATH : Buffer.alloc(0)
if (!Buffer.isBuffer(data)) throw new TypeError('Result is not a buffer')
const type = await FileType.fromBuffer(data) || {
mime: 'application/octet-stream',
ext: '.bin'
}
if (data && returnAsFilename && !filename)(filename = path.join(__dirname, './tmp/' + new Date * 1 + '.' + type.ext), await fs.promises.writeFile(filename, data))
return {
res,
filename,
...type,
data,
deleteFile() {
return filename && fs.promises.unlink(filename)
}
}
}

Xploader.downloadMediaMessage = async (message) => {
let mime = (message.msg || message).mimetype || ''
let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
const stream = await downloadContentFromMessage(message, messageType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])}
return buffer} 

Xploader.sendFile = async (jid, path, filename = '', caption = '', quoted, ptt = false, options = {}) => {
let type = await Xploader.getFile(path, true)
let { res, data: file, filename: pathFile } = type
if (res && res.status !== 200 || file.length <= 65536) {
try { throw { json: JSON.parse(file.toString()) } }
catch (e) { if (e.json) throw e.json }
}
let opt = { filename }
if (quoted) opt.quoted = quoted
if (!type) options.asDocument = true
let mtype = '', mimetype = type.mime, convert
if (/webp/.test(type.mime) || (/image/.test(type.mime) && options.asSticker)) mtype = 'sticker'
else if (/image/.test(type.mime) || (/webp/.test(type.mime) && options.asImage)) mtype = 'image'
else if (/video/.test(type.mime)) mtype = 'video'
else if (/audio/.test(type.mime)) (
convert = await (ptt ? toPTT : toAudio)(file, type.ext),
file = convert.data,
pathFile = convert.filename,
mtype = 'audio',
mimetype = 'audio/ogg; codecs=opus'
)
else mtype = 'document'
if (options.asDocument) mtype = 'document'

let message = {
...options,
caption,
ptt,
[mtype]: { url: pathFile },
mimetype
}
let m
try {
m = await Xploader.sendMessage(jid, message, { ...opt, ...options })
} catch (e) {
console.error(e)
m = null
} finally {
if (!m) m = await Xploader.sendMessage(jid, { ...message, [mtype]: file }, { ...opt, ...options })
return m
}
}
Xploader.sendTextWithMentions = async (jid, text, quoted, options = {}) => Xploader.sendMessage(jid, { text: text, contextInfo: { mentionedJid: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net') }, ...options }, { quoted })
Xploader.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifVid(buff, options)
} else {
buffer = await videoToWebp(buff)
}
await Xploader.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
return buffer
}
Xploader.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
let quoted = message.msg ? message.msg : message
let mime = (message.msg || message).mimetype || ''
let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
const stream = await downloadContentFromMessage(quoted, messageType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
let type = await FileType.fromBuffer(buffer)
trueFileName = attachExtension ? (filename + '.' + type.ext) : filename
await fs.writeFileSync(trueFileName, buffer)
return trueFileName
}

Xploader.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
    let quoted = message.msg ? message.msg : message;
    let mime = (message.msg || message).mimetype || '';
    let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0];
    const stream = await downloadContentFromMessage(quoted, messageType);
    let buffer = Buffer.from([]);
    for await(const chunk of stream) {
        buffer = Buffer.concat([buffer, chunk]);
    }
    let type = await FileType.fromBuffer(buffer);
    let trueFileName = attachExtension ? (filename + '.' + type.ext) : filename;
    let savePath = path.join(__dirname, 'tmp', trueFileName); // Save to 'tmp' folder
    await fs.writeFileSync(savePath, buffer);
    return savePath;
};
Xploader.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifImg(buff, options)
} else {
buffer = await imageToWebp(buff)
}
await Xploader.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
return buffer
}
Xploader.sendText = (jid, text, quoted = '', options) => Xploader.sendMessage(jid, { text: text, ...options }, { quoted })

Xploader.sendTextWithMentions = async (jid, text, quoted, options = {}) => Xploader.sendMessage(jid, { text: text, contextInfo: { mentionedJid: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net') }, ...options }, { quoted })
return Xploader;
}


async function tylor() {
    if (fs.existsSync(credsPath)) {
        console.log(color("Session file found, starting Xploader bot...", 'yellow'));
await startXploader();
} else {
         const sessionDownloaded = await downloadSessionData();
        if (sessionDownloaded) {
            console.log("Session downloaded, starting bot.");
await startXploader();
    } else {
     if (!fs.existsSync(credsPath)) {
    if(!global.SESSION_ID) {
            console.log(color("Please wait for a few seconds to enter your number!", 'red'));
await startXploader();
        }
    }
  }
 }
}

const porDir = path.join(__dirname, 'Media');
const porPath = path.join(porDir, 'Xploader.html');

// set up rate limiter: maximum of 100 requests per 15 minutes
const limiter = RateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // max 100 requests per windowMs
});

// apply rate limiter to the route
app.get("/", limiter, (req, res) => {
    res.sendFile(porPath); 
});

app.listen(port, () => console.log(color(`Xploader is running on port:${port}`, 'yellow')));

tylor();

//batas
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Updated ${__filename}`)
delete require.cache[file]
require(file)
})
