import Transaksi from "../model/Transaksi.js"

export const getTransaksi = async (req, res) => {
    try {
      const transaksi = await Transaksi.findAll();
      res.status(200).json(transaksi);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

export const getTransaksiById = async (req, res) => {
    try {
      const { id } = req.params;
      const transaksi = await Transaksi.findByPk(id);
      if (!transaksi) return res.status(404).json({ message: "transaksi not found" });
      res.status(200).json(transaksi);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  export const createTransaksi = async (req, res) => {
    const { tanggalPembelian, nominal , UserId ,AdminId, HewanId, PakanId} = req.body;
    const ticketDate = tanggalPembelian || new Date();
    const transaksi = await Transaksi.create({ tanggalPembelian : ticketDate, nominal , UserId : UserId, AdminId, HewanId, PakanId});
  
    res.status(201).json(transaksi);
  };

export const updateTransaksi = async (req, res) => {
    try {
      const { id } = req.params;
      const { tanggalPembelian, nominal , UserId, AdminId, HewanId, PakanId} = req.body;
  
      const [updated] = await Transaksi.update(
        { tanggalPembelian, nominal , UserId,AdminId, HewanId, PakanId},
        { where: { id } }
      );
      if (updated) {
        const updatedTransaksi = await Transaksi.findByPk(id);
        res.status(200).json(updatedTransaksi);
      } else {
        res.status(404).json({ message: "Transaksi not found" });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
export const deleteTransaksi = async (req, res) => {
    try{
      const { id } = req.params;
      const deleted = await Transaksi.destroy({where: {id}});
      res.status(200).json(deleted + ` transaksi ke ${id} berhasil dihapus`)
    }catch(error){
        res.status(500).json({error: error.message, message: "gagal menghapus transaksi "})
    }
}