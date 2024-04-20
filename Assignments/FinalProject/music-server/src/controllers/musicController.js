const musicService = require("../services/music.service");

const getMusics = (req, res, next) => {
  try {
    return res.json(musicService.getMusics(req.query.search));
  } catch (error) {
    next(error);
  }
};

module.exports = { getMusics };
