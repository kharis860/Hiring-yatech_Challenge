const mongoose = require("mongoose");

const PasienSchema = new mongoose.Schema({
  Nama_pasien: {
    type: String,
    required: true,
  },
  Tanggal_pengobatan: {
    type: Date,
    required: true,
  },
  keluhan: {
    type: Array,
    required: true,
  },
  Resep_obat: {
    type: Array,
    required: true,
  },
  Biaya: {
    type: Number,
    required: true,
  },
  Menggunakan_asuransi: {
    type: Boolean,
    required: true,
    default: false,
  },
  Nama_asuransi: {
    type: String,
    required: true,
    default: null,
  },
  Biaya_yang_dicover_asuransi: {
    type: Number,
    required: true,
    default: 0,
  },
});

const Pasien = mongoose.model("Pasien", PasienSchema);

module.exports = Pasien;
