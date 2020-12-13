const { color } = require('../../util')
const { cariApakah } = require('../../lib')
const moment = require('moment-timezone')
const appRoot = require('app-root-path')
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const fs = require('fs-extra')

moment.tz.setDefault('Asia/Jakarta').locale('id')

module.exports = msgHandlerrrr1 = async (client, message) => {
    try {
        const { type, id, from, t, sender, isGroupMsg, chat, caption } = message
        let { body } = message
        const { name, formattedTitle } = chat
        let { pushname, verifiedName, formattedName } = sender
        namae = pushname || verifiedName || formattedName // verifiedName is the name of someone who uses a business account
        const groupId = isGroupMsg ? chat.groupMetadata.id : ''
        const groupAdmins = isGroupMsg ? await client.getGroupAdmins(groupId) : ''
        const isGroupAdmins = groupAdmins.includes(sender.id) || false
        const chats = (type === 'chat') ? body : (type === 'image' || type === 'video') ? caption : ''
        const pengirim = sender.id;
        const isApakah = await cariApakah(chats)

        const prefix = '#'
        body = (type === 'chat' && body.startsWith(prefix)) ? body : ((type === 'image' && caption) && caption.startsWith(prefix)) ? caption : ''
        const command = body.slice(prefix.length).trim().split(/ +/).shift().toLowerCase()
        const args = body.slice(prefix.length).trim().split(/ +/).slice(1)
        const isCmd = body.startsWith(prefix)
        if(!isCmd && isApakah && isGroupMsg) { console.log(color('[APAKAH]'), color(moment(t * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), 'from', color(pushname), 'in', color(name || formattedTitle)) }
        switch (command) {
        }
        if(!isCmd && isGroupMsg){
                    if(isApakah){
			const ditsi = fs.readFileSync('./lib/apakah.json')
            const ditsiJasin = JSON.parse(ditsi)
            const rinadIndix = Math.floor(Math.random() * ditsiJasin.length)
            const rinadKiy = ditsiJasin[rinadIndix]
            client.reply(from, rinadKiy.teks, id)
                        }
                    }
    } catch (err) {
		(color('[ERROR]', 'red'), err)
    }
}