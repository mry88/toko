const express = require("express");
const router = express.Router();
const { Feature } = require("../models/features"); // Pastikan Anda sudah mengimpor model Feature yang didefinisikan sebelumnya

// Contoh rute untuk mendapatkan daftar fitur
router.get("/", async (req, res) => {
  try {
    const features = await Feature.find();
    res.json(features);
  } catch (error) {
    console.error("Error fetching features:", error);
    res.status(500).json({ error: "Server error" });
  }
});

// Contoh rute untuk membuat fitur baru
router.post("/", async (req, res) => {
  try {
    const { name, description, price } = req.body;
    const newFeature = new Feature({ name, description, price });
    await newFeature.save();
    res.status(201).json(newFeature);
  } catch (error) {
    console.error("Error creating feature:", error);
    res.status(500).json({ error: "Server error" });
  }
});

// ... dan seterusnya untuk rute update dan delete

module.exports = router;
