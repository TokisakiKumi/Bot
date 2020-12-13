const { color } = require('../../util')
const { cariJahat } = require('../../lib')
const moment = require('moment-timezone')
const appRoot = require('app-root-path')
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const fs = require('fs-extra')

const db_group = new FileSync(appRoot+'/data/group.json')
const db = low(db_group)

moment.tz.setDefault('Asia/Jakarta').locale('id')
db.defaults({ group: []}).write()

function formatin(duit){
    let	reverse = duit.toString().split('').reverse().join('');
    let ribuan = reverse.match(/\d{1,3}/g);
    ribuan = ribuan.join('.').split('').reverse().join('');
    return ribuan;
}

const inArray = (needle, haystack) => {
    let length = haystack.length;
    for(let i = 0; i < length; i++) {
        if(haystack[i].id == needle) return i;
    }
    return false;
}

module.exports = msgHandlerrrr = async (client, message) => {
    try {
        const { type, id, from, t, sender, isGroupMsg, chat, caption } = message
        let { body } = message
        const { name, formattedTitle } = chat
        let { pushname, verifiedName, formattedName } = sender
        const groupId = isGroupMsg ? chat.groupMetadata.id : ''
        const groupAdmins = isGroupMsg ? await client.getGroupAdmins(groupId) : ''
        const isGroupAdmins = groupAdmins.includes(sender.id) || false
        const chats = (type === 'chat') ? body : (type === 'image' || type === 'video') ? caption : ''
        const pengirim = sender.id;
        const isJahat = await cariJahat(chats)

        const prefix = '#'
        body = (type === 'chat' && body.startsWith(prefix)) ? body : ((type === 'image' && caption) && caption.startsWith(prefix)) ? caption : ''
        const command = body.slice(prefix.length).trim().split(/ +/).shift().toLowerCase()
        const args = body.slice(prefix.length).trim().split(/ +/).slice(1)
        const isCmd = body.startsWith(prefix)
        if(!isCmd && isJahat && isGroupMsg) { console.log(color('[PANGGIL]'), color(moment(t * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), 'from', color(pushname), 'in', color(name || formattedTitle)) }
        switch (command) {
        }
        if(!isCmd && isGroupMsg){
                    if(isJahat){
			const ditsi = fs.readFileSync('./lib/rein.json')
            const ditsiJasin = JSON.parse(ditsi)
            const rinadIndix = Math.floor(Math.random() * ditsiJasin.length)
            const rinadKiy = ditsiJasin[rinadIndix]
            client.reply(from, rinadKiy.teks, id)
                        }
        }
    } catch (err) {(color('[ERROR]', 'red'), err)
    }
}
