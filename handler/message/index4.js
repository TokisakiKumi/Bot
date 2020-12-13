const { color } = require('../../util')
const { cariBot } = require('../../lib')
const moment = require('moment-timezone')
const appRoot = require('app-root-path')
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

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

module.exports = msgHandlerrrrr = async (client, message) => {
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
		const ownerNumber = '628974110651@c.us'
		const isOwner = sender.id === ownerNumber
        const isBot = await cariBot(chats)

        const prefix = '#'
        body = (type === 'chat' && body.startsWith(prefix)) ? body : ((type === 'image' && caption) && caption.startsWith(prefix)) ? caption : ''
        const command = body.slice(prefix.length).trim().split(/ +/).shift().toLowerCase()
        const args = body.slice(prefix.length).trim().split(/ +/).slice(1)
        const isCmd = body.startsWith(prefix)
        if(!isCmd && isBot && isGroupMsg) { console.log(color('[BADWORD]'), color(moment(t * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), 'from', color(pushname), 'in', color(name || formattedTitle)) }
        if (isCmd && !isGroupMsg) { console.log(color('[EXEC]'), color(moment(t * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname)) }
        if (isCmd && isGroupMsg) { console.log(color('[EXEC]'), color(moment(t * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(name || formattedTitle)) }
        switch (command) {
            case 'smenu':
                const menu = "*MENU*\n1. *#klasemen* : klasemen denda\n2. *#reset* : reset klasemen denda\n3. *#about* : tentang bot ini"
                await client.sendText(from, menu)
                break
            case 'sssreset':
                if(isGroupMsg){
                    if(isGroupAdmins){
                        const reset = db.get('group').find({ id: groupId }).assign({ members: []}).write()
                        if(reset){
                            await client.sendText(from, "Skor telah direset.")
                        }
                    } else {
                        await client.sendText(from, "Klasemen hanya dapat direset oleh Admin Grup.")
                    }
                } else {
                    await client.sendText(from, "Hanya dapat dilakukan dalam Grup.")
                }
                break
            case 'ssstopbadword':
                if(isGroupMsg){
                    const klasemen = db.get('group').filter({id: groupId}).map('members').value()[0]
                    let urut = Object.entries(klasemen).map(([key, val]) => ({id: key, ...val})).sort((a, b) => b.denda - a.denda);
                    let textKlas = "*Top Badword Sementara*\n"
                    let i = 1;
                    urut.forEach((klsmn) => {
                        textKlas += i+". @"+klsmn.id.replace('@c.us', '')+" ➤Skor "+formatin(klsmn.denda)+"\n"
                        i++
                    });
                    await client.sendTextWithMentions(from, textKlas)
                } else {
                    await client.sendText(from, "Hanya dapat dilakukan dalam Grup.")
                }
                break
            default:
                break
        }
        if(!isCmd && isGroupMsg){
			if(!isOwner) return
            const find = db.get('group').find({ id: groupId }).value()
            if(find && find.id === groupId){
                const cekuser = db.get('group').filter({id: groupId}).map('members').value()[0]
                const isIn = inArray(pengirim, cekuser)
                if(cekuser && isIn !== false){
                    if(isBot){
                        const denda = db.get('group').filter({id: groupId}).map('members['+isIn+']').find({ id: pengirim }).update('denda', n => n + 0).write()
                        if(denda){
                            await client.reply(from, "~Nyaaa!", id)
                        }
                    }
                } else {
                    const cekMember = db.get('group').filter({id: groupId}).map('members').value()[0]
                    if(cekMember.length === 0){
                        if(isBot){
                            db.get('group').find({ id: groupId }).set('members', [{id: pengirim, denda: 0}]).write()
                        } else {
                            db.get('group').find({ id: groupId }).set('members', [{id: pengirim, denda: 0}]).write()
                        }
                    } else {
                        const cekuser = db.get('group').filter({id: groupId}).map('members').value()[0]
                        if(isBot){
                            cekuser.push({id: pengirim, denda: 0})
                            await client.reply(from, "~Nyaa!", id)
                        } else {
                            cekuser.push({id: pengirim, denda: 0})
                        }
                        db.get('group').find({ id: groupId }).set('members', cekuser).write()
                    }
                }
            } else {
                if(isBot){
                    db.get('group').push({ id: groupId, members: [{id: pengirim, denda: 0}] }).write()
                    await client.reply(from, "~Nyaa!", id)
                } else {
                    db.get('group').push({ id: groupId, members: [{id: pengirim, denda: 0}] }).write()
                }
            }
        }
    } catch (err) {
        console.log(color('[ERROR]', 'red'), err)
    }
}
