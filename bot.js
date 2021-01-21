const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

client.on("ready", () => {
    console.log(`O bot foi iniciado, com ${client.users.cache.size} usuários e em ${client.guilds.cache.size} servidores.`);
    client.user.setActivity(`!help`);
});

client.on("message", async message => {
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const comando = args.shift().toLowerCase();

    try{
        const commandFile = require(`./commands/${comando}.js`)
        commandFile.run(client, message, args);
    }catch(err){
        console.log('ERRO: '+ err)
    };

});

client.login(config.token);
