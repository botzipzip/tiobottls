const information = (prefix, botName, ownerName) => {
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
┷┯ *〈 INFORMATION 〉*
   ╽
   ┠≽ *${prefix}bahasa*
   ┃ *Desc* : Enviar código de idioma
   ┠──────────────╼
   ┠≽ *${prefix}kodenegara*
   ┃ *Desc* : Enviar código do país
   ┠──────────────╼
   ┠≽ *${prefix}kbbi* <question>
   ┃ *Desc* : Perguntando ao KBBI
   ┠──────────────╼
   ┠≽ *${prefix}fakta*
   ┃ *Desc* : Enviar um fato aleatório
   ┠──────────────╼
   ┠≽ *${prefix}infocuaca* <area>
   ┃ *Desc* : Enviar informações meteorológicas
   ┠──────────────╼
   ┠≽ *${prefix}infogempa*
   ┃ *Desc* : Enviando informações sobre terremotos
   ┠──────────────╼
   ┠≽ *${prefix}covidcountry* <country>
   ┃ *Desc* : Enviando informações para Covid-19
   ╿ *${ownerName}*,
   ╰╼≽ *Developer © ${botName}`
}
exports.information = information

