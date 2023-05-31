const express = require('express')
const router = express.Router()
const Mahasiswa = require('../models/Mahasiswa')

// create api for mahasiswa
router.post('/',async(req,res)=>{
// tampung dulu input mahasiswa
const mahasiswaPost = new Mahasiswa({
    npm: req.body.nmp,
    nama: req.body.nama,
    alamat: req.body.alamat,
})
// simpan data dengan try catch
try{
    // simpan datanya
    const mahasiswa = await mahasiswaPost.save()
    // beri response
    res.json(mahasiswa)
} catch(error){
    res.json(message.error)}

})

// read
router.get('/',async(req,res)=>{
    try{
        const mahasiswa = await Mahasiswa.find()
        res.json(mahasiswa)
    } catch (error){
        res.json({message: error})
    }
})

router.put('/:mahasiswaId',async(req,res)=>{
    const data={
        npm: req.body.npm,
        nama: req.body.nama,
        alamat: req.body.alamat
    }
    try{
        const mahasiswa = await Mahasiswa.updateOne({_id: req.params.mahasiswaId},data)
        res.json(mahasiswa)
    } catch(error){
        res.json({message: error})
    }

})

router.delete('/:mahasiswa',async(req,res)=>{
    try{
        const mahasiswa = await Mahasiswa.deleteOne({_id: req.params.mahasiswa})
        res.json(mahasiswa)
    }catch(error){
        res.json({message: error})
    }
})
    module.exports = router
