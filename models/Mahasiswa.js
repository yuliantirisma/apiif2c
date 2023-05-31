// (4) buat schema Mahasiswa
const mongoose = require('mongoose')

const Mahasiswa = mongoose.Schema({
    npm: {
        type : String,
        required: true
    },
    alamat: {
        type : String,
        required: true
    },
    createAt: {
        type : Date,
        default : Date.now
    }
})

module.exports = mongoose.model('Mahasiswa',Mahasiswa)
