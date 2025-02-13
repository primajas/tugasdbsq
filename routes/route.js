import express from "express";
import { createTransaksi, deleteTransaksi, getTransaksi, getTransaksiById, updateTransaksi } from "../controller/TransaksiController.js";
import { createHewan, deleteHewan, getHewan, getHewanById, updateHewan } from "../controller/HewanController.js";
// import { verifyAdmin, verifyToken } from "../middleware/authMiddleware.js";

import { createPakan, deletePakan, getPakan, getPakanById, updatePakan } from "../controller/PakanController.js";
// import { getAdmin } from "../controller/AdminController.js";
const router = express.Router();

// router.get("/transaksi", getTransaksi);
// router.get("/transaksi/find/:id", getTransaksiById);
// router.put("/transaksi/update/:id",updateTransaksi);
// router.delete("/transaksi/delete/:id", deleteTransaksi);

router.post("/hewan/create", createHewan);
router.get("/hewan", getHewan);
router.get("/hewan/find/:id", getHewanById);
router.put("/hewan/update/:id",updateHewan);
router.delete("/hewan/delete/:id", deleteHewan);

router.get("/pakan",getPakan)
router.get("/pakan/find/:id",getPakanById)
router.post("/pakan/create", createPakan)
router.put("/pakan/update/:id", updatePakan)
router.delete("/pakan/delete/:id", deletePakan)

export default router