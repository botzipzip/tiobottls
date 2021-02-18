const meme = (prefix, botName, ownerName) => {
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
┃ *Desc* : Mostrar usuário bloqueado
┠──────────────╼
┠≽ *${prefix}chatlist* (error)
┃ *Desc* : Mostrar todos os usuários do chat
┠──────────────╼
┠≽ *${prefix}ping*
┃ *Desc* : Mostrar velocidade do bot de conexão
┠──────────────╼
┠≽ *${prefix}bugreport* <text>
┃ *Desc* : 
╿
┷┯ *〈 MEME 〉*
   ╽
   ┠≽ *${prefix}meme*
   ┃ *Desc* : Enviar meme aleatório [eng]
   ┠≽ *${prefix}memeindo*
   ┃ *Desc* : Enviar Meme aleatório [indo]
   ╿ *${ownerName}*,
   ╰╼≽ *Developer © ${botName}`
}
exports.meme = meme

