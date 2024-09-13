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
      if (!pakan) return res.status(404).json({ message: "pakan not found" });
      res.status(200).json(pakan);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

export const createPakan = async (req,res) =>{
    try{
      const {name, jenisPakan, harga,UserId} = req.body;
      const pakan = await Pakan.create ({name, jenisPakan, harga, UserId});
      res.status(200).json(pakan)
    }catch(error){
      res.status(500).json({error: error.message, message: "gagal membuat createPakan"})
    }
  }

  export const updatePakan = async (req, res) => {
    try {
      const { id } = req.params;
      const { name, jenisPakan, harga,UserId } = req.body;
      const [updated] = await Pakan.update(
        { name, jenisPakan, harga,UserId },
        { where: { id } }
      );
      if (updated) {
        const updatedPakan = await Pakan.findByPk(id);
        res.status(200).json(updatedPakan);
      } else {
        res.status(404).json({ message: "Pakan not found" });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

export const deletePakan = async (req, res) => {
    try{
      const { id } = req.params;
      const deleted = await Pakan.destroy({where: {id}});
      res.status(200).json(deleted + ` Pakan ke ${id} berhasil dihapus`)
    }catch(error){
        res.status(500).json({error: error.message, message: "pakan menghapus user "})
    }
}