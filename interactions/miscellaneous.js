function aLaTabla(userBan, msg) {
  if (userBan.culiaoactual != "") {
    msg.channel.send(`${userBan.culiaoactual} vuelve a ser querido entre sus pares.`);
  }
  userBan.culiaoactual = msg.content.split(" ")[3];

  msg.channel.send(`Moción para cancelar a ${userBan.culiaoactual} aprobada.`);
}

function traemeAlCuliao(userBan, msg) {
  let pedido = msg.content.split(" ")[1];
  if (userBan.culiaoactual === pedido) {
    msg.channel.send(`${userBan.culiaoactual} vuelve a ser querido entre sus pares.`);
    userBan.culiaoactual = "";
  }
}

function despertameEn(msg) {
  let minutes = msg.content.split(" ")[2];
  if (minutes < 1 || minutes > 120) return;
  setTimeout(() => {
    msg.reply(`despertate`)
  }, minutes * 60 * 1000)
}

module.exports = {
  aLaTabla,
  traemeAlCuliao,
  despertameEn
}