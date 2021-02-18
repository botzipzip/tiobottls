const wibu = (prefix, botName, ownerName) => {
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
┷┯ *〈 WEEBOO 〉*
   ╽
   ┠≽ *${prefix}neonime*
   ┃ *Desc* : Search Neonime
   ┠──────────────╼
   ┠≽ *${prefix}pokemon*
   ┃ *Desc* : Random Pokemon Image
   ┠──────────────╼
   ┠≽ *${prefix}loli*
   ┃ *Desc* : Random Loli Image
   ┠──────────────╼
   ┠≽ *${prefix}waifu*
   ┃ *Desc* : Random Waifu Image
   ┠──────────────╼
   ┠≽ *${prefix}randomanime*
   ┃ *Desc* : Random Anime Image
   ┠──────────────╼
   ┠≽ *${prefix}husbu*
   ┃ *Desc* : Random Husbu Image
   ┠──────────────╼
   ┠≽ *${prefix}husbu2*
   ┃ *Desc* : Random Husbu2 Image
   ┠──────────────╼
   ┠≽ *${prefix}wait*
   ┃ *Desc* : Send Anime Name & Short Scene
   ┠──────────────╼
   ┠≽ *${prefix}nekonime*
   ┃ *Desc* : Random Nekonime Image
   ╿ *${ownerName}*,
   ╰╼≽ *Developer © ${botName}`
}
exports.wibu = wibu

