const search = (prefix, botName, ownerName) => {
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
┃ *Desc* : Reportar bug ao proprietário do bot
╿
┷┯ *〈PESQUISA〉*
   ╽
   ┠≽ *${prefix}wait
   ┃ *Desc* : Enviar nome Anime e cena curta
   ┠──────────────╼
   ┠≽ *${prefix}ytsearch <query>
   ┃ *Desc* : Pesquisar vídeos no YouTube
   ┠──────────────╼
   ┠≽ *${prefix}trendtwit
   ┃ *Desc* : Vídeo de tendência de pesquisa do Twitter
   ╿ *${ownerName}*,
   ╰╼≽ *Developer © ${botName}`
}
exports.search = search

