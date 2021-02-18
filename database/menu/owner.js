const owner = (prefix, botName, ownerName) => {
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
┷┯ *〈 DONO 〉*
   ╽
   ┠≽ *${prefix}setprefix* <text/optional>
   ┃ *Desc* : Substituir Prefixo
   ┠──────────────╼
   ┠≽ *${prefix}block* <@tag>
   ┃ *Desc* : Clear All Chat
   ┠──────────────╼
   ┠≽ *${prefix}unblock* <@tag>
   ┃ *Desc* : Desbloquear usuário
   ┠──────────────╼
   ┠≽ *${prefix}bc* <text>
   ┃ *Desc* : Transmitir para todos os contatos e grupos
   ┠──────────────╼
   ┠≽ *${prefix}clone* <@tag>
   ┃ *Desc* : Clonar perfil de outros membros
   ┠──────────────╼
   ┠≽ *${prefix}clearall
   ┃ *Desc* : Limpar tudo chat
   ╿ *${ownerName}*,
   ╰╼≽ *Developer © ${botName}`
}
exports.owner = owner

