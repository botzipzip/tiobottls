const kerang = (prefix, botName, ownerName) => {
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
┷┯ *〈 KERANG AJAIB 〉*
   ╽
   ┠≽ *${prefix}apakah* <optional>
   ┃ *Desc* : Perguntar é
   ┠──────────────╼
   ┠≽ *${prefix}bisakah* <optional>
   ┃ *Desc* : Ask Can
   ┠──────────────╼
   ┠≽ *${prefix}kapankah* <optional>
   ┃ *Desc* : Pergunte quando
   ┠──────────────╼	
   ┠≽ *${prefix}watak*
   ┃ *Desc* : Transmitindo caracteres aleatoriamente
   ┠──────────────╼
   ┠≽ *${prefix}hobby*
   ┃ *Desc* : Envio aleatório de hobbies
   ┠──────────────╼
   ┠≽ *${prefix}gantengcek*
   ┃ *Desc* : Quão bonito
   ┠──────────────╼
   ┠≽ *${prefix}cantikcek*
   ┃ *Desc* : Que lindo
   ╿ *${ownerName}*,
   ╰╼≽ *Developer © ${botName}`
}
exports.kerang = kerang

