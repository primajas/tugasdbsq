import { DataTypes } from "sequelize";
import db from  "../utils/connection.js";
import Hewan from "./Hewan.js";
import Pakan from "./Pakan.js";
import Transaksi from "./Transaksi.js";
import Admin from "./Admin.js";

const Pembeli = db.define("User",{
    id:{
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false,
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    gender:{
        type:DataTypes.STRING,
        allowNull:false,
    },
},
{
    tableName:"pembeli"
}
);

Pembeli.hasMany(Hewan, { foreignKey: 'PembeliId' });
Hewan.belongsTo(Pembeli, { foreignKey: 'PembeliId' });

Pembeli.hasMany(Pakan, { foreignKey: 'PembeliId' });
Pakan.belongsTo(Pembeli, { foreignKey: 'PembeliId' });

Pembeli.hasMany(Transaksi, { foreignKey: 'PembeliId' });
Transaksi.belongsTo(Pembeli, { foreignKey: 'PembeliId' });

Admin.hasMany(Transaksi, { foreignKey: 'AdminId' });
Transaksi.belongsTo(Admin, { foreignKey: 'AdminId' });

Hewan.hasMany(Transaksi, { foreignKey: 'HewanId' });
Transaksi.belongsTo(Hewan, { foreignKey: 'HewanId' });

Pakan.hasMany(Transaksi, { foreignKey: 'PakanId' });
Transaksi.belongsTo(Pakan, { foreignKey: 'PakanId' });



export default Pembeli