const fs = require('fs');
const path = require('path');
if (fs.existsSync('.env')) require('dotenv').config();

const settingsPath = path.join(__dirname, 'settings.json');

// Function to read settings from JSON file
function readSettings() {
    return JSON.parse(fs.readFileSync(settingsPath));
}

// Function to write settings to JSON file
function writeSettings(settings) {
    fs.writeFileSync(settingsPath, JSON.stringify(settings, null, 2));
}

// Load settings initially
const settings = readSettings();

// Assign global variables based on settings and environment variables
global.SESSION_ID = process.env.SESSION_ID || settings.SESSION_ID;
global.botname = process.env.BOT_NAME || settings.botname;
global.ownernumber = process.env.OWNER_NUMBER || settings.ownernumber;
global.ownername = process.env.OWNER_NAME || settings.ownername;
global.plink = process.env.PLINK || settings.plink;
global.wm = process.env.GL_WM || settings.wm;
global.packname = process.env.STICKER_PACK_NAME || settings.packname;
global.author = process.env.STICKER_AUTHOR_NAME || settings.author;
global.urldb = process.env.DATABASE_URL || settings.urldb;
global.xprefix = process.env.PREFIX || settings.xprefix;
global.hituet = process.env.HITUET || settings.hituet;
global.autoviewstatus = process.env.AUTO_STATUS_VIEW === 'true' || settings.autoviewstatus === true || false;
global.autoreactstatus = process.env.AUTO_STATUS_REACT === 'true' || settings.autoreactstatus === true || false;
global.anticall = process.env.ANTI_CALL === 'true' || settings.anticall === true || false;
global.welcome = process.env.WELCOME_MSG === 'true' || settings.welcome === true || false;
global.statusemoji = process.env.STATUS_EMOJI || settings.statusemoji;
global.timezones = process.env.TIMEZONE || settings.timezones;
global.countrycode = process.env.COUNTRY_CODE || settings.countrycode;
global.menustyle = process.env.MENU_STYLE || settings.menustyle;
global.mess = settings.mess;

module.exports = { readSettings, writeSettings, settings };