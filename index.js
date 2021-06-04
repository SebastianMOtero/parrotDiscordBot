const Discord = require("discord.js");
const client = new Discord.Client();

const sing = require("./interactions/sing.js");
const giveMe = require("./interactions/giveMe.js");
const say = require("./interactions/say.js");
const miscellaneous = require("./interactions/miscellaneous.js");
let userBan = "";

client.login(process.env.TOKEN);
client.on("ready", () => { console.log(`The parrot has spoken sailors.`)})

client.on("message", async msg => {
  if (msg.author.bot) return;

  client.on('guildMemberAdd', member => say.greetings(member))

  if(msg.author.username === userBan){
    msg.reply("A vos no te hago caso tucumano culiao");
    return;
  }

  switch (msg.content.split(" ")[0]) {
    case "$hey": say.quote(msg); break;
    case "$deployer": await sing.deployer(msg); break;
    case "$b": await sing.birdIsTheWord(msg); break;
    case "$peron": await sing.peron(msg); break;
    case "$cat": giveMe.cats(msg); break;
    case "$noticia": giveMe.news(msg); break;
    case "$rucula" :
    case "$rúcula" : giveMe.dollarPrice(msg); break;
    case "$bitcoin": giveMe.BTCPrice(msg); break;
  }

  if (msg.content.startsWith("$A la tabla")) { miscellaneous.aLaTabla(userBan, msg);};
})
