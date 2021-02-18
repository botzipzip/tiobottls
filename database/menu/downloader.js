const downloader = (prefix, botName, ownerName) => {
	return `
┏ *〈 ${botName} 〉*
╿
┷┯ *〈 BOT INFO 〉*
   ╽
   ┠≽ *Prefix* : 「  ${prefix}  」
   ┠≽ *Creator* : ${ownerName}
   ┠≽ *Version* : 0.0.5
   ╿
┯┷ *〈 ABOUT 〉*
╽
┠≽ *${prefix}info* (error)
┃ *Desc* : Mostrar detalhes do bot
┠──────────────╼
┠≽ *${prefix}blocklist*
┃ *Desc* : Mostrar usuários bloqueados
┠──────────────╼
┠≽ *${prefix}chatlist* (error)
┃ *Desc* : Mostrar todos os usuários do chat
┠──────────────╼
┠≽ *${prefix}ping*
┃ *Desc* : Mostrar a velocidade do bot na conexão
┠──────────────╼
┠≽ *${prefix}bugreport* <text>
┃ *Desc* : Reportar bug ao proprietário do bot
╿
┷┯ *〈 DOWNLOADER 〉*
   ╽
   ┠≽ *${prefix}pinterest* <query>
   ┃ *Desc* : Baixar imagens do Pinterest
   ┠──────────────╼
   ┠≽ *${prefix}ytmp3* <linkyt>
   ┃ *Desc* : baixar vridro do yt para mp3
   ┠──────────────╼
   ┠≽ *${prefix}ytmp4* <linkyt>
   ┃ *Desc* : Baixar vídeo do yt
   ┠──────────────╼
   ┠≽ *${prefix}tiktok* <linktiktok>
   ┃ *Desc* : Baixar vrido do TikoTeko kkkkkk
   ╿ *${ownerName}*,
   ╰╼≽ *Developer © ${botName}`
}
exports.downloader = downloader

