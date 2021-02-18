const logomaker = (prefix, botName, ownerName) => {
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
┷┯ *〈 LOGO MAKER 〉*
   ╽
   ┠≽ *${prefix}ninjalogo* <text|text>
   ┃ *Desc* : logotipo da marca Ninja
   ┠──────────────╼
   ┠≽ *${prefix}logowolf* <text|text>
   ┃ *Desc* : Make Wolf Logo
   ┠──────────────╼
   ┠≽ *${prefix}logowolf2* <text|text>
   ┃ *Desc* : Make Wolf Logo2
   ┠──────────────╼
   ┠≽ *${prefix}phlogo* <text|text>
   ┃ *Desc* : logotipo do PornHub
   ┠──────────────╼
   ┠≽ *${prefix}neonlogo* <text>
   ┃ *Desc* : Make Neon Logo
   ┠──────────────╼
   ┠≽ *${prefix}neonlogo2* <text>
   ┃ *Desc* : Make Neon Logo2
   ┠──────────────╼
   ┠≽ *${prefix}lionlogo* <text|text>
   ┃ *Desc* : Logotipo da Make Lion
   ┠──────────────╼
   ┠≽ *${prefix}jokerlogo* <text>
   ┃ *Desc* : logotipo do Joker
   ┠──────────────╼
   ┠≽ *${prefix}pubglogo* <text|text>
   ┃ *Desc* : Faça o logotipo PUBG
   ╿ *${ownerName}*,
   ╰╼≽ *Developer © ${botName}`
}
exports.logomaker = logomaker

