const _0x6d0b3e=_0x1ccc;(function(_0x8475dd,_0x5db37d){const _0x216572=_0x1ccc,_0x550946=_0x8475dd();while(!![]){try{const _0x1e01ee=parseInt(_0x216572(0x1c8))/0x1*(-parseInt(_0x216572(0x1dc))/0x2)+-parseInt(_0x216572(0x1cc))/0x3*(parseInt(_0x216572(0x1ef))/0x4)+parseInt(_0x216572(0x1df))/0x5*(parseInt(_0x216572(0x1d0))/0x6)+parseInt(_0x216572(0x1dd))/0x7*(parseInt(_0x216572(0x1f3))/0x8)+parseInt(_0x216572(0x1ea))/0x9*(parseInt(_0x216572(0x1ed))/0xa)+-parseInt(_0x216572(0x1c3))/0xb*(-parseInt(_0x216572(0x1d3))/0xc)+-parseInt(_0x216572(0x1e3))/0xd*(parseInt(_0x216572(0x1f0))/0xe);if(_0x1e01ee===_0x5db37d)break;else _0x550946['push'](_0x550946['shift']());}catch(_0x239fcf){_0x550946['push'](_0x550946['shift']());}}}(_0x2061,0xde804));const fs=require('fs'),path=require(_0x6d0b3e(0x1e4));if(fs[_0x6d0b3e(0x1ec)]('.env'))require('dotenv')['config']();function _0x1ccc(_0x1e6407,_0x26014c){const _0x20619e=_0x2061();return _0x1ccc=function(_0x1cccfc,_0x305b7d){_0x1cccfc=_0x1cccfc-0x1c2;let _0x131a2d=_0x20619e[_0x1cccfc];return _0x131a2d;},_0x1ccc(_0x1e6407,_0x26014c);}const settingsPath=path[_0x6d0b3e(0x1ca)](__dirname,'settings.json');function _0x2061(){const _0x1bb001=['3579tTdNzq','parse','readFileSync','author','162wwxbQA','botname','ownername','18361692FzKdJH','STICKER_PACK_NAME','plink','xprefix','menustyle','autoreactstatus','env','PREFIX','stringify','1325734tVkJON','8523676yLTiBG','HITUET','272785JIiShS','autoviewstatus','AUTO_STATUS_REACT','ownernumber','23960638QIEEWB','path','WELCOME_MSG','anticall','SESSION_ID','false','ANTI_CALL','999oQzCnX','statusemoji','existsSync','133320uwLRVY','timezones','1476JdrZOx','28bkTnDj','writeFileSync','welcome','8FGNUlL','urldb','11xdIcMN','countrycode','mess','hituet','AUTO_STATUS_VIEW','1NDjHmp','packname','join','OWNER_NAME'];_0x2061=function(){return _0x1bb001;};return _0x2061();}function readSettings(){const _0x5853d8=_0x6d0b3e;return JSON[_0x5853d8(0x1cd)](fs[_0x5853d8(0x1ce)](settingsPath));}function writeSettings(_0x59bdc0){const _0x5594d0=_0x6d0b3e;fs[_0x5594d0(0x1f1)](settingsPath,JSON[_0x5594d0(0x1db)](_0x59bdc0,null,0x2));}const settings=readSettings();global[_0x6d0b3e(0x1e7)]=process[_0x6d0b3e(0x1d9)][_0x6d0b3e(0x1e7)]||settings['SESSION_ID'],global[_0x6d0b3e(0x1d1)]=process[_0x6d0b3e(0x1d9)]['BOT_NAME']||settings[_0x6d0b3e(0x1d1)],global[_0x6d0b3e(0x1e2)]=process[_0x6d0b3e(0x1d9)]['OWNER_NUMBER']||settings[_0x6d0b3e(0x1e2)],global[_0x6d0b3e(0x1d2)]=process[_0x6d0b3e(0x1d9)][_0x6d0b3e(0x1cb)]||settings[_0x6d0b3e(0x1d2)],global[_0x6d0b3e(0x1d5)]=process['env']['PLINK']||settings[_0x6d0b3e(0x1d5)],global['wm']=process[_0x6d0b3e(0x1d9)]['GL_WM']||settings['wm'],global[_0x6d0b3e(0x1c9)]=process[_0x6d0b3e(0x1d9)][_0x6d0b3e(0x1d4)]||settings[_0x6d0b3e(0x1c9)],global[_0x6d0b3e(0x1cf)]=process['env']['STICKER_AUTHOR_NAME']||settings[_0x6d0b3e(0x1cf)],global['urldb']=process['env']['DB_URL']||settings[_0x6d0b3e(0x1c2)],global['xprefix']=process[_0x6d0b3e(0x1d9)][_0x6d0b3e(0x1da)]||settings[_0x6d0b3e(0x1d6)],global[_0x6d0b3e(0x1c6)]=process[_0x6d0b3e(0x1d9)][_0x6d0b3e(0x1de)]||settings[_0x6d0b3e(0x1c6)],global[_0x6d0b3e(0x1e0)]=process[_0x6d0b3e(0x1d9)][_0x6d0b3e(0x1c7)]===_0x6d0b3e(0x1e8)||settings[_0x6d0b3e(0x1e0)],global[_0x6d0b3e(0x1d8)]=process['env'][_0x6d0b3e(0x1e1)]===_0x6d0b3e(0x1e8)||settings['autoreactstatus'],global[_0x6d0b3e(0x1e6)]=process[_0x6d0b3e(0x1d9)][_0x6d0b3e(0x1e9)]===_0x6d0b3e(0x1e8)||settings['anticall'],global[_0x6d0b3e(0x1f2)]=process[_0x6d0b3e(0x1d9)][_0x6d0b3e(0x1e5)]==='false'||settings[_0x6d0b3e(0x1f2)],global[_0x6d0b3e(0x1eb)]=process[_0x6d0b3e(0x1d9)]['STATUS_EMOJI']||settings[_0x6d0b3e(0x1eb)],global['timezones']=process[_0x6d0b3e(0x1d9)]['TIMEZONE']||settings[_0x6d0b3e(0x1ee)],global[_0x6d0b3e(0x1c4)]=process['env']['COUNTRY_CODE']||settings[_0x6d0b3e(0x1c4)],global[_0x6d0b3e(0x1d7)]=process[_0x6d0b3e(0x1d9)]['MENU_STYLE']||settings[_0x6d0b3e(0x1d7)],global[_0x6d0b3e(0x1c5)]=settings[_0x6d0b3e(0x1c5)],module['exports']={'readSettings':readSettings,'writeSettings':writeSettings};