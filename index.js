const Discord = require("discord.js");
const client = new Discord.Client();
const fetch = require('node-fetch');
const quotes = require("./quotes.js");
const ytdl = require('ytdl-core');

const monkeyIslandQuotes = quotes.monkeyIslandQuotes;

client.on("ready", () => {
  console.log(`The parrot has spoken sailors.`)
})

client.on("message", async msg => {
    console.log(msg.author);
  if (msg.author.bot) {
    return;
  }
  if(msg.author.id === "699358674593775699"){
    msg.reply("A vos no te hago caso tucumano culiao");
    return;
  }

  if (msg.content === "$hey") {
    const random = Math.floor(Math.random() * monkeyIslandQuotes.length);
    if (random === 0) {
      msg.reply(monkeyIslandQuotes[random])
    } else {
      msg.channel.send(monkeyIslandQuotes[random])
    }
  }

  if (msg.content === "$b") {
    //msg.reply("!play https://www.youtube.com/watch?v=zUi5xKQXG6I");
    const connection = await msg.member.voice.channel.join();
    console.log(connection);
    connection.play(ytdl('https://www.youtube.com/watch?v=zUi5xKQXG6I&t=9s', { filter: 'audioonly' }));
  }

  if (msg.content === "$cat" ) {
    return fetch('https://api.thecatapi.com/v1/images/search/')
      .then(res => res.json())
      .then(body => msg.channel.send(body[0].url));
  }

  if (msg.content === "$rucula" || msg.content === "$rúcula") {
    return fetch('https://api-dolar-argentina.herokuapp.com/api/dolaroficial')
      .then(res => res.json())
      .then(body => msg.channel.send(`La rúcula está $${body.venta * 1.65}`));
  }
})

client.login(process.env.TOKEN);

