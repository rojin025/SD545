const { musicDB } = require("../data/data");

const getSongs = (searchMusic) => {
  let musics = musicDB;
  if (searchMusic) {
    musics = musicDB.filter((m) =>
      m.title.toLowerCase().includes(searchMusic.toLowerCase())
    );
  }

  return musics;
};

module.exports = { getSongs };
