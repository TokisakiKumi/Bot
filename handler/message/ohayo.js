const { color } = require('../../util')
const { cariOhayo } = require('../../lib')
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

module.exports = msgHandlerrrr12 = async (client, message) => {
    try {
        const { type, id, from, t, sender, isGroupMsg, chat, caption } = message
        let { body } = message
        const { name, formattedTitle } = chat
        let { pushname, verifiedName, formattedName } = sender
        namae = pushname || verifiedName || formattedName // verifiedName is the name of someone who uses a business account
        if (pushname == undefined || pushname.trim() == '') console.log(sender)
        const groupId = isGroupMsg ? chat.groupMetadata.id : ''
        const groupAdmins = isGroupMsg ? await client.getGroupAdmins(groupId) : ''
        const isGroupAdmins = groupAdmins.includes(sender.id) || false
        const chats = (type === 'chat') ? body : (type === 'image' || type === 'video') ? caption : ''
        const pengirim = sender.id;
        const isOhayo = await cariOhayo(chats)
		const isMager = await cariMager(chats)

        const prefix = '#'
        body = (type === 'chat' && body.startsWith(prefix)) ? body : ((type === 'image' && caption) && caption.startsWith(prefix)) ? caption : ''
        const command = body.slice(prefix.length).trim().split(/ +/).shift().toLowerCase()
        const args = body.slice(prefix.length).trim().split(/ +/).slice(1)
        const isCmd = body.startsWith(prefix)
        if(!isCmd && isOhayo && isGroupMsg) { console.log(color('[Ohayo]'), color(moment(t * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), 'from', color(pushname), 'in', color(name || formattedTitle)) }
		if(!isCmd && isMager && isGroupMsg) { console.log(color('[Ohayo]'), color(moment(t * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), 'from', color(pushname), 'in', color(name || formattedTitle)) }
        if (isCmd && !isGroupMsg) { console.log(color('[EXEC]'), color(moment(t * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname)) }
        if (isCmd && isGroupMsg) { console.log(color('[EXEC]'), color(moment(t * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(name || formattedTitle)) }
        switch (command) {
        }
        if(!isCmd && isGroupMsg){
            const find = db.get('group').find({ id: groupId }).value()
            if(find && find.id === groupId){
                    if(isOhayo){
               client.sendPtt(from, './media/mp3/ohayo.mp3')
			   } else {
			    if(!isCmd && isGroupMsg){
            const find = db.get('group').find({ id: groupId }).value()
            if(find && find.id === groupId){
                    if(isMager){
               client.sendPtt(from, './media/mp3/mager.mp3')
                        }
                    }
        }
		 }
                    }
        }
    } catch (err) {
        console.log(color('[ERROR]', 'red'), err)
    }
}
