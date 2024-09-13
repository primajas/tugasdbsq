import User from "../model/UserModel.js";

export const createUser = async (req, res) => {
    try{
        const { name, email } = req.body;
        const user = await User.create({name, email});
        res.status(200).json(user);
    }catch(error){
        res.status(500).json({error: error.message, message: "gagal membuat createUser"})
    }
}

export const getUser = async (req, res) => {
    try {
      const users = await User.findAll();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

export const getUserById = async (req, res) => {
    try {
      const { id } = req.params;
      const user = await User.findByPk(id);
      if (!user) return res.status(404).json({ message: "User not found" });
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

export const updateUser = async (req, res) => {
    try {
      const { id } = req.params;
      const { name, email } = req.body;
      const [updated] = await User.update(
        { name , email },
        { where: { id } }
      );
      if (updated) {
        const updatedUser = await User.findByPk(id);
        res.status(200).json(updatedUser);
      } else {
        res.status(404).json({ message: "User not found" });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

export const deleteUser = async (req, res) => {
    try{
      const { id } = req.params;
      const deleted = await User.destroy({where: {id}});
      res.status(200).json(deleted + ` User ke ${id} berhasil dihapus`)
    }catch(error){
        res.status(500).json({error: error.message, message: "gagal menghapus user "})
    }
}