import Admin from "../model/Admin.js";

export const getAdmin = async (req, res) => {
    try {
      const admin = await Admin.findAll();
      res.status(200).json(admin);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

export const getAdminById = async (req, res) => {
    try {
      const { id } = req.params;
      const admin = await Admin.findByPk(id);
      if (!admin) return res.status(404).json({ message: "admin not found" });
      res.status(200).json(admin);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

export const createAdmin = async (req, res) => {
    try{
        const { name, password } = req.body;
        const admin = await Admin.create({name, password});
        res.status(200).json(admin);
    }catch(error){
        res.status(500).json({error: error.message, message: "gagal membuat createAdmin"})
    }
}

export const updateAdmin = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, password } = req.body;
    const [updated] = await Admin.update(
      { name , password },
      { where: { id } }
    );
    if (updated) {
      const updatedAdmin = await Admin.findByPk(id);
      res.status(200).json(updatedAdmin);
    } else {
      res.status(404).json({ message: "Admin not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteAdmin = async (req, res) => {
  try{
    const { id } = req.params;
    const deleted = await Admin.destroy({where: {id}});
    res.status(200).json(deleted + ` Admin ke ${id} berhasil dihapus`)
  }catch(error){
      res.status(500).json({error: error.message, message: "gagal menghapus user "})
  }
}