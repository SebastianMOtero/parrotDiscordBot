const ytdl = require('ytdl-core');

async function birdIsTheWord(msg, serverConn) {
  await play('https://www.youtube.com/watch?v=uSlB4eznXoA&t=27s', msg, serverConn);
}

async function marchaPeronista(msg, serverConn) {
  await play('https://www.youtube.com/watch?v=FR_0W2ksIcg', msg, serverConn);
}

async function deployer(msg, serverConn) {
  await play('https://www.youtube.com/watch?v=7K1aiBmcMjQ', msg, serverConn);
}

async function play(url, msg, serverConn) {
  const voiceChannel = msg.member.voice.channel;
  if (!voiceChannel)
    return msg.channel.send("You need to be in a voice channel to play music!");

  serverConn.connection = await voiceChannel.join();
  serverConn.connection.play(ytdl(url,{ filter: 'audioonly' }));
} 

async function callate(msg, serverConn) {
  serverConn.connection.dispatcher.end();
}

module.exports = {
  birdIsTheWord,
  marchaPeronista,
  deployer,
  callate,
};