import express from "express";
import "dotenv/config";
import "./model/index.js";
import router from "./routes/route.js";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
const PORT = process.env.PORT;

// Pasang CORS sebelum router
app.use(cors()); 

app.use(express.json());
app.use(bodyParser.json());

app.use("/", router);

app.listen(PORT, () => {
  console.log("server running at http://localhost:" + PORT);
});
