function aLaTabla(userBan, msg) {
  if (userBan != "") {
    msg.channel.send(`${userBan} vuelve a ser querido entre sus pares.`);
  }
  userBan = msg.content.split(" ")[3];
  msg.channel.send(`Moción para cancelar a ${userBan} aprobada.`);
}

module.exports = { 
  aLaTabla,
}
