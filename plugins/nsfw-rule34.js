import fetch from 'node-fetch'

let handler = async (m, { conn }) => {
	let ne = await (await fetch('https://raw.githubusercontent.com/Jixxys/api/main/rule34/isi.txt')).text()
    let nek = ne.split('\n')
    let neko = pickRandom(nek)
	conn.sendButton(m.chat, 'Jangan Comly Yah 📸', wm, neko, [['Next','.rule34']],m)
}
handler.command = /^(rule34)$/i
handler.tags = ['nsfw']
handler.help = ['rule34']
handler.limit = true
export default handler
function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}