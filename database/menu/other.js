const other = (prefix, botName, ownerName) => {
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
┷┯ *〈 OTHER 〉*
   ╽
   ┠≽ *${prefix}send*
   ┠≽ *${prefix}wame*
   ┠≽ *${prefix}virtex*
   ┠≽ *${prefix}qrcode* <text>
   ┠≽ *${prefix}timer*
   ┠≽ *${prefix}fml*
   ┠≽ *${prefix}fml2*
   ╿ *${ownerName}*,
   ╰╼≽ *Developer © ${botName}`
}
exports.other = other

