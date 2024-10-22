import Pembeli from "../model/PembeliModel.js";

export const createPembeli = async (req, res) => {
    try{
        const { name, gender } = req.body;
        const pembeli = await Pembeli.create({name, gender});
        res.status(200).json(pembeli);
    }catch(error){
        res.status(500).json({error: error.message, message: "gagal membuat createPembeli"})
    }
}

export const getPembeli = async (req, res) => {
    try {
      const pembelis = await Pembeli.findAll();
      res.status(200).json(pembelis);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

export const getPembeliById = async (req, res) => {
    try {
      const { id } = req.params;
      const pembeli = await Pembeli.findByPk(id);
      if (!pembeli) return res.status(404).json({ message: "Pembeli not found" });
      res.status(200).json(pembeli);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

export const updatePembeli = async (req, res) => {
    try {
      const { id } = req.params;
      const { name, gender } = req.body;
      const [updated] = await Pembeli.update(
        { name , gender },
        { where: { id } }
      );
      if (updated) {
        const updatedPembeli = await Pembeli.findByPk(id);
        res.status(200).json(updatedPembeli);
      } else {
        res.status(404).json({ message: "Pembeli not found" });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

export const deletePembeli = async (req, res) => {
    try{
      const { id } = req.params;
      const deleted = await Pembeli.destroy({where: {id}});
      res.status(200).json(deleted + ` Pembeli ke ${id} berhasil dihapus`)
    }catch(error){
        res.status(500).json({error: error.message, message: "gagal menghapus user "})
    }
}