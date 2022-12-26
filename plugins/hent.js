import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, command }) => {
	if (!db.data.chats[m.chat].nsfw && m.isGroup) throw global.nsfw
   let heum = await fetch(`https://yog-apikey.herokuapp.com/api/bokep?apikey=YogGanz`)
   if (!heum) throw json
    let json = await heum.buffer()
   conn.sendFile(m.chat, json, 'Kont.mp4', `${wm}`, 'Next ➠', `${usedPrefix + command}`, m)
}
handler.help = ['hentai']
handler.tags = ['hentai']

handler.command = /^(hent)$/i
handler.premium = true
handler.limit = false

export default handler