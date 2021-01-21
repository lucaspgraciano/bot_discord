const Discord = require("discord.js")

//lista de comandos em embed

exports.run = async (client, message, args) => {
    const embed = new Discord.MessageEmbed()//msg embed
        .setColor('#e63946')//cor barra left
        .setAuthor('')//autor
        .setTitle('')//titulo
        .setDescription(`**Segue a lista de comandos:**\n
            \n    !help = Lista de comandos;
            \n    !limpar = Limpa algumas mensagens do chat;
            \n    !ping = Latência do usuário;
            \n    !dado <lados> = Roda um dado de n lados;
            \n    !say <mensagem> = Mensagem do bot;
            \n    !corneta = Áudio de corneta do canal de voz;
            \n\n    https://github.com/lucaspgraciano`)//conteudo principal
        .setImage()//conteudo multimidia
        .setThumbnail()//avatar
        .setFooter('')//conteudo rodape
        .setTimestamp('')//horario
    await message.channel.send(embed);
}
