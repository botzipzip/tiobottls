const adult = (prefix, botName, ownerName) => {
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
┃ *Desc* : Mostrar usuários bloqueado 
┠──────────────╼
┠≽ *${prefix}chatlist* (error)
┃ *Desc* : Mostrar todos os usuários do chat
┠──────────────╼
┠≽ *${prefix}ping*
┃ *Desc* : Mostrar velocidade do bot de conexão
┠──────────────╼	
┠≽ *${prefix}bugreport* <text>
┃ *Desc* : Reportar o bug ao proprietário do bot
╿
┷┯ *〈 18+ 〉*
   ╽
   ┠≽ *${prefix}randomhentai*
   ┃ *Desc* : envio de img de hentai aleatórias kkkk
   ┠──────────────╼
   ┠≽ *${prefix}nsfwtrap*
   ┃ *Desc* : envio de img RAMDOM NSFW Trap (nsfw necessário)
   ┠──────────────╼
   ┠≽ *${prefix}nsfwneko*
   ┃ *Desc* : envio de img NSFW aleatória (nsfw necessário)
   ╿ *${ownerName}*,
   ╰╼≽ *Developer © ${botName}`
}
exports.adult = adult

