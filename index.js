import express from "express"
import "dotenv/config"
import "./model/index.js"
import router from "./routes/route.js"
const app = express()
const PORT = process.env.PORT

import bodyParser from "body-parser";
app.use(express.json());
app.use(bodyParser.json())
  app.use("/", router)

app.listen(PORT,() => {
    console.log("server running at http://localhost:" + PORT)
 })