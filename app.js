// (1) definisi module/middleware 
const exspress = require('express')
const app = exspress()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
require('dotenv/config')


// (6) middleware body-parser
// https://stackoverflow.com/questions/24330014/bodyparser-is-deprecated-express-4
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
    
// (7) import routes
const mahasiswaRoutes = require('./routes/mahasiswa')
const dosenRoutes = require('./routes/dosen')

// (8) app.use (mendaftarkan middleware baru ke express)
app.use('/mahasiswa',mahasiswaRoutes)
app.use('/dosen',dosenRoutes)

// (3)koneksi ke database mengodb
mongoose.connect(process.env.DB_CONNECTION,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
const db = mongoose.connection
// error : jika user/password mongodb salah
db.on('error',console.error.bind(console,'koneksi ke mongoDB error'))

// succes : user/password mongodb benar
db.once('open',() => {
    console.log('Terhubung ke Database MongoDB');
})
// (2) listen port
app.listen(process.env.PORT, () => { 
    console.log(`server berjalan pada port  ${process.env.PORT}`);
})