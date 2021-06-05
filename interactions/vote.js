const Discord = require("discord.js");

async function vote(msg) {
  if (msg.content.split.length < 1) return;

  let pollEmbed = new Discord.MessageEmbed()
    .setTitle("La encuesta del loro")
    .setDescription(msg.content.split(" ").slice(1).join(" "))

  let pollMessage = await msg.channel.send(pollEmbed);

  await pollMessage.react('👍');
  await pollMessage.react('👎');

  const filter = (reaction) => reaction.emoji.name === '👍' || reaction.emoji.name === '👎'; 

  pollMessage.awaitReactions(filter, { time: 10000} )
  .then(results => {
    let posVotes = results.get('👍') && results.get('👍').count - 1 || 0;
    let negVotes = results.get('👎') && results.get('👎').count - 1 || 0;

    let result = new Discord.MessageEmbed()
      .setTitle("Resultado de la encuesta")
      .setDescription(msg.content.split(" ").slice(1).join(" "))
      .addField('👍', `${posVotes} Votes`)
      .addField('👎', `${negVotes} Votes`)

    msg.channel.send(result);

    pollMessage.delete();
  })
  .catch(err => console.log(err))
}

module.exports = {
  vote
}