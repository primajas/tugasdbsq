import express from 'express'
// import Pembeli from '../model/PembeliModel'
import { createPembeli, deletePembeli, getAllPembeli, getAllPembeliById, loginPembeli, updatePembeli } from '../controller/PembeliController.js'
// import Pembeli from '../model/PembeliModel.js'
const PembeliRoute=express.Router()

PembeliRoute.get('/', getAllPembeli)
PembeliRoute.get('/find/:id', getAllPembeliById)
PembeliRoute.post('/login', loginPembeli)
PembeliRoute.post('/create', createPembeli)
PembeliRoute.put('/update/:id', updatePembeli)
PembeliRoute.delete('/delete/:id', deletePembeli)


export default PembeliRoute