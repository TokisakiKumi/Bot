require('dotenv').config()
const { decryptMedia } = require('@open-wa/wa-automate')

const moment = require('moment-timezone')
moment.tz.setDefault('Asia/Jakarta').locale('id')
const axios = require('axios')
const fetch = require('node-fetch')
const bent = require('bent')

const appRoot = require('app-root-path')
const low = require('lowdb')
const errorurl = 'https://cdn.discordapp.com/attachments/702481939029950484/780384931553476638/reinakikens.png'
const errorurl2 = 'https://media.discordapp.net/attachments/702481939029950484/780380316942467102/IMG_20201123_173235_689.jpg?width=430&height=430'
const FileSync = require('lowdb/adapters/FileSync')
const db_group = new FileSync(appRoot+'/data/group.json')
const sendSticker = require('./lib/sendSticker')
const Math_js = require('mathjs');
const google = require('google-it')
const db = low(db_group)
db.defaults({ group: []}).write()

const { 
    removeBackgroundFromImageBase64
} = require('remove.bg')

const {
    exec
} = require('child_process')

const { search, wall, liriklagu, sleep, fb, ss } = require('./lib/functions')
const { help, snk, info, menuadmin, menugacha, rules, sawer, helpfulmenu, update, listChannel } = require('./lib/help')

const krisar = '62895342049727-1607235009@g.us'
const krisars = '628974110651@c.us'


const { 
    menuId, 
    cekResi, 
    urlShortener, 
    meme, 
    translate, 
    getLocationData,
    images,
    resep,
    rugapoi,
    rugaapi,
    cariKasar,
	cariJahat
} = require('./lib')

const { 
    msgFilter, 
    color, 
    processTime, 
    isUrl,
	download
} = require('./utils')

const { uploadImages } = require('./utils/fetcher')

const fs = require('fs-extra')
const banned = JSON.parse(fs.readFileSync('./settings/banned.json'))
const claim = JSON.parse(fs.readFileSync('./settings/claim.json'))
const antigc = JSON.parse(fs.readFileSync('./settings/antigc.json'))
const premium = JSON.parse(fs.readFileSync('./settings/premium.json'))
const nsfw_ = JSON.parse(fs.readFileSync('./lib/NSFW.json'))
const { ind, eng } = require('./message/text/lang/')
const nhentai = require('nhentai-js')
const { API } = require('nhentai-api')
welkoms = JSON.parse(fs.readFileSync('./lib/welcomes.json'))
welkom = JSON.parse(fs.readFileSync('./lib/welcome.json'))
const nsfwgrp = JSON.parse(fs.readFileSync('./lib/nsfw.json'))
const ngegas = JSON.parse(fs.readFileSync('./settings/ngegas.json'))
const setting = JSON.parse(fs.readFileSync('./settings/setting.json'))
const arugaytdl3 = 'https://arugaytdl.herokuapp.com/audio?id='
const arugaytdl4 = 'https://arugaytdl.herokuapp.com/video?id='
const member = ["6281326243522@c.us","6283874024384@c.us","6289635902969@c.us","6289635902969@c.us","6285707035321@c.us","6283866048699@c.us","6285771106696@c.us","6289613250545@c.us","6285249384442@c.us","6285771106696@c.us","6282386907453@c.us","6281273900139@c.us","6283144304353@c.us","6285878465001@c.us","6285822563491@c.us","6285822563491@c.us"]

const member1 = '628974110651@c.us'
const member2 = '6285392152607@c.us'
const member3 = '212770709776@c.us'
const member4 = '6285643094775@c.us'
const member5 = '62895335913233@c.us'
const member6 = '62887437016011@c.us'
const member7 = '62895615761778@c.us'
const member8 = '62859196113899@c.us'
const member9 = '6282241110703@c.us'
const member10 = '6281271604802@c.us'
const member11 = '6289659879868@c.us'
const member12 = '6288213032757@c.us'
const member14 = '6285745274051@c.us'
const member15 = '61426656718@c.us'
const member16 = '6289637531950@c.us'
const member17 = '6282230726069@c.us'
const member18 = '62895361662180@c.us'
const member19 = '6282111503232@c.us'
const member20 = '62895380103438@c.us'
const member21= '6285895425866@c.us'
const member25= '919025374268@c.us'
const member26= '6282141871203@c.us'
const member27= '6282380762040@c.us'
const member28= '6282237507320@c.us'
const member29= '6287815072008@c.us'
const member30= '6287721833485@c.us'
const member31= '6287772098246@c.us'
const member32= '6281387014701@c.us'
const member33= '254738099457@c.us'
const member34= '917005067911@c.us'
const member35= '62895331157415@c.us'
const member36= '6285249384442@c.us'
const member37= '6283803077809@c.us'
const member38= '6282271114134@c.us'
const member39= '6285790858279@c.us'
const member40= '6283817344125@c.us'
const member41= '6287890405660@c.us'
const member42= '6287833730591@c.us'
const member43= '6281318551092@c.us'
const member44= '6281286142307@c.us'
const member45= '6282131688211@c.us'
const member46= '6282286354981@c.us'
const member47= '62895702835500@c.us'
const member48= '6282182644112@c.us'
const member49= '6281314173087@c.us'
const member50= '6285707035321@c.us'
const member51= '61426656718@@c.us'
const member52= '62895604638871@c.us'



const asisten1 = '628974110651@c.us' //Rai
const asisten2 = '6282351851287@c.us' //Dicky
const asisten3 = '6285820323267@c.us' //Violet
const asisten4 = '62895704265727@c.us' //Hilman
const asisten5 = '6289673108746@c.us' //Yuu
const asisten6 = '6281314591317@c.us' //Denny
const asisten7 = '6283879880301@c.us' //Rafly
const asisten8 = '6281806064375@c.us' //Salfa
const asisten9 = '6281578917652@c.us' //Rama
const asisten10 = '62895320730462@c.us' //Noufal
const asisten11 = '6281808245355@c.us' //David	


let { 
    ownerNumber, 
    groupLimit, 
    memberLimit,
    prefix
} = setting

const {
    apiNoBg,
	apiSimi
} = JSON.parse(fs.readFileSync('./settings/api.json'))

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

module.exports = HandleMsg = async (client, message) => {
    try {
        const { type, id, from, t, sender, isGroupMsg, chat, chatId, caption, isMedia, author, mimetype, quotedMsg, quotedMsgObj, getMentionsList, mentionedJidList } = message
        let { body } = message
		const { slice } = message
        var { name, formattedTitle } = chat
        let { pushname, verifiedName, formattedName } = sender
        pushname = pushname || verifiedName || formattedName // verifiedName is the name of someone who uses a business account
        const botNumber = await client.getHostNumber() + '@c.us'
        const groupId = isGroupMsg ? chat.groupMetadata.id : ''
        const groupAdmins = isGroupMsg ? await client.getGroupAdmins(groupId) : ''
        const isGroupAdmins = groupAdmins.includes(sender.id) || false
		const chats = (type === 'chat') ? body : (type === 'image' || type === 'video') ? caption : ''
		const pengirim = sender.id
		const blockNumber = await client.getBlockedIds()
        const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const wel = JSON.parse(fs.readFileSync('./lib/welcome.json'))
			const wels = JSON.parse(fs.readFileSync('./lib/welcomes.json'))
		const bdwrdgrp = JSON.parse(fs.readFileSync('./settings/ngegas.json'))
		const antigc = JSON.parse(fs.readFileSync('./settings/antigc.json'))

        // Bot Prefix
        body = (type === 'chat' && body.startsWith(prefix)) ? body : ((type === 'image' && caption || type === 'video' && caption) && caption.startsWith(prefix)) ? caption : ''
        const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
		const commando = body.slice(prefix.length).trim().split(/ +/).shift().toLowerCase()
        const arg = body.trim().substring(body.indexOf(' ') + 1)
        const args = body.trim().split(/ +/).slice(1)
		const argx = chats.slice(0).trim().split(/ +/).shift().toLowerCase()
        const isCmd = body.startsWith(prefix)
        const uaOverride = process.env.UserAgent
        const url = args.length !== 0 ? args[0] : ''
        const isQuotedImage = quotedMsg && quotedMsg.type === 'image'
	    const isQuotedVideo = quotedMsg && quotedMsg.type === 'video'
		
		// [IDENTIFY]
		const asistenNumber = ["62895704265727@c.us","6289673108746@c.us","6281314591317@c.us","6283879880301@c.us","6281806064375@c.us","6281578917652@c.us","6282351851287@c.us","628974110651@c.us","6281808245355@c.us"]
		const isAsisten = asistenNumber.includes(sender.id)
		const isOwnerBot = ownerNumber.includes(pengirim)
        const isBanned = banned.includes(pengirim)
		const isOwner = sender.id === ownerNumber
		const isBlocked = blockNumber.includes(sender.id)
		const isNgegas = ngegas.includes(chatId)
		const isKasar = await cariKasar(chats)
		const isPremium = premium.includes(chatId)
		const isJahat = await cariJahat(chats)
		const isNsfw = isGroupMsg ? nsfw_.includes(chat.id) : false
		const time = moment(t * 1000).format('DD/MM HH:mm:ss')

        // [BETA] Avoid Spam Message
         if (isCmd && msgFilter.isFiltered(from) && !isGroupMsg) { return console.log(color('[SPAM]', 'red'), color(moment(t * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname)) }
        if (isCmd && msgFilter.isFiltered(from) && isGroupMsg) { return console.log(color('[SPAM]', 'red'), color(moment(t * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(name || formattedTitle)) }
         if (!isCmd && !isGroupMsg) return console.log('[RECV]', color(time, 'yellow'), 'Message from', color(pushname))
        if (!isCmd && isGroupMsg) return console.log('[RECV]', color(time, 'yellow'), 'Message from', color(pushname), 'in', color(name))
        if (isCmd && !isGroupMsg) console.log(color('[EXEC]'), color(time, 'yellow'), color(`${commando} [${args.length}]`), 'from', color(pushname)) 
        if (isCmd && isGroupMsg) console.log(color('[EXEC]'), color(time, 'yellow'), color(`${commando} [${args.length}]`), 'from', color(pushname), 'in', color(name))
		msgFilter.addFilter(from)
		
	//[AUTO READ] Auto read message 
		client.sendSeen(chatId)

	// Filter Banned People
        if (isBanned) {
            return console.log(color('[BAN]', 'red'), color(moment(t * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname))
        }
		
        switch (command) {
        // Menu and TnC
		  case 'adminlist':
            if (!isGroupMsg) return client.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!Nyaa~', id)
            let mimin = ''
            for (let admon of groupAdmins) {
                mimin += `➸ @${admon.replace(/@c.us/g, '')}\n` 
            }
            await sleep(2000)
            await client.sendTextWithMentions(from, mimin)
            break
        case 'help':
             client.sendText(from, help)
            break
       case 'menu3':
			if (!isGroupAdmins && !isOwnerBot) return client.reply(from, 'Perintah ini hanya bisa di gunakan oleh admin group', id)
            client.reply(from, menuadmin, id)
            break
		case 'menu1':
            client.reply(from, menugacha, id)
            break	
		case 'lapor':
			if (args.length == 0) return client.reply(from, 'Apa yang mau Rein sampaikan ke papa!Nyaa~?', id)
                await client.sendText(krisar, `Lapor pa, dari ${pushname} (${from})\n\n${args.join(' ')}`)
				client.reply(from, 'Terimakasih !Nyaa~ laporan sudah terkirim ke papa', id)
               // insert(author, type, content, pushname, from, argv)
                break	
		case 'reply':
			if (args.length == 0) return client.reply(from, 'Apa yang mau Rein sampaikan ke papa!Nyaa~?', id)
			const laporan = body.slice (7)  
			const pesans = message
                await client.sendText(laporan, `Balasan dari Papa!Nyaa~`, pesans, id, message.id)
				client.reply(from, 'Terkirim !Nyaa~', id)
               // insert(author, type, content, pushname, from, argv)
                break				
		case 'rules':
            client.reply(from, rules, id)
            break		
		case 'menu2':
            client.reply(from, helpfulmenu, id)
            break	
		case 'feed':
            client.reply(from, sawer, id)
            break					
		case 'update':
            client.reply(from, update, id)
            break		
		case 'nsfwmenu':
            client.reply(from, '1. #RandomHentai\n2. #NsfwNeko\n3. #Trap\n4. #Yuri\n5. #Sreddit<keyword>\n6. #NsfwCosplay\n7. #Boobs\n8. #Feet\n9. #Futanari\n10. #Blowjob\n11. #Pussy', id)
            break          
	case 'join':
			if (args.length == 0) return client.reply(from, 'Untuk menghindari banned, akan dijoinkan manual', id)
                await client.sendText(krisars, `Lapor pa, dari ${pushname} (${from})\n\n${args.join(' ')}`)
				client.reply(from, 'Terimakasih !Nyaa~ silahkan tunggu beberapa saat', id)
               // insert(author, type, content, pushname, from, argv)
                break
            break				
      case 'joinss':
            if (args.length === 0) return client.reply(from, 'Kirim perintah *#join* linkgroup\n\nEx:\n#join https://chat.whatsapp.com/blablablablablabla', id)
            const link = body.slice(6)
            const tGr = await client.getAllGroups()
            const minMem = 15
            const isLink = link.match(/(https:\/\/chat.whatsapp.com)/gi)
            const check = await client.inviteInfo(link)
            if (!isLink) return client.reply(from, 'Bukan link baka!', id)
            if (tGr.length > 250) return client.reply(from, 'Maaf jumlah group sudah maksimal!', id)
            if (check.size < minMem) return client.reply(from, 'Member group tidak melebihi 15, aku tidak bisa masuk !Nyaa~', id)
            if (check.status === 200) {
                await client.joinGroupViaLink(link).then(() => client.reply(from, 'Aku akan segera masuk! Nyaa~'))
            } else {
                client.reply(from, 'Link group salah Baka!', id)
            }
            break 
        // Sticker Creator
        case 'sticker':
        case 'stiker':
            if ((isMedia || isQuotedImage) && args.length === 0) {
                const encryptMedia = isQuotedImage ? quotedMsg : message
                const _mimetype = isQuotedImage ? quotedMsg.mimetype : mimetype
                const mediaData = await decryptMedia(encryptMedia, uaOverride)
                const imageBase64 = `data:${_mimetype};base64,${mediaData.toString('base64')}`
                client.sendImageAsSticker(from, imageBase64)
                .then(() => {
                    console.log(`Sticker Processed for ${processTime(t, moment())} Second`)
                })
            } else if (args[0] === 'nobg') {
                if (isMedia || isQuotedImage) {
                    try {
                    var mediaData = await decryptMedia(message, uaOverride)
                    var imageBase64 = `data:${mimetype};base64,${mediaData.toString('base64')}`
                    var base64img = imageBase64
                    var outFile = './media/noBg.png'
		            // kamu dapat mengambil api key dari website remove.bg dan ubahnya difolder settings/api.json
                    var result = await removeBackgroundFromImageBase64({ base64img, apiKey: apiNoBg, size: 'auto', type: 'auto', outFile })
                    await fs.writeFile(outFile, result.base64img)
                    await client.sendImageAsSticker(from, `data:${mimetype};base64,${result.base64img}`)
                    } catch(err) {
                    console.log(err)
	   	            await client.reply(from, 'Maaf batas penggunaan hari ini sudah mencapai maksimal', id)
                    }
                }
            } else if (args.length === 1) {
                if (!isUrl(url)) { await client.reply(from, 'Maaf, link yang kamu kirim tidak valid.', id) }
                client.sendStickerfromUrl(from, url).then((r) => (!r && r !== undefined)
                    ? client.sendText(from, 'Maaf, link yang kamu kirim tidak memuat gambar.')
                    : client.reply(from, 'Here\'s your sticker')).then(() => console.log(`Sticker Processed for ${processTime(t, moment())} Second`))
            } else {
                await client.reply(from, `Tidak ada gambar! Untuk menggunakan ${prefix}sticker\n\n\nKirim gambar dengan caption\n${prefix}sticker <biasa>\n\natau Kirim pesan dengan\n${prefix}sticker <link_gambar>`, id)
            }
            break
			case 'text1':
                await client.sendText(member1, `[Rein bot Broadcast!] \n\n${args.join(' ')}`)
				await client.sendText(member2, `[Rein bot Broadcast!] \n\n${args.join(' ')}`)
				await client.sendText(member3, `[Rein bot Broadcast!] \n\n${args.join(' ')}`)
				await client.sendText(member4, `[Rein bot Broadcast!] \n\n${args.join(' ')}`)
				await client.sendText(member5, `[Rein bot Broadcast!] \n\n${args.join(' ')}`)
				await client.sendText(member6, `[Rein bot Broadcast!] \n\n${args.join(' ')}`)
				await client.sendText(member7, `[Rein bot Broadcast!] \n\n${args.join(' ')}`)
				await client.sendText(member8, `[Rein bot Broadcast!] \n\n${args.join(' ')}`)
				await client.sendText(member9, `[Rein bot Broadcast!] \n\n${args.join(' ')}`)
				await client.sendText(member10, `[Rein bot Broadcast!] \n\n${args.join(' ')}`)
				client.reply(from, 'Terimakasih !Nyaa~ Pesan sudah terkirim!', id)
                insert(author, type, content, pushname, from, argv)
            break
	case 'text2':
                await client.sendText(member11, `[Rein bot Broadcast!] \n\n${args.join(' ')}`)
				await client.sendText(member12, `[Rein bot Broadcast!] \n\n${args.join(' ')}`)
				await client.sendText(member13, `[Rein bot Broadcast!] \n\n${args.join(' ')}`)
				await client.sendText(member14, `[Rein bot Broadcast!] \n\n${args.join(' ')}`)
				await client.sendText(member15, `[Rein bot Broadcast!] \n\n${args.join(' ')}`)
				await client.sendText(member16, `[Rein bot Broadcast!] \n\n${args.join(' ')}`)
				await client.sendText(member17, `[Rein bot Broadcast!] \n\n${args.join(' ')}`)
				await client.sendText(member18, `[Rein bot Broadcast!] \n\n${args.join(' ')}`)
				await client.sendText(member19, `[Rein bot Broadcast!] \n\n${args.join(' ')}`)
				await client.sendText(member20, `[Rein bot Broadcast!] \n\n${args.join(' ')}`)
				client.reply(from, 'Terimakasih !Nyaa~ Pesan sudah terkirim!', id)
                insert(author, type, content, pushname, from, argv)
            break	
	case 'text3':
                await client.sendText(member21, `[Rein bot Broadcast!] \n\n${args.join(' ')}`)
				await client.sendText(member22, `[Rein bot Broadcast!] \n\n${args.join(' ')}`)
				await client.sendText(member23, `[Rein bot Broadcast!] \n\n${args.join(' ')}`)
				await client.sendText(member24, `[Rein bot Broadcast!] \n\n${args.join(' ')}`)
				await client.sendText(member25, `[Rein bot Broadcast!] \n\n${args.join(' ')}`)
				await client.sendText(member26, `[Rein bot Broadcast!] \n\n${args.join(' ')}`)
				await client.sendText(member27, `[Rein bot Broadcast!] \n\n${args.join(' ')}`)
				await client.sendText(member28, `[Rein bot Broadcast!] \n\n${args.join(' ')}`)
				await client.sendText(member29, `[Rein bot Broadcast!] \n\n${args.join(' ')}`)
				await client.sendText(member30, `[Rein bot Broadcast!] \n\n${args.join(' ')}`)
				client.reply(from, 'Terimakasih !Nyaa~ Pesan sudah terkirim!', id)
                insert(author, type, content, pushname, from, argv)
            break	
	case 'text4':
                await client.sendText(member31, `[Rein bot Broadcast!] \n\n${args.join(' ')}`)
				await client.sendText(member32, `[Rein bot Broadcast!] \n\n${args.join(' ')}`)
				await client.sendText(member33, `[Rein bot Broadcast!] \n\n${args.join(' ')}`)
				await client.sendText(member34, `[Rein bot Broadcast!] \n\n${args.join(' ')}`)
				await client.sendText(member35, `[Rein bot Broadcast!] \n\n${args.join(' ')}`)
				await client.sendText(member36, `[Rein bot Broadcast!] \n\n${args.join(' ')}`)
				await client.sendText(member37, `[Rein bot Broadcast!] \n\n${args.join(' ')}`)
				await client.sendText(member38, `[Rein bot Broadcast!] \n\n${args.join(' ')}`)
				await client.sendText(member39, `[Rein bot Broadcast!] \n\n${args.join(' ')}`)
				await client.sendText(member40, `[Rein bot Broadcast!] \n\n${args.join(' ')}`)
				client.reply(from, 'Terimakasih !Nyaa~ Pesan sudah terkirim!', id)
                insert(author, type, content, pushname, from, argv)
            break
case 'text5':
                await client.sendText(member41, `[Rein bot Broadcast!] \n\n${args.join(' ')}`)
				await client.sendText(member42, `[Rein bot Broadcast!] \n\n${args.join(' ')}`)
				await client.sendText(member43, `[Rein bot Broadcast!] \n\n${args.join(' ')}`)
				await client.sendText(member44, `[Rein bot Broadcast!] \n\n${args.join(' ')}`)
				await client.sendText(member45, `[Rein bot Broadcast!] \n\n${args.join(' ')}`)
				await client.sendText(member46, `[Rein bot Broadcast!] \n\n${args.join(' ')}`)
				await client.sendText(member47, `[Rein bot Broadcast!] \n\n${args.join(' ')}`)
				await client.sendText(member48, `[Rein bot Broadcast!] \n\n${args.join(' ')}`)
				await client.sendText(member49, `[Rein bot Broadcast!] \n\n${args.join(' ')}`)
				await client.sendText(member50, `[Rein bot Broadcast!] \n\n${args.join(' ')}`)
				client.reply(from, 'Terimakasih !Nyaa~ Pesan sudah terkirim!', id)
                insert(author, type, content, pushname, from, argv)
            break				
       case 'sstickergif':
        case 'ssgif':
            if (isMedia || isQuotedVideo) {
                if (mimetype === 'video/mp4' && message.duration < 15 || mimetype === 'image/gif' && message.duration < 15) {
                    var mediaData = await decryptMedia(message, uaOverride)
                    client.reply(from, 'Chotto matte kudasai⏳', id)
                    var filename = `./media/stickergf.${mimetype.split('/')[1]}`
                    await fs.writeFileSync(filename, mediaData)
                    await exec(`gify ${filename} ./media/stickergf.gif --fps=30 --scale=240:240`, async function (error, stdout, stderr) {
                        var gif = await fs.readFileSync('./media/stickergf.mp4', { encoding: "base64" })
                        await client.sendImageAsSticker(from, `data:image/gif;base64,${gif.toString('base64')}`)
                        .catch(() => {
                            client.reply(from, 'Maaf !Nyaa~ filenya terlalu besar!', id)
                        })
                    })
                  } else {
                    client.reply(from, `[❗] Kirim gif dengan caption *${prefix}stickergif* max 10 sec!Nyaa~`, id)
                   }
                } else {
		    client.reply(from, `[❗] Kirim gif dengan caption !Nyaa~ contoh: *${prefix}stickergif*`, id)
	        }
            break
        case 'stikergiphy':
		case 'stikergip':
        case 'stickergiphy':
            if (args.length !== 1) return client.reply(from, `Format salah !Nyaa~.\nKetik ${prefix}stickergiphy <link_giphy>`, id)
            const isGiphy = url.match(new RegExp(/https?:\/\/(www\.)?giphy.com/, 'gi'))
            const isMediaGiphy = url.match(new RegExp(/https?:\/\/media.giphy.com\/media/, 'gi'))
            if (isGiphy) {
                const getGiphyCode = url.match(new RegExp(/(\/|\-)(?:.(?!(\/|\-)))+$/, 'gi'))
                if (!getGiphyCode) { return client.reply(from, 'Gagal mengambil kode giphy !Nyaa', id) }
                const giphyCode = getGiphyCode[0].replace(/[-\/]/gi, '')
                const smallGifUrl = 'https://media.giphy.com/media/' + giphyCode + '/giphy-downsized.gif'
                client.sendGiphyAsSticker(from, smallGifUrl).then(() => {
                    client.reply(from, 'Nih !Nyaa~')
                    console.log(`Sticker Processed for ${processTime(t, moment())} Second`)
                }).catch((err) => console.log(err))
            } else if (isMediaGiphy) {
                const gifUrl = url.match(new RegExp(/(giphy|source).(gif|mp4)/, 'gi'))
                if (!gifUrl) { return client.reply(from, 'Gagal mengambil kode giphy !Nyaa', id) }
                const smallGifUrl = url.replace(gifUrl[0], 'giphy-downsized.gif')
                client.sendGiphyAsSticker(from, smallGifUrl)
                .then(() => {
                    console.log(`Sticker Processed for ${processTime(t, moment())} Second`)
                })
                .catch(() => {
                    client.reply(from, `Ada yang error!`, id)
                })
            } else {
                await client.reply(from, 'Maaf, command sticker giphy hanya bisa menggunakan link dari giphy.  [Giphy Only]', id)
            }
            break
			 
            case 'menubadword':
                const menu = "*MENU*\n1. *#topbadword* : badword terbanyak\n2. *#reset* : reset top badword"
                await client.sendText(from, menu)
                break
			case 'badword':
            if (!isGroupMsg) return client.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!Nyaa~', id)
            if (!isGroupAdmins && !isOwnerBot) return client.reply(from, 'Perintah ini hanya bisa di gunakan oleh Admin !Nyaa~', id)
            if (args.length === 0) return client.reply(from, 'Pilih enable atau disable!Nyaa~', id)
            if (args[0] === 'enable') {
                ngegas.push(chat.id)
                fs.writeFileSync('./settings/ngegas.json', JSON.stringify(ngegas))
                client.reply(from, 'AntiBadword Command berhasil di aktifkan !Nyaa~ kirim perintah *#menuBadword* untuk mengetahui menu', id)
           } else if (args[0] === 'disable') {
				let bacot = ngegas.indexOf(chat.id)
                ngegas.splice(bacot,1)
                fs.writeFileSync('./settings/ngegas.json', JSON.stringify(ngegas))
                client.reply(from, 'AntiBadword Command berhasil di nonktifkan !Nyaa~')
            } else {
                client.reply(from, 'Pilih enable atau disable !Nyaa~', id)
            }
            break	
          case 'reset':
			if (!isGroupMsg) return client.reply(from, 'Maaf, perintah ini hanya dapat dipakai didalam grup !Nyaa~', id)
            if (!isGroupAdmins) return client.reply(from, 'Gagal, perintah ini hanya dapat digunakan oleh admin grup!Nyaa~ ', id)
			const reset = db.get('group').find({ id: groupId }).assign({ members: []}).write()
            if(reset){
				await client.sendText(from, "Klasemen telah direset !Nyaa~")
            }
			break
            case 'topbadword':
                if (!isGroupMsg) return client.reply(from, 'Maaf !Nyaa perintah ini hanya dalam grup', message.id)
				if (!isGroupAdmins) return client.reply(from, 'Maaf !Nyaa perintah ini hanya untuk admin grup!', message.id)
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
				
        case 'meme':
            if ((isMedia || isQuotedImage) && args.length >= 2) {
                const top = arg.split('|')[0]
                const bottom = arg.split('|')[1]
                const encryptMedia = isQuotedImage ? quotedMsg : message
				client.reply(from, 'Sebentar !Nyaa~..', id)
                const mediaData = await decryptMedia(encryptMedia, uaOverride)
                const getUrl = await uploadImages(mediaData, false)
                const ImageBase64 = await meme.custom(getUrl, top, bottom)
                client.sendFile(from, ImageBase64, 'image.png', '', null, true)
                    .then(() => {
                    })
                    .catch(() => {
                        client.reply(from, 'Ada yang error!')
                    })
            } else {
                await client.reply(from, `Tidak ada gambar!Nyaa~ Silahkan kirim gambar dengan caption ${prefix}meme <teks_atas> | <teks_bawah>\ncontoh: ${prefix}meme Rein | Neko`, id)
            }
            break
		 case 'resep':
            if (args.length == 0) return client.reply(from, `Untuk mencari resep makanan\nCara penggunaan ketik: *#resep [search]*\n\ncontoh: *#resep ayam*`, id)
            const cariresep = body.slice(7)
            const hasilresep = await rugaapi.resep(cariresep)
            await client.sendText(from, hasilresep, + '\n\nKalau udh jadi Rein minta Nyaa!!!', id)
            .catch(() => {
                client.reply(from, 'Ada yang Error!', id)
            })
            break		
        case 'kuotemaker':
            const qmaker = body.trim().split('|')
            if (qmaker.length >= 3) {
                const quotes = qmaker[1]
                const author = qmaker[2]
                const theme = qmaker[3]
                client.reply(from, 'Proses kak..', id)
                try {
                    const hasilqmaker = await images.quote(quotes, author, theme)
                    client.sendFileFromUrl(from, `${hasilqmaker}`, '', 'Ini kak..', id)
                } catch {
                    client.reply('Yahh proses gagal, kakak isinya sudah benar belum?..', id)
                }
            } else {
                client.reply(from, `Pemakaian ${prefix}quotemaker |isi quote|author|theme\n\ncontoh: ${prefix}quotemaker |aku sayang kamu|-client|random\n\nuntuk theme nya pakai random ya kak..`)
            }
            break
        case 'nssulis':
            if (args.length == 0) return client.reply(from, `Pemakaian: ${prefix}nulis [teks]\n\ncontoh: ${prefix}nulis Ohayou gozaimasu`, id)
            const nulisq = body.slice(7)
            const nulisp = await rugaapi.tulis(nulisq)
            await client.sendImage(from, `${nulisp}`, '', 'Nih...', id)
            .catch(() => {
                client.reply(from, 'Ada yang Error!', id)
            })
            break

        //Islam Command
        /*case 'listsurah':
            try {
                axios.get('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/islam/surah.json')
                .then((response) => {
                    let hehex = '╔══✪〘 List Surah 〙✪══\n'
                    for (let i = 0; i < response.data.data.length; i++) {
                        hehex += '╠➥ '
                        hehex += response.data.data[i].name.transliteration.id.toLowerCase() + '\n'
                            }
                        hehex += '╚═〘 -------------------- 〙'
                    client.reply(from, hehex, id)
                })
            } catch(err) {
                client.reply(from, err, id)
            }
            break*/
        /*case 'infosurah':
            if (args.length == 0) return client.reply(from, `*_${prefix}infosurah <nama surah>_*\nMenampilkan informasi lengkap mengenai surah tertentu. Contoh penggunan: ${prefix}infosurah al-baqarah`, message.id)
                var responseh = await axios.get('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/islam/surah.json')
                var { data } = responseh.data
                var idx = data.findIndex(function(post, index) {
                  if((post.name.transliteration.id.toLowerCase() == args[0].toLowerCase())||(post.name.transliteration.en.toLowerCase() == args[0].toLowerCase()))
                    return true;
                });
                var pesan = ""
                pesan = pesan + "Nama : "+ data[idx].name.transliteration.id + "\n" + "Asma : " +data[idx].name.short+"\n"+"Arti : "+data[idx].name.translation.id+"\n"+"Jumlah ayat : "+data[idx].numberOfVerses+"\n"+"Nomor surah : "+data[idx].number+"\n"+"Jenis : "+data[idx].revelation.id+"\n"+"Keterangan : "+data[idx].tafsir.id
                client.reply(from, pesan, message.id)
              break*/
       /* case 'surah':
            if (args.length == 0) return client.reply(from, `*_${prefix}surah <nama surah> <ayat>_*\nMenampilkan ayat Al-Quran tertentu beserta terjemahannya dalam bahasa Indonesia. Contoh penggunaan : ${prefix}surah al-baqarah 1\n\n*_${prefix}surah <nama surah> <ayat> en/id_*\nMenampilkan ayat Al-Quran tertentu beserta terjemahannya dalam bahasa Inggris / Indonesia. Contoh penggunaan : ${prefix}surah al-baqarah 1 id`, message.id)
                var responseh = await axios.get('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/islam/surah.json')
                var { data } = responseh.data
                var idx = data.findIndex(function(post, index) {
                  if((post.name.transliteration.id.toLowerCase() == args[0].toLowerCase())||(post.name.transliteration.en.toLowerCase() == args[0].toLowerCase()))
                    return true;
                });
                nmr = data[idx].number
                if(!isNaN(nmr)) {
                  var responseh2 = await axios.get('https://api.quran.sutanlab.id/surah/'+nmr+"/"+args[1])
                  var {data} = responseh2.data
                  var last = function last(array, n) {
                    if (array == null) return void 0;
                    if (n == null) return array[array.length - 1];
                    return array.slice(Math.max(array.length - n, 0));
                  };
                  bhs = last(args)
                  pesan = ""
                  pesan = pesan + data.text.arab + "\n\n"
                  if(bhs == "en") {
                    pesan = pesan + data.translation.en
                  } else {
                    pesan = pesan + data.translation.id
                  }
                  pesan = pesan + "\n\n(Q.S. "+data.surah.name.transliteration.id+":"+args[1]+")"
                  client.reply(from, pesan, message.id)
                }
              break*/
       /*  case 'tafsir':
            if (args.length == 0) return client.reply(from, `*_${prefix}tafsir <nama surah> <ayat>_*\nMenampilkan ayat Al-Quran tertentu beserta terjemahan dan tafsirnya dalam bahasa Indonesia. Contoh penggunaan : ${prefix}tafsir al-baqarah 1`, message.id)
                var responsh = await axios.get('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/islam/surah.json')
                var {data} = responsh.data
                var idx = data.findIndex(function(post, index) {
                  if((post.name.transliteration.id.toLowerCase() == args[0].toLowerCase())||(post.name.transliteration.en.toLowerCase() == args[0].toLowerCase()))
                    return true;
                });
                nmr = data[idx].number
                if(!isNaN(nmr)) {
                  var responsih = await axios.get('https://api.quran.sutanlab.id/surah/'+nmr+"/"+args[1])
                  var {data} = responsih.data
                  pesan = ""
                  pesan = pesan + "Tafsir Q.S. "+data.surah.name.transliteration.id+":"+args[1]+"\n\n"
                  pesan = pesan + data.text.arab + "\n\n"
                  pesan = pesan + "_" + data.translation.id + "_" + "\n\n" +data.tafsir.id.long
                  client.reply(from, pesan, message.id)
              }
              break*/
        /*case 'alaudio':
            if (args.length == 0) return client.reply(from, `*_${prefix}ALaudio <nama surah>_*\nMenampilkan tautan dari audio surah tertentu. Contoh penggunaan : ${prefix}ALaudio al-fatihah\n\n*_${prefix}ALaudio <nama surah> <ayat>_*\nMengirim audio surah dan ayat tertentu beserta terjemahannya dalam bahasa Indonesia. Contoh penggunaan : ${prefix}ALaudio al-fatihah 1\n\n*_${prefix}ALaudio <nama surah> <ayat> en_*\nMengirim audio surah dan ayat tertentu beserta terjemahannya dalam bahasa Inggris. Contoh penggunaan : ${prefix}ALaudio al-fatihah 1 en`, message.id)
              ayat = "ayat"
              bhs = ""
                var responseh = await axios.get('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/islam/surah.json')
                var surah = responseh.data
                var idx = surah.data.findIndex(function(post, index) {
                  if((post.name.transliteration.id.toLowerCase() == args[0].toLowerCase())||(post.name.transliteration.en.toLowerCase() == args[0].toLowerCase()))
                    return true;
                });
                nmr = surah.data[idx].number
                if(!isNaN(nmr)) {
                  if(args.length > 2) {
                    ayat = args[1]
                  }
                  if (args.length == 2) {
                    var last = function last(array, n) {
                      if (array == null) return void 0;
                      if (n == null) return array[array.length - 1];
                      return array.slice(Math.max(array.length - n, 0));
                    };
                    ayat = last(args)
                  } 
                  pesan = ""
                  if(isNaN(ayat)) {
                    var responsih2 = await axios.get('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/islam/surah/'+nmr+'.json')
                    var {name, name_translations, number_of_ayah, number_of_surah,  recitations} = responsih2.data
                    pesan = pesan + "Audio Quran Surah ke-"+number_of_surah+" "+name+" ("+name_translations.ar+") "+ "dengan jumlah "+ number_of_ayah+" ayat\n"
                    pesan = pesan + "Dilantunkan oleh "+recitations[0].name+" : "+recitations[0].audio_url+"\n"
                    pesan = pesan + "Dilantunkan oleh "+recitations[1].name+" : "+recitations[1].audio_url+"\n"
                    pesan = pesan + "Dilantunkan oleh "+recitations[2].name+" : "+recitations[2].audio_url+"\n"
                    client.reply(from, pesan, message.id)
                  } else {
                    var responsih2 = await axios.get('https://api.quran.sutanlab.id/surah/'+nmr+"/"+ayat)
                    var {data} = responsih2.data
                    var last = function last(array, n) {
                      if (array == null) return void 0;
                      if (n == null) return array[array.length - 1];
                      return array.slice(Math.max(array.length - n, 0));
                    };
                    bhs = last(args)
                    pesan = ""
                    pesan = pesan + data.text.arab + "\n\n"
                    if(bhs == "en") {
                      pesan = pesan + data.translation.en
                    } else {
                      pesan = pesan + data.translation.id
                    }
                    pesan = pesan + "\n\n(Q.S. "+data.surah.name.transliteration.id+":"+args[1]+")"
                    await client.sendFileFromUrl(from, data.audio.secondary[0])
                    await client.reply(from, pesan, message.id)
                  }
              }
              break
        case 'jsolat':
            if (args.length == 0) return client.reply(from, `Untuk melihat jadwal solat dari setiap daerah yang ada\nketik: ${prefix}jsolat [daerah]\n\nuntuk list daerah yang ada\nketik: ${prefix}daerah`, id)
            const solatx = body.slice(8)
            const solatj = await rugaapi.jadwaldaerah(solatx)
            await client.reply(from, solatj, id)
            .catch(() => {
                client.reply(from, 'Sudah input daerah yang ada dilist?', id)
            })
            break
        case 'daerah':
            const daerahq = await rugaapi.daerah()
            await client.reply(from, daerahq, id)
            .catch(() => {
                client.reply(from, 'Ada yang Error!', id)
            })
            break*/
        //Media
		  case 'ttp':
              axios.get(`https://st4rz.herokuapp.com/api/ttp?kata=${body.slice(5)}`)
                    .then(res => {
                     client.sendImageAsSticker(from, res.data.result)
                    })
                break
        case 'instagram':
            if (args.length == 0) return client.reply(from, `Untuk mendownload gambar atau video dari instagram\nketik: ${prefix}instagram [link_ig]`, id)
            const instag = await rugaapi.insta(args[0])
            await client.sendFileFromUrl(from, instag, '', '', id)
            .catch(() => {
                client.reply(from, 'Ada yang Error!', id)
            })
            break
        case 'ytmp3':
            if (args.length == 0) return client.reply(from, `Untuk mendownload lagu dari youtube\nketik: ${prefix}ytmp3 [link_yt]`, id)
            const linkmp3 = args[0].replace('https://youtu.be/','')
			download(`${arugaytdl3}${linkmp3}`, './media/ytmp3.mp3', (err) => {
				if (err) return client.reply(from, err, id)
				client.sendFileFromUrl(from, './media/ytmp3.mp3', id)
			})
			rugaapi.ytmp3(args[0])
            .then(async(res) => {
				if (res.status == 'error') return client.sendFileFromUrl(from, `${res.link}`, '', `${res.judul}`, id)
				if (res.status == 'filesize') return client.sendFileFromUrl(from, `${res.link}`, '', `${res.judul}`, id)
				await client.sendFileFromUrl(from, `${res.thumb}`, '', `Youtube ditemukan\n\nJudul: ${res.judul}\n\nUkuran: ${res.size}\n\nAudio sedang dikirim`, id)
				await client.sendFileFromUrl(from, `${res.link}`, '', '', id)
			})
            break
			
		//Primbon Menu
		case 'artinama':
			if (args.length == 0) return client.reply(from, `Contoh :ketik ${prefix}artinama Namamu !Nyaa~`, id)
            rugaapi.artinama(body.slice(10))
			.then(async(res) => {
				await client.reply(from, `Arti : ${res}`, id)
			})
			break
		case 'cekjodoh':
			if (args.length !== 2) return client.reply(from, `Untuk mengecek jodoh melalui nama\nketik: ${prefix}cekjodoh nama pasangan\n\ncontoh: ${prefix}cekjodoh aku kamu\n\nhanya bisa pakai nama panggilan (satu kata)`)
			rugaapi.cekjodoh(args[0],args[1])
			.then(async(res) => {
				await client.sendFileFromUrl(from, `${res.link}`, '', `${res.text}`, id)
			})
			break
			
        // Random Kata
        case 'fakta':
            fetch('https://raw.githubusercontent.com/TokisakiKumi/random/main/FaktaUnik.txt')
            .then(res => res.text())
            .then(body => {
                let splitnix = body.split('\n')
                let randomnix = splitnix[Math.floor(Math.random() * splitnix.length)]
                client.reply(from, randomnix, id)
            })
            .catch(() => {
                client.reply(from, 'Ada yang Error!', id)
            })
            break
		case 'motivasi':
            fetch('https://raw.githubusercontent.com/selyxn/motivasi/main/motivasi.txt')
            .then(res => res.text())
            .then(body => {
                let splitmotivasi = body.split('\n')
                let randommotivasi = splitmotivasi[Math.floor(Math.random() * splitmotivasi.length)]
                client.reply(from, randommotivasi, id)
            })
            .catch(() => {
                client.reply(from, 'Ada yang Error!', id)
            })
            break
        case 'katabijak':
            fetch('https://raw.githubusercontent.com/TokisakiKumi/random/main/katabijak.txt')
            .then(res => res.text())
            .then(body => {
                let splitbijak = body.split('\n')
                let randombijak = splitbijak[Math.floor(Math.random() * splitbijak.length)]
                client.reply(from, randombijak, id)
            })
            .catch(() => {
                client.reply(from, 'Ada yang Error!', id)
            })
            break
		  case 'lirik':
            if (args.length == 1) return client.reply(from, 'Salah !Nyaa~ perintah *#lirik [judul lagu]*, contoh *#lirik caramella girl*', id)
            const lagu = body.slice(7)
            const lirik = await liriklagu(lagu)
            client.reply(from, lirik, id)
            break	
        case 'pantun':
            fetch('https://raw.githubusercontent.com/TokisakiKumi/random/main/pantun.txt')
            .then(res => res.text())
            .then(body => {
                let splitpantun = body.split('\n')
                let randompantun = splitpantun[Math.floor(Math.random() * splitpantun.length)]
                client.reply(from, randompantun.replace(/rein-line/g,"\n"), id)
            })
            .catch(() => {
                client.reply(from, 'Ada yang Error!', id)
            })
            break
        case 'quote':
            const quotex = await rugaapi.quote()
            await client.reply(from, quotex, id)
            .catch(() => {
                client.reply(from, 'Ada yang Error!', id)
            })
            break

        //Random Images
		   case 'husbu':
            const diti = fs.readFileSync('./lib/husbu.json')
            const ditiJsin = JSON.parse(diti)
            const rindIndix = Math.floor(Math.random() * ditiJsin.length)
            const rindKiy = ditiJsin[rindIndix]
            client.sendFileFromUrl(from, rindKiy.image, 'Husbando.jpg', rindKiy.teks, id)
            break
		case 'roll':
            const dice = Math.floor(Math.random() * 6) + 1
            await client.sendStickerfromUrl(from, 'https://www.random.org/dice/dice' + dice + '.png')
            break
		 case 'flip':
            const side = Math.floor(Math.random() * 2) + 1
            if (side == 1) {
               client.sendStickerfromUrl(from, 'https://i.ibb.co/LJjkVK5/heads.png')
            } else {
               client.sendStickerfromUrl(from, 'https://i.ibb.co/wNnZ4QD/tails.png')
            }
            break		
		case 'neko':
            q2 = Math.floor(Math.random() * 900) + 300;
            q3 = Math.floor(Math.random() * 900) + 300;
            client.sendFileFromUrl(from, 'http://placekitten.com/'+q3+'/'+q2, 'neko.png','Neko ')
            break
        case 'pokemon':
            q7 = Math.floor(Math.random() * 890) + 1;
            client.sendFileFromUrl(from, 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/'+q7+'.png','Pokemon.png',)
            break
            case 'gepeng':
                if (isMedia && type === 'image' || isQuotedImage) {
                    client.reply(from, ind.wait(), id)
                    const encryptMedias = isQuotedImage ? quotedMsg : message
                    const mediaDatas = await decryptMedia(encryptMedias, uaOverride)
                    const imageLink = await uploadImages(mediaDatas)
                    console.log('Searching for source...')
                    const results = await rugaapi.wide.imageLink
				await client.sendFileFromUrl(from, results, id)
				}
            break
			
		 case 'nh':
                if (isGroupMsg) {
                    if (!isNsfw) return client.reply(from, ind.notNsfw(), id)
                    const kode = args[0]
                    if (!kode) return client.reply(from, ind.wrongFormat(), id)
                    client.reply(from, ind.wait(), id)
                    console.log(`Searching nHentai for ${kode}...`)
                    const validate = await nhentai.exists(kode)
                    if (validate === true) {
                        try {
                            const pic = await api.getBook(kode)
                                .then((book) => {
                                     return api.getImageURL(book.cover)
                                })
                            const dojin = await nhentai.getDoujin(kode)
                            const { title, details, link } = dojin
                            const { tags, artists, languages, categories } = await details
                            let teks = `*Title*: ${title}\n\n*Tags*: ${tags.join(', ')}\n\n*Artists*: ${artists}\n\n*Languages*: ${languages.join(', ')}\n\n*Categories*: ${categories}\n\n*Link*: ${link}`
                            client.sendFileFromUrl(from, pic, 'nhentai.jpg', teks, id)
                                .then(() => console.log('Success sending nHentai info!'))
                        } catch (err) {
                            console.error(err)
                            client.reply(from, err, id)
                        }
                    } else {
                        client.reply(from, ind.nhFalse(), id)
                    }
                } else {
                    client.reply(from, ind.wait(), id)
                    const kode = args[0]
                    const validate = await nhentai.exists(kode)
                    if (validate === true) {
                        try {
                            const pic = await api.getBook(kode)
                                .then((book) => {
                                    return api.getImageURL(book.cover)
                                })
                            const dojin = await nhentai.getDoujin(kode)
                            const { title, details, link } = dojin
                            const { tags, artists, languages, categories } = await details
                            let teks = `*Title*: ${title}\n\n*Tags*: ${tags.join(', ')}\n\n*Artists*: ${artists}\n\n*Languages*: ${languages.join(', ')}\n\n*Categories*: ${categories}\n\n*Link*: ${link}`
                            client.sendFileFromUrl(from, pic, 'nhentai.jpg', teks, id)
                        } catch (err) {
                            console.error(err)
                            client.reply(from, err, id)
                        }
                    } else {
                        client.reply(from, ind.nhFalse(), id)
                    }
                }
            break	
			
		 case 'ptl1':
            if (!isGroupMsg) return client.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            const pptl = ["https://i.pinimg.com/564x/b2/84/55/b2845599d303a4f8fc4f7d2a576799fa.jpg","https://i.pinimg.com/236x/98/08/1c/98081c4dffde1c89c444db4dc1912d2d.jpg","https://i.pinimg.com/236x/a7/e2/fe/a7e2fee8b0abef9d9ecc8885557a4e91.jpg","https://i.pinimg.com/236x/ee/ae/76/eeae769648dfaa18cac66f1d0be8c160.jpg","https://i.pinimg.com/236x/b2/84/55/b2845599d303a4f8fc4f7d2a576799fa.jpg","https://i.pinimg.com/564x/78/7c/49/787c4924083a9424a900e8f1f4fdf05f.jpg","https://i.pinimg.com/236x/eb/05/dc/eb05dc1c306f69dd43b7cae7cbe03d27.jpg","https://i.pinimg.com/236x/d0/1b/40/d01b40691c68b84489f938b939a13871.jpg","https://i.pinimg.com/236x/31/f3/06/31f3065fa218856d7650e84b000d98ab.jpg","https://i.pinimg.com/236x/4a/e5/06/4ae5061a5c594d3fdf193544697ba081.jpg","https://i.pinimg.com/236x/56/45/dc/5645dc4a4a60ac5b2320ce63c8233d6a.jpg","https://i.pinimg.com/236x/7f/ad/82/7fad82eec0fa64a41728c9868a608e73.jpg","https://i.pinimg.com/236x/ce/f8/aa/cef8aa0c963170540a96406b6e54991c.jpg","https://i.pinimg.com/236x/77/02/34/77023447b040aef001b971e0defc73e3.jpg","https://i.pinimg.com/236x/4a/5c/38/4a5c38d39687f76004a097011ae44c7d.jpg","https://i.pinimg.com/236x/41/72/af/4172af2053e54ec6de5e221e884ab91b.jpg","https://i.pinimg.com/236x/26/63/ef/2663ef4d4ecfc935a6a2b51364f80c2b.jpg","https://i.pinimg.com/236x/2b/cb/48/2bcb487b6d398e8030814c7a6c5a641d.jpg","https://i.pinimg.com/236x/62/da/23/62da234d941080696428e6d4deec6d73.jpg","https://i.pinimg.com/236x/d4/f3/40/d4f340e614cc4f69bf9a31036e3d03c5.jpg","https://i.pinimg.com/236x/d4/97/dd/d497dd29ca202be46111f1d9e62ffa65.jpg","https://i.pinimg.com/564x/52/35/66/523566d43058e26bf23150ac064cfdaa.jpg","https://i.pinimg.com/236x/36/e5/27/36e52782f8d10e4f97ec4dbbc97b7e67.jpg","https://i.pinimg.com/236x/02/a0/33/02a033625cb51e0c878e6df2d8d00643.jpg","https://i.pinimg.com/236x/30/9b/04/309b04d4a498addc6e4dd9d9cdfa57a9.jpg","https://i.pinimg.com/236x/9e/1d/ef/9e1def3b7ce4084b7c64693f15b8bea9.jpg","https://i.pinimg.com/236x/e1/8f/a2/e18fa21af74c28e439f1eb4c60e5858a.jpg","https://i.pinimg.com/236x/22/d9/22/22d9220de8619001fe1b27a2211d477e.jpg","https://i.pinimg.com/236x/af/ac/4d/afac4d11679184f557d9294c2270552d.jpg","https://i.pinimg.com/564x/52/be/c9/52bec924b5bdc0d761cfb1160865b5a1.jpg","https://i.pinimg.com/236x/1a/5a/3c/1a5a3cffd0d936cd4969028668530a15.jpg"]
            let pep = pptl[Math.floor(Math.random() * pptl.length)]
            client.sendFileFromUrl(from, pep, 'pptl.jpg', 'nihh !Nyaa~', id)
            break
			
		case 'randomhentai':
			if (!isGroupMsg) return client.reply(from, 'Fitur ini hanya bisa di gunakan dalam group !Nyaa~', id)
			 if (!isNsfw) return client.reply(from, 'Command/Perintah NSFW belum di aktifkan !Nyaa', id)
            const hentai = await rugaapi.hentai()
            await client.sendFileFromUrl(from, hentai, '', 'Hentai!', id)
            .catch(() => {
                client.reply(from, 'Ada yang Error!', id)
            })
            break	
		case 'futanari':
			if (!isNsfw) return client.reply(from, 'Command/Perintah NSFW belum di aktifkan !Nyaa', id)
			if (!isGroupMsg) return client.reply(from, 'Fitur ini hanya bisa di gunakan dalam group !Nyaa~', id)
            const futanari = await rugaapi.futanari()
            await client.sendFileFromUrl(from, futanari, '', 'futanari!', id)
            .catch(() => {
                client.reply(from, 'Ada yang Error!', id)
            })
            break	
		case 'yuri':
			if (!isNsfw) return client.reply(from, 'Command/Perintah NSFW belum di aktifkan !Nyaa', id)
			if (!isGroupMsg) return client.reply(from, 'Fitur ini hanya bisa di gunakan dalam group !Nyaa~', id)
            const yuri = await rugaapi.yuri()
            await client.sendFileFromUrl(from, yuri, '', 'yuri!', id)
            .catch(() => {
                client.reply(from, 'Ada yang Error!', id)
            })
            break
		case 'pussy':
			if (!isNsfw) return client.reply(from, 'Command/Perintah NSFW belum di aktifkan !Nyaa', id)
			if (!isGroupMsg) return client.reply(from, 'Fitur ini hanya bisa di gunakan dalam group !Nyaa~', id)
            const pusi = await rugaapi.pussy()
            await client.sendFileFromUrl(from, pusi, '', '', id)
            .catch(() => {
                client.reply(from, 'Ada yang Error!', id)
            })
            break	
		case 'blowjob':
			if (!isNsfw) return client.reply(from, 'Command/Perintah NSFW belum di aktifkan !Nyaa', id)
			if (!isGroupMsg) return client.reply(from, 'Fitur ini hanya bisa di gunakan dalam group !Nyaa~', id)
            const bj = await rugaapi.blowjob()
            await client.sendFileFromUrl(from, bj, '', '', id)
            .catch(() => {
                client.reply(from, 'Ada yang Error!', id)
            })
            break	
		  case 'hug':
            if (!isGroupMsg) return client.reply(from, 'Fitur ini hanya bisa di gunakan dalam group', id)
           const peyukk = await rugaapi.hug()
			 await client.sendImageAsSticker(from, `Peyuuk kak\n${mentionedJidList.map(x => `@${x.replace('@c.us', '')}`).join('\n')}`)
            break	
		  case 'randomnime':
            const nime = await rugaapi.nime()
            await client.sendFileFromUrl(from, nime, '', 'Random nime !Nyaa~', id)
            .catch(() => {
                client.reply(from, 'Ada yang Error!', id)
            })
            break			
		case 'cosplay' :
			const cospnime = ['https://cdn.discordapp.com/attachments/523444485888409610/760335686988857374/120194983_940386699787847_2666380363326844171_o.jpg','https://cdn.discordapp.com/attachments/523444485888409610/765781362082578442/EkMzOzbVcAIcFJX.jpg','https://cdn.discordapp.com/attachments/523444485888409610/766070061152600064/IMG-20201008-WA0112.jpg','https://cdn.discordapp.com/attachments/523444485888409610/781528776685125642/FB_IMG_1606401318509.jpg','https://cdn.discordapp.com/attachments/523444485888409610/759597393544347658/FB_IMG_16011314633322160.jpg','https://cdn.discordapp.com/attachments/523444485888409610/759493127026245632/118440016_1831264717036924_7793839009286626267_n.jpg','https://cdn.discordapp.com/attachments/523444485888409610/760334660785012776/IMG_20200928_235923_840.jpg','https://cdn.discordapp.com/attachments/523444485888409610/759941430629236767/mmmenmentan_20200927-1.jpg','https://cdn.discordapp.com/attachments/523444485888409610/762588096948338688/1601885536432.jpg','https://cdn.discordapp.com/attachments/523444485888409610/759941463571431424/mmmenmentan_20200927-5.jpg','https://cdn.discordapp.com/attachments/523444485888409610/781528785904074752/FB_IMG_1606401321598.jpg','https://cdn.discordapp.com/attachments/523444485888409610/781528658850349086/FB_IMG_1606401308220.jpg','https://cdn.discordapp.com/attachments/523444485888409610/769766829395542016/mi_na_mi_na37-20201025-0002.jpg','https://cdn.discordapp.com/attachments/523444485888409610/772905943214063636/nishi_24sakurai_20200225_131904_2.jpg','https://cdn.discordapp.com/attachments/523444485888409610/760775076298620949/FB_IMG_16014186473070393.jpg','https://cdn.discordapp.com/attachments/523444485888409610/760827029368733716/IMG_20200930_165432_200.jpg','https://cdn.discordapp.com/attachments/523444485888409610/760106598935953428/FB_IMG_16012937706622506.jpg','https://cdn.discordapp.com/attachments/523444485888409610/768818588609937428/121113232_3526346897404597_2327646821660072768_o.jpg','https://cdn.discordapp.com/attachments/523444485888409610/760820650784194571/120203668_3061509827294182_102801431962445850_o.jpg','https://cdn.discordapp.com/attachments/523444485888409610/760432617878585354/120288195_2748414215435664_4364111498796861185_o.jpg','https://cdn.discordapp.com/attachments/523444485888409610/761160403110723664/IMG_20201001_163901_915.jpg','https://cdn.discordapp.com/attachments/523444485888409610/766226904822841384/EkMMvjeVkAA3Kbl.jpg','https://cdn.discordapp.com/attachments/523444485888409610/766634997103853568/Ekcq1tXUcAEDY9W.jpg','https://cdn.discordapp.com/attachments/523444485888409610/760855279558197298/120309572_985567098585457_6537350486290902157_o.jpg','https://cdn.discordapp.com/attachments/523444485888409610/768458376161787904/Ek2WS0RVkAA7fWP.jpg','https://cdn.discordapp.com/attachments/523444485888409610/763041815355719710/120725990_1811426528998157_7264148302298504551_o.jpg','https://cdn.discordapp.com/attachments/523444485888409610/760832793546326076/120492537_3061512720627226_128753860853545202_o.jpg','https://cdn.discordapp.com/attachments/523444485888409610/781368341046624306/gallery.cosplay_-20201126-0002.jpg','https://cdn.discordapp.com/attachments/523444485888409610/763671914609901568/120737896_349746219778693_8510445846146443301_o.jpg','https://cdn.discordapp.com/attachments/523444485888409610/766069598613012510/IMG-20201008-WA0110.jpg','https://cdn.discordapp.com/attachments/523444485888409610/763041805624672276/120709683_1811426462331497_4028124050138656462_o.jpg','https://cdn.discordapp.com/attachments/523444485888409610/763009712694099988/120750456_1466738766854085_2657312582198437438_o.jpg','https://cdn.discordapp.com/attachments/523444485888409610/763773285548687440/hami_1201_20201008_9.png','https://cdn.discordapp.com/attachments/523444485888409610/766285548662685696/EkXf19NVgAYWQhp.jpg','https://cdn.discordapp.com/attachments/523444485888409610/769581694835490836/20201024_232244.jpg','https://cdn.discordapp.com/attachments/523444485888409610/767539642458308628/IMG-20201018-WA0294.jpg','https://cdn.discordapp.com/attachments/523444485888409610/766236937396420608/EkV3-b8VoAAcg5S.jpg','https://cdn.discordapp.com/attachments/523444485888409610/763046372709498900/120800730_1811426598998150_1992071546675317961_o.jpg','https://cdn.discordapp.com/attachments/523444485888409610/768797658931658752/120997975_1444716339070554_60955198029018','https://cdn.discordapp.com/attachments/523444485888409610/767781597503422494/c3eru_20201019_4.png65994_o.jpg','https://cdn.discordapp.com/attachments/523444485888409610/766236935311196200/EkV3-anUYAI8ou6.jpg','https://cdn.discordapp.com/attachments/523444485888409610/774252592729292800/123613355_10157907764226747_1147363453676244633_o.jpg','https://cdn.discordapp.com/attachments/523444485888409610/773088539067940884/FB_IMG_1604377489466.jpg','https://cdn.discordapp.com/attachments/523444485888409610/772087117832257546/ElpStPMVoAA0cmo.jpg','https://cdn.discordapp.com/attachments/523444485888409610/772696212000079904/IMG_20201028_164120.jpg','https://cdn.discordapp.com/attachments/523444485888409610/772431914975756318/8334-uR5dQZowMokbTwFR.jpeg','https://cdn.discordapp.com/attachments/523444485888409610/769525863469285397/IMG_20201024_183641.jpg','https://cdn.discordapp.com/attachments/523444485888409610/772092679277248512/Elpu0E5VMAAwdhm.jpg','https://cdn.discordapp.com/attachments/523444485888409610/770477482104324096/FB_IMG_1603766447023.jpg','https://cdn.discordapp.com/attachments/523444485888409610/770477501076078622/FB_IMG_1603766442239.jpg','https://cdn.discordapp.com/attachments/523444485888409610/772696243511492608/IMG_20201028_164124.jpg','https://cdn.discordapp.com/attachments/523444485888409610/772349139958497331/mmmenmentan_20201031-2.jpg','https://cdn.discordapp.com/attachments/523444485888409610/774557199220867082/EmNRiQDVMAEeYVA.jpg','https://cdn.discordapp.com/attachments/523444485888409610/773473881532268565/El8oXXVU0AATUCq.jpg','https://cdn.discordapp.com/attachments/523444485888409610/781289053999464478/FB_IMG_1606344027020.jpg','https://cdn.discordapp.com/attachments/523444485888409610/781289026740158475/FB_IMG_1606344048256.jpg','https://cdn.discordapp.com/attachments/523444485888409610/773572790883450910/amani_cos_20201102.jpg','https://cdn.discordapp.com/attachments/523444485888409610/763041796967104522/120706217_1811426408998169_77918548326614950_o.jpg','https://cdn.discordapp.com/attachments/523444485888409610/773981148162293760/IMG_20201104_181834.jpg','https://cdn.discordapp.com/attachments/523444485888409610/781289012332855326/FB_IMG_1606344041019.jpg','https://cdn.discordapp.com/attachments/523444485888409610/781288985984499742/FB_IMG_1606344045480.jpg','https://cdn.discordapp.com/attachments/523444485888409610/781213894705938472/b65870e7ly1gl1cfsnc4mj243c64we88.png','https://cdn.discordapp.com/attachments/523444485888409610/774557219319709706/EmNRiQEVgAEkvn4.jpg','https://cdn.discordapp.com/attachments/523444485888409610/775239654391545866/FB_IMG_1604901877695.jpg','https://cdn.discordapp.com/attachments/523444485888409610/775085485436829706/IMG_20201109_025050.jpg','https://cdn.discordapp.com/attachments/523444485888409610/774695160373837854/FB_IMG_16047519256799119.jpg','https://cdn.discordapp.com/attachments/523444485888409610/773886384955850762/CSuVHHzUEAAH656.png','https://cdn.discordapp.com/attachments/523444485888409610/775284110318370866/IMG_20201109_160141.jpg','https://cdn.discordapp.com/attachments/523444485888409610/781213792130039828/b65870e7ly1gl1cfgw51rj243c64wb2g.png','https://cdn.discordapp.com/attachments/523444485888409610/774630524891168768/EmOQ2hAVgAEPjFF.jpg','https://cdn.discordapp.com/attachments/523444485888409610/774695160612257802/a2904053gy1gkfvxrulsmj22yo4g0x6w.png','https://cdn.discordapp.com/attachments/523444485888409610/781127378033442856/005PjocNgy1gkvrjy307hj32b91jk7wh.jpg','https://cdn.discordapp.com/attachments/523444485888409610/781127350783311893/005PjocNgy1gkvrk2yaacj31jk113art.jpg','https://cdn.discordapp.com/attachments/523444485888409610/781127270352945163/005PjocNgy1gkvrk0z5a6j31jk2b9e81.jpg','https://cdn.discordapp.com/attachments/523444485888409610/774973475655778324/nyako_qwq_20201108-2.jpg','https://cdn.discordapp.com/attachments/523444485888409610/781075990662873098/FB_IMG_1606293394221.jpg','https://cdn.discordapp.com/attachments/523444485888409610/780964363837374484/FB_IMG_1606266784282.jpg','https://cdn.discordapp.com/attachments/523444485888409610/775310067149963264/IMG_20201109_174312.jpg','https://cdn.discordapp.com/attachments/523444485888409610/780964356678484029/FB_IMG_1606266782444.jpg','https://cdn.discordapp.com/attachments/523444485888409610/775310066873532436/IMG_20201109_174318.jpg','https://cdn.discordapp.com/attachments/523444485888409610/780964339888291880/FB_IMG_1606266777751.jpg','https://cdn.discordapp.com/attachments/523444485888409610/780942491893366794/FB_IMG_1606261534473.jpg','https://cdn.discordapp.com/attachments/523444485888409610/780942474599465020/FB_IMG_1606261530818.jpg','https://cdn.discordapp.com/attachments/523444485888409610/780942444409782302/FB_IMG_1606261527243.jpg','https://cdn.discordapp.com/attachments/523444485888409610/778791679531679814/sweetasian_cos_20201119_7.png','https://cdn.discordapp.com/attachments/523444485888409610/778791678546673694/sweetasian_cos_20201119_4.png','https://cdn.discordapp.com/attachments/523444485888409610/769525864713945139/IMG_20201024_183555.jpg','https://cdn.discordapp.com/attachments/523444485888409610/778255542912811008/122434745_10157879051476747_4842303787649119946_o.jpg','https://cdn.discordapp.com/attachments/523444485888409610/778249970394071040/125497818_2981708688740751_529918036002517033_o.jpg','https://cdn.discordapp.com/attachments/523444485888409610/778209680497180712/Noelle.jpg','https://cdn.discordapp.com/attachments/523444485888409610/778209679938945055/Jean.jpg','https://cdn.discordapp.com/attachments/523444485888409610/777443130059784192/31.jpg','https://cdn.discordapp.com/attachments/523444485888409610/777123660049547305/125014969_1888542054633057_1652661722674045395_o.png','https://cdn.discordapp.com/attachments/523444485888409610/777117304050810900/IMG_20201113_123923.jpg','https://cdn.discordapp.com/attachments/523444485888409610/777117302599450644/IMG_20201113_123925.jpg','https://cdn.discordapp.com/attachments/523444485888409610/775582889097560094/image0.jpg','https://cdn.discordapp.com/attachments/523444485888409610/777075679971770398/djawa-photo_20201114-1.jpg','https://cdn.discordapp.com/attachments/523444485888409610/776466750820188161/dami_amond_20201112-1.jpg','https://cdn.discordapp.com/attachments/523444485888409610/776088343129096192/suyvvv__20201111-4.jpg','https://cdn.discordapp.com/attachments/523444485888409610/776324123051425832/dami_amond_20201111-2.jpg','https://cdn.discordapp.com/attachments/523444485888409610/775778201775243314/Embj4E4UcAA8wMw.jpeg','https://cdn.discordapp.com/attachments/523444485888409610/776088339315949578/suyvvv__20201111-2.jpg']
            let cospnimek = cospnime[Math.floor(Math.random() * cospnime.length)]
			var namae = pushname
			client.sendFileFromUrl(from, cospnimek, 'Cosplay.jpg', `Nih kak *${namae}* ><`, message.id)
            break	
		case 'milf' :
            const walnime = ['https://mfiles.alphacoders.com/886/886189.jpg','https://mfiles.alphacoders.com/885/885990.png','https://cdn.nekos.life/wallpaper/YLTH5KuvGX8.png','https://mfiles.alphacoders.com/886/886178.jpg','https://mfiles.alphacoders.com/886/886082.jpg','https://mfiles.alphacoders.com/885/885990.png','https://mfiles.alphacoders.com/885/885837.png','https://mfiles.alphacoders.com/885/885694.jpg','https://mfiles.alphacoders.com/885/885732.jpg','https://mfiles.alphacoders.com/885/885638.png ','https://mfiles.alphacoders.com/885/885635.png','https://mobile.alphacoders.com/by-category/3?page=7','https://mfiles.alphacoders.com/885/885404.jpg','https://mfiles.alphacoders.com/885/885320.jpg','https://mfiles.alphacoders.com/885/885062.jpg','https://mfiles.alphacoders.com/885/885011.jpg','https://mfiles.alphacoders.com/884/884792.png','https://mfiles.alphacoders.com/884/884657.png','https://mfiles.alphacoders.com/884/884654.jpg','https://mfiles.alphacoders.com/884/884654.jpg','https://mfiles.alphacoders.com/883/883898.png','https://mfiles.alphacoders.com/882/882726.jpg','https://mfiles.alphacoders.com/882/882615.jpg','https://mfiles.alphacoders.com/882/882593.png','https://mfiles.alphacoders.com/882/882495.jpg','https://mfiles.alphacoders.com/882/882229.png , https://mfiles.alphacoders.com/882/882102.png','https://mfiles.alphacoders.com/882/882070.jpg','https://mfiles.alphacoders.com/881/881896.jpg','https://mfiles.alphacoders.com/881/881715.png','https://mfiles.alphacoders.com/881/881666.jpg','https://mfiles.alphacoders.com/881/881308.jpg','https://mfiles.alphacoders.com/881/881001.jpg','https://mfiles.alphacoders.com/880/880979.jpg','https://mfiles.alphacoders.com/880/880976.jpg','https://mfiles.alphacoders.com/880/880971.jpg','https://mfiles.alphacoders.com/880/880764.jpg','https://mfiles.alphacoders.com/880/880753.jpg','https://mfiles.alphacoders.com/880/880516.png','https://mfiles.alphacoders.com/880/880271.png','https://mfiles.alphacoders.com/880/880182.jpg','https://mfiles.alphacoders.com/879/879934.jpg']
            let walnimek = walnime[Math.floor(Math.random() * walnime.length)]
			client.sendFileFromUrl(from, walnimek, 'Nimek.jpg', '', message.id)
            break	
		  case 'waifu':
            const ditsi = fs.readFileSync('./lib/waifu.json')
            const ditsiJasin = JSON.parse(ditsi)
            const rinadIndix = Math.floor(Math.random() * ditsiJasin.length)
            const rinadKiy = ditsiJasin[rinadIndix]
            client.sendFileFromUrl(from, rinadKiy.image, 'Husbando.jpg', rinadKiy.teks, id)
            break
		case 'randomdojin' :
			if (!isNsfw) return client.reply(from, 'Command/Perintah NSFW belum di aktifkan !Nyaa', id)
            const dojnime = ['https://nyahentai4.com/g/337477/','https://nyahentai4.com/g/337474/','https://nyahentai4.com/g/337859/','https://nyahentai4.com/g/337852/','https://nyahentai4.com/g/337844/','https://nyahentai4.com/g/337837/','https://nyahentai4.com/g/337838/','https://nyahentai4.com/g/337843/','https://nyahentai4.com/g/337830/','https://nyahentai4.com/g/337822/','https://nyahentai4.com/g/337820/','https://nyahentai4.com/g/281534/','https://nyahentai4.com/g/269712/','https://nyahentai4.com/g/337809/','https://nyahentai4.com/g/337798/','https://nyahentai4.com/g/337795/','https://nyahentai4.com/g/337788/','https://nyahentai4.com/g/337708/','https://nyahentai4.com/g/337700/','https://nyahentai4.com/g/337695/','https://nyahentai4.com/g/337683/','https://nyahentai4.com/g/337677/','https://nyahentai4.com/g/337670/','https://nyahentai4.com/g/337649/','https://nyahentai4.com/g/337672/','https://nyahentai4.com/g/337668/','https://nyahentai4.com/g/337646/','https://nyahentai4.com/g/337643/','https://nyahentai4.com/g/337630/','https://nyahentai4.com/g/337627/','https://nyahentai4.com/g/337608/','https://nyahentai4.com/g/337598/','https://nyahentai4.com/g/337593/','https://nyahentai4.com/g/337589/']
            let dojnimek = dojnime[Math.floor(Math.random() * dojnime.length)]
			client.sendLinkWithAutoPreview(from, dojnimek, '', '', message.id)
            break	
		case 'randomneko':
            const neko = await rugaapi.neko()
            await client.sendFileFromUrl(from, neko, '', 'Random Neko !Nyaa~', id)
            .catch(() => {
                client.reply(from, 'Ada yang Error!', id)
            })
            break
		case 'kitsune':
            const fox = await rugaapi.fox()
            await client.sendFileFromUrl(from, fox, '', 'Random Fox !Nyaa~', id)
            .catch(() => {
                client.reply(from, 'Ada yang Error!', id)
            })
            break				
		case 'kemonomimi':
            const kemo = await rugaapi.kemo()
            await client.sendFileFromUrl(from, kemo, '', 'Random Kemonomimi !Nyaa~', id)
            .catch(() => {
                client.reply(from, 'Ada yang Error!', id)
            })
            break	
		case 'loli':
            const lolis = await rugaapi.loli()
            await client.sendFileFromUrl(from, lolis, '', `kak *${pushname}* Lolicon!`, id)
            .catch(() => {
                client.reply(from, 'Ada yang Error!', id)
            })
            break			
		/*case 'loli':
            const loli = fs.readFileSync('./lib/loli.json')
            const lolicek = JSON.parse(loli)
            const lolirandom = Math.floor(Math.random() * lolicek.length)
            const lolipic = lolicek[lolirandom ]
            client.sendFileFromUrl(from, lolipic.image, 'Husbando.jpg', lolipic.teks, id)
            break*/
			
		// NSFW	
		case 'sreddit':
			if (!isNsfw) return client.reply(from, 'Command/Perintah NSFW belum di aktifkan !Nyaa', id)
			if (!isGroupMsg) return client.reply(from, 'Fitur ini hanya bisa di gunakan dalam group !Nyaa~', id)
            if (args.length == 0) return client.reply(from, `Untuk mencari gambar di sub reddit\nketik: ${prefix}sreddit [search]\ncontoh: ${prefix}sreddit nude`, id)
            const carireddit = body.slice(9)
            const hasilreddit = await images.sreddit(carireddit)
            await client.sendFileFromUrl(from, hasilreddit, '', '', id)
            .catch(() => {
                client.reply(from, 'Ada yang Error!', id)
            })
	    break
		/*case 'yuri':
			if (!isNsfw) return client.reply(from, 'Command/Perintah NSFW belum di aktifkan !Nyaa', id)
			if (!isGroupMsg) return client.reply(from, 'Fitur ini hanya bisa di gunakan dalam group !Nyaa~', id)
            const yuri = await rugaapi.yuri()
            await client.sendFileFromUrl(from, yuri, '', 'yuri!', id)
            .catch(() => {
                client.reply(from, 'Ada yang Error!', id)
            })
            break	*/	
		case 'feet':
			if (!isNsfw) return client.reply(from, 'Command/Perintah NSFW belum di aktifkan !Nyaa', id)
			if (!isGroupMsg) return client.reply(from, 'Fitur ini hanya bisa di gunakan dalam group !Nyaa~', id)
            const feeet = await rugaapi.feet()
            await client.sendFileFromUrl(from, feeet, '', `Nih kaki !Nyaa~`, id)
            .catch(() => {
                client.reply(from, 'Ada yang Error!', id)
            })
            break	
	case 'boobs':
			if (!isNsfw) return client.reply(from, 'Command/Perintah NSFW belum di aktifkan !Nyaa', id)
			if (!isGroupMsg) return client.reply(from, 'Fitur ini hanya bisa di gunakan dalam group !Nyaa~', id)
            const boobs = await rugaapi.boobs()
            await client.sendFileFromUrl(from, boobs, '', ``, id)
            .catch(() => {
                client.reply(from, 'Ada yang Error!', id)
            })
            break				
		case 'trap':
			if (!isNsfw) return client.reply(from, 'Command/Perintah NSFW belum di aktifkan !Nyaa', id)
			if (!isGroupMsg) return client.reply(from, 'Fitur ini hanya bisa di gunakan dalam group !Nyaa~', id)
            const trap = await rugaapi.trap()
            await client.sendFileFromUrl(from, trap, '', `kak *${pushname}* Gay!`, id)
            .catch(() => {
                client.reply(from, 'Ada yang Error!', id)
            })
            break		
		case 'nsfwneko':
			if (!isNsfw) return client.reply(from, 'Command/Perintah NSFW belum di aktifkan !Nyaa', id)
			if (!isGroupMsg) return client.reply(from, 'Fitur ini hanya bisa di gunakan dalam group !Nyaa~', id)
            const hneko = await rugaapi.hneko()
            await client.sendFileFromUrl(from, hneko, '', 'Hentai!!!', id)
            .catch(() => {
                client.reply(from, 'Ada yang Error!', id)
            })
            break	
		case 'nsfwcosplay' :
			if (!isNsfw) return client.reply(from, 'Command/Perintah NSFW belum di aktifkan !Nyaa', id)
			if (!isGroupMsg) return client.reply(from, 'Fitur ini hanya bisa di gunakan dalam group !Nyaa~', id)
            const cosnime = ['https://cdn.discordapp.com/attachments/523444485888409610/777463630286815252/IMG-20201115-WA0101.jpg','https://cdn.discordapp.com/attachments/523444485888409610/777849414772457482/dami_amond_20201115-1.jpg','https://cdn.discordapp.com/attachments/523444485888409610/777849420447350784/dami_amond_20201115-3.jpg','https://cdn.discordapp.com/attachments/523444485888409610/777443227740405770/67.jpg','https://cdn.discordapp.com/attachments/523444485888409610/777443166030659584/47.jpg','https://cdn.discordapp.com/attachments/523444485888409610/777190230683680788/125402895_1502166626644632_3702962644479414036_o.jpg','https://cdn.discordapp.com/attachments/523444485888409610/777190188568281168/124887038_1502166346644660_3567473049147967290_o.jpg','https://cdn.discordapp.com/attachments/523444485888409610/777190157824688167/124910174_1502166129978015_3940672704719899585_o.jpg','https://cdn.discordapp.com/attachments/523444485888409610/775778365302898688/ElT-V3cU8AEPlJt.jpeg','https://cdn.discordapp.com/attachments/523444485888409610/775778113090748416/Embj4E3VgAAg7zQ.jpeg','https://cdn.discordapp.com/attachments/523444485888409610/776324122459897856/dami_amond_20201111-3.jpg','https://cdn.discordapp.com/attachments/624455261452632071/781390931064651807/IMG-20201124-WA0442.jpg','https://cdn.discordapp.com/attachments/523444485888409610/775660353136492564/Emc8oFwUcAY5KgF.jpg','https://cdn.discordapp.com/attachments/624455261452632071/781390931357466644/IMG-20201124-WA0443.jpg','https://cdn.discordapp.com/attachments/523444485888409610/774973480130052106/nyako_qwq_20201108-8.jpg','https://cdn.discordapp.com/attachments/523444485888409610/775660357830180874/Emc8oFxVMAAh6mm.jpg','https://cdn.discordapp.com/attachments/523444485888409610/775710430105829416/EmMuZ6FVgAAuQSS.jpeg','https://cdn.discordapp.com/attachments/523444485888409610/773497940181647371/FB_IMG_1604486658214.jpg','https://cdn.discordapp.com/attachments/523444485888409610/774588489526280202/yukineko1018_20201107-4.jpg','https://cdn.discordapp.com/attachments/523444485888409610/775660347897544714/Emc8oF1UcAAnY_m.jpg','https://cdn.discordapp.com/attachments/523444485888409610/775660349038788618/Emc8oFvUcAERe96.jpg','https://cdn.discordapp.com/attachments/523444485888409610/775239663370633266/FB_IMG_1604901876174.jpg','https://cdn.discordapp.com/attachments/523444485888409610/765606146513567744/HaneAme_Kurumi_Cat15.jpg','https://cdn.discordapp.com/attachments/523444485888409610/770477586676580352/FB_IMG_1603766399178.jpg','https://cdn.discordapp.com/attachments/523444485888409610/773155267193733130/IMG_20201103_185859.jpg','https://cdn.discordapp.com/attachments/523444485888409610/769947410625200148/FB_IMG_1603640131167.jpg','https://cdn.discordapp.com/attachments/523444485888409610/772694525776232448/IMG_20201102_122702.jpg','https://cdn.discordapp.com/attachments/523444485888409610/772694717128900618/FB_IMG_1604221882959.jpg','https://cdn.discordapp.com/attachments/523444485888409610/773497940039172096/FB_IMG_1604486662766.jpg','https://cdn.discordapp.com/attachments/523444485888409610/770477749545992202/IMG_20201024_211317.jpg','https://cdn.discordapp.com/attachments/523444485888409610/768458381656457246/Ek2WS0SUYAAhAmR.jpg','https://cdn.discordapp.com/attachments/523444485888409610/772694827833491476/IMG_20201102_122710.jpg','https://cdn.discordapp.com/attachments/523444485888409610/770477657544589362/FB_IMG_1603766390712.jpg','https://cdn.discordapp.com/attachments/523444485888409610/770921590019588136/123054725_3470951886284166_4608029207185108597_o.jpg','https://cdn.discordapp.com/attachments/523444485888409610/773498288875372544/FB_IMG_1604486752319.jpg','https://cdn.discordapp.com/attachments/624455261452632071/781393022386176010/IMG-20201122-WA0493.jpg','https://cdn.discordapp.com/attachments/523444485888409610/769837003775803413/FB_IMG_1603613740700.jpg','https://cdn.discordapp.com/attachments/624455261452632071/781390932070760468/IMG-20201124-WA0440.jpg','https://cdn.discordapp.com/attachments/523444485888409610/773155267550117918/IMG_20201103_185902.jpg','https://cdn.discordapp.com/attachments/523444485888409610/771705083674624000/123197485_3477824452263576_8552488382222655271_o.jpg','https://cdn.discordapp.com/attachments/523444485888409610/775161918172299284/FB_IMG_1590608589302.jpg','https://cdn.discordapp.com/attachments/523444485888409610/773497970552733776/FB_IMG_1604486644984.jpg','https://cdn.discordapp.com/attachments/523444485888409610/771705069967900672/122983531_3477824132263608_3710307307983543827_o.jpg','https://cdn.discordapp.com/attachments/523444485888409610/772694576304488448/FB_IMG_1604221872306.jpg','https://cdn.discordapp.com/attachments/523444485888409610/769554228917567518/mimmissu17_20201024-0.jpg','https://cdn.discordapp.com/attachments/523444485888409610/773088779162091520/FB_IMG_1602501333852.jpg','https://cdn.discordapp.com/attachments/523444485888409610/769539454493917234/122275740_1399600073711582_705772229443420313_o.jpg','https://cdn.discordapp.com/attachments/523444485888409610/770921593924485120/123055223_3470951702950851_160135023376368565_o.jpg','https://cdn.discordapp.com/attachments/523444485888409610/772085837373374484/ElqG5LeUYAAYbrw.jpg','https://cdn.discordapp.com/attachments/523444485888409610/768818593495253042/121127196_3526346664071287_1933894843691903334_o.jpg','https://cdn.discordapp.com/attachments/523444485888409610/774588486183419924/yukineko1018_20201107-3.jpg','https://cdn.discordapp.com/attachments/523444485888409610/767982308333453312/hoshilily-cos_20201019-3.jpg','https://cdn.discordapp.com/attachments/523444485888409610/774973483510661150/nyako_qwq_20201108-10.jpg','https://cdn.discordapp.com/attachments/523444485888409610/770477443635085322/FB_IMG_1603766462687.jpg','https://cdn.discordapp.com/attachments/523444485888409610/768465748636336128/mmmenmentan_20201021-7.jpg','https://cdn.discordapp.com/attachments/523444485888409610/767726742844473385/121448658_2012354722229192_2642666144660892815_o.jpg','https://cdn.discordapp.com/attachments/523444485888409610/773498289051009024/FB_IMG_1604486750739.jpg','https://cdn.discordapp.com/attachments/523444485888409610/768297920972980234/121457457_3530534010303401_1845402763526927059_o.jpg','https://cdn.discordapp.com/attachments/523444485888409610/769134638995079188/okitarinka_20201023-4.jpg','https://cdn.discordapp.com/attachments/523444485888409610/775161918343086080/FB_IMG_1590608583551.jpg','https://cdn.discordapp.com/attachments/523444485888409610/767982305108819988/hoshilily-cos_20201019-2.jpg','https://cdn.discordapp.com/attachments/523444485888409610/766854058232381440/sample_00.webp','https://cdn.discordapp.com/attachments/523444485888409610/766678615948656650/shika-xiaolu_lu_20201016-4.jpg','https://cdn.discordapp.com/attachments/523444485888409610/766854538916266014/FB_IMG_1599467123922.jpg','https://cdn.discordapp.com/attachments/523444485888409610/774959660759384084/123495553_973213859838464_1005261712524778063_o.png','https://cdn.discordapp.com/attachments/523444485888409610/766678610219761704/shika-xiaolu_lu_20201016-1.jpg','https://cdn.discordapp.com/attachments/523444485888409610/768301517454311425/okitarinka_20201020-5.jpg','https://cdn.discordapp.com/attachments/523444485888409610/766638574090846228/121797557_640839496470688_1424439302509904399_o.jpg','https://cdn.discordapp.com/attachments/523444485888409610/767726751149064202/121990497_2012354785562519_7398159937219174936_o.jpg','https://cdn.discordapp.com/attachments/523444485888409610/770477830596591626/IMG_20201024_211226.jpg','https://cdn.discordapp.com/attachments/523444485888409610/768845883982610432/IMG_20201022_202407_977.jpg','https://cdn.discordapp.com/attachments/523444485888409610/765827024844750888/EkRQyHwU0AAsjbb.jpg','https://cdn.discordapp.com/attachments/523444485888409610/766631535116943371/suyvvv__20201016-2.jpg','https://cdn.discordapp.com/attachments/523444485888409610/765963095780491304/8.jpg','https://cdn.discordapp.com/attachments/523444485888409610/766854539093082112/FB_IMG_1599467118535.jpg','https://cdn.discordapp.com/attachments/523444485888409610/773498108121710592/FB_IMG_1604486707901.jpg','https://cdn.discordapp.com/attachments/523444485888409610/769554236136488980/mimmissu17_20201024-2.jpg','https://cdn.discordapp.com/attachments/523444485888409610/765813396586889226/IMG_20201014_124802.jpg','https://cdn.discordapp.com/attachments/523444485888409610/773497953460813824/FB_IMG_1604486653873.jpg','https://cdn.discordapp.com/attachments/523444485888409610/773088480275333120/FB_IMG_1604377515430.jpg','https://cdn.discordapp.com/attachments/523444485888409610/765807481921208340/mimmissu17_20201014-2.jpg','https://cdn.discordapp.com/attachments/523444485888409610/768297914938032128/121397224_3530534913636644_5365470180138253287_o.jpg','https://cdn.discordapp.com/attachments/523444485888409610/765827024459005962/EkRQyHvVkAExt64.jpg','https://cdn.discordapp.com/attachments/523444485888409610/768301502417600542/okitarinka_20201020-2.jpg','https://cdn.discordapp.com/attachments/523444485888409610/766069491657867318/IMG-20201008-WA0118.jpg','https://cdn.discordapp.com/attachments/523444485888409610/768845791551815750/IMG_20201022_202400_710.jpg','https://cdn.discordapp.com/attachments/523444485888409610/766070060799492106/IMG-20201008-WA0111.jpg','https://cdn.discordapp.com/attachments/523444485888409610/774959639527030784/124113796_973213829838467_9165206945441268063_o.png','https://cdn.discordapp.com/attachments/523444485888409610/772695038924292126/IMG_20201102_122823.jpg','https://cdn.discordapp.com/attachments/523444485888409610/764882592289521694/FB_IMG_16023269896153645.jpg','https://cdn.discordapp.com/attachments/523444485888409610/768845829842665512/IMG_20201022_202403_312.jpg','https://cdn.discordapp.com/attachments/523444485888409610/760311813811208202/sample_05.webp','https://cdn.discordapp.com/attachments/523444485888409610/773155266958589952/IMG_20201103_185738.jpg','https://cdn.discordapp.com/attachments/523444485888409610/764778759462584320/120995421_2759015291042223_2974955125266740823_o.jpg','https://cdn.discordapp.com/attachments/523444485888409610/764778773605515274/121111992_2759015354375550_5103023857074675281_o.jpg','https://cdn.discordapp.com/attachments/523444485888409610/764778753900544010/120934187_2759015341042218_614224301874500478_o.jpg','https://cdn.discordapp.com/attachments/523444485888409610/760427060241629184/20200929_155909.jpg','https://cdn.discordapp.com/attachments/523444485888409610/764778766127333376/121006706_2759015351042217_6146104792644318850_o.jpg','https://cdn.discordapp.com/attachments/523444485888409610/760311769867485184/sample_00.webp','https://cdn.discordapp.com/attachments/523444485888409610/760340581665734706/IMG_20200929_102044_146.jpg','https://cdn.discordapp.com/attachments/523444485888409610/775239669084323860/FB_IMG_1604901874565.jpg','https://cdn.discordapp.com/attachments/523444485888409610/760447075451404308/FB_IMG_16013530735072428.jpg','https://cdn.discordapp.com/attachments/523444485888409610/764404898740699136/IMG_20201010_145100.jpg','https://cdn.discordapp.com/attachments/523444485888409610/760826980558962708/IMG_20200930_165435_493.jpg','https://cdn.discordapp.com/attachments/523444485888409610/760802039453843466/IMG_20200930_165459_573.jpg','https://cdn.discordapp.com/attachments/523444485888409610/773497953603813426/FB_IMG_1604486650180.jpg','https://cdn.discordapp.com/attachments/523444485888409610/765507033826852874/VID-20201013-WA0314.mp4','https://cdn.discordapp.com/attachments/523444485888409610/760311793536466944/sample_03.webp','https://cdn.discordapp.com/attachments/523444485888409610/760802061495042098/IMG_20200930_165501_297.jpg','https://cdn.discordapp.com/attachments/523444485888409610/770477567329042452/FB_IMG_1603766437042.jpg','https://cdn.discordapp.com/attachments/523444485888409610/762885049862717460/unknown.png','https://cdn.discordapp.com/attachments/523444485888409610/760340686930313227/IMG_20200929_102047_459.jpg','https://cdn.discordapp.com/attachments/523444485888409610/775270146914123776/1-4_1.jpg','https://cdn.discordapp.com/attachments/523444485888409610/764882474726850581/FB_IMG_16022208550954071.jpg','https://cdn.discordapp.com/attachments/523444485888409610/762574847242141726/120539576_1380279272310329_3742706362817483061_o.jpg']
            let cosnimek = cosnime[Math.floor(Math.random() * cosnime.length)]
			client.sendFileFromUrl(from, cosnimek, 'Cosplay.jpg', `Nih kak *${pushname}* ><`, message.id)
            break	
        case 'memes':
            const randmeme = await meme.random()
            client.sendFileFromUrl(from, randmeme, '', '', id)
            .catch(() => {
                client.reply(from, 'Ada yang Error!', id)
            })
            break
        
        // Search Any
		 /*case 'anime':
			const fetch = require('node-fetch')
            const keyword = message.body.replace('anime', '')
            try {
            const data = await fetch(
           `https://api.jikan.moe/v3/search/anime?q=${keyword}`
            )
            const parsed = await data.json()
            if (!parsed) {
              await client.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Maaf !Nyaa~, Anime tidak ditemukan!', id)
              return null
              }
            const { title, synopsis, episodes, url, rated, score, image_url } = parsed.results[0]
            const content = `*Anime Found!*
✨️ *Title:* ${title}

🎆️ *Episodes:* ${episodes}

💌️ *Rating:* ${rated}

❤️ *Score:* ${score}

💚️ *Synopsis:* ${synopsis}

🌐️ *URL*: ${url}`

            const image = await bent("buffer")(image_url)
            const base64 = `data:image/jpg;base64,${image.toString("base64")}`
            client.sendImage(from, base64, title, content)
           } catch (err) {
             console.error(err.message)
             await client.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Sorry, Couldn\'t find the requested anime')
           }
          break*/
		
		 case 'anime'://silahkan kalian custom sendiri jika ada yang ingin diubah
            if (args.length == 0) return client.reply(from, `Untuk mencari anime dari MAL\n\nPenggunaan: ${prefix}anime <judul anime>`, id)
            axios.get(`https://api.jikan.moe/v3/search/anime?q=${body.slice(7)}`)
            .then(async (res) => {
                await client.sendFileFromUrl(from, `${res.data.results[0].image_url}`, ``, `*Anime Found!*\n\n\n✨️ *Title:* ${res.data.results[0].title}\n\n🎆️ *Episodes:* ${res.data.results[0].episodes}\n\n💌️ *Rating:* ${res.data.results[0].rated}\n\n❤️ *Score:* ${res.data.results[0].score}\n\n💚️ *Synopsis:* ${res.data.results[0].synopsis}\n\n🌐️ *URL*: ${res.data.results[0].url}`, id)
				})
            .catch(() => {
                client.reply(from, 'Ada yang Error!', id)
            })
            break 

	 case 'wibunews'://silahkan kalian custom sendiri jika ada yang ingin diubah
            if (args.length == 0) return client.reply(from, `Untuk mencari berita dari Otakudesu\n\nPenggunaan: ${prefix}wibunews <judul anime>`, id)
            axios.get(`https://api.jikan.moe/v3/search/anime?q=${body.slice(7)}`)
            .then(async (res) => {
                await client.sendFileFromUrl(from, `${res.data.results[0].image_url}`, ``, `*Anime Found!*\n\n\n✨️ *Title:* ${res.data.results[0].title}\n\n🎆️ *Episodes:* ${res.data.results[0].episodes}\n\n💌️ *Rating:* ${res.data.results[0].rated}\n\n❤️ *Score:* ${res.data.results[0].score}\n\n💚️ *Synopsis:* ${res.data.results[0].synopsis}\n\n🌐️ *URL*: ${res.data.results[0].url}`, id)
				})
            .catch(() => {
                client.reply(from, 'Ada yang Error!', id)
            })
            break 
	
	     case 'google':
                const googleQuery = body.slice(8)
                if(googleQuery == undefined || googleQuery == ' ') return client.reply(from, `*Hasil Pencarian : ${googleQuery}* tidak ditemukan !Nyaa~`, id)
                google({ 'query': googleQuery }).then(results => {
                let vars = `_*Hasil Pencarian : ${googleQuery}*_\n`
                for (let i = 0; i < results.length; i++) {
                    vars +=  `\n═════════════════\n\n*Judul* : ${results[i].title}\n\n*Deskripsi* : ${results[i].snippet}\n\n*Link* : ${results[i].link}\n\n`
                }
                    client.reply(from, vars, id);
                }).catch(e => {
                    console.log(e)
                    client.sendText(ownerNumber, 'Google Error : ' + e);
                })
                break
				
		 case 'swattpad'://silahkan kalian custom sendiri jika ada yang ingin diubah
            if (args.length == 0) return client.reply(from, `Untuk mencari novel dari Wattpad\n\nPenggunaan: ${prefix}anime <judul anime>`, id)
            axios.get(`https://api.haipbis.xyz/searchwattpad?q=${body.slice(7)}`)
            .then(async (res) => {
                await client.sendFileFromUrl(from, `${res.data[0].image}`, ``, `*Wattpad Found!*\n\n\n✨️ *Title:* ${res.data[0].title}\n\n🎆️ *Dibaca:* ${res.data[0].reads} Kali\n\n💌️ *Votes:* ${res.data[0].votes}\n\n❤️ *Penulis:* ${res.data[0].writer}\n\n💚️ *Sinopsis:* ${res.data[0].sinopsis}\n\n🌐️ *URL*: ${res.data[0].link}`, id)
				})
            .catch(() => {
                client.reply(from, 'Ada yang Error!', id)
            })
            break 

   case 'stoimg':
            case 'stickertoimg':
            if (quotedMsg && quotedMsg.type == 'sticker') {
                const mediaData = await decryptMedia(quotedMsg)
                client.reply(from, `[WAIT] Sedang di proses⏳ silahkan tunggu!`, id)
                const imageBase64 = `data:${quotedMsg.mimetype};base64,${mediaData.toString('base64')}`
                await client.sendFile(from, imageBase64, 'imagesticker.jpg', '', id)
            } else if (!quotedMsg) return client.reply(from, `Tag sticker yang mau Rein jadikan gambar !Nyaa~`, id)
            break
		
		case 'kusonime'://silahkan kalian custom sendiri jika ada yang ingin diubah
            if (args.length == 0) return client.reply(from, `Untuk mencari anime dari Kusonime\n\nPenggunaan: ${prefix}kusonime <judul anime>`, id)
            axios.get(`https://arugaz.herokuapp.com/api/kuso?q=${body.slice(10)}`)
            .then(async (res) => {
                await client.sendFileFromUrl(from, `${res.data.thumb}`, ``, `*Anime Found!*\n\n\n✨️ *Title:* ${res.data.title}\n\n💌️ *Info:* ${res.data.info}\n\n❤️ *Synopsis:* ${res.data.sinopsis}\n\n🌐️ *Download*: ${res.data.link_dl}`, id)
				})
            .catch(() => {
                client.reply(from, 'Ada yang Error!', id)
            })
            break 
			
	
		case 'reset':
            break
		case 'menubadword':
		case 'badword':
            break
		case 'topbadword':
            break				
		case 'wallpaper':
			const caripaper = body.slice(8)
            const hasilpaper = await images.wall(caripaper)
            client.sendFileFromUrl(from, hasilpaper, '', '', id)
            break	
		case 'images':
		case 'pic':
			const cariwall = body.slice(8)
            const hasilwall = await images.fdci(cariwall)
            client.sendFileFromUrl(from, hasilwall, '', '', id)
            break	
        case 'stalkig':
            if (args.length == 0) return client.reply(from, `Untuk men-stalk akun instagram seseorang !Nyaa~\nketik ${prefix}stalkig [username]\ncontoh: ${prefix}stalkig rein17`, id)
            const igstalk = await rugaapi.stalkig(args[0])
            const igstalkpict = await rugaapi.stalkigpict(args[0])
            await client.sendFileFromUrl(from, igstalkpict, '', igstalk, id)
            .catch(() => {
                client.reply(from, 'Ada yang Error!', id)
            })
            break
        case 'wiki':
            if (args.length == 0) return client.reply(from, `Untuk mencari suatu kata dari wikipedia !Nyaa~\nketik: ${prefix}wiki [kata]`, id)
            const wikip = body.slice(6)
            const wikis = await rugaapi.wiki(wikip)
            await client.reply(from, wikis, id)
            .catch(() => {
                client.reply(from, 'Ada yang Error!', id)
            })
            break
			
		   case 'reins':
		    if (!isPremium)return client.reply(from, `Maaf, fitur ini premium !Nyaa~`, id)
            if (args.length == 0) return client.reply(from, `Untuk bertanya pada Rein !Nyaa~\nketik: ${prefix}rein [kata]`, id)
			const simip = body.slice(6)
            const simis = await rugaapi.simi(simip) 
            await client.reply(from, simis, id)
            .catch(() => {
                client.reply(from, 'Ada yang Error!', id)
            })
            break
			
			 case 'ttp':
               axios.get(`https://st4rz.herokuapp.com/api/ttp?kata=${body.slice(5)}`)
                    .then(res => {
                     client.sendImageAsSticker(from, res.data.result)
                    })
                break
		/* case 'rein':
            if (args.length == 0) return client.reply(from, `Untuk bertanya apapun !Nyaa~\nketik: ${prefix}rein <kata>`, id)
            const simip = body.slice(6)
            const simis = await rugaapi.simi(simip)
			if (simis == "") return client.reply(from,'Rein tidak mengerti maksud kaka !Nyaa~', id)
            await client.repy(from, simis, id)
            .catch(() => {
                client.reply(from, 'Ada yang Error!', id)
            })
            break	*/
        case 'scuaca':
            if (args.length == 0) return client.reply(from, `Untuk melihat cuaca pada suatu daerah\nketik: ${prefix}cuaca [daerah]`, id)
            const cuacaq = body.slice(7)
            const cuacap = await rugaapi.cuaca(cuacaq)
            await client.reply(from, cuacap, id)
            .catch(() => {
                client.reply(from, 'Ada yang Error!', id)
            })
            break
		 case 'mtk':
            if (args.length === 2) return client.reply(from, '[❗] Kirim perintah *#math [ Angka ]*\nContoh : #math 12 * 12\n*NOTE* :\n- Untuk Perkalian Menggunakan *\n- Untuk Pertambahan Menggunakan +\n- Untuk Pengurangan Mennggunakan -\n- Untuk Pembagian Menggunakan /')
            const mtk = body.slice(6)
            if (typeof Math_js.evaluate(mtk) !== "number") {
            client.reply(from, `"${mtk}", bukan angka!\n[❗] Kirim perintah *#math [ Angka ]*\nContoh : #math 12 * 12\n*NOTE* :\n- Untuk Perkalian Menggunakan *\n- Untuk Pertambahan Menggunakan +\n- Untuk Pengurangan Mennggunakan -\n- Untuk Pembagian Menggunakan /`, id)
        } else {
            client.reply(from, `*Bot Answer :*\n*${mtk} = ${Math_js.evaluate(mtk)}*`, id)
        }
        break	
        case 'chord':
            if (args.length == 0) return client.reply(from, `Untuk mencari lirik dan chord dari sebuah lagu\bketik: ${prefix}chord [judul_lagu]`, id)
            const chordq = body.slice(7)
            const chordp = await rugaapi.chord(chordq)
            await client.reply(from, chordp, id)
            .catch(() => {
                client.reply(from, 'Ada yang Error!', id)
            })
            break
        case 'ss': //jika error silahkan buka file di folder settings/api.json dan ubah apiSS 'API-KEY' yang kalian dapat dari website https://apiflash.com/
            if (args.length == 0) return client.reply(from, `Rein akan menscreenshot web !Nyaa~\n\nPemakaian: ${prefix}ss [url]\n\ncontoh: ${prefix}ss http://google.com`, id)
            const scrinshit = await meme.ss(args[0])
            await client.sendFile(from, scrinshit, 'ss.jpg', 'cekrek', id)
            .catch(() => {
                client.reply(from, 'Ada yang Error!', id)
            })
            break
        case 'plays'://silahkan kalian custom sendiri jika ada yang ingin diubah
            if (args.length == 0) return client.reply(from, `Untuk mencari lagu dari youtube\n\nPenggunaan: ${prefix}play judul lagu`, id)
            axios.get(`https://arugaytdl.herokuapp.com/search?q=${body.slice(6)}`)
            .then(async (res) => {
                await client.sendFileFromUrl(from, `${res.data[0].thumbnail}`, ``, `Lagu ditemukan\n\nJudul: ${res.data[0].title}\nDurasi: ${res.data[0].duration}detik\nUploaded: ${res.data[0].uploadDate}\nView: ${res.data[0].viewCount}\n\nsedang dikirim`, id)
				download(`${arugaytdl3}${res.data[0].id}`, './media/ytmp3.mp3', (err) => {
					if (err) return client.reply(from, err, id)
					client.sendPtt(from, './media/ytmp3.mp3', id)
				})
            })
            .catch(() => {
                client.reply(from, 'Ada yang Error!', id)
            })
            break
		   case 'brainly':
            if (args.length >= 2){
                const BrainlySearch = require('./lib/brainly')
                let tanya = body.slice(9)
                let jum = Number(tanya.split('.')[1]) || 2
                if (jum > 10) return client.reply(from, 'Max 10!', id)
                if (Number(tanya[tanya.length-1])){
                    tanya
                }
                client.reply(from, `➸ *Pertanyaan* : ${tanya.split('.')[0]}\n\n➸ *Jumlah jawaban* : ${Number(jum)}`, id)
                await BrainlySearch(tanya.split('.')[0],Number(jum), function(res){
                    res.forEach(x=>{
                        if (x.jawaban.fotoJawaban.length == 0) {
                            client.reply(from, `➸ *Pertanyaan* : ${x.pertanyaan}\n\n➸ *Jawaban* : ${x.jawaban.judulJawaban}\n`, id)
                        } else {
                            client.reply(from, `➸ *Pertanyaan* : ${x.pertanyaan}\n\n➸ *Jawaban* : ${x.jawaban.judulJawaban}\n\n➸ *Link foto jawaban* : ${x.jawaban.fotoJawaban.join('\n')}`, id)
                        }
                    })
                })
            } else {
                client.reply(from, 'Usage :\nbrainly [pertanyaan] [.jumlah]\n\nEx : \n#brainly NKRI .2', id)
            }
            break	
        case 'sauce':
            if (isMedia && type === 'image' || quotedMsg && quotedMsg.type === 'image') {
                if (isMedia) {
                    var mediaData = await decryptMedia(message, uaOverride)
                } else {
                    var mediaData = await decryptMedia(quotedMsg, uaOverride)
                }
                const fetch = require('node-fetch')
                const imgBS4 = `data:${mimetype};base64,${mediaData.toString('base64')}`
                client.reply(from, 'Searching....', id)
                fetch('https://trace.moe/api/search', {
                    method: 'POST',
                    body: JSON.stringify({ image: imgBS4 }),
                    headers: { "Content-Type": "application/json" }
                })
                .then(respon => respon.json())
                .then(resolt => {
                	if (resolt.docs && resolt.docs.length <= 0) {
                		client.reply(from, 'Maaf !Nyaa, aku tidak tau ini anime apa', id)
                	}
                    const { is_adult, title, title_chinese, title_romaji, title_english, episode, similarity, filename, at, tokenthumb, anilist_id } = resolt.docs[0]
                    teks = ''
                    if (similarity < 0.92) {
                    	teks = '*Kalo salah maafin aku !Nyaa~ T_T* :\n\n'
                    }
                    teks += `➸ *Title Japanese* : ${title}\n➸ *Title chinese* : ${title_chinese}\n➸ *Title Romaji* : ${title_romaji}\n➸ *Title English* : ${title_english}\n`
                    teks += `➸ *R-18?* : ${is_adult}\n`
                    teks += `➸ *Eps* : ${episode.toString()}\n`
                    teks += `➸ *Kesamaan* : ${(similarity * 100).toFixed(1)}%\n`
                    var video = `https://media.trace.moe/video/${anilist_id}/${encodeURIComponent(filename)}?t=${at}&token=${tokenthumb}`;
                    client.sendFileFromUrl(from, video, 'anime.mp4', teks, id).catch(() => {
                        client.reply(from, teks, id)
                    })
                })
                .catch(() => {
                    client.reply(from, 'Ada yang Error!', id)
                })
            } else {
				client.reply(from, `Format salah !Nyaa~\n\nSilahkan kirim foto dengan caption ${prefix}sauce\n\nAtau reply foto dengan caption ${prefix}sauce`, id)
			}
            break
            
        // Other Command
        case 'rresi':
            if (args.length !== 2) return client.reply(from, `Maaf, format pesan salah.\nSilahkan ketik pesan dengan ${prefix}resi <kurir> <no_resi>\n\nKurir yang tersedia:\njne, pos, tiki, wahana, jnt, rpx, sap, sicepat, pcp, jet, dse, first, ninja, lion, idl, rex`, id)
            const kurirs = ['jne', 'pos', 'tiki', 'wahana', 'jnt', 'rpx', 'sap', 'sicepat', 'pcp', 'jet', 'dse', 'first', 'ninja', 'lion', 'idl', 'rex']
            if (!kurirs.includes(args[0])) return client.sendText(from, `Maaf, jenis ekspedisi pengiriman tidak didukung layanan ini hanya mendukung ekspedisi pengiriman ${kurirs.join(', ')} Tolong periksa kembali.`)
            console.log('Memeriksa No Resi', args[1], 'dengan ekspedisi', args[0])
            cekResi(args[0], args[1]).then((result) => client.sendText(from, result))
            break
 /* case 'tts':
            if (args.length === 1) return client.reply(from, 'Kirim perintah *#tts [id, en, jp, ar] [teks]*, contoh *#tts id halo semua*')
            const ttsId = require('node-gtts')('id')
            const ttsEn = require('node-gtts')('en')
	    const ttsJp = require('node-gtts')('ja')
            const ttsAr = require('node-gtts')('ar')
            const dataText = body.slice(8)
            if (dataText === '') return client.reply(from, 'Baka?', id)
            if (dataText.length > 500) return client.reply(from, 'Teks terlalu panjang !Nyaa~', id)
            var dataBhs = body.slice(5, 7)
	    if (dataBhs == 'id') {
                ttsId.save('./media/tts/resId.mp3', dataText, function () {
                    client.sendPtt(from, './media/tts/resId.mp3', id)
                })
                })
            } else if (dataBhs == 'en') {
                ttsEn.save('./media/tts/resEn.mp3', dataText, function () {
                    client.sendPtt(from, './media/tts/resEn.mp3', id)
                })
            } else if (dataBhs == 'jp') {
                ttsJp.save('./media/tts/resJp.mp3', dataText, function () {
                    client.sendPtt(from, './media/tts/resJp.mp3', id)
                })
	    } else if (dataBhs == 'ar') {
                ttsAr.save('./media/tts/resAr.mp3', dataText, function () {
                    client.sendPtt(from, './media/tts/resAr.mp3', id)
                })
            } else {
                client.reply(from, 'Masukkan data bahasa  : [id] untuk indonesia, [en] untuk inggris, [jp] untuk jepang, dan [ar] untuk arab', id)
            }
            break
	case 'translate':
		case 'tl':
            arg = body.trim().split(' ')
            if (arg.length != 2) return client.reply(from, 'Wrong Format!', id)
            if (!quotedMsg) return client.reply(from, 'Wrong Format!', id)
            const quoteText = quotedMsg.type == 'chat' ? quotedMsg.body : quotedMsg.type == 'image' ? quotedMsg.caption : ''
            translate(quoteText, arg[1])
                .then((result) => client.sendText(from, result))
                .catch(() => client.sendText(from, 'An error occured!'))
            break	*/
		case 'scovidindo':
			rugaapi.covidindo()
			.then(async (res) => {
				await client.reply(from, `${res}`, id)
			})
			break
		case 'topmovie':
			rugaapi.movie()
			.then(async (res) => {
				await client.reply(from, `${res}`, id)
			})
			break	
        case 'sceklokasi':
            if (quotedMsg.type !== 'location') return client.reply(from, `Maaf, format pesan salah.\nKirimkan lokasi dan reply dengan caption ${prefix}ceklokasi`, id)
            console.log(`Request Status Zona Penyebaran Covid-19 (${quotedMsg.lat}, ${quotedMsg.lng}).`)
            const zoneStatus = await getLocationData(quotedMsg.lat, quotedMsg.lng)
            if (zoneStatus.kode !== 200) client.sendText(from, 'Maaf, Terjadi error ketika memeriksa lokasi yang anda kirim.')
            let datax = ''
            for (let i = 0; i < zoneStatus.data.length; i++) {
                const { zone, region } = zoneStatus.data[i]
                const _zone = zone == 'green' ? 'Hijau* (Aman) \n' : zone == 'yellow' ? 'Kuning* (Waspada) \n' : 'Merah* (Bahaya) \n'
                datax += `${i + 1}. Kel. *${region}* Berstatus *Zona ${_zone}`
            }
            const text = `*CEK LOKASI PENYEBARAN COVID-19*\nHasil pemeriksaan dari lokasi yang anda kirim adalah *${zoneStatus.status}* ${zoneStatus.optional}\n\nInformasi lokasi terdampak disekitar anda:\n${datax}`
            client.sendText(from, text)
            break
        case 'sshortlink':
            if (args.length == 0) return client.reply(from, `ketik ${prefix}shortlink <url>`, id)
            if (!isUrl(args[0])) return client.reply(from, 'Maaf, url yang kamu kirim tidak valid.', id)
            const shortlink = await urlShortener(args[0])
            await client.sendText(from, shortlink)
            .catch(() => {
                client.reply(from, 'Ada yang Error!', id)
            })
            break
		case 'alay':
			if (args.length == 0) return client.reply(from, `Mengubah kalimat menjadi alay !Nyaa~\n\nketik ${prefix}alay <kalimat>`, id)
			rugaapi.bapakfont(body.slice(6))
			.then(async(res) => {
				await client.reply(from, `${res}`, id)
			})
			break
		
		//Fun Menu
        // Group Commands (group admin only)
		case 'linkgrup':
		case 'linkgroup':
            if (!isBotGroupAdmins) return client.reply(from, 'Perintah ini hanya bisa di gunakan ketika bot menjadi admin !Nyaa', id)
			if (!isGroupAdmins) return client.reply(from, 'Gagal, perintah ini hanya dapat digunakan oleh admin grup!Nyaa~', id)
			if (isGroupMsg) {
                const inviteLink = await client.getGroupInviteLink(groupId);
                client.sendLinkWithAutoPreview(from, inviteLink, `\nLink group *${name}*`)
            } else {
            	client.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            }
            break
			
		case 'getses':
			if (!isOwnerBot) return client.reply(from, 'Jangan kepo !Nyaa~', id)
            const sesPic = await client.getSnapshot()
            client.sendFile(from, sesPic, 'session.png', 'Nih Pa!...', id)
            break
			
		case 'ping': {
            const loadedMsg = await client.getAmountOfLoadedMessages()
            const chatIds = await client.getAllChatIds()
            const groups = await client.getAllGroups()
           client.sendText(from, `Nyaa!!!!\nSpeed: ${processTime(t, moment())} _Second_Status :\n- *${loadedMsg}* Loaded Messages\n- *${groups.length}* Group Chats\n- *${chatIds.length - groups.length}* Personal Chats\n- *${chatIds.length}* Total Chats`)
            break	
			}
			
		case 'listblock':
            let hih = `Berikut ini member ngeyel !Nyaa~\nTotal Blacklist : ${blockNumber.length}\n`
            for (let i of blockNumber) {
                hih += `➸ @${i.replace(/@c.us/g,'')}\n`
            }
            client.sendTextWithMentions(from, hih, id)
            break	
	
		case 'profile':
            var role = 'None'
            if (isGroupMsg) {
              if (!quotedMsg) {
              var pic = await client.getProfilePicFromServer(author)
              var namae = pushname
              var sts = await client.getStatus(author)
              var adm = isGroupAdmins
			  //var own= isOwnerBot
			  var adm1= isAsisten
              const { status } = sts
               if (pic == undefined) {
               var pfp = errorurl 
               } else {
               var pfp = pic
               } 
             await client.sendFileFromUrl(from, pfp, 'pfp.jpg', `*User Profile* ✨️ \n\n 🔖️ *Username: ${namae}*\n\n💌️ *User Info:️${status}*\n\n👑️*Admin: ${adm}*\n\n️✨️*CO Admin: ${adm1}*`)
             } else if (quotedMsg) {
             var qmid = quotedMsgObj.sender.id
             var pic = await client.getProfilePicFromServer(qmid)
             var namae = quotedMsgObj.sender.name
             var sts = await client.getStatus(qmid)
             var adm = isGroupAdmins
			 var adm1= isAsisten
			 //var own= isOwnerBot
			  var adm1= isAsisten
             const { status } = sts
              if (pic == undefined) {
              var pfp = errorurl 
              } else {
              var pfp = pic
              } 
             await client.sendFileFromUrl(from, pfp, 'pfo.jpg', `*User Profile* ✨️ \n\n 🔖️ *Username: ${namae}*\n\n💌️ *User Info:️${status}*\n\n👑️*Admin: ${adm}*\n\n️*✨️*CO Admin: ${adm1}*`)
             }
            }
            break	
		
	    case 'add':
            if (!isGroupMsg) return client.reply(from, 'Maaf, perintah ini hanya dapat dipakai didalam grup!Nyaa~', id)
            if (!isGroupAdmins && !isOwnerBot && !isAsisten) return client.reply(from, 'Gagal, perintah ini hanya dapat digunakan oleh admin grup!Nyaa~', id)
            if (!isBotGroupAdmins) return client.reply(from, 'Rein belum jadi admin !Nyaa~', id)
	        if (args.length !== 1) return client.reply(from, `Untuk menggunakan ${prefix}add\nPenggunaan: ${prefix}add <nomor>\ncontoh: ${prefix}add 628xxx`, id)
                try {
                    await client.addParticipant(from,`${args[0]}@c.us`)
                } catch {
                    client.reply(from, 'Tidak dapat menambahkan target', id)
                }
            break
        case 'kick':
            if (!isGroupMsg) return client.reply(from, 'Maaf, perintah ini hanya dapat dipakai didalam grup!Nyaa~', id)
            if (!isGroupAdmins && !isOwnerBot && !isAsisten) return client.reply(from, 'Gagal, perintah ini hanya dapat digunakan oleh admin grup!Nyaa~', id)
            if (!isBotGroupAdmins) return client.reply(from, 'Rein belum jadi admin !Nyaa~', id)
            if (mentionedJidList.length === 0) return client.reply(from, 'Silahkan tag seseorang yang ingin Rein usir !Nyaa~', id)
            if (mentionedJidList[0] === botNumber) return await client.reply(from, 'Hidoii T_T', id)
            await client.sendTextWithMentions(from, `Request diterima, mengeluarkan:\n${mentionedJidList.map(x => `@${x.replace('@c.us', '')}`).join('\n')}`)
            for (let i = 0; i < mentionedJidList.length; i++) {
                if (groupAdmins.includes(mentionedJidList[i])) return await client.sendText(from, 'Jangan kick admin lain Baka!!')
                await client.removeParticipant(groupId, mentionedJidList[i])
            }
            break
        case 'promote':
            if (!isGroupMsg) return client.reply(from, 'Maaf, perintah ini hanya dapat dipakai didalam grup!Nyaa~', id)
            if (!isGroupAdmins && !isOwnerBot) return client.reply(from, 'Gagal, perintah ini hanya dapat digunakan oleh admin grup!Nyaa~', id)
            if (!isBotGroupAdmins) return client.reply(from, 'Rein belum jadi admin !Nyaa~', id)
            if (mentionedJidList.length !== 1) return client.reply(from, 'Maaf, hanya bisa mempromote 1 user', id)
            if (groupAdmins.includes(mentionedJidList[0])) return await client.reply(from, 'Maaf, user tersebut sudah menjadi admin.', id)
            if (mentionedJidList[0] === botNumber) return await client.reply(from, 'Maaf, format pesan salah.\nTidak dapat mempromote akun bot sendiri', id)
            await client.promoteParticipant(groupId, mentionedJidList[0])
            await client.sendTextWithMentions(from, `Request diterima, menambahkan @${mentionedJidList[0].replace('@c.us', '')} sebagai admin.`)
            break
        case 'demote':
            if (!isGroupMsg) return client.reply(from, 'Maaf, perintah ini hanya dapat dipakai didalam grup!Nyaa~', id)
            if (!isGroupAdmins) return client.reply(from, 'Gagal, perintah ini hanya dapat digunakan oleh admin grup!Nyaa~', id)
            if (!isBotGroupAdmins) return client.reply(from, 'Rein belum jadi admin !Nyaa~', id)
            if (mentionedJidList.length !== 1) return client.reply(from, 'Maaf !Nyaa~ hanya bisa mendemote 1 user', id)
            if (!groupAdmins.includes(mentionedJidList[0])) return await client.reply(from, 'User tersebut bukan admin,Baka!', id)
            if (mentionedJidList[0] === botNumber) return await client.reply(from, 'Hidoii T_T', id)
            await client.demoteParticipant(groupId, mentionedJidList[0])
            await client.sendTextWithMentions(from, `Request diterima, menghapus jabatan @${mentionedJidList[0].replace('@c.us', '')}.`)
            break
        case 'bye':
            if (!isGroupMsg) return client.reply(from, 'Maaf, perintah ini hanya dapat dipakai didalam grup!Nyaa~', id)
            if (!isGroupAdmins) return client.reply(from, 'Gagal, perintah ini hanya dapat digunakan oleh admin grup!Nyaa~', id)
            client.sendText(from, 'Rein pamit, Assalamualaikum~').then(() => client.leaveGroup(groupId))
            break
        case 'del':
		case 'delete':
            if (!isGroupAdmins && !isOwnerBot && !isAsisten) return client.reply(from, 'Gagal, perintah ini hanya dapat digunakan oleh admin grup!Nyaa~', id)
            if (!quotedMsg) return client.reply(from, `Maaf, format pesan salah silahkan.\nReply pesan bot dengan caption ${prefix}del`, id)
            if (!quotedMsgObj.fromMe) return client.reply(from, `Maaf, format pesan salah silahkan.\nReply pesan bot dengan caption ${prefix}del`, id)
            client.deleteMessage(quotedMsgObj.chatId, quotedMsgObj.id, false)
            break
        case 'here':
        case 'everyone':
            if (!isGroupMsg) return client.reply(from, 'Maaf, perintah ini hanya dapat dipakai didalam grup!Nyaa~', id)
            if (!isGroupAdmins && !isOwnerBot) return client.reply(from, 'Gagal, perintah ini hanya dapat digunakan oleh admin grup!Nyaa~', id)
            const groupMem = await client.getGroupMembers(groupId)
            let hehex = `╔══✪〘 ${body.slice(9)} - ${pushname} 〙✪══\n`
            for (let i = 0; i < groupMem.length; i++) {
                hehex += '╠➥'
                hehex += ` @${groupMem[i].id.replace(/@c.us/g, '')}\n`
            }
            hehex += '╚═〘 *Mention All* 〙'
            await client.sendTextWithMentions(from, hehex)
            break
        //Owner Group
        case 'kickall': //mengeluarkan semua member
        if (!isGroupMsg) return client.reply(from, 'Maaf, perintah ini hanya dapat dipakai didalam grup!Nyaa~', id)
        let isOwner = chat.groupMetadata.owner == pengirim
        if (!isOwner && !isOwnerBot) return client.reply(from, 'Maaf, perintah ini hanya dapat dipakai oleh owner grup!', id)
        if (!isBotGroupAdmins) return client.reply(from, 'Rein belum jadi admin !Nyaa~', id)
            const allMem = await client.getGroupMembers(groupId)
            for (let i = 0; i < allMem.length; i++) {
                if (groupAdmins.includes(allMem[i].id)) {

                } else {
                    await client.removeParticipant(groupId, allMem[i].id)
                }
            }
            client.reply(from, 'Success kick all member', id)
        break

        //Owner Bot
		case 'nsfw':
            if (!isGroupMsg) return client.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (!isGroupAdmins && !isOwnerBot && !isAsisten) return client.reply(from, 'Perintah ini hanya bisa di gunakan oleh Admin group!', id)
            if (args.length == 0) return client.reply(from, 'Pilih enable atau disable!', id)
            if (args[0] == 'enable') {
                nsfw_.push(chat.id)
                fs.writeFileSync('./lib/NSFW.json', JSON.stringify(nsfw_))
                client.reply(from, 'NSWF Command berhasil di aktifkan !Nyaa~ kirim perintah *#nsfwMenu* untuk mengetahui menu', id)
           } else if (args[0] == 'disable') {
				let nsfww = nsfw_.indexOf(chat.id)
                nsfw_.splice(nsfww,1)
                fs.writeFileSync('./lib/NSFW.json', JSON.stringify(nsfw_))
                client.reply(from, 'NSWF Command berhasil di nonktifkan !Nyaa~')
            } else {
                client.reply(from, 'Pilih enable atau disable !Nyaa~', id)
            }
            break
        case 'ban':
            if (!isOwnerBot) return client.reply(from, 'Perintah ini hanya untuk Owner bot!', id)
            if (args.length == 0) return client.reply(from, `Untuk banned seseorang agar tidak bisa menggunakan commands\n\nCaranya ketik: \n${prefix}ban add 628xx --untuk mengaktifkan\n${prefix}ban del 628xx --untuk nonaktifkan\n\ncara cepat ban banyak digrup ketik:\n${prefix}ban @tag @tag @tag`, id)
            if (args[0] == 'add') {
                banned.push(args[1]+'@c.us')
                fs.writeFileSync('./settings/banned.json', JSON.stringify(banned))
                client.reply(from, 'Target berhasil aku blacklist, pa!')
            } else
            if (args[0] == 'del') {
                let xnxx = banned.indexOf(args[1]+'@c.us')
                banned.splice(xnxx,1)
                fs.writeFileSync('./settings/banned.json', JSON.stringify(banned))
                client.reply(from, 'Target berhasil aku unban, pa!')
            } else {
             for (let i = 0; i < mentionedJidList.length; i++) {
                banned.push(mentionedJidList[i])
                fs.writeFileSync('./settings/banned.json', JSON.stringify(banned))
                client.reply(from, 'Target berhasil aku blacklist, pa!', id)
                }
            }
            break	
		case 'antigc':
             if (!isPremium)return client.reply(from, `Maaf, fitur ini masih tester !Nyaa~`, id)
			if (!isGroupMsg) return client.reply(from, 'Perintah ini hanya untuk grup !Nyaa~', id)
			if (!isGroupAdmins && !isOwnerBot) return client.reply(from, 'Perintah ini hanya untuk admin !Nyaa~', id)           
			if (args.length === 0) return client.reply(from, 'Pilih on atau off !Nyaa~ contoh #antigc on', id)
            if (args[0] === 'on') {
                antigc.push(chat.id)
                fs.writeFileSync('./settings/antigc.json', JSON.stringify(antigc))
                client.reply(from, 'Anti gc berhasil diaktifkan !Nyaa~', id)
           } else if (args[0] === 'off') {
				let inxxs = antigc.indexOf(chat.id)
                antigc.splice(inxxs,1)
                fs.writeFileSync('./settings/antigc.json', JSON.stringify(antigc))
                client.reply(from, 'Anti gc berhasil dinonaktifkan !Nyaa~', id)
            } else {
                client.reply(from, 'Anti gc berhasil dinonaktifkan !Nyaa~', id)
            }
            break		
	case 'premium':
			if (!isGroupMsg) return client.reply(from, 'Maaf, perintah ini hanya dapat dipakai didalam grup!', id)
            if (!isOwnerBot) return client.reply(from, 'Silahkan hubungi papa untuk mengaktifkan fitur premium !Nyaa~', id)
			if (args.length !== 1) return client.reply(from, `Mengaktifkan premium ketik #premium -add`, id)
			if (args[0] == 'add') {
				premium.push(chatId)
				fs.writeFileSync('./settings/premium.json', JSON.stringify(premium))
                client.reply(from, 'Fitur premiuim diaktifkan pada grup ini !Nyaa~', id)
			} else if (args[0] == 'del') {
				let inxxss = premium.indexOf(chatId)
				premium.splice(inxxss, 1)
				fs.writeFileSync('./settings/premium.json', JSON.stringify(premium))
				client.reply(from, 'Fitur premiuim dinonaktifkan pada grup ini !Nyaa~', id)
			} else {
				client.reply(from, `Mengaktifkan premium ketik #premiuim -add`, id)
			}
			break			
			     case 'wcs':
			if (!isOwnerBot) return client.reply(from, 'Perintah ini hanya untuk papa!', id)
            if (!isGroupMsg) return client.reply(from, 'Perintah ini hanya bisa di gunakan dalam group !Nyaa~', id)
            if (!isGroupAdmins) return client.reply(from, 'Perintah ini hanya bisa di gunakan oleh Admin group!', id)
            if (args.length === 0) return client.reply(from, 'Pilih enable atau disable!', id)
            if (args[0] === 'enable') {
                welkoms.push(chat.id)
                fs.writeFileSync('./lib/welcomes.json', JSON.stringify(welkoms))
                client.reply(from, 'Fitur welcome berhasil di aktifkan di group ini!', id)
            } else if (args[0] === 'disable') {
                welkoms.splice(chat.id, 1)
                fs.writeFileSync('./lib/welcomes.json', JSON.stringify(welkoms))
                client.reply(from, 'Fitur welcome berhasil di nonaktifkan di group ini!', id)
            } else {
                client.reply(from, 'Pilih enable atau disable !Nyaa~', id)
            }
            break
			
		  case 'groupinfo' :
           if (!isGroupMsg) return client.reply(from, 'Perintah ini hanya bisa di gunakan dalam group !Nyaa~', id)
            var totalMem = chat.groupMetadata.participants.length
            var desc = chat.groupMetadata.desc
            var groupname = name
            var welgrp = wel.includes(chat.id)
            var ngrp = nsfwgrp.includes(chat.id)
			var bdwrd = bdwrdgrp.includes(chat.id)
            var grouppic = await client.getProfilePicFromServer(chat.id)
            if (grouppic == undefined) {
                 var pfp = errorurl
            } else {
                 var pfp = grouppic 
            }
            await client.sendFileFromUrl(from, pfp, 'group.png', `*${groupname}* 

🌐️ *Members: ${totalMem}*

💌️ *Welcome: ${welgrp}*

📃 *BADWORD: ${bdwrd}*

⚜️ *NSFW: ${ngrp}*

📃️ *Group Description* 

${desc}`)
        break	

		  case 'info':
            client.sendtext(from, 'Base Bot [ArugaZ]', id)
        case 'bc':
            if (!isOwner) return client.reply(from, 'Perintah ini hanya untuk papa!', id)
            let msg = body.slice(4)
            const chatz = await client.getAllChatIds()
            for (let ids of chatz) {
                var cvk = await client.getChatById(ids)
                if (!cvk.isReadOnly) await client.sendText(ids, `〘 *REIN BOT Broadcast* 〙\n\n${msg}`)
            }
            client.reply(from, 'Broadcast Success!', id)
            break
        case 'leaveall': //mengeluarkan bot dari semua group serta menghapus chatnya
            if (!isOwner) return client.reply(from, 'Perintah ini hanya untuk Owner bot', id)
            const allChatz = await client.getAllChatIds()
            const allGroupz = await client.getAllGroups()
            for (let gclist of allGroupz) {
                await client.sendText(gclist.contact.id, `Maaf bot sedang pembersihan, total chat aktif : ${allChatz.length}`)
                await client.leaveGroup(gclist.contact.id)
                await client.deleteChat(gclist.contact.id)
            }
            client.reply(from, 'Success leave all group!', id)
            break
        case 'clearall': //menghapus seluruh pesan diakun bot
            if (!isOwnerBot) return client.reply(from, 'Perintah ini hanya untuk papa!', id)
            const allChatx = await client.getAllChats()
            for (let dchat of allChatx) {
                await client.deleteChat(dchat.id)
            }
            client.reply(from, 'Sudah pa!', id)
            break
	    default: 
			await client.reply(from, `Ketik #help,terus dibaca dulu commandnya, Baka!`, id)
            console.log(color('[UNLISTED]', 'red'), color(time, 'yellow'), 'Unregistered Command from', color(pushname))
            break 
            }
    } catch (err) {
        console.log(color('[EROR]', 'red'), err)
    }
}