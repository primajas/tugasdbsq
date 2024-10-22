// import User from "./UserModel.js";
// import Hewan from "./Hewan.js";
// import Transaksi from "./Transaksi.js";
import db from "../utils/connection.js";
import Admin from "./Admin.js";
import Hewan from "./Hewan.js";
import Pakan from "./Pakan.js";
import Pembeli from "./PembeliModel.js";
import Transaksi from "./Transaksi.js";

await Pembeli.sync()
await Hewan.sync()
await Pakan.sync()
await Admin.sync()
await Transaksi.sync()

await db.sync()