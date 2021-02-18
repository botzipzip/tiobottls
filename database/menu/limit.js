const limit = (prefix, botName, ownerName) => {
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
┷┯ *〈 LIMIT 〉*
   ╽
   ┠≽ *${prefix}limit*
   ┃ *Desc* : Verifique seu limite
   ┠──────────────╼
   ┠≽ *${prefix}bal*
   ┃ Check Verifique seu dinheiro
   ┠──────────────╼
   ┠≽ *${prefix}buylimit* <count>
   ┃ *Desc* : Limite de compra
   ╿ *${ownerName}*,
   ╰╼≽ *Developer © ${botName}
--------------------------------
Nota: Você pode comprar limites recolhendo dinheiro primeiro. Verifique seu dinheiro digitando o comando*${prefix}bal* , o preço de 1 limite = 1000 dinheiro.
Nota2: Você pode coletar dinheiro conversando com seus amigos do grupo ou subindo de nível`
}
exports.limit = limit

