exports.wait = () => {
        return `⌛ to fazendo krlhhhhh ⌛`
}

exports.timeEnd = () => {
        return `Tempo acabou`
}

exports.succsess = () => {
        return `✔️ concluído ✔️`
}

exports.levelon = () => {
        return `❬ ✔ ❭ *ativado leveling*`
}

exports.levelnoton = () => {
        return `❬ X ❭  *desativado leveling*`
}

exports.levelnol = () => {
        return `*SEU LEVEL É...* 0 °-°`
}

exports.stick = () => {
        return `[❗] Error ao converter imagem em sticker ❌`
}

exports.Iv = () => {
        return `❌ link invalido ❌`
}

exports.group = () => {
        return `[❗] Esse comando só pode ser usado em grupos! ❌`
}

exports.ownerG = () => {
        return `[❗] Esse comando só pode ser usado pelo dono do grupo! ❌`
}

exports.ownerB = () => {
        return `[❗] Esse comando só pode ser usado pelo dono do bot! ❌`
}

exports.admin = () => {
        return `[❗] Esse comando so pode ser usado pelos adms do grupo! ❌`
}

exports.Badmin = () => {
        return `[❗] Esse comando so pode ser usado quando o bot é admin! ❌`
}

exports.daftarB = (prefix) => {
        return `──「 SEM REGISTRO 」──\nOpa man !\nVc n está registrado para registrar só dar o \n\comando : ${prefix}register nama|umur\exemplo : ${prefix}register tio|19`
}

exports.daftarD = () => {
        return `*「 JÁ RESGISTRADO 」*\n\n*já está registrado krlh*`
}

exports.wrongf = () => {
        return`*mannnnnn vc esqueceu do texto vei*`
}

exports.clears = () => {
        return`*Limpo com sucesso*`
}

exports.pc = () => {
        return`*「REGISTRO*\n\nse vc n recebeu a msg é pq vc n registrou o numero do bot*`I
}

exports.registered = (namaUser, umurUser, serialUser, time, sender) => {
        return`*「 CADASTRE-SE 」*\n\nVc se cadastrou já com os dados\n\n◪ *DATA* \n  │ \n  ├─ ❏ Nome : ${namaUser} \n  ├─ ❏ Numero : wa.me/${sender.split("@")[0]} \n  ├─ ❏ Age : ${umurUser} \n  ├─ ❏ Tempo de geristro : ${time} \n  │ \n └─ ❏ NS : ${serialUser} \n\n ❏ NOTA : NÃO ESQUEÇA DESE NUMERO POIS É IMPORTANTE:v`
}

exports.cmdnf = (prefix, command) => {
        return`command *${prefix}${command}* não encontrado \ tente escrever *${prefix}menu*`
}

exports.owneresce = (pushname) => {
        return`*desculpe,mas ${pushname} não é o script do dono*`
}

exports.limitend = (pushname) => {
        return`*desculpe ${pushname} O limite de hj é up*\n*O limite é redefinido a cada 00:00 horas*`
}

exports.limitcount = (limitCounts) => {
        return`
*「 LIMIT COUNT 」*
O resto do seu limite: : ${limitCounts}

NOTA : para chegar ao limite. Pode passar de nível acima ou limite de vida`
}

exports.satukos = () => {
        return`*Adiciona os parâmetros 1 (ativar) ou 0 (desativar)`


exports.uangkau = (pushname, sender, uangkau) => {
        return`◪ *BALANCE*\n  ❏ *Nome* : ${pushname}\n  ❏ *Numero* : ${sender.split("@")[0]}\n  ❏ *Dinheiro* : ${uangkau}`
}

