const express = require('express')
const router = express.Router()
const Dosen = require('../models/Dosen')

// create api for mahasiswa
router.post('/',async(req,res)=>{
// tampung dulu input mahasiswa
const dosenPost = new Dosen({
    nidn: req.body.nidn,
    nama: req.body.nama,
    jeniskelamin: req.body.jeniskelamin,
    umur: req.body.umur,
    
})
// simpan data dengan try catch
try{
    // simpan datanya
    const dosen = await dosenPost.save()
    // beri response
    res.json(dosen)
} catch(error){
    res.json(message.error)}

})

// read
router.get('/',async(req,res)=>{
    try{
        const dosen = await dosen.find()
        res.json(dosen)
    } catch (error){
        res.json({message: error})
    }
})

router.put('/:dosenId',async(req,res)=>{
    const data={
        nidn: req.body.nidn,
    nama: req.body.nama,
    jeniskelamin: req.body.jeniskelamin,
    umur: req.body.umur,
    }
    try{
        const dosen = await Dosen.updateOne({_id: req.params.dosenId},data)
        res.json(dosen)
    } catch(error){
        res.json({message: error})
    }

})

router.delete('/:dosen',async(req,res)=>{
    try{
        const dosen = await dosen.deleteOne({_id: req.params.dosen})
        res.json(dosen)
    }catch(error){
        res.json({message: error})
    }
})
    module.exports = router