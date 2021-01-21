const Discord = require("discord.js")

//altera a cor e cargo dos membros

exports.run = async (client, message, args) => {
    var string = args.join(" ");
    var colors = [
        {name: "verde", id: "id_da_cor"},
        {name: "vermelho", id: "id_da_cor"},
        {name: "rosa", id: "id_da_cor"},
    ];
    var names = colors.map(function(item){
        return item["name"].toLowerCase();
    });
    var ids = colors.map(function(item) {
        return item["id"];
    });
    var role = message.guild.roles.cache.find(r => r.name.toLowerCase() === string.toLowerCase());

    if(!args[0]){
        return message.channel.send(`${message.author} escreva o nome da cor após o comando.`)
    }else if(args[0].toLowerCase() === 'remove'){
        await message.member.roles.remove(ids);
        return await message.channel.send(`${message.author} suas cores foram resetadas.`);
    }else if(!names.includes(string.toLowerCase()) || !role){
        return message.channel.send(`${message.author} não existe a cor com o nome ${string} neste servidor.`)
    }else{
        try{
            await message.member.roles.remove(ids);
            await message.member.roles.add(role);
            return await message.channel.send(`${message.author} agora você ganhou a cor ${string}`);
        }catch(err){
            console.log('ERRO: '+ err)
        }
    }
};
