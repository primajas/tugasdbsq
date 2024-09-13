import Hewan from "../../model/Hewan.js";
import User from "../../model/UserModel.js";
import Transaksi from "../../model/Transaksi.js"

export default async function clean(){
    await User.destroy({
        where: {},
        force:true,
        cascade:true,
    })
    await Hewan.destroy({
        where:{},
        force:true,
        cascade:true,
    })
    await Transaksi.destroy({
        where:{},
        force:true,
        cascade:true,
    })
}