const express = require("express");
const nftRouter = express.Router();
const Nft = require("../models/nft.js");


nftRouter.post("/api/v1/add-nft",async (req, res) => {
    try {
        let nft = new Nft(req.body);
        nft = await nft.save();
        res.json(nft);
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});

nftRouter.get("/api/v1/nft",async (req, res) => {
    try {
        const nft = Nft.find({});
        res.json(nft);
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});

module.exports = nftRouter;