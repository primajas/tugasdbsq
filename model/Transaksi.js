import { DataTypes } from "sequelize";
import db from "../utils/connection.js";
import Pembeli from "./PembeliModel.js";
import Hewan from "./Hewan.js";
import Pakan from "./Pakan.js";

const Transaksi = db.define("Transaksi", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    PembeliId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "pembeli",
            key: "id",
        },
    },
    HewanId: {
        type: DataTypes.INTEGER,
        references: {
            model: "hewan",
            key: "id",
        },
    },
    PakanId: {
        type: DataTypes.INTEGER,
        references: {
            model: "pakan",
            key: "id",
        },
    },
    total_harga: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    alamat: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    status: {
        type: DataTypes.STRING,
        defaultValue: "pending",
    },
}, {
    tableName: "transaksi"
});

// Transaksi.belongsTo(Pembeli, { foreignKey: "PembeliId" });
// Transaksi.hasMany(Hewan, { foreignKey: "TransaksiId", onDelete: "CASCADE" });
// Hewan.belongsTo(Transaksi, { foreignKey: "TransaksiId" });

export default Transaksi;
