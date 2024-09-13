import express from "express";
import { createTransaksi, deleteTransaksi, getTransaksi, getTransaksiById, updateTransaksi } from "../controller/TransaksiController.js";
import { createUser, deleteUser, getUser, getUserById, updateUser } from "../controller/UserController.js";
import { createHewan, deleteHewan, getHewan, getHewanById, updateHewan } from "../controller/HewanController.js";
import { createAdmin, deleteAdmin, getAdmin, getAdminById, updateAdmin } from "../controller/AdminController.js";
import { createPakan, deletePakan, getPakan, getPakanById, updatePakan } from "../controller/PakanController.js";
const router = express.Router();

router.post("/user/create", createUser)
router.get("/user", getUser)
router.get("/user/find/:id", getUserById)
router.put("/user/update/:id", updateUser);
router.delete("/user/delete/:id", deleteUser);

router.post("/transaksi/create", createTransaksi);
router.get("/transaksi", getTransaksi);
router.get("/transaksi/find/:id", getTransaksiById);
router.put("/transaksi/update/:id",updateTransaksi);
router.delete("/transaksi/delete/:id", deleteTransaksi);

router.post("/hewan/create", createHewan);
router.get("/hewan", getHewan);
router.get("/hewan/find/:id", getHewanById);
router.put("/hewan/update/:id",updateHewan);
router.delete("/hewan/delete/:id", deleteHewan);

router.get("/admin",getAdmin)
router.get("/admin/find/:id",getAdminById)
router.post("/admin/create", createAdmin)
router.put("/admin/update/:id", updateAdmin)
router.delete("/admin/delete/:id", deleteAdmin)

router.get("/pakan",getPakan)
router.get("/pakan/find/:id",getPakanById)
router.post("/pakan/create", createPakan)
router.put("/pakan/update/:id", updatePakan)
router.delete("/pakan/delete/:id", deletePakan)








export default router