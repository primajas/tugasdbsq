import { DataTypes } from "sequelize";
import db from "../utils/connection.js";
import Transaksi from "./Transaksi.js";

const Pakan = db.define("Pakan", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    harga: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    gambar: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    stok: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0, 
    },
}, {
    tableName: "pakan"
});

// Pakan.hasMany(Transaksi, { foreignKey: 'PakanId' });

export default Pakan;
