var express = require("express");
var app = express();
var mongoose = require("mongoose");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB_connection
mongoose
  .connect("mongodb://127.0.0.1:27017/klinik_db")
  .then(() => {
    console.log("mongodb connected");
  })
  .catch((err) => {
    console.log(err);
  });
// connection end

// models
const Pasien = require("./models/pasien");

app.get("/", (req, res) => {
  res.json({ message: "Welcome to Klinik Digital API" });
});
app.post("/pengobatan", async (req, res) => {
  try {
    // input validation
    const pasien = new Pasien(req.body);
    const { Nama_pasien, Tanggal_pengobatan, keluhan, Resep_obat, Biaya, Menggunakan_asuransi, Nama_asuransi, Biaya_yang_dicover_asuransi } = req.body;
    const dateFormatRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (typeof Nama_pasien !== "string") {
      return res.status(400).json({ message: "Nama_pasien field must be a string." });
    } else if (!dateFormatRegex.test(Tanggal_pengobatan)) {
      return res.status(400).json({ message: "Tanggal_pengobatan field must be a 'YYYY-MM-DD'." });
    } else if (typeof Biaya !== "number") {
      return res.status(400).json({ message: "Biaya field must be a number." });
    } else if (typeof Menggunakan_asuransi !== "boolean") {
      return res.status(400).json({ message: "Menggunakan_asuransifield must be a boolean (true or false)." });
    } else if (typeof Nama_asuransi !== "string") {
      return res.status(400).json({ message: "Nama_asuransi field must be a string." });
    } else if (typeof Biaya_yang_dicover_asuransi !== "number") {
      return res.status(400).json({ message: "Biaya field must be a number." });
    }
    // input validation end

    await pasien.save();
    console.log(pasien);
    if (pasien) {
      res.status(201).json({ status: "success", message: `Data pasien bernama ${pasien.Nama_pasien} berhasil disimpan` });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.listen("3000", () => {
  console.log("server running on http://127.0.0.1:3000");
});
