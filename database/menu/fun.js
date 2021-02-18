const fun = (prefix, botName, ownerName) => {
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
┃ *Desc* : Mostrar todos usuários do chat
┠──────────────╼
┠≽ *${prefix}ping*
┃ *Desc* : Mostrar velocidade do bot de conexão
┠──────────────╼
┠≽ *${prefix}bugreport* <text>
┃ *Desc* : Reportar bug ao proprietário do bot

╿
┷┯ *〈 FUN 〉*
   ╽
   ┠≽ *${prefix}alay* <text>
   ┃ *Desc* : Mudando as palavras para Alay
   ┠──────────────╼
   ┠≽ *${prefix}bucin*
   ┃ *Desc* : Enviar um escravo aleatório do amor
   ┠──────────────╼
   ┠≽ *${prefix}trust*
   ┃ *Desc* : Enviar uma verdade aleatória
   ┠──────────────╼
   ┠≽ *${prefix}dare*
   ┃ *Desc* : Enviar um desafio aleatório
   ┠──────────────╼
   ┠≽ *${prefix}simi* <text>
   ┃ *Desc* : Fale com Simi
   ┠──────────────╼
   ┠≽ *${prefix}say* <text>
   ┃ *Desc* :Dizendo:v
   ╿ *${ownerName}*,
   ╰╼≽ *Developer © ${botName}`
}
exports.fun = fun

