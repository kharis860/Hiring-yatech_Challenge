# Logic Test

File terlampir merupakan file program menggunakan bahasa JavaScript yang API sebuah klinik digital. Pada tes ini, peserta diberi _challenge_ untuk membuat _create_ API. Database yang saya gunakan pada API ini adalah MongoDB serta ODM Mongoose.

## API Endpoint

Terdapat 2 endpoint di dalam API saat running pada port 3000, berikut penjelasan:

        1. Endpoint pertama
            GET: http://127.0.0.1:3000/
        2. Endpoint kedua
    		POST: http://127.0.0.1:3000/pengobatan

## Teknis _running_ program

    1. Endpoint pertama
       GET: http://127.0.0.1:3000/

Endpoint tersebut jika dijalankan akan memunculkan message "Welcome to Klinik Digital API" yang berberan sebagai bagian depan yang menandakan bahwa API berhasil untuk diakses

    2. Endpoint kedua
       POST: http://127.0.0.1:3000/pengobatan

_Endpoint_ ini berfungsi untuk create data pasien yang akan melakukan _checkup_ di sebuah klinik. Contoh input data sebagai body _endpoint_ ini adalah sebagai berikut:

    {
      "Nama_pasien": "kharis",
      "Tanggal_pengobatan": "2024-04-29",
      "keluhan": "pusing",
      "Resep_obat": ["demacolin", "infalgin"],
      "Biaya": 10000,
      "Menggunakan_asuransi": true,
      "Nama_asuransi": "indo assurance",
      "Biaya_yang_dicover_asuransi": 6500
    }

Input body harus sesuai dengan kriteria tipe data masing-masing _field_ sebagai berikut:

    Nama pasien (string)
    ID pasien (alphanumeric)
    Tanggal pengobatan (date)
    Keluhan (array of string)
    Resep obat (array of string)
    Biaya (float)
    Menggunakan asuransi (boolean, default false)
    Nama asuransi (string, default null)
    Biaya yang dicover asuransi (float, default 0)

> Jika input body tidak sesuai kriteria, maka validasi input akan bekerja dan memunculkan pesan error sesuai kesalahan yang dilakukan pada saat melakukan input data.

Semoga output yang saya berikan telah memenuhi ekspektasi, mohon maaf jika terdapat kesalahan pemahaman sehingga output yang didapatkan tidak sesuai harapan. Terima kasih.
