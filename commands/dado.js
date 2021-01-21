const Discord = require("discord.js");

//roda um da1do

module.exports.run = async (client, message, args) => {
    var n = args.join(" ")
    const roll = () => Math.floor(Math.random() * n)+1;
    const m = await message.channel.send("**RODANDO**");
    m.edit("**RODANDO.**");
    m.edit("**RODANDO..**");
    m.edit("**RODANDO...**");
    m.edit("O dado caiu em "+ roll());
}
