import express from "express";
import "dotenv/config";
import "./model/index.js"; 
import db from "./utils/connection.js"; 
import cors from "cors";
import bodyParser from "body-parser";

import router from "./routes/route.js";
// import authRoute from "./routes/authRoute.js";
import AdminRoute from "./routes/AdminRoute.js";
import PembeliRoute from "./routes/PembeliRoute.js"; 
import TransaksiRoute from "./routes/TransaksiRoute.js";


const app = express();
const PORT = process.env.PORT; 

const corsOptions = {
  origin: "*",
  credentials: true, 
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(bodyParser.json());

app.use("/admin", AdminRoute);
// app.use("/auth", authRoute);
app.use("/pembeli", PembeliRoute);
app.use("/transaksi", TransaksiRoute);
app.use("/", router);

db.authenticate()
.then(()=>{
    console.log('masuk')
})
.catch=(err)=>{
    console.log(err)
}

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
