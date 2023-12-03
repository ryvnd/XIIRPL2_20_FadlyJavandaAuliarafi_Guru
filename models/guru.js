const mongoose = require('mongoose');

const GuruSchema = new mongoose.Schema({
    nik: {
        type: String,
        required: [true, 'Silahkan isikan nik anda'],
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/\S+@\S+\.\S+/, 'Silahkan isi alamat email anda'],
    },
    nama: {
        type: String,
        required: [true, 'Silahkan isikan nama anda'],
        unique: false,
    },
    ttl: {
        type: String,
        required: [true, 'Silahkan isikan tempat tanggal lahir anda anda'],
        unique: false,
    },
    jeniskelamin: {
        type: String,
        required: [true, 'Silahkan isikan jenis kelamin anda'],
        unique: false,
    },
    alamat: {
        type: String,
        required: [true, 'Silahkan isikan alamat anda'],
        unique: false,
    }
});

module.exports = mongoose.model('guru', GuruSchema);