const express = require("express");
const roomRouter = express.Router();
const Room = require("../models/room.js");

roomRouter.get("/api/v1/room/:id", async (req, res) => {
  try {
    const room = await Room.findOne({ roomId: req.params.id });
    res.json(room);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});


module.exports = roomRouter;