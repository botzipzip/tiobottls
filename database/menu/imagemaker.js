const imagemaker = (prefix, botName, ownerName) => {
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
┷┯ *〈 IMAGE MAKER 〉*
   ╽
   ┠≽ *${prefix}bpink* <text>
   ┃ *Desc* : Criar imagem BlackPink
   ┠──────────────╼
   ┠≽ *${prefix}snowwrite* <text|text>
   ┃ *Desc* : Criar imagem Snowwrite
   ┠──────────────╼
   ┠≽ *${prefix}3dtext* <text>
   ┃ *Desc* : Criar imagem de texto 3D
   ┠──────────────╼
   ┠≽ *${prefix}firetext* <text>
   ┃ *Desc* : Make Fire Text Image
   ┠──────────────╼
   ┠≽ *${prefix}glitch* <text|text>
   ┃ *Desc* : Make Glitch Image
   ┠──────────────╼
   ┠≽ *${prefix}shadow* <text>
   ┃ *Desc* : Make Shadow Image
   ┠──────────────╼
   ┠≽ *${prefix}burnpaper* <text>
   ┃ *Desc* : Imagem Make Burn Papper
   ┠──────────────╼
   ┠≽ *${prefix}coffee* <text>
   ┃ *Desc* : Imagem Make Coffee
   ┠──────────────╼
   ┠≽ *${prefix}lovepaper* <text>
   ┃ *Desc* : Imagem Make Love Papper
   ┠──────────────╼
   ┠≽ *${prefix}woodblock* <text>
   ┃ *Desc* : Imagem de Bloco de Madeira
   ┠──────────────╼
   ┠≽ *${prefix}qowheart* <text>
   ┃ *Desc* : Faça citações na imagem dos corações de madeira
   ┠──────────────╼
   ┠≽ *${prefix}mutgrass* <text>
   ┃ *Desc* : Make Message Under The Grass Image
   ┠──────────────╼
   ┠≽ *${prefix}undergocean* <text>
   ┃ *Desc* : Make Message Underground Ocean Image
   ┠──────────────╼
   ┠≽ *${prefix}woodenboards* <text>
   ┃ *Desc* : Imagem de placas de madeira 
   ┠──────────────╼
   ┠≽ *${prefix}wolfmetal* <text>
   ┃ *Desc* : Imagem Make Wolf Metal
   ┠──────────────╼
   ┠≽ *${prefix}metalictglow* <text>
   ┃ *Desc* : Imagem de brilho de texto metálico
   ┠──────────────╼
   ┠≽ *${prefix}8bit* <text|text>
   ┃ *Desc* : Imagem de 8 bits
   ┠──────────────╼
   ┠≽ *${prefix}herrypotter* <text>
   ┃ *Desc* : Make Herry Potter Image
   ╿ *${ownerName}*,
   ╰╼≽ *Developer © ${botName}`
}
exports.imagemaker = imagemaker

