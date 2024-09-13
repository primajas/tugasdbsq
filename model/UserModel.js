import { DataTypes } from "sequelize";
import db from  "../utils/connection.js";
import Hewan from "./Hewan.js";
import Pakan from "./Pakan.js";
import Transaksi from "./Transaksi.js";
import Admin from "./Admin.js";

const User = db.define("User",{
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
    email:{
        type:DataTypes.STRING,
        allowNull:false,
    },
},
{
    tableName:"user"
}
);

User.hasMany(Hewan, { foreignKey: 'UserId' });
Hewan.belongsTo(User, { foreignKey: 'UserId' });

User.hasMany(Pakan, { foreignKey: 'UserId' });
Pakan.belongsTo(User, { foreignKey: 'UserId' });

User.hasMany(Transaksi, { foreignKey: 'UserId' });
Transaksi.belongsTo(User, { foreignKey: 'UserId' });

Admin.hasMany(Transaksi, { foreignKey: 'AdminId' });
Transaksi.belongsTo(Admin, { foreignKey: 'AdminId' });

Hewan.hasMany(Transaksi, { foreignKey: 'HewanId' });
Transaksi.belongsTo(Hewan, { foreignKey: 'HewanId' });

Pakan.hasMany(Transaksi, { foreignKey: 'PakanId' });
Transaksi.belongsTo(Pakan, { foreignKey: 'PakanId' });



export default User