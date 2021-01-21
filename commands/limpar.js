const Discord = require("discord.js");

//limpa o chat

module.exports.run = async (client, message, args) => {
    var n = args.join(" ")
    message.channel.bulkDelete(n)
    .then(messages => console.log(`Bot deletou ${messages.size} mensagens`))
    .catch(console.error);
}
