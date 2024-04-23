//import db from '../lib/database.js'

let handler = async (m, { conn, text, isROwner, isOwner }) => {
  if (text) {
    global.db.data.chats[m.chat].sWelcome = text
    m.reply('*بوت سفروت🙂🔥 !*')
  } else throw `*نورت يا حب💕🔥 !*\n*عــشان تــعـمل مـنــشن أكــتب @user, عــشان تـحط أســم الـجروب أكـتب @group, عــشان تـحط وصــف أكــتب @desc*`
}
handler.help = ['setwelcome <text>']
handler.tags = ['group']
handler.command = ['الترحيب'] 
handler.admin = true
handler.owner = false

export default handler
