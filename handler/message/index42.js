const { color } = require('../../util')
const { cariKasar } = require('../../lib')
const moment = require('moment-timezone')
const appRoot = require('app-root-path')
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const fs = require('fs-extra')
const ngegas = JSON.parse(fs.readFileSync('./settings/ngegas.json'))
const antigc = JSON.parse(fs.readFileSync('./settings/antigc.json'))

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

module.exports = msgHandlerr = async (client, message) => {
    try {
        const { type, id, from, t, sender, isGroupMsg, chat, chatId, caption } = message
        let { body } = message
        const { name, formattedTitle } = chat
        let { pushname, verifiedName, formattedName } = sender
        const groupId = isGroupMsg ? chat.groupMetadata.id : ''
        const groupAdmins = isGroupMsg ? await client.getGroupAdmins(groupId) : ''
        const isGroupAdmins = groupAdmins.includes(sender.id) || false
        const chats = (type === 'chat') ? body : (type === 'image' || type === 'video') ? caption : ''
        const pengirim = sender.id;
        const isKasar = await cariKasar(chats)
		const isNgegas = ngegas.includes(chatId)
		const isAntigc = antigc.includes(chatId)
		const ownerNumber = '628974110651@c.us'
		const isOwner = sender.id === ownerNumber
		const commands = caption || body || ''
        const prefix = '#'
        body = (type === 'chat' && body.startsWith(prefix)) ? body : ((type === 'image' && caption) && caption.startsWith(prefix)) ? caption : ''
        const command = body.slice(prefix.length).trim().split(/ +/).shift().toLowerCase()
        const args = body.slice(prefix.length).trim().split(/ +/).slice(1)
		const argt =  commands.split(' ')
        const isCmd = body.startsWith(prefix)

        if(!isCmd && isKasar && isGroupMsg) { console.log(color('[BADWORD]'), color(moment(t * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), 'from', color(pushname), 'in', color(name || formattedTitle)) }
        if (isCmd && !isGroupMsg) { console.log(color('[EXEC]'), color(moment(t * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname)) }
        if (isCmd && isGroupMsg) { console.log(color('[EXEC]'), color(moment(t * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(name || formattedTitle)) }
		/*if (isOwner) {
            return console.log(color('[Owner]', 'red'), color(moment(t * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname))
        }
					    //FITUR ANTI LINK
      	   if (isGroupMsg && !isGroupAdmins){
			   if(isAntigc){
            (chats.match(/(https:\/\/chat.whatsapp.com)/gi)) 
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
		*/
		 switch (command) {
			 
            case '#menubadword':
                const menu = "*MENU*\n1. *#topbadword* : badword terbanyak\n2. *#reset* : reset top badword"
                await client.sendText(from, menu)
                break
			case '#badword':
            if (!isGroupMsg) return client.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!Nyaa~', id)
            if (!isGroupAdmins && !isOwner) return client.reply(from, 'Perintah ini hanya bisa di gunakan oleh Admin !Nyaa~', id)
            if (argt.length === 1) return client.reply(from, 'Pilih enable atau disable!Nyaa~', id)
            if (argt[1].toLowerCase() === 'enable') {
                ngegas.push(chat.id)
                fs.writeFileSync('./settings/ngegas.json', JSON.stringify(ngegas))
                client.reply(from, 'AntiBadword Command berhasil di aktifkan !Nyaa~ kirim perintah *#menuBadword* untuk mengetahui menu', id)
           } else if (argt[1].toLowerCase() === 'disable') {
				let bacot = ngegas.indexOf(chat.id)
                ngegas.splice(bacot,1)
                fs.writeFileSync('./settings/ngegas.json', JSON.stringify(ngegas))
                client.reply(from, 'AntiBadword Command berhasil di nonktifkan !Nyaa~')
            } else {
                client.reply(from, 'Pilih enable atau disable !Nyaa~', id)
            }
            break	
            case '#reset':
                if(isGroupMsg){
                    if(isGroupAdmins){
                        const reset = db.get('group').find({ id: groupId }).assign({ members: []}).write()
                        if(reset){
                            await client.sendText(from, "Skor telah direset !Nyaa~.")
                        }
                    } else {
                        await client.sendText(from, "Klasemen hanya dapat direset oleh Admin group !Nyaa~.")
                    }
                } else {
                    await client.sendText(from, "Hanya dapat dilakukan dalam Grup.")
                }
                break
            case '#topbadword':
                 if (!isGroupMsg) return client.reply(from, 'Maaf !Nyaa perintah ini hanya dalam grup', message.id)
				if (!isGroupAdmins && !isOwner) return client.reply(from, 'Maaf !Nyaa perintah ini hanya untuk admin grup!', message.id)
                    const klasemen = db.get('group').filter({id: groupId}).map('members').value()[0]
                    let urut = Object.entries(klasemen).map(([key, val]) => ({id: key, ...val})).sort((a, b) => b.denda - a.denda);
                    let textKlas = "*Top Badword Sementara*\n"
                    let i = 1;
                    urut.forEach((klsmn) => {
                        textKlas += i+". @"+klsmn.id.replace('@c.us', '')+" ➤Sebanyak: "+formatin(klsmn.denda)+"\n"
                        i++
                    });
                    await client.sendTextWithMentions(from, textKlas)
                break
        }
         if(!isCmd && isGroupMsg && isNgegas){
            const find = db.get('group').find({ id: groupId }).value()
            if(find && find.id === groupId){
                const cekuser = db.get('group').filter({id: groupId}).map('members').value()[0]
                const isIn = inArray(pengirim, cekuser)
                if(cekuser && isIn !== false){
                    if(isKasar){
                        const denda = db.get('group').filter({id: groupId}).map('members['+isIn+']').find({ id: pengirim }).update('denda', n => n + 1).write()
                        if(denda){
			const ditsi = fs.readFileSync('./lib/jorok.json')
            const ditsiJasin = JSON.parse(ditsi)
            const rinadIndix = Math.floor(Math.random() * ditsiJasin.length)
            const rinadKiy = ditsiJasin[rinadIndix]
            client.reply(from, rinadKiy.teks, id)
                        }
                    }
                } else {
                    const cekMember = db.get('group').filter({id: groupId}).map('members').value()[0]
                    if(cekMember.length === 0){
                        if(isKasar){
                            db.get('group').find({ id: groupId }).set('members', [{id: pengirim, denda: 1}]).write()
                        } else {
                            db.get('group').find({ id: groupId }).set('members', [{id: pengirim, denda: 1}]).write()
                        }
                    } else {
                        const cekuser = db.get('group').filter({id: groupId}).map('members').value()[0]
                        if(isKasar){
                            cekuser.push({id: pengirim, denda: 1})
                            await client.reply(from, "Astagfirullah kak", id)
                        } else {
                            cekuser.push({id: pengirim, denda: 1})
                        }
                        db.get('group').find({ id: groupId }).set('members', cekuser).write()
                    }
                }
            } else {
                if(isKasar){
                    db.get('group').push({ id: groupId, members: [{id: pengirim, denda: 1}] }).write()
                    await client.reply(from, "Astagfirullah kak", id)
                } else {
                    db.get('group').push({ id: groupId, members: [{id: pengirim, denda: 0}] }).write()
                }
            }
        }
    } catch (err) {
   (color('[ERROR]', 'red'), err)
    }
}
