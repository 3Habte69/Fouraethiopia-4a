const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const { createClient } = require("@supabase/supabase-js");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB error:", err));

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

const userSchema = new mongoose.Schema({
  fullName: String,
  university: String,
  stream: String,
  phone: String,
  paymentScreenshot: String,
  score: { type: Number, default: 0 }
});

const User = mongoose.model("User", userSchema);

app.get("/", (req, res) => {
  res.send("🚀 FouraEthiopia backend is running!");
});

app.post("/register", async (req, res) => {
  try {
    const { fullName, university, stream, phone, paymentScreenshot } = req.body;
    const newUser = new User({ fullName, university, stream, phone, paymentScreenshot });
    await newUser.save();
    res.json({ success: true, message: "User registered successfully" });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.get("/leaderboard", async (req, res) => {
  try {
    const users = await User.find().sort({ score: -1 }).limit(10);
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post("/upload", async (req, res) => {
  try {
    const { fileName, fileContent } = req.body;
    const { data, error } = await supabase.storage
      .from("payments")
      .upload(fileName, Buffer.from(fileContent, "base64"), { contentType: "image/png" });

    if (error) throw error;
    const fileUrl = `${process.env.SUPABASE_URL}/storage/v1/object/public/payments/${fileName}`;
    res.json({ success: true, url: fileUrl });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
