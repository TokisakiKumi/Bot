const { color } = require('../../util')
const { cariSimi } = require('../../lib')
const moment = require('moment-timezone')
const appRoot = require('app-root-path')
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const fs = require('fs-extra')

moment.tz.setDefault('Asia/Jakarta').locale('id')

module.exports = msgHandlerrrr12 = async (client, message) => {
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
		const simi = JSON.parse(fs.readFileSync('./settings/simi.json'))
        const isSimi = simi.includes(chatId)

        const prefix = '#'
        body = (type === 'chat' && body.startsWith(prefix)) ? body : ((type === 'image' && caption) && caption.startsWith(prefix)) ? caption : ''
        const command = body.slice(prefix.length).trim().split(/ +/).shift().toLowerCase()
        const args = body.slice(prefix.length).trim().split(/ +/).slice(1)
        const isCmd = body.startsWith(prefix)
        if(!isCmd && isSimi && isGroupMsg) { console.log(color('[REIN]'), color(moment(t * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), 'from', color(pushname), 'in', color(name || formattedTitle)) }
        switch (command) {
        }
		if ((!isCmd && isGroupMsg && isSimi) && message.type === 'chat') {
		axios.get(`https://arugaz.herokuapp.com/api/simisimi?kata=${encodeURIComponent(message.body)}&apikey=4DD0h-UgnJ_yU6YJS6L2wQpLrElUbK_kmzIDIvf3`)
			.then((res) => {
				if (res.data.status == 403) return client.reply(from, 'maaf kak, Rein gk ngerti', id)
				client.reply(from, `Simi berkata: ${res.data.result}`, id)
			})
			.catch((err) => {
				client.reply(from, `${err}`, id)
			})
		}
		
    } catch (err) {
		(color('[ERROR]', 'red'), err)
    }
}