const fs = require('fs-extra')

module.exports = welcome = async (client, event) => {
    //console.log(event.action)
    const welkom = JSON.parse(fs.readFileSync('./lib/welcomes.json'))
    const isWelkom = welkom.includes(event.chat)
    try {
        if (event.action == 'add' && isWelkom) {
            const gChat = await client.getChatById(event.chat)
            const pChat = await client.getContact(event.who)
            const { contact, groupMetadata, name } = gChat
            const pepe = await client.getProfilePicFromServer(event.who)
            const capt = `Halo kak, selamat datang di *${name}* intro dong kak  >.<`
            if (pepe == '' || pepe == undefined) {
                await client.sendFileFromUrl(event.chat, 'https://cdn.discordapp.com/attachments/702481939029950484/785028875624906772/IMG_20201206_132342.jpg', 'profile.jpg', capt)
            } else {
                await client.sendFileFromUrl(event.chat, 'https://cdn.discordapp.com/attachments/702481939029950484/785028875624906772/IMG_20201206_132342.jpg', capt)
            }

        }
    } catch (err) {
        console.log(err)
    }
}
