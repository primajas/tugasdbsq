import Pakan from "../model/Pakan.js";

export const getPakan = async (req, res) => {
  try {
    const pakan = await Pakan.findAll();
    res.status(200).json(pakan);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getPakanById = async (req, res) => {
  try {
    const { id } = req.params;
    const pakan = await Pakan.findByPk(id);
    if (!pakan) return res.status(404).json({ message: "Pakan tidak ditemukan" });
    res.status(200).json(pakan);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createPakan = async (req, res) => {
  try {
    const { name, harga, stok, gambar } = req.body;
    const pakan = await Pakan.create({ name, harga, stok, gambar });
    res.status(201).json(pakan);
  } catch (error) {
    res.status(500).json({ error: error.message, message: "Gagal membuat Pakan" });
  }
};

export const updatePakan = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, harga, stok, gambar } = req.body;
    const [updated] = await Pakan.update(
      { name, harga, stok, gambar },
      { where: { id } }
    );
    if (updated) {
      const updatedPakan = await Pakan.findByPk(id);
      res.status(200).json(updatedPakan);
    } else {
      res.status(404).json({ message: "Pakan tidak ditemukan" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deletePakan = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Pakan.destroy({ where: { id } });
    if (deleted) {
      res.status(200).json({ message: `Pakan dengan ID ${id} berhasil dihapus` });
    } else {
      res.status(404).json({ message: "Pakan tidak ditemukan" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
