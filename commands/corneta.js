const Discord = require('discord.js')
const path = require('path')

//envia um audio no chat de voz

module.exports.run = async (client, message, args) => {
    const {voice} = message.member;
    if(!voice.channelID){
        message.reply("Você não está em um canal de voz.")
        return
    }

    voice.channel.join().then((connection) => {
        const dispatcher = connection.play(path.join(__dirname, './audio/corneta.mp3'));
        dispatcher.on('finish', () => voice.channel.leave());
    })

}
