const { color } = require('../../util')
const { cariJahat } = require('../../lib')
const moment = require('moment-timezone')
const appRoot = require('app-root-path')
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const fs = require('fs-extra')
const antigc = JSON.parse(fs.readFileSync('./settings/antigc.json'))

module.exports = msgHandler5 = async (client, message) => {
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
		const isAntigc = await antigc.includes(chatId)
		
        const prefix = '#'
        body = (type === 'chat' && body.startsWith(prefix)) ? body : ((type === 'image' && caption) && caption.startsWith(prefix)) ? caption : ''
        const command = body.slice(prefix.length).trim().split(/ +/).shift().toLowerCase()
        const args = body.slice(prefix.length).trim().split(/ +/).slice(1)
        const isCmd = body.startsWith(prefix)
        if(!isCmd && isGroupMsg) { console.log(color('[PANGGIL]'), color(moment(t * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), 'from', color(pushname), 'in', color(name || formattedTitle)) }
        switch (command) {
        }
        		    //FITUR ANTI LINK
      	   if (isGroupMsg && !isGroupAdmins){
            if(chats.match(/(https:\/\/chat.whatsapp.com)/gi)) {
                const check = await client.inviteInfo(chats);
                if (!check) {
                    return
                } else {
                    client.reply(from, `*「 MELANGGAR RULES! 」*\nMaaf !Nyaa~ karena kakak melanggar rules, Rein kick yhaa`, id).then(() => {
                        client.removeParticipant(groupId, sender.id)
                    })
                }
				}
                        }
    } catch (err) {(color('[ERROR]', 'red'), err)
    }
}
