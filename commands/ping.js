const Discord = require("discord.js");

//ping

module.exports.run = async (client, message, args) => {
    const m = await message.channel.send("**CALCULANDO**")
    m.edit(`A Latência é ${(m.createdTimestamp - message.createdTimestamp)/10}ms.`)
}
