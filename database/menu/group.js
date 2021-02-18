const group = (prefix, botName, ownerName) => {
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
┷┯ *〈 GROPO 〉*
   ╽
   ┠≽ *${prefix}opengc*
   ┃ *Desc* : Abrir Grupo
   ┠──────────────╼
   ┠≽ *${prefix}closegc*
   ┃ *Desc* : Fechar Grupo 
   ┠──────────────╼
   ┠≽ *${prefix}promote* <@tag>
   ┃ *Desc* : Promova as pessoas a um grupo de administradores
   ┠──────────────╼
   ┠≽ *${prefix}demote* <@tag>
   ┃ *Desc* : rebaixar pessoas a membros do grupo
   ┠──────────────╼
   ┠≽ *${prefix}tagall*
   ┃ *Desc* : Mencionar todos os membros
   ┠──────────────╼
   ┠≽ *${prefix}tagall2*
   ┃ *Desc* : Mencionar todos os membros
   ┠──────────────╼
   ┠≽ *${prefix}tagall3*
   ┃ *Desc* : Mencionar todos os membros
   ┠──────────────╼
   ┠≽ *${prefix}tagall4*
   ┃ *Desc* : Mencionar todos os membros
   ┠──────────────╼
   ┠≽ *${prefix}tagall5*
   ┃ *Desc* : Mencionar todos os membros
   ┠──────────────╼
   ┠≽ *${prefix}add* <12542123926>
   ┃ *Desc* : Adicionar membros
   ┠──────────────╼
   ┠≽ *${prefix}kick* <@tag>
   ┃ *Desc* : banir membro 
   ┠──────────────╼
   ┠≽ *${prefix}listadmins*
   ┃ *Desc* : Mostrar Administradores de Grupo de Lista
   ┠──────────────╼
   ┠≽ *${prefix}linkgroup*
   ┃ *Desc* : Mostrar Link do Grupo
   ┠──────────────╼
   ┠≽ *${prefix}leave*
   ┃ *Desc* : Diga ao bot para sair do grupo
   ┠──────────────╼
   ┠≽ *${prefix}welcome* <1/0>
   ┃ *Desc* : Ativando / desativando o recurso de boas-vindas
   ┠──────────────╼
   ┠≽ *${prefix}nsfw* <1/0>
   ┃ *Desc* : Ativando / Desativando o Recurso NSFW
   ┠──────────────╼
   ┠≽ *${prefix}delete*
   ┃ *Desc* : Excluir mensagem do bot
   ┠──────────────╼
   ┠≽ *${prefix}simih* <1/0>
   ┃ *Desc* : Excluir mensagem do bot
   ┠──────────────╼
   ┠≽ *${prefix}tagme*
   ┃ *Desc* : menciona você
   ┠──────────────╼
   ┠≽ *${prefix}ownergroup*
   ┃ *Desc* : Mostra quem é o proprietário do grupo
   ┠──────────────╼
   ┠≽ *${prefix}antilinkgroup* <1/0>
   ┃ *Desc* : Ativando / Desativando o Recurso Anti Link
   ╿ *${ownerName}*,
   ╰╼≽ *Developer © ${botName}`
}
exports.group = group

