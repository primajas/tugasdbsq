import { DataTypes } from "sequelize";
import db from "../utils/connection.js";
import Transaksi from "./Transaksi.js";

const Hewan = db.define("Hewan", {
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
    jenis: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    harga: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    img: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    tableName: "hewan"
});

// Hewan.belongsTo(Transaksi, { foreignKey: "TransaksiId" });

export default Hewan;
