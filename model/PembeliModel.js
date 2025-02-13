import { DataTypes } from "sequelize";
import db from "../utils/connection.js";
import Hewan from "./Hewan.js";
import Pakan from "./Pakan.js";
import Transaksi from "./Transaksi.js";
// import Admin from "./Admin.js";

const Pembeli = db.define("User", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    nama: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,  
    },
},
{
    tableName: "pembeli"
});

// Pembeli.hasMany(Transaksi, { foreignKey: "PembeliId", onDelete: "CASCADE" });
// Transaksi.belongsTo(Pembeli, { foreignKey: "PembeliId" });



export default Pembeli