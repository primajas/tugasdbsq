import { DataTypes } from "sequelize";
import db from "../utils/connection.js";

const Hewan =db.define(
    "Hewan",{
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
    jenis:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    harga:{
        type:DataTypes.INTEGER,
        allowNull:false,
    }
},
{
    tableName:"hewan"
}
)

export default Hewan