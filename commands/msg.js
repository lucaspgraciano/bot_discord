const Discord = require("discord.js");

//escreve uma mensagem para o bot

module.exports.run = async (client, message, args) => {
    const sayMessage = args.join(" ");
    message.delete().catch(O_o => {});
    message.channel.send(sayMessage);
}
