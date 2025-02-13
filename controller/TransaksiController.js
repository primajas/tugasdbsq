import Transaksi from "../model/Transaksi.js";
import Pembeli from "../model/PembeliModel.js";
import Hewan from "../model/Hewan.js";
import Pakan from "../model/Pakan.js";

export const getTransaksi = async (req, res) => {
  try {
    const transaksi = await Transaksi.findAll({
      include: [
        { model: Pembeli },
        { model: Hewan },
        { model: Pakan },
      ],
    });
    res.status(200).json(transaksi);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getTransaksiById = async (req, res) => {
  try {
    const { id } = req.params;
    const transaksi = await Transaksi.findByPk(id, {
      include: [
        { model: Pembeli },
        { model: Hewan },
        { model: Pakan },
      ],
    });
    if (!transaksi) return res.status(404).json({ message: "Transaksi tidak ditemukan" });
    res.status(200).json(transaksi);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createTransaksi = async (req, res) => {
  try {
    const { totalHarga, tanggal, PembeliId, HewanId, PakanId } = req.body;
    const transaksi = await Transaksi.create({
      totalHarga,
      tanggal,
      PembeliId,
      HewanId,
      PakanId,
    });
    res.status(201).json(transaksi);
  } catch (error) {
    res.status(500).json({ error: error.message, message: "Gagal membuat transaksi" });
  }
};

export const updateTransaksi = async (req, res) => {
  try {
    const { id } = req.params;
    const { totalHarga, tanggal, PembeliId, HewanId, PakanId } = req.body;

    const [updated] = await Transaksi.update(
      { totalHarga, tanggal, PembeliId, HewanId, PakanId },
      { where: { id } }
    );
    if (updated) {
      const updatedTransaksi = await Transaksi.findByPk(id);
      res.status(200).json(updatedTransaksi);
    } else {
      res.status(404).json({ message: "Transaksi tidak ditemukan" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteTransaksi = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Transaksi.destroy({ where: { id } });
    if (deleted) {
      res.status(200).json({ message: `Transaksi dengan ID ${id} berhasil dihapus` });
    } else {
      res.status(404).json({ message: "Transaksi tidak ditemukan" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message, message: "Gagal menghapus transaksi" });
  }
};
