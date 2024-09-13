import Hewan from "../model/Hewan.js";

export const getHewan = async (req, res) => {
    try {
      const hewan = await Hewan.findAll();
      res.status(200).json(hewan);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

export const getHewanById = async (req, res) => {
    try {
      const { id } = req.params;
      const hewan = await Hewan.findByPk(id);
      if (!hewan) return res.status(404).json({ message: "Hewan not found" });
      res.status(200).json(hewan);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

export const createHewan = async (req, res) => {
    try{
        const { name, jenis, harga, UserId } = req.body;
        const hewan = await Hewan.create({name, jenis, harga,UserId});
        res.status(200).json(hewan);
    }catch(error){
        res.status(500).json({error: error.message, message: "gagal membuat createHewan"})
    }
}

export const updateHewan = async (req, res) => {
    try {
      const { id } = req.params;
      const { name, jenis, harga,UserId } = req.body;
  
      const [updated] = await Hewan.update(
        {name, jenis, harga,UserId},
        { where: { id } }
      );
      if (updated) {
        const updatedHewan = await Hewan.findByPk(id);
        res.status(200).json(updatedHewan);
      } else {
        res.status(404).json({ message: "Hewan not found" });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
};

export const deleteHewan = async (req, res) => {
    try{
      const { id } = req.params;
      const deleted = await Hewan.destroy({where: {id}});
      res.status(200).json(deleted + ` Hewan ke ${id} berhasil dihapus`)
    }catch(error){
        res.status(500).json({error: error.message, message: "gagal menghapus Hewan "})
    }
}

