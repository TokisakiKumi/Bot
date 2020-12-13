/* eslint-disable no-unused-vars */
const { create, Client } = require('@open-wa/wa-automate')
const { color, messageLog } = require('./utils')
const { ind, eng } = require('./message/text/lang/')
const options = require('./utils/options')
const welcomes = require('./lib/welcomes')
const figlet = require('figlet')
const HandleMsg = require('./HandleMsg')
const msgHandlerrrr = require('./handler/message/index3')
const msgHandlerrrr1 = require('./handler/message/apakah')
const msgHandlerr = require('./handler/message/index')
const msgHandlerrrr12 = require('./handler/message/simi')
const msgHandler5 = require('./handler/message/index5')


const start = async (client = new Client()) => {
    console.log(color(figlet.textSync('Rein-Bot', 'Larry 3D'), 'cyan'))
    console.log('[Rein]', color('Rein is now online!', 'lime'))

    // Force it to keep the current session
    client.onStateChanged((state) => {
        console.log('[REIN STATE]', state)
        if (state === 'UNPAIRED') client.forceRefocus()
        if (state === 'CONFLICT') client.forceRefocus()
        if (state === 'UNLAUNCHED') client.forceRefocus()
    })

    // Set all received message to seen
    client.onAck((x) => {
        const { to } = x
        if (x !== 3) client.sendSeen(to)
    })

		client.onGlobalParicipantsChanged((async (heuh) => {
			if (heuh.action === 'remove' || heuh.action === 'leave') //await client.sendTextWithMentions(heuh.chat, `Sayonara kak @${heuh.who.replace('@c.us', '')}, Kami akan merindukanmu T_T`)
            await welcomes(client, heuh)
            //left(client, heuh)
            }))

    // Listening added to group
    client.onAddedToGroup(((chat) => {
            let totalMem = chat.groupMetadata.participants.length
            if (totalMem < 13) { 
            	client.sendText(chat.id, `Maaf !Nyaa member kurang dari 15`).then(() => client.leaveGroup(chat.id)).then(() => client.deleteChat(chat.id))
            } else {
                client.sendText(chat.groupMetadata.id, `Halo warga grup *${chat.contact.name}* sangkyuu sudah menginvite Rein !Nyaa~, untuk melihat menu silahkan ketik *#help*`)
            }
        }))


    // Listening on message
    client.onMessage((message) => {
        client.getAmountOfLoadedMessages()
            .then((msg) => {
                if (msg >= 3000) {
                    console.log('[REIN]', color(`Loaded message reach ${msg}, cuting message cache...`, 'yellow'))
                    client.cutMsgCache()
                        .then(() => console.log('Done!'))
                }
            })
       HandleMsg(client, message)    
		msgHandlerrrr(client, message)
		msgHandlerrrr1(client, message)
		msgHandlerr(client, message)
		msgHandlerrrr12(client, message)
		msgHandler5(client, message)
    })

    // Block person who called bot
    client.onIncomingCall(async (callData) => {
        await client.sendText(callData.peerJid, ind.blocked())
            .then(() => client.contactBlock(callData.peerJid))
    })
}

// Creating session
create(options(true, start))
    .then((client) => start(client))
    .catch((err) => new Error(err))
