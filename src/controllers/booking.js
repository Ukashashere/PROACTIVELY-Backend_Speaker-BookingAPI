const { Session, Speaker } = require("../models");

exports.bookSession = async (req, res) => {
  const { speaker_id, date, time_slot } = req.body;
  try {
    // Check slot availability
    const isBooked = await Session.findOne({ where: { speaker_id, date, time_slot } });
    if (isBooked) return res.status(400).json({ message: "Slot already booked" });

    // Create session
    const session = await Session.create({ user_id: req.user.id, speaker_id, date, time_slot });
    res.status(201).json(session);

    // Send email notifications and create Google Calendar events
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
