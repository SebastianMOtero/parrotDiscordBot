const fetch = require('node-fetch');

function news(msg) {
  const filter = msg.content.split(' ')[1];
  return fetch(`https://api.jornalia.net/api/v1/articles?apiKey=${process.env.NEWSAPIKEY}&search=${filter}`)
    .then(res => res.json())
    .then(body => msg.channel.send(body.articles[0].sourceUrl))
    .catch( () => {
      msg.channel.send("No encontré nada");
    });
}

function dollarPrice(msg) {
  return fetch('https://api-dolar-argentina.herokuapp.com/api/dolaroficial')
      .then(res => res.json())
      .then(body => msg.channel.send(`La rúcula está $${body.venta * 1.65}`));
}

function BTCPrice(msg) {
  return fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd')
      .then(res => res.json())
      .then(body => msg.channel.send(`El bitcoin esta ${body.bitcoin.usd} USD`));
}

function cats(msg) {
  return fetch('https://api.thecatapi.com/v1/images/search/')
      .then(res => res.json())
      .then(body => msg.channel.send(body[0].url));
}

module.exports = { 
  news,
  dollarPrice,
  BTCPrice,
  cats
};