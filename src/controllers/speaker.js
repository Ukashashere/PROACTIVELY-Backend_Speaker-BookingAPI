const { Speaker } = require("../models");

exports.createProfile = async (req, res) => {
  const { expertise, price_per_session } = req.body;
  try {
    const speaker = await Speaker.create({ user_id: req.user.id, expertise, price_per_session });
    res.status(201).json(speaker);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
