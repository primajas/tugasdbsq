import express from 'express';
import Transaksi from '../model/Transaksi.js ';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const transaksi = await Transaksi.findAll();
    res.json(transaksi);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const newTransaksi = await Transaksi.create(req.body);
    res.status(201).json(newTransaksi);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

export default router; 
