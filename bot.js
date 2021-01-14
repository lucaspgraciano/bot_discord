const Discord = require("discord.js")
const client = new Discord.Client()
const config = require("./config.json")

client.on("ready", () => {
  console.log(`O bot foi iniciado, com ${client.users.cache.size} usuários e em ${client.guilds.cache.size} servidores.`)
  client.user.setActivity(`Eu estou em ${client.guilds.cache.size} servidores`)
})

client.on("message", async message => {

    if(message.author.bot) return
    if(message.channel.type === "dm") return;

    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const comando = args.shift().toLowerCase();

    if(comando === "ping"){
        const m = await message.channel.send("Ping?")
        m.edit(`Pong! A Latência é ${m.createdTimestamp - message.createdTimestamp}ms.`)
    }

    if(comando === "clear"){
        message.channel.bulkDelete(100)
        .then(messages => console.log(`Bulk deleted ${messages.size} messages`))
        .catch(console.error); 
    }

    if(comando === "help"){
        const h = message.channel.send("Lista de comandos:\n    !help = Lista de comandos;\n    !clear = Limpa o chat;\n    !ping = Latência do usuário;\n  ")
    }
})

client.login(config.token);
