const music = (prefix, botName, ownerName) => {
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
┷┯ *〈 MUSIC 〉*
   ╽
   ┠≽ *${prefix}play* <music_name>
   ┃ *Desc* : Search Chord Music Lyrics
   ┠──────────────╼
   ┠≽ *${prefix}joox* <music_name>
   ┃ *Desc* : Play Music Joox
   ┠──────────────╼
   ┠≽ *${prefix}lirik* <music_name>
   ┃ *Desc* : Pesquisa Letras de Músicas
   ┠──────────────╼
   ┠≽ *${prefix}chord* <music_name>
   ┃ *Desc* : Pesquisar letras de músicas de acordes
   ╿ *${ownerName}*,
   ╰╼≽ *Developer © ${botName}`
}
exports.music = music

