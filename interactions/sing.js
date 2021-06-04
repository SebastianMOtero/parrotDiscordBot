const ytdl = require('ytdl-core');

async function birdIsTheWord(msg) {
  const connection = await msg.member.voice.channel.join();
    console.log(connection);
    connection.play(ytdl('https://www.youtube.com/watch?v=uSlB4eznXoA&t=27s', { filter: 'audioonly' }));
}

async function marchaPeronista(msg) {
  const connection = await msg.member.voice.channel.join();
    console.log(connection);
    connection.play(ytdl('https://www.youtube.com/watch?v=FR_0W2ksIcg', { filter: 'audioonly' }));
}

async function deployer(msg) {
  const connection = await msg.member.voice.channel.join();
    console.log(connection);
    connection.play(ytdl('https://www.youtube.com/watch?v=7K1aiBmcMjQ', { filter: 'audioonly' }));
}

module.exports = { 
  birdIsTheWord,
  marchaPeronista,
  deployer
};