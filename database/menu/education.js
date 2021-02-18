const education = (prefix, botName, ownerName) => {
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
┃ *Desc* : Reportar bug ao proprietário do bot
╿
┷┯ *〈 EDUCAÇÃO 〉*
   ╽
   ┠≽ *${prefix}wiki* <query>
   ┃ *Desc* : Pesquisar de acordo a Wikipedia [indo]
   ┠──────────────╼
   ┠≽ *${prefix}wikien* <query>
   ┃ *Desc* : Pesquisar de acordo a Wikipedia [inglês]
   ┠──────────────╼
   ┠≽ *${prefix}nulis* <text>
   ┃ *Desc* : Escreva um txt no livro
   ┠──────────────╼
   ┠≽ *${prefix}quotes*
   ┃ *Desc* : enviar citações aleatórias 
   ┠──────────────╼
   ┠≽ *${prefix}quotes2*
   ┃ *Desc* : enviar citações aleatórias 2
   ┠──────────────╼
   ┠≽ *${prefix}tafsirmimpi* <dream>
   ┃ *Desc* : Enviar uma interpretação do sonho
   ┠──────────────╼
   ┠≽ *${prefix}translate* <language_code>|<text>
   ┃ *Desc* : Traduzir uma palavra
   ┠──────────────╼
   ┠≽ *${prefix}artinama* <name>
   ┃ *Desc* : Interpretar nomes	
   ╿ *${ownerName}*,
   ╰╼≽ *Developer © ${botName}`
}
exports.education = education

